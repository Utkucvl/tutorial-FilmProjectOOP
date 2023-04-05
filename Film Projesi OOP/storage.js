class Storage{
  
    static addFilmToStorage(newFilm){
        let films = this.getFilmsArray();
        
        films.push(newFilm);
    
        localStorage.setItem("films",JSON.stringify(films));
    }
    
    static getFilmsArray(){
        let films; 
    
        if(localStorage.getItem("films") === null){
            films = [];
        }
        else{
            films = JSON.parse(localStorage.getItem("films"));
        }
    
        return films ;
    }
    static deleteFilmFromStorage(name){
        let arr = this.getFilmsArray();
        let uzunluk = arr.length ;
        for(let i = 0 ; i < uzunluk ;i++ ){
            if(arr[i].title === name){
                arr.splice(i,1);
                break;
            }
        }
        localStorage.setItem("films",JSON.stringify(arr));
        
        
    }

}

// function Storage(){

// }

// Storage.prototype.addFilmToStorage = function(newFilm){
//     let films = this.getFilmsArray();
    
//     films.push(newFilm);

//     localStorage.setItem("films",JSON.stringify(films));
// }

// Storage.prototype.getFilmsArray = function(){
//     let films; 

//     if(localStorage.getItem("films") === null){
//         films = [];
//     }
//     else{
//         films = JSON.parse(localStorage.getItem("films"));
//     }

//     return films ;
// }
// Storage.prototype.deleteFilmFromStorage = function(name){
//     let arr = this.getFilmsArray();
//     let uzunluk = arr.length ;
//     for(let i = 0 ; i < uzunluk ;i++ ){
//         if(arr[i].title === name){
//             arr.splice(i,1);
//             break;
//         }
//     }
//     localStorage.setItem("films",JSON.stringify(arr));
    
    
// }