import React, { useState } from "react";
import { StdSignature } from "@keplr-wallet/types"

type Keplr = NonNullable<typeof window.keplr>;
type Params = {
  chainId: string;
  chainName: string;
  rpc: string;
  rest: string;
};
type useKeplrProps = {
  params: Params;
};
type AddNetworkKeplrProps = useKeplrProps & {
  setKeplr: React.Dispatch<React.SetStateAction<Keplr | undefined>>;
};
export function useKeplr({ params, cb }: any): [React.FC, ((bytes: Uint8Array) => Promise<StdSignature>) | undefined] {
  const [keplr, setKeplr] = useState<Keplr>();
  function signerFn(keplr: Keplr | undefined) {
    return keplr && (async (bytes: Uint8Array) => keplr.signArbitrary(params.chainId, (await keplr.getKey(params.chainId)).name, bytes))
  }
  return [AddNetworkKeplr({ params, setKeplr }), signerFn(keplr)];
}

function AddNetworkKeplr({ params, setKeplr }: AddNetworkKeplrProps): React.FC {
  function KeplrComponentAddWallet() {
    async function add() {
      if (!window.keplr) {
        alert("Please install keplr extension");
      } else {
        if (window.keplr.experimentalSuggestChain) {
          try {
            await window.keplr.experimentalSuggestChain({
              chainId: params.chainId,
              chainName: params.chainName,
              rpc: params.rpc,
              rest: params.rest,
              bip44: {
                coinType: 118,
              },
              bech32Config: {
                bech32PrefixAccAddr: "celestia",
                bech32PrefixAccPub: "celestia" + "pub",
                bech32PrefixValAddr: "celestia" + "valoper",
                bech32PrefixValPub: "celestia" + "valoperpub",
                bech32PrefixConsAddr: "celestia" + "valcons",
                bech32PrefixConsPub: "celestia" + "valconspub",
              },
              currencies: [
                {
                  coinDenom: "TIA",
                  coinMinimalDenom: "utia",
                  coinDecimals: 6,
                  coinGeckoId: "celestia",
                },
              ],
              feeCurrencies: [
                {
                  coinDenom: "TIA",
                  coinMinimalDenom: "utia",
                  coinDecimals: 6,
                  coinGeckoId: "celestia",
                  gasPriceStep: {
                    low: 0.01,
                    average: 0.025,
                    high: 0.04,
                  },
                },
              ],
              stakeCurrency: {
                coinDenom: "TIA",
                coinMinimalDenom: "utia",
                coinDecimals: 6,
                coinGeckoId: "celestia",
              },
            });
          } catch {
            alert("Failed to suggest the chain");
          }
        }
        const chainId = params.chainId;
        // Enabling before using the Keplr is recommended.
        // This method will ask the user whether to allow access if they haven't visited this website.
        // Also, it will request that the user unlock the wallet if the wallet is locked.
        await window.keplr.enable(chainId);
        setKeplr(window.keplr);
      }
    }

    return (
      <div>
        <button
          className=" flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          onClick={add}
          type="button"
        >
          Connect To Keplr with Celestia: {params.chainName}
        </button>
      </div>
    );
  }
  return KeplrComponentAddWallet;
}
