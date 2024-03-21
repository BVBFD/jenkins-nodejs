const btn = document.querySelector(".playBtn");
const divBoxes = document.querySelectorAll(".numboxRow span div");
const numboxRow = document.querySelectorAll(".lotteryNum");
const numboxRowA = [];
const numboxRowB = [];
const numboxRowC = [];
const numboxRowD = [];
const numboxRowE = [];

for (let i = 0; i < 30; i++) {
  if (i < 6) {
    numboxRowA.push(numboxRow[i]);
  }
  if (i < 12 && i >= 6) {
    numboxRowB.push(numboxRow[i]);
  }
  if (i < 18 && i >= 12) {
    numboxRowC.push(numboxRow[i]);
  }
  if (i < 24 && i >= 18) {
    numboxRowD.push(numboxRow[i]);
  }
  if (i < 30 && i >= 24) {
    numboxRowE.push(numboxRow[i]);
  }
}

const getLotteryNums = () => {
  const lotteryNum = [];
  for (let i = 0; i < 6; i++) {
    let numRate = Math.random();
    if (numRate < 0.218 && numRate >= 0) {
      let value = Math.round(Math.random() * (10 - 1) + 1);
      if (lotteryNum.includes(value) === false) {
        lotteryNum.push(value);
      } else {
        i--;
      }
    } else if (numRate < 0.448 && numRate >= 0.218) {
      let value = Math.round(Math.random() * (20 - 11) + 11);
      if (lotteryNum.includes(value) === false) {
        lotteryNum.push(value);
      } else {
        i--;
      }
    } else if (numRate < 0.661 && numRate >= 0.448) {
      let value = Math.round(Math.random() * (30 - 21) + 21);
      if (lotteryNum.includes(value) === false) {
        lotteryNum.push(value);
      } else {
        i--;
      }
    } else if (numRate < 0.887 && numRate >= 0.661) {
      let value = Math.round(Math.random() * (40 - 31) + 31);
      if (lotteryNum.includes(value) === false) {
        lotteryNum.push(value);
      } else {
        i--;
      }
    } else if (numRate < 1 && numRate >= 0.887) {
      let value = Math.round(Math.random() * (45 - 41) + 41);
      if (lotteryNum.includes(value) === false) {
        lotteryNum.push(value);
      } else {
        i--;
      }
    }
  }
  return lotteryNum;
};

let index = false;

btn.addEventListener("click", (event) => {
  if (!index) {
    event.target.innerText = "다시뽑기";
    index = true;
  } else {
    event.target.innerText = "숫자뽑기";
    index = false;
  }

  const rowA = getLotteryNums();
  const rowB = getLotteryNums();
  const rowC = getLotteryNums();
  const rowD = getLotteryNums();
  const rowE = getLotteryNums();

  numboxRowA.forEach((box) => {
    box.innerText = rowA.pop();
    console.log(box);
  });

  numboxRowB.forEach((box) => {
    box.innerText = rowB.pop();
    console.log(box);
  });

  numboxRowC.forEach((box) => {
    box.innerText = rowC.pop();
    console.log(box);
  });

  numboxRowD.forEach((box) => {
    box.innerText = rowD.pop();
    console.log(box);
  });

  numboxRowE.forEach((box) => {
    box.innerText = rowE.pop();
    console.log(box);
  });

  divBoxes.forEach((box) => {
    box.classList.toggle("active");
  });
});
