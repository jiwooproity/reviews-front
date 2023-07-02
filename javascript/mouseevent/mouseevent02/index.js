const container = document.getElementById("background");
const colors = [
  "rgb(255, 234, 221)",
  "rgb(252, 174, 174)",
  "rgb(255, 137, 137)",
  "rgb(255, 102, 102)",
];

const onMouseMove = (e) => {
  const color = colors[Math.floor(Math.random() * colors.length - 1)];
  const clientX = e.clientX;
  const clientY = e.clientY + window.scrollY;

  container.style.background = `radial-gradient(200px at ${clientX}px ${clientY}px, ${color}, black 80%)`;
};

container.addEventListener("mousemove", onMouseMove);
