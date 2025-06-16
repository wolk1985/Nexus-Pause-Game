const cube = document.getElementById('cube');
const pointsDisplay = document.getElementById('points');
const mainPanel = document.getElementById('main-panel');
const precisionValue = document.getElementById('precision-value');
const walletPoints = document.getElementById('wallet-points');
const rewardsValue = document.getElementById('rewards-value');
const connectToggleButton = document.getElementById('connect-toggle-button');
const nexusTitle = document.getElementById('nexus-title');
const nexusSubtitle = document.getElementById('nexus-subtitle');

let angleX = 0, angleY = 0;
const tolerance = 8; // 8 градусів
let lastTime = null;

let lastPrecision = 100;
// Завантаження points, wallet, rewards з localStorage або 0
let points = Number(localStorage.getItem('points')) || 0;
let wallet = Number(localStorage.getItem('wallet')) || 0;
let rewards = Number(localStorage.getItem('rewards')) || 0;

// Оновити Wallet і Rewards при старті
walletPoints.innerText = wallet;
rewardsValue.innerText = rewards;
pointsDisplay.innerText = points;

let frameSkip = 0;
function animate(time) {
  if (!lastTime) lastTime = time;
  const delta = time - lastTime;
  lastTime = time;
  const increment = 1.25 * (delta / 16.67);
  angleX = (angleX + increment) % 360;
  angleY = (angleY + increment) % 360;

  frameSkip = (frameSkip + 1) % 2; // updateCube через кадр
  if (frameSkip === 0) {
    updateCube();
    updatePrecision();
  }
  requestAnimationFrame(animate);
}

function updateCube() {
  cube.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
}

// Підрахунок точності (Precision) і поінтів
function getPrecisionAndPoints() {
  function minToNearest180(angle) {
    const mod360 = angle % 360;
    const to0 = Math.min(mod360, 360 - mod360);
    const to180 = Math.abs(180 - mod360);
    return Math.min(to0, to180);
  }
  const normX = minToNearest180(angleX);
  const normY = minToNearest180(angleY);
  const max = tolerance;
  const maxDeviation = Math.max(normX, normY);
  if (maxDeviation > max) return { precision: 0, points: 0 };
  let precision = Math.max(0, 100 - (maxDeviation * 100 / max));
  precision = Math.round(precision);
  let points = Math.round(precision / 20) * 20;
  if (precision === 100) points = 100;
  if (precision === 0) points = 0;
  return { precision, points };
}

let isPanelGreen = false;
let lastFixedPrecision = precisionValue.innerText;
let lastFixedPoints = pointsDisplay.innerText;

function setPanelGreen(isGreen) {
  isPanelGreen = isGreen; // Оновлюємо прапорець
  document.querySelectorAll('.panel-block').forEach(el => el.classList.toggle('neon-block-green', isGreen));
  document.querySelectorAll('.points-value').forEach(el => el.classList.toggle('neon-text-green', isGreen));
  document.querySelectorAll('.neon-text').forEach(el => el.classList.toggle('neon-text-green', isGreen));
  document.querySelectorAll('.text-base').forEach(el => el.classList.toggle('neon-text-green', isGreen));
  mainPanel.classList.toggle('neon-block-green', isGreen);
  connectToggleButton.classList.toggle('neon-btn-green', isGreen);
  pointsDisplay.classList.toggle('neon-text-green', isGreen);
  precisionValue.classList.toggle('neon-text-green', isGreen);
  walletPoints.classList.toggle('neon-text-green', isGreen);

  nexusTitle.classList.toggle('neon-text-green', isGreen);
  nexusSubtitle.classList.toggle('neon-text-green', isGreen);
}

function updatePrecision() {
  // Показуємо зафіксовані значення завжди, крім моменту зеленої підсвітки
  precisionValue.innerText = lastFixedPrecision;
  pointsDisplay.innerText = lastFixedPoints;
}

function togglePause() {
  const { precision, points: newPoints } = getPrecisionAndPoints();

  if (newPoints > 0) {
    cube.classList.add('correct');
    setPanelGreen(true);
    // Фіксуємо значення для відображення
    lastFixedPrecision = precision + "%";
    lastFixedPoints = newPoints;
    precisionValue.innerText = lastFixedPrecision;
    pointsDisplay.innerText = lastFixedPoints;
    wallet += newPoints;
    walletPoints.innerText = wallet;
    rewards = Math.floor(wallet / 100);
    rewardsValue.innerText = rewards;
    // Зберігаємо значення в localStorage
    localStorage.setItem('points', newPoints);
    localStorage.setItem('wallet', wallet);
    localStorage.setItem('rewards', rewards);
    setTimeout(() => {
      cube.classList.remove('correct');
      setPanelGreen(false);
      // Після зникнення зеленого стану залишаємо зафіксовані значення до наступного натискання
    }, 400);
  } else {
    cube.classList.remove('correct');
    setPanelGreen(false);
    // НЕ скидаємо lastFixedPrecision і lastFixedPoints!
    // Просто залишаємо їх як є, щоб вони залишались на екрані
    walletPoints.innerText = wallet;
    rewards = Math.floor(wallet / 100);
    rewardsValue.innerText = rewards;
    localStorage.setItem('points', lastFixedPoints);
    localStorage.setItem('wallet', wallet);
    localStorage.setItem('rewards', rewards);
  }
}

// Очищення кешу та поінтів по кліку на Pause Game
nexusSubtitle.addEventListener('click', () => {
  localStorage.removeItem('points');
  localStorage.removeItem('wallet');
  localStorage.removeItem('rewards');
  // Можна очистити весь localStorage, якщо потрібно:
  // localStorage.clear();
  location.reload();
});

document.addEventListener('mousedown', togglePause);
document.addEventListener('touchstart', togglePause);

requestAnimationFrame(animate);
