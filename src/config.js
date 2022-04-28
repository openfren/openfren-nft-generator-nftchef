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
    growEditionSizeTo: 1,
    namePrefix: "Lawyer",
    layersOrder: [
      { name: "Background" },
      { name: "Canine/Body", trait: "Primary Coat" },
      {
        name: "Canine/Gender",
        sublayerOptions: {
          "1_Body": { trait: "Secondary Coat" },
          "2_Personality": { trait: "Expression" },
        },
      },
      { name: "Canine/Body_LA", bypassDNA: true },
      {
        name: "Canine/Clothing",
        trait: "Clothing",
        sublayerOptions: {
          "4_Multiply": { blend: "multiply" },
        },
      },
      {
        name: "Canine/Headwear",
        trait: "Headwear",
        sublayerOptions: { "3_Multiply": { blend: "multiply" } },
      },
      {
        name: "Canine/Accessory",
        trait: "Accessory",
        sublayerOptions: { "3_Multiply": { blend: "multiply" } },
      },
      { name: "Canine/EyeWear", trait: "Eyewear" },
      { name: "Lawyer Card", trait: "Card" },
      // { name: "Card_Occupation_Lawyer", trait: "Occupation" },
    ],
  },
  {
    growEditionSizeTo: 10,
    namePrefix: "Investor", // Use to add a name to Metadata `name:`
    resetNameIndex: true,
    layersOrder: [
      { name: "Background" },
      { name: "Goblin/Body" },
      { name: "Goblin/Expression/Smug#10" },
      { name: "Goblin/Clothing" },
      { name: "Goblin/Headwear" },
      { name: "Goblin/Accessory" },
      { name: "Goblin/Eyewear" },
      { name: "Investor Card", trait: "Card" },
    ],
  },
  // {
  //   growEditionSizeTo: 10,
  //   namePrefix: "Lawyer",
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Canine/Base Body", trait: "Primary Coat" },
  //     {
  //       name: "Canine/Gender",
  //       sublayerOptions: {
  //         "1_Body": { trait: "Secondary Coat" },
  //         "2_Personality": { trait: "Expression" },
  //       },
  //     },
  //     {
  //       name: "Canine/Cloth", trait: "Cloth",
  //       sublayerOptions: {
  //         "4_Multiply": { blend: "multiply" } },
  //     },
  //     {
  //       name: "Canine/Hat", trait: "Headwear",
  //       sublayerOptions: { "3_Multiply": { blend: "multiply" } },
  //     },
  //     {
  //       name: "Canine/Face", trait: "Accessory",
  //       sublayerOptions: { "3_Multiply": { blend: "multiply" } },
  //     },
  //     { name: "Canine/EyeWear", trait: "Eyewear" },
  //     { name: "Lawyer Card" , trait: "Card",
  //       sublayerOptions: {

  //         "1_Background" : {bypassDNA : true }
  //     }},
  //     { name: "Card_Occupation_Lawyer", trait: "Occupation" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 15,
  //   namePrefix: "Investor", // Use to add a name to Metadata `name:`
  //   resetNameIndex: true,
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Goblin/Base Body" },
  //     { name: "Goblin/Base Secondary" },
  //     { name: "Goblin/Personality" },
  //     { name: "Goblin/Base LA" },
  //     { name: "Goblin/Face" },
  //     { name: "Card" },
  //     { name: "Card_Occupation_Investor" },

  //     // { name: "Clothes" },
  //     // { name: "Eyes" },
  //     // { name: "Hair" },
  //     // { name: "Head Accessory" },
  //     // { name: "Shirt Accessories" },
  //   ],
  // },
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
  Face_Mad_M: ["Aggressive", "Lawyer_Aggressive_1"],
  Face_Mad_M: ["Aggressive", "Lawyer_Aggressive_2"],
  Face_Great_M: ["Devious", "Lawyer_Devious_1"],
  Face_Great_M: ["Devious", "Lawyer_Devious_2"],
  Face_Great_M: ["Devious", "Lawyer_Devious_3"],
  Face_Great_M: ["Devious", "Lawyer_Devious_4"],
  Face_Great_M: ["Devious", "Lawyer_Devious_5"],
  Face_Great_M: ["Devious", "Lawyer_Devious_6"],
  Face_Shock_M: ["Optimistic", "Lawyer_Optimistic_1"],
  Face_Shock_M: ["Optimistic", "Lawyer_Optimistic_2"],
  Face_Shock_M: ["Optimistic", "Lawyer_Optimistic_3"],
  Face_Shock_M: ["Optimistic", "Lawyer_Optimistic_4"],
  Face_Shock_M: ["Optimistic", "Lawyer_Optimistic_5"],
  Face_Sad_M: ["Regretful", "Lawyer_Regretful_1"],
  Face_Sus_M: ["Skeptical", "Lawyer_Skeptical_1"],
  Face_Sus_M: ["Skeptical", "Lawyer_Skeptical_2"],
  Face_Smirk_M: ["Smug", "Lawyer_Smug_1"],
  Face_Smirk_M: ["Smug", "Lawyer_Smug_2"],
  Face_Smirk_M: ["Smug", "Lawyer_Smug_3"],

  // Canine Female
  Face_Mad_F: ["Aggressive", "Lawyer_Aggressive_1"],
  Face_Mad_F: ["Aggressive", "Lawyer_Aggressive_2"],
  Face_Great_F: ["Devious", "Lawyer_Devious_1"],
  Face_Great_F: ["Devious", "Lawyer_Devious_2"],
  Face_Great_F: ["Devious", "Lawyer_Devious_3"],
  Face_Great_F: ["Devious", "Lawyer_Devious_4"],
  Face_Great_F: ["Devious", "Lawyer_Devious_5"],
  Face_Great_F: ["Devious", "Lawyer_Devious_6"],
  Face_Shock_F: ["Optimistic", "Lawyer_Optimistic_1"],
  Face_Shock_F: ["Optimistic", "Lawyer_Optimistic_2"],
  Face_Shock_F: ["Optimistic", "Lawyer_Optimistic_3"],
  Face_Shock_F: ["Optimistic", "Lawyer_Optimistic_4"],
  Face_Shock_F: ["Optimistic", "Lawyer_Optimistic_5"],
  Face_Sad_F: ["Regretful", "Lawyer_Regretful_1"],
  Face_Sus_F: ["Skeptical", "Lawyer_Skeptical_1"],
  Face_Sus_F: ["Skeptical", "Lawyer_Skeptical_2"],
  Face_Smirk_F: ["Smug", "Lawyer_Smug_1"],
  Face_Smirk_F: ["Smug", "Lawyer_Smug_2"],
  Face_Smirk_F: ["Smug", "Lawyer_Smug_3"],

  // Goclin Forced combinations

  Base_Body_primary_A: [
    "FaceSmugPrimary_smug_A",
    "FaceDeviousPrimary_devious_A",
    "FaceAggressivePrimary_aggressive_A",
    "FaceRegretfulPrimary_regretful_2_A",
    "FaceOptimisticPrimary_02_optimistic_2_A",
  ],
  Base_Body_primary_B: [
    "FaceSmugPrimary_smug_B",
    "FaceDeviousPrimary_devious_B",
    "FaceAggressivePrimary_aggressive_B",
    "FaceRegretfulPrimary_regretful_2_C",
    "FaceOptimisticPrimary_02_optimistic_2_B",
  ],
  Base_Body_primary_C: [
    "FaceSmugPrimary_smug_C",
    "FaceDeviousPrimary_devious_C",
    "FaceAggressivePrimary_aggressive_C",
    "FaceRegretfulPrimary_regretful_2_E",
    "FaceOptimisticPrimary_02_optimistic_2_C",
  ],
  Base_Body_primary_D: [
    "FaceSmugPrimary_smug_D",
    "FaceDeviousPrimary_devious_D",
    "FaceAggressivePrimary_aggressive_D",
    "FaceRegretfulPrimary_regretful_2_B",
    "FaceOptimisticPrimary_02_optimistic_2_D",
  ],
  Base_Body_primary_E: [
    "FaceSmugPrimary_smug_E",
    "FaceDeviousPrimary_devious_E",
    "FaceAggressivePrimary_aggressive_E",
    "FaceRegretfulPrimary_regretful_2_D",
    "FaceOptimisticPrimary_02_optimistic_2_E",
  ],
  Base_Body_primary_F: [
    "FaceSmugPrimary_smug_F",
    "FaceDeviousPrimary_devious_F",
    "FaceAggressivePrimary_aggressive_F",
    "FaceRegretfulPrimary_regretful_2_G",
    "FaceOptimisticPrimary_02_optimistic_2_F",
  ],
  Base_Body_primary_G: [
    "FaceSmugPrimary_smug_G",
    "FaceDeviousPrimary_devious_G",
    "FaceAggressivePrimary_aggressive_G",
    "FaceRegretfulPrimary_regretful_2_F",
    "FaceOptimisticPrimary_02_optimistic_2_G",
  ],

  Base_Body_secondary_A_A: ["Base_Body_tertiary_A", "FaceSmugSecondary_smug_A"],
  Base_Body_secondary_A_B: ["Base_Body_tertiary_B", "FaceSmugSecondary_smug_B"],
  Base_Body_secondary_A_C: ["Base_Body_tertiary_C", "FaceSmugSecondary_smug_C"],
  Base_Body_secondary_A_D: ["Base_Body_tertiary_D", "FaceSmugSecondary_smug_D"],
  Base_Body_secondary_A_E: ["Base_Body_tertiary_E", "FaceSmugSecondary_smug_E"],
  Base_Body_secondary_A_F: ["Base_Body_tertiary_F", "FaceSmugSecondary_smug_F"],
  Base_Body_secondary_B_A: ["Base_Body_tertiary_A", "FaceSmugSecondary_smug_A"],
  Base_Body_secondary_B_B: ["Base_Body_tertiary_B", "FaceSmugSecondary_smug_B"],
  Base_Body_secondary_B_C: ["Base_Body_tertiary_C", "FaceSmugSecondary_smug_C"],
  Base_Body_secondary_B_D: ["Base_Body_tertiary_D", "FaceSmugSecondary_smug_D"],
  Base_Body_secondary_B_E: ["Base_Body_tertiary_E", "FaceSmugSecondary_smug_E"],
  Base_Body_secondary_B_F: ["Base_Body_tertiary_F", "FaceSmugSecondary_smug_F"],
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
