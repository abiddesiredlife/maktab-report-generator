function generateReport() {

const taqreeri = [
  ["ناظرہ قرآن",100,"nazira"],
  ["حفظ سورہ",100,"hifzSurah"],
  ["حفظ حدیث",100,"hifzHadees"],
  ["مسنون دعائیں",100,"masnoon"],
  ["عقائد",10,"aqaaidOral"],
  ["اردو تقریری",50,"urduOral"]
];

const tehreeri = [
  ["عقائد اسلام",90,"aqaaidIslam"],
  ["مسائل شریعت",100,"masail"],
  ["سیرت النبی ﷺ",100,"seerat"],
  ["اخلاقی تعلیم",100,"akhlaq"],
  ["عربی زبان",100,"arabi"],
  ["اردو تحریری",50,"urduWritten"]
];

let totalObtained = 0;

function buildRows(list) {
  return list.map(sub => {
    let val = parseInt(document.getElementById(sub[2]).value) || 0;
    totalObtained += val;
    return `<tr><td>${sub[0]}</td><td>${sub[1]}</td><td>${val}</td></tr>`;
  }).join("");
}

let taqRows = buildRows(taqreeri);
let tehRows = buildRows(tehreeri);

let totalMarks = 1000;
let percent = (totalObtained / totalMarks) * 100;
let percentFixed = percent.toFixed(2);

let grade = percent >= 90 ? "A+" :
            percent >= 80 ? "A" :
            percent >= 70 ? "B" :
            percent >= 60 ? "C" :
            percent >= 50 ? "D" : "F";

let result = percent >= 40 ? "کامیاب" : "ناکام";

document.getElementById("reportArea").innerHTML = `
<div class="report">

<div class="header">
<div class="title-eng">MAKTAB FATIMAH LIL BANAT</div>
<div class="title-urdu">مکتب فاطمہ للبنات</div>
<div class="exam-title">سالانہ امتحان - ${examYear.value}</div>
</div>

<div class="student-info">
طالبہ: ${studentName.value} <br>
والدیت: ${guardianName.value} <br>
درجہ: ${className.value} <br>
رول نمبر: ${rollNo.value} <br>
تعلیمی سال: ${academicYear.value}
</div>

<div class="tables-wrapper">

<div class="table-box">
<div class="section-head taqreeri-head">مضامین تقریری</div>
<table>
<tr><th>مضمون</th><th>کل نمبر</th><th>حاصل کردہ</th></tr>
${taqRows}
</table>
</div>

<div class="table-box">
<div class="section-head tehreeri-head">مضامین تحریری</div>
<table>
<tr><th>مضمون</th><th>کل نمبر</th><th>حاصل کردہ</th></tr>
${tehRows}
</table>
</div>

</div>

<div class="total-box">
کل نمبر: ${totalMarks} <br>
حاصل کردہ نمبر: ${totalObtained} <br>
فیصد: ${percentFixed}% <br>
درجہ: ${grade} <br>
نتیجہ: ${result}
</div>

<div class="signature">
<div>_________________<br>ناظمہ مکتب</div>
<div>_________________<br>صدر مدرسہ</div>
</div>

</div>
`;

}
