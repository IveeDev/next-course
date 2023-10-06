import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

// Note we can only use this params on a server and page component
interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()} hello </p>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UserPage;
