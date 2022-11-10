import { Menu, Transition } from "@headlessui/react";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  ChatIcon,
  HeartIcon,
  PlusCircleIcon,
  MenuIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { Fragment } from "react";
import { useRecoilState } from "recoil";

import LeftHeaderItem from "./LeftHeaderItem";
import MiniProfile from "./MiniProfile";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function LeftHeader() {
  return (
    <div className="flex flex-col sm:flex-row m-5 ">
      <div className="flex flex-col flex-grow justify-evenly max-w-2xl w-[230px] ">
        <LeftHeaderItem
          onClick={() => router.push("/")}
          title="Home"
          Icon={HomeIcon}
        />
        <LeftHeaderItem title="Search" Icon={SearchIcon} />
        <LeftHeaderItem title="Explore" Icon={LightningBoltIcon} />
        <LeftHeaderItem title="Message" Icon={ChatIcon} />
        <LeftHeaderItem title="Notifications" Icon={HeartIcon} />
        {/* <LeftHeaderItem
          onClick={() => setOpenModel(true)}
          title="Create"
          Icon={PlusCircleIcon}
        /> */}
        <LeftHeaderItem title="Profile" Icon={UserIcon} />

        <>
          <Menu as="div" className="relative inline-block text-left ">
            <div>
              <Menu.Button className="w-full">
                <LeftHeaderItem title="More" Icon={MenuIcon} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute -top-48 -mb-2 z-10 mt-2 w-56 origin-top-right rounded-md dark:bg-[#262626]  bg-white shadow-lg  focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 dark:bg-[#121212] dark:text-gray-200"
                            : "text-black dark:text-white",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Setting
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 dark:bg-[#121212] dark:text-gray-200"
                            : "text-black dark:text-white",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Saved
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 dark:bg-[#121212] dark:text-gray-200"
                            : "text-black dark:text-white",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Report a Problem
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 dark:bg-[#121212] dark:text-gray-200"
                            : "text-black dark:text-white",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Switch Accounts
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 dark:bg-[#121212] dark:text-gray-200"
                            : "text-black dark:text-white",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Logout
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </>
      </div>
    </div>
  );
}

export default LeftHeader;
