// Back to Top
$(document).ready(function()
{
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50)
            $('#back-to-top').fadeIn();
        else
            $('#back-to-top').fadeOut();
        });

    // scroll body to 0px on click
    $('#back-to-top').click(function ()
    {
        $('body,html').animate({ scrollTop: 0 }, 800);
        return false;
    });
});

// Header animation
var speed = 500;
var header = 0;

// Header view
$(window).scroll(function()
{
	if($(window).scrollTop() > 100)
	{
		$(".header-wrapper-light").attr("class", "header-wrapper-dark");
        if(header == 0)
        {
            header = 1;
            $('.desktop').stop().animate({ paddingTop:'15px' }, speed);
        }

	}
	else
	{
        $(".header-wrapper-dark").attr("class", "header-wrapper-light");
        if(header == 1)
        {
            header = 0;
            $('.desktop').stop().animate({ paddingTop:'45px' }, speed);
        }  
	}
});

 // Navigation 
function menuDetect()
{
    var windowWidth = $(window).width();

    if (windowWidth > 992)
    {
        $("nav, header").removeClass("mobile");
        $("nav, header").addClass("desktop");

        if($("header").attr("class") == "header-wrapper-light desktop")
        {
            $("nav.desktop").css("padding-top", "45px");
        }
    } 
    else 
    {
        $("nav, header").removeClass("desktop");
        $("nav, header").addClass("mobile");

        $("nav.mobile").css("padding-top", "15px");
    }
}

menuDetect();
$(window).resize(menuDetect);

//Menu Button
$(".menu-button").on("click", function() 
{
    if ($(".menu").is(":hidden")) {
        $(".menu").slideDown();
        $(".menu-button").addClass("open");
    } 
    else 
    {
        $("nav.mobile .menu").slideUp();
        $(".menu-button").removeClass("open");
    }
});

//Dropdown
$(".menu").superfish({
    delay: 400,
    animation: {
        height: "show"
    },
    animationOut: {
        height: "hide"
    },
    autoArrows: false
});


/**
 * Check a href for an anchor. If exists, and in document, scroll to it.
 * If href argument ommited, assumes context (this) is HTML Element,
 * which will be the case when invoked by jQuery after an event
 */
function scroll_if_anchor(href)
{
    href = typeof(href) == "string" ? href : $(this).attr("href");
    var fromTop = 65;
    
    // If our Href points to a valid, non-empty anchor, and is on the same page (e.g. #foo)
    // Legacy jQuery and IE7 may have issues: http://stackoverflow.com/q/1593174
    if(href.indexOf("#") == 0)
    {
        var target = $(href);
        
        // Older browser without pushState might flicker here, as they momentarily
        // jump to the wrong position (IE < 10)
        if(target.length)
        {
            $('html, body').animate({ scrollTop: target.offset().top - fromTop }, 800);
            if(history && "pushState" in history)
            {
                history.pushState({}, document.title, window.location.pathname + href);
                return false;
            }
        }
    }
}    

// When our page loads, check to see if it contains and anchor
scroll_if_anchor(window.location.hash);

// Intercept all anchor clicks
$("body").on("click", "a.ct-btn-scroll", scroll_if_anchor);