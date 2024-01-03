
 var $datePickers = $('.input-datepicker3');

$datePickers.datepicker({
    format: 'yyyy-mm-dd',
    todayBtn: 'linked',
    clearBtn: true,
    autoclose: true,
    todayHighlight: true,
    calendarWeeks: true,
    weekStart: 1,
    disableTouchKeyboard: true
});
$('.input-datepicker4').datepicker({
    format: 'yyyy-mm-dd',
    todayBtn: 'linked',
    clearBtn: true,
    autoclose: true,
    todayHighlight: true,
    calendarWeeks: true,
    weekStart: 1,
    keyboardNavigation: false,
    disableTouchKeyboard: true
});

// if ($(window).width() < 768) {
//     $datePickers.attr('readonly', 'true');
// }

$datePickers.each(index => {
  $datePickers[index].addEventListener('keypress', function (e) {
        if (e.keyCode < 47 || e.keyCode > 57) {
            e.preventDefault();
        }
        var len = this.value.length;
        if (len === 4) {
            this.value += '-';
        }
        if (len === 7) {
            this.value += '-';
        }
    });
})

