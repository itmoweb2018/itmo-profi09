/*1. Заданы два массива 
A = [ 12, 4, 3, 10, 1, 20 ]  
B = [-3, -7, -100, -33] 
необходимо их объединить в один массив C, добавив массив B в конец(в начало) A.*/

<script type="text/javascript">
  var A = [12, 4, 3, 10, 1, 20];
  var B = [-3, -7, -100, -33];
  for (x = 0; x < B.length; x++) {
    A.push(B[x]);
  }
  var C_after = A;
  console.log("B elements follow those of A: " + C_after);

  for (x = 0; x < B.length; x++) {
    A.unshift(B[x]);
  }
  var C_ahead = A;
  console.log("B elements in prior to those of A: " + C_ahead);
</script>