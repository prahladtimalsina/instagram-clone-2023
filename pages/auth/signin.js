import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
//...borwser
function signIn({ providers }) {
  return (<>
      <Header />
      <div
        className="flex flex-col items-center justify-center min-h-screen
       py-2 -mt-50 px-14 text-center dark:bg-gray-500"
      >
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-xs italic">
          This is not a real App,it is built for educational purposes only
        </p>
        <div className="mt-40">
          {Object.values(providers).map(provider => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
//middle server side render
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
export default signIn;
