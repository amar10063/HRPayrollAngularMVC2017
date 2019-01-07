function hide_preloader() { rotate = 0, jquery_1_11_3_min_p("#preloader").fadeOut(1e3, function () { jquery_1_11_3_min_p("body").css({ overflow: "visible", width: "100%", height: "auto" }), jquery_1_11_3_min_p("#Overlay_Load").fadeOut(600) }) } var Win_w, Win_h; jquery_1_11_3_min_p(document).ready(function () { function e() { Win_W = window.innerWidth, Win_H = window.innerHeight, jquery_1_11_3_min_p("body").css({ width: Win_W + "px", height: Win_H + "px", overflow: "hidden" }) } e(); var i = jquery_1_11_3_min_p("#showPreloader").width(), o = jquery_1_11_3_min_p("#showPreloader").height(), n = Win_W / 2 - i / 2 + "px", d = Win_H / 2 - o / 2 + "px"; jquery_1_11_3_min_p("#showPreloader").css({ left: n, top: d }) }), jquery_1_11_3_min_p(window).load(function () { hide_preloader(); jquery_1_11_3_min_p('body').removeAttr('style') });

jquery_1_11_3_min_p(document).ready(function () {
    var wh = jquery_1_11_3_min_p(document).height();
    var gh1 = wh - 50;
    jquery_1_11_3_min_p('.mainCon').css('height', 'gh1');

    jquery_1_11_3_min_p('.labelFormula').click(function () {
        jquery_1_11_3_min_p(this).toggleClass('labelActive');
    })



});

