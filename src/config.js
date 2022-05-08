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

  // Canine Hat
  {
    growEditionSizeTo: 1,
    namePrefix: "Lawyer",
    layersOrder: [
      { name: "Background" },
      { name: "Canine/Body", trait: "Primary Coat" },
      {
        name: "Canine/Gender",
        sublayerOptions: {
          "2_Secondary": { trait: "Secondary Coat" },
          "1_Primary": { trait: "Expression" },
        },
      },
      {
        name: "Canine/Body_LA",
        options: { bypassDNA: true },
        sublayerOptions: {
          "1_Primary": { trait: "LineArt" },
          "4_LineArt": { trait: "LineArt" },
        },
      },
      {
        name: "Canine/Clothing",
        trait: "Clothing",
        sublayerOptions: {
          "4_Multiply": { blend: "multiply", trait: "Multiply" },
        },
      },
      {
        name: "Canine/Hat",
        trait: "Hat",
        sublayerOptions: {
          "3_Multiply": { blend: "multiply", trait: "Multiply" },
        },
      },
      {
        name: "Canine/Accessory",
        trait: "Accessory",
        sublayerOptions: {
          "3_Multiply": { blend: "multiply", trait: "Multiply" },
        },
      },
      { name: "Canine/EyeWear", trait: "Eyewear" },
      {
        name: "Lawyer Card",
        trait: "Profession",
        sublayerOptions: {
          "2_Personality": { trait: "Personality" },
          "3_Quote": { trait: "Character Quote" },
          Seniority: { trait: "Seniority" },
        },
      },
      { name: "Lawyer Card Rarity/Premium", trait: "Rarity" },
    ],
  },

  // // Canine Hair
  {
    growEditionSizeTo: 2,
    namePrefix: "Lawyer",
    layersOrder: [
      { name: "Background" },
      { name: "Canine/Body", trait: "Primary Coat" },
      {
        name: "Canine/Gender",
        sublayerOptions: {
          "2_Secondary": { trait: "Secondary Coat" },
          "1_Primary": { trait: "Expression" },
        },
      },
      {
        name: "Canine/Body_LA",
        options: { bypassDNA: true },
        sublayerOptions: {
          "1_Primary": { trait: "LineArt" },
          "4_LineArt": { trait: "LineArt" },
        },
      },
      {
        name: "Canine/Clothing",
        trait: "Clothing",
        sublayerOptions: {
          "4_Multiply": { blend: "multiply", trait: "Multiply" },
        },
      },
      {
        name: "Canine/Hair",
        trait: "Hair",
        sublayerOptions: {
          "3_Multiply": { blend: "multiply", trait: "Multiply" },
        },
      },
      {
        name: "Canine/Accessory",
        trait: "Accessory",
        sublayerOptions: {
          "3_Multiply": { blend: "multiply", trait: "Multiply" },
        },
      },
      { name: "Canine/EyeWear", trait: "Eyewear" },
      {
        name: "Lawyer Card",
        trait: "Profession",
        sublayerOptions: {
          "2_Personality": { trait: "Personality" },
          "3_Quote": { trait: "Character Quote" },
          Seniority: { trait: "Seniority" },
        },
      },
      { name: "Lawyer Card Rarity/Premium", trait: "Rarity" },
    ],
  },

  // CANINE MYTHIC

  {
    growEditionSizeTo: 3,
    namePrefix: "Lawyer",
    layersOrder: [
      { name: "Canine/Mythic A1/BG", trait: "Background" },
      {
        name: "Canine/Mythic A1/Base",
        trait: "Base",
        sublayerOptions: {
          "1_Primary": { trait: "Flair" },
        },
      },
      {
        name: "Canine/Mythic A1/Body",
        sublayerOptions: {
          "1_Primary": { trait: "Shirt" },
          "2_Secondary": { trait: "Jacket" },
          "3_Tertiary": { trait: "Robe" },
          "6_LineArt": { trait: "LineArt" },
        },
      },
      { name: "Canine/Mythic A1/Head", sublayerOptions: {
        "1_Primary": { trait: "Hair" },
        "2_Secondary": { trait: "Mask Modifier" },
        "3_Tertiary": { trait: "Mask" },
        "4_Layer": { trait: "Accessory" },
        "6_LineArt": { trait: "LineArt" },
      } },
      { name: "Canine/Mythic A1/VFX", trait: "VFX" },
      {
        name: "Lawyer Card",
        trait: "Profession",
        sublayerOptions: {
          "2_Personality": { trait: "Personality" },
          "3_Quote": { trait: "Quote" },
          Seniority: { trait: "Seniority" },
        },
      },
      { name: "Lawyer Card Rarity/Mythic", trait: "Rarity" },
    ],
  },

  {
    growEditionSizeTo: 4,
    namePrefix: "Lawyer",
    //   resetNameIndex: true, // this will start the Lion count at #1 instead of #6
    layersOrder: [
      { name: "Canine/Mythic A2/BG", trait: "Background" },
      {
        name: "Canine/Mythic A2/Base",
        trait: "Base",
        sublayerOptions: {
          "1_Primary": { trait: "Flair" },
        },
      },
      {
        name: "Canine/Mythic A2/Body",
        sublayerOptions: {
          "1_Primary": { trait: "Shirt" },
          "2_Secondary": { trait: "Jacket" },
          "3_Tertiary": { trait: "Robe" },
          "6_LineArt": { trait: "LineArt" },
        },
      },
      { name: "Canine/Mythic A2/Head", sublayerOptions: {
        "1_Primary": { trait: "Hair" },
        "2_Secondary": { trait: "Mask Modifier" },
        "3_Tertiary": { trait: "Mask" },
        "4_Layer": { trait: "Accessory" },
        "6_LineArt": { trait: "LineArt" },
      } },
      { name: "Canine/Mythic A2/VFX", trait: "VFX" },
      {
        name: "Lawyer Card",
        trait: "Profession",
        sublayerOptions: {
          "2_Personality": { trait: "Personality" },
          "3_Quote": { trait: "Quote" },
          Seniority: { trait: "Seniority" },
        },
      },
      { name: "Lawyer Card Rarity/Mythic", trait: "Rarity" },
    ],
  },
  
  {
    growEditionSizeTo: 5,
    namePrefix: "Lawyer",
    //   resetNameIndex: true, // this will start the Lion count at #1 instead of #6
    layersOrder: [
      { name: "Canine/Mythic A3/BG", trait: "Background" },
      {
        name: "Canine/Mythic A3/Base",
        trait: "Base",
        sublayerOptions: {
          "1_Primary": { trait: "Flair" },
        },
      },
      {
        name: "Canine/Mythic A3/Body",
        sublayerOptions: {
          "1_Primary": { trait: "Shirt" },
          "2_Secondary": { trait: "Jacket" },
          "3_Tertiary": { trait: "Robe" },
          "6_LineArt": { trait: "LineArt" },
        },
      },
      { name: "Canine/Mythic A3/Head", sublayerOptions: {
        "1_Primary": { trait: "Hair" },
        "2_Secondary": { trait: "Mask Modifier" },
        "3_Tertiary": { trait: "Mask" },
        "4_Layer": { trait: "Accessory" },
        "6_LineArt": { trait: "LineArt" },
      } },
      { name: "Canine/Mythic A3/VFX", trait: "VFX" },
      {
        name: "Lawyer Card",
        trait: "Profession",
        sublayerOptions: {
          "2_Personality": { trait: "Personality" },
          "3_Quote": { trait: "Quote" },
          Seniority: { trait: "Seniority" },
        },
      },
      { name: "Lawyer Card Rarity/Mythic", trait: "Rarity" },
    ],
  },

  // Goblin Investor

  {
    growEditionSizeTo: 6,
    namePrefix: "Investor", // Use to add a name to Metadata `name:`
    resetNameIndex: true,
    layersOrder: [
      { name: "Background" },
      {
        name: "Goblin/Body",
        sublayerOptions: {
          "1_Layer": { trait: "Primary Coat" },
          "2_Layer": { trait: "Seconary Coat" },
          "3_Layer": { trait: "Ears" },
          "6_LA": { trait: "LineArt" },
        },
      },
      {
        name: "Goblin/Expression",
        sublayerOptions: {
          "6_Gender": { trait: "Expression" },
        },
      },
      { name: "Goblin/Body Art" },
      { name: "Goblin/Hair", trait: "Hair" },
      {
        name: "Goblin/Clothing",
        trait: "Clothing",
        sublayerOptions: {
          "5_Mulitply": { blend: "multiply", trait: "Multiply" },
        },
      },
      { name: "Goblin/Accessory", trait: "Accessory" },
      { name: "Goblin/Eyewear", trait: "Eyewear" },
      {
        name: "Investor Card",
        trait: "Profession",
        sublayerOptions: {
          "2_Personality": { trait: "Personality" },
          "3_Quote": { trait: "Quote" },
          Seniority: { trait: "Seniority" },
        },
      },
      { name: "Investor Card Rarity/Premium", trait: "Rarity" },
    ],
  },

  // Hat combinations (hats go on top), we wont reset the index

  {
    growEditionSizeTo: 7,
    namePrefix: "Investor", // Use to add a name to Metadata `name:`
    resetNameIndex: true,
    layersOrder: [
      { name: "Background" },
      {
        name: "Goblin/Body",
        sublayerOptions: {
          "1_Layer": { trait: "Primary Coat" },
          "2_Layer": { trait: "Seconary Coat" },
          "3_Layer": { trait: "Ears" },
          "6_LA": { trait: "LineArt" },
        },
      },
      {
        name: "Goblin/Expression",
        sublayerOptions: {
          "6_Gender": { trait: "Expression" },
        },
      },
      { name: "Goblin/Body Art" },
      {
        name: "Goblin/Clothing",
        trait: "Clothing",
        sublayerOptions: {
          "5_Mulitply": { blend: "multiply", trait: "Multiply" },
        },
      },
      { name: "Goblin/Accessory", trait: "Accessory" },
      { name: "Goblin/Eyewear", trait: "Eyewear" },
      { name: "Goblin/Hat", trait: "Hat" },
      {
        name: "Investor Card",
        trait: "Profession",
        sublayerOptions: {
          "2_Personality": { trait: "Personality" },
          "3_Quote": { trait: "Quote" },
          Seniority: { trait: "Seniority" },
        },
      },
      { name: "Investor Card Rarity/Premium", trait: "Rarity" },
    ],
  },

  // Goblin Mythic

  // Use Investor Smug 6 for the pirate quote
  {
    growEditionSizeTo: 8,
    namePrefix: "Investor", // Use to add a name to Metadata `name:`
    // resetNameIndex: true,
    layersOrder: [
      {
        name: "Goblin/Mythical A1/Background",
        sublayerOptions: {
          "6_Layer": { trait: "Background" },
        },
      },
      { name: "Goblin/Mythical A1/Base",
      sublayerOptions: {
        "6_Layer": { trait: "Flair" },
      },
    
    },
      { name: "Goblin/Mythical A1/Body",
      sublayerOptions: {
        "1_Layer": { trait: "Jacket" },
        "2_Layer": { trait: "Inner Cloths" },
        "6_Layer": { trait: "LineArt" },
      },
    },
      { name: "Goblin/Mythical A1/Head" ,
      sublayerOptions: {
        "1_Layer": { trait: "Beard" },
        "2_Layer": { trait: "Hat" },
        "3_Layer": { trait: "Accessory" },
        "4_Layer": { trait: "Hat Modifier" },
        "6_Layer": { trait: "LineArt" },
      },
    
    },
      { name: "Investor Card", trait: "Profession" },
      { name: "Investor Card Rarity/Mythic", trait: "Rarity" },
    ],
  },
  {
    growEditionSizeTo: 9,
    namePrefix: "Investor", // Use to add a name to Metadata `name:`
    // resetNameIndex: true,
    layersOrder: [
      {
        name: "Goblin/Mythical A2/Background",
        sublayerOptions: {
          "6_Layer": { trait: "Background" },
        },
      },
      { name: "Goblin/Mythical A2/Base",
      sublayerOptions: {
        "6_Layer": { trait: "Flair" },
      },
    
    },
      { name: "Goblin/Mythical A2/Body",
      sublayerOptions: {
        "1_Layer": { trait: "Jacket" },
        "2_Layer": { trait: "Inner Cloths" },
        "6_Layer": { trait: "LineArt" },
      },
    },
      { name: "Goblin/Mythical A2/Head" ,
      sublayerOptions: {
        "1_Layer": { trait: "Beard" },
        "2_Layer": { trait: "Hat" },
        "3_Layer": { trait: "Accessory" },
        "4_Layer": { trait: "Hat Modifier" },
        "6_Layer": { trait: "LineArt" },
      },
    
    },
      { name: "Investor Card", trait: "Profession" },
      { name: "Investor Card Rarity/Mythic", trait: "Rarity" },
    ],
  },

  {
    growEditionSizeTo: 10,
    namePrefix: "Investor", // Use to add a name to Metadata `name:`
    // resetNameIndex: true,
    layersOrder: [
      {
        name: "Goblin/Mythical A3/Background",
        sublayerOptions: {
          "6_Layer": { trait: "Background" },
        },
      },
      { name: "Goblin/Mythical A3/Base",
      sublayerOptions: {
        "6_Layer": { trait: "Flair" },
      },
    
    },
      { name: "Goblin/Mythical A3/Body",
      sublayerOptions: {
        "1_Layer": { trait: "Jacket" },
        "2_Layer": { trait: "Inner Cloths" },
        "6_Layer": { trait: "LineArt" },
      },
    },
      { name: "Goblin/Mythical A3/Head" ,
      sublayerOptions: {
        "1_Layer": { trait: "Beard" },
        "2_Layer": { trait: "Hat" },
        "3_Layer": { trait: "Accessory" },
        "4_Layer": { trait: "Hat Modifier" },
        "6_Layer": { trait: "LineArt" },
      },
    
    },
      { name: "Investor Card", trait: "Profession" },
      { name: "Investor Card Rarity/Mythic", trait: "Rarity" },
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
  "Aggresive Masculine": [
    "Aggressive",
    "Lawyer Aggressive 1",
    "Lawyer Aggressive 2",
  ],
  "Devious Masculine": [
    "Devious",
    "Lawyer Devious 1",
    "Lawyer Devious 2",
    "Lawyer Devious 3",
    "Lawyer Devious 4",
    "Lawyer Devious 5",
    "Lawyer Devious 6",
  ],
  "Optimistic Masculine": [
    "Optimistic",
    "Lawyer Optimistic 1",
    "Lawyer Optimistic 2",
    "Lawyer Optimistic 3",
    "Lawyer Optimistic 4",
    "Lawyer Optimistic 5",
  ],
  "Regretful Masculine": ["Regretful", "Lawyer Regretful 1"],
  "Skeptical Masculine": [
    "Skeptical",
    "Lawyer Skeptical 1",
    "Lawyer Skeptical 2",
  ],
  "Smug Masculine": ["Smug", "Lawyer Smug 1", "Lawyer Smug 2", "Lawyer Smug 3"],

  // Canine Female
  "Aggresive Feminine": [
    "Aggressive",
    "Lawyer Aggressive 1",
    "Lawyer Aggressive 2",
  ],
  "Devious Feminine": [
    "Devious",
    "Lawyer Devious 1",
    "Lawyer Devious 2",
    "Lawyer Devious 3",
    "Lawyer Devious 4",
    "Lawyer Devious 5",
    "Lawyer Devious 6",
  ],
  "Optimistic Feminine": [
    "Optimistic",
    "Lawyer Optimistic 1",
    "Lawyer Optimistic 2",
    "Lawyer Optimistic 3",
    "Lawyer Optimistic 4",
    "Lawyer Optimistic 5",
  ],
  "Regretful Feminine": ["Regretful", "Lawyer Regretful 1"],
  "Skeptical Feminine": [
    "Skeptical",
    "Lawyer Skeptical 1",
    "Lawyer Skeptical 2",
  ],
  "Smug Feminine": ["Smug", "Lawyer Smug 1", "Lawyer Smug 2", "Lawyer Smug 3"],

  // Goblin Forced Expressions

  Yellow: [
    "FaceSmugPrimary_smug_A",
    "FaceDeviousPrimary_devious_A",
    "FaceAggressivePrimary_aggressive_A",
    "FaceRegretfulPrimary_regretful_2_A",
    "FaceOptimisticPrimary_02_optimistic_2_A",
  ],
  White: [
    "FaceSmugPrimary_smug_B",
    "FaceDeviousPrimary_devious_B",
    "FaceAggressivePrimary_aggressive_B",
    "FaceRegretfulPrimary_regretful_2_B",
    "FaceOptimisticPrimary_02_optimistic_2_B",
  ],
  Red: [
    "FaceSmugPrimary_smug_C",
    "FaceDeviousPrimary_devious_C",
    "FaceAggressivePrimary_aggressive_C",
    "FaceRegretfulPrimary_regretful_2_C",
    "FaceOptimisticPrimary_02_optimistic_2_C",
  ],
  Pink: [
    "FaceSmugPrimary_smug_D",
    "FaceDeviousPrimary_devious_D",
    "FaceAggressivePrimary_aggressive_D",
    "FaceRegretfulPrimary_regretful_2_D",
    "FaceOptimisticPrimary_02_optimistic_2_D",
  ],
  Green: [
    "FaceSmugPrimary_smug_E",
    "FaceDeviousPrimary_devious_E",
    "FaceAggressivePrimary_aggressive_E",
    "FaceRegretfulPrimary_regretful_2_E",
    "FaceOptimisticPrimary_02_optimistic_2_E",
  ],
  Blue: [
    "FaceSmugPrimary_smug_F",
    "FaceDeviousPrimary_devious_F",
    "FaceAggressivePrimary_aggressive_F",
    "FaceRegretfulPrimary_regretful_2_F",
    "FaceOptimisticPrimary_02_optimistic_2_F",
  ],
  Black: [
    "FaceSmugPrimary_smug_G",
    "FaceDeviousPrimary_devious_G",
    "FaceAggressivePrimary_aggressive_G",
    "FaceRegretfulPrimary_regretful_2_G",
    "FaceOptimisticPrimary_02_optimistic_2_G",
  ],

  // Goblin Secondary Forced Combinations

  "Cornsilk Yellow Inner Body": [
    "Light Yellow Inner Ears",
    "FaceSmugSecondary_smug_A",
  ],
  "Cream Inner Body": ["Cream Inner Ears", "FaceSmugSecondary_smug_B"],
  "Light Pink Inner Body": [
    "Light Orange Inner Ears",
    "FaceSmugSecondary_smug_C",
  ],
  "Light Orange Inner Body": [
    "Light Pink Inner Ears",
    "FaceSmugSecondary_smug_D",
  ],
  "Light Green Inner Body": [
    "Light Green Inner Ears",
    "FaceSmugSecondary_smug_E",
  ],
  "Orange Peach Inner Body": [
    "Orange Peach Inner Ears",
    "FaceSmugSecondary_smug_F",
  ],
  "Light Green Inner Body": [
    "Light Green Inner Ears",
    "FaceSmugSecondary_smug_G",
  ],

  "Cornsilk Yellow Inner Shade": [
    "Light Yellow Inner Ears",
    "FaceSmugSecondary_smug_A",
  ],
  "Cream Inner Shade": ["Cream Inner Ears", "FaceSmugSecondary_smug_B"],
  "Light Orange Inner Shade": [
    "Light Orange Inner Ears",
    "FaceSmugSecondary_smug_C",
  ],
  "Light Pink Inner Shade": [
    "Light Pink Inner Ears",
    "FaceSmugSecondary_smug_D",
  ],
  "Light Green Inner Shade": [
    "Light Green Inner Ears",
    "FaceSmugSecondary_smug_E",
  ],
  "Orange Peach Inner Shade": [
    "Orange Peach Inner Ears",
    "FaceSmugSecondary_smug_F",
  ],
  "Light Green Inner Shade": [
    "Light Green Inner Ears",
    "FaceSmugSecondary_smug_G",
  ],

  "Green Double Layer Shirt": ["Cloths_03_smiley face_B"],
  "Yellow Double Layer Shirt": ["Cloths_03_smiley face_A"],
  "Blue Double Layer Shirt": ["Cloths_03_smiley face_B"],
  "Black Double Layer Shirt": ["Cloths_03_smiley face_B"],
  "Orange Double Layer Shirt": ["Cloths_03_smiley face_B"],
  "Pink Double Layer Shirt": ["Cloths_03_smiley face_B"],
  "Red Double Layer Shirt": ["Cloths_03_smiley face_B"],

  // Goblin Personality

  "Aggressive Masculine": [
    "Aggressive",
    "Investor Aggressive 1",
    "Investor Aggressive 2",
    "Investor Aggressive 3",
  ],
  "Aggressive Feminine": [
    "Aggressive",
    "Investor Aggressive 1",
    "Investor Aggressive 2",
    "Investor Aggressive 3",
  ],
  "Devious Masculine": [
    "Devious",
    "Investor Devious 1",
    "Investor Devious 2",
    "Investor Devious 3",
    "Investor Devious 4",
    "Investor Devious 5",
  ],
  "Devious Feminine": [
    "Devious",
    "Investor Devious 1",
    "Investor Devious 2",
    "Investor Devious 3",
    "Investor Devious 4",
    "Investor Devious 5",
  ],
  "Regretful Masculine": [
    "Regretful",
    "Investor Regretful 1",
    "Investor Regretful 2",
  ],
  "Regretful Feminine": [
    "Regretful",
    "Investor Regretful 1",
    "Investor Regretful 2",
  ],
  "Smug Masculine": [
    "Smug",
    "Investor Smug 1",
    "Investor Smug 2",
    "Investor Smug 3",
    "Investor Smug 4",
    "Investor Smug 5",
    "Investor Smug 6",
  ],
  "Smug Feminine": [
    "Smug",
    "Investor Smug 1",
    "Investor Smug 2",
    "Investor Smug 3",
    "Investor Smug 4",
    "Investor Smug 5",
    "Investor Smug 6",
  ],
  "Optimistic Masculine": [
    "Optimistic",
    "Investor Optimistic 1",
    "Investor Optimistic 2",
    "Investor Optimistic 3",
    "Investor Optimistic 4",
    "Investor Optimistic 5",
    "Investor Optimistic 6",
  ],
  "Optimistic Feminine": [
    "Optimistic",
    "Investor Optimistic 1",
    "Investor Optimistic 2",
    "Investor Optimistic 3",
    "Investor Optimistic 4",
    "Investor Optimistic 5",
    "Investor Optimistic 6",
  ],
  "Skepitcal Masculine": [
    "Skeptical",
    "Investor Skeptical 1",
    "Investor Skeptical 2",
  ],
  "Skepitcal Feminine": [
    "Skeptical",
    "Investor Skeptical 1",
    "Investor Skeptical 2",
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
