import { AVMAPI, KeyChain } from "@c4tplatform/caminojs/dist/apis/avm";

//create type configuration
type AvalancheXChain = {
    xKeyChain : KeyChain,
    xchain: AVMAPI,
    avaxAssetID: string,
    addressStrings :string[],
    xAddresses: any[];
}

//export 
export default AvalancheXChain;