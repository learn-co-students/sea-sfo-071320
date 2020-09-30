// Candace


// Alec

function alecMakeChange(amount) {
    const change = {};
    while (amount > 0.0) {
        if (amount > 0.24) {
            change.Quarters = change.Quarters || 0;
            change.Quarters++;
            amount -= 0.25;
        } else if (amount > 0.09) {
            change.Dimes = change.Dimes || 0;
            change.Dimes++;
            amount -= 0.1;
        } else if (amount > 0.04) {
            change.Nickels = change.Nickels || 0;
            change.Nickels++;
            amount -= 0.05;
        } else {
            change.Pennies = change.Pennies || 0;
            change.Pennies++;
            amount -= 0.01;
        }
    }
    return change;
}
console.log(makeChange(0.87));
console.log(makeChange(0.43));

//   Alec part 2

function alecTwoMakeChange(amount) {
    const change = {
        Quarters: 0,
        Dimes: 0,
        Nickles: 0,
        Pennies: 0,
    };
    amount = amount * 100;
    [amount, change.Quarters] = helpChange(amount, 25);
    [amount, change.Dimes] = helpChange(amount, 10);
    [amount, change.Nickles] = helpChange(amount, 5);
    [amount, change.Pennies] = helpChange(amount, 1);
    return change;
}
function helpChange(amount, change) {
    const modulo = amount % change;
    return [modulo, (amount - modulo) / change];
}
console.log(makeChange(0.87));
console.log(makeChange(0.43));

//   Nathan

function findChange(monies) {
    let change = monies * 100
    let quarter = 25
    let dime = 10
    let nickel = 5
    let penny = 1
    results = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0,
    }
    results["quarters"] = Math.floor(change / quarter)
    remainder = change % quarter
    results["dimes"] = Math.floor(remainder / dime)
    remainder = remainder % dime
    results["nickels"] = Math.floor(remainder / nickel)
    remainder = remainder % nickel
    results["pennies"] = Math.floor(remainder / penny)
    remainder = remainder % penny
    return results
}
findChange(.85)