import React from "react";
import FixedWidewidth from "@/components/FixedWidewidth";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/dist/server/api-utils";

const Page = () => {
  const { getUser } = getKindeServerSession();
    const user = getUser();
    if (!user) redirect('/auth-callback?origin=dashboard');

  return (
      <FixedWidewidth className="mb-12 mt-28  flex flex-col items-center justify-center text-center">
          <p>{user.then((usr)=> usr.email)}</p>
    </FixedWidewidth>
  );
};

export default Page;
