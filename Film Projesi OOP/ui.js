class UI{

    
    
    
    static addFilmsToUI(newFilm){
    
        const filmlists = document.getElementById("films");
    
        filmlists.innerHTML +=  `
       <tr>
           <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"/></td>
           <td>${newFilm.title}</td>
           <td>${newFilm.director}</td>
           <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        `
       
    
    }
    static clearinputareas(element1,element2,element3){
        element1.value = "";
        element2.value ="";
        element3.value = "";
    }
    static showAllert(type,message){
        /*
        <div class="alert alert-success">
      <strong>Success!</strong> Indicates a successful or positive action.
    </div>
        */
       const cardbody = document.querySelectorAll(".card-body")[0];
    
       const div = document.createElement("div");
       div.className = `alert alert-${type}`;
       div.textContent = message;
    
       cardbody.appendChild(div);
    
       setTimeout(function(){
    div.remove();
       },2000);
    
    }
    static loadFilmstoUI(arr){
         let uzunluk = arr.length ;
         const filmlists = document.getElementById("films");
         for(let i = 0 ; i < uzunluk ; i++){
            filmlists.innerHTML +=
            `
    
            <tr>
           <td><img src="${arr[i].url}" class="img-fluid img-thumbnail"/></td>
           <td>${arr[i].title}</td>
           <td>${arr[i].director}</td>
           <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        `
    
         }
    
    }
    static deleteFilmFromUI(element){
        element.parentElement.parentElement.remove();
    }
    
    
    static clearAllFilmsFromUI(arr){
        const tbodyy = document.querySelector("#films");
        localStorage.removeItem("films");
        while (tbodyy.firstChild) {
            tbodyy.removeChild(tbodyy.firstChild);
        }
        
    }

}


// function UI(){


// }
// const cardBodyy = document.querySelectorAll(".card-body")[1];
// const tbodyy = document.querySelector("#films");

// UI.prototype.addFilmsToUI = function(newFilm){

//     const filmlists = document.getElementById("films");

//     filmlists.innerHTML +=  `
//    <tr>
//        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"/></td>
//        <td>${newFilm.title}</td>
//        <td>${newFilm.director}</td>
//        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//     </tr>
//     `
   

// }
// UI.prototype.clearinputareas = function(element1,element2,element3){
//     element1.value = "";
//     element2.value ="";
//     element3.value = "";
// }
// UI.prototype.showAllert = function(type,message){
//     /*
//     <div class="alert alert-success">
//   <strong>Success!</strong> Indicates a successful or positive action.
// </div>
//     */
//    const cardbody = document.querySelectorAll(".card-body")[0];

//    const div = document.createElement("div");
//    div.className = `alert alert-${type}`;
//    div.textContent = message;

//    cardbody.appendChild(div);

//    setTimeout(function(){
// div.remove();
//    },2000);

// }
// UI.prototype.loadFilmstoUI = function(arr){
//      let uzunluk = arr.length ;
//      const filmlists = document.getElementById("films");
//      for(let i = 0 ; i < uzunluk ; i++){
//         filmlists.innerHTML +=
//         `

//         <tr>
//        <td><img src="${arr[i].url}" class="img-fluid img-thumbnail"/></td>
//        <td>${arr[i].title}</td>
//        <td>${arr[i].director}</td>
//        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//     </tr>
//     `

//      }

// }
// UI.prototype.deleteFilmFromUI = function(element){
//     element.parentElement.parentElement.remove();
// }


// UI.prototype.clearAllFilmsFromUI = function(arr){
//     localStorage.removeItem("films");
//     while (tbodyy.firstChild) {
//         tbodyy.removeChild(tbodyy.firstChild);
//     }
    
// }
