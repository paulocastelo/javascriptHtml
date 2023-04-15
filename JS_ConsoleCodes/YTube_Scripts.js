// Script de publicação do rascunho
let stepBadge = document.getElementById("step-badge-3");
if (stepBadge !== null && stepBadge !== undefined) {
  stepBadge.click();
} else {
  console.log("Element not found!");
}

setTimeout(function() {
	document.querySelector('tp-yt-paper-radio-button[name="UNLISTED"]').click();
	document.querySelector('#done-button').click();
}, 2000);

setTimeout(function() {
const fecharButton = document.querySelector('#close-icon-button');
fecharButton.click();
}, 3700);

//
//
//
//


setTimeout(function() {
  // Opções
  document.querySelector('.right-container.style-scope.ytcp-dropdown-trigger').click();
}, 2000);

setTimeout(function() {
  // Visibilidade
  document.querySelector('[test-id="VISIBILITY"]').click();
}, 2000);

setTimeout(function() {
  // Exibe lista
  const elements1 = document.querySelectorAll("div.ytcp-dropdown-trigger.left-container");
  if (elements1.length >= 2) {
    elements1[2].click();
  }
}, 2000);

setTimeout(function() {
  // ---> Clica em não listado
  const element2 = document.getElementById('text-item-2');
  element2.click();
  // console.log(element);
}, 2000);

setTimeout(function() {
  // Exibe lista
  const elements3 = document.querySelectorAll("div.ytcp-dropdown-trigger.left-container");
  if (elements3.length >= 2) {
    elements3[3].click();
  }
}, 2000);

setTimeout(function() {
  // Clica em Público
  document.querySelector('[test-id="AUDIENCE_RESTRICTION"]').click();
}, 2000);
setTimeout(function() {
  // --> Clica no público
  const element4 = document.querySelector('tp-yt-paper-radio-button[name="VIDEO_MADE_FOR_KIDS_NOT_MFK"]');
  element4.click();
}, 2000);

setTimeout(function() {
  // Exibe lista
  const elements5 = document.querySelectorAll("div.ytcp-dropdown-trigger.left-container");
  if (elements5.length >= 2) {
    elements5[3].click();
  }
}, 2000);
setTimeout(function() {
  // --> Clica em Categoria
  document.querySelector('[test-id="CATEGORY_OLD"]').click();
}, 2000);
setTimeout(function() {
  // --> Exibe lista
  const elements6 = document.querySelectorAll("div.ytcp-dropdown-trigger.left-container");
  if (elements6.length >= 2) {
    elements6[3].click();
  }
}, 2000);
setTimeout(function() {
  // --> Clica em ciência e tecnologia 
  document.querySelector('[test-id="CREATOR_VIDEO_CATEGORY_SCIENCE"]').click();
}, 2000);

setTimeout(function() {
  // --> Exibe lista
  const elements7 = document.querySelectorAll("div.ytcp-dropdown-trigger.left-container");
  if (elements7.length >= 2) {
    elements7[4].click();
  }
}, 2000);
setTimeout(function() {
  // --> Clica em comentários
  document.querySelector('[test-id="COMMENTS_SETTING"]').click();
}, 2000);
setTimeout(function() {
  // --> Clica no radio 
  const element8 = document.querySelector('tp-yt-paper-radio-button[name="COMMENTS_MODERATION_TYPE_DISABLED"]');
  element8.click();
}, 2000);

setTimeout(function() {
  // --> Exibe lista
  const elements9 = document.querySelectorAll("div.ytcp-dropdown-trigger.left-container");
  if (elements9.length >= 2) {
    elements9[4].click();
  }
}, 2000);
setTimeout(function() {
  // --> Clica em Shorts
  document.querySelector('[test-id="SHORTS_SAMPLING"]').click();
  // --> Exibe opções
const elementsa = document.querySelectorAll("div.ytcp-dropdown-trigger.left-container");
if (elementsa.length >= 2) {
  elementsa[4].click();
}
}, 2000);
setTimeout(function() {
// --> Clica em Shorts
document.querySelector('[test-id="DISALLOW_SAMPLING"]').click();
}, 2000);

setTimeout(function() {
  // --> Clica em Atualizar vídeos
  document.querySelector('[id="submit-button"]').click();

}, 2000);
setTimeout(function() {
  // --> Clica no checkbox
  document.getElementById('confirm-checkbox').click();
}, 2000);
setTimeout(function() {
  // --> Clica em Atualizar
  document.querySelector('[id="confirm-button"]').click();
}, 2000);
