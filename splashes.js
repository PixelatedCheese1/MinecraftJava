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

function showRandomSplash(elementId) {
  const splash = document.getElementById(elementId);
  if (!splash) return;

  // Pick a random splash
  const text = splashes[Math.floor(Math.random() * splashes.length)];
  splash.innerText = text;

  // Random rotation like Minecraft style
  const angle = (Math.random() * 20) - 10; // -10deg to 10deg
  splash.style.transform = `rotate(${angle}deg)`;
}

document.addEventListener("DOMContentLoaded", () => {
  showRandomSplash("splashText");
});
