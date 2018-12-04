//1. Задать размер ипотечного кредита, процентную ставку, кол-во лет . Найти переплату по кредиту, значение переплаты вывести пользователю. 

<script type="text/javascript">
  var reg1 = /^\d{4,10}$/;
  var reg2 = /^\d{4,10}\.\d{1,2}$/gm;
  var reg3 = /^\d{1,5}$/;
  var reg4 = /^\d{1,2}\.\d{1,3}$/;
  var reg5 = /^\d{1,3}$/;
  
  var attempts = 0;

  var sumOfLoan = prompt("Step 1. Enter a sum of mortgage (in $) you would apply for (min - $1000, max - 1 billion of dollars):");

  while (attempts <= 20) {
    if ((reg1.test(sumOfLoan) || reg2.test(sumOfLoan)) && sumOfLoan <= 1e9) {
      var rate = prompt("Step 2. Enter a maximal rate you'd have accepted (min percent - 3, max percent - 30):");
      break;
    } else {
      alert("The sum input has unacceptable symbols or inconsistently large/small value\nPlease enter a valid number");
      sumOfLoan = prompt("Step 1. Enter a sum of mortgage (in $) you would apply for (min - $1000, max - 1 billion of dollars):");
      attempts++;
    }
  }

  while (attempts <= 20) {
    attempts = 0;
    if ((reg3.test(rate) || reg4.test(rate)) && rate >= 3 && rate <= 30) {
      var period = prompt("Step 3. Enter a period you'd have agreed (total months from 3 to 120):");
      break;
    } else {
      alert("The rate input has unacceptable symbols or inconsistently large/small value\nPlease enter a valid percent");
      rate = prompt("Step 2. Enter a maximal rate you'd have accepted (min percent - 3, max percent - 30):");
      attempts++;
    }
  }
  while (attempts <= 20) {
    attempts = 0;
    if (reg5.test(period) && period >= 3 && period <= 120) {
      var overpay = (sumOfLoan * rate / 100) * period / 12;
      alert("Your eventual extra charge comes to " + overpay + " dollars by the end of credit period.");
      break;
    } else {
      alert("The period input has unacceptable symbols or inconsistently large/small value\nPlease enter a valid period");
      period = prompt("Step 3. Enter a period you'd have agreed (total months from 3 to 120):");
      attempts++;
    }
  }
</script>