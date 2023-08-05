let a=3, b=4, c=5

if (a===b && b===c) {
    console.log("barchasi teng");
}
else if (a===b || b===a) {
    console.log("c ning tartib raqami: ",c);
}
else if (c===a || a===c) {
    console.log("b ning tartib raqami: ",b);
}
else if (c===b || b===c) {
    console.log("a ning tartib raqami: ",c);
}
else {
    console.log("barcha son teng emas !!!");
}