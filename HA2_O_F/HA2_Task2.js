function TipCalc(percent = 10){
    this.percent = percent; this.tip = this.total = 0;
    this.calc = bill=>{
      let t = this.percent/100*bill;
      this.tip = t.toFixed(1); this.total = (bill+t).toFixed(1);
      return this;
    }
  }
  const tc = new TipCalc;
  function billTest(bill){
    let p = 10;
    tc.percent = p; tc.calc(bill);
    console.log({percent:p, tip:tc.tip, total:tc.total});
  }
  billTest(100); billTest(20000);