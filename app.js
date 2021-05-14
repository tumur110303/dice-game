// #### №41. ПРОГРАМ АЖИЛЛАХ БЭЛТГЭЛ АЖИЛ (ЭХЛЭЛ.) ####

//Тоглогчийн ээлжийг хадгалах хувьсагч. I pleyer 0, II player 1 гэж тэмдэглэе.
var activePlayer = 0;
// Тоглогчидийн цуглуулсан оноог хадгалах хувьсагч.
var scores = [0, 0];
// Тоглогч тоглож байх үеийн ээлжийн оноог хадгалах хувьсагч.
var roundScore = 0;
/* document.querySelector("#score-0").textContent = 0; //document.querySelector - р HTML дээр бичигдсэн class-ыг # тэмдэглэгээ ашиглан ID-аар нь хайж, дуудлаа.
document.querySelector("#score-1").textContent = 0;  //Энд # тэмдэглэгээ тавигдсан учраас ID-аар нь хайдаг.

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
*/

document.getElementById("score-0").textContent = 0; //Тусгай # тэмдэглэгээ тавих шаардлагагүй. Зөвхөн ID-р хайлт хийхэд ашигладаг.
document.getElementById("score-1").textContent = 0; //querySelector-с давуу тал нь зөвхөн ID-р хайдаг учраас хурдан ажилладаг.
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

//class-аар шооны зургийг хайх.
var diceDom = document.querySelector(".dice");

diceDom.style.display = "none"; // "none" - HTML дотор байсан зургийг байхгүй болгож харагдуулна.

document.querySelector(".btn-roll").addEventListener("click", function () {
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
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буусан тул тоглогчийг ээлжийг солино.
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
});
