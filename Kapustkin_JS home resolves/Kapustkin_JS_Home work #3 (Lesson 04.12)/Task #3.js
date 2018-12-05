/*3. Задан массив  - [12,4,3,10,1,20]. 
Удалить из него наименьшее и наибольшее значение.*/

<script type="text/javascript">
  var arr = [12, 4, 3, 10, 1, 20];
  arr_max = arr[0];
  arr_min = arr[0];
  for (x = 0; x < arr.length; x++) {
    if (arr_max < arr[x]) {
      arr_max = arr[x];
    } else if (arr_max > arr[x]) {
      arr_min = arr[x];
    }
  }
  console.log("An array max value: " + arr_max + "\nAn array min value: " + arr_min);
  delete arr[arr.indexOf(arr_max)];
  delete arr[arr.indexOf(arr_min)];
  console.log(arr);
</script>