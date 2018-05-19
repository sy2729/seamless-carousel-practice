let length = $('.carousel').children().length;
for(let i = 0; i < length; i++) {
    var button = document.createElement(`div`);
    button.className = `btn${i}`;
    $('.buttonWrap').append(button);
}

// hardcode the trigger;
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
setClass($('.buttonWrap > div'), 0, 'active');
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
    triggerButton($('.buttonWrap > div'), id % 4, 'click');
    setClass($('.buttonWrap > div'), id % 4, 'active');
}, 4000)

$('.carousel').on('mouseenter', function() {
    window.clearInterval(timer)
});

$('.carousel').on('mouseout', function () {
    timer = setInterval(() => {
        id++;
        triggerButton($('.buttonWrap > div'), id % 4, 'click');
        setClass($('.buttonWrap > div'), id%4, 'active');
    }, 4000)    
})


// reusable function
function triggerButton (node, index, event) {
    node.eq(index).trigger(event);
}


function setClass(node, index, className) {
    node.eq(index).addClass('active')
        .siblings().removeClass(className);
}