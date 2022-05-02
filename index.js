document.querySelector("#masaiForm").addEventListener("submit",masaimatch)
var matcharr=JSON.parse(localStorage.getItem("schedule"))||[]


function masaimatch(){
    event.preventDefault()
   
var matchobj={
    matchnumber:masaiForm.matchNum.value,
    team1:masaiForm.teamA.value,
    team2:masaiForm.teamB.value,
    Gdate:masaiForm.date.value,
    place:masaiForm.venue.value

   
}


matcharr.push(matchobj)


localStorage.setItem("schedule",JSON.stringify(matcharr));    
window.location.href="matches.html"
}


