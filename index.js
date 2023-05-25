const outcomes1 = [];
const outcomes2 = [];
const runs = 1000000;
const payouts = [];

for (let i = 0; i < runs; i++) {
    const r = Math.random();
    let s = 0;
    if (r < 0.135) {
        s = 16;
    } else if (r < 0.35) {
        s = 2;
    } else if (r < 0.5) {
        s = 0;
    } else {
        s = -2;
    }
    outcomes1.push([r, s]);

    const l = [];
    let c = -2;
    const r1 = Math.floor(Math.random() * 2);
    l.push(r1)
    if (r1 == 1) {
        c += 2;
        const r2 = Math.floor(Math.random() * 10);
        l.push(r2)
        if (r2 <= 2) {
            c += 2;
            const r3 = Math.floor(Math.random() * 10);
            l.push(r3)
            if (r3 == 0) {
                c += 14;
            }
        }
    }
    outcomes2.push([c, l]);
    payouts.push(c);
}

/* for (o of outcomes1) {
    console.log(o);
}
 */

/* for (o of outcomes2) {
    console.log(o);
} */
let t = 0;
for (p of payouts) {
    t += p;
}
const mean = t/runs;
let dfm = 0;
for (p of payouts) {
    dfm += Math.abs(mean - p);
}
const sd = dfm / runs;
const tallies = {"-2": 0, 0: 0, 2: 0, 4: 0, 16: 0};

for (p of payouts) {
    if (p == -2) tallies[-2]++;
    if (p == 0) tallies[0]++;
    if (p == 2) tallies[2]++;
    // if (p == 4) tallies[4]++;
    if (p == 16) tallies[16]++;
}

console.log(`Payouts for D$2: `, payouts);
console.log(`| SUMMARY
| Simulations run: ${runs}
| Mean: ${mean}
| SD: ${sd}
| TALLIES
| D$-2 ${tallies[-2]} (${tallies[-2]/runs})
| D$0  ${tallies[0]} (${tallies[0]/runs})
| D$2  ${tallies[2]} (${tallies[2]/runs})
| D$16 ${tallies[16]} (${tallies[16]/runs})
`);

//TODO: calculate probability and tallies for each payout
//toodaloo
