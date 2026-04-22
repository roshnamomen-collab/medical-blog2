export interface SpecialtyData {
  id: string;
  name_en: string;
  name_ku: string;
  description_en: string;
  description_ku: string;
}

export const SPECIALTIES: SpecialtyData[] = [
  {
    id: 'risale-i-nur',
    name_en: 'Risale i Nur',
    name_ku: 'پەیامەکانی نوور',
    description_en: 'Spiritual and thematic Quranic exegesis (Tafsir) that explores the depths of belief, worship, and the secrets of the universe through a logical and scientific approach. It provides a comprehensive guide for modern faith by addressing contemporary doubts and offering profound spiritual insights into the relationship between the Creator and the creation.',
    description_ku: 'تەفسیرێکی مانی و بابەتە لاهووتییەکان کە بە شێوازێکی عەقڵی و زانستی باس لە ڕاستییەکانی ئیمان و پەروەردگار و گەردوون دەکات. ئەم کۆمەڵە کتێبە ڕێبەرییەکی گشتگیرە بۆ تێگەیشتن لە ئایین لە سەردەمی نوێدا و وەڵامی گومانە جۆراوجۆرەکان دەداتەوە بە شێوەیەکی قایلکەر و ڕۆحانی.'
  },
  {
    id: 'ophthalmology',
    name_en: 'Ophthalmology',
    name_ku: 'نەشتەرگەری چاو',
    description_en: 'Comprehensive eye surgery and vision care including treatment of diseases like cataracts, glaucoma, and macular degeneration. Our expert surgeons utilize the latest diagnostic tools and surgical techniques to preserve and restore your vision, ensuring the highest standards of ocular health for patients of all ages.',
    description_ku: 'نەشتەرگەری و نەخۆشییەکانی چاو، لەوانە چارەسەرکردنی ئاوی سپی، ئاوی ڕەش و کێشەکانی تری بینین بە نوێترین ئامێر و تەکنەلۆژیا. پزیشکە پسپۆڕەکانمان هەوڵ دەدەن باشترین خزمەتگوزاری پێشکەش بکەن بۆ پاراستن و باشترکردنی بینینی ئێوە و دابینکردنی تەندروستییەکی باشی چاو.'
  },
  {
    id: 'dermatology',
    name_en: 'Dermatology',
    name_ku: 'پێست',
    description_en: 'Specialized skin healthcare, pathology, and advanced aesthetics procedures focusing on everything from acne and eczema to complex skin cancers and rejuvenation treatments. We combine clinical expertise with aesthetic sensitivity to help you achieve healthy, radiant skin through personalized treatment plans and modern dermatological innovations.',
    description_ku: 'پسپۆڕی پێست و جوانکاری، کە گرنگی دەدات بە چارەسەرکردنی هەموو جۆرە نەخۆشییەکی پێست و ئەنجامدانی کارەکانی جوانکاری بە شێوەیەکی زانستی. ئێمە لێرەین بۆ ئەوەی هاوکارتان بین لە پاراستنی تەندروستی پێستتان و بەدەستهێنانی ڕووخسارێکی گەشاوە و جوان بە بەکارهێنانی نوێترین تەکنیکەکان.'
  },
  {
    id: 'general-surgery',
    name_en: 'General Surgery',
    name_ku: 'نەشتەرگەری گشتی',
    description_en: 'Broad surgical procedures focusing on abdominal contents including esophagus, stomach, small intestine, large intestine, liver, and pancreas. Our surgical teams are highly skilled in both traditional open surgery and minimally invasive laparoscopic techniques to ensure patient safety, reduced recovery times, and optimal surgical outcomes.',
    description_ku: 'نەشتەرگەری گشتی کە گرنگی دەدات بە نەشتەرگەرییەکانی ناو سک و هەنا و کۆئەندامی هەرس بە هەموو بەشەکانییەوە. تیمە پزیشکییەکانمان بە ئەزموونێکی زۆرەوە کار دەکەن بۆ ئەنجامدانی نەشتەرگەرییەکان بە شێوەیەکی سەرکەوتوو و دڵنیاییدان بە نەخۆشەکانمان بۆ چاکبوونەوەیەکی خێرا.'
  },
  {
    id: 'dentistry',
    name_en: 'Dentistry',
    name_ku: 'دەم و ددان',
    description_en: 'Complete dental and oral healthcare services ranging from routine cleanings and fillings to complex oral surgeries, implants, and orthodontic treatments. We prioritize patient comfort and use state-of-the-art dental technology to maintain your oral hygiene, improve your smile, and prevent long-term dental complications.',
    description_ku: 'پزیشکی دەم و ددان کە هەموو خزمەتگوزارییەکانی پاککردنەوە، پڕکردنەوە، چاککردنی ڕیزبەندی ددانەکان و نەشتەرگەرییەکان دەگرێتەوە. ئامانجمان ئەوەیە کە بە باشترین شێوە و بە کەمترین ئازار خزمەتگوزارییەکانتان پێشکەش بکەین بۆ ئەوەی خاوەن زەردەخەنەیەکی جوان و دەم و ددانێکی تەندروست بن.'
  },
  {
    id: 'internal-medicine',
    name_en: 'Internal Medicine',
    name_ku: 'هەناوی',
    description_en: 'Expert diagnosis and management of complex internal organ diseases and chronic conditions for adult patients, focusing on prevention and wellness. Our internists are trained to solve puzzling diagnostic problems and handle severe chronic illnesses where several different illnesses may strike at the same time.',
    description_ku: 'نەخۆشییە هەناوییەکان و دەستنیشانکردنی وردی کێشەکانی ئەندامە ناوخۆییەکانی لەش وەک دڵ، گورچیلە و کۆئەندامی هەرس. پزیشکەکانمان بە شارەزاییەکی زۆرەوە کار دەکەن بۆ دیاریکردنی هۆکاری نەخۆشییە ئاڵۆزەکان و دابینکردنی پلانێکی چارەسەری گونجاو بۆ نەخۆشەکان.'
  },
  {
    id: 'gynecology',
    name_en: 'Gynecology',
    name_ku: 'ژنان و مناڵبوون',
    description_en: 'Comprehensive women healthcare services including routine examinations, maternity care, reproductive health, and surgical interventions for gynecological disorders. We provide a supportive and private environment for women through all stages of life, from adolescence to menopause, ensuring optimal health and well-being.',
    description_ku: 'پسپۆڕی ژنان و منداڵبوون و گرنگیدان بە تەندروستی کۆئەندامی زاوزێ و خزمەتگوزارییەکانی کاتی دووگیانی و بوون. ئێمە ژینگەیەکی ئارام و تایبەتمەند دابین دەکەین بۆ خانمان بۆ ئەوەی بە باشترین شێوە چاودێری پزیشکییان بۆ بکرێت لە هەموو قۆناغەکانی تەمەنیاندا.'
  },
  {
    id: 'orthopedics',
    name_en: 'Orthopedics',
    name_ku: 'ئێسک و شکاوی',
    description_en: 'Advanced diagnosis and treatment of bones, joints, ligaments, tendons, and muscles through both surgical and non-surgical approaches. Whether it is a sports injury, chronic arthritis, or a complex fracture, our orthopedic specialists provide tailored rehabilitation and treatment plans to help you regain mobility and strength.',
    description_ku: 'پسپۆڕی ئێسک و جومگە و چارەسەرکردنی شکانی ئێسک و کێشەکانی جومگە و دەمارەکان بە شێوازی نەشتەرگەری و دەرمانسازی. کار دەکەین بۆ ئەوەی نەخۆشەکانمان دووبارە چالاکییەکانیان دەست پێ بکەنەوە و لە ئازارەکانی ئێسک و ماسولکە ڕزگاریان بێت بە باشترین شێواز.'
  },
  {
    id: 'ent',
    name_en: 'ENT',
    name_ku: 'قوڕگ و لوت و گوێ',
    description_en: 'Specialized care for diseases of the ear, nose, and throat, as well as related head and neck structures, including hearing loss and sinus issues. Our surgeons provide expert clinical management and surgical solutions for conditions affecting the senses and communication, ensuring a better quality of life for our patients.',
    description_ku: 'پسپۆڕی قوڕگ و لووت و گوێ و ئەنجامدانی نەشتەرگەرییەکانی پەیوەست بەم ئەندامانە و ناوچەکانی سەر و مل. چارەسەری کێشەکانی بیستن، کێشەکانی سینۆس و هەستیاری دەکەین بە بەکارهێنانی نوێترین ڕێگا زانستییەکان بۆ ئەوەی نەخۆشەکانمان هەست بە باشتربوون بکەن.'
  },
  {
    id: 'pediatrics',
    name_en: 'Pediatrics',
    name_ku: 'مناڵان و تازە لەدایکبووان',
    description_en: 'Holistic infant, child, and adolescent healthcare focusing on physical, emotional, and social development through preventive care and chronic disease management. We understand the unique needs of growing children and strive to create a friendly atmosphere while providing the highest quality medical advice and treatment.',
    description_ku: 'پزیشکی منداڵان و چاودێریکردنی گەشەی جەستەیی و دەروونی منداڵان لە کاتی لەدایکبوونەوە تا تەمەنی هەرزەکاری. هەوڵ دەدەین بە میهرەبانی و زانیارییەکی زۆرەوە هاوکاری خێزانەکان بکەین لە پاراستنی تەندروستی منداڵەکانیان و وەرگرتنی کوتانە پێویستەکان.'
  },
  {
    id: 'neurology',
    name_en: 'Neurology',
    name_ku: 'مێشک و دەمار',
    description_en: 'Diagnosis and treatment of all categories of conditions and disease involving the central and peripheral nervous systems, including their coverings and blood vessels. Our neurologists handle conditions like epilepsy, Alzheimers, stroke, and chronic headaches with compassion and the most advanced neurological diagnostic technology available.',
    description_ku: 'پسپۆڕی مێشک و دەمار و لێکۆڵینەوە لە کێشەکانی کۆئەندامی دەمار بە هەموو بەشەکانییەوە. چارەسەری نەخۆشییەکانی وەک فێ، جەڵتەی مێشک، و ئازاری درێژخایەنی سەر دەکەین بە شێوازێکی زانستی و ورد بۆ ئەوەی باشترین ئەنجام بەدەست بهێنین.'
  },
  {
    id: 'urology',
    name_en: 'Urology',
    name_ku: 'میزەڕۆ و گورچیلە',
    description_en: 'Surgical and medical specialty that focuses on the urinary-tract system and the male reproductive organs, including prostate health and kidney stones. We offer comprehensive evaluations and minimally invasive procedures to address sensitive health issues with the utmost professional discretion and clinical excellence.',
    description_ku: 'پسپۆڕی میز و میزەڕۆ و گورچیلەکان و کۆئەندامی زاوزێی پیاوان. بایەخ دەدەین بە چارەسەرکردنی بەردی گورچیلە و کێشەکانی پڕۆستات و نەخۆشییەکانی تری میزەڕۆ بە بەکارهێنانی تەکنیکی سەردەمیانە و نەشتەرگەری ورد.'
  },
  {
    id: 'cardiology',
    name_en: 'Cardiology',
    name_ku: 'دڵ و قەستەرە',
    description_en: 'Comprehensive heart and vascular healthcare focusing on prevention, early detection, and advanced interventional procedures for various cardiovascular diseases. Our cardiologists are leaders in heart health, providing everything from routine screenings to life-saving emergency catheterizations and long-term heart failure management.',
    description_ku: 'پسپۆڕی دڵ و بۆڕیەکانی خوێن و ئەنجامدانی کارەکانی قەستەرە و دانانی شەبەکە. کار دەکەین بۆ پاراستنی دڵی ئێوە لە نەخۆشییە مەترسیدارەکان و دابینکردنی چاودێرییەکی ورد بۆ ئەو کەسانەی کێشەی درێژخایەنی دڵ و پەستانی خوێنیان هەیە.'
  },
  {
    id: 'radiology',
    name_en: 'Radiology',
    name_ku: 'تیشک و سۆنار',
    description_en: 'Essential medical imaging and diagnostics using state-of-the-art technology like X-rays, Ultrasounds, CT scans, and MRIs to provide insights for precise medical treatment. Our radiologists collaborate closely with other specialists to ensure that every scan provides the clarity needed to make informed decisions about your health.',
    description_ku: 'پسپۆڕی تیشک و سۆنار و بەکارهێنانی ئامێرە پێشکەوتووەکانی وەک ئەشیعە و تیشکی تەنوری و سۆنار بۆ بینین و دەستنیشانکردنی کێشەکانی ناوەوەی لەش. ئەم بەشە هاوکارییەکی زۆری پزیشکەکانی تر دەکات بۆ ئەوەی بزانن چۆن باشترین چارەسەر بۆ نەخۆشەکە دابین بکەن.'
  },
  {
    id: 'neurosurgery',
    name_en: 'Neurosurgery',
    name_ku: 'نەشتەرگەری مێشک و دەمار',
    description_en: 'Highly advanced surgical specialty concerned with the prevention, diagnosis, and treatment of disorders which affect any portion of the nervous system. This includes the brain, spinal cord, central and peripheral nervous system, as well as surgeries for spinal disc herniations and complex intracranial conditions.',
    description_ku: 'نەشتەرگەری مێشک و دەمار و فەقەرات کە یەکێکە لە وردترین بەشەکانی پزیشکی. تیمەکانمان کار دەکەین بۆ ئەنجامدانی نەشتەرگەرییە ئاڵۆزەکانی مێشک و چاککردنی کێشەکانی دڕکەپەتک و فەقەرات بە بەکارهێنانی میکرۆسکۆبی پزیشکی و ئامێری زۆر ورد.'
  },
  {
    id: 'rheumatology',
    name_en: 'Rheumatology',
    name_ku: 'ڕۆماتیزمە',
    description_en: 'Specialized diagnosis and therapy of rheumatic diseases, involving issues within joints, soft tissues, autoimmune diseases, and heritable connective tissue disorders. We focus on improving the quality of life for patients with chronic pain and inflammatory conditions through specialized medication management and therapeutic strategies.',
    description_ku: 'پسپۆڕی ڕۆماتیزمە و جومگەکان و چارەسەرکردنی هەوکردنی جومگە و نەخۆشییە بەرگرییەکان. ئامانجمان کەمکردنەوەی ئازاری نەخۆش و ڕێگریکردنە لە تێکچوونی جومگەکان بە بەکارهێنانی چارەسەرە نوێیەکان بۆ ئەوەی نەخۆش بە ئاسوودەیی ژیان بەسەر ببات.'
  },
  {
    id: 'anesthesia',
    name_en: 'Anesthesia',
    name_ku: 'بێهۆشکاری',
    description_en: 'Critical care and pain management services for surgical patients, ensuring safety and comfort during procedures. Our anesthesiologists are experts in perioperative medicine and life support, providing personalized care and monitoring before, during, and after surgery to ensure the best possible recovery outcomes for every patient.',
    description_ku: 'پسپۆڕی بێهۆشکاری و کەمکردنەوەی ئازار لە کاتی نەشتەرگەری و دوای نەشتەرگەری. پزیشکەکانمان هەوڵ دەدەن بە باشترین شێوە و بە سەلامەتترین ڕێگا نەخۆشەکان بێهۆش بکەن و چاودێری وردیان بکەن لە هەموو قۆناغەکانی نەشتەرگەریدا بۆ ئەوەی هیچ کێشەیەکی تەندروستییان بۆ دروست نەبێت.'
  },
  {
    id: 'psychiatry',
    name_en: 'Psychiatry',
    name_ku: 'دەروونی',
    description_en: 'Specialized mental health care focusing on the diagnosis, treatment, and prevention of mental, emotional, and behavioral disorders. We provide a compassionate and confidential environment for patients facing life challenges, offering both therapy and medication management to restore balance and well-being to their daily lives.',
    description_ku: 'پسپۆڕی نەخۆشییە دەروونییەکان و چارەسەرکردنی کێشە دەروونی و ڕەفتارییەکان. ئێمە ژینگەیەکی متمانەپێکراو و دڵنیاکەرەوە دابین دەکەین بۆ ئەوەی هاوکارتان بین لە تێپەڕاندنی قەیرانە دەروونییەکان و دووبارە بەدەستهێنانەوەی ئارامی و شادی لە ژیانی ڕۆژانەتاندا.'
  },
  {
    id: 'nutrition',
    name_en: 'Nutrition',
    name_ku: 'خۆراک و گەشە',
    description_en: 'Evidence-based clinical nutrition and personalized dietetics focusing on health promotion and disease management through proper dietary choices. Our nutritionists work with you to develop healthy eating habits that suit your lifestyle, helping you manage weight, improve energy levels, and prevent chronic health conditions through better nutrition.',
    description_ku: 'پسپۆڕی خۆراک و گەشە و دابینکردنی بەرنامەی خۆراکی گونجاو بۆ هەموان بەپێی پێویستی جەستەیان. ئێمە هاوکارتانین لە ڕێکخستنی کێش و باشترکردنی تەندروستی گشتی لە ڕێگەی خواردنی دروست و زانیاری بەسوود لەسەر جۆری ئەو خواردنانەی کە جەستەتان پێویستی پێیەتی بۆ گەشە و چالاکی.'
  }
];
