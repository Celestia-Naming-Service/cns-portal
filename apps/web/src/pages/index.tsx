import { useKeplr } from "./components/keplr";
import { Blob } from "proto";
import { StdSignature } from "@keplr-wallet/types";
import { useState } from "react";

const writer = Blob.encode(Blob.create({ addressOwner: "test" }));
const bytes = writer.finish();

const MOCHA_PARAMS = {
  chainId: "mocha",
  chainName: "Mocha Testnet",
  rpc: "https://rpc-mocha.pops.one",
  rest: "https://api-mocha.pops.one/",
};
export default function Web() {
  const [signed, setSigned] = useState();
  const [KeplrComponentAddWallet, keplrSigner] = useKeplr({ params: MOCHA_PARAMS });
  return (
    <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500">
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
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
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
                  Connected {keplrSigner ? "✅" : "❌"}
                </span>
                {keplrSigner ? (
                  <button onClick={() => keplrSigner(bytes)} className=" flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-5">
                    Claim your Name!
                  </button>
                ) : (
                  <div className="mt-5">
                    <KeplrComponentAddWallet />
                  </div>
                )}
                {signed}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="py-16 sm:py-24 bg-slate-50/10">
        <div className="relative sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3x" />
            <svg
              className="absolute top-8 left-1/2 -ml-3"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-100"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-sky-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-sky-500 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-sky-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Get notified when we&rsquo;re launching.
                  </h2>
                </div>
                <form
                  action="#"
                  className="mt-12 sm:mx-auto sm:flex sm:max-w-lg"
                >
                  <div className="min-w-0 flex-1">
                    <label htmlFor="cta-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent bg-sky-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600 sm:px-10"
                    >
                      Notify me
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
