function locomotive(){
    // gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


function menuBar(){
    var menu= document.querySelector("#menu")

var main= document.querySelector("#main")

var nav1=document.querySelector("#nav1 i")


var i= document.querySelector("#nav-bar i")


i.addEventListener("click",()=>{

    menu.style.top="0"
    main.style.display="none"
    
})

nav1.addEventListener("click",()=>{
    menu.style.top="-100%"
    main.style.display="block"

})

}


function animation(){
    var first= document.querySelectorAll("#page3 h2")

first.forEach(function(val){
    var text= val.textContent
    var res= text.split("")
    // console.log(res)
    var clutter=""
    
    res.forEach(function(event){
    clutter+= `<span>${event}</span>`

    })


    val.innerHTML=clutter


})
}


function lineAnimation(){
    var line= document.querySelector("#line")
    var p= document.querySelector("p")


document.addEventListener("scroll",function(){
    var top= document.documentElement.scrollTop
    var height= document.documentElement.scrollHeight- document.documentElement.clientHeight

    var res= (top/height) * 100;

    line.style.width= res +"%"

    p.textContent=Math.round(res)+"%"


})

}


function imageScroller(){

    var left= document.querySelector("#left")

    var right= document.querySelector("#right")

    var img1= document.querySelector("#left img")
    var img2= document.querySelector("#right img")


left.addEventListener("mouseenter",function(){
    left.addEventListener("mousemove",function(val){
        img1.style.display="block"
        gsap.from("#left img",{
            x: val.x-400,
            y: val.y-500,
    })
    

    })
})


left.addEventListener("mouseleave",function(){
    img1.style.display="none"

})


right.addEventListener("mouseenter",function(){
    right.addEventListener("mousemove",function(val){
        img2.style.display="block"
        gsap.from("#right img",{
            x: val.x-1000,
            y: val.y-500,
    })
    

    })
})

right.addEventListener("mouseleave",function(){
    img2.style.display="none"

})
}


function fruits(){
    // Fruit1.
var mango= document.querySelector("#fruits1")

var image= document.querySelector("#fruits1 h2 img")


// var h2= document.querySelector("#fruits1 h2 img")

mango.addEventListener("mouseenter",function(){
    mango.addEventListener("mousemove",function(val){
        image.style.display="block"
        gsap.from("#fruits1 h2 img",{
            x:val.x-1050,
            y: val.y-350
        })
    })
})

mango.addEventListener("mouseleave",function(){
    image.style.display="none"
})



// Fruit2.

var banana= document.querySelector("#fruits2")

var image2= document.querySelector("#fruits2 h2 img")


// var h2= document.querySelector("#fruits1 h2 img")

banana.addEventListener("mouseenter",function(){
    banana.addEventListener("mousemove",function(val){
        image2.style.display="block"
        gsap.from("#fruits2 h2 img",{
            x:val.x-1050,
            y: val.y-450
        })
    })
})

banana.addEventListener("mouseleave",function(){
    image2.style.display="none"
})




// Fruit3.


var pine= document.querySelector("#fruits3")

var image3= document.querySelector("#fruits3 h2 img")


// var h2= document.querySelector("#fruits1 h2 img")

pine.addEventListener("mouseenter",function(){
    pine.addEventListener("mousemove",function(val){
        image3.style.display="block"
        gsap.from("#fruits3 h2 img",{
            x:val.x-1050,
            y: val.y-500
        })
    })
})

pine.addEventListener("mouseleave",function(){
    image3.style.display="none"
})
}



locomotive()

menuBar()

animation();

lineAnimation()

imageScroller()

fruits()







var tl= gsap.timeline();


tl
    .from('#nav h3,h4',{
        y:-500,
        stagger:.4,
        duration:.5
    })


    .from("#page1 h1",{
        y:300,
        opacity:0,
        duration:.5
    },'hi')

    .from("#page1 h2,h5",{
        y:300,
        opacity:0,
        duration:.5
    },'hi')




    .to('#page2 img',{
        transform:'scale(1)',
        opacity:1,
        duration:.4,
        scrollTrigger:{
            trigger:"#page2 img",
            scroller:"#main",
            // markers:true,
            start:"top 70%",
            end:"top 10%",
            scrub:3
        }

    })




    .to("#page3 h2 span",{
        color:'aqua',
        stagger:.1,
        scrollTrigger:{
            trigger:"#page3 h2",
            scroller:"#main",
            // markers:true,
            start: "top 80%",
            end:"top -10%",
            scrub:3
        }
    })

    .to("#line",{
        width:"95%",
        scrollTrigger:{
            trigger:"#line",
            scroller:"#main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:3
        }
    })


    .to("#page6 img",{
        rotate:360,
        repeat:-1,
        duration:2,
        ease:Power0.easeNone
    })


