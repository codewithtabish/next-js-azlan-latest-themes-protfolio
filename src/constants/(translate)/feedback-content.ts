import { LocaleType } from "@/constants/language"

export type FeedbackTestimonial = {
  name: string
  role: string
  url: string
  feedback: string
  image?: string // optional avatar image
}

export type FeedbackContent = {
  language: string
  code: LocaleType
  title: string
  subtitle: string
  testimonials: FeedbackTestimonial[]
}

export const feedbackContentArray: FeedbackContent[] = [
  {
    language: "English",
    code: "en",
    title: "Built with passion, trusted by professionals",
    subtitle:
      "Our AI-driven solutions have empowered developers, startups, and leading enterprises to innovate faster, build smarter products, and deliver exceptional machine learning experiences at scale.",
    testimonials: [
      {
        name: "Sophia Martinez",
        role: "Lead AI Scientist, OpenAI Partner",
        url: "https://linkedin.com/in/sophiamartinez",
        feedback:
          "The AI models built by Azlan’s team accelerated our R&D pipeline significantly. From NLP to deploying custom deep learning models into production, their expertise in AI engineering is world-class.",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      {
        name: "Dr. Ethan Brown",
        role: "CTO, NeuroTech Systems",
        url: "https://linkedin.com/in/dr-ethanbrown",
        feedback:
          "Their ML expertise helped us integrate custom recommendation engines and real-time analytics. What impressed us most was how they turned complex deep learning concepts into production-ready, scalable solutions.",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      {
        name: "Ava Chen",
        role: "Head of Product, VisionX Labs",
        url: "https://linkedin.com/in/avachen",
        feedback:
          "Partnering with Azlan on our computer vision project was the best decision we made. From data preprocessing to tuning CNN models, they delivered cutting-edge accuracy with efficient edge deployment.",
        image: "https://randomuser.me/api/portraits/women/24.jpg",
      },
      {
        name: "Michael O’Connor",
        role: "AI Program Director, DataWorks Inc.",
        url: "https://linkedin.com/in/michael-oconnor",
        feedback:
          "Their understanding of AI ethics and scalable deployment impressed all our stakeholders. The models they delivered were reliable, and communication was clear from day one.",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
      },
    ],
  },
  {
  language: "Spanish",
  code: "es",
  title: "Construido con pasión, confiado por profesionales",
  subtitle:
    "Nuestras soluciones impulsadas por IA han ayudado a desarrolladores, startups y grandes empresas a innovar más rápido, crear productos más inteligentes y ofrecer experiencias excepcionales de aprendizaje automático a gran escala.",
  testimonials: [
    {
      name: "Sophia Martinez",
      role: "Científica Principal de IA, Socia de OpenAI",
      url: "https://linkedin.com/in/sophiamartinez",
      feedback:
        "Los modelos de IA creados por el equipo de Azlan aceleraron significativamente nuestro proceso de I+D. Desde NLP hasta la implementación en producción, su experiencia es de clase mundial.",
    },
    {
      name: "Dr. Ethan Brown",
      role: "CTO, NeuroTech Systems",
      url: "https://linkedin.com/in/ethanbrown",
      feedback:
        "Su experiencia en ML nos ayudó a integrar motores de recomendación personalizados y análisis en tiempo real. Transformaron ideas complejas de deep learning en soluciones listas para producción.",
    },
    {
      name: "Ava Chen",
      role: "Directora de Producto, VisionX Labs",
      url: "https://linkedin.com/in/avachen",
      feedback:
        "Trabajar con Azlan en nuestro proyecto de visión por computadora fue la mejor decisión. Desde el preprocesamiento de datos hasta la optimización de las CNN, lograron gran precisión.",
    },
    {
      name: "Michael O’Connor",
      role: "Director de Programas de IA, DataWorks Inc.",
      url: "https://linkedin.com/in/michaeloconnor",
      feedback:
        "Su conocimiento de la ética en IA y el despliegue a escala impresionó a nuestros socios. Resultados fiables y comunicación clara desde el comienzo.",
    },
    
  ],
},
{
  language: "Arabic",
  code: "ar",
  title: "بُني بشغف، موثوق به من قبل المحترفين",
  subtitle:
    "حلولنا المدعومة بالذكاء الاصطناعي ساعدت المطورين والشركات الناشئة والمؤسسات الكبرى على الابتكار بشكل أسرع، وبناء منتجات أذكى، وتقديم تجارب استثنائية في التعلم الآلي على نطاق واسع.",
  testimonials: [
    {
      name: "صوفيا مارتينيز",
      role: "عالمة ذكاء اصطناعي أولى، شريك OpenAI",
      url: "https://linkedin.com/in/sophiamartinez",
      feedback:
        "النماذج التي طورها فريق أزلان سرّعت بشكل كبير خط البحث والتطوير لدينا. من معالجة اللغة الطبيعية إلى نشر نماذج تعلم عميق مخصصة، خبرتهم عالمية المستوى.",
    },
    {
      name: "د. إيثان براون",
      role: "المدير التقني، NeuroTech Systems",
      url: "https://linkedin.com/in/ethanbrown",
      feedback:
        "خبرتهم في ML ساعدتنا على دمج محركات توصية وتحليلات في الوقت الفعلي. حوّلوا مفاهيم معقدة إلى حلول عملية قابلة للتوسع.",
    },
    {
      name: "آفا تشين",
      role: "رئيسة المنتجات، VisionX Labs",
      url: "https://linkedin.com/in/avachen",
      feedback:
        "التعاون مع أزلان في مشروع الرؤية الحاسوبية كان أفضل قرار. من معالجة البيانات إلى تحسين CNN، حققوا دقة رائدة ونشر فعال.",
    },
    {
      name: "مايكل أوكونور",
      role: "مدير برنامج الذكاء الاصطناعي، DataWorks Inc.",
      url: "https://linkedin.com/in/michaeloconnor",
      feedback:
        "فهمهم لأخلاقيات الذكاء الاصطناعي والنشر على نطاق كبير أبهر شركاءنا. نتائج موثوقة وتواصل واضح منذ البداية.",
    },
  ],
},

{
  language: "French",
  code: "fr",
  title: "Construit avec passion, approuvé par des professionnels",
  subtitle:
    "Nos solutions basées sur l’IA ont permis aux développeurs, startups et grandes entreprises d’innover plus rapidement, de créer des produits plus intelligents et d’offrir des expériences exceptionnelles d’apprentissage automatique à grande échelle.",
  testimonials: [
    {
      name: "Sophia Martinez",
      role: "Scientifique en IA en chef, Partenaire OpenAI",
      url: "https://linkedin.com/in/sophiamartinez",
      feedback:
        "Les modèles d’IA développés par l’équipe d’Azlan ont considérablement accéléré nos recherches. Du NLP à la mise en production, leur expertise est de classe mondiale.",
    },
    {
      name: "Dr. Ethan Brown",
      role: "CTO, NeuroTech Systems",
      url: "https://linkedin.com/in/ethanbrown",
      feedback:
        "Leur expertise en ML nous a aidés à intégrer des moteurs de recommandation personnalisés et de l’analyse en temps réel. Des concepts complexes transformés en solutions évolutives.",
    },
    {
      name: "Ava Chen",
      role: "Responsable Produit, VisionX Labs",
      url: "https://linkedin.com/in/avachen",
      feedback:
        "Collaborer avec Azlan sur notre projet de vision par ordinateur a été un excellent choix. De la préparation des données aux CNN, ils ont livré une grande précision.",
    },
    {
      name: "Michael O’Connor",
      role: "Directeur des Programmes IA, DataWorks Inc.",
      url: "https://linkedin.com/in/michaeloconnor",
      feedback:
        "Leur compréhension de l’éthique de l’IA et du déploiement à grande échelle a impressionné nos partenaires. Résultats fiables et communication claire.",
    },
  ],
},

{
  language: "Urdu",
  code: "ur",
  title: "جذبے کے ساتھ بنایا گیا، پیشہ ور افراد کا اعتماد",
  subtitle:
    "ہمارے مصنوعی ذہانت پر مبنی حل نے ڈویلپرز، اسٹارٹ اپس اور بڑی کمپنیوں کو تیزی سے جدت لانے، ہوشیار مصنوعات بنانے، اور بڑے پیمانے پر بہترین مشین لرننگ کے تجربات فراہم کرنے کے قابل بنایا ہے۔",
  testimonials: [
    {
      name: "Sophia Martinez",
      role: "لیڈ اے آئی سائنسدان، اوپن اے آئی پارٹنر",
      url: "https://linkedin.com/in/sophiamartinez",
      feedback:
        "ازلانس کی ٹیم کے بنائے گئے اے آئی ماڈلز نے ہمارے ریسرچ اور ڈیولپمنٹ کو نمایاں طور پر تیز کر دیا۔ NLP سے لے کر کسٹم ڈیپ لرننگ ماڈلز کو پروڈکشن میں لگانے تک، ان کی مہارت عالمی سطح کی ہے۔",
    },
    {
      name: "ڈاکٹر ایٿن براؤن",
      role: "سی ٹی او، NeuroTech Systems",
      url: "https://linkedin.com/in/ethanbrown",
      feedback:
        "ان کی ML مہارت نے ہمیں کسٹم ریکمنڈیشن انجن اور ریئل ٹائم اینالٹکس شامل کرنے میں مدد کی۔ انہوں نے پیچیدہ ڈیپ لرننگ کے تصورات کو اسکلیبل اور پروڈکشن ریڈی سلوشنز میں بدل دیا۔",
    },
    {
      name: "Ava Chen",
      role: "ہیڈ آف پروڈکٹ، VisionX Labs",
      url: "https://linkedin.com/in/avachen",
      feedback:
        "ازلان کے ساتھ ہمارے کمپیوٹر وژن پروجیکٹ میں شراکت داری ہمارا بہترین فیصلہ تھا۔ ڈیٹا پری پروسیسنگ سے لے کر CNN ماڈلز ٹون کرنے تک، انہوں نے بہترین درستگی فراہم کی۔",
    },
    {
      name: "Michael O’Connor",
      role: "اے آئی پروگرام ڈائریکٹر، DataWorks Inc.",
      url: "https://linkedin.com/in/michaeloconnor",
      feedback:
        "اے آئی ایتھکس اور قابل توسیع ڈپلائمنٹ پر ان کا فہم ہمارے اسٹیک ہولڈرز کے لیے متاثر کن رہا۔ واضح مواصلات کے ساتھ پہلے دن سے ہی شاندار نتائج فراہم کیے۔",
    },
  ],
},
{
  language: "Japanese",
  code: "ja",
  title: "情熱を持って構築され、専門家に信頼される",
  subtitle:
    "私たちのAIソリューションは、開発者、スタートアップ、主要企業がより速く革新し、よりスマートな製品を構築し、大規模に優れた機械学習体験を提供できるようにしました。",
  testimonials: [
    {
      name: "Sophia Martinez",
      role: "主任AI科学者, OpenAIパートナー",
      url: "https://linkedin.com/in/sophiamartinez",
      feedback:
        "Azlanチームが開発したAIモデルは、私たちの研究開発パイプラインを大幅に加速させました。NLPからカスタムDeep Learningモデルの本番導入まで、その専門知識は世界トップレベルです。",
    },
    {
      name: "Dr. Ethan Brown",
      role: "CTO, NeuroTech Systems",
      url: "https://linkedin.com/in/ethanbrown",
      feedback:
        "彼らのMLの専門知識は、カスタム推薦エンジンやリアルタイム分析の統合に非常に役立ちました。複雑なDeep Learningの概念をスケーラブルな実用的ソリューションに落とし込む能力に驚かされました。",
    },
    {
      name: "Ava Chen",
      role: "プロダクト責任者, VisionX Labs",
      url: "https://linkedin.com/in/avachen",
      feedback:
        "コンピュータービジョンプロジェクトでAzlanと協働したことは、私たちにとって最良の決断でした。データ前処理からCNNチューニングまで、最先端の精度を提供してくれました。",
    },
    {
      name: "Michael O’Connor",
      role: "AIプログラムディレクター, DataWorks Inc.",
      url: "https://linkedin.com/in/michaeloconnor",
      feedback:
        "AI倫理とスケーラブルなデプロイメントに対する彼らの理解は、ステークホルダーを感動させました。最初から信頼できる成果と明快なコミュニケーションを提供しました。",
    },
  ],
},
{
  language: "Portuguese",
  code: "pt",
  title: "Construído com paixão, confiado por profissionais",
  subtitle:
    "Nossas soluções baseadas em IA ajudaram desenvolvedores, startups e grandes empresas a inovar mais rapidamente, criar produtos mais inteligentes e oferecer experiências excepcionais de machine learning em grande escala.",
  testimonials: [
    {
      name: "Sophia Martinez",
      role: "Cientista Chefe de IA, Parceira OpenAI",
      url: "https://linkedin.com/in/sophiamartinez",
      feedback:
        "Os modelos de IA desenvolvidos pela equipe de Azlan aceleraram significativamente nossa pesquisa e desenvolvimento. Do NLP à implantação em produção, sua experiência é de classe mundial.",
    },
    {
      name: "Dr. Ethan Brown",
      role: "CTO, NeuroTech Systems",
      url: "https://linkedin.com/in/ethanbrown",
      feedback:
        "A expertise deles em ML nos ajudou a integrar sistemas de recomendação personalizados e análises em tempo real. Transformaram conceitos complexos em soluções escaláveis e prontas para produção.",
    },
    {
      name: "Ava Chen",
      role: "Chefe de Produto, VisionX Labs",
      url: "https://linkedin.com/in/avachen",
      feedback:
        "Trabalhar com Azlan em nosso projeto de visão computacional foi a melhor decisão. Do pré-processamento de dados ao ajuste de CNNs, alcançaram alta precisão com implantação eficiente.",
    },
    {
      name: "Michael O’Connor",
      role: "Diretor de Programas de IA, DataWorks Inc.",
      url: "https://linkedin.com/in/michaeloconnor",
      feedback:
        "A compreensão deles de ética em IA e implantação em escala impressionou nossos parceiros. Comunicação clara e resultados confiáveis desde o início.",
    },
  ],
},
{
  language: "Russian",
  code: "ru",
  title: "Создано с страстью, доверено профессионалами",
  subtitle:
    "Наши решения на базе ИИ помогли разработчикам, стартапам и крупным предприятиям быстрее внедрять инновации, создавать умные продукты и предоставлять исключительный опыт машинного обучения в широком масштабе.",
  testimonials: [
    {
      name: "Sophia Martinez",
      role: "Ведущий специалист по ИИ, партнер OpenAI",
      url: "https://linkedin.com/in/sophiamartinez",
      feedback:
        "Модели ИИ, созданные командой Азлана, значительно ускорили процесс исследований и разработок. От NLP до запуска глубоких нейросетей в продакшн – их экспертиза мирового уровня.",
    },
    {
      name: "Dr. Ethan Brown",
      role: "CTO, NeuroTech Systems",
      url: "https://linkedin.com/in/ethanbrown",
      feedback:
        "Их опыт в ML помог нам внедрить рекомендательные системы и аналитику в реальном времени. Сложные концепции они превратили в масштабируемые промышленные решения.",
    },
    {
      name: "Ava Chen",
      role: "Руководитель продукта, VisionX Labs",
      url: "https://linkedin.com/in/avachen",
      feedback:
        "Сотрудничество с Азланом в проекте компьютерного зрения стало нашим лучшим решением. От подготовки данных до настройки CNN – отличная точность и эффективный деплой.",
    },
    {
      name: "Michael O’Connor",
      role: "Директор программы ИИ, DataWorks Inc.",
      url: "https://linkedin.com/in/michaeloconnor",
      feedback:
        "Их понимание этики ИИ и масштабируемого внедрения впечатлило заинтересованных лиц. Надежные результаты и ясная коммуникация с первого дня.",
    },
  ],
},
{
  language: "Korean",
  code: "ko",
  title: "열정으로 구축되고 전문가들이 신뢰합니다",
  subtitle:
    "AI 기반 솔루션은 개발자, 스타트업, 대기업이 더 빠르게 혁신하고 더 똑똑한 제품을 만들며 대규모로 뛰어난 머신러닝 경험을 제공할 수 있도록 지원했습니다.",
  testimonials: [
    {
      name: "Sophia Martinez",
      role: "수석 AI 과학자, OpenAI 파트너",
      url: "https://linkedin.com/in/sophiamartinez",
      feedback:
        "Azlan 팀이 개발한 AI 모델은 우리의 연구 개발 파이프라인을 크게 가속시켰습니다. NLP부터 맞춤형 딥러닝 모델의 프로덕션 배포까지, 세계적 수준의 전문성을 보여주었습니다.",
    },
    {
      name: "Dr. Ethan Brown",
      role: "CTO, NeuroTech Systems",
      url: "https://linkedin.com/in/ethanbrown",
      feedback:
        "그들의 ML 전문성은 맞춤 추천 엔진과 실시간 분석을 통합하는 데 큰 도움이 되었습니다. 복잡한 딥러닝 개념을 확장 가능한 프로덕션 솔루션으로 구현했습니다.",
    },
    {
      name: "Ava Chen",
      role: "프로덕트 책임자, VisionX Labs",
      url: "https://linkedin.com/in/avachen",
      feedback:
        "컴퓨터 비전 프로젝트에서 Azlan과 협력한 것은 최고의 선택이었습니다. 데이터 전처리부터 CNN 모델 최적화까지 최첨단 정확도를 제공했습니다.",
    },
    {
      name: "Michael O’Connor",
      role: "AI 프로그램 디렉터, DataWorks Inc.",
      url: "https://linkedin.com/in/michaeloconnor",
      feedback:
        "AI 윤리와 확장 가능한 배포에 대한 그들의 이해는 우리 이해관계자들에게 깊은 인상을 주었습니다. 처음부터 명확한 의사소통과 신뢰할 수 있는 결과를 보여주었습니다.",
    },
  ],
},
{
  language: "Mandarin Chinese",
  code: "zh",
  title: "以热情打造，值得专业人士信赖",
  subtitle:
    "我们的人工智能解决方案帮助开发者、初创公司和大型企业更快地创新、更智能地构建产品，并在大规模上提供卓越的机器学习体验。",
  testimonials: [
    {
      name: "Sophia Martinez",
      role: "首席AI科学家, OpenAI合作伙伴",
      url: "https://linkedin.com/in/sophiamartinez",
      feedback:
        "Azlan团队构建的AI模型极大加速了我们的研发流程。从自然语言处理到深度学习模型的生产部署，他们的专业能力堪称一流。",
    },
    {
      name: "Dr. Ethan Brown",
      role: "首席技术官, NeuroTech Systems",
      url: "https://linkedin.com/in/ethanbrown",
      feedback:
        "他们的ML专长帮助我们整合了定制推荐引擎和实时分析。复杂的深度学习理论被他们转化为可扩展的、适合生产环境的解决方案。",
    },
    {
      name: "Ava Chen",
      role: "产品负责人, VisionX Labs",
      url: "https://linkedin.com/in/avachen",
      feedback:
        "与Azlan合作进行计算机视觉项目是我们最好的决定。从数据预处理到CNN优化，他们提供了最先进的精度和高效的边缘部署。",
    },
    {
      name: "Michael O’Connor",
      role: "AI项目总监, DataWorks Inc.",
      url: "https://linkedin.com/in/michaeloconnor",
      feedback:
        "他们对人工智能伦理和可扩展部署的理解给所有利益相关者留下了深刻印象。可靠的成果和明确的沟通从第一天就开始了。",
    },
  ],
},
{
  language: "Hindi",
  code: "hi",
  title: "जुनून से बनाया गया, पेशेवरों द्वारा भरोसेमंद",
  subtitle:
    "हमारे एआई-संचालित समाधान डेवलपर्स, स्टार्टअप्स और बड़ी कंपनियों को तेजी से नवाचार करने, स्मार्ट उत्पाद बनाने और बड़े पैमाने पर उत्कृष्ट मशीन लर्निंग अनुभव प्रदान करने में सक्षम बनाते हैं।",
  testimonials: [
    {
      name: "Sophia Martinez",
      role: "लीड एआई वैज्ञानिक, OpenAI पार्टनर",
      url: "https://linkedin.com/in/sophiamartinez",
      feedback:
        "Azlan की टीम द्वारा विकसित एआई मॉडल्स ने हमारे R&D पाइपलाइन को काफी तेज़ किया। NLP से लेकर कस्टम डीप लर्निंग मॉडल्स की तैनाती तक, उनकी विशेषज्ञता विश्व स्तरीय रही है।",
    },
    {
      name: "Dr. Ethan Brown",
      role: "CTO, NeuroTech Systems",
      url: "https://linkedin.com/in/ethanbrown",
      feedback:
        "उनकी ML विशेषज्ञता ने हमें कस्टम रेकमेंडेशन इंजन और रियल-टाइम एनालिटिक्स इंटीग्रेट करने में मदद की। उन्होंने जटिल डीप लर्निंग कॉन्सेप्ट्स को प्रोडक्शन रेडी और स्केलेबल सॉल्यूशंस बनाया।",
    },
    {
      name: "Ava Chen",
      role: "हेड ऑफ प्रोडक्ट, VisionX Labs",
      url: "https://linkedin.com/in/avachen",
      feedback:
        "हमारे कंप्यूटर विज़न प्रोजेक्ट में Azlan के साथ साझेदारी करना हमारा सबसे बढ़िया निर्णय था। डेटाप्री-प्रोसेसिंग से लेकर CNN ट्यूनिंग तक, उन्होंने अत्याधुनिक सटीकता दी।",
    },
    {
      name: "Michael O’Connor",
      role: "एआई प्रोग्राम डायरेक्टर, DataWorks Inc.",
      url: "https://linkedin.com/in/michaeloconnor",
      feedback:
        "AI एथिक्स और स्केलेबल डिप्लॉयमेंट की उनकी समझ ने हमारे सभी हितधारकों को प्रभावित किया। पहले दिन से ही उनके परिणाम विश्वसनीय और स्पष्ट संचार से भरे रहे।",
    },
  ],
},
{
  language: "German",
  code: "de",
  title: "Mit Leidenschaft gebaut, von Profis vertraut",
  subtitle:
    "Unsere KI-Lösungen haben Entwicklern, Startups und Unternehmen geholfen, schneller zu innovieren, intelligentere Produkte zu entwickeln und außergewöhnliche Machine-Learning-Erfahrungen im großen Maßstab bereitzustellen.",
  testimonials: [
    {
      name: "Sophia Martinez",
      role: "Leitende KI-Wissenschaftlerin, OpenAI Partner",
      url: "https://linkedin.com/in/sophiamartinez",
      feedback:
        "Die von Azlans Team entwickelten KI-Modelle haben unsere F&E erheblich beschleunigt. Von NLP bis zum produktiven Einsatz maßgeschneiderter Deep-Learning-Modelle ist ihre Expertise weltklasse.",
    },
    {
      name: "Dr. Ethan Brown",
      role: "CTO, NeuroTech Systems",
      url: "https://linkedin.com/in/ethanbrown",
      feedback:
        "Ihre ML-Expertise half uns, personalisierte Empfehlungssysteme und Echtzeitanalysen nahtlos zu integrieren. Komplexe Konzepte wurden in skalierbare Lösungen umgesetzt.",
    },
    {
      name: "Ava Chen",
      role: "Produktleiterin, VisionX Labs",
      url: "https://linkedin.com/in/avachen",
      feedback:
        "Die Zusammenarbeit mit Azlan an unserem Computer-Vision-Projekt war die beste Entscheidung. Vom Daten-Preprocessing bis hin zur CNN-Optimierung lieferten sie Präzision auf höchstem Niveau.",
    },
    {
      name: "Michael O’Connor",
      role: "Direktor für KI-Programme, DataWorks Inc.",
      url: "https://linkedin.com/in/michaeloconnor",
      feedback:
        "Ihr Verständnis von KI-Ethik und skalierbarer Implementierung hat unsere Stakeholder tief beeindruckt. Zuverlässige Ergebnisse und klare Kommunikation von Anfang an.",
    },
  ],
},





  // Repeat same structure for zh, hi, es, ar, fr, de, ja, ur, pt, ru, ko
  // If you don’t have localized testimonials yet, keep `feedback` text in English
  // and only translate title + subtitle (as we did before).
]
