const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

// Extract DEFAULT_QUESTIONS from app.js
const appJsContent = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
const match = appJsContent.match(/const DEFAULT_QUESTIONS = ([\s\S]*?\n\};)/);

if (!match) {
  console.error('Could not find DEFAULT_QUESTIONS in app.js');
  process.exit(1);
}

let DEFAULT_QUESTIONS;
try {
  eval('DEFAULT_QUESTIONS = ' + match[1]);
} catch (e) {
  console.error('Error evaluating DEFAULT_QUESTIONS:', e);
  process.exit(1);
}

const roundsData = [
  { title: 'GENERAL ROUND (साधारण राउण्ड - २४ प्रश्नहरू)', data: DEFAULT_QUESTIONS.general, defaultPts: 10 },
  { title: 'RAPID FIRE ROUND - HOUSE A (किराँत/नेपाल ज्ञान)', data: DEFAULT_QUESTIONS.rapidfire_A, defaultPts: 5 },
  { title: 'RAPID FIRE ROUND - HOUSE B (शाह/भुगोल)', data: DEFAULT_QUESTIONS.rapidfire_B, defaultPts: 5 },
  { title: 'RAPID FIRE ROUND - HOUSE C (लिच्छवि/संस्कृति)', data: DEFAULT_QUESTIONS.rapidfire_C, defaultPts: 5 },
  { title: 'RAPID FIRE ROUND - HOUSE D (मल्ल/इतिहास)', data: DEFAULT_QUESTIONS.rapidfire_D, defaultPts: 5 },
  { title: 'PICTURE ROUND (तस्विर पहिचान राउण्ड)', data: DEFAULT_QUESTIONS.picture, defaultPts: 15 },
  { title: 'BUZZER ROUND (बजर राउण्ड - चौतर्फी प्रश्नहरू)', data: DEFAULT_QUESTIONS.buzzer, defaultPts: 15 },
  { title: 'ESTIMATION ROUND (अनुमानित गणना राउण्ड)', data: DEFAULT_QUESTIONS.estimation, defaultPts: 15 }
];

let htmlRoundsContent = '';

roundsData.forEach(round => {
  if (!round.data || round.data.length === 0) return;

  htmlRoundsContent += `
    <div class="round-section">
      <div class="round-header">${round.title}</div>
      <table class="q-table">
        <thead>
          <tr>
            <th style="width: 40px; text-align: center;">क्र.सं.</th>
            <th>प्रश्न (Question)</th>
            <th style="width: 200px;">उत्तर (Correct Answer)</th>
            <th style="width: 50px; text-align: center;">अङ्क</th>
          </tr>
        </thead>
        <tbody>
  `;

  round.data.forEach((q, idx) => {
    const qText = q.question || (q.image ? `[तस्विर/Picture: ${q.image}]` : `प्रश्न #${idx + 1}`);
    const qAns = q.displayAnswer || q.answer;
    const qPts = q.points || round.defaultPts;

    htmlRoundsContent += `
      <tr>
        <td class="q-num">${idx + 1}</td>
        <td class="q-text">${qText}</td>
        <td class="q-ans">${qAns}</td>
        <td class="q-pts">+${qPts}</td>
      </tr>
    `;
  });

  htmlRoundsContent += `
        </tbody>
      </table>
    </div>
  `;
});

const fullHtml = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="utf-8">
  <title>Newlight Quiz 2083/04/29 - Questions Master Key</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800&display=swap');
    body {
      font-family: 'Mukta', 'Segoe UI', Arial, sans-serif;
      margin: 0;
      padding: 30px;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.5;
    }
    .header-title {
      text-align: center;
      border-bottom: 3px solid #4f46e5;
      padding-bottom: 12px;
      margin-bottom: 24px;
    }
    .header-title h1 {
      margin: 0;
      font-size: 24px;
      color: #1e1b4b;
    }
    .header-title p {
      margin: 6px 0 0 0;
      font-size: 14px;
      color: #475569;
      font-weight: 600;
    }
    .round-section {
      margin-bottom: 26px;
      page-break-inside: avoid;
    }
    .round-header {
      background: #3730a3;
      color: #ffffff;
      padding: 8px 14px;
      font-size: 16px;
      font-weight: 700;
      border-radius: 6px;
      margin-bottom: 10px;
    }
    .q-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 12px;
    }
    .q-table th, .q-table td {
      border: 1px solid #cbd5e1;
      padding: 8px 10px;
      text-align: left;
      font-size: 13px;
    }
    .q-table th {
      background: #f1f5f9;
      color: #334155;
      font-weight: 700;
    }
    .q-num {
      font-weight: 700;
      color: #4f46e5;
      text-align: center;
    }
    .q-text {
      color: #0f172a;
      font-weight: 600;
    }
    .q-ans {
      color: #15803d;
      font-weight: 700;
    }
    .q-pts {
      font-weight: 700;
      color: #0284c7;
      text-align: center;
    }
    .footer {
      text-align: center;
      font-size: 11px;
      color: #94a3b8;
      margin-top: 30px;
      border-top: 1px solid #e2e8f0;
      padding-top: 10px;
    }
  </style>
</head>
<body>
  <div class="header-title">
    <h1>🏆 Newlight Quiz 2083/04/29</h1>
    <p>नेपाल तथा सामान्य ज्ञान हाजिरीजवाफ प्रतियोगिता - Complete Questions Bank & Answer Key</p>
  </div>

  ${htmlRoundsContent}

  <div class="footer">
    Newlight Quiz 2083/04/29 &bull; Master Questions & Answer Sheet &bull; Generated Automatically
  </div>
</body>
</html>
`;

// Also save HTML version for browser printing
const htmlPath = path.join(__dirname, 'Newlight_Quiz_Questions_2083-04-29.html');
fs.writeFileSync(htmlPath, fullHtml, 'utf8');

app.whenReady().then(async () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    show: false,
    webPreferences: { nodeIntegration: true }
  });

  await win.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(fullHtml));

  const pdfPath = path.join(__dirname, 'Newlight_Quiz_Questions_2083-04-29.pdf');
  
  win.webContents.printToPDF({
    printBackground: true,
    pageSize: 'A4',
    margins: { top: 0.4, bottom: 0.4, left: 0.4, right: 0.4 }
  }).then(data => {
    fs.writeFileSync(pdfPath, data);
    console.log('PDF Generated Successfully at:', pdfPath);
    app.quit();
  }).catch(error => {
    console.error('Error generating PDF:', error);
    app.quit();
  });
});
