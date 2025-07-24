let piggyBank = {
  balance: 0,
  transactions: []
};
let isBroken = false;

const balanceEl = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const transactionsEl = document.getElementById("transactions");
const depositBtn = document.getElementById("deposit-btn");
const breakBtn = document.getElementById("break-btn");
const restartBtn = document.getElementById("restart-btn");

function updateUI() {
  balanceEl.textContent = piggyBank.balance;
  transactionsEl.innerHTML = piggyBank.transactions
    .map(tx => <li>${tx}</li>)
    .join("");
  amountInput.value = "";
}

depositBtn.addEventListener("click", () => {
  if (isBroken) return alert("Piggy bank is broken. Start a new one.");
  const amount = parseInt(amountInput.value);
  if (amount > 0) {
    piggyBank.balance += amount;
    piggyBank.transactions.push(Deposited ₹${amount});
    updateUI();
  } else {
    alert("Please enter a valid amount.");
  }
});

breakBtn.addEventListener("click", () => {
  if (isBroken) {
    alert("Piggy bank already broken.");
    return;
  }
  alert(You broke the piggy bank and got ₹${piggyBank.balance});
  piggyBank = { balance: 0, transactions: [] };
  isBroken = true;
  updateUI();
  restartBtn.style.display = "block";
});

restartBtn.addEventListener("click", () => {
  piggyBank = { balance: 0, transactions: [] };
  isBroken = false;
  updateUI();
  restartBtn.style.display = "none";
});
