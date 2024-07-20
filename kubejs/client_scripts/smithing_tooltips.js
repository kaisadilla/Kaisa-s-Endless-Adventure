console.info("Loading client_scripts/smithing_tooltips.js");

const ORANGE = "#ff6000";
const GOLD = "#ffc000";

const MELTABLE_COAL = [
    'minecraft:coal_ore',
    'minecraft:deppslate_coal_ore',
    'minecraft:coal',
    'minecraft:coal_block',
];

const MELTABLE_COPPER = [
    'minecraft:copper_ore',
    'minecraft:deepslate_copper_ore',
    'minecraft:raw_copper_block',
    'minecraft:copper_block',
    'minecraft:exposed_copper',
    'minecraft:weathered_copper',
    'minecraft:oxidized_copper',
    'minecraft:cut_copper',
    'minecraft:exposed_cut_copper',
    'minecraft:weathered_cut_copper',
    'minecraft:oxidized_cut_copper',
    'minecraft:cut_copper_slab',
    'minecraft:exposed_cut_copper_slab',
    'minecraft:weathered_cut_copper_slab',
    'minecraft:oxidized_cut_copper_slab',
    'minecraft:waxed_copper_block',
    'minecraft:waxed_exposed_copper',
    'minecraft:waxed_weathered_copper',
    'minecraft:waxed_oxidized_copper',
    'minecraft:waxed_cut_copper',
    'minecraft:waxed_exposed_cut_copper',
    'minecraft:waxed_weathered_cut_copper',
    'minecraft:waxed_oxidized_cut_copper',
    'minecraft:waxed_cut_copper_slab',
    'minecraft:waxed_exposed_cut_copper_slab',
    'minecraft:waxed_weathered_cut_copper_slab',
    'minecraft:waxed_oxidized_cut_copper_slab',
    'minecraft:raw_copper',
    'minecraft:copper_ingot',
    'thermal:copper_nugget',
];

const MELTABLE_TIN = [
    'thermal:tin_ore',
    'thermal:deepslate_tin_ore',
    'thermal:raw_tin_block',
    'thermal:tin_block',
    'thermal:raw_tin',
    'thermal:tin_ingot',
    'thermal:tin_nugget',
];

const MELTABLE_LEAD = [
    'thermal:lead_ore',
    'thermal:deepslate_lead_ore',
    'thermal:raw_lead_block',
    'thermal:lead_block',
    'thermal:raw_lead',
    'thermal:lead_ingot',
    'thermal:lead_nugget',
];

const MELTABLE_BRONZE = [
    'thermal:bronze_block',
    'thermal:bronze_ingot',
    'thermal:bronze_nugget',
];

const MELTABLE_IRON = [
    'minecraft:iron_ore',
    'minecraft:deepslate_iron_ore',
    'minecraft:raw_iron_block',
    'minecraft:iron_block',
    'minecraft:iron_bars',
    'minecraft:iron_door',
    'minecraft:iron_trapdoor',
    'minecraft:raw_iron',
    'minecraft:iron_ingot',
    'minecraft:iron_nugget',
    'tconstruct:iron_platform',
    'quark:iron_rod',
];

const MELTABLE_NICKEL = [
    'thermal:nickel_ore',
    'thermal:deepslate_nickel_ore',
    'thermal:raw_nickel_block',
    'thermal:nickel_block',
    'thermal:raw_nickel',
    'thermal:nickel_ingot',
    'thermal:nickel_nugget',
];

const MELTABLE_STEEL = [
    'kaisascore:steel_ingot',
    'kaisascore:steel_block',
];

const MELTABLE_CONSTANTAN = [
    'thermal:constantan_block',
    'thermal:constantan_ingot',
    'thermal:constantan_nugget',
];

const MELTABLE_INVAR = [
    'thermal:invar_block',
    'thermal:invar_ingot',
    'thermal:invar_nugget',
];

const MELTABLE_GOLD = [
    'minecraft:gold_ore',
    'minecraft:deepslate_gold_ore',
    'minecraft:nether_gold_ore',
    'minecraft:raw_gold_block',
    'minecraft:gold_block',
    'minecraft:raw_gold',
    'minecraft:gold_ingot',
    'minecraft:gold_nugget',
    'tconstruct:gold_bars',
    'tconstruct:gold_platform',
];

const MELTABLE_SILVER = [
    'thermal:silver_ore',
    'thermal:deepslate_silver_ore',
    'thermal:raw_silver_block',
    'thermal:silver_block',
    'thermal:raw_silver',
    'thermal:silver_ingot',
    'thermal:silver_nugget',
];

const MELTABLE_ELECTRUM = [
    'thermal:electrum_block',
    'thermal:electrum_ingot',
    'thermal:electrum_nugget',
];

const MELTABLE_TITANIUM = [
    'kaisascore:titanium_ore',
    'kaisascore:deepslate_titanium_ore',
    'kaisascore:titanium_ingot',
    'kaisascore:raw_titanium',
    'kaisascore:titanium_block',
];

onEvent('item.tooltip', evt => {
	evt.add(MELTABLE_COAL, Text.of("Melts at 909 °C").color(ORANGE));
	evt.add(MELTABLE_COPPER, Text.of("Melts at 471 °C").color(ORANGE));
	evt.add(MELTABLE_TIN, Text.of("Melts at 180 °C").color(ORANGE));
	evt.add(MELTABLE_BRONZE, Text.of("Melts at 452 °C").color(ORANGE));
	evt.add(MELTABLE_IRON, Text.of("Melts at 1,104 °C").color(ORANGE));
	evt.add(MELTABLE_NICKEL, Text.of("Melts at 1,016 °C").color(ORANGE));
	evt.add(MELTABLE_STEEL, Text.of("Melts at 1,082 °C").color(ORANGE));
	evt.add(MELTABLE_CONSTANTAN, Text.of("Melts at 843 °C").color(ORANGE));
	evt.add(MELTABLE_INVAR, Text.of("Melts at 1,031 °C").color(ORANGE));
	evt.add(MELTABLE_GOLD, Text.of("Melts at 1,236 °C").color(ORANGE));
	evt.add(MELTABLE_SILVER, Text.of("Melts at 1,073 °C").color(ORANGE));
	evt.add(MELTABLE_ELECTRUM, Text.of("Melts at 1,131 °C").color(ORANGE));
	evt.add(MELTABLE_TITANIUM, Text.of("Melts at 1,717 °C").color(ORANGE));
});