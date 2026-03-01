function generateReport() {

const subjects = [
  {id:"nazira", urdu:"ناظرہ قرآن", eng:"Nazira Quran", total:100},
  {id:"hifzSurah", urdu:"حفظ سورہ", eng:"Hifz Surah", total:100},
  {id:"hifzHadees", urdu:"حفظ حدیث", eng:"Hifz Hadees", total:100},
  {id:"masnoon", urdu:"مسنون دعائیں", eng:"Masnoon Dua", total:100},
  {id:"aqaaidOral", urdu:"عقائد", eng:"Aqaaid (Oral)", total:10},
  {id:"urduOral", urdu:"اردو تقریری", eng:"Urdu Taqreeri", total:50},
  {id:"aqaaidIslam", urdu:"عقائد اسلام", eng:"Aqaaid Islam", total:90},
  {id:"masail", urdu:"مسائل شریعت", eng:"Masail Shariyat", total:100},
  {id:"seerat", urdu:"سیرت النبی ﷺ", eng:"Seerat-un-Nabi", total:100},
  {id:"akhlaq", urdu:"اخلاقی تعلیم", eng:"Akhlaqi Taleem", total:100},
  {id:"arabi", urdu:"عربی زبان", eng:"Arabi Zaban", total:100},
  {id:"urduWritten", urdu:"اردو تحریری", eng:"Urdu Tehreeri", total:50}
];

let obtainedTotal = 0;

let rows = subjects.map(sub => {
  let val = parseInt(document.getElementById(sub.id).value) || 0;
  obtainedTotal += val;

  return `
  <tr>
    <td><b>${sub.urdu}</b><br>${sub.eng}</td>
    <td>${sub.total}</td>
    <td>${val}</td>
  </tr>`;
}).join("");

let grandTotal = 1000;

let percentage = (obtainedTotal / grandTotal) * 100;
let percentageFixed = percentage.toFixed(2);

let grade = "";
if (percentage >= 90) grade = "A+";
else if (percentage >= 80) grade = "A";
else if (percentage >= 70) grade = "B";
else if (percentage >= 60) grade = "C";
else if (percentage >= 50) grade = "D";
else grade = "F";

let result = obtainedTotal >= 400 ? "PASS" : "FAIL";

document.getElementById("reportArea").innerHTML = `
<div class="report">

<div class="header-top">
  <div class="logo-side">
    <img src="logo.png">
  </div>
  <div class="title-area">
    <div class="title-eng">MAKTAB FATIMAH LIL BANAT</div>
    <div class="title-urdu">مکتب فاطمہ للبنات</div>
  </div>
</div>

<div class="exam-line">
ANNUAL EXAMINATION - ${examYear.value}<br>
سالانہ امتحان - ${examYear.value}
</div>

<div class="student-grid">
<div><b>طالبہ:</b> ${studentName.value}</div>
<div><b>Student:</b> ${studentName.value}</div>
<div><b>والدیت:</b> ${fatherName.value}</div>
<div><b>Guardian:</b> ${fatherName.value}</div>
<div><b>درجہ:</b> ${className.value}</div>
<div><b>Class:</b> ${className.value}</div>
<div><b>رول نمبر:</b> ${rollNo.value}</div>
<div><b>Roll No:</b> ${rollNo.value}</div>
<div><b>تعلیمی سال:</b> ${academicYear.value}</div>
<div><b>Academic Year:</b> ${academicYear.value}</div>
</div>

<div class="section-title">مضامین / Subjects</div>

<table>
<tr>
<th>مضمون<br>Subject</th>
<th>کل نمبر<br>Total</th>
<th>حاصل کردہ نمبر<br>Obtained</th>
</tr>
${rows}
</table>

<div class="total-box">
کل نمبر: ${grandTotal} | Total: ${grandTotal}<br>
حاصل کردہ نمبر: ${obtainedTotal} | Obtained: ${obtainedTotal}<br>
فیصد: ${percentageFixed}% | Percentage: ${percentageFixed}%<br>
گریڈ: ${grade} | Grade: ${grade}<br>
نتیجہ: ${result}
</div>

<div class="signature-area">
<div>_________________<br>ناظمہ مکتب<br>Nazima</div>
<div>_________________<br>صدر مدرسہ<br>Sadr</div>
</div>

</div>
`;

}
