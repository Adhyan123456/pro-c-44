class Game 
{

  constructor(){}

  
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }
  
 start(){
   console.log("we are in the start function ")
  player = new Player();
  playerCount = player.getCount();

  player1 = createSprite(140,310,10,10);
    player1.addImage("player1",player1_img );
    player1.scale=0.3;
    
    player2 = createSprite(1150,310,10,10);
    player2.addImage("player2", player2_img);
    player2.scale=0.5;

    players=[player1,player2];
    
 
  form =new Form ();
  form.display();
 }

 handleElements(){

form.hide();


 }
    
 
play()
{
  console.log("we are in the play function ");

  this.handleElements();
  Player.getPlayersInfo();
  if(allPlayers !==undefined ){

   // image(track, 0, -height * 5, width, height * 6);

    var index=0;

    for(var plr in allPlayers){

      index=index+1;
      var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;
        
       
    }
    //handlePlayerControls();
    drawSprites();
  }
}

handlePlayerControls(){

  if (keyIsDown(UP_ARROW)) {
    //this.playerMoving = true;
    players.positionY += 10;
    players.update();
  }






}
}
  