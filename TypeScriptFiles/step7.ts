import { mnemonicToWalletKey } from "ton-crypto";
import { WalletContractV3R2 } from "ton/dist/wallets/WalletContractV3R2";

async function main() {
  // open wallet v4 (notice the correct wallet version here)
  const mnemonic = "..."; // your 24 secret words (replace ... with the rest of the words)
  const key = await mnemonicToWalletKey(mnemonic.split(" "));
  const wallet = WalletContractV3R2.create({ publicKey: key.publicKey, workchain: 0 });

  // print wallet address
  console.log(wallet.address.toString({ testOnly: true }));

  // print wallet workchain
  console.log("workchain:", wallet.address.workChain);
}

main();
