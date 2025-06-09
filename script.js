/* top 下的下拉菜单*/
$('.List').hover(function() {
    $(this).children('ul').slideDown('fast');
}, function() {
    $(this).children('ul').slideUp('fast');
});

/*  搜索  */
$('.text').focus(function() {
    if ($(this).val() == "输入您想搜索的宝贝") {
        $(this).val("");
        $(this).addClass("textCur");
    }
}).blur(function() {
    if ($(this).val() == "") {
        $(this).val("输入您想搜索的宝贝");
        $(this).removeClass("textCur");
    }

});

$('.Rtext').focus(function() {
    if ($(this).val() == "seach") {
        $(this).val("");
        $(this).css('color', '#000');
    }
}).blur(function() {
    if ($(this).val() == "") {
        $(this).val("seach");
        $(this).css('color', '#ccc');
    }

});

/* 滑动门 */
var $oLis = $('#navMove>li');
var $oSpans = $('#navMove>li>span');
$oLis.click(function() {
    $(this).addClass('current').siblings().removeClass('current');
});


/*  图片自动轮播  */
function flashAuto() {
    var aPage = $('.smallContent ul li');
    var aImg = $('#box li');
    var iSize = aImg.size();
    var index = 0;
    $('.smallLeft').click(function() {
        index--;
        if (index < 0) {
            index = iSize - 1;
        }
        change(index);
    })
    $('.smallRight').click(function() {
        index++;
        if (index > iSize - 1) {
            index = 0;
        }
        change(index);
    })

    aPage.click(function() {
        index = $('.oldsmall').index($(this));
        change(index);
    });

    function change(index) {
        aPage.removeClass('smallCur');
        aPage.eq(index).addClass('smallCur');
        aImg.eq(index).siblings().fadeOut();
        aImg.eq(index).fadeIn();
    }

    function autoshow() {
        index = index + 1;
        if (index <= iSize - 1) {
            change(index);
        } else {
            index = 0;
            change(index);
        }

    }
    int = setInterval(autoshow, 3000);

    function clearInt() {
        $('.smallLeft,.smallRight,#box li,.smallContent ul li').mouseover(function() {
            clearInterval(int);
        })

    }

    function setInt() {
        $('.smallLeft,.smallRight,#box li,.smallContent ul li').mouseout(function() {
            int = setInterval(autoshow, 3000);
        })
    }

    function displayInfo() {
        $('#box li').each(function() {
            $(this).hover(function() {
                $(this).children('.bigPic').stop().slideDown();
            }, function() {
                $(this).children('.bigPic').stop().slideUp();
            });
        });
    }
    clearInt();
    setInt();
    displayInfo();
}
flashAuto();



/* city */
var timeId = null;
$('#tab_one>li').each(function(index) {
    $(this).mouseover(function() {
        var oli = $(this);
        timeId = setTimeout(function() {
            $('#tab_one>li').removeClass('cityCur');
            oli.addClass('cityCur');
            $('.leftTabNews').removeClass('first');
            $('.leftTabNews').eq(index).addClass('first');
        }, 300);
    }).mouseout(function() {
        clearTimeout(timeId);
    });
});



/*  中间tab  */
$('#tab_Two>li').each(function(index) {
    $(this).mouseover(function() {
        var oli = $(this);
        timeId = setTimeout(function() {
            $('#tab_Two>li').removeClass('tabTwoCur');
            oli.addClass('tabTwoCur');
            $('.middleNews').removeClass('firstTwo');
            $('.middleNews').eq(index).addClass('firstTwo');
        }, 300);
    }).mouseout(function() {
        clearTimeout(timeId);
    });
});


$('#tab_Three>li').each(function(index) {
    $(this).mouseover(function() {
        var oli = $(this);
        timeId = setTimeout(function() {
            $('#tab_Three>li').removeClass('tabTwoCur');
            oli.addClass('tabTwoCur');
            $('.middleCon').removeClass('firstThree');
            $('.middleCon').eq(index).addClass('firstThree');
        }, 300);
    }).mouseout(function() {
        clearTimeout(timeId);
    });
});

$('#tab_Four>li').each(function(index) {
    $(this).mouseover(function() {
        var oli = $(this);
        timeId = setTimeout(function() {
            $('#tab_Four>li').removeClass('tabTwoCur');
            oli.addClass('tabTwoCur');
            $('.mainMiddleConTwo').removeClass('firstFour');
            $('.mainMiddleConTwo').eq(index).addClass('firstFour');
        }, 300);
    }).mouseout(function() {
        clearTimeout(timeId);
    });
});

$('#tab_Five>li').each(function(index) {
    $(this).mouseover(function() {
        var oli = $(this);
        timeId = setTimeout(function() {
            $('#tab_Five>li').removeClass('tabTwoCur');
            oli.addClass('tabTwoCur');
            $('.mainMiddleConThree').removeClass('firstFive');
            $('.mainMiddleConThree').eq(index).addClass('firstFive');
        }, 300);
    }).mouseout(function() {
        clearTimeout(timeId);
    });
});


/* tab 下的图片切换  */
function tabPic() {
    $('.NewsPic').each(function() {
        var nowAc = 0;
        $(this).children(".NewsRight").click(function() {
            var $parent = $(this).parents('.NewsPic');
            var $ImgLis = $parent.find('li');
            $ImgLis.each(function() {
                $(this).hide();
            })
            nowAc++;
            if (nowAc == $ImgLis.length) nowAc = 0;
            $ImgLis.eq(nowAc).show();
        });
        $(this).children(".NewsLeft").click(function() {
            var $parent = $(this).parents('.NewsPic');
            var $ImgLis = $parent.find('li');
            $ImgLis.each(function() {
                $(this).hide();
            })
            nowAc--;
            if (nowAc < 0) nowAc = $ImgLis.length - 1;
            $ImgLis.eq(nowAc).show();

        });
    });

}
tabPic();


/*  ranking 排行榜  */
$('.ranking ul li').each(function() {
    $(this).mouseover(function() {
        $('.ranking ul li').find('a').removeClass('rankingcur');
        $(this).find('a').addClass('rankingcur');
    });
});