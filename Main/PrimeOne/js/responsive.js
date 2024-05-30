$(window).resize(function (event) {
    adaptive_function();
});

function adaptive_header(w, h) {
    let headerMenu = $('.header-menu');
    let headerLang = $('.header-top-lang');
    let headerTop = $('.header-top');
    let headerBottomMenu = $('.header-bottom-menu');

    if (w < 767) {
        if (!headerLang.hasClass('done')) {
            headerLang.addClass('done').appendTo(headerMenu);
        }
    } else {
        if (headerLang.hasClass('done')) {
            headerLang.removeClass('done').prependTo(headerTop);
        }
    }
    if (w < 767) {
        if (!headerBottomMenu.hasClass('done')) {
            headerBottomMenu.addClass('done').appendTo(headerMenu);
        }
    } else {
        $.each(headerBottomMenu), function (index, val) {
            if ($(this).hasClass())
                if (headerBottomMenu.hasClass('done')) {
                    headerBottomMenu.removeClass('done').prependTo(headerTop);
                }
        }
        if (headerBottomMenu.hasClass('done')) {
            headerBottomMenu.removeClass('done').prependTo(headerTop);
        }
    }
}

function adaptive_function() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    adaptive_header(w, h);
}

adaptive_function();