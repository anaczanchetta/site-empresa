/* ==========================================================
   PERSONALIZE: scripts do site
   ========================================================== */

/*
 * CONFIGURAÇÃO DO WHATSAPP
 * Troque [PREENCHER] pelo número com código do país (55) e DDD,
 * só com números. Exemplo: "5519999999999".
 * Todos os botões "Fale no WhatsApp" do site usam este número.
 */
const WHATSAPP_NUMERO = "[PREENCHER]";

// Mensagem usada quando o botão não tem uma mensagem própria (data-mensagem)
const WHATSAPP_MENSAGEM_PADRAO =
  "Olá! Vim pelo site da PERSONALIZE e quero fazer um orçamento.";

document.addEventListener("DOMContentLoaded", () => {
  configurarWhatsApp();
  configurarMenu();
  atualizarAno();
});

// Monta os links do WhatsApp com o número e a mensagem pronta
function configurarWhatsApp() {
  const numero = WHATSAPP_NUMERO.replace(/\D/g, "");

  // Enquanto o número não for preenchido, os botões levam para a seção de contato
  if (numero.length < 12) {
    console.warn("PERSONALIZE: preencha WHATSAPP_NUMERO em js/main.js para ativar os botões do WhatsApp.");
    return;
  }

  document.querySelectorAll(".js-whatsapp").forEach((link) => {
    const mensagem = link.dataset.mensagem || WHATSAPP_MENSAGEM_PADRAO;
    link.href = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    link.target = "_blank";
    link.rel = "noopener";
  });
}

// Abre e fecha o menu no celular
function configurarMenu() {
  const botao = document.querySelector(".menu-botao");
  const menu = document.getElementById("menu-principal");
  if (!botao || !menu) return;

  const rotulo = botao.querySelector(".visualmente-oculto");

  const alternar = (abrir) => {
    botao.setAttribute("aria-expanded", String(abrir));
    menu.classList.toggle("menu--aberto", abrir);
    if (rotulo) rotulo.textContent = abrir ? "Fechar menu" : "Abrir menu";
  };

  botao.addEventListener("click", () => {
    alternar(botao.getAttribute("aria-expanded") !== "true");
  });

  // Fecha o menu ao escolher um item
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => alternar(false));
  });

  // Fecha o menu com a tecla Esc
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && botao.getAttribute("aria-expanded") === "true") {
      alternar(false);
      botao.focus();
    }
  });
}

// Mantém o ano do rodapé sempre atualizado
function atualizarAno() {
  const ano = document.getElementById("ano-atual");
  if (ano) ano.textContent = new Date().getFullYear();
}
