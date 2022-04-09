require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy reward stereo property install lobster fresh spin'; 
let testAccounts = [
"0xeb5ab200fa0a6accf3fbb8d66cb884085e30d06bf1c51f84221a6d4bbce92866",
"0x5651c149483ec31f8c954e184922638d10dd6178dbc717dbf0a1accb8bcfa6c8",
"0x231537cffb5723483e1016d553d0c0d0e3b1835143fbd2885ed12d8f21883a5b",
"0xaf5df7f31c72777044501ff12b1d20f6211f6fb45015202ef06e1645b081a3f9",
"0xd9bb7cc2985fc2e20a88eeb375611404ed1565690974a003e3435f920cdbc5d0",
"0x26962c9b871047ee5384b4a49d75b8baf94afd0a5c2766f49ae3aa555cb43ba8",
"0x9c7bed1900383a9d6686ef341881db47ebbc9b2c677c9e32d6c1a862baeae575",
"0xb4669e3c0431f24d79d9c798cebf21b0e4c893b407f888a053a5f30bebed4377",
"0x1c28705c493b157df764f85d3b9adfa06d9ad70bb506c70ba663c3e28b7d1ca0",
"0xfd45db0ce47b43ac62eaad56ab2cf67bb92b1cf4119dedf940b6f5d80ec084f9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


