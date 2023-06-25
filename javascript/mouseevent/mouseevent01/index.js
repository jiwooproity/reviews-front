const container = document.getElementById("container");

const onMouseMove = (e) => {
  const clientX = e.clientX;
  const clientY = e.clientY + window.scrollY;

  container.style.background = `radial-gradient(200px at ${clientX}px ${clientY}px, rgba(184, 117, 126, 0.15), black 80%)`;
};

container.addEventListener("mousemove", onMouseMove);
