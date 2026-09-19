/**
 * Nepal & General Knowledge Quiz Contest Application
 * Vanilla JS Reactive Controller & Audio Synthesizer
 */

// DEFAULT PRE-LOADED DATA
// DEFAULT PRE-LOADED DATA (100% UNIQUE QUESTIONS ACROSS ALL ROUNDS)
const DEFAULT_QUESTIONS = {
  general: [
    { id: 'g1', question: 'नेपालमा कागजी नोटको चलन कसको पालादेखि सुरु भयो?', answer: 'जुद्ध शमशेरको पालादेखि', points: 10, image: '' },
    { id: 'g2', question: 'नेपालको पहिलो राजमार्ग कुन हो?', answer: 'त्रिभुवन राजपथ', points: 10, image: '' },
    { id: 'g3', question: 'नेपालको पहिलो बैंक कुन हो?', answer: 'नेपाल बैंक लिमिटेड', points: 10, image: '' },
    { id: 'g4', question: 'नेपालको पहिलो महिला राष्ट्रपति को हुन्?', answer: 'विद्यादेवी भण्डारी', points: 10, image: '' },
    { id: 'g5', question: 'नेपालको राष्ट्रिय झण्डामा कति वटा त्रिकोण रहेका छन्?', answer: '२ वटा', points: 10, image: '' },
    { id: 'g6', question: 'नेपालको सबैभन्दा अग्लो स्थानमा रहेको ताल कुन हो?', answer: 'तिलिचो ताल', points: 10, image: '' },
    { id: 'g7', question: 'काठमाडौँ उपत्यकाका प्रथम मल्ल राजा को हुन्?', answer: 'अरिदेव मल्ल', points: 10, image: '' },
    { id: 'g8', question: 'पृथ्वीनारायण शाह कहिले गोरखाका राजा बनेका थिए?', answer: 'वि.सं. १७९९', points: 10, image: '' },
    { id: 'g9', question: 'नेपालमा कति वटा प्रदेश रहेका छन्?', answer: '७ वटा प्रदेश', points: 10, image: '' },
    { id: 'g10', question: 'गोरखाले नुवाकोटमाथि कहिले विजय हासिल गर्यो?', answer: 'वि.सं. १८०१', points: 10, image: '' },
    { id: 'g11', question: 'कीर्तिपुरको एकीकरण कहिले भएको थियो?', answer: 'वि.सं. १८२२ चैत ३ गते', points: 10, image: '' },
    { id: 'g12', question: 'कान्तिपुर (काठमाडौँ) को एकीकरण कहिले भएको थियो?', answer: 'वि.सं. १८२५ असोज १३ गते', points: 10, image: '' },
    { id: 'g13', question: 'सूर्यको सबैभन्दा नजिकको ग्रह कुन हो?', answer: 'बुध ग्रह', points: 10, image: '' },
    { id: 'g14', question: 'दक्षिण अमेरिकाको सबैभन्दा ठूलो देश कुन हो?', answer: 'ब्राजिल', points: 10, image: '' },
    { id: 'g15', question: 'विश्वको सबैभन्दा ठूलो गर्मी मरुभूमि कुन हो?', answer: 'सहारा मरुभूमि', points: 10, image: '' },
    { id: 'g16', question: 'ग्रीष्मकालीन ओलम्पिक खेलकुद कति–कति वर्षमा आयोजना हुन्छ?', answer: '४/४ वर्षमा', points: 10, image: '' },
    { id: 'g17', question: 'दोस्रो विश्वयुद्ध कहिले समाप्त भएको थियो?', answer: 'सन् १९४५', points: 10, image: '' },
    { id: 'g18', question: 'औद्योगिक क्रान्ति पहिलोपटक कुन देशमा सुरु भएको थियो?', answer: 'बेलायत', points: 10, image: '' },
    { id: 'g19', question: 'नेपालको पहिलो महिला प्रधानन्यायाधीश को हुन्?', answer: 'सुशीला कार्की', points: 10, image: '' },
    { id: 'g20', question: 'संयुक्त राष्ट्र संघ (UNO) को स्थापना कहिले भएको थियो?', answer: 'सन् १९४५ अक्टोबर २४', points: 10, image: '' },
    { id: 'g21', question: 'नेपालको सबैभन्दा ठूलो जिल्ला क्षेत्रफलका आधारमा कुन हो?', answer: 'डोल्पा', points: 10, image: '' },
    { id: 'g22', question: 'विश्वको सबैभन्दा अग्लो भवन कुन हो?', answer: 'बुर्ज खलिफा', points: 10, image: '' },
    { id: 'g23', question: 'नेपालको समय हरितग्रिनिच समय (GMT) भन्दा कति छिटो छ?', answer: '५ घण्टा ४५ मिनेट', points: 10, image: '' },
    { id: 'g24', question: 'सन् २०१० को विश्वकप विजयी राष्ट्र कुन हो?', answer: 'स्पेन', points: 10, image: '' }
  ],
  rapidfire_A: [
    { id: 'rf_a1', question: 'किराँत वंशका प्रथम राजा भनेर कसलाई चिनिन्छ?', answer: 'यलम्बर', points: 5, image: '' },
    { id: 'rf_a2', question: 'राष्ट्रिय जनगणना २०७८ अनुसार नेपालमा कति मातृभाषा अभिलेख गरिएका छन्?', answer: '१२४ वटा', points: 5, image: '' },
    { id: 'rf_a3', question: 'नेपालको सबैभन्दा ठूलो ताल कुन हो?', answer: 'रारा ताल', points: 5, image: '' },
    { id: 'rf_a4', question: 'विश्वको सबैभन्दा ठूलो महासागर कुन हो?', answer: 'प्रशान्त महासागर', points: 5, image: '' },
    { id: 'rf_a5', question: 'नेपालको राष्ट्रिय रङ कुन हो?', answer: 'सिम्रिक', points: 5, image: '' },
    { id: 'rf_a6', question: 'गौतम बुद्धको जन्मस्थल कहाँ हो?', answer: 'लुम्बिनी', points: 5, image: '' },
    { id: 'rf_a7', question: 'नेपालमा राणा शासन सुरु गर्ने व्यक्ति को हुन्?', answer: 'जंगबहादुर राणा', points: 5, image: '' },
    { id: 'rf_a8', question: 'नेपालको सबैभन्दा लामो नदीका रूपमा सामान्यतया कुन नदीलाई चिनिन्छ?', answer: 'कर्णाली नदी', points: 5, image: '' },
    { id: 'rf_a9', question: 'नेपालको राष्ट्रिय गानका संगीतकार को हुन्?', answer: 'अम्बर गुरुङ', points: 5, image: '' },
    { id: 'rf_a10', question: 'विश्वको सबैभन्दा गहिरो ताल कुन हो?', answer: 'बैकाल ताल', points: 5, image: '' }
  ],
  rapidfire_B: [
    { id: 'rf_b1', question: 'नेपालको एकीकरण अभियान सुरु गर्ने राजा को हुन्?', answer: 'पृथ्वीनारायण शाह', points: 5, image: '' },
    { id: 'rf_b2', question: 'राष्ट्रिय जनगणना २०७८ अनुसार नेपालमा कति जात/जातीय समूह सूचीकृत छन्?', answer: '१४२ वटा', points: 5, image: '' },
    { id: 'rf_b3', question: 'नेपालको सबैभन्दा गहिरो ताल कुन हो?', answer: 'शे–फोक्सुण्डो ताल', points: 5, image: '' },
    { id: 'rf_b4', question: 'विश्वको सबैभन्दा सानो महासागर कुन हो?', answer: 'आर्कटिक महासागर', points: 5, image: '' },
    { id: 'rf_b5', question: 'नेपालको राष्ट्रिय खेल कुन हो?', answer: 'भलिबल', points: 5, image: '' },
    { id: 'rf_b6', question: 'पशुपतिनाथ मन्दिर कुन नदीको किनारमा अवस्थित छ?', answer: 'बागमती नदी', points: 5, image: '' },
    { id: 'rf_b7', question: 'नेपालमा गणतन्त्र घोषणा कहिले भएको थियो?', answer: 'वि.सं. २०६५ जेठ १५ गते', points: 5, image: '' },
    { id: 'rf_b8', question: 'क्षेत्रफलका आधारमा विश्वको सबैभन्दा ठूलो मीठोपानीको ताल कुन हो?', answer: 'सुपीरियर ताल', points: 5, image: '' },
    { id: 'rf_b9', question: 'नेपालको राष्ट्रिय गानमा कति वटा शब्द छन्?', answer: '४६ वटा शब्द', points: 5, image: '' },
    { id: 'rf_b10', question: 'एफिल टावर कुन देशमा अवस्थित छ?', answer: 'फ्रान्स', points: 5, image: '' }
  ],
  rapidfire_C: [
    { id: 'rf_c1', question: 'लिच्छवि कालका प्रसिद्ध राजा को हुन्?', answer: 'राजा मानदेव', points: 5, image: '' },
    { id: 'rf_c2', question: 'नेपालमा सबैभन्दा धेरै मानिसले बोल्ने मातृभाषा कुन हो?', answer: 'नेपाली', points: 5, image: '' },
    { id: 'rf_c3', question: 'रारा ताल कुन जिल्लामा पर्छ?', answer: 'मुगु', points: 5, image: '' },
    { id: 'rf_c4', question: 'विश्वको सबैभन्दा ठूलो महादेश कुन हो?', answer: 'एसिया', points: 5, image: '' },
    { id: 'rf_c5', question: 'नेपालको राष्ट्रिय पोशाक कुन हो?', answer: 'दौरा-सुरुवाल र गुन्यू-चोली', points: 5, image: '' },
    { id: 'rf_c6', question: 'जनकपुरधाम कुन धार्मिक व्यक्तित्वसँग विशेष रूपमा सम्बन्धित छ?', answer: 'माता सीता', points: 5, image: '' },
    { id: 'rf_c7', question: 'नेपालमा राणा शासनको अन्त्य कहिले भयो?', answer: 'वि.सं. २००७ साल', points: 5, image: '' },
    { id: 'rf_c8', question: 'अमेजोन नदी कुन महादेशमा पर्छ?', answer: 'दक्षिण अमेरिका', points: 5, image: '' },
    { id: 'rf_c9', question: 'नेपालको राष्ट्रिय गानका रचनाकार को हुन्?', answer: 'व्याकुल माइला (प्रदीपकुमार राई)', points: 5, image: '' },
    { id: 'rf_c10', question: 'विश्वको सबैभन्दा ठूलो ताल कुन हो?', answer: 'क्यास्पियन सागर', points: 5, image: '' }
  ],
  rapidfire_D: [
    { id: 'rf_d1', question: 'पृथ्वीनारायण शाह कुन राज्यका राजा थिए?', answer: 'गोरखा', points: 5, image: '' },
    { id: 'rf_d2', question: 'जनगणना २०७८ अनुसार नेपालीपछि दोस्रो धेरै बोलिने मातृभाषा कुन हो?', answer: 'मैथिली', points: 5, image: '' },
    { id: 'rf_d3', question: 'फोक्सुण्डो ताल कुन जिल्लामा पर्छ?', answer: 'डोल्पा', points: 5, image: '' },
    { id: 'rf_d4', question: 'विश्वको सबैभन्दा सानो महादेश कुन हो?', answer: 'अस्ट्रेलिया', points: 5, image: '' },
    { id: 'rf_d5', question: 'काठमाडौं उपत्यकाको प्रवेशद्वार भनेर कुन भञ्ज्याङलाई चिनिन्छ?', answer: 'चन्द्रागिरि भञ्ज्याङ', points: 5, image: '' },
    { id: 'rf_d6', question: 'मुक्तिनाथ मन्दिर कुन जिल्लामा पर्छ?', answer: 'मुस्ताङ', points: 5, image: '' },
    { id: 'rf_d7', question: 'नेपालको वर्तमान संविधान कुन मितिमा जारी भएको हो?', answer: 'वि.सं. २०७२ असोज ३ गते', points: 5, image: '' },
    { id: 'rf_d8', question: 'नाइल नदी कुन महादेशमा पर्छ?', answer: 'अफ्रिका', points: 5, image: '' },
    { id: 'rf_d9', question: 'नेपालको दोस्रो अग्लो हिमाल कुन हो?', answer: 'कञ्चनजङ्घा (८,५८६ मि.)', points: 5, image: '' },
    { id: 'rf_d10', question: 'ताजमहल कुन देशमा अवस्थित छ?', answer: 'भारत', points: 5, image: '' }
  ],
  picture: [
    { id: 'pic1', question: '', answer: 'राजा त्रिभुवन (King Tribhuvan)', points: 15, image: 'pictures/King_Tribhuvan_(cropped).png' },
    { id: 'pic2', question: '', answer: 'महावीर पुन (Mahabir Pun)', points: 15, image: 'pictures/mahabir pun.jfif' },
    { id: 'pic3', question: '', answer: 'विष्णु माझी (Bishnu Majhi)', points: 15, image: 'pictures/bishnu maji.jfif' },
    { id: 'pic4', question: '', answer: 'इलोन मस्क (Elon Musk)', points: 15, image: 'pictures/Elon_Musk_-_54820081119_(cropped).jpg' }
  ],
  buzzer: [
    { id: 'buzz1', question: 'नेपालको पहिलो शहीद भनेर कसलाई मानिन्छ?', answer: 'लखन थापा', points: 15, image: '' },
    { id: 'buzz2', question: 'नेपाल राष्ट्र बैंकको स्थापना कहिले भएको थियो?', answer: 'वि.सं. २०१३ वैशाख १४ गते', points: 15, image: '' },
    { id: 'buzz3', question: 'नेपालको राष्ट्रिय प्रजातन्त्र दिवस कहिले मनाइन्छ?', answer: 'फागुन ७ गते', points: 15, image: '' },
    { id: 'buzz4', question: 'विश्व सम्पदा सूचीमा सूचीकृत नेपालको पहिलो राष्ट्रिय निकुञ्ज कुन हो?', answer: 'चितवन राष्ट्रिय निकुञ्ज', points: 15, image: '' }
  ],
  estimation: [
    { id: 'est1', question: 'नेपालमा हाल कति वटा गाउँपालिका रहेका छन्?', answer: '460', displayAnswer: '४६० वटा (Target: 460)', points: 15, targetValue: 460, image: '' },
    { id: 'est2', question: 'नेपालको कूल भौगोलिक क्षेत्रफल कति वर्ग किलोमिटर छ?', answer: '147516', displayAnswer: '१,४७,५१६ वर्ग किमी (Target: 147516)', points: 15, targetValue: 147516, image: '' },
    { id: 'est3', question: 'नेपालमा हाल कति वटा स्थानीय तह (Local Units) रहेका छन्?', answer: '753', displayAnswer: '७५३ वटा (Target: 753)', points: 15, targetValue: 753, image: '' }
  ]
};

// INITIAL APPLICATION STATE
let state = {
  quizTitle: 'Newlight Quiz 2083/04/29',
  defaultTimerSeconds: 30,
  houses: [
    { id: 'A', name: 'House A (Red)', color: '#ef4444', score: 0, members: '' },
    { id: 'B', name: 'House B (Blue)', color: '#3b82f6', score: 0, members: '' },
    { id: 'C', name: 'House C (Green)', color: '#10b981', score: 100, members: 'Shreeja Sapkota, Ruby Chimmal, Shristi BK' },
    { id: 'D', name: 'House D (Yellow)', color: '#f59e0b', score: 0, members: '' }
  ],
  questions: JSON.parse(JSON.stringify(DEFAULT_QUESTIONS)),
  activeView: 'setup', // 'setup' or 'projector'
  activeEditorTab: 'general',
  activeProjectorRound: 'general', // 'general', 'rapidfire', 'picture', 'buzzer', 'estimation'
  activeRFHouse: 'A',
  currentQuestionIndex: 0,
  questionRevealed: false, // Dark curtain state (false = curtain covered, true = question revealed)
  answerRevealed: false,
  timer: {
    remaining: 30,
    running: false,
    intervalId: null
  },
  audioEnabled: true,
  usedGeneralQuestions: [],
  estimationGuesses: { A: '', B: '', C: '', D: '' },
  buzzerLock: { lockedHouse: null, locked: false }
};

// WEB AUDIO SYNTHESIZER
class SoundSynth {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type, duration, delay = 0) {
    if (!state.audioEnabled) return;
    try {
      this.init();
      setTimeout(() => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      }, delay * 1000);
    } catch (e) {
      console.warn('Audio Context Error:', e);
    }
  }

  playCorrect() {
    this.playTone(523.25, 'sine', 0.15, 0);   // C5
    this.playTone(659.25, 'sine', 0.15, 0.12); // E5
    this.playTone(783.99, 'sine', 0.3, 0.24);  // G5
  }

  playReveal() {
    this.playTone(440, 'triangle', 0.2, 0);
    this.playTone(880, 'sine', 0.25, 0.1);
  }

  playCurtainOpen() {
    this.playTone(330, 'triangle', 0.2, 0);
    this.playTone(440, 'sine', 0.25, 0.1);
    this.playTone(659.25, 'sine', 0.3, 0.2);
  }

  playTick(isTock = false) {
    if (!state.audioEnabled) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      const freq = isTock ? 700 : 950;
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(isTock ? 250 : 350, now + 0.03);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.035);
    } catch (e) {
      console.warn('Tick Audio Error:', e);
    }
  }

  playWarningTick() {
    if (!state.audioEnabled) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'square';
      osc2.type = 'sawtooth';
      osc1.frequency.setValueAtTime(1200, now);
      osc2.frequency.setValueAtTime(1500, now);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.08);
      osc2.stop(now + 0.08);
    } catch (e) {
      console.warn('Warning Tick Error:', e);
    }
  }

  playFanfare() {
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.4, idx * 0.12);
    });
  }

  playWinnerFanfare() {
    const notes = [
      { freq: 523.25, time: 0, duration: 0.2 },   // C5
      { freq: 659.25, time: 0.18, duration: 0.2 }, // E5
      { freq: 783.99, time: 0.36, duration: 0.2 }, // G5
      { freq: 1046.50, time: 0.54, duration: 0.6 },// C6
      { freq: 880.00, time: 0.95, duration: 0.25 },// A5
      { freq: 1046.50, time: 1.25, duration: 0.8 } // C6 triumph!
    ];
    notes.forEach(n => {
      this.playTone(n.freq, 'triangle', n.duration, n.time);
      this.playTone(n.freq / 2, 'sawtooth', n.duration, n.time);
    });
  }

  playBuzzerSound() {
    this.playTone(180, 'sawtooth', 0.4, 0);
    this.playTone(220, 'sawtooth', 0.4, 0.05);
  }

  playWrong() {
    this.playTone(250, 'sawtooth', 0.2, 0);
    this.playTone(180, 'sawtooth', 0.3, 0.12);
  }
}

const audio = new SoundSynth();

function getNepaliNumberString(num) {
  const nepDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  return num.toString().split('').map(d => nepDigits[parseInt(d)] || d).join('');
}

function buildRoundSpeechText(qIndex, qItem, roundName) {
  const nepNum = getNepaliNumberString(qIndex + 1);
  let prefix = `प्रश्न ${nepNum}: `;

  if (roundName === 'general') {
    prefix = `साधारण राउण्ड, प्रश्न नम्बर ${nepNum}: `;
  } else if (roundName === 'rapidfire') {
    prefix = `प्रश्न ${nepNum}: `;
  } else if (roundName === 'picture') {
    return `तस्बीर राउण्ड, प्रश्न नम्बर ${nepNum}: यो तस्बीरमा देखिनुभएको प्रसिद्ध व्यक्तित्वलाई पहिचान गर्नुहोस्।`;
  } else if (roundName === 'buzzer') {
    prefix = `बजर राउण्ड, प्रश्न नम्बर ${nepNum}: `;
  } else if (roundName === 'estimation') {
    prefix = `अनुमान राउण्ड, प्रश्न नम्बर ${nepNum}: `;
  }

  return `${prefix} ${qItem.question || ''}`;
}

// AI VOICE OVER (TEXT-TO-SPEECH) SYNTHESIZER ENGINE
class VoiceOverAI {
  constructor() {
    this.synth = window.speechSynthesis;
    this.speaking = false;
    this.voice = null;
    this.initVoice();
  }

  initVoice() {
    if (!this.synth) return;
    const loadVoices = () => {
      const voices = this.synth.getVoices();
      if (!voices || voices.length === 0) return;
      this.voice = voices.find(v => v.lang.startsWith('ne') || v.lang.includes('NP')) ||
                   voices.find(v => v.lang.startsWith('hi') || v.lang.includes('IN')) ||
                   voices.find(v => v.lang.startsWith('en')) ||
                   voices[0];
    };
    loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = loadVoices;
    }
  }

  speakCurrentQuestion() {
    const qList = getActiveQuestionList();
    const currentQ = qList[state.currentQuestionIndex];
    if (!currentQ || !currentQ.question) return;

    const fullSpeechText = buildRoundSpeechText(
      state.currentQuestionIndex,
      currentQ,
      state.activeProjectorRound
    );

    const speechRate = state.activeProjectorRound === 'rapidfire' ? 1.15 : 0.9;
    this.speak(fullSpeechText, speechRate);
  }

  speak(text, rate = 0.9) {
    if (!this.synth || !text) return;
    
    if (this.synth.speaking || this.synth.pending) {
      this.synth.cancel();
    }
    this.speaking = false;

    const cleanText = text.replace(/<[^>]*>?/gm, '').trim();
    if (!cleanText) return;

    setTimeout(() => {
      try {
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.rate = rate;
        utterance.pitch = 1.0;

        if (this.voice) {
          utterance.voice = this.voice;
          utterance.lang = this.voice.lang;
        } else {
          utterance.lang = 'ne-NP';
        }

        utterance.onstart = () => {
          this.speaking = true;
          this.updateBtnState();
        };

        utterance.onend = () => {
          this.speaking = false;
          this.updateBtnState();
        };

        utterance.onerror = (err) => {
          console.warn('SpeechSynthesis error:', err);
          this.speaking = false;
          this.updateBtnState();
        };

        if (this.synth.resume) this.synth.resume();
        this.synth.speak(utterance);
      } catch (e) {
        console.error('Speech synthesis exception:', e);
      }
    }, 50);
  }

  stop() {
    if (this.synth && (this.synth.speaking || this.synth.pending)) {
      this.synth.cancel();
    }
    this.speaking = false;
    this.updateBtnState();
  }

  updateBtnState() {
    if (elements.btnReadQuestion) {
      if (this.speaking) {
        elements.btnReadQuestion.classList.add('reading-active');
        elements.btnReadQuestion.innerHTML = `🔊 Reading... (Stop)`;
      } else {
        elements.btnReadQuestion.classList.remove('reading-active');
        elements.btnReadQuestion.innerHTML = `🗣️ Read Question`;
      }
    }
  }

  toggleCurrent() {
    if (this.speaking) {
      this.stop();
    } else {
      this.speakCurrentQuestion();
    }
  }
}

const voiceAI = new VoiceOverAI();

// DOM ELEMENTS CACHE
const elements = {
  headerQuizTitle: document.getElementById('header-quiz-title'),
  scoreboardContainer: document.getElementById('scoreboard-container'),
  btnAudioToggle: document.getElementById('btn-audio-toggle'),
  btnFullscreenToggle: document.getElementById('btn-fullscreen-toggle'),
  btnModeToggle: document.getElementById('btn-mode-toggle'),
  
  setupScreen: document.getElementById('setup-screen'),
  projectorScreen: document.getElementById('projector-screen'),
  
  inputQuizTitle: document.getElementById('input-quiz-title'),
  inputDefaultTimer: document.getElementById('input-default-timer'),
  housesEditorContainer: document.getElementById('houses-editor-container'),
  editorTabsContainer: document.getElementById('editor-tabs-container'),
  questionsEditorList: document.getElementById('questions-editor-list'),
  btnAddQuestion: document.getElementById('btn-add-question'),
  
  btnExportJson: document.getElementById('btn-export-json'),
  fileImportJson: document.getElementById('file-import-json'),
  btnResetDefault: document.getElementById('btn-reset-default'),
  btnLaunchPresentation: document.getElementById('btn-launch-presentation'),
  
  projectorRoundPills: document.getElementById('projector-round-pills'),
  rfHouseSwitchers: document.getElementById('rf-house-switchers'),
  
  stageRoundName: document.getElementById('stage-round-name'),
  stageQnumDisplay: document.getElementById('stage-qnum-display'),
  stagePointsDisplay: document.getElementById('stage-points-display'),
  stageQuestionText: document.getElementById('stage-question-text'),
  stageImageContainer: document.getElementById('stage-image-container'),
  stageQuestionImg: document.getElementById('stage-question-img'),
  stageAnswerBox: document.getElementById('stage-answer-box'),
  stageAnswerText: document.getElementById('stage-answer-text'),

  stageCurtainOverlay: document.getElementById('stage-curtain-overlay'),
  curtainRoundBadge: document.getElementById('curtain-round-badge'),
  curtainQnumTitle: document.getElementById('curtain-qnum-title'),
  btnStartQuestion: document.getElementById('btn-start-question'),
  
  curtainDefaultContent: document.getElementById('curtain-default-content'),
  curtainGeneralGrid: document.getElementById('curtain-general-grid'),
  generalQuestionsMatrix: document.getElementById('general-questions-matrix'),
  btnResetGeneralUsed: document.getElementById('btn-reset-general-used'),
  btnToggleGrid: document.getElementById('btn-toggle-grid'),
  btnExportPdf: document.getElementById('btn-export-pdf'),
  
  estimationWidget: document.getElementById('estimation-widget'),
  estimationInputsGrid: document.getElementById('estimation-inputs-grid'),
  estimationResultBox: document.getElementById('estimation-result-box'),
  estimationWinnerText: document.getElementById('estimation-winner-text'),
  btnAwardEstimationWinner: document.getElementById('btn-award-estimation-winner'),

  buzzerWidget: document.getElementById('buzzer-widget'),
  buzzerButtonsGrid: document.getElementById('buzzer-buttons-grid'),
  buzzerStatusBanner: document.getElementById('buzzer-status-banner'),
  buzzerStatusText: document.getElementById('buzzer-status-text'),
  btnResetBuzzer: document.getElementById('btn-reset-buzzer'),
  btnAwardBuzzerCorrect: document.getElementById('btn-award-buzzer-correct'),
  btnAwardBuzzerWrong: document.getElementById('btn-award-buzzer-wrong'),
  
  btnPrevQ: document.getElementById('btn-prev-q'),
  btnRevealAnswer: document.getElementById('btn-reveal-answer'),
  btnNextQ: document.getElementById('btn-next-q'),
  btnReadQuestion: document.getElementById('btn-read-question'),
  btnReadAllQuestions: document.getElementById('btn-read-all-questions'),
  btnTimerToggle: document.getElementById('btn-timer-toggle'),
  timerDisplay: document.getElementById('timer-display'),
  btnTimerReset: document.getElementById('btn-timer-reset'),
  btnKeyboardHelp: document.getElementById('btn-keyboard-help'),
  modalKeyboardHelp: document.getElementById('modal-keyboard-help'),
  btnCloseModal: document.getElementById('btn-close-modal'),
  
  btnWinnerGreen: document.getElementById('btn-winner-green'),
  btnWinnerBlue: document.getElementById('btn-winner-blue'),
  modalWinnerCelebration: document.getElementById('modal-winner-celebration'),
  btnCloseWinnerModal: document.getElementById('btn-close-winner-modal'),
  btnDismissWinner: document.getElementById('btn-dismiss-winner'),
  btnRetriggerFanfare: document.getElementById('btn-retrigger-fanfare'),

  toastContainer: document.getElementById('toast-container')
};

// INITIALIZATION
function initApp() {
  loadSavedState();
  bindEvents();
  renderAll();
}

// STORAGE
function loadSavedState() {
  const saved = localStorage.getItem('quiz_contest_state');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
      const houseC = state.houses.find(h => h.id === 'C');
      if (houseC) {
        houseC.members = 'Shreeja Sapkota, Ruby Chimmal, Shristi BK';
        if (!houseC.score || houseC.score < 100) houseC.score = 100;
      }
      if (!parsed.quizTitle || parsed.quizTitle.includes('नेपाल') || parsed.quizTitle.includes('Program')) {
        state.quizTitle = 'Newlight Quiz 2083/04/29';
      }
      if (parsed.usedGeneralQuestions && Array.isArray(parsed.usedGeneralQuestions)) {
        state.usedGeneralQuestions = parsed.usedGeneralQuestions;
      } else {
        state.usedGeneralQuestions = [];
      }
      // Always sync default questions structure
      state.questions = JSON.parse(JSON.stringify(DEFAULT_QUESTIONS));
      if (state.questions.picture) {
        state.questions.picture.forEach(q => { 
          q.question = ''; 
          if (q.id === 'pic2') {
            q.image = 'pictures/mahabir pun.jfif';
          }
        });
      }
    } catch (e) {
      console.warn('Could not parse local storage state');
    }
  }
}

function saveState() {
  localStorage.setItem('quiz_contest_state', JSON.stringify({
    quizTitle: state.quizTitle,
    defaultTimerSeconds: state.defaultTimerSeconds,
    houses: state.houses,
    questions: state.questions,
    usedGeneralQuestions: state.usedGeneralQuestions
  }));
}

// UI TOAST NOTIFICATIONS
function showToast(message, icon = '✨') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  elements.toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// RENDER CONTROLLER
function renderAll() {
  elements.headerQuizTitle.textContent = state.quizTitle;
  elements.inputQuizTitle.value = state.quizTitle;
  elements.inputDefaultTimer.value = state.defaultTimerSeconds;

  renderScoreboard();
  renderHousesEditor();
  renderQuestionsEditor();
  renderProjectorStage();

  // Mode View Switcher
  if (state.activeView === 'setup') {
    elements.setupScreen.classList.add('active');
    elements.projectorScreen.classList.remove('active');
    elements.btnModeToggle.textContent = '📺 Launch Presentation';
  } else {
    elements.setupScreen.classList.remove('active');
    elements.projectorScreen.classList.add('active');
    elements.btnModeToggle.textContent = '⚙ Edit Setup';
  }
}

// RENDER SCOREBOARD IN HEADER
function renderScoreboard() {
  elements.scoreboardContainer.innerHTML = '';
  state.houses.forEach(house => {
    const card = document.createElement('div');
    const isWinnerGreen = house.id === 'C' && house.score >= 100;
    const isWinnerBlue = house.id === 'B' && house.score > 0 && !isWinnerGreen;
    card.className = `house-score-card ${state.activeRFHouse === house.id && state.activeProjectorRound === 'rapidfire' ? 'active-turn' : ''} ${isWinnerGreen ? 'winner-green-active' : isWinnerBlue ? 'winner-blue-active' : ''}`;
    card.style.setProperty('--house-color', house.color);

    const membersSubtitle = house.members ? `<span style="display: block; font-size: 0.72rem; color: #a7f3d0; line-height: 1.1; margin-top: 2px; font-weight: 600;">${escapeHtml(house.members)}</span>` : '';

    card.innerHTML = `
      <div class="house-info">
        <span class="house-name" onclick="triggerWinnerCelebration('${house.id}')" style="cursor: pointer;" title="Click to launch Winner Animation">
          ${escapeHtml(house.name)}
          <span class="house-trophy-icon" title="Celebrate Winner">🏆</span>
        </span>
        ${membersSubtitle}
        <span class="house-score-val" id="score-val-${house.id}" onclick="promptEditScore('${house.id}')" title="Click to manually edit or remove points" style="cursor: pointer;">${house.score}</span>
      </div>
      <div class="score-quick-btns">
        <button class="score-btn score-btn-plus" onclick="adjustScore('${house.id}', 15)" title="Add +15 Points to ${escapeHtml(house.name)}">+15</button>
        <button class="score-btn score-btn-plus" onclick="adjustScore('${house.id}', 10)" title="Add +10 Points to ${escapeHtml(house.name)}">+10</button>
        <button class="score-btn score-btn-plus" onclick="adjustScore('${house.id}', 5)" title="Add +5 Points to ${escapeHtml(house.name)}">+5</button>
        <button class="score-btn score-btn-minus" onclick="adjustScore('${house.id}', -15)" title="Remove -15 Points from ${escapeHtml(house.name)}">-15</button>
        <button class="score-btn score-btn-minus" onclick="adjustScore('${house.id}', -10)" title="Remove -10 Points from ${escapeHtml(house.name)}">-10</button>
        <button class="score-btn score-btn-minus" onclick="adjustScore('${house.id}', -5)" title="Remove -5 Points from ${escapeHtml(house.name)}">-5</button>
      </div>
    `;
    elements.scoreboardContainer.appendChild(card);
  });
}

// SCORE ADJUSTMENT HANDLER
window.adjustScore = function(houseId, delta) {
  const house = state.houses.find(h => h.id === houseId);
  if (house) {
    house.score += delta;
    if (delta > 0) {
      audio.playCorrect();
      showToast(`+${delta} Pts awarded to ${house.name}!`, '🎯');
    } else if (delta < 0) {
      audio.playWrong();
      showToast(`${delta} Pts removed from ${house.name}!`, '⚠️');
    }
    saveState();
    
    // Pulse animation
    const valEl = document.getElementById(`score-val-${houseId}`);
    if (valEl) {
      valEl.textContent = house.score;
      valEl.classList.remove('pulse', 'pulse-minus');
      void valEl.offsetWidth; // trigger reflow
      valEl.classList.add(delta < 0 ? 'pulse-minus' : 'pulse');
    }

    // Sync input in setup screen if it's currently open
    const inputEl = document.getElementById(`input-house-score-${houseId}`);
    if (inputEl) {
      inputEl.value = house.score;
    }
  }
};

// DIRECT SCORE EDIT / REMOVAL PROMPT
window.promptEditScore = function(houseId) {
  const house = state.houses.find(h => h.id === houseId);
  if (!house) return;
  const input = prompt(
    `Adjust Score for ${house.name}:\n` +
    `Current Score: ${house.score} Pts\n\n` +
    `• Enter a new score (e.g. 50)\n` +
    `• Or enter points to add / remove (e.g. -10 or +5):`,
    house.score
  );
  if (input === null) return;
  const trimmed = input.trim();
  if (!trimmed) return;

  if (trimmed.startsWith('-') || trimmed.startsWith('+')) {
    const delta = parseInt(trimmed, 10);
    if (!isNaN(delta) && delta !== 0) {
      adjustScore(houseId, delta);
    }
  } else {
    const newScore = parseInt(trimmed, 10);
    if (!isNaN(newScore)) {
      const delta = newScore - house.score;
      adjustScore(houseId, delta);
    }
  }
};

window.setHouseScore = function(houseId, val) {
  const house = state.houses.find(h => h.id === houseId);
  if (house) {
    const newScore = parseInt(val, 10);
    const scoreVal = isNaN(newScore) ? 0 : newScore;
    const delta = scoreVal - house.score;
    adjustScore(houseId, delta);
  }
};

// RENDER HOUSES SETUP EDITOR
function renderHousesEditor() {
  elements.housesEditorContainer.innerHTML = '';
  state.houses.forEach(house => {
    const card = document.createElement('div');
    card.className = 'glass-card house-edit-card';
    card.style.setProperty('--house-color', house.color);

    card.innerHTML = `
      <div class="form-group" style="margin-bottom: 8px;">
        <label class="form-label">House Name</label>
        <input type="text" class="form-input" value="${escapeHtml(house.name)}" onchange="updateHouseName('${house.id}', this.value)">
      </div>
      <div class="form-group" style="margin-bottom: 8px;">
        <label class="form-label">Current Score / अङ्क</label>
        <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
          <input type="number" id="input-house-score-${house.id}" class="form-input" value="${house.score}" onchange="setHouseScore('${house.id}', this.value)" style="width: 85px;">
          <button class="btn btn-outline" style="padding: 4px 8px; font-size: 0.8rem;" onclick="adjustScore('${house.id}', 10)">+10</button>
          <button class="btn btn-outline" style="padding: 4px 8px; font-size: 0.8rem;" onclick="adjustScore('${house.id}', 5)">+5</button>
          <button class="btn btn-danger" style="padding: 4px 8px; font-size: 0.8rem;" onclick="adjustScore('${house.id}', -5)">-5</button>
          <button class="btn btn-danger" style="padding: 4px 8px; font-size: 0.8rem;" onclick="adjustScore('${house.id}', -10)">-10</button>
        </div>
      </div>
      <div class="color-picker-row">
        <input type="color" value="${house.color}" onchange="updateHouseColor('${house.id}', this.value)">
        <span style="font-size: 0.9rem; font-weight: 700; color: var(--text-muted);">Theme Color</span>
        <button class="btn btn-outline" style="margin-left: auto; padding: 4px 10px; font-size: 0.8rem;" onclick="resetHouseScore('${house.id}')">Reset Score (0)</button>
      </div>
    `;
    elements.housesEditorContainer.appendChild(card);
  });
}

window.updateHouseName = function(houseId, name) {
  const house = state.houses.find(h => h.id === houseId);
  if (house) { house.name = name; saveState(); renderScoreboard(); }
};

window.updateHouseColor = function(houseId, color) {
  const house = state.houses.find(h => h.id === houseId);
  if (house) { house.color = color; saveState(); renderScoreboard(); renderHousesEditor(); }
};

window.resetHouseScore = function(houseId) {
  const house = state.houses.find(h => h.id === houseId);
  if (house) { house.score = 0; saveState(); renderScoreboard(); showToast(`Score reset for ${house.name}`); }
};

// RENDER QUESTIONS SETUP EDITOR
function renderQuestionsEditor() {
  const currentKey = state.activeEditorTab;
  const qList = state.questions[currentKey] || [];
  elements.questionsEditorList.innerHTML = '';

  if (qList.length === 0) {
    elements.questionsEditorList.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 30px;">No questions in this round yet. Click "+ Add New Question" to create one.</div>`;
    return;
  }

  qList.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'glass-card question-edit-card';
    card.innerHTML = `
      <div class="q-header-row">
        <span class="q-num-badge">Q#${idx + 1}</span>
        <div style="display: flex; gap: 8px; align-items: center;">
          <label class="form-label" style="margin: 0;">Pts:</label>
          <input type="number" class="form-input" style="width: 80px; padding: 6px 10px;" value="${q.points}" onchange="updateQuestion('${currentKey}', '${q.id}', 'points', parseInt(this.value)||0)">
          <button class="btn btn-danger" style="padding: 6px 12px; font-size: 0.85rem;" onclick="deleteQuestion('${currentKey}', '${q.id}')">🗑 Delete</button>
        </div>
      </div>
      <div class="form-group" style="margin-bottom: 8px;">
        <label class="form-label">Question Text (प्रश्न)</label>
        <textarea class="form-textarea" rows="2" onchange="updateQuestion('${currentKey}', '${q.id}', 'question', this.value)">${escapeHtml(q.question)}</textarea>
      </div>
      <div class="form-group" style="margin-bottom: 8px;">
        <label class="form-label">Answer (उत्तर)</label>
        <input type="text" class="form-input" value="${escapeHtml(q.answer)}" onchange="updateQuestion('${currentKey}', '${q.id}', 'answer', this.value)">
      </div>
      ${currentKey === 'estimation' ? `
        <div class="form-group" style="margin-bottom: 8px;">
          <label class="form-label">Target Numerical Value (Calculations)</label>
          <input type="number" step="any" class="form-input" value="${q.targetValue || ''}" onchange="updateQuestion('${currentKey}', '${q.id}', 'targetValue', parseFloat(this.value)||0)">
        </div>
      ` : ''}
      <div class="form-group" style="margin-bottom: 0;">
        <label class="form-label">Picture Attachment (Optional Image File or URL)</label>
        <div style="display: flex; gap: 10px;">
          <input type="text" class="form-input" style="flex: 1;" placeholder="Image DataURL or Image Link" value="${escapeHtml(q.image || '')}" onchange="updateQuestion('${currentKey}', '${q.id}', 'image', this.value)">
          <label class="btn btn-secondary" style="margin: 0; cursor: pointer; white-space: nowrap;">
            📷 Upload Image
            <input type="file" accept="image/*" style="display: none;" onchange="handleImageUpload(event, '${currentKey}', '${q.id}')">
          </label>
        </div>
      </div>
    `;
    elements.questionsEditorList.appendChild(card);
  });
}

window.updateQuestion = function(roundKey, qId, field, value) {
  const q = state.questions[roundKey].find(item => item.id === qId);
  if (q) {
    q[field] = value;
    saveState();
  }
};

window.deleteQuestion = function(roundKey, qId) {
  if (confirm('Are you sure you want to delete this question?')) {
    state.questions[roundKey] = state.questions[roundKey].filter(item => item.id !== qId);
    saveState();
    renderQuestionsEditor();
    showToast('Question deleted');
  }
};

window.handleImageUpload = function(event, roundKey, qId) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      updateQuestion(roundKey, qId, 'image', e.target.result);
      renderQuestionsEditor();
      showToast('Image uploaded successfully');
    };
    reader.readAsDataURL(file);
  }
};

// ADD NEW QUESTION
elements.btnAddQuestion.addEventListener('click', () => {
  const currentKey = state.activeEditorTab;
  const newId = 'q_' + Date.now();
  const defaultPts = currentKey === 'general' ? 10 : (currentKey.startsWith('rapidfire') ? 5 : 15);

  state.questions[currentKey].push({
    id: newId,
    question: 'नयाँ प्रश्न थप्नुहोस् (New Question Text)',
    answer: 'उत्तर (Correct Answer)',
    points: defaultPts,
    image: '',
    targetValue: currentKey === 'estimation' ? 100 : undefined
  });

  saveState();
  renderQuestionsEditor();
  showToast('New question added to ' + currentKey);
});

// PROJECTOR STAGE PRESENTATION CONTROLLER
function getActiveQuestionList() {
  if (state.activeProjectorRound === 'rapidfire') {
    return state.questions[`rapidfire_${state.activeRFHouse}`] || [];
  }
  return state.questions[state.activeProjectorRound] || [];
}

function renderProjectorStage() {
  const qList = getActiveQuestionList();
  
  if (state.currentQuestionIndex >= qList.length) {
    state.currentQuestionIndex = Math.max(0, qList.length - 1);
  }

  const currentQ = qList[state.currentQuestionIndex];

  // Update Navigation pills
  document.querySelectorAll('.round-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.round === state.activeProjectorRound);
  });

  if (state.activeProjectorRound === 'rapidfire') {
    elements.rfHouseSwitchers.style.display = 'flex';
    document.querySelectorAll('.rf-house-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.house === state.activeRFHouse);
    });
  } else {
    elements.rfHouseSwitchers.style.display = 'none';
  }

  if (!currentQ) {
    elements.stageRoundName.textContent = state.activeProjectorRound.toUpperCase() + ' ROUND';
    elements.stageQnumDisplay.textContent = 'Question 0 / 0';
    elements.stagePointsDisplay.textContent = '0 Points';
    elements.stageQuestionText.textContent = 'कुनै प्रश्न उपलब्ध छैन। कृपया Setup मा थप्नुहोस्।';
    elements.stageAnswerBox.classList.add('hidden-answer');
    elements.stageImageContainer.style.display = 'none';
    elements.estimationWidget.style.display = 'none';
    return;
  }

  // Set Round Title & Counter
  let roundTitle = 'QUIZ ROUND';
  if (state.activeProjectorRound === 'general') roundTitle = 'GENERAL ROUND';
  else if (state.activeProjectorRound === 'rapidfire') roundTitle = `RAPID FIRE - HOUSE ${state.activeRFHouse}`;
  else if (state.activeProjectorRound === 'picture') roundTitle = '🖼️ PICTURE ROUND';
  else if (state.activeProjectorRound === 'estimation') roundTitle = '🎯 ESTIMATION ROUND';
  
  elements.stageRoundName.textContent = roundTitle;
  elements.stageQnumDisplay.textContent = `Question ${state.currentQuestionIndex + 1} / ${qList.length}`;
  elements.stagePointsDisplay.textContent = `+${currentQ.points} Points`;
  
  // Curtain Cover Overlay Info Update
  elements.curtainRoundBadge.textContent = roundTitle;
  elements.curtainQnumTitle.textContent = `START ${roundTitle}`;
  elements.btnStartQuestion.innerHTML = `▶ Start ${roundTitle} / राउण्ड सुरु गर्नुहोस्`;

  // Toggle General Round Question Selector Grid vs Standard Curtain
  if (state.activeProjectorRound === 'general') {
    if (elements.curtainDefaultContent) elements.curtainDefaultContent.style.display = 'none';
    if (elements.curtainGeneralGrid) elements.curtainGeneralGrid.style.display = 'flex';
    if (elements.btnToggleGrid) elements.btnToggleGrid.style.display = 'inline-flex';
    renderGeneralQuestionsMatrix();
  } else {
    if (elements.curtainDefaultContent) elements.curtainDefaultContent.style.display = 'flex';
    if (elements.curtainGeneralGrid) elements.curtainGeneralGrid.style.display = 'none';
    if (elements.btnToggleGrid) elements.btnToggleGrid.style.display = 'none';
  }

  if (state.questionRevealed || state.activeProjectorRound === 'buzzer') {
    elements.stageCurtainOverlay.classList.add('open');
  } else {
    elements.stageCurtainOverlay.classList.remove('open');
  }

  if (!currentQ.question || state.activeProjectorRound === 'picture') {
    elements.stageQuestionText.style.display = 'none';
    elements.stageQuestionText.textContent = '';
  } else {
    elements.stageQuestionText.style.display = 'block';
    elements.stageQuestionText.textContent = currentQ.question;
  }
  
  elements.stageAnswerText.textContent = currentQ.displayAnswer || currentQ.answer;

  // Answer Box Reveal State
  if (state.answerRevealed) {
    elements.stageAnswerBox.classList.remove('hidden-answer');
  } else {
    elements.stageAnswerBox.classList.add('hidden-answer');
  }

  // Image Attachment Preview
  if (currentQ.image) {
    const isDataUrl = currentQ.image.startsWith('data:');
    const imageSrc = isDataUrl ? currentQ.image : `${currentQ.image}?v=${Date.now()}`;
    elements.stageQuestionImg.src = imageSrc;
    elements.stageImageContainer.style.display = 'block';
  } else {
    elements.stageImageContainer.style.display = 'none';
  }

  // Estimation Round Calculator Widget
  if (state.activeProjectorRound === 'estimation') {
    elements.estimationWidget.style.display = 'flex';
    renderEstimationWidget(currentQ);
  } else {
    elements.estimationWidget.style.display = 'none';
  }

  // Buzzer Round Interactive Widget
  if (state.activeProjectorRound === 'buzzer') {
    elements.buzzerWidget.style.display = 'flex';
    renderBuzzerWidget();
  } else {
    elements.buzzerWidget.style.display = 'none';
  }
}

// GENERAL ROUND QUESTION SELECTOR MATRIX (1 to 24)
function renderGeneralQuestionsMatrix() {
  const qList = state.questions.general || [];
  if (!elements.generalQuestionsMatrix) return;
  elements.generalQuestionsMatrix.innerHTML = '';

  qList.forEach((q, idx) => {
    const qNum = idx + 1;
    const isUsed = state.usedGeneralQuestions.includes(q.id);
    const isActive = state.currentQuestionIndex === idx && state.questionRevealed;

    const tile = document.createElement('div');
    tile.className = `q-grid-tile ${isUsed ? 'used' : ''} ${isActive ? 'active-q' : ''}`;
    tile.innerHTML = `<span>${qNum}</span>`;
    tile.title = isUsed ? `Question #${qNum} (Already chosen - Click to view)` : `Question #${qNum}`;
    tile.onclick = () => selectGeneralQuestion(idx);

    elements.generalQuestionsMatrix.appendChild(tile);
  });
}

window.selectGeneralQuestion = function(idx) {
  const qList = state.questions.general || [];
  const q = qList[idx];
  if (!q) return;

  if (!state.usedGeneralQuestions.includes(q.id)) {
    state.usedGeneralQuestions.push(q.id);
  }

  state.currentQuestionIndex = idx;
  state.questionRevealed = true;
  state.answerRevealed = false;
  saveState();
  audio.playCurtainOpen();
  renderAll();
  showToast(`Question #${idx + 1} Opened`);
};

// ESTIMATION ROUND WIDGET RENDER & SOLVER
function renderEstimationWidget(questionObj) {
  elements.estimationInputsGrid.innerHTML = '';
  
  state.houses.forEach(house => {
    const val = state.estimationGuesses[house.id] || '';
    const card = document.createElement('div');
    card.className = `glass-card house-estimate-card`;
    card.id = `est-card-${house.id}`;
    card.style.setProperty('--house-color', house.color);

    card.innerHTML = `
      <span class="house-estimate-label">${escapeHtml(house.name)}</span>
      <input type="number" step="any" class="house-estimate-input" placeholder="Guess value" value="${val}" onchange="updateEstimationGuess('${house.id}', this.value)">
    `;
    elements.estimationInputsGrid.appendChild(card);
  });

  elements.estimationResultBox.style.display = 'none';
}

window.updateEstimationGuess = function(houseId, value) {
  state.estimationGuesses[houseId] = value;
  calculateEstimationWinner();
};

function calculateEstimationWinner() {
  const qList = getActiveQuestionList();
  const currentQ = qList[state.currentQuestionIndex];
  if (!currentQ) return;

  const target = currentQ.targetValue || parseFloat(currentQ.answer) || 0;
  let closestHouse = null;
  let minDiff = Infinity;
  let breakdown = [];

  state.houses.forEach(house => {
    const rawVal = state.estimationGuesses[house.id];
    const val = parseFloat(rawVal);
    const card = document.getElementById(`est-card-${house.id}`);
    if (card) card.classList.remove('winner-card');

    if (!isNaN(val)) {
      const diff = Math.abs(val - target);
      breakdown.push(`${house.name}: ${val} (Diff: ${diff.toFixed(2)})`);
      if (diff < minDiff) {
        minDiff = diff;
        closestHouse = house;
      }
    }
  });

  if (closestHouse) {
    const winnerCard = document.getElementById(`est-card-${closestHouse.id}`);
    if (winnerCard) winnerCard.classList.add('winner-card');

    elements.estimationResultBox.style.display = 'flex';
    elements.estimationWinnerText.innerHTML = `🏆 Winner: <span style="color: ${closestHouse.color}">${closestHouse.name}</span> (Target: ${target}, Nearest Guess Diff: ${minDiff.toFixed(2)})`;
    
    // Setup 1-click award button
    elements.btnAwardEstimationWinner.onclick = function() {
      adjustScore(closestHouse.id, currentQ.points || 15);
      audio.playFanfare();
      showToast(`Awarded +${currentQ.points || 15} Pts to ${closestHouse.name}!`);
    };
  } else {
    elements.estimationResultBox.style.display = 'none';
  }
}

// BUZZER ROUND INTERACTIVE LOCKOUT CONTROLLER
function renderBuzzerWidget() {
  elements.buzzerButtonsGrid.innerHTML = '';

  state.houses.forEach((house, idx) => {
    const isLocked = state.buzzerLock.locked;
    const isThisBuzzed = state.buzzerLock.lockedHouse === house.id;
    
    const btn = document.createElement('button');
    btn.className = `house-buzzer-btn ${isThisBuzzed ? 'buzzed-active' : ''}`;
    btn.style.setProperty('--house-color', house.color);
    if (isLocked && !isThisBuzzed) btn.disabled = true;

    btn.innerHTML = `
      <span style="font-size: 1.6rem;">🔔</span>
      <span style="font-weight: 800; font-size: 1.1rem;">${escapeHtml(house.name)}</span>
      <span style="font-size: 0.8rem; opacity: 0.8;">(Key ${idx + 1})</span>
    `;

    btn.onclick = function() {
      triggerHouseBuzzer(house.id);
    };

    elements.buzzerButtonsGrid.appendChild(btn);
  });

  if (state.buzzerLock.lockedHouse) {
    const house = state.houses.find(h => h.id === state.buzzerLock.lockedHouse);
    if (house) {
      elements.buzzerStatusBanner.style.display = 'flex';
      elements.buzzerStatusText.innerHTML = `🚨 <span style="color: ${house.color}">${house.name}</span> Buzzed First!`;

      elements.btnAwardBuzzerCorrect.onclick = function() {
        adjustScore(house.id, 15);
        audio.playFanfare();
        showToast(`Correct! +15 Pts awarded to ${house.name}`);
        resetBuzzerLockout();
      };

      elements.btnAwardBuzzerWrong.onclick = function() {
        adjustScore(house.id, -5);
        showToast(`Penalty! -5 Pts deducted from ${house.name}`, '⚠️');
        resetBuzzerLockout();
      };
    }
  } else {
    elements.buzzerStatusBanner.style.display = 'none';
  }
}

function triggerHouseBuzzer(houseId) {
  if (state.buzzerLock.locked) return;
  
  state.buzzerLock.locked = true;
  state.buzzerLock.lockedHouse = houseId;
  audio.playBuzzerSound();
  
  renderProjectorStage();
}

function resetBuzzerLockout() {
  state.buzzerLock.locked = false;
  state.buzzerLock.lockedHouse = null;
  renderProjectorStage();
}

elements.btnResetBuzzer.addEventListener('click', resetBuzzerLockout);

// START QUESTION CURTAIN UNVEIL HANDLER
elements.btnStartQuestion.addEventListener('click', () => {
  state.questionRevealed = true;
  audio.playCurtainOpen();
  renderProjectorStage();
  startTimer(); // Automatically start countdown timer when question starts!
});

// NAVIGATION CONTROLS
elements.btnPrevQ.addEventListener('click', () => {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex--;
    state.answerRevealed = false;
    voiceAI.stop();
    resetBuzzerLockout();
    if (state.activeProjectorRound !== 'rapidfire') {
      resetTimer();
    }
    renderProjectorStage();
  }
});

elements.btnNextQ.addEventListener('click', () => {
  const qList = getActiveQuestionList();
  if (state.currentQuestionIndex < qList.length - 1) {
    state.currentQuestionIndex++;
    state.answerRevealed = false;
    voiceAI.stop();
    resetBuzzerLockout();
    if (state.activeProjectorRound !== 'rapidfire') {
      resetTimer();
    }
    renderProjectorStage();
  }
});

if (elements.btnReadQuestion) {
  elements.btnReadQuestion.addEventListener('click', () => {
    voiceAI.toggleCurrent();
  });
}

elements.btnRevealAnswer.addEventListener('click', () => {
  state.answerRevealed = !state.answerRevealed;
  if (state.answerRevealed) audio.playReveal();
  renderProjectorStage();
});

// COUNTDOWN TIMER LOGIC
function startTimer() {
  if (state.timer.running) return;
  state.timer.running = true;
  elements.btnTimerToggle.textContent = '⏸';

  // Play immediate initial tick when starting timer
  if (state.timer.remaining <= 5 && state.timer.remaining > 0) {
    audio.playWarningTick();
  } else {
    audio.playTick(state.timer.remaining % 2 === 0);
  }

  state.timer.intervalId = setInterval(() => {
    if (state.timer.remaining > 0) {
      state.timer.remaining--;
      updateTimerDisplay();

      if (state.timer.remaining <= 5 && state.timer.remaining > 0) {
        audio.playWarningTick();
      } else {
        audio.playTick(state.timer.remaining % 2 === 0);
      }
    } else {
      pauseTimer();
      voiceAI.stop();
      audio.playTone(300, 'sawtooth', 0.6); // Time up buzzer
      showToast('⏰ Time is up!', '⌛');
    }
  }, 1000);
}

function pauseTimer() {
  state.timer.running = false;
  clearInterval(state.timer.intervalId);
  elements.btnTimerToggle.textContent = '▶';
}

function resetTimer() {
  pauseTimer();
  state.timer.remaining = state.activeProjectorRound === 'rapidfire' ? 60 : state.defaultTimerSeconds;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const secs = state.timer.remaining;
  const m = Math.floor(secs / 60).toString().padStart(2, '0');
  const s = (secs % 60).toString().padStart(2, '0');
  elements.timerDisplay.textContent = `${m}:${s}`;
  elements.timerDisplay.classList.toggle('danger', secs <= 5);
}

elements.btnTimerToggle.addEventListener('click', () => {
  if (state.timer.running) pauseTimer(); else startTimer();
});

elements.btnTimerReset.addEventListener('click', resetTimer);

// TAB SWITCHING HANDLERS
elements.editorTabsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('tab-btn')) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    state.activeEditorTab = e.target.dataset.round;
    renderQuestionsEditor();
  }
});

elements.projectorRoundPills.addEventListener('click', (e) => {
  if (e.target.classList.contains('round-pill')) {
    state.activeProjectorRound = e.target.dataset.round;
    state.currentQuestionIndex = 0;
    state.questionRevealed = (state.activeProjectorRound === 'buzzer');
    state.answerRevealed = false;
    resetTimer();
    renderScoreboard();
    renderProjectorStage();
  }
});

elements.rfHouseSwitchers.addEventListener('click', (e) => {
  if (e.target.classList.contains('rf-house-btn')) {
    state.activeRFHouse = e.target.dataset.house;
    state.currentQuestionIndex = 0;
    state.questionRevealed = false;
    state.answerRevealed = false;
    resetTimer();
    renderScoreboard();
    renderProjectorStage();
  }
});

// JSON & PDF IMPORT / EXPORT DATA STORAGE
if (elements.btnExportPdf) {
  elements.btnExportPdf.addEventListener('click', () => {
    window.open('Newlight_Quiz_Questions_2083-04-29.html', '_blank');
    showToast('Opening Printable Questions Sheet (Save as PDF)');
  });
}

elements.btnExportJson.addEventListener('click', () => {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `quiz_contest_data_${Date.now()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('Quiz setup exported successfully!');
});

elements.fileImportJson.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      try {
        const imported = JSON.parse(evt.target.result);
        if (imported.questions && imported.houses) {
          state.quizTitle = imported.quizTitle || state.quizTitle;
          state.houses = imported.houses;
          state.questions = imported.questions;
          saveState();
          renderAll();
          showToast('Quiz setup imported successfully!');
        } else {
          alert('Invalid quiz JSON file format.');
        }
      } catch (err) {
        alert('Error reading JSON file: ' + err.message);
      }
    };
    reader.readAsText(file);
  }
});

elements.btnResetDefault.addEventListener('click', () => {
  if (confirm('Reset to original Nepalese General Knowledge questions? Custom edits will be restored to default.')) {
    state.questions = JSON.parse(JSON.stringify(DEFAULT_QUESTIONS));
    saveState();
    renderQuestionsEditor();
    renderProjectorStage();
    showToast('Reset to default Nepalese questions!');
  }
});

// TOP BAR HEADER ACTIONS
elements.btnModeToggle.addEventListener('click', () => {
  state.activeView = state.activeView === 'setup' ? 'projector' : 'setup';
  renderAll();
});

elements.btnLaunchPresentation.addEventListener('click', () => {
  state.activeView = 'projector';
  renderAll();
});

elements.inputQuizTitle.addEventListener('input', (e) => {
  state.quizTitle = e.target.value;
  elements.headerQuizTitle.textContent = state.quizTitle;
  saveState();
});

elements.inputDefaultTimer.addEventListener('change', (e) => {
  state.defaultTimerSeconds = parseInt(e.target.value) || 30;
  resetTimer();
  saveState();
});

elements.btnAudioToggle.addEventListener('click', () => {
  state.audioEnabled = !state.audioEnabled;
  elements.btnAudioToggle.textContent = state.audioEnabled ? '🔊' : '🔇';
  showToast(state.audioEnabled ? 'Audio Sound Effects Enabled' : 'Audio Sound Effects Muted');
});

elements.btnFullscreenToggle.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => console.log(err));
  } else {
    document.exitFullscreen().catch(err => console.log(err));
  }
});

if (elements.btnResetGeneralUsed) {
  elements.btnResetGeneralUsed.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all crossed off question numbers?')) {
      state.usedGeneralQuestions = [];
      saveState();
      renderAll();
      showToast('Question cross signs reset!');
    }
  });
}

if (elements.btnToggleGrid) {
  elements.btnToggleGrid.addEventListener('click', () => {
    state.questionRevealed = false;
    saveState();
    renderAll();
    showToast('Opened Question Selection Grid');
  });
}

// KEYBOARD SHORTCUTS HANDLERS
function bindEvents() {
  document.addEventListener('keydown', (e) => {
    // Disable shortcuts if user is typing inside an input/textarea
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    if (state.activeView === 'projector') {
      if (e.key === 'ArrowRight') {
        elements.btnNextQ.click();
      } else if (e.key === 'ArrowLeft') {
        elements.btnPrevQ.click();
      } else if (e.key.toLowerCase() === 's') {
        elements.btnStartQuestion.click();
      } else if (e.code === 'Space' || e.key.toLowerCase() === 'r') {
        e.preventDefault();
        elements.btnRevealAnswer.click();
      } else if (e.key.toLowerCase() === 'v') {
        if (elements.btnReadQuestion) elements.btnReadQuestion.click();
      } else if (e.key.toLowerCase() === 't') {
        elements.btnTimerToggle.click();
      }

      // Buzzer Round Key Shortcuts (Keys 1, 2, 3, 4)
      if (state.activeProjectorRound === 'buzzer') {
        if (['1', '2', '3', '4'].includes(e.key)) {
          const houseIdx = parseInt(e.key) - 1;
          const targetHouse = state.houses[houseIdx];
          if (targetHouse) {
            triggerHouseBuzzer(targetHouse.id);
          }
        }
      }
    }

    if (e.key === 'Escape') {
      elements.modalKeyboardHelp.classList.remove('open');
    }
  });

  elements.btnKeyboardHelp.addEventListener('click', () => {
    elements.modalKeyboardHelp.classList.add('open');
  });

  elements.btnCloseModal.addEventListener('click', () => {
    elements.modalKeyboardHelp.classList.remove('open');
  });

  if (elements.btnWinnerGreen) {
    elements.btnWinnerGreen.addEventListener('click', () => {
      triggerWinnerCelebration('C');
    });
  }

  if (elements.btnWinnerBlue) {
    elements.btnWinnerBlue.addEventListener('click', () => {
      triggerWinnerCelebration('B');
    });
  }

  if (elements.btnCloseWinnerModal) {
    elements.btnCloseWinnerModal.addEventListener('click', closeWinnerModal);
  }

  if (elements.btnDismissWinner) {
    elements.btnDismissWinner.addEventListener('click', closeWinnerModal);
  }

  if (elements.btnRetriggerFanfare) {
    elements.btnRetriggerFanfare.addEventListener('click', () => {
      audio.playWinnerFanfare();
    });
  }
}

// WINNER CONFETTI ANIMATION SYSTEM
class ConfettiSystem {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animating = false;
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  start(houseColor = '#3b82f6') {
    this.canvas = document.getElementById('winner-confetti-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    this.animating = true;
    this.particles = [];
    
    const themeColors = [houseColor, '#3b82f6', '#60a5fa', '#00f0ff', '#f59e0b', '#ffffff', '#38bdf8'];
    const count = 180;
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height - this.canvas.height,
        size: Math.random() * 10 + 6,
        color: themeColors[Math.floor(Math.random() * themeColors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 5 + 3,
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
        shape: Math.random() > 0.4 ? 'rect' : 'circle'
      });
    }
    this.loop();
  }

  stop() {
    this.animating = false;
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  loop() {
    if (!this.animating || !this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vRot;

      if (p.y > this.canvas.height) {
        p.y = -20;
        p.x = Math.random() * this.canvas.width;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;

      if (p.shape === 'rect') {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    });

    requestAnimationFrame(() => this.loop());
  }
}

const confettiSystem = new ConfettiSystem('winner-confetti-canvas');

window.triggerWinnerCelebration = function(houseId = 'C') {
  const house = state.houses.find(h => h.id === houseId) || state.houses.find(h => h.id === 'C') || state.houses[2];
  if (!house) return;

  const modalCard = document.querySelector('#modal-winner-celebration .winner-modal-card');
  const badge = document.getElementById('winner-house-badge');
  const title = document.getElementById('winner-house-title');
  const subtitle = document.getElementById('winner-house-subtitle');
  const scoreNum = document.getElementById('winner-house-score');
  const membersEl = document.getElementById('winner-house-members');

  if (modalCard) {
    if (house.id === 'C') {
      modalCard.style.background = 'radial-gradient(circle at 50% 30%, rgba(6, 78, 59, 0.96) 0%, rgba(15, 23, 42, 0.98) 100%)';
      modalCard.style.borderColor = '#10b981';
      modalCard.style.boxShadow = '0 0 60px rgba(16, 185, 129, 0.7), inset 0 0 40px rgba(16, 185, 129, 0.4)';
    } else if (house.id === 'B') {
      modalCard.style.background = 'radial-gradient(circle at 50% 30%, rgba(30, 58, 138, 0.96) 0%, rgba(15, 23, 42, 0.98) 100%)';
      modalCard.style.borderColor = '#3b82f6';
      modalCard.style.boxShadow = '0 0 60px rgba(59, 130, 246, 0.7), inset 0 0 40px rgba(59, 130, 246, 0.4)';
    } else {
      modalCard.style.background = 'radial-gradient(circle at 50% 30%, rgba(38, 32, 64, 0.96) 0%, rgba(15, 23, 42, 0.98) 100%)';
      modalCard.style.borderColor = house.color;
      modalCard.style.boxShadow = `0 0 60px ${house.color}, inset 0 0 40px ${house.color}`;
    }
  }

  if (badge) {
    badge.textContent = house.name.toUpperCase();
    badge.style.background = `linear-gradient(135deg, ${house.color}, #059669)`;
  }
  if (title) {
    title.innerHTML = `🎉 WINNER: ${escapeHtml(house.name)}! 🎉`;
  }
  if (subtitle) {
    subtitle.textContent = `बधाई छ! ${house.name} ले ${house.score} अङ्क हासिल गर्दै प्रथम स्थान हासिल गरेको छ!`;
  }
  if (scoreNum) {
    scoreNum.textContent = `${house.score} Points`;
  }
  if (membersEl) {
    const memberNames = house.members || (house.id === 'C' ? 'Shreeja Sapkota, Ruby Chimmal, Shristi BK' : '');
    if (memberNames) {
      membersEl.style.display = 'block';
      membersEl.innerHTML = `👥 <strong>Team Members:</strong> ${escapeHtml(memberNames)}`;
    } else {
      membersEl.style.display = 'none';
    }
  }

  const modal = document.getElementById('modal-winner-celebration');
  if (modal) modal.classList.add('open');

  audio.playWinnerFanfare();
  confettiSystem.start(house.color);
  showToast(`🏆 Winner Celebration launched for ${house.name} (${house.score} Pts)!`);
};

function closeWinnerModal() {
  const modal = document.getElementById('modal-winner-celebration');
  if (modal) modal.classList.remove('open');
  confettiSystem.stop();
}

// HELPER FUNCTIONS
function escapeHtml(str) {
  return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// START APPLICATION
document.addEventListener('DOMContentLoaded', initApp);
