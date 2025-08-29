
 
  let favCount = 0;
  let coins = 100;
  let copyCount = 0;

  const favCounter = document.querySelector(".stats span:first-child"); 
  const coinCounter = document.querySelector(".stats span:nth-child(2)"); 
  const topCopyBtn = document.querySelector(".top-btn");
  const historyContainer = document.querySelector(".call-history");

  // Clear History Button
  document.querySelector(".clear-btn").addEventListener("click", () => {
    historyContainer.querySelectorAll(".call-item").forEach(item => item.remove());
  });

  // Favorite click
  document.querySelectorAll(".fav-icon").forEach(icon => {
    icon.addEventListener("click", () => {
      if (!icon.classList.contains("loved")) {
        icon.classList.add("loved");
        favCount++;
        favCounter.innerHTML = `<i class="fa-solid fa-heart"></i> ${favCount}`;
      }
    });
  });

  // Copy Button Click
  document.querySelectorAll(".card").forEach(card => {
    const copyBtn = card.querySelector(".copy");
    const number = card.querySelector(".number").innerText;

    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(number);  // copy to clipboard
      copyCount++;
      topCopyBtn.innerText = `${copyCount} Copy`;
      alert(`Copied: ${number}`);
    });
  });

  // Call button click
  document.querySelectorAll(".card").forEach(card => {
    const callBtn = card.querySelector(".call");
    callBtn.addEventListener("click", () => {
      const serviceName = card.querySelector("h3").innerText;
      const serviceNum = card.querySelector(".number").innerText;

      if (coins < 20) {
        alert("Not enough coins to make a call!");
        return;
      }

      // Reduce coins
      coins -= 20;
      coinCounter.innerHTML = `<i class="fa-solid fa-coins"></i> ${coins}`;

      // Show alert
      alert(`Calling ${serviceName} at ${serviceNum}`);

      // Add to Call History
      const time = new Date().toLocaleTimeString();
      const callItem = document.createElement("div");
      callItem.classList.add("call-item");
      callItem.innerHTML = `
        <div>
          <h4>${serviceName}</h4>
          <p>${serviceNum}</p>
        </div>
        <span>${time}</span>
      `;
      historyContainer.appendChild(callItem);
    });
  });
