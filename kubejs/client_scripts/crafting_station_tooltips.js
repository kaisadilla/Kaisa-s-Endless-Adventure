console.info("Loading client_scripts/crafting_station_tooltips.js");

const LIGHT_GRAY = "#aaaaaa";
const ORANGE = "#ff6000";
const GOLD = "#ffc000";

onEvent('item.tooltip', evt => {
	evt.add('minecraft:crafting_table', Text.of(
        "Allows crafting basic items."
    ));
	evt.add('tconstruct:crafting_station', Text.of(
        "Allows crafting basic items. Offers extra functionality."
    ));
	evt.add('minecraft:furnace', Text.of(
        "Allows processing items that need to be heated. Cannot process metals."
    ));
	evt.add('minecraft:stonecutter', Text.of(
        "Allows crafting variants of stone blocks."
    ));
	evt.add('corail_woodcutter:oak_woodcutter', Text.of(
        "Allows crafting variants of woodcutter blocks."
    ));
});