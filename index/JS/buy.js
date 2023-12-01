async function getPay() {
  const snapshot = await getData("FTT", "FTT-Pay");
  const { payname, payquality, payuse, paywatch } = snapshot.data();

  content.insertAdjacentHTML(
    "beforebegin",
    `

    <div style="padding:10px 16px">
  <p><h1 style="margin-bottom:1rem;">${payname}</h1></p>
  <p style="margin-bottom:1rem;">${payquality}</p>
  <p>${payuse}</p>
  <p>${paywatch}</p>
  </div>

  `
  );
}

function buyPopup() {
  window.open("buy-ex.html", "popup", "width=750,height=700");
}
