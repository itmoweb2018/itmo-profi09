//1. Из трех данных чисел выбрать наименьшее.

<script type="text/javascript">
      

      var a;
      var b;
      var c;

      a = 0.655
      b = 0.6549
      c = 0.6554

      if (a > b && b > c) {
        console.log(c);
      }
      if (a > b && b < c) {
        console.log(b);
      }
      if (a > b && b === c) {
        console.log(b, c);
      }
      if (a === b && b > c) {
        console.log(c);
      }
      if (a === b && b === c) {
        console.log(a, b, c);
      }
      if (a === b && b < c) {
        console.log(a, b);
      }
      if (a < b && b > c) {
        if (a > c) {
          console.log(c);
        }
        if (a === c) {
          console.log(a, c);
        }
        if (a < c) {
          console.log(a);
        }
      }
      if (a < b && b === c) {
        console.log(a);
      }
      if (a < b && b < c) {
        console.log(a);
      }
</script>