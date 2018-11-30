/*4. Единицы длины пронумерованы следующим образом: 
1 — дециметр, 2 — километр, 
3 — метр, 4 — миллиметр, 5 — сантиметр. 
Дан номер единицы длины и длина отрезка L в этих единицах (вещественное число). Вывести длину данного отрезка в метрах.*/

<script type="text/javascript">
      var selectUnit = prompt("Select a number of an unit you'd get converted to meters\n1 - Decimeter\n2 - Kilometer\n3 - Meter\n4 - Millimeter\n5 - Centimeter:");
      var length = prompt("Enter a length only in the unit selected before:");
      var result;
      switch (selectUnit) {
        case '1':
          result = length / 10;
          break;
        case '2':
          result = length * 1000;
          break;
        case '3':
          alert("You've selected meter as an unit - the conversion is \nPlease restart to select another unit");
          break;
        case '4':
          result = length / 1000;
          break;
        case '5':
          result = length / 100;
          break;
      }
      alert("The length in meters: " + result);
</script>