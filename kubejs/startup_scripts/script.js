// priority: 0

console.info('Initializing startup scripts.');

const NEEDS_TIER_FLINT = "forge:needs_wood_tool";
const NEEDS_TIER_COPPER = "minecraft:needs_stone_tool";
const NEEDS_TIER_BRONZE = "minecraft:needs_iron_tool";
const NEEDS_TIER_STEEL = "minecraft:needs_diamond_tool";
const NEEDS_TIER_TITANIUM = "forge:needs_netherite_tool";

onEvent('tags.items', evt => {
    evt.add('forge:ingots/steel');
})

onEvent('item.registry.tool_tiers', evt => {
    evt.add("kaisa_flint", tier => {
        tier.level = 0;
        tier.uses = 64;
        tier.speed = 2.0;
        tier.attackDamageBonus = 2.0;
        tier.enchantmentValue = 2;
        tier.repairIngredient = '#forge:stone';
    });
    evt.add("kaisa_copper", tier => {
        tier.level = 1;
        tier.uses = 128;
        tier.speed = 3.3;
        tier.attackDamageBonus = 3.0;
        tier.enchantmentValue = 5;
        tier.repairIngredient = '#forge:ingots/copper';
        tier.tag = NEEDS_TIER_COPPER;
    });
    evt.add("kaisa_tin", tier => {
        tier.level = 0;
        tier.uses = 16;
        tier.speed = 1.0;
        tier.attackDamageBonus = 1.0;
        tier.enchantmentValue = 10;
        tier.repairIngredient = '#forge:ingots/tin';
    });
    evt.add("kaisa_lead", tier => {
        tier.level = 1;
        tier.uses = 256;
        tier.speed = 3.3;
        tier.attackDamageBonus = 5;
        tier.enchantmentValue = 2;
        tier.repairIngredient = '#forge:ingots/lead';
    });
    evt.add("kaisa_bronze", tier => {
        tier.level = 2;
        tier.uses = 256;
        tier.speed = 4.5;
        tier.attackDamageBonus = 4;
        tier.enchantmentValue = 10;
        tier.repairIngredient = '#forge:ingots/bronze';
    });
    evt.add("kaisa_iron", tier => {
        tier.level = 2;
        tier.uses = 256;
        tier.speed = 4.5;
        tier.attackDamageBonus = 4;
        tier.enchantmentValue = 5;
        tier.repairIngredient = '#forge:ingots/iron';
    });
    evt.add("kaisa_nickel", tier => {
        tier.level = 2;
        tier.uses = 384;
        tier.speed = 4.5;
        tier.attackDamageBonus = 4;
        tier.enchantmentValue = 0;
        tier.repairIngredient = '#forge:ingots/nickel';
    });
    evt.add("kaisa_steel", tier => {
        tier.level = 3;
        tier.uses = 512;
        tier.speed = 6;
        tier.attackDamageBonus = 5;
        tier.enchantmentValue = 8;
        tier.repairIngredient = '#forge:ingots/steel';
    });
    evt.add("kaisa_constantan", tier => {
        tier.level = 3;
        tier.uses = 768;
        tier.speed = 5;
        tier.attackDamageBonus = 4;
        tier.enchantmentValue = 0;
        tier.repairIngredient = '#forge:ingots/constantan';
    });
    evt.add("kaisa_invar", tier => {
        tier.level = 3;
        tier.uses = 768;
        tier.speed = 7;
        tier.attackDamageBonus = 5;
        tier.enchantmentValue = 0;
        tier.repairIngredient = '#forge:ingots/invar';
    });
    evt.add("kaisa_gold", tier => {
        tier.level = 3;
        tier.uses = 64;
        tier.speed = 24;
        tier.attackDamageBonus = 8;
        tier.enchantmentValue = 22;
        tier.repairIngredient = '#forge:ingots/gold';
        tier.tag = 'minecraft:needs_diamond_tool';
    });
    evt.add("kaisa_silver", tier => {
        tier.level = 3;
        tier.uses = 384;
        tier.speed = 6;
        tier.attackDamageBonus = 6;
        tier.enchantmentValue = 22;
        tier.repairIngredient = '#forge:ingots/silver';
    });
    evt.add("kaisa_electrum", tier => {
        tier.level = 4;
        tier.uses = 1024;
        tier.speed = 8;
        tier.attackDamageBonus = 7;
        tier.enchantmentValue = 22;
        tier.repairIngredient = '#forge:ingots/electrum';
    });
    evt.add("kaisa_diamond", tier => {
        tier.level = 4;
        tier.uses = 1536;
        tier.speed = 9;
        tier.attackDamageBonus = 5;
        tier.enchantmentValue = 30;
        tier.repairIngredient = '#forge:ingots/diamond';
    });
    evt.add("kaisa_titanium", tier => {
        tier.level = 4;
        tier.uses = 3072;
        tier.speed = 12;
        tier.attackDamageBonus = 6;
        tier.enchantmentValue = 10;
        tier.repairIngredient = '#forge:ingots/titanium';
        tier.tag = 'forge:needs_netherite_tool';
    });
});

onEvent('item.registry', evt => {
	// Register new items here
    evt.create("kaisa:flint_pickaxe", 'pickaxe')
        .displayName("Flint Pickaxe")
        .tier('kaisa_flint')
        .texture('minecraft:item/stone_pickaxe');

    evt.create("kaisa:copper_pickaxe", 'pickaxe')
        .displayName("Copper Pickaxe")
        .tier('kaisa_copper')
        .texture('tools_complement:item/copper_pickaxe');

    evt.create("kaisa:tin_pickaxe", 'pickaxe')
        .tier('kaisa_tin')
        .texture('tools_complement:item/tin_pickaxe');

    evt.create("kaisa:lead_pickaxe", 'pickaxe')
        .tier('kaisa_lead')
        .texture('tools_complement:item/lead_pickaxe');

    evt.create("kaisa:bronze_pickaxe", 'pickaxe')
        .tier('kaisa_bronze')
        .texture('tools_complement:item/bronze_pickaxe');

    evt.create("kaisa:iron_pickaxe", 'pickaxe')
        .tier('kaisa_iron')
        .texture('minecraft:item/iron_pickaxe');

    evt.create("kaisa:nickel_pickaxe", 'pickaxe')
        .tier('kaisa_nickel')
        .texture('tools_complement:item/nickel_pickaxe');

    evt.create("kaisa:steel_pickaxe", 'pickaxe')
        .tier('kaisa_steel')
        .tag('forge:tools/diamond')
        .tag('minecrat:cluster_max_harvestables')
        .texture('kaisa:item/steel_pickaxe');

    evt.create("kaisa:constantan_pickaxe", 'pickaxe')
        .tier('kaisa_constantan')
        .tag('forge:tools/diamond')
        .tag('minecrat:cluster_max_harvestables')
        .texture('tools_complement:item/constantan_pickaxe');

    evt.create("kaisa:invar_pickaxe", 'pickaxe')
        .tier('kaisa_invar')
        .tag('forge:tools/diamond')
        .tag('minecrat:cluster_max_harvestables')
        .texture('tools_complement:item/invar_pickaxe');

    evt.create("kaisa:golden_pickaxe", 'pickaxe')
        .tier('kaisa_gold')
        .tag('forge:tools/diamond')
        .tag('minecrat:cluster_max_harvestables')
        .texture('minecraft:item/golden_pickaxe');

    evt.create("kaisa:silver_pickaxe", 'pickaxe')
        .tier('kaisa_silver')
        .tag('forge:tools/diamond')
        .tag('minecrat:cluster_max_harvestables')
        .texture('tools_complement:item/silver_pickaxe');

    evt.create("kaisa:electrum_pickaxe", 'pickaxe')
        .tier('kaisa_electrum')
        .tag('forge:tools/netherite')
        .tag('minecrat:cluster_max_harvestables')
        .texture('tools_complement:item/electrum_pickaxe');

    evt.create("kaisa:diamond_pickaxe", 'pickaxe')
        .tier('kaisa_diamond')
        .tag('forge:tools/netherite')
        .tag('minecrat:cluster_max_harvestables')
        .texture('minecraft:item/diamond_pickaxe');

    evt.create("kaisa:titanium_pickaxe", 'pickaxe')
        .tier('kaisa_titanium')
        .tag('forge:tools/netherite')
        .tag('minecrat:cluster_max_harvestables')
        .texture('kaisa:item/titanium_pickaxe');
});

onEvent('block.registry', evt => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
});

onEvent('block.modification', evt => {
	//evt.modify("minecraft:copper_ore", block => {
    //    
	//})
})

onEvent('block.loot_tables', evt => {
	//evt.addBlock('minecraft:gravel', table => {
	//	table.addPool(pool => {
	//		pool.rolls = 1;
	//		//pool.bonusRolls = 0,
	//		//pool.addItem("minecraft:stone");
	//		pool.entries = [
    //            {
    //                type: 'minecraft:item',
    //                name: 'minecraft:diamond',
    //                weight: 10
    //            },
    //            {
    //                type: 'minecraft:item',
    //                name: 'minecraft:iron_nugget',
    //                weight: 5,
    //                conditions: [
    //                    {
    //                        condition: 'minecraft:survives_explosion'
    //                    }
    //                ]
    //            }
    //        ];
	//	});
	//});
});

onEvent('item.registry.tool_tiers', evt => {
    //evt.add('wow_tier')
});

onEvent('block.tags', evt => {
    evt.remove(NEEDS_TIER_COPPER, 'minecraft:copper_ore', 'minecraft:deepslate_copper_ore');
    evt.remove(NEEDS_TIER_COPPER, 'thermal:tin_ore', 'thermal:deepslate_tin_ore');
    evt.remove(NEEDS_TIER_BRONZE, 'thermal:lead_ore', 'thermal:deepslate_lead_ore');
    evt.remove(NEEDS_TIER_COPPER, 'minecraft:iron_ore', 'minecraft:deepslate_iron_ore');
    evt.remove(NEEDS_TIER_BRONZE, 'thermal:nickel_ore', 'thermal:deepslate_nickel_ore');
    evt.remove(NEEDS_TIER_BRONZE, 'minecraft:gold_ore', 'minecraft:deepslate_gold_ore', 'minecraft:nether_gold_ore');
    evt.remove(NEEDS_TIER_BRONZE, 'thermal:silver_ore', 'thermal:deepslate_silver_ore');
    evt.remove(NEEDS_TIER_BRONZE, 'minecraft:diamond_ore', 'minecraft:deepslate_diamond_ore');

    evt.add(NEEDS_TIER_FLINT, '#forge:ores/copper');
    evt.add(NEEDS_TIER_FLINT, '#forge:ores/tin');
    evt.add(NEEDS_TIER_FLINT, '#forge:ores/lead');
    evt.add(NEEDS_TIER_COPPER, '#forge:ores/coal');
    evt.add(NEEDS_TIER_BRONZE, '#forge:ores/iron');
    evt.add(NEEDS_TIER_BRONZE, '#forge:ores/nickel');
    // <-- deepslate ores -->
    evt.add(NEEDS_TIER_STEEL, '#forge:ores/gold');
    evt.add(NEEDS_TIER_STEEL, '#forge:ores/silver');
    evt.add(NEEDS_TIER_TITANIUM, '#forge:ores/diamond');
    //evt.add(NEEDS_TIER_TITANIUM, '#forge:ores/titanium');

    evt.add("minecraft:incorrect_for_iron_tool", "minecraft:diamond_ore");

    // <-- rocks -->
    evt.add(NEEDS_TIER_STEEL, [
        '#forge:deepslate',
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
        'minecraft:deepslate_tile_slab'
    ]);
});
onEvent('item.tags', evt => {
    
})

onEvent('item.modification', evt => {
    //evt.modify('minecraft:wooden_pickaxe', item => {
    //    item.tier = tier => {
    //        tier.speed = 12; // doesn't work
    //        tier.level = 4; // works
    //    };
    //});
    //evt.modify('minecraft:golden_pickaxe', item => {
    //    item.tier = tier => {
    //        tier.speed = 1; // doesn't work
    //        tier.level = 4; // works
    //    };
    //});
});
