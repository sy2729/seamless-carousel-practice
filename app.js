let length = $('.carousel').children().length;
for(let i = 0; i < length; i++) {
    var button = document.createElement(`div`);
    button.className = `btn${i}`;
    $('.buttonWrap').append(button);
}

init();
<<<<<<< HEAD
let n = 1;
setInterval(()=> {
    after($(`.carousel > img:nth-child(${setIndex(n)})`))
    current($(`.carousel > img:nth-child(${setIndex(n+1)})`))
    activate(n%3)
    n += 1;
}, 2000)
=======

let n = 0;
setInterval(()=> {
    after($(`.carousel > img:nth(${getIndex(n)})`));
    current($(`.carousel > img:nth(${getIndex(n+1)})`));
    n += 1;
    changeDot(n);
}, 4000)
>>>>>>> backup




<<<<<<< HEAD
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
=======

//API
function current(node) {
    node.addClass('current').removeClass('before after')
        
}
function before(node) {
    node.removeClass('after').addClass('before')
}
function after(node) {
    node.addClass('after').removeClass('current')
        .one('transitionend', (e)=> {
                before($(e.currentTarget))
            })
}
function changeDot(index) {
    $('.buttonWrap > div').eq(getIndex(index)).addClass('active').siblings().removeClass('active')
}


function init() {
    $('.carousel > img:nth(0)').addClass('current');
    $('.carousel > img:nth(1)').addClass('before');
    $('.buttonWrap > div').eq(0).addClass('active')
}

function getIndex(n) {
    if(n >= 3) {
        n = n % 3;
    }
    return n;
}
>>>>>>> backup
