$('ul').addClass('menu');
$(".menu ul.submenu.level-2 li a").each(function (index, item) {
    var title = $(item).text();
    var distance = $(item).offset().top;
    var isNumber = $.isNumeric(title);
    if (isNumber) {
        $(item).append('⬅︎⬅︎⬅︎');
        $(item).addClass('sticky');
        $(window).scroll(function () {
            if ($(this).scrollTop() >= distance) {
                // console.log('is in top');
                $(item).css({
                    fontSize: "36px"
                })
            } else {
                // console.log('is not in top');
                $(item).css({
                    fontSize: "20px"
                })
            }
        });
    } else if (title == 'Works') {
        $(item).append('⬅︎⬅︎⬅︎');
    }
});