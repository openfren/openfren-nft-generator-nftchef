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
    growEditionSizeTo: 9,
    namePrefix: "Lawyer",
    layersOrder: [
      { name: "Background" },
      { name: "Canine/Body", trait: "Primary Coat" },
      {
        name: "Canine/Gender",
        sublayerOptions: {
          "Gender": {trait: "Gender"},
          "2_Secondary": { trait: "Secondary Coat" },
          "1_Primary": { trait: "Expression" },
        },
      },
      {
        name: "Canine/Body_LA", options: {bypassDNA: false}
      },
      {
        name: "Canine/Clothing",
        trait: "Clothing",
        sublayerOptions: {
          "4_Multiply": { blend: "multiply" },
          options: {bypassDNA: false}
        },
      },
      {
        name: "Canine/Headwear",
        sublayerOptions: {
          "3_Multiply": { blend: "multiply" } },
      },
      {
        name: "Canine/Accessory",
        trait: "Accessory",
        sublayerOptions: { "3_Multiply": { blend: "multiply" } },
      },
      { name: "Canine/EyeWear", trait: "Eyewear" },
      { name: "Lawyer Card", trait: "Profession",
      sublayerOptions: {
        "2_Personality": { trait: "Personality" },
        "3_Quote": { trait: "Character Quote" },
        "Seniority": { trait: "Seniority" },
        "5_Rarity" : {trait: "Rarity"}
      },
    
    },
      // { name: "Card_Occupation_Lawyer", trait: "Occupation" },
    ],
  },

  {
      growEditionSizeTo: 10,
      namePrefix: "Lawyer",
    //   resetNameIndex: true, // this will start the Lion count at #1 instead of #6
      layersOrder: [
        { name: "Canine/Mythic A1/BG" },
        { name: "Canine/Mythic A1/Base" },
        { name: "Canine/Mythic A1/Body" },
        { name: "Canine/Mythic A1/Head" },
        { name: "Canine/Mythic A1/VFX" },
        { name: "Lawyer Card", trait: "Profession",
        sublayerOptions: {
          "2_Personality": { trait: "Personality" },
          "3_Quote": { trait: "Quote" },
          "Seniority": { trait: "Seniority" },
          "5_Rarity" : {trait: "Rarity"}
        },
      
      },
        
      ],
    },
    {
      growEditionSizeTo: 11,
      namePrefix: "Lawyer",
    //   resetNameIndex: true, // this will start the Lion count at #1 instead of #6
      layersOrder: [
        { name: "Canine/Mythic A2/BG" },
        { name: "Canine/Mythic A2/Base" },
        { name: "Canine/Mythic A2/Body" },
        { name: "Canine/Mythic A2/Head" },
        { name: "Canine/Mythic A2/VFX" },
        { name: "Lawyer Card", trait: "Profession",
        sublayerOptions: {
          "2_Personality": { trait: "Personality" },
          "3_Quote": { trait: "Quote" },
          "Seniority": { trait: "Seniority" },
          "5_Rarity" : {trait: "Rarity"}
        },
      
      },
        
      ],
    },
    {
      growEditionSizeTo: 12,
      namePrefix: "Lawyer",
    //   resetNameIndex: true, // this will start the Lion count at #1 instead of #6
      layersOrder: [
        { name: "Canine/Mythic A3/BG" },
        { name: "Canine/Mythic A3/Base" },
        { name: "Canine/Mythic A3/Body" },
        { name: "Canine/Mythic A3/Head" },
        { name: "Canine/Mythic A3/VFX" },
        { name: "Lawyer Card", trait: "Profession",
        sublayerOptions: {
          // "1_Background": { bypassDNA: true },
          "2_Personality": { trait: "Personality" },
          "3_Quote": { trait: "Quote" },
          "Seniority": { trait: "Seniority" },
          "5_Rarity" : {trait: "Rarity"}
        },
      
      },
        
      ],
    },
  {
    growEditionSizeTo: 13,
    namePrefix: "Investor", // Use to add a name to Metadata `name:`
    resetNameIndex: true,
    layersOrder: [
      { name: "Background" },
      { name: "Goblin/Body" },
      { name: "Goblin/Expression/Smug#10" },
      { name: "Goblin/Body Art" },
      { name: "Goblin/Hair" },
      {
        name: "Goblin/Clothing/Open Shoulder Dress#10",
        sublayerOptions: {
          "5_Mulitply": { blend: "multiply" },
        },
      },
      { name: "Goblin/Accessory" },
      { name: "Goblin/Eyewear" },
      { name: "Investor Card", trait: "Card" },
    ],
  },

  // Hat combinations (hats go on top), we wont reset the index

  {
    growEditionSizeTo: 14,
    namePrefix: "Investor", // Use to add a name to Metadata `name:`
    // resetNameIndex: true,
    layersOrder: [
      { name: "Background" },
      { name: "Goblin/Body" },
      { name: "Goblin/Expression" },
      { name: "Goblin/Body Art" },
      {
        name: "Goblin/Clothing",
        sublayerOptions: {
          "5_Mulitply": { blend: "multiply" },
        },
      },
      { name: "Goblin/Accessory" },
      { name: "Goblin/Eyewear" },
      { name: "Goblin/Hat" },
      { name: "Investor Card", trait: "Card" },
    ],
  },
  // mythical goblin 

  {
    growEditionSizeTo: 15,
    namePrefix: "Investor", // Use to add a name to Metadata `name:`
    // resetNameIndex: true,
    layersOrder: [
      { name: "Goblin/Mythical A1/Background" },
      { name: "Goblin/Mythical A1/Base" },
      { name: "Goblin/Mythical A1/Body" },
      { name: "Goblin/Mythical A1/Head" },
      { name: "Investor Card", trait: "Card" },
    ],
  },
  {
    growEditionSizeTo: 16,
    namePrefix: "Investor", // Use to add a name to Metadata `name:`
    // resetNameIndex: true,
    layersOrder: [
      { name: "Goblin/Mythical A2/Background" },
      { name: "Goblin/Mythical A2/Base" },
      { name: "Goblin/Mythical A2/Body" },
      { name: "Goblin/Mythical A2/Head" },
      { name: "Investor Card", trait: "Card" },
    ],
  },

  {
    growEditionSizeTo: 17,
    namePrefix: "Investor", // Use to add a name to Metadata `name:`
    // resetNameIndex: true,
    layersOrder: [
      { name: "Goblin/Mythical A3/Background" },
      { name: "Goblin/Mythical A3/Base" },
      { name: "Goblin/Mythical A3/Body" },
      { name: "Goblin/Mythical A3/Head" },
      { name: "Investor Card", trait: "Card" },
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
  Face_Mad_M: ["Aggressive", "Lawyer_Aggressive_1", "Lawyer_Aggressive_2"],
  Face_Great_M: [
    "Devious",
    "Lawyer_Devious_1",
    "Lawyer_Devious_2",
    "Lawyer_Devious_3",
    "Lawyer_Devious_4",
    "Lawyer_Devious_5",
    "Lawyer_Devious_6",
  ],
  Face_Shock_M: [
    "Optimistic",
    "Lawyer_Optimistic_1",
    "Lawyer_Optimistic_2",
    "Lawyer_Optimistic_3",
    "Lawyer_Optimistic_4",
    "Lawyer_Optimistic_5",
  ],
  Face_Sad_M: ["Regretful", "Lawyer_Regretful_1"],
  Face_Sus_M: ["Skeptical", "Lawyer_Skeptical_1", "Lawyer_Skeptical_2"],
  Face_Smirk_M: ["Smug", "Lawyer_Smug_1", "Lawyer_Smug_2", "Lawyer_Smug_3"],

  // Canine Female
  Face_Mad_F: ["Aggressive", "Lawyer_Aggressive_1", "Lawyer_Aggressive_2"],
  Face_Great_F: [
    "Devious",
    "Lawyer_Devious_1",
    "Lawyer_Devious_2",
    "Lawyer_Devious_3",
    "Lawyer_Devious_4",
    "Lawyer_Devious_5",
    "Lawyer_Devious_6",
  ],
  Face_Shock_F: [
    "Optimistic",
    "Lawyer_Optimistic_1",
    "Lawyer_Optimistic_2",
    "Lawyer_Optimistic_3",
    "Lawyer_Optimistic_4",
    "Lawyer_Optimistic_5",
  ],
  Face_Sad_F: ["Regretful", "Lawyer_Regretful_1"],
  Face_Sus_F: ["Skeptical", "Lawyer_Skeptical_1", "Lawyer_Skeptical_2"],
  Face_Smirk_F: ["Smug", "Lawyer_Smug_1", "Lawyer_Smug_2", "Lawyer_Smug_3"],

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
    "FaceRegretfulPrimary_regretful_2_B",
    "FaceOptimisticPrimary_02_optimistic_2_B",
  ],
  Base_Body_primary_C: [
    "FaceSmugPrimary_smug_C",
    "FaceDeviousPrimary_devious_C",
    "FaceAggressivePrimary_aggressive_C",
    "FaceRegretfulPrimary_regretful_2_C",
    "FaceOptimisticPrimary_02_optimistic_2_C",
  ],
  Base_Body_primary_D: [
    "FaceSmugPrimary_smug_D",
    "FaceDeviousPrimary_devious_D",
    "FaceAggressivePrimary_aggressive_D",
    "FaceRegretfulPrimary_regretful_2_D",
    "FaceOptimisticPrimary_02_optimistic_2_D",
  ],
  Base_Body_primary_E: [
    "FaceSmugPrimary_smug_E",
    "FaceDeviousPrimary_devious_E",
    "FaceAggressivePrimary_aggressive_E",
    "FaceRegretfulPrimary_regretful_2_E",
    "FaceOptimisticPrimary_02_optimistic_2_E",
  ],
  Base_Body_primary_F: [
    "FaceSmugPrimary_smug_F",
    "FaceDeviousPrimary_devious_F",
    "FaceAggressivePrimary_aggressive_F",
    "FaceRegretfulPrimary_regretful_2_F",
    "FaceOptimisticPrimary_02_optimistic_2_F",
  ],
  Base_Body_primary_G: [
    "FaceSmugPrimary_smug_G",
    "FaceDeviousPrimary_devious_G",
    "FaceAggressivePrimary_aggressive_G",
    "FaceRegretfulPrimary_regretful_2_G",
    "FaceOptimisticPrimary_02_optimistic_2_G",
  ],

  Base_Body_secondary_A_A: ["Base_Body_tertiary_A", "FaceSmugSecondary_smug_A"],
  Base_Body_secondary_A_B: ["Base_Body_tertiary_B", "FaceSmugSecondary_smug_B"],
  Base_Body_secondary_A_C: ["Base_Body_tertiary_C", "FaceSmugSecondary_smug_C"],
  Base_Body_secondary_A_D: ["Base_Body_tertiary_D", "FaceSmugSecondary_smug_D"],
  Base_Body_secondary_A_E: ["Base_Body_tertiary_E", "FaceSmugSecondary_smug_E"],
  Base_Body_secondary_A_F: ["Base_Body_tertiary_F", "FaceSmugSecondary_smug_F"],
  Base_Body_secondary_A_G: ["Base_Body_tertiary_G", "FaceSmugSecondary_smug_G"],
  Base_Body_secondary_B_A: ["Base_Body_tertiary_A", "FaceSmugSecondary_smug_A"],
  Base_Body_secondary_B_B: ["Base_Body_tertiary_B", "FaceSmugSecondary_smug_B"],
  Base_Body_secondary_B_C: ["Base_Body_tertiary_C", "FaceSmugSecondary_smug_C"],
  Base_Body_secondary_B_D: ["Base_Body_tertiary_D", "FaceSmugSecondary_smug_D"],
  Base_Body_secondary_B_E: ["Base_Body_tertiary_E", "FaceSmugSecondary_smug_E"],
  Base_Body_secondary_B_F: ["Base_Body_tertiary_F", "FaceSmugSecondary_smug_F"],
  Base_Body_secondary_B_G: ["Base_Body_tertiary_G", "FaceSmugSecondary_smug_G"],

  Cloths_03_tshirt_A: ["Cloths_03_smiley face_B"],
  Cloths_03_tshirt_B: ["Cloths_03_smiley face_A"],
  Cloths_03_tshirt_C: ["Cloths_03_smiley face_B"],
  Cloths_03_tshirt_D: ["Cloths_03_smiley face_B"],
  Cloths_03_tshirt_E: ["Cloths_03_smiley face_B"],
  Cloths_03_tshirt_F: ["Cloths_03_smiley face_B"],
  Cloths_03_tshirt_G: ["Cloths_03_smiley face_B"],

  // Goblin Personality

  FaceAggressiveMale_aggressive_: [
    "Aggressive",
    "Investor_Aggressive_1",
    "Investor_Aggressive_2",
    "Investor_Agressive_3",
  ],
  FaceAggressiveFemale_aggressive_: [
    "Aggressive",
    "Investor_Aggressive_1",
    "Investor_Aggressive_2",
    "Investor_Agressive_3",
  ],
  FaceDeviousMale_devious_: [
    "Devious",
    "Investor_Devious_1",
    "Investor_Devious_2",
    "Investor_Devious_3",
    "Investor_Devious_4",
    "Investor_Devious_5",
  ],
  FaceDeviousFemale_devious_: [
    "Devious",
    "Investor_Devious_1",
    "Investor_Devious_2",
    "Investor_Devious_3",
    "Investor_Devious_4",
    "Investor_Devious_5",
  ],
  FaceRegretfulMale_02_regretful_2_: [
    "Regretful",
    "Investor_Regretful_1",
    "Investor_Regretful_2",
  ],
  FaceRegretfulFemale_02_regretful_2_: [
    "Regretful",
    "Investor_Regretful_1",
    "Investor_Regretful_2",
  ],
  FaceSmugMale_smug_: [
    "Smug",
    "Investor_Smug_1",
    "Investor_Smug_2",
    "Investor_Smug_3",
    "Investor_Smug_4",
    "Investor_Smug_5",
    "Investor_Smug_6",
  ],
  FaceSmugFemale_smug_: [
    "Smug",
    "Investor_Smug_1",
    "Investor_Smug_2",
    "Investor_Smug_3",
    "Investor_Smug_4",
    "Investor_Smug_5",
    "Investor_Smug_6",
  ],
  FaceOptimisticMale_02_optimistic_2_: [
    "Optimistic",
    "Investor_Optimistic_1",
    "Investor_Optimistic_2",
    "Investor_Optimistic_3",
    "Investor_Optimistic_4",
    "Investor_Optimistic_5",
    "Investor_Optimistic_6",
  ],
  FaceOptimisticFemale_02_optimistic_2_: [
    "Optimistic",
    "Investor_Optimistic_1",
    "Investor_Optimistic_2",
    "Investor_Optimistic_3",
    "Investor_Optimistic_4",
    "Investor_Optimistic_5",
    "Investor_Optimistic_6",
  ],
  FaceSkepticalMale_skeptical_: [
    "Skeptical",
    "Investor_Skeptical_1",
    "Investor_Skeptical_2",
  ],
  FaceSkepticalFemale_skeptical_: [
    "Skeptical",
    "Investor_Skeptical_1",
    "Investor_Skeptical_2",
  ],
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
