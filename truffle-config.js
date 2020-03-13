require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remember exchange half enter off gather'; 
let testAccounts = [
"0x62960ffe0547b2ef04f8fb6885df228cc8ffc143ae5cff7d87a74138f2f6ae92",
"0xb49d5774832ef77c7cb7a1c4db2b4d48383b2bbe61a982b7ae5390d64a944d15",
"0x8b5eff39732baf82472b7dd39bc75cdb42f99f54ac91edec582c6fa5a6ad3e8c",
"0x935b7bc108c6bef09c24daefc0f663ec06b8716e1a95a4fc52422707f5698d19",
"0xb2c6c175c9e5d621eae9709c542464c4199980a8169ceef9653a703fc4ee5442",
"0xd19caa18d0020a572c56c22ea99c6f18b4d97f38d81d4bb0df18763ebcd945ec",
"0x369a6e1167947991fc9e645752bff0528d79b9594abd55ceffc0faf9346419eb",
"0x3e59f9f24903349d7cc195055674c2eb93ef2d755daba9e59d34aeece420693a",
"0xb60704d65267bfd97d547cc8c7b7fd6c3fb68d4b406f67da27963ec4083eb993",
"0x95415163a0c7ae2e257a431f09807c255d3e0fe9013d2a888d08548a2689bbed"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
