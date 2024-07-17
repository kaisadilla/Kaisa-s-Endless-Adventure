console.info("Loading startup_scripts/stone-properties.js");

const GRANITE_BLOCKS = [
    'minecraft:granite',
    'minecraft:polished_granite',
    'minecraft:granite_wall',
    'minecraft:polished_granite_stairs',
    'minecraft:granite_stairs',
    'minecraft:polished_granite_slab',
    'minecraft:granite_slab',
    'quark:granite_bricks',
    'quark:granite_bricks_slab',
    'quark:granite_bricks_stairs',
    'quark:granite_bricks_wall',
    'quark:chiseled_granite_bricks',
    'quark:granite_pillar',
    'quark:granite_vertical_slab',
    'quark:polished_granite_vertical_slab',
    'quark:granite_bricks_vertical_slab'
];

const DIORITE_BLOCKS = [
    'minecraft:diorite',
    'minecraft:polished_diorite',
    'minecraft:diorite_wall',
    'minecraft:polished_diorite_stairs',
    'minecraft:diorite_stairs',
    'minecraft:polished_diorite_slab',
    'minecraft:diorite_slab',
    'quark:diorite_bricks',
    'quark:diorite_bricks_slab',
    'quark:diorite_bricks_stairs',
    'quark:diorite_bricks_wall',
    'quark:chiseled_diorite_bricks',
    'quark:diorite_pillar',
    'quark:diorite_vertical_slab',
    'quark:polished_diorite_vertical_slab',
    'quark:diorite_bricks_vertical_slab'
];

const ANDESITE_BLOCKS = [
    'minecraft:andesite',
    'minecraft:polished_andesite',
    'minecraft:andesite_wall',
    'minecraft:polished_andesite_stairs',
    'minecraft:andesite_stairs',
    'minecraft:polished_andesite_slab',
    'minecraft:andesite_slab',
    'quark:andesite_bricks',
    'quark:andesite_bricks_slab',
    'quark:andesite_bricks_stairs',
    'quark:andesite_bricks_wall',
    'quark:chiseled_andesite_bricks',
    'quark:andesite_pillar',
    'quark:andesite_vertical_slab',
    'quark:polished_andesite_vertical_slab',
    'quark:andesite_bricks_vertical_slab'
];

const LIMESTONE_BLOCKS = [
    'quark:limestone',
    'quark:polished_limestone',
    'quark:limestone_wall',
    'quark:polished_limestone_stairs',
    'quark:limestone_stairs',
    'quark:polished_limestone_slab',
    'quark:limestone_slab',
    'quark:limestone_bricks',
    'quark:limestone_bricks_slab',
    'quark:limestone_bricks_stairs',
    'quark:limestone_bricks_wall',
    'quark:chiseled_limestone_bricks',
    'quark:limestone_pillar',
    'quark:limestone_vertical_slab',
    'quark:polished_limestone_vertical_slab',
    'quark:limestone_bricks_vertical_slab'
];

const JASPER_BLOCKS = [
    'quark:jasper',
    'quark:polished_jasper',
    'quark:jasper_wall',
    'quark:polished_jasper_stairs',
    'quark:jasper_stairs',
    'quark:polished_jasper_slab',
    'quark:jasper_slab',
    'quark:jasper_bricks',
    'quark:jasper_bricks_slab',
    'quark:jasper_bricks_stairs',
    'quark:jasper_bricks_wall',
    'quark:chiseled_jasper_bricks',
    'quark:jasper_pillar',
    'quark:jasper_vertical_slab',
    'quark:polished_jasper_vertical_slab',
    'quark:jasper_bricks_vertical_slab'
];

const SHALE_BLOCKS = [
    'quark:shale',
    'quark:polished_shale',
    'quark:shale_wall',
    'quark:polished_shale_stairs',
    'quark:shale_stairs',
    'quark:polished_shale_slab',
    'quark:shale_slab',
    'quark:shale_bricks',
    'quark:shale_bricks_slab',
    'quark:shale_bricks_stairs',
    'quark:shale_bricks_wall',
    'quark:chiseled_shale_bricks',
    'quark:shale_pillar',
    'quark:shale_vertical_slab',
    'quark:polished_shale_vertical_slab',
    'quark:shale_bricks_vertical_slab'
];

const BASALT_BLOCKS = [
    'minecraft:basalt',
    'minecraft:polished_basalt',
    'minecraft:smooth_basalt',
    'kaisascore:smooth_basalt',
    'kaisascore:basalt_bricks'
];

const DEEPSLATE_BLOCKS = [
    'minecraft:polished_deepslate',
    'minecraft:deepslate_bricks',
    'minecraft:cracked_deepslate_bricks',
    'minecraft:deepslate_tiles',
    'minecraft:cracked_deepslate_tiles',
    'minecraft:chiseled_deepslate',
    'minecraft:cobbled_deepslate_wall',
    'minecraft:polished_deepslate_wall',
    'minecraft:deepslate_brick_wall',
    'minecraft:deepslate_tile_wall',
    'minecraft:cobbled_deepslate_stairs',
    'minecraft:polished_deepslate_stairs',
    'minecraft:deepslate_brick_stairs',
    'minecraft:deepslate_tile_stairs',
    'minecraft:cobbled_deepslate_slab',
    'minecraft:polished_deepslate_slab',
    'minecraft:deepslate_brick_slab',
    'minecraft:deepslate_tile_slab',
    'quark:cobbled_deepslate_vertical_slab',
    'quark:polished_deepslate_vertical_slab',
    'quark:deepslate_brick_vertical_slab',
    'quark:deepslate_tile_vertical_slab',
];

const TUFF_BLOCKS = [
    'minecraft:tuff',
    'quark:polished_tuff',
    'quark:tuff_wall',
    'quark:polished_tuff_stairs',
    'quark:tuff_stairs',
    'quark:polished_tuff_slab',
    'quark:tuff_slab',
    'quark:tuff_bricks',
    'quark:tuff_bricks_slab',
    'quark:tuff_bricks_stairs',
    'quark:tuff_bricks_wall',
    'quark:chiseled_tuff_bricks',
    'quark:tuff_pillar',
    'quark:tuff_vertical_slab',
    'quark:polished_tuff_vertical_slab',
    'quark:tuff_bricks_vertical_slab'
];

const BLACKSTONE_BLOCKS = [
    'minecraft:blackstone_wall',
    'minecraft:polished_blackstone_wall',
    'minecraft:polished_blackstone_brick_wall',
    'minecraft:blackstone',
    'minecraft:blackstone_slab',
    'minecraft:blackstone_stairs',
    'minecraft:gilded_blackstone',
    'minecraft:polished_blackstone',
    'minecraft:polished_blackstone_slab',
    'minecraft:polished_blackstone_stairs',
    'minecraft:chiseled_polished_blackstone',
    'minecraft:polished_blackstone_bricks',
    'minecraft:polished_blackstone_brick_slab',
    'minecraft:polished_blackstone_brick_stairs',
    'minecraft:cracked_polihed_blackstone_bricks',
    'quark:blackstone_bricks',
    'quark:blackstone_bricks_slab',
    'quark:blackstone_bricks_stairs',
    'quark:blackstone_bricks_wall',
    'quark:blackstone_vertical_slab',
    'quark:polished_blackstone_vertical_slab',
    'quark:polished_blackstone_brick_vertical_slab',
    'quark:blackstone_bricks_vertical_slab',
];

const END_STONE = [
    'minecraft:end_stone',
    'minecraft:end_stone_bricks',
    'minecraft:end_stone_brick_wall',
    'minecraft:end_stone_brick_stairs',
    'minecraft:end_stone_brick_slab',
    'quark:end_stone_brick_vertical_slab',
]

onEvent('block.modification', evt => {
    for (const blockId of GRANITE_BLOCKS) {
        evt.modify(blockId, block => {
            block.destroySpeed = 2.0;
        })
    }
    for (const blockId of DIORITE_BLOCKS) {
        evt.modify(blockId, block => {
            block.destroySpeed = 2.5;
        })
    }
    for (const blockId of ANDESITE_BLOCKS) {
        evt.modify(blockId, block => {
            block.destroySpeed = 3.0;
        })
    }
    for (const blockId of LIMESTONE_BLOCKS) {
        evt.modify(blockId, block => {
            block.destroySpeed = 1.0;
        })
    }
    for (const blockId of JASPER_BLOCKS) {
        evt.modify(blockId, block => {
            block.destroySpeed = 1.8;
        })
    }
    for (const blockId of SHALE_BLOCKS) {
        evt.modify(blockId, block => {
            block.destroySpeed = 0.75;
        })
    }
    for (const blockId of BASALT_BLOCKS) {
        evt.modify(blockId, block => {
            block.destroySpeed = 2.25;
        })
    }

    for (const blockId of DEEPSLATE_BLOCKS) {
        evt.modify(blockId, block => {
            block.destroySpeed = 4.5;
        })
    }
    for (const blockId of TUFF_BLOCKS) {
        evt.modify(blockId, block => {
            block.destroySpeed = 3;
        })
    }

    for (const blockId of BLACKSTONE_BLOCKS) {
        evt.modify(blockId, block => {
            block.destroySpeed = 2.1;
        })
    }

    for (const blockId of END_STONE) {
        evt.modify(blockId, block => {
            block.destroySpeed = 6;
        })
    }

    evt.modify('minecraft:obsidian', block => {
        block.destroySpeed = 0.2;
        //block.soundType = 'glass'
    });
});

onEvent('block.tags', evt => {
    evt.add('#wildbackport:sculk_replaceable', [
        "kaisascore:marble",
    ]);
    evt.add('#wildbackport:sculk_replaceable_world_gen', [
        "kaisascore:marble",
    ]);
})