function generateReport() {

const subjects = [
  {name:"ناظرہ قرآن", max:100, id:"nazira"},
  {name:"حفظ سورہ", max:100, id:"hifzSurah"},
  {name:"حفظ حدیث", max:100, id:"hifzHadees"},
  {name:"مسنون دعائیں", max:100, id:"masnoon"},
  {name:"عقائد", max:10, id:"aqaaidOral"},
  {name:"اردو تقریری", max:50, id:"urduOral"},
  {name:"عقائد اسلام", max:90, id:"aqaaidIslam"},
  {name:"مسائل شریعت", max:100, id:"masail"},
  {name:"سیرت النبی ﷺ", max:100, id:"seerat"},
  {name:"اخلاقی تعلیم", max:100, id:"akhlaq"},
  {name:"عربی زبان", max:100, id:"arabi"},
  {name:"اردو تحریری", max:50, id:"urduWritten"}
];

let totalObtained = 0;
let rows = "";

/* ===== VALIDATION LOOP ===== */

for (let sub of subjects) {

  let input = document.getElementById(sub.id);
  let value = parseInt(input.value) || 0;

  if (value > sub.max) {
    alert(`"${sub.name}" میں زیادہ سے زیادہ نمبر ${sub.max} ہیں`);
    input.value = "";
    input.focus();
    return; // STOP REPORT
  }

  totalObtained += value;

  rows += `
  <tr>
    <td>${sub.name}</td>
    <td>${sub.max}</td>
    <td>${value}</td>
  </tr>`;
}

/* ===== CALCULATIONS ===== */

let totalMarks = 1000;
let percent = (totalObtained / totalMarks) * 100;
let percentFixed = percent.toFixed(2);

let grade = percent >= 90 ? "A+" :
            percent >= 80 ? "A" :
            percent >= 70 ? "B" :
            percent >= 60 ? "C" :
            percent >= 50 ? "D" : "F";

let result = percent >= 40 ? "کامیاب" : "ناکام";

/* ===== BUILD REPORT ===== */

document.getElementById("reportArea").innerHTML = `
<div class="report">

<div class="header">
<div class="title-eng">MAKTAB FATIMAH LIL BANAT</div>
<div class="title-urdu">مکتب فاطمہ للبنات</div>
<div class="exam-title">سالانہ امتحان - ${document.getElementById("examYear").value}</div>
</div>

<div class="student-info">
طالبہ: ${document.getElementById("studentName").value} <br>
والدیت: ${document.getElementById("guardianName").value} <br>
درجہ: ${document.getElementById("className").value} <br>
رول نمبر: ${document.getElementById("rollNo").value} <br>
تعلیمی سال: ${document.getElementById("academicYear").value}
</div>

<div class="tables-wrapper">

<div class="table-box">
<div class="section-head taqreeri-head">مضامین</div>
<table>
<tr><th>مضمون</th><th>کل نمبر</th><th>حاصل کردہ</th></tr>
${rows}
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
