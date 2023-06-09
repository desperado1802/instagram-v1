import Feed from "@/components/Feed";
import Header from "@/components/Header";
import UploadModal from "@/components/UploadModal";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram v1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <Header />

        {/* Feed */}
        <Feed />
        {/* Modal */}
        <UploadModal />
      </div>
    </>
  );
}
