function clickBack() {
  const button = document.getElementsByClassName("skill-btn")[1];
  const selectedBtn = document.getElementsByClassName("btn-selected")[0];
  const code = document.getElementsByClassName("skill-code")[1];
  const selcetedCode = document.getElementsByClassName("code-selected")[0];
  const ticker = document.getElementsByClassName("ticker")[1];
  const selectedTicker = document.getElementsByClassName("ticker-selected")[0];

  if(selectedBtn == button) { return; }

  selectedBtn.classList.remove("btn-selected");
  selectedBtn.classList.add("btn-unselected");
  button.classList.remove("btn-unselected");
  button.classList.add("btn-selected");

  code.classList.remove("code-unselected");
  code.classList.add("code-selected");
  selcetedCode.classList.remove("code-selected");
  selcetedCode.classList.add("code-unselected");

  ticker.classList.remove("ticker-unselected");
  ticker.classList.add("ticker-selected");
  selectedTicker.classList.remove("ticker-selected");
  selectedTicker.classList.add("ticker-unselected");
}


function clickFront() {
  const button = document.getElementsByClassName("skill-btn")[0];
  const selectedBtn = document.getElementsByClassName("btn-selected")[0];
  const code = document.getElementsByClassName("skill-code")[0];
  const selcetedCode = document.getElementsByClassName("code-selected")[0];
  const ticker = document.getElementsByClassName("ticker")[0];
  const selectedTicker = document.getElementsByClassName("ticker-selected")[0];

  if(selectedBtn == button) { return; }

  selectedBtn.classList.remove("btn-selected");
  selectedBtn.classList.add("btn-unselected");
  button.classList.remove("btn-unselected");
  button.classList.add("btn-selected");

  code.classList.remove("code-unselected");
  code.classList.add("code-selected");
  selcetedCode.classList.remove("code-selected");
  selcetedCode.classList.add("code-unselected");

  ticker.classList.remove("ticker-unselected");
  ticker.classList.add("ticker-selected");
  selectedTicker.classList.remove("ticker-selected");
  selectedTicker.classList.add("ticker-unselected");
}


function clickOthers() {
  const button = document.getElementsByClassName("skill-btn")[2];
  const selectedBtn = document.getElementsByClassName("btn-selected")[0];
  const code = document.getElementsByClassName("skill-code")[2];
  const selcetedCode = document.getElementsByClassName("code-selected")[0];
  const ticker = document.getElementsByClassName("ticker")[2];
  const selectedTicker = document.getElementsByClassName("ticker-selected")[0];

  if(selectedBtn == button) { return; }

  selectedBtn.classList.remove("btn-selected");
  selectedBtn.classList.add("btn-unselected");
  button.classList.remove("btn-unselected");
  button.classList.add("btn-selected");

  code.classList.remove("code-unselected");
  code.classList.add("code-selected");
  selcetedCode.classList.remove("code-selected");
  selcetedCode.classList.add("code-unselected");

  ticker.classList.remove("ticker-unselected");
  ticker.classList.add("ticker-selected");
  selectedTicker.classList.remove("ticker-selected");
  selectedTicker.classList.add("ticker-unselected");
}