// splashes.js
const splashes = [
  "Hello World!",
  "Punching Trees!",
  "Mining Madness!",
  "Creeper Party!",
  "Blocky Fun!",
  "Redstone Ready!",
  "Diamond Dreams!",
  "Nether Awaits",
  "Enderman Stare",
  "Pixelated Cheese!"
];

function showSplash(elementId) {
  const splash = document.getElementById(elementId);
  if (!splash) return;

  // Pick a random splash
  splash.innerText = splashes[Math.floor(Math.random() * splashes.length)];

  // Fixed tilt like Minecraft
  splash.style.transform = "rotate(-20deg)";

  // Add bouncy effect
  splash.classList.add("bouncy");
}

document.addEventListener("DOMContentLoaded", () => {
  showSplash("splashText");
});
