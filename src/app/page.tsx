import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import FixedWidewidth from "@/components/FixedWidewidth";
export default function Home() {
  return (
    <FixedWidewidth className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="font-semibold text-sm text-gray-700">
          Dokchat is now public
        </p>
      </div>
      <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl">
        Chat with your <span className="text-blue-500">documents</span> in
        seconds
      </h1>
      <p className="mt-5 text-zinc-700 text-sm">
        {" "}
        Quill allows you to have conversations with any PDF document. Simply
        upload your file and start asking questions right away
      </p>
      <Link href="/dashboard">
        <Button className="mt-5 flex gap-2 px-6">
          Get Started <ArrowRight />
        </Button>
      </Link>
      <div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/dashboard-preview.jpg"
                alt="product preview"
                width={1364}
                height={866}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h1 className="text-center text-5xl font-bold font-gray mb-4">
          Start Chatting in minutes
        </h1>
        <p className="text-zinc-700">
          Chatting with your pdf files has never been easier than using dokchat
        </p>
      </div>

      <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 1</span>
            <span className="text-xl font-semibold">
              Sign up for an account
            </span>
            <span className="mt-2 text-zinc-700">
              Either starting out with a free plan or choose our{" "}
              <Link
                href="/pricing"
                className="text-blue-700 underline underline-offset-2"
              >
                pro plan
              </Link>
              .
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 2</span>
            <span className="text-xl font-semibold">Upload your PDF file</span>
            <span className="mt-2 text-zinc-700">
              We&apos;ll process your file and make it ready for you to chat
              with.
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 3</span>
            <span className="text-xl font-semibold">
              Start asking questions
            </span>
            <span className="mt-2 text-zinc-700">
              It&apos;s that simple. Try out Quill today - it really takes less
              than a minute.
            </span>
          </div>
        </li>
      </ol>
      <div>
        <Image
          src="/file-upload-preview.jpg"
          alt="upload"
          width={1419}
          height={732}
          quality={100}
          className="mt-4 p-4"
        />
      </div>
    </FixedWidewidth>
  );
}
