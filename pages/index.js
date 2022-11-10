import Head from 'next/head'
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Model from "../components/Model";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide dark:bg-[#121212]">
      <Head>
        <title>Instagram-2.0-prahlad-timalsina</title>
        <link rel="icon" href="/instagram_prahlad.ico" />
      </Head>
      <Model />

      <Header />
      {session ? (
        <Feed />
      ) : (
        <div>
          <div className="flex justify-center  ">
            <div className="hidden md:inline-flex">
              <div className="relative  h-[30rem] w-80 max-w-2xl">
                <Image
                  src="/images/instagram.png"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-3xl"
                />
              </div>
              {/* <div className="absolute h-74 w-44 ml-[6.5rem] inset-y-0 items-center cursor-pointer ">
                <Image src="/images/1.jpg" layout="fill" objectFit="contain" />
                <Image src="/images/2.jpg" layout="fill" objectFit="contain" />
                <Image src="/images/3.jpg" layout="fill" objectFit="contain" />
              </div> */}
            </div>

            <div className="w-full max-w-sm  border border-gray-200 bg-white  dark:bg-gray-800 dark:border-gray-700 p-10">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <img
                    className="w-44 flex "
                    src="https://links.papareact.com/ocw"
                    alt=""
                  />
                  <input
                    className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 dark:text-gray-200 text-gray-700 border border-gray-200 dark:border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-name"
                    type="text"
                    placeholder="Phone number, username, or email"
                  />
                  <input
                    className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    placeholder="password"
                  />
                  <div className="justify-center inline-flex flex-grow w-full">
                    <button className="bg-blue-500 opacity-70 text-white p-2 text-xs w-full rounded-lg">
                      Log In
                    </button>
                  </div>
                  <div className="text-gray-400 justify-center p-2 inline-flex flex-grow w-full">
                    ----------------------------------OR-----------------------------------
                  </div>

                  <div className="text-blue-900 text-xs font-bold p-3 justify-center inline-flex flex-grow w-full">
                    <p className="dark:text-blue-500 cursor-pointer">
                      Log in with Facebook
                    </p>
                  </div>
                  <div className="text-blue-900 text-xs  p-2 justify-center inline-flex flex-grow w-full">
                    <p className="dark:text-blue-500 cursor-pointer">
                      Forgot password?
                    </p>
                  </div>

                  <div className="border bg-white dark:bg-gray-800 dark:border-gray-500 border-gray-200 space-x-2  text-xs  p-3 justify-center inline-flex flex-grow w-full">
                    <span className="dark:text-gray-200">
                      Don't have an account?
                    </span>
                    <p className="text-blue-900 dark:text-blue-500 cursor-pointer">
                      Sign up
                    </p>
                  </div>
                  <div className=" text-xs  p-2 justify-center inline-flex flex-grow w-full">
                    <p> Get the app.</p>
                  </div>
                  <div className="flex justify-center gap-x-2">
                    <Image
                      src="/images/apple.png"
                      height={50}
                      width={150}
                      objectFit="contain"
                      className="cursor-pointer"
                    />
                    <Image
                      src="/images/google.png"
                      height={50}
                      width={150}
                      objectFit="contain"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <div>
        <div className="flex justify-evenly">
          <div>
          <div className="relative  h-[30rem] w-80 max-w-2xl">
            <Image
              src="/images/homepage_login.png"
              layout="fill"
              objectFit="contain"
              className=''
            />
            
          </div>
          <div className='absolute h-74 w-44 ml-[6.5rem] inset-y-0 items-center  '>
           <Image src="/images/1.jpg" layout='fill' objectFit='contain' />
           <Image src="/images/2.jpg" layout='fill' objectFit='contain' />
           <Image src="/images/3.jpg" layout='fill' objectFit='contain' />
          </div>
          </div>
          
          
          <div>form</div>
        </div>
      </div> */}
    </div>
  );
}
