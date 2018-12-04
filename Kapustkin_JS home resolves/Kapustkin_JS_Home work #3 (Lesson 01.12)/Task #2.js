//2 Дана строка, изображающая целое число. Вывести сумму цифр этого числа. 

<script type="text/javascript">
  var str = "05672305463";
  var x = 0;
  var sum = 0;
  while (x < str.length) {
    var digit = parseInt(str.charAt(x));
    sum = sum + digit;
    x++;
  }
  alert("The sum of string-wrapped digits is " + sum);
</script>