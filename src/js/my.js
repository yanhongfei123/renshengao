
import "@/css/reset.css";
import "@/css/idangerous.swiper.css";
// 以上引入的css会被打包到公用的文件夹dll

import "@/scss/my.scss"; // 首页样式

import "@/js/libs/rem.js";
import $ from "@/js/libs/jquery203.js";
//rem.js  jquery203.js会被打包到公用的文件dll
import API from '@/utils/api';

const content = `hello, ES6 is awesome`;
let container = $('#container');
container.html(content);

$(document).on('click', 'img',function(){
    console.log($(this).get(0))
})

API.getBannerList().then(res => {
    let banners = res.content;
    console.log(banners)
});