/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  //villa;
  alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.')
  play();

  let playAnother = true;

  while (playAnother) {
    playAnother = confirm('Spila annan leik?');

    if (playAnother) {
      play();
    } else {
      playAnother = false;
      break;
    }
  }
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  let timeStart = new Date;
  let correctAnswers = 0;

  for (let i = 1 ; i <= GAMES_TO_PLAY ; i = i + 1) {
    let answer = ask();
    if (answer === null) {
      alert('Hætt í leik.')
      break;
    } else {
      correctAnswers = correctAnswers + answer;

    }

  }

  if (answer !== null) {
    let timeEnd = new Date;
    let totalTime = (timeEnd - timeStart) / 1000;
    averageTime = correctAnswers / totalTime;
  
    alert(`Þú svaraðir ${correctAnswers} af ${GAMES_TO_PLAY} dæmum rétt á ${totalTime.toFixed(2)} sekúndum\nMeðalrétt svör á sekúndu eru ${averageTime.toFixed(2)}`);
  }

}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  let a;
  let b;
  let c;
  
  let symbol = symbolDecider(randomNumber(1,4));

  if (symbol === '/') {
    b = randomNumber(2,10);
    a = b*randomNumber(2,10);
    c = a/b;
  } else if (symbol ==='*') {
    a = randomNumber(1,10);
    b = randomNumber(1,10);
    c = a*b;
  } else if (symbol === '-') {
    a = randomNumber(1,100);
    b = randomNumber(1,100);
    c = a-b;
  } else {
    a = randomNumber(1,100);
    b = randomNumber(1,100);
    c = a+b;
  }
  let userAnswer = prompt(`Hvað er ${a} ${symbol} ${b}?`);

  if (userAnswer !== null){
    answer = parseInt(userAnswer) === c;
  } else {
    answer = userAnswer;
  }

  return answer;
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function symbolDecider(number) {
  let symbol;
  switch (number) {
    case 1:
    symbol = '+';
    break;
    case 2:
    symbol = '-';
    break;
    case 3:
    symbol = '*';
    break;
    case 4:
    symbol = '/';
    break;
  }
  return symbol;
}

// Byrjar leik
start();
