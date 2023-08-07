const pairs = [
  { element: document.getElementById("pair1"), radioInput: document.getElementById('selectradio-1') },
  { element: document.getElementById("pair2"), radioInput: document.getElementById('selectradio') },
  { element: document.getElementById("pair3"), radioInput: document.getElementById('selectradio-3') }
];

const strike = document.getElementById("strike");

pairs.forEach(pair => {
  pair.element.addEventListener("click", function () {
    pairs.forEach(p => {
      p.element.style.height = p === pair ? "185.28px" : "74.112px";
      p.element.style.backgroundColor = p === pair ? "#f4fbf9" : "#fff";
      p.element.style.border = p === pair ? "0.904px solid #007f61" : "0.904px solid #c8c8c8"
      p.radioInput.checked = p === pair ? !p.radioInput.checked : false;
    });

    strike.style.marginBottom = pair === pairs[1] ? "17px" : "0";
  });
});
