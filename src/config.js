"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));

const buildDir = path.join(basePath, "/build");
const layersDir = path.join(basePath, "/layers");

/*********************
 * General Generator Options
 ***********************/

const description =
  "The founding frens collections contains 1700 hand crafted NFTs of Investors & Lawyers in the OpenFren ecosystem";
const baseUri = "ipfs://NewUriToReplace";

const outputJPEG = false; // if false, the generator outputs png's

/**
 * Set your tokenID index start number.
 * ⚠️ Be sure it matches your smart contract!
 */
const startIndex = 0;

const format = {
  width: 1748,
  height: 2480,
  smoothing: true, // set to false when up-scaling pixel art.
};

const background = {
  generate: false,
  brightness: "80%",
};

const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    namePrefix: "Lawyer",
    layersOrder: [
      { name: "Background" },
      { name: "Canine/Base Body", trait: "Primary Coat" },
      {
        name: "Canine/Gender",
        sublayerOptions: {
          "1_Body": { trait: "Secondary Coat" },
          "2_Personality": { trait: "Expression" },
        },
      },
      {
        name: "Canine/Cloth", trait: "Cloth",
        sublayerOptions: { 
          "4_Multiply": { blend: "multiply" } },
      },
      {
        name: "Canine/Hat", trait: "Headwear",
        sublayerOptions: { "3_Multiply": { blend: "multiply" } },
      },
      {
        name: "Canine/Face", trait: "Accessory",
        sublayerOptions: { "3_Multiply": { blend: "multiply" } },
      },
      { name: "Canine/EyeWear", trait: "Eyewear" },
      { name: "Lawyer Card" , trait: "Card", 
        sublayerOptions: {

          "1_Background" : {bypassDNA : true }
      }},
      { name: "Card_Occupation_Lawyer", trait: "Occupation" },
    ],
  },
  {
    growEditionSizeTo: 15,
    namePrefix: "Investor", // Use to add a name to Metadata `name:`
    resetNameIndex: true,
    layersOrder: [
      { name: "Background" },
      { name: "Goblin/Base Body" },
      { name: "Goblin/Base Secondary" },
      { name: "Goblin/Personality" },
      { name: "Goblin/Base LA" },
      { name: "Goblin/Face" },
      { name: "Card" },
      { name: "Card_Occupation_Investor" },

      // { name: "Clothes" },
      // { name: "Eyes" },
      // { name: "Hair" },
      // { name: "Head Accessory" },
      // { name: "Shirt Accessories" },
    ],
  },
  // {
  //   growEditionSizeTo: 10,
  //   namePrefix: "Lion",
  //   resetNameIndex: true, // this will start the Lion count at #1 instead of #6
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Hats" },
  //     { name: "Male Hair" },
  //   ],
  // },
];

/**
 * Set to true for when using multiple layersOrder configuration
 * and you would like to shuffle all the artwork together
 */
const shuffleLayerConfigurations = false;

const debugLogs = true;

/*********************
 * Advanced Generator Options
 ***********************/

// if you use an empty/transparent file, set the name here.
const emptyLayerName = "NONE";

/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 */
const incompatible = {
  //   Red: ["Dark Long"],
  //   // directory incompatible with directory example
  //   White: ["rare-Pink-Pompadour"],
};

/**
 * Require combinations of files when constructing DNA, this bypasses the
 * randomization and weights.
 *
 * The layer order matters here, the key (left side) is an item within
 * the layer that comes first in the stack.
 * the items in the array are "required" items that should be pulled from folders
 * further in the stack
 */
const forcedCombinations = {
  // floral: ["MetallicShades", "Golden Sakura"],
  Face_Great_M: ["Optimistic"],
  Face_Mad_M: ["Annoyed"],
  Face_Sad_M: ["Dissapointed"],
  Face_Shock_M: ["Surprised"],
  Face_Smirk_M: ["Smug"],
  Face_Sus_M: ["Suspicious"],
  Face_Great_F: ["Optimistic"],
  Face_Mad_F: ["Annoyed"],
  Face_Sad_F: ["Dissapointed"],
  Face_Shock_F: ["Surprised"],
  Face_Smirk_F: ["Smug"],
  Face_Sus_F: ["Suspicious"],
};

/**
 * In the event that a filename cannot be the trait value name, for example when
 * multiple items should have the same value, specify
 * clean-filename: trait-value override pairs. Wrap filenames with spaces in quotes.
 */
const traitValueOverrides = {
  Helmet: "Space Helmet",
  "gold chain": "GOLDEN NECKLACE",
};

const extraMetadata = {};

const extraAttributes = () => [
  // Optionally, if you need to overwrite one of your layers attributes.
  // You can include the same name as the layer, here, and it will overwrite
  //
  // {
  // trait_type: "Bottom lid",
  //   value: ` Bottom lid # ${Math.random() * 100}`,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Aqua Power",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Health",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Mana",
  //   value: Math.floor(Math.random() * 100),
  // },
];

// Outputs an Keccack256 hash for the image. Required for provenance hash
const hashImages = true;

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

/**
 * Set to true to always use the root folder as trait_type
 * Set to false to use weighted parent folders as trait_type
 * Default is true.
 */
const useRootTraitType = true;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  background,
  baseUri,
  buildDir,
  debugLogs,
  description,
  emptyLayerName,
  extraAttributes,
  extraMetadata,
  forcedCombinations,
  format,
  hashImages,
  incompatible,
  layerConfigurations,
  layersDir,
  outputJPEG,
  preview,
  preview_gif,
  rarityDelimiter,
  shuffleLayerConfigurations,
  startIndex,
  traitValueOverrides,
  uniqueDnaTorrance,
  useRootTraitType,
};
