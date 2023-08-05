function kupaytma(n) {
    let s = 1;
    for (let i = 1; i <= n; i++) {
      s *= (1 + i/10);
    }
  }
  
  let n = 5;
  let kupaytmaNatija = kupaytma(n);
  
  console.log("Kupaytma:", kupaytmaNatija.toFixed(2));