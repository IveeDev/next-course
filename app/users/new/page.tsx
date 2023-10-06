"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <>
      <div>This is NewUserPages</div>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        users
      </button>
    </>
  );
};

export default NewUserPage;
