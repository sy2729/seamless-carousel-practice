let length = $('.carousel').children().length;
for(let i = 0; i < length; i++) {
    var button = document.createElement(`div`);
    button.className = `btn${i}`;
    $('.buttonWrap').append(button);
}

init();
let n = 1;
setInterval(()=> {
    after($(`.carousel > img:nth-child(${setIndex(n)})`))
    current($(`.carousel > img:nth-child(${setIndex(n+1)})`))
    activate(n%3)
    n += 1;
}, 2000)




function current(node) {
    node.removeClass('before').addClass('current');
}
function before(node) {
    node.removeClass('after').addClass('before');
}
function after(node) {
    node.removeClass('current').addClass('after').one('transitionend', (e)=> {
        before($(e.currentTarget));
    });
}

function init() {
    $('.carousel > img').eq(0).addClass('current');
    $('.carousel > img').eq(1).addClass('before');
    activate(0);
}

function setIndex(n) {
    if (n > 3) {
        n = n % 3
        if (n ===0 ) {
            n = 3;
        }
    }
    return n;
}

function activate(n) {
    $('.buttonWrap > div').eq(n).addClass('active').siblings().removeClass('active');
}
