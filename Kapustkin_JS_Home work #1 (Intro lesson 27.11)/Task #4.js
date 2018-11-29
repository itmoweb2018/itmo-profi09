/*4. Дано целое число, лежащее в диапазоне от -999 до 999. 
Вывести строку - словесное описание данного числа вида 
"отрицательное двузначное число", 
"нулевое число", "положительное однозначное число" и т.д.*/

<script type="text/javascript">
      var number;
      number = prompt();
      if (number >= -999 && number <= -100) {
        console.log("Your input is a three-digit negative number");
      }
      if (number > -99 && number <= -10) {
        console.log("Your input is a two-digit negative number");
      }
      if (number > -9 && number < 0) {
        console.log("Your input is an one-digit negative number");
      }
      if (number == 0) {
        console.log("Your input is null");
      }
      if (number > 0 && number < 10) {
        console.log("Your input is an one-digit positive number");
      }
      if (number >= 10 && number < 100) {
        console.log("Your input is a two-digit positive number");
      }
      if (number >= 100 && number <= 999) {
        console.log("Your input is a three-digit positive number");
      }
</script>