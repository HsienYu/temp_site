$('ul').addClass('menu');
$(".menu ul.submenu.level-2 li a").each(function (index, item) {
    var title = $(item).text();
    var isNumber = $.isNumeric(title);
    if (isNumber) {
        $(item).append('⬅︎⬅︎⬅︎');
    } else if (title == 'Works') {
        $(item).append('⬅︎⬅︎⬅︎');
    }
});