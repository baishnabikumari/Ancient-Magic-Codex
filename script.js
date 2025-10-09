// Data of the Magic items from assets folder.
// Magic item data in pnd and with transparent bg.
const items = [
  { name: "Wand of Wisdom", desc: "Channels ancient knowledge to reveal hidden truths.", color: "purple", img: "assets/wand.png" },
  { name: "Potion of Shadows", desc: "A mysterious elixir granting invisibility under moonlight.", color: "blue", img: "assets/potion.png" },
  { name: "Sword of Flames", desc: "Forged in dragonfire, it burns through darkness.", color: "red", img: "assets/sword.png" },
  { name: "Crystal of Serenity", desc: "Holds the calm of the eternal sky.", color: "green", img: "assets/crystal.png" },
  { name: "Cloak of Mist", desc: "Wraps the wearer in living fog.", color: "blue", img: "assets/cloak.png" },
  { name: "Orb of Echoes", desc: "Whispers secrets from realms unseen.", color: "purple", img: "assets/orb.png" },
  { name: "Helm of Valor", desc: "Fills the bearer with unbreakable courage.", color: "gold", img: "assets/helm.png" },
  { name: "Boots of Wind", desc: "Allows the user to walk upon air.", color: "green", img: "assets/boots.png" },
  { name: "Ring of Eternity", desc: "Time bends for the one who wears it.", color: "gold", img: "assets/ring.png" },
  { name: "Staff of Storms", desc: "Summons thunder and lightning on command.", color: "red", img: "assets/staff.png" },
  { name: "Amulet of Dawn", desc: "Radiates warmth and renews strength.", color: "gold", img: "assets/amulet.png" },
  { name: "Lantern of Souls", desc: "Guides lost spirits to their resting place.", color: "blue", img: "assets/lantern.png" },
];

if (document.getElementById("cardContainer")) {
  const container = document.getElementById("cardContainer");
  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.color = item.color;
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p>${item.desc}</p>
    `;
    card.onclick = () => {
      localStorage.setItem("selectedItem", JSON.stringify(item));

// Here is the all the files where user will redirect to, when they click on the selected magic items.html
      const nameToFile = {
        "Lantern of Souls": "lantern.html",
        "Crystal of Serenity": "crystal.html",
        "Wand of Wisdom": "wand.html",
        "Potion of Shadows": "potion.html",
        "Sword of Flames": "sword.html",
        "Cloak of Mist": "cloak.html",
        "Orb of Echoes": "orb.html",
        "Helm of Valor": "helm.html",
        "Boots of Wind": "boots.html",
        "Ring of Eternity": "ring.html",
        "Staff of Storms": "staff.html",
        "Amulet of Dawn": "amulet.html",
      };

      window.location.href = nameToFile[item.name] || "item.html";
    };
    container.appendChild(card);
  });
}
