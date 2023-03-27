import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "@/components/Header";

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          src="https://emus-4u.org/wp-content/uploads/Instgram-Plus-Emus4u-700x700.png"
          alt="instagram-phone"
          className="hidden md:inline-flex md:w-60 object-cover rotate-6"
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                src="https://th.bing.com/th/id/R.4c3e30c8be83378f4b2018d1575d4c40?rik=KNNmdnGnXSmG6A&riu=http%3a%2f%2feternylstudios.com%2fwp-content%2fuploads%2f2019%2f02%2finstagram-logo-2.png&ehk=54peAG5doK0P0H8JDgLuZnYF8pFCddVHnHynKIIj2Mw%3d&risl=&pid=ImgRaw&r=0"
                alt="logo-insta"
                className="w-32 object-cover"
              />
              <p className="text-sm italic my-10 text-center">
                This app is created for educational purposes
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="bg-red-500 rounded-lg p-3 text-white hover:bg-red-600"
              >
                Sign In with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
