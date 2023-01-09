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
    <div className="">
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <span className="text-3xl font-mono font-bold">CNS</span>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Connect your wallet
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
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
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="">
                  <span className="">
                    {keplr ? (
                      <KeplrComponentAddWallet />
                    ) : (
                      <KeplrComponentAddWallet />
                    )}
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
