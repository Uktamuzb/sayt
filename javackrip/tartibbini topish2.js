let a=8, b=8, c=8, d=7

if (a===b && c===d && d===a && c==a) {
    console.log('barcha sonlarn teng');
}
else if (a===b && a===c || b===a && b===c || c===a && c===b || a===c && b===c) {
    console.log('d ni tartib raqami: ',d);
}
else if (b===c && b===d || c===b && b===d || d===c && d===b || c===d && b===d) {
    console.log('a ni tartib raqami: ',a);
}
else if (a===c && c===d || c===a && c===d || d===c && d===a || c===d && a===d) {
    console.log('b ni tartib raqami: ',b);
}
else if (a===b && b===d || b===a && d===b || d===b && d===a  || b===d && a===d) {
    console.log('c ni tartib raqami: ',c);
}
else {
    console.log('raqamlar teng emas');
}