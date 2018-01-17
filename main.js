

 //jquery
 //
 //
 //点击
     $('.tabt').click(function(){
         var index = $(this).index();
         $(".tabc").eq(index).show().siblings().hide();
     })

// 鼠标移入
    $('.tabt').mouseenter(function(){
        var index = $(this).index();
        $('tabc').eq(index).show().siblings().hide();
    })


/**
 * 原生js
 */

    var tabts=document.getElementsByClassName('tab-title');
    var tabt=document.getElementsByClassName('tabt');
    var tabcons=document.getElementsByClassName('tab-con');
    var tabc=document.getElementsByClassName('tabc');


/**
 * 层级
 */
    for(let i=0;i<tabt.length;i++) {
        tabt[i].index = i;
        tabt[i].onclick = function () {
            for (let j = 0; j < tabt.length; j++) {
                tabc[j].style.zIndex = 1;
            }
            tabc[this.index].style.zIndex = 10;
        }
    }
/**
 * 隐藏
 */
     for(let i=0;i<tabt.length;i++) {
         tabt[i].index = i;
         tabt[i].onclick = function () {
             for (let j = 0; j < tabt.length; j++) {
                 tabc[j].style.display = "none";
             }
             tabc[this.index].style.display = "block;";
         }
     }
