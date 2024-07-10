// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
});

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
});

//onEvent('block.modification', evt => {
//	evt.modify("minecraft:gravel", block => {
//		
//	})
//})

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