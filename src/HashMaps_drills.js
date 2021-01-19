const HashMap = require('./hashmap');

function main() {
    const lotr = new HashMap();
    lotr.set('Hobbit', 'Bilbo');
    lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard', 'Gandalf');
    lotr.set('Human', 'Aragorn');
    lotr.set('Elf', 'Legolas');
    lotr.set('Maiar', 'The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer', 'Gollum');
    lotr.set('LadyOfLight', 'Galadriel');
    lotr.set('HalfElven', 'Arwen');
    lotr.set('Ent', 'Treebeard');
    console.log('Hash Map (lotr):', lotr);
    console.log('Value of Maiar should be Sauron:', lotr.get('Maiar'));
    console.log('Value of Hobbit should be Frodo:', lotr.get('Hobbit'));
    console.log('_capacity should be 24:', lotr._capacity);
}

main();