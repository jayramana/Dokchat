"use client";
import React, { useState } from "react";
import { QueryClient } from "@tanstack/react-query";
import { client } from "@/app/_trpc/client";
import { httpBatchLink } from "@trpc/client";

const Providers = () => {
  const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() => client.createClient({
        links: [
      httpBatchLink({ url: "https://localhost:3000/api/trpc" }),
  ]}));
  return <div>Providers</div>;
};

export default Providers;
