console.info("Loading server_scripts/tags.js");

const CRAFTING_METAL_INGOTS = [
    "#forge:ingots/iron",
    "#forge:ingots/copper",
];
const CRAFTING_METAL_GEARS = [
    "#forge:gears/iron",
    "#forge:gears/copper",
];

onEvent('item.tags', evt => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
    evt.add('kaisascore:crafting_metal_ingot', CRAFTING_METAL_INGOTS);
    evt.add('kaisascore:crafting_metal_gear', CRAFTING_METAL_GEARS);
});
