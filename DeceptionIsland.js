// DeceptionIsland.js

// Get canvas and context
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define player and NPC positions
let playerX = canvas.width / 2;
let playerY = canvas.height / 2;
const npcPositions = [
  { x: 100, y: 100 },
  { x: 200, y: 300 },
];

// Draw player and NPCs
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'blue';
  ctx.fillRect(playerX, playerY, 20, 20);
  ctx.fillStyle = 'red';
  npcPositions.forEach((npc) => {
    ctx.fillRect(npc.x, npc.y, 20, 20);
  });
}

// Handle player movement
document.getElementById('move-btn').addEventListener('click', () => {
  // Update player position based on user input (e.g., swipe direction)
  playerX += 10;
  draw();
});

// Handle NPC interactions
document.getElementById('interact-btn').addEventListener('click', () => {
  // Check for nearby NPCs
  const nearbyNpc = npcPositions.find((npc) => {
    const distance = Math.sqrt((npc.x - playerX) ** 2 + (npc.y - playerY) ** 2);
    return distance < 50;
  });

  if (nearbyNpc) {
    // Display NPC dialogue (rumors, clues or misinformation)
    const dialogue = getNpcDialogue(nearbyNpc);
    document.getElementById('npc-dialogue').innerText = dialogue;
  }
});

// Generate NPC dialogue (rumors, clues or misinformation)
function getNpcDialogue(npc) {
  // Randomly select true or false information
  const rumorChance = Math.random() < 0.5;
  if (rumorChance) {
    return 'Rumor: The anthropologist was last seen near the ancient temple.';
  } else {
    return 'Clue: Look for a hidden cave behind the waterfall.';
  }
}

draw();
