import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";
import LeftHeader from "./LeftHeader";

function Feed() {
  const { data: session } = useSession();

  return (
    <div>
      <main
        className={`grid grid-cols-1  md:grid-cols-2 
      md:max-w-3xl xl:grid-cols-4 xl:max-w-6xl mx-auto  ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
      >
        {/* Section */}
        <section className="hidden xl:inline-grid md:col-span-1 dark:bg-black -ml-28 w-64  border-r border-gray-200 dark:border-gray-800 ">
          <div className="fixed top-20">
            <LeftHeader />
          </div>
        </section>

        <section className="md:inline-grid md:col-span-2 xl:col-span-2 xl:-ml-10">
          {/* stories */}
          <Stories />
          {/* post */}
          <Posts />
        </section>

        {/* section */}
        {session && (
          <section className="hidden xl:inline-grid md:col-span-1 -ml-2">
            <div className="fixed top-20">
              <MiniProfile />
              <Suggestions />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default Feed;
