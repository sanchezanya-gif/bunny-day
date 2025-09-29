let titleElement;
let player;
let currentRoom = "castle-grounds"; // castle-grounds, castle-hall, castle-wing, gallery, chamber
let bgImages = {};
let galleryDoor = {x: 136, y: 200, w: 130, h: 200};
let chamberDoor = {x: 540, y: 200, w: 130, h: 200};
let galleryDoorImg;
let chamberDoorImg;
let hasKey = false
let galleryKey = { x: 700, y: 530, w: 40, h: 40, collected: false }; // Key object (in gallery)
let message = "";
let messageTimer = 0;
let keySheet;
let keySprite;
let jujuRight, jujuLeft;
let anyaRight;
let anya = {
  x: 0,
  y: 0,
  w: 90,
  h: 117
};
let gardenAnya = {
  x: 0,
  y: 0,
  w: 90,
  h: 117
}
let frame = {
  w: 133,
  h: 190
};
let frameRianne = {
  x: 135,
  y: 210,
  img: null
};
let frameAnya = {
 x: 334,
  y: 210,
  img: null
};
let frameJamie = {
 x: 533,
  y: 210,
  img: null
};

let frameCharli = {
  x: 135,
  y: 210,
  img: null
};
let frameChez = {
 x: 334,
  y: 210,
  img: null
};
let frameTasha = {
 x: 533,
  y: 210,
  img: null
};

let frameIsabella = {
 x: 632,
  y: 210,
  img: null
};

let frameDaphne = {
  x: 433,
  y: 210,
  img: null
};
let frameAthena = {
 x: 234,
  y: 210,
  img: null
};
let frameJeongco = {
 x: 35,
  y: 210,
  img: null
};
let frameJami = {
 x: 632,
  y: 210,
  img: null
};

let frameEggy = {
  x: 433,
  y: 210,
  img: null
};
let frameMek = {
 x: 234,
  y: 210,
  img: null
};
let frameJena = {
 x: 35,
  y: 210,
  img: null
};
let frameYsa = {
 x: 632,
  y: 210,
  img: null
};

let frameEzra = {
  x: 433,
  y: 210,
  img: null
};
let frameVivi = {
 x: 234,
  y: 210,
  img: null
};
let frameLei = {
 x: 35,
  y: 210,
  img: null
};
let showFrame = false;
let currentFrameLetter = null; // Track which frame letter to show
let letterRianne = { img: null };
let letterAnya = { img: null };
let letterJamie = { img: null };
let letterCharli = { img: null };
let letterChez = { img: null };
let letterTasha = { img: null };
let letterIsabella = { img: null };
let letterDaphne = { img: null };
let letterAthena = { img: null };
let letterJeongco = { img: null };
let letterJami = { img: null };
let letterEggy = { img: null };
let letterMek = { img: null };
let letterJena = { img: null };
let letterYsa = { img: null };
let letterEzra = { img: null };
let letterVivi = { img: null };
let letterLei = { img: null };
let showLetter = false;
let letterImg;
let showKiss = false;
let kissImg;

// MUSIC VARIABLES
let seeYouAgainMusic;
let thankYouMusic;
let musicStarted = false;
let chamberMusicActivated = false;

//FIREWORKS VARIABLES
let fireworks = [];
let fireworkTimer = 0;

// UI BUTTON VARIABLES
let showHowToPlay = false;
let howToPlayButton = { x: 0, y: 0, w: 80, h: 30 }; // Reduced height for less padding
let restartButton = { x: 0, y: 0, w: 60, h: 30 }; // Reduced height for less padding

//background images
function preload() {
bgImages["castle-grounds"] = loadImage("assets/castle-grounds.png");
bgImages["castle-hall"] = loadImage("assets/castle-hall.png");
bgImages["castle-wing"] = loadImage("assets/castle-wing.png");
bgImages["gallery"] = loadImage("assets/gallery.png");
bgImages ["chamber"] = loadImage("assets/chamber.png");
bgImages ["garden"] = loadImage("assets/garden.png");
bgImages ["gallery2"] = loadImage("assets/gallery2.png");
bgImages ["gallery3"] = loadImage("assets/gallery3.png");
bgImages ["gallery4"] = loadImage("assets/gallery4.png");
bgImages ["gallery5"] = loadImage("assets/gallery5.png");
keySheet = loadImage("assets/key.png");
jujuRight = loadImage("assets/juju-right.png");
jujuLeft  = loadImage("assets/juju-left.png");
galleryDoorImg = loadImage("assets/gallery-door.png");
chamberDoorImg = loadImage("assets/chamber-door.png");
anyaRight = loadImage("assets/anya-right.png");
letterImg = loadImage("assets/letter.png");
frameRianne.img = loadImage("assets/rianne-frame.png");
frameAnya.img = loadImage("assets/anya-frame.png");
frameJamie.img = loadImage("assets/jamie-frame.png");
frameCharli.img = loadImage("assets/charli-frame.png");
frameChez.img = loadImage("assets/chez-frame.png");
frameTasha.img = loadImage("assets/tasha-frame.png");
frameIsabella.img = loadImage("assets/isabella-frame.png");
frameDaphne.img = loadImage("assets/daphne-frame.png");
frameAthena.img = loadImage("assets/athena-frame.png");
frameJeongco.img = loadImage("assets/jeongco-frame.png");
frameJami.img = loadImage("assets/jami-frame.png");
frameEggy.img = loadImage("assets/eggy-frame.png");
frameMek.img = loadImage("assets/mek-frame.png");
frameJena.img = loadImage("assets/jena-frame.png");
frameYsa.img = loadImage("assets/ysa-frame.png");
frameEzra.img = loadImage("assets/ezra-frame.png");
frameVivi.img = loadImage("assets/vivi-frame.png");
frameLei.img = loadImage("assets/lei-frame.png");
letterRianne.img = loadImage("assets/rianne-letter.png");
letterAnya.img = loadImage("assets/anya-letter.png");
letterJamie.img = loadImage("assets/jamie-letter.png");
letterCharli.img = loadImage("assets/charli-letter.png");
letterChez.img = loadImage("assets/chez-letter.png");
letterTasha.img = loadImage("assets/tasha-letter.png");
letterIsabella.img = loadImage("assets/isabella-letter.png");
letterDaphne.img = loadImage("assets/daphne-letter.png");
letterAthena.img = loadImage("assets/athena-letter.png");
letterJeongco.img = loadImage("assets/jeongco-letter.png");
letterJami.img = loadImage("assets/jami-letter.png");
letterEggy.img = loadImage("assets/eggy-letter.png");
letterMek.img = loadImage("assets/mek-letter.png");
letterJena.img = loadImage("assets/jena-letter.png");
letterYsa.img = loadImage("assets/ysa-letter.png");
letterEzra.img = loadImage("assets/ezra-letter.png");
letterVivi.img = loadImage("assets/vivi-letter.png");
letterLei.img = loadImage("assets/lei-letter.png");
kissImg = loadImage("assets/kiss.png");

// LOAD MUSIC
seeYouAgainMusic = loadSound("assets/tyler1.mp3");
thankYouMusic = loadSound("assets/tyler2.mp3");
}

function setup() {
   titleElement = document.querySelector('.bunny-day-title');
  createCanvas(800, 600);
  player = new Player (width/5, height-100);
  keySprite = keySheet.get(0, 0, 32, 32);
  anya.x = width - 440;
  anya.y = height - 470;
  gardenAnya.x = width - 495;  // Position on the right side
  gardenAnya.y = height - 235; // Adjust height as needed
  
  
  // Position buttons side by side at bottom right
  restartButton.x = width - restartButton.w - 10;
  restartButton.y = height - restartButton.h - 10;
  howToPlayButton.x = restartButton.x - howToPlayButton.w - 5; // 5px gap between buttons
  howToPlayButton.y = height - howToPlayButton.h - 10; // Same y position
  
}

function showTitle(show) {
    if (titleElement) {
        titleElement.style.display = show ? 'block' : 'none';
    }
}

function startInitialMusic() {
  if (seeYouAgainMusic && !musicStarted) {
    seeYouAgainMusic.loop();
    seeYouAgainMusic.setVolume(0.4);
    musicStarted = true;
  }
}

function switchToChamberMusic() {
  if (!chamberMusicActivated) {
    // Stop the first song
    if (seeYouAgainMusic.isPlaying()) {
      seeYouAgainMusic.stop();
    }
    
    // Start the chamber music
    if (thankYouMusic) {
      thankYouMusic.loop();
      thankYouMusic.setVolume(0.4);
      chamberMusicActivated = true;
    }
  }
}

function fadeOutMusic(callback) {
  let currentVol = seeYouAgainMusic.getVolume();
  let fadeSteps = 20;
  let stepSize = currentVol / fadeSteps;
  let currentStep = 0;
  
  let fadeInterval = setInterval(() => {
    currentStep++;
    let newVol = currentVol - (stepSize * currentStep);
    
    if (newVol <= 0 || currentStep >= fadeSteps) {
      seeYouAgainMusic.setVolume(0);
      clearInterval(fadeInterval);
      if (callback) callback();
    } else {
      seeYouAgainMusic.setVolume(newVol);
    }
  }, 50); // Fade over 1 second (20 steps * 50ms)
}

function showMessage(txt) {
  message = txt;
  messageTimer = 120; // frames (~2 seconds at 60fps)
}

function touchingAnya(anyaObj) {
  return (
    player.x < anyaObj.x + anyaObj.w &&   // left edge
    player.x + player.width > anyaObj.x &&            // right edge
    player.y < anyaObj.y + anyaObj.h &&  // top edge
    player.y + player.height > anyaObj.y              // bottom edge
  );  
}

function touchingFrame(frameObj) {
  return (
    player.x < frameObj.x + frame.w &&   // left edge
    player.x + player.width > frameObj.x &&            // right edge
    player.y < frameObj.y + frame.h &&  // top edge
    player.y + player.height > frameObj.y              // bottom edge
  );  
}

function restartGame() {
  // Reset all game variables to initial state
  currentRoom = "castle-grounds";
  player.x = width/5;
  player.y = height-100;
  hasKey = false;
  galleryKey.collected = false;
  showFrame = false;
  showLetter = false;
  showKiss = false;
  showHowToPlay = false;
  currentFrameLetter = null;
  message = "";
  messageTimer = 0;
  fireworks = [];
  fireworkTimer = 0;
  
  // Reset music
  if (seeYouAgainMusic && seeYouAgainMusic.isPlaying()) {
    seeYouAgainMusic.stop();
  }
  if (thankYouMusic && thankYouMusic.isPlaying()) {
    thankYouMusic.stop();
  }
  musicStarted = false;
  chamberMusicActivated = false;
  
  showTitle(true);
}

function drawUIButtons() {
  // How to Play button
  fill(247,143,167); // Pink color
  stroke(178, 114, 114);
  strokeWeight(1);
  rect(howToPlayButton.x, howToPlayButton.y, howToPlayButton.w, howToPlayButton.h, 5);
  
  fill(255,255,224);
  textAlign(CENTER, CENTER);
  textSize(12);
  text("How to Play", howToPlayButton.x + howToPlayButton.w/2, howToPlayButton.y + howToPlayButton.h/2);
  
  // Restart button
  fill(247,143,167); // Pink color
  stroke(178, 114, 114);
  strokeWeight(1);
  rect(restartButton.x, restartButton.y, restartButton.w, restartButton.h, 5);
  
  fill(255,255,224);
  textAlign(CENTER, CENTER);
  textSize(12);
  text("Restart", restartButton.x + restartButton.w/2, restartButton.y + restartButton.h/2);
  
  // Reset text alignment
  textAlign(LEFT);
}

function drawHowToPlayPopup() {
  if (showHowToPlay) {
    // Semi-transparent background
    fill(0, 0, 0, 150);
    rect(0, 0, width, height);
    
    // Popup background
    fill(247,143,167);
    stroke(178, 114, 114);
    let popupW = 450;
    let popupH = 200;
    let popupX = (width - popupW) / 2;
    let popupY = (height - popupH) / 2;
    rect(popupX, popupY, popupW, popupH, 10);
    
    // Title
    fill(255,255,224);
    textAlign(CENTER);
    textSize(24);
    text("How to Play", width/2, popupY + 40);
    
    // Instructions
    textAlign(LEFT);
    textSize(16);
    let textX = popupX + 20;
    let startY = popupY + 80;
    let lineHeight = 25;
    
    text("🏰 Use ARROW KEYS to move around", textX, startY);
    text("🗝️ Press E to interact or exit objects (doors, frames, etc.)", textX, startY + lineHeight);
    
    // Close instruction
    textAlign(CENTER);
    textSize(14);
    text("Press E or click anywhere to close", width/2, popupY + popupH - 20);
  }
}

function isMouseOverButton(button) {
  return mouseX >= button.x && mouseX <= button.x + button.w &&
         mouseY >= button.y && mouseY <= button.y + button.h;
}

//DRAW
function draw() {
    if (bgImages[currentRoom]) {
        image(bgImages[currentRoom], 0, 0, width, height);
    } else {
  background(220); //fallback if no image
    }

  //Draw Room
  textSize (25)
  fill(255,105,180);
  stroke(0);
  strokeWeight(0);
  if (currentRoom === "castle-grounds") {
    text("Castle Grounds", 50, 50);
    showTitle(true);

  } else if (currentRoom === "castle-hall") {
    text("Castle Hall", 50, 50);
    showTitle(false);

  } else if (currentRoom === "castle-wing") {
    text("Castle Wing", 50, 50);
    showTitle(false);

  } else if (currentRoom ==="gallery") {
    text("Gallery of Friendship ❤️ (1/5)", 50, 50);
    showTitle(false);

  } else if (currentRoom === "chamber") {
    text("Lovers Chamber ❤️", 50, 50);
    showTitle(false);

  } else if (currentRoom === "garden") {
    text("Balcony", 50, 50);
    showTitle(false);

  } else if (currentRoom === "gallery2") {
    text("Gallery of Friendship ❤️ (2/5)", 50, 50);
    showTitle(false);
  
     } else if (currentRoom === "gallery3") {
    text("Gallery of Friendship ❤️ (3/5)", 50, 50);
    showTitle(false);
  
     } else if (currentRoom === "gallery4") {
    text("Gallery of Friendship ❤️ (4/5)", 50, 50);
    showTitle(false);
  
     } else if (currentRoom === "gallery5") {
    text("Gallery of Friendship ❤️ (5/5)", 50, 50);
    showTitle(false);
  }
  

if (currentRoom === "castle-wing") {
  //Draw Gallery Door
  image(galleryDoorImg, galleryDoor.x, galleryDoor.y, galleryDoor.w, galleryDoor.h);
  
  // Draw chamber door
  image(chamberDoorImg, chamberDoor.x, chamberDoor.y, chamberDoor.w, chamberDoor.h);
}

if (currentRoom === "gallery5") {
  if (!galleryKey.collected) {
  //Draw Key
image(keySprite, galleryKey.x, galleryKey.y, 60, 60); 
}
}

// Draw Frames
if (currentRoom === "gallery") {
  image(frameRianne.img, frameRianne.x, frameRianne.y, frame.w, frame.h);
  image(frameAnya.img, frameAnya.x, frameAnya.y, frame.w, frame.h);
  image(frameJamie.img, frameJamie.x, frameJamie.y, frame.w, frame.h);
}

if (currentRoom === "gallery2") {
  image(frameIsabella.img, frameIsabella.x, frameIsabella.y, frame.w, frame.h);
  image(frameDaphne.img, frameDaphne.x, frameDaphne.y, frame.w, frame.h);
  image(frameAthena.img, frameAthena.x, frameAthena.y, frame.w, frame.h);
  image(frameJeongco.img, frameJeongco.x, frameJeongco.y, frame.w, frame.h);
}

if (currentRoom === "gallery3") {
  image(frameJami.img, frameJami.x, frameJami.y, frame.w, frame.h);
  image(frameEggy.img, frameEggy.x, frameEggy.y, frame.w, frame.h);
  image(frameMek.img, frameMek.x, frameMek.y, frame.w, frame.h);
  image(frameJena.img, frameJena.x, frameJena.y, frame.w, frame.h);
}

if (currentRoom === "gallery4") {
  image(frameYsa.img, frameYsa.x, frameYsa.y, frame.w, frame.h);
  image(frameEzra.img, frameEzra.x, frameEzra.y, frame.w, frame.h);
  image(frameVivi.img, frameVivi.x, frameVivi.y, frame.w, frame.h);
  image(frameLei.img, frameLei.x, frameLei.y, frame.w, frame.h);
}

if (currentRoom === "gallery5") {
  image(frameCharli.img, frameCharli.x, frameCharli.y, frame.w, frame.h);
  image(frameChez.img, frameChez.x, frameChez.y, frame.w, frame.h);
  image(frameTasha.img, frameTasha.x, frameTasha.y, frame.w, frame.h);
}

//Room transitions
if (currentRoom === "castle-grounds" && player.x > width) {
  currentRoom = "castle-hall";
  player.x = 0; // spawn at left edge of hall
} 

if (currentRoom === "castle-grounds" && player.x < 0) {
  player.x = 0;
}

if (currentRoom === "castle-grounds" && player.y + player.height / 1 > height) {
  player.y = height - player.height / 1; // stop at floor
}
if (currentRoom === "castle-grounds" && player.y < 380) {
  player.y = 380;
}

else if (currentRoom === "castle-hall") {
  if (player.x < 0) {
    currentRoom = "castle-grounds";
    player.x = width; // spawn at right edge of grounds
  } else if (player.x > width) {
    currentRoom = "castle-wing";
    player.x = 0; // spawn at left edge of wing
  }
if (player.y + player.height / 1 > height) {
  player.y = height - player.height / 1;
}
if (player.y < 380) {
  player.y = 380;
}
}

else if (currentRoom === "castle-wing") {
  if (player.x < 0) {
    currentRoom = "castle-hall";
    player.x = width; // spawn at right edge of hall
  }
  if (player.x + player.width / 1 > width) {
  player.x = width - player.width / 1;
  }
  if (player.y + player.height / 1 > height) {
  player.y = height - player.height / 1;
  }
  if (player. y < 380) {
    player.y = 380;
  }
}

if (currentRoom === "gallery" && player.x + player.width / 1 > width) {
  player.x = width - player.width / 1;
}
if (currentRoom === "gallery" && player.y < 380) {
  player.y = 380;
}

if (currentRoom === "gallery" && player.y > height) {
  currentRoom = "castle-wing";
  player.x = width - 540;
    player.y = height - 280;
}

if (currentRoom === "gallery") {
if (player.x < 0) {
  currentRoom = "gallery2";
  player.x = width;
}
}

if (currentRoom === "gallery2" && player.y < 380) {
  player.y = 380;
}

if (currentRoom === "gallery2" && player.y > height) {
  currentRoom = "castle-wing";
  player.x = width - 540;
    player.y = height - 280;
}

if (currentRoom === "gallery2" && player.x > width) {
  currentRoom = "gallery";
  player.x = 0;
}






if (currentRoom === "gallery2") {
if (player.x < 0) {
  currentRoom = "gallery3";
  player.x = width;
}
}

if (currentRoom === "gallery3" && player.y < 380) {
  player.y = 380;
}

if (currentRoom === "gallery3" && player.y > height) {
  currentRoom = "castle-wing";
  player.x = width - 540;
    player.y = height - 280;
}

if (currentRoom === "gallery3" && player.x > width) {
  currentRoom = "gallery2";
  player.x = 0;
}






if (currentRoom === "gallery3") {
if (player.x < 0) {
  currentRoom = "gallery4";
  player.x = width;
}
}

if (currentRoom === "gallery4" && player.y < 380) {
  player.y = 380;
}

if (currentRoom === "gallery4" && player.y > height) {
  currentRoom = "castle-wing";
  player.x = width - 540;
    player.y = height - 280;
}

if (currentRoom === "gallery4" && player.x > width) {
  currentRoom = "gallery3";
  player.x = 0;
}





if (currentRoom === "gallery4") {
if (player.x < 0) {
  currentRoom = "gallery5";
  player.x = width;
}
}

if (currentRoom === "gallery5" && player.y < 380) {
  player.y = 380;
}

if (currentRoom === "gallery5" && player.y > height) {
  currentRoom = "castle-wing";
  player.x = width - 540;
    player.y = height - 280;
}

if (currentRoom === "gallery5" && player.x > width) {
  currentRoom = "gallery4";
  player.x = 0;
}

if (currentRoom === "gallery5" && player.x < 0) {
  player.x = 0
}



if (currentRoom === "chamber" && player.x < 0) {
  player.x = 0
}

if (currentRoom === "chamber" && player.x + player.width / 1 > width) {
  player.x = width - player.width / 1;
}

if (currentRoom === "chamber" && player.y < 0) {
  currentRoom = "garden";
  player.x = width - 400;
  player.y = height - 100;
}

if (currentRoom === "chamber" && player.y > height) {
  currentRoom = "castle-wing";
  player.x = width - 136;
    player.y = height - 280;
}

if (currentRoom === "garden" && player.x < 0) {
  player.x = 0;
}

if (currentRoom === "garden" && player.x + player.width / 1 > width) {
  player.x = width - player.width / 1;
}

if (currentRoom === "garden" && player.y < 0) {
  player.y = 0
}

if (currentRoom === "garden" && player.y < 380) {
  player.y = 380;
}

if (currentRoom === "garden" && player.y > height) {
  currentRoom = "chamber";
  player.x = width - 400;
  player.y = height - 500;
}

//Draw & Move Player
player.show();
player.move();

 if (messageTimer > 0) {
    fill(255,105,180);
    noStroke();
    strokeWeight(0);
    textSize(25);
    text(message, 50, 100); // position on screen
    messageTimer--;
  }

  //Draw Anya
if (currentRoom === "chamber") {
  image(anyaRight, anya.x, anya.y, anya.w, anya.h);

    if (showLetter) {
    fill(0, 0, 0, 150);
    rect(0, 0, width, height);

    let letterWidth = width * 1.0;
    let letterHeight = height * 1.0;
    let letterX = (width - letterWidth) / 2;
    let letterY = (height - letterHeight) / 2;
    image(letterImg, letterX, letterY, letterWidth, letterHeight);
  }
}

if (currentRoom === "garden") {
  image(anyaRight, gardenAnya.x, gardenAnya.y, gardenAnya.w, gardenAnya.h);
}

// Show frame letters
if (showFrame && currentFrameLetter) {
    fill(0, 0, 0, 150);
    rect(0, 0, width, height);

    let frameWidth = width * 1.0;
    let frameHeight = height * 1.0;
    let frameX = (width - frameWidth) / 2;
    let frameY = (height - frameHeight) / 2;

    image(currentFrameLetter, frameX, frameY, frameWidth, frameHeight);
}

// Show kiss
if (showKiss && kissImg) {
    fill(0, 0, 0, 150);
    rect(0, 0, width, height);

    let kissWidth = width * 0.9;
    let kissHeight = height * 0.8;
    let kissX = (width - kissWidth) / 2;
    let kissY = (height - kissHeight) / 2;

    image(kissImg, kissX, kissY, kissWidth, kissHeight);
}

// Draw fireworks in garden
if (currentRoom === "garden") {
  updateFireworks();
  drawFireworks();
}

// Draw UI buttons (always visible)
drawUIButtons();

// Draw how to play popup if active
drawHowToPlayPopup();

} // end FUNCTION DRAW

// Fireworks system
function updateFireworks() {
  // Create new firework more frequently
  fireworkTimer++;
  if (fireworkTimer > 45) { // Every 0.75 seconds (faster)
    createFirework();
    fireworkTimer = 0;
  }
  
  // Update existing fireworks
  for (let i = fireworks.length - 1; i >= 0; i--) {
    let fw = fireworks[i];
    fw.update();
    
    // Remove dead fireworks
    if (fw.isDead()) {
      fireworks.splice(i, 1);
    }
  }
}

function drawFireworks() {
  for (let fw of fireworks) {
    fw.draw();
  }
}

function createFirework() {
  let x = random(100, width - 100);
  let y = random(100, 300);
  fireworks.push(new Firework(x, y));
}

class Firework {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.particles = [];
    this.exploded = false;
    this.timer = 0;
    
    // Create more particles for bigger explosion
    for (let i = 0; i < 25; i++) {
      this.particles.push({
        x: x,
        y: y,
        vx: random(-4, 4),        // Slightly faster spread
        vy: random(-4, 4),
        life: 120,                // Longer life (2 seconds)
        maxLife: 120,
        color: this.getWarmColor() // Pink, orange, yellow colors
      });
    }
  }
  
  // Generate warm colors (pink, orange, yellow)
  getWarmColor() {
    let colorType = random(['pink', 'orange', 'yellow']);
    
    if (colorType === 'pink') {
      return {
        r: random(255, 255),      // Full red
        g: random(100, 180),      // Medium green
        b: random(150, 255)       // High blue for pink
      };
    } else if (colorType === 'orange') {
      return {
        r: random(255, 255),      // Full red
        g: random(140, 200),      // Medium-high green
        b: random(0, 100)         // Low blue for orange
      };
    } else { // yellow
      return {
        r: random(255, 255),      // Full red
        g: random(200, 255),      // High green
        b: random(0, 150)         // Low-medium blue for yellow
      };
    }
  }
  
  update() {
    this.timer++;
    
    for (let p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.03; // Gentler gravity for longer float
      p.life--;
    }
  }
  
  draw() {
    for (let p of this.particles) {
      if (p.life > 0) {
        let alpha = p.life / p.maxLife;
        fill(p.color.r, p.color.g, p.color.b, alpha * 255);
        noStroke();
        ellipse(p.x, p.y, 8, 8); // Slightly bigger particles
      }
    }
  }
  
  isDead() {
    return this.timer > 180; // Keep firework object longer (3 seconds)
  }
}

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 100;
        this.speed = 6;
    }

    show() {
        if (this.facing === "right") {
          image(jujuRight, this.x, this.y, this.width, this.height);
        } else {
          image(jujuLeft, this.x, this.y, this.width, this.height);
        }
    }

//Keys to Player
move() {
    if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.speed;
        this.facing = "left";
    }
    if(keyIsDown(RIGHT_ARROW)) {
        this.x += this.speed;
        this.facing = "right";
    }
    if(keyIsDown(UP_ARROW)) {
        this.y -= this.speed;
    }
    if(keyIsDown(DOWN_ARROW)) {
        this.y += this.speed;
    }
 }
}

 // Detect door collision
  function touchingDoor(door) {
  return (
    player.x - player.width / 2 < door.x + door.w &&   // left edge
    player.x + player.width / 2 > door.x &&            // right edge
    player.y - player.height / 2 < door.y + door.h &&  // top edge
    player.y + player.height / 2 > door.y              // bottom edge
  );
}

// Interaction button
function keyPressed() {
  // Start music on first key press
  if (!musicStarted) {
    startInitialMusic();
  }

  if (key === 'e' || key === 'E') {
    // Close how to play popup
    if (showHowToPlay) {
      showHowToPlay = false;
      return;
    }
    
    // Close any open popups first
    if (showLetter) {
      showLetter = false;
      return;
    }
    
    if (showFrame) {
      showFrame = false;
      currentFrameLetter = null;
      return;
    }

    if (showKiss) {
      showKiss = false;
      return;
    }

    // Check interactions based on current room
    if (currentRoom === "chamber") {
      if (touchingAnya(anya)) {
        showLetter = true;
        return;
      }
    }

    // Garden interactions - FIXED: moved outside of gallery check
    if (currentRoom === "garden") {
      if (touchingAnya(gardenAnya)) {  // FIXED: use gardenAnya instead of anya
        showKiss = true;
        return;
      }
    }

    if (currentRoom === "gallery") {
      // Check frame interactions
      if (touchingFrame(frameRianne)) {
        showFrame = true;
        currentFrameLetter = letterRianne.img;
        return;
      }
      
      if (touchingFrame(frameAnya)) {
        showFrame = true;
        currentFrameLetter = letterAnya.img;
        return;
      }
      
      if (touchingFrame(frameJamie)) {
        showFrame = true;
        currentFrameLetter = letterJamie.img;
        return;
      }

  
    }

    if (currentRoom === "gallery2") {
      // Check frame interactions
      if (touchingFrame(frameIsabella)) {
        showFrame = true;
        currentFrameLetter = letterIsabella.img;
        return;
      }
      
      if (touchingFrame(frameDaphne)) {
        showFrame = true;
        currentFrameLetter = letterDaphne.img;
        return;
      }
      
      if (touchingFrame(frameAthena)) {
        showFrame = true;
        currentFrameLetter = letterAthena.img;
        return;
      }

      if (touchingFrame(frameJeongco)) {
        showFrame = true;
        currentFrameLetter = letterJeongco.img;
        return;
      }
    }


        if (currentRoom === "gallery3") {
      // Check frame interactions
      if (touchingFrame(frameJami)) {
        showFrame = true;
        currentFrameLetter = letterJami.img;
        return;
      }
      
      if (touchingFrame(frameEggy)) {
        showFrame = true;
        currentFrameLetter = letterEggy.img;
        return;
      }
      
      if (touchingFrame(frameMek)) {
        showFrame = true;
        currentFrameLetter = letterMek.img;
        return;
      }

      if (touchingFrame(frameJena)) {
        showFrame = true;
        currentFrameLetter = letterJena.img;
        return;
      }
    }

            if (currentRoom === "gallery4") {
      // Check frame interactions
      if (touchingFrame(frameYsa)) {
        showFrame = true;
        currentFrameLetter = letterYsa.img;
        return;
      }
      
      if (touchingFrame(frameEzra)) {
        showFrame = true;
        currentFrameLetter = letterEzra.img;
        return;
      }
      
      if (touchingFrame(frameVivi)) {
        showFrame = true;
        currentFrameLetter = letterVivi.img;
        return;
      }

      if (touchingFrame(frameLei)) {
        showFrame = true;
        currentFrameLetter = letterLei.img;
        return;
      }
    }

     if (currentRoom === "gallery5") {
      // Check frame interactions
      if (touchingFrame(frameCharli)) {
        showFrame = true;
        currentFrameLetter = letterCharli.img;
        return;
      }
      
      if (touchingFrame(frameChez)) {
        showFrame = true;
        currentFrameLetter = letterChez.img;
        return;
      }
      
      if (touchingFrame(frameTasha)) {
        showFrame = true;
        currentFrameLetter = letterTasha.img;
        return;
      }

          // Pick up key - FIXED: moved this outside the nested if statements
      if (!galleryKey.collected &&
          dist(player.x, player.y, galleryKey.x, galleryKey.y) < 50) { 
        galleryKey.collected = true;
        hasKey = true;
        console.log("You picked up the KEY! 🔑");
        showMessage("You picked up the KEY! 🔑");
        return;
      }
    }

    // Door interactions in castle-wing
    if (currentRoom === "castle-wing") {
      // Gallery door
      if (touchingDoor(galleryDoor)) {
        currentRoom = "gallery";
        player.x = width / 2; 
        player.y = height - 100;
        return;
      }

      // Chamber door
      if (touchingDoor(chamberDoor)) {
        if (hasKey) {
          // Fade out current music before entering chamber
          if (!chamberMusicActivated && seeYouAgainMusic.isPlaying()) {
            fadeOutMusic(() => {
              // After fade completes, enter chamber and start new music
              currentRoom = "chamber";
              player.x = width / 2;
              player.y = height - 100;
              switchToChamberMusic();
              console.log("Your prince awaits you ❤️");
              showMessage("Your prince awaits you ❤️");
            });
          } else {
            // If chamber music is already active, just enter
            currentRoom = "chamber";
            player.x = width / 2;
            player.y = height - 100;
            console.log("Your prince awaits you ❤️");
            showMessage("Your prince awaits you ❤️");
          }
        } else {
          console.log("The chamber is locked. Look for the KEY! 🔑");
          showMessage("The chamber is locked. Look for the KEY! 🔑");
        }
        return;
      }
    }
  }
}

function mousePressed() {
  // Start music on first mouse click
  if (!musicStarted) {
    startInitialMusic();
  }
  
  // Check button clicks
  if (isMouseOverButton(howToPlayButton)) {
    showHowToPlay = true;
    return;
  }
  
  if (isMouseOverButton(restartButton)) {
    restartGame();
    return;
  }
  
  // Close popups if clicking elsewhere
  if (showLetter) {
    showLetter = false;
  }
  
  if (showFrame) {
    showFrame = false;
    currentFrameLetter = null;
  }

  if (showKiss) {
    showKiss = false;
  }
  
  if (showHowToPlay) {
    showHowToPlay = false;
  }
}