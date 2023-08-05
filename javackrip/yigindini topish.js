function yigindi(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 1) {
        s += (1 + i/10);
      } else {
        s -= (1 + i/10);
      }
    }
  }
  
  let n = 5;
  let yigindiNatija = yigindi(n);
  
  console.log("Yig'indi:", yigindiNatija.toFixed(2));