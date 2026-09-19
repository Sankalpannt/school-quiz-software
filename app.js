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
  quizSubtitle: 'School Quiz Competition',
  brandIcon: '🏆',
  defaultTimerSeconds: 30,
  rfTimerSeconds: 60,
  warningBeepSeconds: 5,
  roundPoints: {
    general: 10,
    rapidfire: 5,
    picture: 15,
    buzzer_correct: 15,
    buzzer_wrong: -5,
    estimation: 15
  },
  houses: [
    { id: 'A', name: 'House A (Red)', color: '#ef4444', score: 0, members: '' },
    { id: 'B', name: 'House B (Blue)', color: '#3b82f6', score: 0, members: '' },
    { id: 'C', name: 'House C (Green)', color: '#10b981', score: 0, members: '' },
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
  estimationGuesses: {},
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
// DOM ELEMENTS CACHE
const elements = {
  headerQuizTitle: document.getElementById('header-quiz-title'),
  headerQuizSubtitle: document.getElementById('header-quiz-subtitle'),
  headerBrandIcon: document.getElementById('header-brand-icon'),
  scoreboardContainer: document.getElementById('scoreboard-container'),
  btnAudioToggle: document.getElementById('btn-audio-toggle'),
  btnFullscreenToggle: document.getElementById('btn-fullscreen-toggle'),
  btnModeToggle: document.getElementById('btn-mode-toggle'),
  btnWinnerMenuToggle: document.getElementById('btn-winner-menu-toggle'),
  winnerDropdownMenu: document.getElementById('winner-dropdown-menu'),
  
  setupScreen: document.getElementById('setup-screen'),
  projectorScreen: document.getElementById('projector-screen'),
  
  inputQuizTitle: document.getElementById('input-quiz-title'),
  inputQuizSubtitle: document.getElementById('input-quiz-subtitle'),
  inputBrandIcon: document.getElementById('input-brand-icon'),
  inputDefaultTimer: document.getElementById('input-default-timer'),
  inputRfTimer: document.getElementById('input-rf-timer'),
  
  btnAddHouse: document.getElementById('btn-add-house'),
  btnResetAllScores: document.getElementById('btn-reset-all-scores'),
  housesEditorContainer: document.getElementById('houses-editor-container'),
  
  inputPtsGeneral: document.getElementById('input-pts-general'),
  inputPtsRf: document.getElementById('input-pts-rf'),
  inputPtsPicture: document.getElementById('input-pts-picture'),
  inputPtsBuzzerCorrect: document.getElementById('input-pts-buzzer-correct'),
  inputPtsBuzzerWrong: document.getElementById('input-pts-buzzer-wrong'),
  inputPtsEstimation: document.getElementById('input-pts-estimation'),

  editorTabsContainer: document.getElementById('editor-tabs-container'),
  questionsEditorList: document.getElementById('questions-editor-list'),
  btnAddQuestion: document.getElementById('btn-add-question'),
  btnClearRoundQuestions: document.getElementById('btn-clear-round-questions'),
  
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
      if (parsed.quizTitle) state.quizTitle = parsed.quizTitle;
      if (parsed.quizSubtitle) state.quizSubtitle = parsed.quizSubtitle;
      if (parsed.brandIcon) state.brandIcon = parsed.brandIcon;
      if (parsed.defaultTimerSeconds) state.defaultTimerSeconds = parsed.defaultTimerSeconds;
      if (parsed.rfTimerSeconds) state.rfTimerSeconds = parsed.rfTimerSeconds;
      if (parsed.warningBeepSeconds) state.warningBeepSeconds = parsed.warningBeepSeconds;
      if (parsed.roundPoints && typeof parsed.roundPoints === 'object') {
        state.roundPoints = { ...state.roundPoints, ...parsed.roundPoints };
      }
      if (parsed.houses && Array.isArray(parsed.houses) && parsed.houses.length > 0) {
        state.houses = parsed.houses;
      }
      if (parsed.questions && typeof parsed.questions === 'object') {
        state.questions = parsed.questions;
      }
      if (parsed.usedGeneralQuestions && Array.isArray(parsed.usedGeneralQuestions)) {
        state.usedGeneralQuestions = parsed.usedGeneralQuestions;
      }
    } catch (e) {
      console.warn('Could not parse local storage state', e);
    }
  }
}

function saveState() {
  localStorage.setItem('quiz_contest_state', JSON.stringify({
    quizTitle: state.quizTitle,
    quizSubtitle: state.quizSubtitle,
    brandIcon: state.brandIcon,
    defaultTimerSeconds: state.defaultTimerSeconds,
    rfTimerSeconds: state.rfTimerSeconds,
    warningBeepSeconds: state.warningBeepSeconds,
    roundPoints: state.roundPoints,
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
  if (elements.headerQuizTitle) elements.headerQuizTitle.textContent = state.quizTitle;
  if (elements.headerQuizSubtitle) elements.headerQuizSubtitle.textContent = state.quizSubtitle;
  if (elements.headerBrandIcon) elements.headerBrandIcon.textContent = state.brandIcon;
  document.title = state.quizTitle;

  if (elements.inputQuizTitle) elements.inputQuizTitle.value = state.quizTitle;
  if (elements.inputQuizSubtitle) elements.inputQuizSubtitle.value = state.quizSubtitle;
  if (elements.inputBrandIcon) elements.inputBrandIcon.value = state.brandIcon;
  if (elements.inputDefaultTimer) elements.inputDefaultTimer.value = state.defaultTimerSeconds;
  if (elements.inputRfTimer) elements.inputRfTimer.value = state.rfTimerSeconds;

  if (elements.inputPtsGeneral) elements.inputPtsGeneral.value = state.roundPoints.general;
  if (elements.inputPtsRf) elements.inputPtsRf.value = state.roundPoints.rapidfire;
  if (elements.inputPtsPicture) elements.inputPtsPicture.value = state.roundPoints.picture;
  if (elements.inputPtsBuzzerCorrect) elements.inputPtsBuzzerCorrect.value = state.roundPoints.buzzer_correct;
  if (elements.inputPtsBuzzerWrong) elements.inputPtsBuzzerWrong.value = state.roundPoints.buzzer_wrong;
  if (elements.inputPtsEstimation) elements.inputPtsEstimation.value = state.roundPoints.estimation;

  renderScoreboard();
  renderWinnerMenu();
  renderHousesEditor();
  renderEditorTabs();
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

// DYNAMIC WINNER CELEBRATION DROPDOWN
function renderWinnerMenu() {
  if (!elements.winnerDropdownMenu) return;
  elements.winnerDropdownMenu.innerHTML = '';

  const maxScore = Math.max(...state.houses.map(h => h.score));
  const leaderHouse = state.houses.find(h => h.score === maxScore);

  // 1. Auto Option (Leader)
  const autoItem = document.createElement('div');
  autoItem.className = 'winner-dropdown-item auto-winner';
  if (leaderHouse && maxScore > 0) {
    autoItem.innerHTML = `<span>🥇</span> <span>Leader: <strong>${escapeHtml(leaderHouse.name)}</strong> (${leaderHouse.score} Pts)</span>`;
    autoItem.onclick = () => {
      closeWinnerDropdown();
      triggerWinnerCelebration(leaderHouse.id);
    };
  } else {
    autoItem.innerHTML = `<span>🥇</span> <span>Auto Leader (Tie / 0 Pts)</span>`;
    autoItem.onclick = () => {
      closeWinnerDropdown();
      triggerWinnerCelebration(state.houses[0]?.id);
    };
  }
  elements.winnerDropdownMenu.appendChild(autoItem);

  // 2. Individual options for every house
  state.houses.forEach(house => {
    const item = document.createElement('div');
    item.className = 'winner-dropdown-item';
    item.innerHTML = `
      <span class="winner-color-dot" style="background: ${house.color}; color: ${house.color};"></span>
      <span>${escapeHtml(house.name)} (${house.score} Pts)</span>
    `;
    item.onclick = () => {
      closeWinnerDropdown();
      triggerWinnerCelebration(house.id);
    };
    elements.winnerDropdownMenu.appendChild(item);
  });
}

function toggleWinnerDropdown() {
  if (elements.winnerDropdownMenu) {
    elements.winnerDropdownMenu.classList.toggle('show');
  }
}

function closeWinnerDropdown() {
  if (elements.winnerDropdownMenu) {
    elements.winnerDropdownMenu.classList.remove('show');
  }
}

// RENDER SCOREBOARD IN HEADER
function renderScoreboard() {
  elements.scoreboardContainer.innerHTML = '';
  const maxScore = Math.max(...state.houses.map(h => h.score));

  state.houses.forEach(house => {
    const card = document.createElement('div');
    const isLeader = maxScore > 0 && house.score === maxScore;
    const isActiveTurn = state.activeRFHouse === house.id && state.activeProjectorRound === 'rapidfire';
    card.className = `house-score-card ${isActiveTurn ? 'active-turn' : ''} ${isLeader ? 'leader-active' : ''}`;
    card.style.setProperty('--house-color', house.color);

    const membersSubtitle = house.members ? `<span style="display: block; font-size: 0.72rem; color: #a7f3d0; line-height: 1.1; margin-top: 2px; font-weight: 600;" title="${escapeHtml(house.members)}">${escapeHtml(house.members)}</span>` : '';

    card.innerHTML = `
      <div class="house-info">
        <span class="house-name" onclick="triggerWinnerCelebration('${house.id}')" style="cursor: pointer;" title="Click to celebrate ${escapeHtml(house.name)} as Winner">
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
    renderWinnerMenu();
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
  if (!elements.housesEditorContainer) return;
  elements.housesEditorContainer.innerHTML = '';
  const canDelete = state.houses.length > 2;

  state.houses.forEach(house => {
    const card = document.createElement('div');
    card.className = 'glass-card house-edit-card';
    card.style.setProperty('--house-color', house.color);

    card.innerHTML = `
      <div class="form-group" style="margin-bottom: 6px;">
        <label class="form-label">Team / House Name</label>
        <input type="text" class="form-input" value="${escapeHtml(house.name)}" onchange="updateHouseName('${house.id}', this.value)" placeholder="House Name">
      </div>
      <div class="form-group" style="margin-bottom: 6px;">
        <label class="form-label">Team Members / Participants</label>
        <input type="text" class="form-input" placeholder="e.g. Student 1, Student 2, Student 3" value="${escapeHtml(house.members || '')}" onchange="updateHouseMembers('${house.id}', this.value)">
      </div>
      <div class="form-group" style="margin-bottom: 6px;">
        <label class="form-label">Score / अङ्क (Current: ${house.score})</label>
        <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
          <input type="number" id="input-house-score-${house.id}" class="form-input" value="${house.score}" onchange="setHouseScore('${house.id}', this.value)" style="width: 85px;">
          <button class="btn btn-outline" style="padding: 4px 8px; font-size: 0.8rem;" onclick="adjustScore('${house.id}', 10)">+10</button>
          <button class="btn btn-outline" style="padding: 4px 8px; font-size: 0.8rem;" onclick="adjustScore('${house.id}', 5)">+5</button>
          <button class="btn btn-danger" style="padding: 4px 8px; font-size: 0.8rem;" onclick="adjustScore('${house.id}', -5)">-5</button>
          <button class="btn btn-danger" style="padding: 4px 8px; font-size: 0.8rem;" onclick="adjustScore('${house.id}', -10)">-10</button>
        </div>
      </div>
      <div class="color-picker-row" style="margin-top: 4px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
        <input type="color" value="${house.color}" onchange="updateHouseColor('${house.id}', this.value)">
        <span style="font-size: 0.88rem; font-weight: 700; color: var(--text-muted);">Theme Color</span>
        <button class="btn btn-outline" style="margin-left: auto; padding: 4px 10px; font-size: 0.8rem;" onclick="resetHouseScore('${house.id}')">Reset (0)</button>
        ${canDelete ? `<button class="btn btn-danger" style="padding: 4px 10px; font-size: 0.8rem;" onclick="deleteHouse('${house.id}')">🗑 Delete</button>` : ''}
      </div>
    `;
    elements.housesEditorContainer.appendChild(card);
  });
}

window.updateHouseName = function(houseId, name) {
  const house = state.houses.find(h => h.id === houseId);
  if (house) {
    house.name = name.trim() || `Team ${houseId}`;
    saveState();
    renderScoreboard();
    renderWinnerMenu();
    renderEditorTabs();
  }
};

window.updateHouseMembers = function(houseId, members) {
  const house = state.houses.find(h => h.id === houseId);
  if (house) {
    house.members = members.trim();
    saveState();
    renderScoreboard();
  }
};

window.updateHouseColor = function(houseId, color) {
  const house = state.houses.find(h => h.id === houseId);
  if (house) {
    house.color = color;
    saveState();
    renderScoreboard();
    renderWinnerMenu();
    renderHousesEditor();
    renderProjectorStage();
  }
};

window.addNewHouse = function() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let nextId = '';
  for (let l of letters) {
    if (!state.houses.some(h => h.id === l)) {
      nextId = l;
      break;
    }
  }
  if (!nextId) nextId = 'T_' + (state.houses.length + 1);

  const colors = ['#ec4899', '#8b5cf6', '#06b6d4', '#14b8a6', '#f97316', '#6366f1', '#e11d48', '#84cc16'];
  const newColor = colors[state.houses.length % colors.length];

  const newHouse = {
    id: nextId,
    name: `House ${nextId}`,
    color: newColor,
    score: 0,
    members: ''
  };

  state.houses.push(newHouse);
  if (!state.questions['rapidfire_' + nextId]) {
    state.questions['rapidfire_' + nextId] = [];
  }
  saveState();
  renderAll();
  showToast(`Added new team: ${newHouse.name}!`, '🎉');
};

window.deleteHouse = function(houseId) {
  if (state.houses.length <= 2) {
    alert('A competition needs at least 2 teams.');
    return;
  }
  const house = state.houses.find(h => h.id === houseId);
  if (!house) return;

  if (confirm(`Are you sure you want to delete ${house.name}?`)) {
    state.houses = state.houses.filter(h => h.id !== houseId);
    if (state.activeRFHouse === houseId) {
      state.activeRFHouse = state.houses[0]?.id || 'A';
    }
    saveState();
    renderAll();
    showToast(`Deleted ${house.name}`);
  }
};

window.resetHouseScore = function(houseId) {
  const house = state.houses.find(h => h.id === houseId);
  if (house) {
    house.score = 0;
    saveState();
    renderScoreboard();
    renderWinnerMenu();
    renderHousesEditor();
    showToast(`Score reset for ${house.name}`);
  }
};

window.resetAllScores = function() {
  if (confirm('Reset scores of ALL houses to 0 for a new game?')) {
    state.houses.forEach(h => h.score = 0);
    saveState();
    renderScoreboard();
    renderWinnerMenu();
    renderHousesEditor();
    showToast('All house scores reset to 0!', '🔄');
  }
};

// DYNAMIC EDITOR TABS
function renderEditorTabs() {
  if (!elements.editorTabsContainer) return;
  elements.editorTabsContainer.innerHTML = '';

  const tabs = [
    { key: 'general', label: `General Round (${state.roundPoints.general} Pts)` }
  ];

  state.houses.forEach(h => {
    tabs.push({ key: `rapidfire_${h.id}`, label: `Rapid Fire - ${h.name} (${state.roundPoints.rapidfire} Pts)` });
  });

  tabs.push(
    { key: 'picture', label: `🖼️ Picture Round (${state.roundPoints.picture} Pts)` },
    { key: 'buzzer', label: `🔔 Buzzer Round (${state.roundPoints.buzzer_correct} Pts)` },
    { key: 'estimation', label: `Estimation Round (${state.roundPoints.estimation} Pts)` }
  );

  const validKeys = tabs.map(t => t.key);
  if (!validKeys.includes(state.activeEditorTab)) {
    state.activeEditorTab = 'general';
  }

  tabs.forEach(tab => {
    const btn = document.createElement('button');
    btn.className = `tab-btn ${state.activeEditorTab === tab.key ? 'active' : ''}`;
    btn.dataset.round = tab.key;
    btn.textContent = tab.label;
    btn.onclick = () => {
      state.activeEditorTab = tab.key;
      renderEditorTabs();
      renderQuestionsEditor();
    };
    elements.editorTabsContainer.appendChild(btn);
  });
}

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
  if (!state.questions[roundKey]) return;
  const q = state.questions[roundKey].find(item => item.id === qId);
  if (q) {
    q[field] = value;
    saveState();
  }
};

window.deleteQuestion = function(roundKey, qId) {
  if (!state.questions[roundKey]) return;
  if (confirm('Are you sure you want to delete this question?')) {
    state.questions[roundKey] = state.questions[roundKey].filter(item => item.id !== qId);
    saveState();
    renderQuestionsEditor();
    showToast('Question deleted');
  }
};

window.clearCurrentRoundQuestions = function() {
  const currentKey = state.activeEditorTab;
  if (!state.questions[currentKey] || state.questions[currentKey].length === 0) {
    showToast('No questions to clear in this round.');
    return;
  }
  if (confirm(`Are you sure you want to delete ALL questions in this round?`)) {
    state.questions[currentKey] = [];
    saveState();
    renderQuestionsEditor();
    showToast('Questions cleared for this round.');
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
if (elements.btnAddQuestion) {
  elements.btnAddQuestion.addEventListener('click', () => {
    const currentKey = state.activeEditorTab;
    const newId = 'q_' + Date.now();
    
    let defaultPts = 10;
    if (currentKey === 'general') defaultPts = state.roundPoints.general || 10;
    else if (currentKey.startsWith('rapidfire')) defaultPts = state.roundPoints.rapidfire || 5;
    else if (currentKey === 'picture') defaultPts = state.roundPoints.picture || 15;
    else if (currentKey === 'buzzer') defaultPts = state.roundPoints.buzzer_correct || 15;
    else if (currentKey === 'estimation') defaultPts = state.roundPoints.estimation || 15;

    if (!state.questions[currentKey]) {
      state.questions[currentKey] = [];
    }

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
}

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
    renderRFHouseSwitchers();
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
  else if (state.activeProjectorRound === 'rapidfire') {
    const activeHouseObj = state.houses.find(h => h.id === state.activeRFHouse);
    const houseName = activeHouseObj ? activeHouseObj.name : `HOUSE ${state.activeRFHouse}`;
    roundTitle = `RAPID FIRE - ${houseName.toUpperCase()}`;
  }
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

// DYNAMIC RAPID FIRE HOUSE SWITCHER BUTTONS
function renderRFHouseSwitchers() {
  if (!elements.rfHouseSwitchers) return;
  elements.rfHouseSwitchers.innerHTML = `
    <span style="font-size: 0.9rem; font-weight: 700; color: var(--text-muted); margin-right: 4px;">Active House:</span>
  `;
  state.houses.forEach(house => {
    const btn = document.createElement('button');
    btn.className = `rf-house-btn ${house.id === state.activeRFHouse ? 'active' : ''}`;
    btn.dataset.house = house.id;
    btn.style.setProperty('--house-color', house.color);
    btn.textContent = house.name;
    elements.rfHouseSwitchers.appendChild(btn);
  });
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
    elements.estimationWinnerText.innerHTML = `🏆 Winner: <span style="color: ${closestHouse.color}">${escapeHtml(closestHouse.name)}</span> (Target: ${target}, Nearest Guess Diff: ${minDiff.toFixed(2)})`;
    
    // Setup 1-click award button
    const awardPoints = currentQ.points || (state.roundPoints && state.roundPoints.estimation) || 15;
    elements.btnAwardEstimationWinner.onclick = function() {
      adjustScore(closestHouse.id, awardPoints);
      audio.playFanfare();
      showToast(`Awarded +${awardPoints} Pts to ${closestHouse.name}!`);
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
      elements.buzzerStatusText.innerHTML = `🚨 <span style="color: ${house.color}">${escapeHtml(house.name)}</span> Buzzed First!`;

      const correctPts = (state.roundPoints && state.roundPoints.buzzerCorrect) || 15;
      const penaltyPts = (state.roundPoints && state.roundPoints.buzzerWrong) || -5;

      elements.btnAwardBuzzerCorrect.onclick = function() {
        adjustScore(house.id, correctPts);
        audio.playFanfare();
        showToast(`Correct! +${correctPts} Pts awarded to ${house.name}`);
        resetBuzzerLockout();
      };

      elements.btnAwardBuzzerWrong.onclick = function() {
        adjustScore(house.id, penaltyPts);
        showToast(`Penalty! ${penaltyPts} Pts deducted from ${house.name}`, '⚠️');
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
  const rfTime = state.rfTimerSeconds || 60;
  const defTime = state.defaultTimerSeconds || 30;
  state.timer.remaining = state.activeProjectorRound === 'rapidfire' ? rfTime : defTime;
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
  const exportPayload = {
    quizTitle: state.quizTitle,
    quizSubtitle: state.quizSubtitle,
    brandIcon: state.brandIcon,
    defaultTimerSeconds: state.defaultTimerSeconds,
    rfTimerSeconds: state.rfTimerSeconds,
    roundPoints: state.roundPoints,
    houses: state.houses,
    questions: state.questions
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportPayload, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `quiz_contest_data_${Date.now()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('Quiz setup and questions exported successfully!');
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
          state.quizSubtitle = imported.quizSubtitle || state.quizSubtitle;
          state.brandIcon = imported.brandIcon || state.brandIcon;
          state.defaultTimerSeconds = imported.defaultTimerSeconds || state.defaultTimerSeconds;
          state.rfTimerSeconds = imported.rfTimerSeconds || state.rfTimerSeconds;
          if (imported.roundPoints) state.roundPoints = { ...state.roundPoints, ...imported.roundPoints };
          state.houses = imported.houses;
          state.questions = imported.questions;
          saveState();
          renderAll();
          showToast('Quiz setup imported successfully!');
        } else {
          alert('Invalid quiz JSON file format. Must contain questions and houses.');
        }
      } catch (err) {
        alert('Error reading JSON file: ' + err.message);
      }
    };
    reader.readAsText(file);
  }
});

elements.btnResetDefault.addEventListener('click', () => {
  if (confirm('Reset question bank to original default Nepalese questions? Custom edits to questions will be restored to default.')) {
    state.questions = JSON.parse(JSON.stringify(DEFAULT_QUESTIONS));
    saveState();
    renderQuestionsEditor();
    renderProjectorStage();
    showToast('Reset questions to default!');
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

// KEYBOARD SHORTCUTS & EVENT BINDINGS
function bindEvents() {
  // Setup Screen Dynamic Customization Listeners
  if (elements.btnAddHouse) {
    elements.btnAddHouse.addEventListener('click', addNewHouse);
  }

  if (elements.btnResetAllScores) {
    elements.btnResetAllScores.addEventListener('click', resetAllScores);
  }

  if (elements.btnClearRoundQuestions) {
    elements.btnClearRoundQuestions.addEventListener('click', clearCurrentRoundQuestions);
  }

  if (elements.btnWinnerMenuToggle) {
    elements.btnWinnerMenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWinnerDropdown();
    });
  }

  document.addEventListener('click', (e) => {
    if (elements.winnerDropdownMenu && !e.target.closest('.winner-menu-container')) {
      closeWinnerDropdown();
    }
  });

  if (elements.inputQuizSubtitle) {
    elements.inputQuizSubtitle.addEventListener('input', (e) => {
      state.quizSubtitle = e.target.value;
      if (elements.headerQuizSubtitle) elements.headerQuizSubtitle.textContent = state.quizSubtitle;
      saveState();
    });
  }

  if (elements.inputBrandIcon) {
    elements.inputBrandIcon.addEventListener('input', (e) => {
      state.brandIcon = e.target.value || '🏆';
      if (elements.headerBrandIcon) elements.headerBrandIcon.textContent = state.brandIcon;
      saveState();
    });
  }

  if (elements.inputRfTimer) {
    elements.inputRfTimer.addEventListener('change', (e) => {
      state.rfTimerSeconds = parseInt(e.target.value) || 60;
      if (state.activeProjectorRound === 'rapidfire') resetTimer();
      saveState();
    });
  }

  // Scoring Rule Inputs
  if (elements.inputPtsGeneral) {
    elements.inputPtsGeneral.addEventListener('change', (e) => {
      state.roundPoints.general = parseInt(e.target.value) || 10;
      saveState();
    });
  }
  if (elements.inputPtsRf) {
    elements.inputPtsRf.addEventListener('change', (e) => {
      state.roundPoints.rapidfire = parseInt(e.target.value) || 5;
      saveState();
    });
  }
  if (elements.inputPtsPicture) {
    elements.inputPtsPicture.addEventListener('change', (e) => {
      state.roundPoints.picture = parseInt(e.target.value) || 15;
      saveState();
    });
  }
  if (elements.inputPtsBuzzerCorrect) {
    elements.inputPtsBuzzerCorrect.addEventListener('change', (e) => {
      state.roundPoints.buzzerCorrect = parseInt(e.target.value) || 15;
      saveState();
    });
  }
  if (elements.inputPtsBuzzerWrong) {
    elements.inputPtsBuzzerWrong.addEventListener('change', (e) => {
      state.roundPoints.buzzerWrong = parseInt(e.target.value) || -5;
      saveState();
    });
  }
  if (elements.inputPtsEstimation) {
    elements.inputPtsEstimation.addEventListener('change', (e) => {
      state.roundPoints.estimation = parseInt(e.target.value) || 15;
      saveState();
    });
  }

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

      // Buzzer Round Key Shortcuts (Keys 1 to 9 for houses)
      if (state.activeProjectorRound === 'buzzer') {
        const keyNum = parseInt(e.key);
        if (!isNaN(keyNum) && keyNum >= 1 && keyNum <= state.houses.length) {
          const targetHouse = state.houses[keyNum - 1];
          if (targetHouse) {
            triggerHouseBuzzer(targetHouse.id);
          }
        }
      }
    }

    if (e.key === 'Escape') {
      elements.modalKeyboardHelp.classList.remove('open');
      closeWinnerModal();
      closeWinnerDropdown();
    }
  });

  elements.btnKeyboardHelp.addEventListener('click', () => {
    elements.modalKeyboardHelp.classList.add('open');
  });

  elements.btnCloseModal.addEventListener('click', () => {
    elements.modalKeyboardHelp.classList.remove('open');
  });

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
    
    const themeColors = [houseColor, '#3b82f6', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6', '#ffffff', '#38bdf8'];
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

window.triggerWinnerCelebration = function(houseId) {
  let house = null;
  if (houseId) {
    house = state.houses.find(h => h.id === houseId);
  }
  if (!house) {
    const sorted = [...state.houses].sort((a, b) => b.score - a.score);
    house = sorted[0] || state.houses[0];
  }
  if (!house) return;

  const modalCard = document.querySelector('#modal-winner-celebration .winner-modal-card');
  const badge = document.getElementById('winner-house-badge');
  const title = document.getElementById('winner-house-title');
  const subtitle = document.getElementById('winner-house-subtitle');
  const scoreNum = document.getElementById('winner-house-score');
  const membersEl = document.getElementById('winner-house-members');

  if (modalCard) {
    modalCard.style.background = 'radial-gradient(circle at 50% 30%, rgba(20, 24, 45, 0.98) 0%, rgba(10, 14, 26, 0.99) 100%)';
    modalCard.style.borderColor = house.color;
    modalCard.style.boxShadow = `0 0 60px ${house.color}99, inset 0 0 35px ${house.color}33`;
  }

  if (badge) {
    badge.textContent = house.name.toUpperCase();
    badge.style.background = `linear-gradient(135deg, ${house.color}, #1e293b)`;
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
    if (house.members && house.members.trim()) {
      membersEl.style.display = 'block';
      membersEl.innerHTML = `👥 <strong>Team Members:</strong> ${escapeHtml(house.members)}`;
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

