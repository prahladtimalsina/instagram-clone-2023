// import faker from "faker";
import faker from "@faker-js/faker";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Story from "./Story";
function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    // console.log(suggestions);
    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border
     rounded-lg overflow-x-scroll scrollbar-thin scrollbar-thumb-black dark:bg-black  dark:text-gray-300 dark:border-gray-800"
    >
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map(profile => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
