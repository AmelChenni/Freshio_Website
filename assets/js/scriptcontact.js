// VARIABLES
var exampleInputName = document.getElementById("exampleInputName");
var exampleInputEmail = document.getElementById("exampleInputEmail");
var exampleInputSubject = document.getElementById("exampleInputSubject");
var exampleInputMsg = document.getElementById("exampleInputMsg");
var table =document.getElementsByName("table");
var submit = document.getElementById("submit");
var data =document.getElementById("data");

var update = document.getElementById('update');
update.style.display = "none";


// //
var demo = ``; 
var course ={ };
var courses ;
if(JSON.parse(localStorage.getItem('courses')) === null){
    courses = [];
}else{
    courses = JSON.parse(localStorage.getItem('courses'));
}
READ();

// // 
submit.onclick = function(e){
    e.preventDefault();
    ADD();
    clear();
    READ();
   
}

// delett.onclick = function(e){
//     e.preventDefault();
//     delet();
// }

// CREATE COURSE FUNCTION
function ADD(){
    course ={
        exampleInputName:exampleInputName.value,
        exampleInputEmail:exampleInputEmail.value,
        exampleInputSubject:exampleInputSubject.value,
        exampleInputMsg:exampleInputMsg.value
    }
    courses.push(course);
    localStorage.setItem('courses',JSON.stringify(courses));
}
function clear(){
    exampleInputName.value='';
    exampleInputEmail.value='';
    exampleInputSubject.value='';
    exampleInputMsg.value='';
}
// READ COURSE FUNCTION
function READ() {
    demo = ``;
    for(var i = 0; i < courses.length; i++){
    demo += `
    <tr>
    <td>${i+1}</td>
    <td>${courses[i].exampleInputName}</td>
    <td>${courses[i].exampleInputEmail}</td>
    <td>${courses[i].exampleInputSubject}</td>
    <td>${courses[i].exampleInputMsg}</td>
    <td> <button onclick="updateCourse(${i})" class="btn btn-info">UPDATE</button> </td>
    <td> <button onclick="deleteCourse(${i})" class="btn btn-danger">DELETE</button> </td>

    </tr>
    `;
}
data.innerHTML=demo;
}

// DELETE COURSE FUNCTION
function delet(){
  courses = [];
  data.innerHTML = "";
  localStorage.setItem('courses',JSON.stringify(courses));

}
function deleteCourse(index){
    courses.splice(index,1);
    localStorage.setItem('courses',JSON.stringify(courses));

    READ();
}


function updateCourse(index){
    console.log(index);
    for(var i =0; i < courses.length ; i++){
        if(index == i){
            demo += `
            <tr>
            <td>${i+1}</td>
            <td>${courses[i].exampleInputName}</td>
            <td>${courses[i].exampleInputEmail}</td>
            <td>${courses[i].exampleInputSubject}</td>
            <td>${courses[i].exampleInputMsg}</td>
            <td> <button onclick="updateCourse(${i})" class="btn btn-info">UPDATE</button> </td>
            <td> <button onclick="deleteCourse(${i})" class="btn btn-danger">DELETE</button> </td>
        
            </tr>
            `;

        }
    }
}

// var exampleInputName = document.getElementById("exampleInputName");
// var exampleInputEmail = document.getElementById("exampleInputEmail");
// var exampleInputSubject = document.getElementById("exampleInputSubject");
// var exampleInputMsg = document.getElementById("exampleInputMsg");


function updateCourse(index){
    var course = courses[index];
    currentIndex = index;
   
    exampleInputName.value = course.exampleInputName;
    exampleInputEmail.value = course.exampleInputEmail;
    exampleInputSubject.value = course.exampleInputSubject;
    exampleInputMsg.value = course.exampleInputMsg;
    update.style.display = "inline";
    submit.style.display= "none";
}

update.onclick = function(e){
    e.preventDefault();
    course ={
        exampleInputName:exampleInputName.value,
        exampleInputEmail:exampleInputEmail.value,
        exampleInputSubject:exampleInputSubject.value,
        exampleInputMsg:exampleInputMsg.value
    }
    courses[currentIndex].exampleInputName = course.exampleInputName;
    courses[currentIndex].exampleInputEmail = course.exampleInputEmail;
    courses[currentIndex].exampleInputSubject = course.exampleInputSubject;
    courses[currentIndex].exampleInputMsg = course.exampleInputMsg;
    localStorage.setItem('courses',JSON.stringify(courses));

    READ();
    update.style.display = "none";
    submit.style.display= "inline";
    clear();


}

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