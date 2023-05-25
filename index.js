const outcomes1 = [];
const outcomes2 = [];
const runs = 1000000;

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
}

/* for (o of outcomes1) {
    console.log(o);
}
 */
const payouts = [];

for (o of outcomes2) {
    //console.log(o);
    payouts.push(o[0]);
}

console.log(payouts);
let t = 0;
for (p of payouts) {
    t += p;
}
const mean = t/runs;
console.log("Mean: " + mean);
let dfm = 0;
for (p of payouts) {
    dfm += Math.abs(mean - p);
}
const sd = dfm / runs;
console.log("SD: " + sd);
//TODO: calculate probability and tallies for each payout
//toodaloo
