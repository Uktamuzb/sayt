let a=3, b=2, c=4

if  (a<b && b<c){
    console.log(c, b);
}
else if(a<c && c<b){
    console.log(b, c);
}
else if (c<b && b<a){
    console.log(a, b);
}
else if (b<c && c<a){
    console.log(a, c);
}
else if (b<a && a<c){
    console.log(c, a);
}
else if (c<a && a<b){
    console.log(b, a);
}