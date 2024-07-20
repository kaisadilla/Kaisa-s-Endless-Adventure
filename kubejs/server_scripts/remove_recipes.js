// priority: 0

console.info("Loading server_scripts/remove_recipes.js");

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', evt => {
    //evt.remove({ output: 'minecraft:crafting_table' });
    //evt.remove({ output: 'tconstruct:crafting_station' });

	evt.remove({ output: 'minecraft:stone_pickaxe' });
});