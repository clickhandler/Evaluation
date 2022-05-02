var matcharr=JSON.parse(localStorage.getItem("schedule"))||[]
var favArr=JSON.parse(localStorage.getItem("favourites"))||[]

display(matcharr)

function display(data){

data.forEach(function(elem){

var tr=document.createElement("tr")


var td1=document.createElement("td")
td1.innerText=elem.matchnumber

var td2=document.createElement("td")
td2.innerText=elem.team1
 

var td3=document.createElement("td")
td3.innerText=elem.team2

var td4=document.createElement("td")
td4.innerText=elem.Gdate

var td5=document.createElement("td")
td5.innerText=elem.place

var td6=document.createElement("td")
td6.innerText="Favourite"
td6.setAttribute("class","Fav")
td6.addEventListener("click",function(){
    fvfunc(elem)
});

tr.append(td1,td2,td3,td4,td5,td6)

document.querySelector("tbody").append(tr)
});

}

document.querySelector("#filterVenue").addEventListener("change",fileteredfun)


function fileteredfun(){
    var fil=document.querySelector("#filtervenue.value")
    var fillist=matcharr.filter(elem)
    return elem.fillist==fil
}
console.log(fillist)
matcharr(fillist)

function fvfunc(elem){
    favArr.push(elem)
    localStorage.setItem("favourites",JSON.stringify(favArr))
    window.location.href="favourites.html"
}






