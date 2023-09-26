
//左侧综合下拉框事件
const slect = document.querySelector('.category-selector')
//左侧页面当前渲染页面的id值
let lest_sc_id = 1
//ul为左侧下拉框
const ul = document.querySelector(".feed-list ul")


//左侧推荐按钮的监听事件

const lf_tj = document.querySelector('.order-selector')

let current = 0
lf_tj.addEventListener('click', function (e) {
    // console.log(e.target.id)
    const tj = lf_tj.querySelector('.hottest')
    const zx = lf_tj.querySelector('.latest')
    let x = e.target.id
    //当前点击的是最新按钮
    let lf_tj_id = lf_tj.getAttribute('data-id')
    // console.log("之前的id:" + lf_tj_id)
    if (x == 'zx') {
        //判断最新按钮是否为激活态
        //若最新按钮不是激活态则切换为激活态并刷新页面
        if (lf_tj_id == 0) {
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
            render_left(lest_sc_id, 1)
            lf_tj.setAttribute('data-id', 1)
            // console.log("之后的id:" + lf_tj_id)

            tj.style.color = '#4e5969'
            zx.style.color = '#1e80ff'
        }

    } else if (x == 'tj') {
        if (lf_tj_id == 1) {
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
            render_left(lest_sc_id, 0)
            lf_tj.setAttribute('data-id', 0)
            tj.style.color = '#1e80ff'
            zx.style.color = '#4e5969'
        }
    } else if (x == 'svg01') {

        if (lf_tj_id == 0) {
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
            //点击图标旋转
            current = 360 + current
            let x = document.querySelector('#svg01')
            x.style.transform = `rotate(${current}deg)`
            render_left(lest_sc_id, 0)

        }
    }


})



//左侧下拉框的监听事件

slect.addEventListener('click', function (e) {

    // i为当前下拉框的状态 0为隐藏态，1为显示态
    let i = slect.getAttribute('data-id')
    //获取当前是最新态还是热门态
    let lf_tj_id = lf_tj.getAttribute('data-id')
    let a = document.querySelector(".category-list")
    //b为当前各个下拉框的id值 比如:1为综合
    let b = e.target.parentNode.getAttribute('data-scid')
    //将当前左侧页面的状态值赋给全局变量
    lest_sc_id = b
    // console.log(b)
    if (b) {
        //切换时删除原先的li标签
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        //渲染页面
        render_left(b, lf_tj_id)
        //刷新时将滚动条复原
        scrollTop = 0
        sliderTop = 0
        ul.style.transform = 'translateY(-' + scrollTop + 'px)'
        thumb.style.transform = 'translateY(' + sliderTop + 'px)'
    }

    if (i == 0) {
        slect.setAttribute('data-id', 1)
        a.style.display = 'block'
        a.previousElementSibling.style.transform = 'scaleY(-1)'
    }
    else if (i == 1) {
        slect.setAttribute('data-id', 0)
        a.style.display = 'none'
        a.previousElementSibling.style.transform = ''
    }
})




//右侧热门和本周下拉框
const slect2 = document.querySelector('#sec02')
//右侧展示栏的ul标签
const ul_r = document.querySelector('.entry-list .utility')
slect2.addEventListener('click', function (e) {

    category = e.target.getAttribute('data-scid')

    if (category) {
        //切换时删除原先的li标签
        while (ul_r.firstChild) {
            ul_r.removeChild(ul_r.firstChild);
        }
        //渲染页面
        render_right(category, period, lang)
        //刷新时将滚动条复原
        scrollTop_r = 0
        sliderTop_r = 0
        ul_r.style.transform = 'translateY(-' + scrollTop_r + 'px)'
        thumb_r.style.transform = 'translateY(' + sliderTop_r + 'px)'
    }
    let i = this.getAttribute('data-id')
    if (i == 0) {
        slect2.setAttribute('data-id', 1)

        slect2.querySelector('ul').style.display = 'block'
        slect2.querySelector('ul').previousElementSibling.style.transform = 'scaleY(-1)'
    } else if (i == 1) {
        slect2.setAttribute('data-id', 0)
        slect2.querySelector('ul').style.display = 'none'
        slect2.querySelector('ul').previousElementSibling.style.transform = ''
    }

})
const slect3 = document.querySelector('#sec03')
slect3.addEventListener('click', function (e) {
    period = e.target.getAttribute('data-scid')
    if (period) {
        //切换时删除原先的li标签
        while (ul_r.firstChild) {
            ul_r.removeChild(ul_r.firstChild);
        }
        //渲染页面
        render_right(category, period, lang)
    }
    let i = this.getAttribute('data-id')
    if (i == 0) {
        slect3.setAttribute('data-id', 1)

        slect3.querySelector('ul').style.display = 'block'
        slect3.querySelector('ul').previousElementSibling.style.transform = 'scaleY(-1)'
    } else if (i == 1) {
        slect3.setAttribute('data-id', 0)
        slect3.querySelector('ul').style.display = 'none'
        slect3.querySelector('ul').previousElementSibling.style.transform = ''
    }

})



// 点其他地方下拉框收回
// 判断当前下拉框状态值为1则清零
document.onclick = function (e) {
    let a = document.querySelector(".category-list ")
    var cur_obj = e.target;
    console.log(cur_obj)
    if (cur_obj.className !== 'title curr' && cur_obj.className !== 'category-selector' && e.target.nodeName !== 'svg' && e.target.nodeName !== 'path'


    ) {
        slect.setAttribute('data-id', 0)
        document.querySelector(".category-list").style.display = 'none'
        a.previousElementSibling.style.transform = ''
    }
}

//右侧要展示下拉框
let ul_sc = document.querySelector('.list-holder .lang-list')
//筛选语言下拉框的实现
const slect4 = document.querySelector('#sec04')
slect4.addEventListener('click', function (e) {


    setTimeout(function () {
        let a1 = slect4.querySelector('.lang-list')
        clientHeight_sc = a1.clientHeight
        console.log(clientHeight_sc)
        slectThumb()
    }, 1000);



    // console.log(e.target)
    //只有当前点击的是下拉框里面的选项才能执行
    if (e.target.getAttribute('data-id') != 1) {
        //切换时删除原先的li标签
        while (ul_r.firstChild) {
            ul_r.removeChild(ul_r.firstChild);
        }
        slect4.querySelector('.title').innerHTML = e.target.innerHTML
        //转换成小写
        lang = e.target.innerHTML.toLowerCase()
        render_right(category, period, lang)

    }

    let b = slect4.querySelector('.lang-panel')
    let a = b.querySelector('.lang-panel .iScrollIndicator')
    let i = this.getAttribute('data-id')
    if (i == 0) {
        slect4.setAttribute('data-id', 1)
        // console.log(b.querySelector('.iScrollIndicator'))
        a.style.display = 'block'
        b.style.display = 'block'
        slect4.querySelector('.arrow').style.transform = 'scaleY(-1)'
    } else if (i == 1) {
        slect4.setAttribute('data-id', 0)
        b.style.display = 'none'
        a.style.display = 'none'
        slect4.querySelector('.arrow').style.transform = ''
    }

})

//筛选语言滚动条的实现
//首先，判断当前可视页面的长度是否大于ul的长度，若小于则展示滚动条。


// console.log(x.clientHeight)  滚动条的长度


//左侧要展示页面的总高度
let clientHeight_left
//容器展示页的高度
let wrap = document.querySelector('.feed-list ')
//滑块
let thumb = wrap.querySelector('.iScrollIndicator')
//滑块槽
let scrollbar = document.querySelector('.feed-list .iScrollLoneScrollbar')
// 负责实现滚动条的动态变化
//容器卷去的高度
let scrollTop = 0
//滚动条高度   
let sliderTop = 0
//左侧展示栏滚动条相关事件
function updateThumb() {
    //设置滑块的高度
    let heightPercentage = ((wrap.clientHeight * scrollbar.clientHeight) / clientHeight_left);
    thumb.style.height = heightPercentage + "px";

    wrap.addEventListener('mousewheel', (e) => {
        // 滑块区域与内容区域的比例

        // console.log('滑块的高度:'+thumb.clientHeight)
        // console.log('容器展示页的高度:' + wrap.clientHeight)
        // console.log('要展示页面的总高度:' + clientHeight_left)
        // console.log('要展示滑块槽的总高度:'+scrollbar.clientHeight)
        // console.log('要展示卷去的总高度:'+ul.scrollHeight)

        //  if(e.wheelDirection=="down"){
        //     //滚动往下，菜单内容往上
        //      scrollTop += 150;
        //      console.log('e.deltaY:'+e.deltaY)
        // }else{
        //      scrollTop -= 150;
        // }

        scrollTop = scrollTop + e.deltaY;
        let sliderTop = (scrollTop / (clientHeight_left - wrap.clientHeight)) * (scrollbar.clientHeight - heightPercentage)
        // console.log('sliderTop:' + sliderTop)

        if (scrollTop < 0) {
            scrollTop = 0
            sliderTop = 0
        }
        let x = clientHeight_left - wrap.clientHeight
        if (scrollTop < x) {
            ul.style.transform = 'translateY(-' + scrollTop + 'px)'
            thumb.style.transform = 'translateY(' + sliderTop + 'px)'
            // console.log('鼠标滚轮' + scrollTop)
        } else {
            scrollTop = x

        }

    })
}

//右侧要展示下拉框的总高度
let clientHeight_sc
//容器展示页的高度
let wrap_sc = document.querySelector('.list-holder')
//滑块
let thumb_sc = wrap_sc.querySelector('.iScrollIndicator')
//滑块槽
let scrollbar_sc = document.querySelector('#sec04 .iScrollLoneScrollbar')
// 负责实现滚动条的动态变化
//容器卷去的高度
let scrollTop_sc = 0
//滚动条高度   
let sliderTop_sc = 0
//右侧下拉框滚动条相关事件
function slectThumb() {

    let heightPercentage = (wrap.clientHeight * 100 / clientHeight_sc);
    thumb.style.height = heightPercentage + "%";
    wrap_sc.addEventListener('mousewheel', (e) => {
        // 滑块区域与内容区域的比例
        let heightPercentage = (wrap_sc.clientHeight * 400 / clientHeight_sc);
        thumb_sc.style.height = heightPercentage + "%";

        console.log('滑块的高度:' + thumb_sc.clientHeight)
        console.log('容器展示页的高度:' + wrap_sc.clientHeight)
        console.log('要展示页面的总高度:' + clientHeight_sc)
        console.log('要展示滑块槽的总高度:' + scrollbar_sc.clientHeight)
        console.log('要展示卷去的总高度:' + ul_sc.scrollHeight)
        scrollTop_sc = scrollTop_sc + e.deltaY;
        let sliderTop_sc = (scrollTop_sc / clientHeight_sc) * (scrollbar_sc.clientHeight)
        console.log('sliderTop_sc:' + sliderTop_sc)

        if (scrollTop_sc < 0) {
            scrollTop_sc = 0
            sliderTop_sc = 0
        }
        let x = clientHeight_sc - wrap_sc.clientHeight
        if (scrollTop_sc < x) {
            ul_sc.style.transform = 'translateY(-' + scrollTop_sc + 'px)'
            thumb_sc.style.transform = 'translateY(' + sliderTop_sc + 'px)'
            console.log('鼠标滚轮' + scrollTop_sc)
        } else {
            scrollTop_sc = x

        }
    })
}


//左侧要展示页面的总高度
let clientHeight_right
//容器展示页的高度
let wrap_r = document.querySelector('.github-source .entry-list')
//滑块
let thumb_r = wrap_r.querySelector('.iScrollIndicator')
//滑块槽
let scrollbar_r = document.querySelector('#bar3')
// 负责实现滚动条的动态变化
//容器卷去的高度
let scrollTop_r = 0
//滚动条高度   
let sliderTop_r = 0
//右侧展示栏滚动条相关事件
function RightThumb() {
    cal_r(wrap_r,scrollbar_r,clientHeight_right,thumb_r)
    wrap_r.addEventListener('mousewheel', (e) => {
        // 滑块区域与内容区域的比例
        let scroll = document.querySelector('#ul2')
        // console.log('滑块的高度:'+thumb_r.clientHeight)
        // console.log('容器展示页的高度:' + wrap_r.clientHeight)
        // console.log('要展示页面的总高度:' + clientHeight_right)
        // console.log('要展示滑块槽的总高度:'+scrollbar_r.clientHeight)
        console.log('要展示卷去的总高度:'+scroll.scrollTop)
        scrollTop_r = scrollTop_r + e.deltaY;
        let sliderTop_r = (scrollTop_r / (clientHeight_right - wrap_r.clientHeight)) * (scrollbar_r.clientHeight)

        // console.log('scrollTop_r:' + scrollTop_r)
        // console.log(e.deltaY)
        if (scrollTop_r < 0) {
            scrollTop_r = 0
            sliderTop_r = 0
        }
        let x = clientHeight_right - wrap_r.clientHeight
        if (scrollTop_r < x) {
            ul2.style.transform = 'translateY(-' + scrollTop_r + 'px)'
            thumb_r.style.transform = 'translateY(' + sliderTop_r + 'px)'
            // console.log('鼠标滚轮' + scrollTop_r)
        }
        else {
            scrollTop_r = x

        }

    })
}
//计算滚动条长度
function cal_r(wrap,scrollbar,clientHeight,thumb) {
    let heightPercentage = (wrap.clientHeight * scrollbar.clientHeight / clientHeight);
    thumb.style.height = heightPercentage + "px";
}

