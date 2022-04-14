# OpenFren NFT Generation Application

This project generates NFT collections for openfren. The base source code is forked form NFTChefts hard fork of Hashlips Art Engine see [ Github ](https://github.com/nftchef/art-engine)

Project Location: https://github.com/openfren/openfren-nft-generator-nftchef

## Preparing

* Create folders (folders are attributes)
* Put layers into the folders
* Update config.js with 
  * Correct environment, solana addresses

### Nesting Folders
The priority for nested folders appears to follow [0-9][a-z] with definite layers taking a priority. E.g If you set your lineart.png to be last but it doesn't have a rarity
it will be put on top of the layers with rarity.

Working Structure

Eyeware
  1_Base
    Base01#50.png
  2_Secondary
    Secondary01#50.png
  3_Texture
    Texture#100.png
  4_LA
    LineArt#100.png

## Creator Accounts

### Development
Use : 8DAT4vBjpDixqswJUuFgxtQnCPSQKzUVGPZBmUtofVvL

### Production
Use: 8DAT4vBjpDixqswJUuFgxtQnCPSQKzUVGPZBmUtofVvL
  
## Generation
* Update config with collection configuration
* Run `yarn generate`

## Upload and Update 
* Upload images to ipfs (potentially using ipfs , pinata , metaplex)
* Update json metadata with storage information (CID) and run `yarn update`

## Split mint
* Split collection in 2
* Create candy machine with batch 2 and see if this works


# Resources
A collection of resources

## FAQ

Question on solana base URI: https://discord.com/channels/889036571385409556/889627143204655135/961166881518157835

Ignoreing blank images from the metadata: https://discord.com/channels/889036571385409556/889627143204655135/961063953822269470
## Youtube Videos
Haslips Eth Master Class: https://www.youtube.com/watch?v=Zhmj4PiJ-GA&t=494s

