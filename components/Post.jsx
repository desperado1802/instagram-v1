import React, { useEffect, useRef, useState } from "react";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db, storage } from "@/firebase";
import Moment from "react-moment";
import { deleteObject, ref } from "firebase/storage";

export default function Post({ username, userImg, img, caption, id, userId }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [deleteButton, setDeleteButton] = useState(false);
  const deleteButtonRef = useRef(null);

  async function sendComment(e) {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
    });
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", id, "likes"),
      (snapshot) => {
        setLikes(snapshot.docs);
      }
    );
  }, [db]);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);

  async function likePost() {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, id]);

  async function deletePost() {
    if (
      window.confirm("Are yo sure you want to delete this post?") &&
      session.user.uid === userId
    ) {
      await deleteDoc(doc(db, "posts", id));
      await deleteObject(ref(storage, `posts/${id}/image`));
    }
  }

  useEffect(() => {
    function handleClickOutsideDeleteButton(event) {
      if (
        deleteButtonRef.current &&
        !deleteButtonRef.current.contains(event.target)
      ) {
        setDeleteButton(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutsideDeleteButton);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDeleteButton);
    };
  }, [deleteButtonRef]);

  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}

      <div className="flex items-center p-5 relative">
        <img
          className="h-12 w-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon
          onClick={() => setDeleteButton(!deleteButton)}
          className="h-5 cursor-pointer"
        />
        {deleteButton && session.user.uid === userId && (
          <div
            ref={deleteButtonRef}
            onClick={deletePost}
            className="bg-white border hover:bg-gray-50 border-gray-300 absolute bottom-[-6px] right-5 flex items-center p-2 cursor-pointer rounded-md"
          >
            <TrashIcon className="btn text-red-500" />
            <p className="text-red-500">Delete Post</p>
          </div>
        )}
      </div>
      {/* Post Image */}
      <img className="object-cover w-full" src={img} alt="insta-image" />

      {/* Post Buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4 items-center">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="btn text-red-500"
              />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}

            <ChatIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      {likes.length > 0 && (
        <p className="font-bold my-1 px-4">
          {likes.length} {likes.length > 1 ? "likes" : "like"}
        </p>
      )}

      {/* Post Comments */}
      <p className="p-5  truncate">
        <span className="font-bold mr-2">{username}</span> {caption}
      </p>
      {comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
          {comments.map((comment, id) => (
            <div key={id} className="flex items-center space-x-2 mb-2">
              <img
                className="h-7 w-7 rounded-full object-cover  "
                src={comment?.data().userImg}
                alt="user-image"
              />
              <p className="font-semibold">{comment?.data().username}</p>
              <p className="flex-1 truncate">{comment?.data().comment}</p>
              <Moment className="text-sm text-gray-500" fromNow>
                {comment?.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {/* Post Input Box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            className="border-none flex-1 focus:ring-0"
            type="text"
            placeholder="Enter your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            className="text-blue-400 font-bold disabled:text-blue-200"
            onClick={sendComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}
