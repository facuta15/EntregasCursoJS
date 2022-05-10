//Classes
class Player{
    constructor(name,number){
        this.name=name;
        this.number=number;
    }
}

//Functions
let loadPlayers = () =>{
    const players=[];
    let i =1;
    do{
        const p = new Player(prompt("Ingrese nombre de jugador"),i);
        players.push(p);
        i++;
        console.log(i);
    }while(confirm("Quiere agregar otro?"))
    return players;
}

let BuildTeam = (players) =>{
    const Team= [];
    for(i=0;i<players.length;i++)
        Team.push(players[i]);
    return Team;
}

let shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let splitToChunks = (array, parts) => {
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
}
 
//Program

const players = loadPlayers();
for(player of players){
    console.log(player.name);
}
let quantity = parseInt(prompt("Ingrese cantidad de equipos"));

shuffleArray(players);
const teams = splitToChunks(players,quantity);
teams.forEach(team =>{
    console.log("Equipo:");
    console.log(team);
})
