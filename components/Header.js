import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modelatom";
function Header() {
  const { data: session } = useSession();
  // console.log(session);
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const ThemChange = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-5 h-5"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-5 h-5"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50 dark:bg-[#121212] dark:border-gray-700">
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto dark:bg-[#121212] ">
        {/* left */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden  w-24 lg:inline-grid cursor-pointer "
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer  "
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle  search input field*/}
        <div className="max-w-xs hidden md:inline-flex">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="bg-gray-50 block w-full pl-10 sm:text-sm
          border-gray-300 focus:ring-black focus:border-black rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 "
              placeholder="Search"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon
            onClick={() => router.push("/")}
            className="navBtn dark:text-gray-100 "
          />
          <MenuIcon className="h-6 md:hidden cursor-pointer dark:text-gray-100" />
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45 dark:text-gray-100" />
                <div
                  className="absolute -top-1 -right-2 text-xs w-5 h-5 
             bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white"
                >
                  7
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn1 dark:text-gray-100"
              />
              <UserGroupIcon className="navBtn dark:text-gray-100" />
              <HeartIcon className="navBtn dark:text-gray-100" />
              <img
                onClick={signOut}
                src={session.user.image}
                alt="profile pic"
                className="h-10 w-10
          rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn} className="dark:text-white">
              Sign In
            </button>
          )}
          <div className="flex items-center h-6 dark:text-gray-100">
            {ThemChange()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
