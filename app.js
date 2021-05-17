//Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч.
var isNewGame;

//Global хувьсагчид.
var activePlayer; //Идэвхитэй тоглогчийн ээлжийн дугаар (0 эсвэл 1).
var scores; //Цуглуулсан оноо.
var roundScore; //Тухайн тоглогчийн ээлжийн оноо.
//class-аар шооны зургийг хайх.
var diceDom = document.querySelector(".dice");

//Тоглоомыг эхлүүлнэ.
initGame();

function initGame() {
  // #### №41. ПРОГРАМ АЖИЛЛАХ БЭЛТГЭЛ АЖИЛ (ЭХЛЭЛ.) ####
  isNewGame = true;
  //Тоглогчийн ээлжийг хадгалах хувьсагч. I pleyer 0, II player 1 гэж тэмдэглэе.
  activePlayer = 0;
  // Тоглогчидийн цуглуулсан оноог хадгалах хувьсагч.
  scores = [0, 0];
  // Тоглогч тоглож байх үеийн ээлжийн оноог хадгалах хувьсагч.
  roundScore = 0;
  /* document.querySelector("#score-0").textContent = 0; //document.querySelector - р HTML дээр бичигдсэн class-ыг # тэмдэглэгээ ашиглан ID-аар нь хайж, дуудлаа.
document.querySelector("#score-1").textContent = 0;  //Энд # тэмдэглэгээ тавигдсан учраас ID-аар нь хайдаг.

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
*/

  document.getElementById("score-0").textContent = 0; //Тусгай # тэмдэглэгээ тавих шаардлагагүй. Зөвхөн ID-р хайлт хийхэд ашигладаг.
  document.getElementById("score-1").textContent = 0; //querySelector-с давуу тал нь зөвхөн ID-р хайдаг учраас хурдан ажилладаг.
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  //Тоглогчидын нэрийг буцааж гаргах.
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none"; // "none" - HTML дотор байсан зургийг байхгүй болгож харагдуулна.
}

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    // Шооны аль талаараа буусны хадгалах хувьсагч хэрэгтэй. 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй үүсгэж өгнө.
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //Шооны зургийг вэб дээр гаргаж ирсэн.
    diceDom.style.display = "block"; //"block" - HTML дотор байсан зургийг харагдуулна.

    //Буусан шооны тоонд харгалзах зургийг гаргаж ирнэ.
    diceDom.src = "dice-" + diceNumber + ".png"; //src рүү нь хандаж байна. HTML үз. Ж нь: png файлууд dice-4.png гэсэн нэртэй байгааг дуудаж ажиллууллаа.
    //addEventListener доторх "click" үйлдэл нь яг ямар үйлдэл хийхийг зааж өглөө.
    // #### №41. ПРОГРАМ АЖИЛЛАХ БЭЛТГЭЛ АЖИЛ (ТӨГСГӨЛ.) ####

    /* #### №42.  JAVASCRIPT-ЫН EVENT ГЭЖ ЮУ ВЭ? ЭВЕНТ НЬ БИДНИЙ ВЭБ ХУУДАС ДЭЭР БОЛЖ БАЙГАА ҮЙЛ ЯВЦ, ПРОЦЕСС ЮМ. 
    ЖИШЭЭЛБЭЛ:  ХЭРЭГЛЭГЧ MOUSE ДАРСАН УУ? SCROLL ДАРСАН УУ? ГЭХ МЭТ ПРОЦЕСС ЮМ. ЭВЕНТ - ҮЙЛ ЯВДАЛ ГЭСЭН АНГЛИ ҮГ.
    MESSAGE QUEUE НЬ ВЭБ ХУУДАС ДЭЭР ҮҮССЭН ЭВЕНТҮҮДИЙН БОЛОВСРУУЛАГДАХДАА ХҮЛЭЭГЭЭД ОЧЕРЛОЖ ЗОГСДОГ ГАЗАР НЬ ЮМ.
*/
    /* ПРОГРАМЧЛАХ ДАРААЛАЛ
 1. Roll dice товчийг DOM-оос авна.
 2. Уг товч дээр хулганаар Click хийхэд ажиллах эвент листенер функц бичиж холбоно.
 3. click хийхэд 1-6 хооронд санамсаргүй тоо үүсгээд харгалзах шооны зургийг DOM-оос авна. Уг обьектийг вэб дээр харагддаг болгоно.
    Уг обьектийн зургийг  өөрчилнө.
 */

    // #### №43. Буусан тоо нь 1-с ялгаатай бол тоглогчийн ээлжийг оноог өөрчилж, солих. ####
    if (diceNumber !== 1) {
      //1-ээс ялгаатай тоо буусан тул буусан тоог тоглогчид нэмж өгсөөр л байна.
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      //Тоглогчийн ээлжийг солих.
      switchToNextPlayer();
    }
  } else {
    alert(
      "Тоглоом дууссан байна. New Game товчийг дарж тоглоомыг шинээр эхлүүлнэ үү!!!"
    );
  }
});
// #### №44. Hold товчны event listener. ####
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    //Уг тоглогчийн цуглуулсан оноог глобаль оноон дээр нь нэмж өгнө.
    scores[activePlayer] = scores[activePlayer] + roundScore;
    //Тоглогч хожсон эсэхийг (100-аас дээш) шалгах.
    //Дэлгэц дээрх нийт оноог нь өөрчлөх.
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      //Тоглоомыг дууссан төлөвт оруулна.
      isNewGame = false;
      // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана.
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  } else {
    alert(
      "Тоглоом дууссан байна. New Game товчийг дарж тоглоомыг шинээр эхлүүлнэ үү!!!"
    );
  }
});
//Тоглох ээлжийг дараачийн тоглогч руу шилжүүлэх функц.
function switchToNextPlayer() {
  //Тоглогчийн оноог нь 0 болгож, ээлж солино.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = "0";
  //Тоглогчийн ээлжийг солино.
  //Энэ тоглогчийн цуглуулсан оноог нойллоод дараагийн тоглогч шоо хаяж эхэлнэ.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // Хэрэв идэвхитэй тоглогч нь 0 байвал идэвхитэй тоглогчийг 1 болго.
  //Үгүй бол 0 болго.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); //Гурвалсан оператор.
  //Улаан цэгийг шилжүүлэх.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //Player солигдох үед шоог түр харагдахгүй болгох.
  diceDom.style.display = "none";
}

//New Game буюу Шинээр тоглоом эхлүүлэх товчны event-listener.
document.querySelector(".btn-new").addEventListener("click", initGame);
