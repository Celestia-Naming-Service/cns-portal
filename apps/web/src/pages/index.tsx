import { useKeplr } from "./components/keplr";

const MOCHA_PARAMS = {
  chainId: "mocha",
  chainName: "Mocha Testnet",
  rpc: "https://rpc-mocha.pops.one",
  rest: "https://api-mocha.pops.one/",
};
export default function Web() {
  const [KeplrComponentAddWallet, keplr] = useKeplr({ params: MOCHA_PARAMS });
  return (
    <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 h-screen">
      <div className="relative py-5 bg-white/10">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="sm:px-16 text-center">
            <p className="sm:text-4xl text-3xl text-white/90">
              <span>CNS</span>
              <span className="overline">Demo</span>
            </p>
          </div>
        </div>
      </div>

      

      <div className="py-12 px-6 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
          <div className="bg-white/90 rounded-md py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" method="POST" noValidate>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  CNS Name (e.g. &#39;pratham.tia&#39;)
                </label>
                <div className="mt-1">
                  <input
                    name="CNS Name"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <span className="items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">
                  Connected {keplr && keplr.version ? "✅" : "❌"}
                </span>
                {keplr && keplr.version ? (
                  <button className=" flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-5">
                    Claim your Name!
                  </button>
                ) : (
                  <div className="mt-5">
                    <KeplrComponentAddWallet />
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
