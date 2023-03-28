import { modalState } from "@/atom/modalAtom";
import React from "react";
import { useRecoilState } from "recoil";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);

  return <div>{open && <h1>The modal is open for business</h1>}</div>;
}
