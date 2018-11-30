/*3. Дан номер месяца (1 — январь, 2 — февраль, ...). 
Вывести название соответствующего времени года ("зима", "весна" и т.д.).*/ 

<script type="text/javascript">
      var season = ["spring", "summer", "autumn", "winter"];
      var x = prompt("Enter a number of a month you were born in - \na figure between 1 (January) and 12 (December):");

      switch (x) {
        case '3':
        case '4':
        case '5':
          alert("You were born in " + season[0]);
          break;
        case '6':
        case '7':
        case '8':
          alert("You were born in " + season[1]);
          break;
        case '9':
        case '10':
        case '11':
          alert("You were born in " + season[2]);
          break;
        case '1':
        case '2':
        case '12':
          alert("You were born in " + season[3]);
          break;
      }
</script>