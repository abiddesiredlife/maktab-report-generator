function generateReport() {

const subjects = {

  taqreeri: [
    {id:"nazira", urdu:"ناظرہ قرآن", eng:"Nazira Quran", total:100},
    {id:"hifzSurah", urdu:"حفظ سورہ", eng:"Hifz Surah", total:100},
    {id:"hifzHadees", urdu:"حفظ حدیث", eng:"Hifz Hadees", total:100},
    {id:"masnoon", urdu:"مسنون دعائیں", eng:"Masnoon Dua", total:100},
    {id:"aqaaidOral", urdu:"عقائد", eng:"Aqaaid (Oral)", total:10},
    {id:"urduOral", urdu:"اردو تقریری", eng:"Urdu Taqreeri", total:50}
  ],

  tehreeri: [
    {id:"aqaaidIslam", urdu:"عقائد اسلام", eng:"Aqaaid Islam", total:90},
    {id:"masail", urdu:"مسائل شریعت", eng:"Masail Shariyat", total:100},
    {id:"seerat", urdu:"سیرت النبی ﷺ", eng:"Seerat-un-Nabi", total:100},
    {id:"akhlaq", urdu:"اخلاق و تعلیم", eng:"Akhlaq o Taleem", total:100},
    {id:"arabi", urdu:"عربی زبان", eng:"Arabi Zaban", total:100},
    {id:"urduWritten", urdu:"اردو تحریری", eng:"Urdu Tehreeri", total:50}
  ]

};

let grandTotal = 1000;
let obtainedTotal = 0;

function buildRows(section) {
  let rows = "";
  section.forEach(sub => {
    let obtained = parseInt(document.getElementById(sub.id).value) || 0;
    obtainedTotal += obtained;

    rows += `
      <tr>
        <td><strong>${sub.urdu}</strong><br><small>${sub.eng}</small></td>
        <td>${sub.total}</td>
        <td>${obtained}</td>
      </tr>
    `;
  });
  return rows;
}

let taqreeriRows = buildRows(subjects.taqreeri);
let tehreeriRows = buildRows(subjects.tehreeri);

let percentage = ((obtainedTotal / grandTotal) * 100).toFixed(2);

let result = obtainedTotal >= 400 ? "PASS" : "FAIL";

document.getElementById("reportArea").innerHTML = `
<div class="report">

<div class="header-strip">
MAKTAB FATIMAH LIL BANAT
</div>

<div class="sub-header">
مکتب فاطمہ للبنات
</div>

<div class="sub-header">
ANNUAL EXAMINATION - ${examYear.value}<br>
سالانہ امتحان - ${examYear.value}
</div>

<div class="student-grid">
<div><strong>طالبہ کا نام:</strong> ${studentName.value}</div>
<div><strong>Student Name:</strong> ${studentName.value}</div>

<div><strong>والد کا نام:</strong> ${fatherName.value}</div>
<div><strong>Father Name:</strong> ${fatherName.value}</div>

<div><strong>درجہ:</strong> ${className.value}</div>
<div><strong>Class:</strong> ${className.value}</div>

<div><strong>رول نمبر:</strong> ${rollNo.value}</div>
<div><strong>Roll No:</strong> ${rollNo.value}</div>

<div><strong>تعلیمی سال:</strong> ${academicYear.value}</div>
<div><strong>Academic Year:</strong> ${academicYear.value}</div>
</div>

<div class="section-title">مضامین تقریری / Mazameen Taqreeri</div>
<table>
<tr>
<th>مضمون<br>Subject</th>
<th>کل نمبر<br>Total</th>
<th>حاصل کردہ نمبر<br>Obtained</th>
</tr>
${taqreeriRows}
</table>

<div class="section-title">مضامین تحریری / Mazameen Tehreeri</div>
<table>
<tr>
<th>مضمون<br>Subject</th>
<th>کل نمبر<br>Total</th>
<th>حاصل کردہ نمبر<br>Obtained</th>
</tr>
${tehreeriRows}
</table>

<div class="total-box">
کل نمبر: ${grandTotal} | Total Marks: ${grandTotal}<br>
حاصل کردہ نمبر: ${obtainedTotal} | Marks Obtained: ${obtainedTotal}<br>
فیصد: ${percentage}% | Percentage: ${percentage}%<br>
نتیجہ: ${result}
</div>

<div class="signature-area">
<div class="signature-box">
_________________<br>
ناظمہ مکتب<br>
Nazima Maktab
</div>

<div class="signature-box">
_________________<br>
صدر مدرسہ<br>
Sadr-e-Mudarris
</div>
</div>

</div>
`;
}
