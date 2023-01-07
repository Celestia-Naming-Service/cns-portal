import { useKeplr } from "../components/keplr";
const MOCHA_PARAMS = {
  chainId: 'mocha',
  chainName: 'Mocha Testnet',
  rpc: 'https://rpc-mocha.pops.one',
  rest: 'https://api-mocha.pops.one/'
}
export default async function Web() {
  const [KeplrComponent, keplr] = useKeplr({params: MOCHA_PARAMS});
  return (
    <div>
      <h1>Web</h1>
      <KeplrComponent />
      { keplr && (
        keplr.version
      )}
    </div>
  );
}
