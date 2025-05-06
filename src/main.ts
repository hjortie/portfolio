const lawn = document.getElementById("grass");

lawn?.addEventListener("click", (e) => {
  const flower = document.createElement("img");
  const x = e.pageX;
  const y = e.pageY;

  flower.className = "flower";
  flower.src = "/BLUM.svg";
  flower.style.left = `${x}px`;
  flower.style.top = `${y}px`;

  lawn?.appendChild(flower);
});
