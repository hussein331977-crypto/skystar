// poem
var words=[
    '今天爱人还未出现',
    '一切好像还没改变',
    '不过我一个人 期待着明天',
    '烟花怦然散开情节',
    '绚烂的夜如此耀眼',
    '温柔承载着我许下的心愿',
    '让渺小的从前变成短短的瞬间',
    '有你让幸福缓缓的呈现',
    '你一出现',
    '阴天变成晴天',
    '隐隐约约',
    '照亮了心里面',
    '心心念念',
    '听你的声音在耳边',
    '你一出现',
    '银河清晖满天',
    '星星点点',
    '连成浪漫幻觉',
    '深深浅浅',
    '勾勒出你我之间的寓言',
    '让渺小的从前变成短短的瞬间',
    '有你让幸福缓缓的呈现',
    '你一出现',
    '阴天变成晴天',
    '隐隐约约',
    '照亮了心里面',
    '心心念念',
    '听你的声音在耳边',
    '你一出现',
    '银河清晖满天',
    '星星点点',
    '连成浪漫幻觉',
    '深深浅浅',
    '勾勒出你我之间的寓言',
    '你一出现',
    '阴天变成晴天',
    '隐隐约约',
    '照亮了心里面',
    '心心念念',
    '听你的声音在耳边',
    '你一出现',
    '银河清晖满天',
    '星星点点',
    '连成浪漫幻觉',
    '深深浅浅',
    '勾勒出你我之间的寓言',
    '我爱你 宝宝',
    '我们会在一起一辈子！',
    '偷偷表白一个叫glx的女孩子',
    '她是世界上最可爱最漂亮的女孩子',
    '情不所起 一往而深',
    '玲珑骰子安红豆',
    '入骨相思知不知',
    '和光同尘',
    '杳霭流玉',
    '月落星沉',
    '霞姿月韵',
    '喜上眉梢',
    '醉后不知天在水',
    '满船星梦压星河',
    '垆边人似月',
    '皓腕凝霜雪',
    '众里嫣然通一顾',
    '人间颜色如尘土',
    '若非群玉山头见',
    '会向瑶台月下逢',
    '沉鱼落雁鸟惊喧',
    '羞花闭月花愁颤',
    '解释春风无限恨',
    '沉香亭北倚阑干'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '我永远爱你 宝宝';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },60500)
      setTimeout(function(){
        textone.innerHTML = '你一出现 阴天变成晴天';
        texttwo.innerHTML = '隐隐约约 照亮了心里面';
        textthree.innerHTML = '心心念念 听你的声音在耳边';
      },120000)


 
