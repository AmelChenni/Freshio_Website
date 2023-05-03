/******************************************** */

    // Blogs js

    /******************************************* */

    var data =[];
var request = new XMLHttpRequest();
var demo = document.querySelector(".first-side");
// for(var i = 0 ; i<demo.length;i++){
    // window.addEventListener("load",function(e){
        gatData();
        console.log();

    // })
// }


// API REQUEST

function gatData(){
    request.open('GET',`https://forkify-api.herokuapp.com/api/search?q=pizza`);
request.send();
request.onreadystatechange =function(){
    if(request.readyState==4 && request.status ==200){
        data = JSON.parse(request.response).recipes;
        display();
        console.log(data);
    }
}
}


               

// DATE DISPLAY
function display(){
    var content = "";
    for(var i =0 ; i< data.length ; i++){
        content += ` <div class="page-content">
        <div class="img">
            <img src="${data[i].image_url}" alt="">
        </div>
        <div class="info">
            <button class="btn">package food</button>
            <div class="date">
                <i class="fa-regular fa-calendar"></i>
                <span>October 25.2022 /</span>
                <i class="fa-regular fa-user"></i>
                <span>by admin ${data[i].publisher}/</span>
                <i class="fa-regular fa-comments"></i>                <span>0</span>
                <h2>${data[i].title}</h2>
                <p>Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.</p>
            </div>
        </div>
    </div>
        `;
    }
    document.getElementById("first-side").innerHTML = content;
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