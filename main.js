/**
 * Created by Administrator on 2017/8/25 0025.
 */

    var title=document.getElementsByClassName('title');
    var title_son=document.getElementsByClassName('title_son');
    var con=document.getElementsByClassName('con');
    var con_son=document.getElementsByClassName('con_son');
    console.log(title,title_son,con,con_son)
    for(let i=0;i<title_son.length;i++) {
        title_son[i].index = i;
        title_son[i].onclick = function () {
            for (let j = 0; j < title_son.length; j++) {
                con_son[j].style.zIndex = 1;
            }
            con_son[this.index].style.zIndex = 10;
        }
    }










