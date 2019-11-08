'use strict';
let Greeter = {
    ppl: [
        {
            name: 'Rihab',
            compliment: 'Du hast die Haare schön!'
        },
        {
            name: 'Navid',
            compliment: 'Der Dreitagebart steht dir super!'
        },
        {
            name: 'Georg',
            compliment: 'Deine Brille ist trés chic!'
        },
        {
            name: 'Waeel',
            compliment: 'Cooles Bowie-Shirt!'
        }
    ],
    buildHTML() {
        let select = '<select>';
        this.ppl.forEach((person) => {
            select += `<option>${person.name}</option>`;
        });
        select += '</select>';
        document.write(`<section id="input">${select}</section>
        <section id="output"></section>`);
        document.getElementById('input').addEventListener('change', (e) => {
            this.getOutput(e.target)
        });
        return;
    },
    getOutput(target) {
        let output = this.getGreeting() + target.value + '. ' + this.ppl[target.selectedIndex].compliment;
        document.getElementById('output').innerHTML = output;
    },
    getGreeting() {
        let hour = new Date().getHours();
        if (hour < 10) {
            return 'Guten Morgen, ';
        } else if (hour < 18) {
            return 'Guten Tag, ';
        } else if (hour < 22) {
            return 'Guten Abend, ';
        } else {
            return 'Gute Nacht, ';
        }
    }
}
Greeter.buildHTML();