let credits = document.getElementById("credits").textContent;
const honeyJar = document.getElementById("honey_jar");
const buyButton = document.getElementsByClassName("buy_button");
const shopItem = document.getElementsByClassName("shop_item");
let creditsPerClick = 1;

honeyJar.onclick = () => {
    credits = +credits + creditsPerClick;
    document.getElementById("credits").textContent = credits;
}

honeyJar.onmousedown = () => {
    honeyJar.style.width = "90px";
    honeyJar.style.paddingBottom = "6px";
}

honeyJar.onmouseup = () => {
    honeyJar.style.width = "96px";
    honeyJar.style.paddingBottom = "0";
}

for (let i = 0; i < buyButton.length; i++) {
    buyButton[i].onclick = () => {
        if (!upgrades.doubleCredit && +credits >= 50) {
            upgrades.doubleCredit = true;
            credits -= 50;
            buyButton[0].style.backgroundColor = "gray";
            document.getElementById("credits").textContent = credits;
            upgradeCheck();
            shopItem[i + 1].className += " shop_item_active";
        } else if (!upgrades.tripleCredit && +credits >= 150) {
            upgrades.tripleCredit = true;
            credits -= 150;
            buyButton[i].style.backgroundColor = "gray";
            document.getElementById("credits").textContent = credits;
            upgradeCheck();
            shopItem[i + 1].className += " shop_item_active";
        } else if (!upgrades.quadCredit && +credits >= 300) {
            upgrades.quadCredit = true;
            credits -= 300;
            buyButton[i].style.backgroundColor = "gray";
            document.getElementById("credits").textContent = credits;
            upgradeCheck();
            shopItem[i + 1].className += " shop_item_active";
        } else if (!upgrades.fiveCredit && +credits >= 500) {
            upgrades.fiveCredit = true;
            credits -= 500;
            buyButton[i].style.backgroundColor = "gray";
            document.getElementById("credits").textContent = credits;
            upgradeCheck();
            shopItem[i + 1].className += " shop_item_active";
        } else if (!upgrades.sixCredit && +credits >= 750) {
            upgrades.sixCredit = true;
            credits -= 750;
            buyButton[i].style.backgroundColor = "gray";
            document.getElementById("credits").textContent = credits;
            upgradeCheck();
        }
    }
}

let upgrades = {
    doubleCredit: false,
    tripleCredit: false,
    quadCredit: false,
    fiveCredit: false,
    sixCredit: false
}

function upgradeCheck() {
    if (upgrades.doubleCredit) creditsPerClick = 2;
    if (upgrades.tripleCredit) creditsPerClick = 3;
    if (upgrades.quadCredit) creditsPerClick = 4;
    if (upgrades.fiveCredit) creditsPerClick = 5;
    if (upgrades.sixCredit) creditsPerClick = 6;
}