//3. Дана строка S и символ C. Удвоить каждое вхождение символа C в строку S.

<script type="text/javascript">
  var s = prompt("Enter some word or combination of symbols:");
  var search = prompt("Enter a symbol or several consecutive symbols from your word/combination input:");
  var reg = new RegExp(search, "i");
  if (reg.test(s)) {
    var s = s.split(search).join(search + search);
    alert("String value after doubling of the symbol(-s): " + s);
  } else
    alert("String doesn't content symbol(-s) you've input.\nPlease refresh this page and try again");
</script>