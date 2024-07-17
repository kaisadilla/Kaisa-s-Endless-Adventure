console.info("Loading startup_scripts/logs_require_axe.js");

const LOG_BLOCKS = [
    "minecraft:oak_log",
    "minecraft:oak_wood",
    "minecraft:stripped_oak_log",
    "minecraft:stripped_oak_wood",

    "minecraft:birch_log",
    "minecraft:birch_wood",
    "minecraft:stripped_birch_log",
    "minecraft:stripped_birch_wood",

    "minecraft:spruce_log",
    "minecraft:spruce_wood",
    "minecraft:stripped_spruce_log",
    "minecraft:stripped_spruce_wood",

    "minecraft:jungle_log",
    "minecraft:jungle_wood",
    "minecraft:stripped_jungle_log",
    "minecraft:stripped_jungle_wood",

    "minecraft:acacia_log",
    "minecraft:acacia_wood",
    "minecraft:stripped_acacia_log",
    "minecraft:stripped_acacia_wood",

    "minecraft:dark_oak_log",
    "minecraft:dark_oak_wood",
    "minecraft:stripped_dark_oak_log",
    "minecraft:stripped_dark_oak_wood",

    "minecraft:crimson_stem",
    "minecraft:crimson_hyphae",
    "minecraft:stripped_crimson_stem",
    "minecraft:stripped_crimson_hyphae",

    "minecraft:warped_stem",
    "minecraft:warped_hyphae",
    "minecraft:stripped_warped_stem",
    "minecraft:stripped_warped_hyphae",

    "biomesoplenty:fir_log",
    "biomesoplenty:fir_wood",
    "biomesoplenty:stripped_fir_log",
    "biomesoplenty:stripped_fir_wood",

    "biomesoplenty:redwood_log",
    "biomesoplenty:redwood_wood",
    "biomesoplenty:stripped_redwood_log",
    "biomesoplenty:stripped_redwood_wood",

    "biomesoplenty:cherry_log",
    "biomesoplenty:cherry_wood",
    "biomesoplenty:stripped_cherry_log",
    "biomesoplenty:stripped_cherry_wood",

    "biomesoplenty:mahogany_log",
    "biomesoplenty:mahogany_wood",
    "biomesoplenty:stripped_mahogany_log",
    "biomesoplenty:stripped_mahogany_wood",

    "biomesoplenty:jacaranda_log",
    "biomesoplenty:jacaranda_wood",
    "biomesoplenty:stripped_jacaranda_log",
    "biomesoplenty:stripped_jacaranda_wood",

    "biomesoplenty:palm_log",
    "biomesoplenty:palm_wood",
    "biomesoplenty:stripped_palm_log",
    "biomesoplenty:stripped_palm_wood",

    "biomesoplenty:willow_log",
    "biomesoplenty:willow_wood",
    "biomesoplenty:stripped_willow_log",
    "biomesoplenty:stripped_willow_wood",

    "biomesoplenty:dead_log",
    "biomesoplenty:dead_wood",
    "biomesoplenty:stripped_dead_log",
    "biomesoplenty:stripped_dead_wood",

    "biomesoplenty:magic_log",
    "biomesoplenty:magic_wood",
    "biomesoplenty:stripped_magic_log",
    "biomesoplenty:stripped_magic_wood",

    "biomesoplenty:umbran_log",
    "biomesoplenty:umbran_wood",
    "biomesoplenty:stripped_umbran_log",
    "biomesoplenty:stripped_umbran_wood",

    "biomesoplenty:hellbark_log",
    "biomesoplenty:hellbark_wood",
    "biomesoplenty:stripped_hellbark_log",
    "biomesoplenty:stripped_hellbark_wood",

    "quark:blossom_log",
    "quark:blossom_wood",
    "quark:stripped_blossom_log",
    "quark:stripped_blossom_wood",

    "quark:azalea_log",
    "quark:azalea_wood",
    "quark:stripped_azalea_log",
    "quark:stripped_azalea_wood",
];

onEvent('block.modification', evt => {
    for (const blockName of LOG_BLOCKS) {
        evt.modify(blockName, block => {
            block.setRequiresTool(true);
        })
    }
});