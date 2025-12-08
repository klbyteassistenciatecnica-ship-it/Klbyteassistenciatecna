// Ano automático
document.getElementById("ano").textContent = new Date().getFullYear();

// Galeria
const mainImg = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    const src = thumb.getAttribute("data-src");

    mainImg.style.opacity = 0;
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = 1;
    }, 150);

    thumbs.forEach(t => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});

// Formulário de orçamento (simulação)
document.getElementById("sendBtn").addEventListener("click", () => {
  const nome = document.getElementById("nome").value.trim();
  const tel = document.getElementById("telefone").value.trim();
  const desc = document.getElementById("descricao").value.trim();

  if(!nome || !tel || !desc){
    alert("Preencha todos os campos!");
    return;
  }

  alert("Pedido enviado! Entraremos em contato.");
});
