// Get Data from file.json and display it in html
var data =[];

$(function(){
    $.getJSON("/assets/js/file.json",function(data){
        data =data.recipes;
        console.log(data);
        let contentAll = "",contentAll2 = "",contentVegetables = "",contentFruits = "",contentBread="";
        
        for(let i =0 ; i< data.length ; i++){
          // DISPLAY ALL PRODUCT
        
            contentAll += `<div class="card col-lg-3 col-md-4 col-sm-6  mb-4">
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


         

            
              // DISPLAY VEGETABLES PRODUCTS
               if(`${data[i].type}` === 'vegetables'){
                contentVegetables += `<div class="card col-lg-3 mb-4">
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

                // DISPLAY FRUITS PRODUCTS
                if(`${data[i].type}` === 'fruits'){
                  contentFruits += `<div class="card col-lg-3 mb-4">
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

                  // DISPLAY Bread PRODUCTS
                if(`${data[i].type}` === 'bread'){
                  contentBread += `<div class="card col-lg-3 mb-4">
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
        }

        document.getElementById("contentAll").innerHTML = contentAll;
        document.getElementById("contentVegetables").innerHTML = contentVegetables;
        document.getElementById("contentFruits").innerHTML = contentFruits;
        document.getElementById("contentBread").innerHTML = contentBread;



      
    });
    });
    // Progress Control
    // let section =  document.querySelector(".offer");
    // let span =  document.querySelector(".progres span");

    // window.onscroll = function(){
    //   if(window.scrollY >= section.offsetTop){
    //     span.style.width = span.dataset.width;
    //   }
    // };

    let section =  document.querySelector(".offer");
    let spans =  document.querySelectorAll(".progres span");

    window.onscroll = function(){

      if(window.scrollY >= section.offsetTop){
        spans.forEach((span)=>{
        span.style.width = span.dataset.width;
      });
      }
    };

    
// DATE DISPLAY
function display(){
  var content = "";
  for(var i =0 ; i< data.length ; i++){
      content += `<div class="col-md-4 my-3">
      <div class="card p-2">
          <h2>${data[i].title}</h2>
          <p>${data[i].publisher}</p>
          <img src="${data[i].image_url}" alt="">
          <a type="button" class="btn btn-outline-success" href =detailes.html?id=${data[i].recipe_id}>SHOW MORE</a>
      </div>
  </div>
      `;
  }
  document.getElementById("content").innerHTML = content;
}

// Enable hidden nav bar
{
  const nav = document.querySelector("#nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
      nav.style.marginTop = "0px";

    }

    lastScrollY = window.scrollY;
  });
}


// Scroll to Top
var scrollTop = document.querySelector('.scrollTop');
var quality = document.querySelector('.quality');
scrollTop.style.opacity = "0";

window.addEventListener("scroll",function(){
  if(window.scrollY >= quality.offsetTop){
    scrollTop.style.opacity = "1"
  }
  if(window.scrollY < quality.offsetTop){
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

// nav

{
  const nav = document.querySelector("#nav");
  const extra = document.querySelector(".extra");


  // nav.classList.add("nav--hidden");

  window.addEventListener('load',function(){
    setTimeout(function(){
      nav.classList.remove("nav--hidden");
      extra.classList.remove("nav--hidden");




    },2000)
  })


  // window.addEventListener("scroll", () => {
  //   if (lastScrollY < window.scrollY) {
  //     nav.classList.add("nav--hidden");
  //   } else {
  //     nav.classList.remove("nav--hidden");
  //   }

  //   lastScrollY = window.scrollY;
  // });
}
