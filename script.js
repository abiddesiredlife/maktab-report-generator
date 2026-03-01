function generateReport() {

const totals = {
  nazira: 100,
  hifzSurah: 100,
  hifzHadees: 100,
  masnoon: 100,
  aqaaidOral: 10,
  urduOral: 50,
  aqaaidIslam: 90,
  masail: 100,
  seerat: 100,
  akhlaq: 100,
  arabi: 100,
  urduWritten: 50
};

let grandTotal = 1000;

let obtained = 0;

for (let key in totals) {
  let value = parseInt(document.getElementById(key).value) || 0;
  obtained += value;
}

let percentage = ((obtained / grandTotal) * 100).toFixed(2);

document.getElementById("reportArea").innerHTML = `
<div class="report">

<h2>ANNUAL EXAMINATION - ${document.getElementById("examYear").value}</h2>

<p><strong>Student:</strong> ${studentName.value}</p>
<p><strong>Father:</strong> ${fatherName.value}</p>
<p><strong>Class:</strong> ${className.value}</p>
<p><strong>Roll No:</strong> ${rollNo.value}</p>
<p><strong>Academic Year:</strong> ${academicYear.value}</p>

<h3>Total Marks: ${grandTotal}</h3>
<h3>Marks Obtained: ${obtained}</h3>
<h3>Percentage: ${percentage}%</h3>

</div>
`;
}
