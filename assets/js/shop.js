// Get Data from file.json and display it in html
var data =[];

$(function(){
    $.getJSON("/assets/js/file.json",function(data){
        data =data.recipes;
        console.log(data);
        let contentAll = "";
        
        for(let i =0 ; i< data.length ; i++){
          // DISPLAY ALL PRODUCT
        
            contentAll += `<div class="card col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="img">
              <img src="${data[i].img_url}" alt="">
            </div>
            <div class="info">
              <h3>${data[i].title}</h3>
              <p>${data[i].price}</p>
              <button class="btn">Select options <i class="fa-solid fa-angles-right"></i></button>
            </div>
            <div class="icons">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-shuffle"></i>
              <i class="fa-regular fa-eye"></i>
            </div>
          </div>
            `;   


        }

        document.getElementById("page").innerHTML = contentAll;
       


      
    });
    });

    
// Scroll to Top
var scrollTop = document.querySelector('.scrollTop');
var ourblog = document.querySelector('.our-blog');
scrollTop.style.opacity = "0";

window.addEventListener("scroll",function(){
  if(window.scrollY >= ourblog.offsetTop){
    scrollTop.style.opacity = "1"
  }
  if(window.scrollY < ourblog.offsetTop){
    scrollTop.style.opacity = "0"
  }
})
  
scrollTop.addEventListener('click',function(){
  window.scroll({
    top:0,
    behavior : "smooth"
  })
})

// Spinner
var spinner = document.querySelector('.spinner');

document.body.style.overflow = 'hidden';
window.addEventListener('load',function(){
  setTimeout(function(){
    spinner.style.opacity = "0";
    spinner.style.visibility = "hidden";
    spinner.style.transition = "1s";
    document.body.style.overflow = 'auto';
  },2000)
})

