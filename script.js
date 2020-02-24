$(document).ready(function () {
  let doorImage1;
  let doorImage2;
  let doorImage3;
  
  let botDoorPath;
  let beachDoorPath;
  let spaceDoorPath;
  
  let openDoor1;
  let openDoor2;
  let openDoor3;
  
  let currentlyPlaying = true;
  
  const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
  
  let numClosedDoors = 3;
  
  let startButton = document.getElementById('start');
  
  function isBot(door){
    if(door.src === botDoorPath){
      return true;
    } else {
      return false;
    }
  }
  
  function isClicked(door){
    if (door.src === closedDoorPath){
      return false;
    } else {
      return true;
    }
  }
  
  function playDoor(door){
    numClosedDoors = (numClosedDoors - 1);
    if (numClosedDoors === 0){
      gameOver('win');
    } else if (isBot(door)) {
      gameOver('lose');
    }
  } 
    
  const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0){
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1){
      openDoor1 = spaceDoorPath;
      openDoor2 = botDoorPath;
      openDoor3 = beachDoorPath;
    } else {
      openDoor1 = spaceDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = botDoorPath;
    }
  };
  
  doorImage1 = document.getElementById('door1');
  doorImage2 = document.getElementById('door2');
  doorImage3 = document.getElementById('door3');
  botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
  beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
  spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

$(doorImage1).on('click', (e) => {
   if(!isClicked(doorImage1) && currentlyPlaying == true){
   doorImage1.src = openDoor1;
   playDoor(doorImage1);
   };
});
  
$(doorImage2).on('click', (e) => {
   if(!isClicked(doorImage2) && currentlyPlaying == true){
   doorImage2.src = openDoor2;
   playDoor(doorImage2);
   };
});
  
$(doorImage3).on('click', (e) => {
   if(!isClicked(doorImage3) && currentlyPlaying == true){
   doorImage3.src = openDoor3;
   playDoor(doorImage3);
   };
});
  
$(startButton).on('click', (e) => {
  if(currentlyPlaying == false){
      startRound();
  }
});
                  
function startRound(){
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};

function gameOver(status){
  if(status === 'win'){
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
}
startRound();
});