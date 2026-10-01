# PERSONALIZE

Site da PERSONALIZE, que faz produtos personalizados em São João da Boa Vista (SP).
*Do seu jeito, com a sua marca.*

É um site estático em HTML, CSS e JavaScript puros, sem frameworks e sem etapa de build. Pode ser publicado direto no GitHub Pages.

## Estrutura

```
index.html      página principal
css/style.css   estilos (a paleta de cores fica em :root)
js/main.js      número do WhatsApp, menu do celular e ano do rodapé
img/            logotipo e fotos
```

## Antes de publicar

1. **WhatsApp:** em `js/main.js`, troque `WHATSAPP_NUMERO` pelo número com 55 e DDD, só com números (exemplo: `5519999999999`). Enquanto ele não for preenchido, os botões levam para a seção de contato.
2. **[PREENCHER]:** procure por `[PREENCHER]` no `index.html` e complete os contatos, os prazos, a história da empresa e as respostas das perguntas frequentes.
3. **Fotos:** coloque as imagens em `img/` e troque o bloco `foto-reservada` por `<img src="img/nome-da-foto.jpg" alt="descrição da foto">`. Toda imagem precisa de um texto alternativo (`alt`).

## Visualizar

Abra o `index.html` no navegador.
