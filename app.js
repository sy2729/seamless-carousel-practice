let length = $('.carousel').children().length;
for(let i = 0; i < length; i++) {
    var button = document.createElement(`div`);
    button.className = `btn${i}`;
    $('.buttonWrap').append(button);
}
console.log($('.buttonWrap').children())

// $('.btn1').on('click', function() {
//     $('.carousel').css(
//         { transform: `translateX(${-530 * 0}px)`}
//     )
// })
// $('.btn2').on('click', function() {
//     $('.carousel').css(
//         {transform: `translateX(${-530 * 1}px)`}
//     )
// })
// $('.btn3').on('click', function() {
//     $('.carousel').css(
//         { transform: `translateX(${-530 * 2}px)`}
//     )
// })
// $('.btn4').on('click', function() {
//     $('.carousel').css(
//         { transform: `translateX(${-530 * 3}px)`}
//     )
// })




var allButtons = $('.buttonWrap > div');

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function(e) {
        //DOM Method
        // let n;
        // var target = e.currentTarget;
        // var siblings = target.parentNode.children;
        // for (let i = 0; i < siblings.length; i++) {
        //     if(siblings[i] === target) {
        //         n = i;
        //         break;
        //     }
        // }
        // console.log(n)

        //JQuery
        let n = $(e.currentTarget).index();
        $('.carousel').css({
            transform: `translateX(${-n*530}px)`
        })
    })
}

var id = 0;
var timer = setInterval(() => {
    id++;
    $('.buttonWrap > div').eq(id%4).trigger('click')
    console.log(id);
}, 2000)
