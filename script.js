function generateReport() {
    const examYear = document.getElementById('examYear').value;
    const academicYear = document.getElementById('academicYear').value;
    const studentName = document.getElementById('studentName').value;
    const fatherName = document.getElementById('fatherName').value;
    const className = document.getElementById('className').value;
    const rollNo = document.getElementById('rollNo').value;

    const marks = {
        nazra: parseFloat(document.getElementById('nazra').value) || 0,
        hifzSurah: parseFloat(document.getElementById('hifzSurah').value) || 0,
        hifzHadith: parseFloat(document.getElementById('hifzHadith').value) || 0,
        masnoonDua: parseFloat(document.getElementById('masnoonDua').value) || 0,
        aqaedTaq: parseFloat(document.getElementById('aqaedTaq').value) || 0,
        urduTaq: parseFloat(document.getElementById('urduTaq').value) || 0,
        aqaedIslam: parseFloat(document.getElementById('aqaedIslam').value) || 0,
        masail: parseFloat(document.getElementById('masail').value) || 0,
        seerat: parseFloat(document.getElementById('seerat').value) || 0,
        akhlaqi: parseFloat(document.getElementById('akhlaqi').value) || 0,
        arabi: parseFloat(document.getElementById('arabi').value) || 0,
        urduTah: parseFloat(document.getElementById('urduTah').value) || 0,
    };

    const maxMarks = {
        nazra: 100,
        hifzSurah: 100,
        hifzHadith: 100,
        masnoonDua: 100,
        aqaedTaq: 10,
        urduTaq: 50,
        aqaedIslam: 90,
        masail: 100,
        seerat: 100,
        akhlaqi: 100,
        arabi: 100,
        urduTah: 50,
    };

    const subjectNames = {
        nazra: 'ناظرہ قرآن',
        hifzSurah: 'حفظ سورہ',
        hifzHadith: 'حفظ حدیث',
        masnoonDua: 'مسنون دعائیں',
        aqaedTaq: 'عقائد',
        urduTaq: 'اردو تقریری',
        aqaedIslam: 'عقائد اسلام',
        masail: 'مسائل شریعت',
        seerat: 'سیرت النبی ﷺ',
        akhlaqi: 'اخلاقی تعلیم',
        arabi: 'عربی زبان',
        urduTah: 'اردو تحریری',
    };

    let invalid = false;
    for (let subject in marks) {
        if (marks[subject] > maxMarks[subject]) {
            alert(`غلط نمبر درج کیا گیا ہے "${subjectNames[subject]}" کے لیے۔ زیادہ سے زیادہ ${maxMarks[subject]} نمبر ہو سکتے ہیں۔`);
            invalid = true;
            break;
        }
    }
    if (invalid) return;

    let totalObtained = Object.values(marks).reduce((a, b) => a + b, 0);
    let totalMax = 1000;
    let percentage = (totalObtained / totalMax * 100).toFixed(2);
    let grade;
    if (percentage >= 90) grade = 'A+';
    else if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B';
    else if (percentage >= 60) grade = 'C';
    else if (percentage >= 50) grade = 'D';
    else if (percentage >= 40) grade = 'E';
    else grade = 'F';
    let result = percentage >= 33 ? 'کامیاب' : 'ناکام';

    const reportHTML = `
        <div class="title">MAKTAB FATIMAH LIL BANAT</div>
        <div class="title-ar">مکتب فاطمہ للبنات</div>
        <div class="student-info">
            <p>امتحانی سال: ${examYear}</p>
            <p>تعلیمی سال: ${academicYear}</p>
            <p>طالبہ کا نام: ${studentName}</p>
            <p>والدیت / زوجیت: ${fatherName}</p>
            <p>درجہ: ${className}</p>
            <p>رول نمبر: ${rollNo}</p>
        </div>
        <div class="subjects">
            <div class="block">
                <h3>مضامین تقریری</h3>
                <table>
                    <tr><th>مضمون</th><th>کل نمبر</th><th>حاصل کردہ</th></tr>
                    <tr><td class="subject-col">ناظرہ قرآن</td><td>100</td><td>${marks.nazra}</td></tr>
                    <tr><td class="subject-col">حفظ سورہ</td><td>100</td><td>${marks.hifzSurah}</td></tr>
                    <tr><td class="subject-col">حفظ حدیث</td><td>100</td><td>${marks.hifzHadith}</td></tr>
                    <tr><td class="subject-col">مسنون دعائیں</td><td>100</td><td>${marks.masnoonDua}</td></tr>
                    <tr><td class="subject-col">عقائد</td><td>10</td><td>${marks.aqaedTaq}</td></tr>
                    <tr><td class="subject-col">اردو تقریری</td><td>50</td><td>${marks.urduTaq}</td></tr>
                </table>
            </div>
            <div class="block">
                <h3>مضامین تحریری</h3>
                <table>
                    <tr><th>مضمون</th><th>کل نمبر</th><th>حاصل کردہ</th></tr>
                    <tr><td class="subject-col">عقائد اسلام</td><td>90</td><td>${marks.aqaedIslam}</td></tr>
                    <tr><td class="subject-col">مسائل شریعت</td><td>100</td><td>${marks.masail}</td></tr>
                    <tr><td class="subject-col">سیرت النبی ﷺ</td><td>100</td><td>${marks.seerat}</td></tr>
                    <tr><td class="subject-col">اخلاقی تعلیم</td><td>100</td><td>${marks.akhlaqi}</td></tr>
                    <tr><td class="subject-col">عربی زبان</td><td>100</td><td>${marks.arabi}</td></tr>
                    <tr><td class="subject-col">اردو تحریری</td><td>50</td><td>${marks.urduTah}</td></tr>
                </table>
            </div>
        </div>
        <div class="totals">
            <p>حاصل کردہ نمبر: ${totalObtained} / ${totalMax}</p>
            <p>فیصد: ${percentage}%</p>
            <p>درجہ: ${grade}</p>
            <p>نتیجہ: ${result}</p>
        </div>
    `;

    document.getElementById('report').innerHTML = reportHTML;
    document.getElementById('report').style.display = 'block';
    document.getElementById('pdfButton').style.display = 'block';
}

function downloadPDF() {
    const element = document.getElementById('report');
    const opt = {
        margin: 0,
        filename: 'report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}
