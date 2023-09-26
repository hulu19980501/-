//左侧窗口接口
async function getData_zh() {
    const res = await fetch("https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed?uuid=7036578019113059843&aid=6587", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "none",
            "x-secsdk-csrf-token": "000100000001b6cd0f08e02ddcce75fac8cbab80227cd6939ff973d83961b159dbfc2f5b94911755b524a7dac695"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"client_type\":6587,\"cursor\":\"0\",\"id_type\":2,\"limit\":20,\"sort_type\":200}",
        "method": "POST",
    });
    const json = await res.json();
    console.log(json)
    return json.data;
}

async function getData_zh_zx() {
    const res = await fetch("https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed?uuid=7036578019113059843&aid=6587", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "none",
            "x-secsdk-csrf-token": "000100000001b6cd0f08e02ddcce75fac8cbab80227cd6939ff973d83961b159dbfc2f5b94911755b524a7dac695"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"client_type\":6587,\"cursor\":\"0\",\"id_type\":2,\"limit\":20,\"sort_type\":300}",
        "method": "POST",
    });
    const json = await res.json();
    console.log(json)
    return json.data;
}

async function getData_qd() {
    const res = await fetch("https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed?uuid=7036578019113059843&aid=6587", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "none",
            "x-secsdk-csrf-token": "000100000001b6cd0f08e02ddcce75fac8cbab80227cd6939ff973d83961b159dbfc2f5b94911755b524a7dac695"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"limit\":20,\"client_type\":6587,\"cursor\":\"0\",\"id_type\":2,\"cate_id\":\"6809637767543259144\",\"sort_type\":200}",
        "method": "POST",
    });;

    const json = await res.json();
    console.log("json", json.data);
    return json.data;
}

async function getData_hd() {
    const res = await fetch("https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed?uuid=7036578019113059843&aid=6587", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "none",
            "x-secsdk-csrf-token": "00010000000158f5f2813c3aa8fbad50c285b7f489bce131600e46720f0e9cb98ef5c29c01b81755b19fc78730d7"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"limit\":20,\"client_type\":6587,\"cursor\":\"0\",\"id_type\":2,\"cate_id\":\"6809637769959178254\",\"sort_type\":200}",
        "method": "POST",
    });

    const json = await res.json();
    console.log("json", json);
    return json.data;
}

async function getData_android() {
    const res = await fetch("https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed?uuid=7036578019113059843&aid=6587", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "none",
            "x-secsdk-csrf-token": "00010000000158f5f2813c3aa8fbad50c285b7f489bce131600e46720f0e9cb98ef5c29c01b81755b19fc78730d7"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"limit\":20,\"client_type\":6587,\"cursor\":\"0\",\"id_type\":2,\"cate_id\":\"6809635626879549454\",\"sort_type\":200}",
        "method": "POST",
    });

    const json = await res.json();
    console.log("json", json);
    return json.data;
}

async function getData_ios() {
    const res = await fetch("https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed?uuid=7036578019113059843&aid=6587", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "none",
            "x-secsdk-csrf-token": "00010000000158f5f2813c3aa8fbad50c285b7f489bce131600e46720f0e9cb98ef5c29c01b81755b19fc78730d7"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"limit\":20,\"client_type\":6587,\"cursor\":\"0\",\"id_type\":2,\"cate_id\":\"6809635626661445640\",\"sort_type\":200}",
        "method": "POST",
    });

    const json = await res.json();
    console.log("json", json);
    return json.data;
}

async function getData_ai() {
    const res = await fetch("https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed?uuid=7036578019113059843&aid=6587", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "none",
            "x-secsdk-csrf-token": "00010000000158f5f2813c3aa8fbad50c285b7f489bce131600e46720f0e9cb98ef5c29c01b81755b19fc78730d7"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"limit\":20,\"client_type\":6587,\"cursor\":\"0\",\"id_type\":2,\"cate_id\":\"6809637773935378440\",\"sort_type\":200}",
        "method": "POST",
    });

    const json = await res.json();
    console.log("json", json);
    return json.data;
}
async function getData_read() {
    const res = await fetch("https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed?uuid=7036578019113059843&aid=6587", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "none",
            "x-secsdk-csrf-token": "00010000000158f5f2813c3aa8fbad50c285b7f489bce131600e46720f0e9cb98ef5c29c01b81755b19fc78730d7"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"limit\":20,\"client_type\":6587,\"cursor\":\"0\",\"id_type\":2,\"cate_id\":\"6809637772874219534\",\"sort_type\":200}",
        "method": "POST",
    });

    const json = await res.json();
    console.log("json", json);
    return json.data;
}
async function getData_kf() {
    const res = await fetch("https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed?uuid=7036578019113059843&aid=6587", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "none",
            "x-secsdk-csrf-token": "00010000000158f5f2813c3aa8fbad50c285b7f489bce131600e46720f0e9cb98ef5c29c01b81755b19fc78730d7"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"limit\":20,\"client_type\":6587,\"cursor\":\"0\",\"id_type\":2,\"cate_id\":\"6809637771511070734\",\"sort_type\":200}",
        "method": "POST",
    });

    const json = await res.json();

    console.log("json", json);
    return json.data;
}

async function getData_dmrs() {
    const res = await fetch("https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed?uuid=7036578019113059843&aid=6587", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "none",
            "x-secsdk-csrf-token": "000100000001b6cd0f08e02ddcce75fac8cbab80227cd6939ff973d83961b159dbfc2f5b94911755b524a7dac695"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"limit\":20,\"client_type\":6587,\"cursor\":\"0\",\"id_type\":2,\"cate_id\":\"6809637776263217160\",\"sort_type\":200}",
        "method": "POST",
    });

    const json = await res.json();

    console.log("json", json);
    return json.data;
}

async function getData_left() {
    const res = await fetch("https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed?uuid=7036578019113059843&aid=6587", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "none",
            "x-secsdk-csrf-token": "000100000001b6cd0f08e02ddcce75fac8cbab80227cd6939ff973d83961b159dbfc2f5b94911755b524a7dac695"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        body: JSON.stringify(left_body),
        "method": "POST",
    });

    const json = await res.json();

    console.log("json", json);
    return json.data;
}

let left_body = {
    limit: 20,
    client_type: 6587,
    cursor: '0',
    id_type: 2,
    cate_id: '6809637776263217160',
    sort_type:200
};

//左侧页面渲染函数(根据用户点击下拉框选择的标签来传递id值)
//  data.article_info.title(标题)  data.article_info.comment_count (评论数)  digg_count(点赞数)
// article_info.article_id:"7189499500925288504" (文章跳转)  article_info.ctime (时间戳 ) data.tags.tag_name(标签名)
// category.category_name
let left_id = 1;
let right_id = 1;
//传入的id代表是否为最新,若是则为1
function render_left(left_id,id) {
    const ul = document.querySelector(".feed-list ul")
    let x = null
    //根据传入的id值来渲染左侧
    if(id == 1){
        left_body.sort_type = 300
        if (left_id == 1) {
            x = getData_zh_zx()
        } else if (left_id == 2) {
            left_body.cate_id = '6809637767543259144'
            x = getData_left()
        }
        else if (left_id == 3) {
            left_body.cate_id = '6809637769959178254'
            x = getData_left()
        }
        else if (left_id == 4) {
            left_body.cate_id = '6809635626879549454'
            x = getData_left()
        }
        else if (left_id == 5) {
            left_body.cate_id = '6809635626661445640'
            x = getData_left()
        }
        else if (left_id == 6) {
            left_body.cate_id = '6809637773935378440'
            x = getData_left()
        }
        else if (left_id == 7) {
            left_body.cate_id = '6809637772874219534'
            x = getData_left()
        }
        else if (left_id == 8) {
            left_body.cate_id = '6809637771511070734'
            x = getData_left()
        }
        else if (left_id == 9) {
            left_body.cate_id = '6809637776263217160'
            x = getData_left()
        }
        
    }else{
        if (left_id == 1) {
            x = getData_zh()
        } else if (left_id == 2) {
            x = getData_qd()
        }
        else if (left_id == 3) {
            x = getData_hd()
        }
        else if (left_id == 4) {
            x = getData_android()
        }
        else if (left_id == 5) {
            x = getData_ios()
        }
        else if (left_id == 6) {
            x = getData_ai()
        }
        else if (left_id == 7) {
            x = getData_read()
        }
        else if (left_id == 8) {
            x = getData_kf()
        }
        else if (left_id == 9) {
            x = getData_dmrs()
        }
    
    }
   
    x.then((res) => {
        //循环渲染左侧页面
        const trArr = res.map(function (item, i) {
            let x 

            // console.log(item)
            if (left_id == 1) {
               x = getTime(item.item_info.article_info.ctime)
                // console.log(document.querySelector('.category-selector').firstChild)
                document.querySelector('.category-selector').firstElementChild.innerHTML = '综合'
                return `<li class="item" ><a class="feed-item"
            href="https://juejin.cn/post/${item.item_info.article_info.article_id}"
            target="_blank" >
            <div class="content" ><span class="title" data-v-bfd81262="">${item.item_info.article_info.title}</span><!----></div>
            <div class="meta-box" >
              <div class="article-info has-tag" >
                <div class="tags-wrapper" >
                  <div class="tags" >${item.item_info.tags[0].tag_name}</div>
                  <div class="dot" ></div>
                  
                </div>
                <div class="timestamp" >${x}</div>
              </div>
              <div class="interact-info" >
                <div class="detail diggs" >赞 ${item.item_info.article_info.digg_count}</div>
                <div class="dot" ></div>
                <div class="detail comments" >评论${item.item_info.article_info.comment_count}</div>
              </div>
            </div>
          </a></li>
            `
            } else {
                x = getTime(item.article_info.ctime)
                document.querySelector('.category-selector').firstElementChild.innerHTML = `${item.category.category_name}`
                return `<li class="item" ><a class="feed-item"
            href="https://juejin.cn/post/${item.article_info.article_id}"
            target="_blank" >
            <div class="content" ><span class="title" data-v-bfd81262="">${item.article_info.title}</span><!----></div>
            <div class="meta-box" >
              <div class="article-info has-tag" >
                <div class="tags-wrapper" >
                  <div class="tags" >${item.tags[0].tag_name}</div>
                  <div class="dot" ></div>
                  <div class="tags" ></div>
                </div>
                <div class="timestamp" >${x}</div>
              </div>
              <div class="interact-info" >
                <div class="detail diggs" >赞 ${item.article_info.digg_count}</div>
                <div class="dot" ></div>
                <div class="detail comments" >评论${item.article_info.comment_count}</div>
              </div>
            </div>
          </a></li>
            `
            }
        })
        ul.innerHTML = trArr.join('')
        //获取当前ul的高度提供给滚轮事件使用
        clientHeight_left = ul.clientHeight
        updateThumb()




    })


}
render_left(left_id,0)


//点击最新的时候, 如果当前的页面为后端, 则将页面刷新为最新的后端.点击推荐则切换到推荐栏



async function getData_all() {
    const res = await fetch("https://e.juejin.cn/resources/github", {
        headers: {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "none",
            "x-extension-version": "0.9.1"
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: JSON.stringify(newBody),
        method: "POST",
    });

    const json = await res.json();

    console.log("json", json);
    return json.data;
}


// 左侧接口根据综合和其他分为两种,综合根据最新和当前分为两种sort_type\":200为当前,300为最新.
//其他根据当前最新分为两种,根据cate_id分为8种

//upcome trend 热门 新生


let newBody = {
    category: 'upcome',
    period: 'month',
    lang: 'python',
    offset: 0,
    limit: 30
};


//右侧页面的渲染函数,调用时传递三个值分别代表下拉框:热门,日期,语言
let category = 'trending'
let period = 'week'
let lang = 'javascript'

function render_right(category, period, lang) {
    const ul2 = document.querySelector('#ul2')
    newBody.category = category
    newBody.period = period
    newBody.lang = lang
    // const jsonString = JSON.stringify({ body: newBody });
    // right_rq.body = jsonString
    if (category == 'trending') {
        document.querySelector('#sec02').firstElementChild.innerHTML = '热门'
    } else {
        document.querySelector('#sec02').firstElementChild.innerHTML = '新生'
    }
    if (period == 'week') {
        document.querySelector('#sec03').firstElementChild.innerHTML = '本周'
    } else if (period == 'month') {
        document.querySelector('#sec03').firstElementChild.innerHTML = '本月'
    } else {
        document.querySelector('#sec03').firstElementChild.innerHTML = '今日'
    }

    let x = getData_all()
    x.then((res) => {
        const trArr = res.map(function (item, i) {

            return `<li class="item-row" ><a class="title-text" 
            href="${item.url}"
            target="_blank">
            <div class="entry item-box" >
              <div class="item" >
                <div class="repo-content" >
                  <div class="repo-header">
                    <h2 class="title" ><span class="author" >${item.username}</span><span class="divider"
                          > / </span><span class="name"
                          >${item.reponame}</span></h2>
                  </div>
                  <div class="repo-desc" >
                    <div class="desc"
                      title="${item.description}"
                      >${item.description}</div>
                  </div>
                  <div class="repo-meta" ><span class="star icon ion-android-star"
                      > ${item.starCount}</span><span class="fork icon ion-fork-repo" >
                      ${item.forkCount}</span><span class="lang" ><i class="icon lang-color" 
                        style="background-color:${item.langColor}"></i><span
                        >${item.lang}</span></span></div>
                </div>
              </div>
            </div>
            </a>
          </li>
            `
        })


        ul2.innerHTML = trArr.join('')
        clientHeight_right = ul2.clientHeight
        RightThumb()
    })
}

getData_all()
render_right(category, period, lang)

//时间戳处理函数
function getTime(time) {
   
    // console.log('传进来的时间戳:'+time)
    let timeDiff = Math.floor(Date.now() / 1000) - parseFloat(time)  // 时间差的毫秒数
    // console.log('当前时间戳:'+Math.floor(Date.now() / 1000))
    // console.log('当前时间戳差值:'+timeDiff)
    if (timeDiff > 31536000) {
        let years = Math.floor(timeDiff / (365 * 24 * 3600 )); // 计算出年份
        return `${years} 年前`
    } else if(timeDiff < 31536000 && timeDiff > 2592000){
       
        let month = Math.floor(timeDiff / (30 * 24 * 3600 )); // 计算出月份
        return `${month} 月前`
    }else if(timeDiff < 2592000 && timeDiff > 86400){
       
        let days = Math.floor(timeDiff / (24 * 3600)); // 计算出天数
        return `${days} 天前`
    }else if(timeDiff < 86400 && timeDiff> 3600){
       
        let hours = Math.floor(timeDiff / 3600); // 计算小时数
        return `${hours} 小时前`
    }else if(timeDiff < 3600 &&timeDiff>60 ){
        let min = Math.floor(timeDiff / 60 ); // 计算小时数
       return `${min} 分钟前`
    }else{
        return' 最近'

}}







