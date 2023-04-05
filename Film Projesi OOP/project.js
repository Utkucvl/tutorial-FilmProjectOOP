const form = document.getElementById("film-form");
const title = document.querySelector("#title");
const director = document.querySelector("#director");
const url = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearbutton = document.querySelector("#clear-films")




eventListeners();

function eventListeners(){

    form.addEventListener("submit",addFilms);
    
    document.addEventListener("DOMContentLoaded",function(){
      let arr = Storage.getFilmsArray();
      UI.loadFilmstoUI(arr);
    })
 
    cardBody.addEventListener("click",deleteFilm);

    clearbutton.addEventListener("click",clearAll);

    
      
    

    
}


function addFilms(e){
   const elementtitle = title.value;
   const elementdirector = director.value;
   const elementurl = url.value;

   if(elementdirector === "" || elementtitle === "" || elementurl === ""){
    UI.showAllert("danger","Lütfen tüm alanları doldurunuz... ");
   }
   else{
    const newFilm = new Films(elementtitle,elementdirector,elementurl);
    UI.addFilmsToUI(newFilm);

    Storage.addFilmToStorage(newFilm);

    UI.showAllert("success","Film başarılı bir şekilde eklendi ...");
    
    UI.clearinputareas(title,director,url);

   }

    
    

   

 e.preventDefault();
}

function deleteFilm(e){
  if(e.target.id === "delete-film"){
    UI.deleteFilmFromUI(e.target);
    const nameoffilm = e.target.parentElement.parentElement.children[1].textContent;
    Storage.deleteFilmFromStorage(nameoffilm);
    UI.showAllert("success", "Başarılı bir şekilde film silindi");
  }
}

function clearAll(){
  if(confirm("Bütün filmleri silmek istediğinize emin misiniz")){
    let arr = Storage.getFilmsArray();
    UI.clearAllFilmsFromUI(arr);
    UI.showAllert("success","Bütün filmler başarılı bir şekilde silindi");

  }
  
}



// const form = document.getElementById("film-form");
// const title = document.querySelector("#title");
// const director = document.querySelector("#director");
// const url = document.querySelector("#url");
// const cardBody = document.querySelectorAll(".card-body")[1];
// const clearbutton = document.querySelector("#clear-films")

// const storage = new Storage();
// const ui = new UI();


// eventListeners();

// function eventListeners(){

//     form.addEventListener("submit",addFilms);
    
//     document.addEventListener("DOMContentLoaded",function(){
//       let arr = storage.getFilmsArray();
//       ui.loadFilmstoUI(arr);
//     })
 
//     cardBody.addEventListener("click",deleteFilm);

//     clearbutton.addEventListener("click",clearAll);

    
      
    

    
// }


// function addFilms(e){
//    const elementtitle = title.value;
//    const elementdirector = director.value;
//    const elementurl = url.value;

//    if(elementdirector === "" || elementtitle === "" || elementurl === ""){
//     ui.showAllert("danger","Lütfen tüm alanları doldurunuz... ");
//    }
//    else{
//     const newFilm = new Films(elementtitle,elementdirector,elementurl);
//     ui.addFilmsToUI(newFilm);

//     storage.addFilmToStorage(newFilm);

//     ui.showAllert("success","Film başarılı bir şekilde eklendi ...");
    
//     ui.clearinputareas(title,director,url);

//    }

    
    

   

//  e.preventDefault();
// }

// function deleteFilm(e){
//   if(e.target.id === "delete-film"){
//     ui.deleteFilmFromUI(e.target);
//     const nameoffilm = e.target.parentElement.parentElement.children[1].textContent;
//     storage.deleteFilmFromStorage(nameoffilm);
//     ui.showAllert("success", "Başarılı bir şekilde film silindi");
//   }
// }

// function clearAll(){
//   if(confirm("Bütün filmleri silmek istediğinize emin misiniz")){
//     let arr = storage.getFilmsArray();
//     ui.clearAllFilmsFromUI(arr);
//     ui.showAllert("success","Bütün filmler başarılı bir şekilde silindi");

//   }
  
// }