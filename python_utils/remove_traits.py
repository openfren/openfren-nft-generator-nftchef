#!/usr/bin/env python
import subprocess
# subprocess.run(["ls", "-l"])

traits = ["LineArt", "1_Primary", "4_LineArt", "1_Layer", "2_Layer", "Multiply", "6_LA"]

for trait in traits:
    print(f'Removing {trait} from json')
    subprocess.run(["node", "/Users/mo/code/openfren/openfren-nft-generator-nftchef/utils/removeTrait.js", trait])
    print(f'Removing {trait} from Solana json')
    subprocess.run(["node", "/Users/mo/code/openfren/openfren-nft-generator-nftchef/utils/removeTraitSolana.js", trait])
