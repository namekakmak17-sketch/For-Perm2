function startLove() {
  const music = document.getElementById("bgm");
  if (music) music.play();
}

function goPassword() {
  window.location.href = "password.html";
}

function goSorry() {
  window.location.href = "sorry.html";
}

function goNext() {
  window.location.href = "next.html";
}

function goQuestion() {
  window.location.href = "question1.html";
}

const inputs = document.querySelectorAll(".inputs input");
const correctPassword = "011204"; // เปลี่ยนเป็นวันจริง

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});

function checkPassword() {
  let value = "";
  inputs.forEach(i => value += i.value);

  if (value === correctPassword) {
    window.location.href = "flower.html";
  } else {
    alert("รหัสไม่ถูกน้าา 🥺");
    inputs.forEach(i => i.value = "");
  }
}

function checkAnswer(type) {
  if (type === "correct") {
    document.getElementById("result").classList.remove("hidden");
  } else {
    alert("อาจจะยังน้าาเบบี๋ 🥺");
  }
}
