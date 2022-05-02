var favArr=JSON.parse(localStorage.getItem("favourites"))||[]

display(favArr)



function display(data){

data.forEach(function(elem,index){

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
td6.innerText="Delete Favourite"
td6.setAttribute("class","deletebtn")
td6.addEventListener("click",function(){
    delfunc(elem,index)
})




tr.append(td1,td2,td3,td4,td5,td6)

document.querySelector("tbody").append(tr)

})
}
function delfunc(elem,index){
    favArr.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favArr))
    window.location.reload()
}
