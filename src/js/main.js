require.config({
    paths: { //配置路径
        'jquery': '../js/common/jquery',
        'swiper': '../js/common/swiper-4.3.5.min',
        'scroll': '../js/common/better-scroll'
    }
});
require(['jquery', 'swiper', 'scroll'], function($, swiper, scroll) {
    Swiper = new swiper('.swiper-container');
    lScroll = new scroll('.left');
    rScroll = new scroll('.right');
})