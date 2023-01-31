$('.pro-carousel').owlCarousel({
	autoplay:true,
    items:1,
    loop:true,
    margin:10,
    responsive:{
		0:{
            items:1
        },
        766:{
            items:2
        },
		1200:{
            items:3
        },
    }
});
var response_nav=document.getElementById('resnav');
function menuDisplay()
{
    response_nav.style.visibility="visible";
}
function hideDisplay(navigation)
{
    response_nav.style.visibility="hidden";
}

