let length = $('.carousel').children().length;
for(let i = 0; i < length; i++) {
    var button = document.createElement(`div`);
    button.className = `btn${i}`;
    $('.buttonWrap').append(button);
}

init();

let n = 0;
setInterval(()=> {
    after($(`.carousel > img:nth(${getIndex(n)})`));
    current($(`.carousel > img:nth(${getIndex(n+1)})`));
    n += 1;
    changeDot(n);
}, 4000)





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