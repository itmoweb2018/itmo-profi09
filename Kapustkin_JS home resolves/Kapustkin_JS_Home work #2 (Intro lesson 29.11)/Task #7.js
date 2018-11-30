/*7. Пользователь вводит количество тарелок и количество моющего средства. Моющее средство расходуется из расчета 0.5 
на одну тарелку. Вымыть тарелки в цикле. Вывести на экран:
1) сколько тарелок осталось, если моющее средство закончилось: 
'Моющее средство закончилось. Осталось N тарелок' 
(где N – заменить на число оставшихся тарелок) 
2) сколько осталось моющего средства, если тарелки закончились:
'Все тарелки вымыты. Осталось N ед. моющего средства' 
(где N – заменить на число оставшегося моющего средства)
3) если мы помыли все тарелки и моющее средство закончилось, 
то вывести: 'Все тарелки вымыты, моющее средство закончилось'*/


<script type="text/javascript">
      var numberOfPlates = prompt("Enter a number of plates you'd have cleared:");
      var restOfMeans = prompt("Enter the total of means you have before clearing your plates:");

      while (numberOfPlates > 0 && restOfMeans > 0) {
        numberOfPlates = numberOfPlates - 1;
        restOfMeans = restOfMeans - 0.5;
        console.log("Plates to be cleared: " + numberOfPlates + "\nRest of the means: " + restOfMeans + "\n ");
        if (restOfMeans === 0 && numberOfPlates > 0) {
          alert("Scouring means have depleted \nPlates to be cleared: " + numberOfPlates);
          break;
        }
        if (restOfMeans > 0 && numberOfPlates === 0) {
          alert("All plates are clear!!! \nRest of scouring means: " + restOfMeans);
          break;
        }
        if (restOfMeans === 0 && numberOfPlates === 0) {
          alert("All plates are clear as means are out - what an accurate mind!!!");
          break;
        }
      }
</script>
