/*6. Пользователь вводит год, необходимо определить является ли он високосным. Примеры данных для тестирования:
1) '2000' – високосный год
2) '1802' – не високосный год*/


<script type="text/javascript">
  var year = prompt("Enter any year to learn if it's leap or not:");

  if (year % 4 === 0) {
    if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
      if (year < 2018) {
        alert("Year " + year + " has been a leap one");
      } else {
        alert("Year " + year + " will be a leap one");
      }
    } else {
      if (year < 2018) {
        alert("Year " + year + " has been not a leap one");
      } else {
        alert("Year " + year + " will be not a leap one");
      }
    }
  }
  
  if (year % 4 !== 0) {
    if (year < 2018) {
      alert("Year " + year + " has been not a leap one");
    } else if (year == 2018) {
      alert("The current year is not a leap one");
    } else {
      alert("Year " + year + " will be not a leap one");
    }
  }
</script>