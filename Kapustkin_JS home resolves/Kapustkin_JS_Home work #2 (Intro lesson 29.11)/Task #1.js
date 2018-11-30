//1. Перераспределить значения переменных X и Y так, чтобы в X оказалось меньшее из этих значений, а в Y — большее.

<script type="text/javascript">
    var x;
    var y;
    var z;

    if (x < y) {
		z = y;
        y = x;
        x = z;
	}
</script>