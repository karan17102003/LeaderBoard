let form=document.getElementById("form");
const playersList=[];
function addPlayer (event){

    event.preventDefault();

    const playerList=document.getElementById("player-list");
    const firstName=document.getElementById("first-name").value;
    const lastName=document.getElementById("last-name").value;
    const country=document.getElementById("country").value;
    const score=document.getElementById("player-score").value;
    const playerData={name: firstName+" "+lastName , country: country , score:Number(score)};
    playersList.push(playerData);
    playersList.sort((player1,player2)=>parseInt(player2.score) - parseInt(player1.score));
    playerList.innerText ="";
    for(let i=0;i<playersList.length ; i++){
        const player=playersList[i];

        const liEl=document.createElement('li');
    const nameContent=document.createElement('span');
    const countryContent=document.createElement('span');
    const curentScore=document.createElement('span');
    liEl.style.margin='20px';
    liEl.style.listStyleType='none';
    liEl.style.backgroundColor='rgba(114, 230, 88, 0.964)';
    liEl.style.padding='20px';
    nameContent.style.marginRight='20%';
    countryContent.style.marginRight='20%';
    curentScore.style.marginRight='20%';
    nameContent.style.fontSize='20px';
    countryContent.style.fontSize='20px';
    curentScore.style.fontSize='20px';
    
    const increaseScore=document.createElement('button');
    const decreaseScore=document.createElement('button');
    const delet=document.createElement('button');
    increaseScore.style.marginRight='30px';
    decreaseScore.style.marginRight='30px';
    increaseScore.style.padding='5px';
    decreaseScore.style.padding='5px';
    delet.style.padding='5px';
    delet.style.marginRight='30px';
    increaseScore.innerText='+5';
    decreaseScore.innerText='-5';
    delet.innerText='X';
    delet.setAttribute('onclick' , `deletHandler(${i})`);
    increaseScore.setAttribute('onclick' , `increaseScoreHandler(${i})`);
    decreaseScore.setAttribute('onclick' , `decreaseScoreHandler(${i})`);
    curentScore.innerText=player.score;
    countryContent.innerText=player.country;
    nameContent.innerText=player.name;
    liEl.append(nameContent,countryContent,curentScore,delet,increaseScore,decreaseScore);
    playerList.append(liEl);
    }
   
    

    

}
function refresList(){
    const playerList=document.getElementById("player-list");
    
    playersList.sort((player1,player2)=>parseInt(player2.score) - parseInt(player1.score));
    playerList.innerText ="";
    for(let i=0;i<playersList.length ; i++){
        const player=playersList[i];

        const liEl=document.createElement('li');
    const nameContent=document.createElement('span');
    const countryContent=document.createElement('span');
    const curentScore=document.createElement('span');
    liEl.style.margin='20px';
    liEl.style.listStyleType='none';
    liEl.style.backgroundColor='rgba(114, 230, 88, 0.964)';
    liEl.style.padding='20px';
    nameContent.style.marginRight='20%';
    countryContent.style.marginRight='20%';
    curentScore.style.marginRight='20%';
    nameContent.style.fontSize='20px';
    countryContent.style.fontSize='20px';
    curentScore.style.fontSize='20px';
    
    const increaseScore=document.createElement('button');
    const decreaseScore=document.createElement('button');
    const delet=document.createElement('button');
    increaseScore.style.marginRight='30px';
    increaseScore.style.padding='5px';
    decreaseScore.style.padding='5px';
    decreaseScore.style.marginRight='30px';
    delet.style.padding='5px';
    delet.style.marginRight='30px';
    delet.innerText='X';
    delet.setAttribute('onclick' , `deletHandler(${i})`);
    increaseScore.innerText='+5';
    decreaseScore.innerText='-5';
    increaseScore.setAttribute('onclick' , `increaseScoreHandler(${i})`);
    decreaseScore.setAttribute('onclick' , `decreaseScoreHandler(${i})`);
    curentScore.innerText=player.score;
    countryContent.innerText=player.country;
    nameContent.innerText=player.name;
    liEl.append(nameContent,countryContent,curentScore,delet,increaseScore,decreaseScore);
    playerList.append(liEl);
    }
}
function deletHandler(i){
    playersList.splice(i,1);
    refresList();
}
function increaseScoreHandler(i){
    playersList[i].score += 5;
    refresList();
    
}
function decreaseScoreHandler(i){
    playersList[i].score -= 5;
refresList();}