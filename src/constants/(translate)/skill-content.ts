import { LocaleType } from "@/constants/language"

export type Skill = {
  title: string
  description: string
  icon: string // Use the component name as string, e.g. "Android"
}

export type SkillContent = {
  language: string
  code: LocaleType
  title: string
  subtitle: string
  skills: Skill[]
}

export const skillContentArray: SkillContent[] = [
  {
    language: "English",
    code: "en",
    title: "My Technical Skills",
    subtitle: "I build robust, scalable systems across multiple platforms and languages. Here are the core technologies and domains I specialize in:",
    skills: [
      {
        title: "Android Development",
        description: "Native Android apps using Java/Kotlin. Experience with UI/UX, REST APIs, and Play Store deployment.",
        icon: "Android",
      },
      {
        title: "Backend Engineering (FastAPI)",
        description: "Production-grade APIs and microservices in Python with FastAPI. Async, secure, and high-performance.",
        icon: "FastAPI",
      },
      {
        title: "Machine Learning & NLP",
        description: "ML pipelines, NLP models, and data science using Python, scikit-learn, spaCy, and more.",
        icon: "MLNLP",
      },
      {
        title: "Docker & DevOps",
        description: "Containerization, CI/CD, and scalable deployments using Docker, Compose, and best DevOps practices.",
        icon: "Docker",
      },
      {
        title: "Cloud & AWS",
        description: "Deploying, scaling, and managing cloud infrastructure on AWS. EC2, S3, Lambda, and more.",
        icon: "AWS",
      },
      {
        title: "Linux & System Admin",
        description: "Linux server management, automation, and shell scripting for reliable backend operations.",
        icon: "Linux",
      },
    ],
  },
  {
    language: "Spanish",
    code: "es",
    title: "Mis habilidades técnicas",
    subtitle: "Desarrollo sistemas robustos y escalables en múltiples plataformas e idiomas. Estas son las tecnologías y áreas en las que me especializo:",
    skills: [
      {
        title: "Desarrollo Android",
        description: "Aplicaciones nativas Android con Java/Kotlin. Experiencia en UI/UX, APIs REST y publicación en Play Store.",
        icon: "Android",
      },
      {
        title: "Backend (FastAPI)",
        description: "APIs y microservicios en Python con FastAPI. Asíncrono, seguro y de alto rendimiento.",
        icon: "FastAPI",
      },
      {
        title: "Machine Learning y NLP",
        description: "Pipelines de ML, modelos NLP y ciencia de datos con Python, scikit-learn, spaCy y más.",
        icon: "MLNLP",
      },
      {
        title: "Docker y DevOps",
        description: "Contenerización, CI/CD y despliegues escalables con Docker, Compose y mejores prácticas DevOps.",
        icon: "Docker",
      },
      {
        title: "Cloud y AWS",
        description: "Despliegue, escalado y gestión de infraestructura en AWS. EC2, S3, Lambda y más.",
        icon: "AWS",
      },
      {
        title: "Linux y Administración de Sistemas",
        description: "Gestión de servidores Linux, automatización y scripting para operaciones backend confiables.",
        icon: "Linux",
      },
    ],
  },
  {
    language: "Arabic",
    code: "ar",
    title: "مهاراتي التقنية",
    subtitle: "أبني أنظمة قوية وقابلة للتوسع عبر منصات ولغات متعددة. هذه هي التقنيات والمجالات الأساسية التي أتخصص فيها:",
    skills: [
      {
        title: "تطوير أندرويد",
        description: "تطبيقات أندرويد أصلية باستخدام Java/Kotlin. خبرة في واجهات المستخدم وواجهات REST ونشر المتجر.",
        icon: "Android",
      },
      {
        title: "الهندسة الخلفية (FastAPI)",
        description: "واجهات برمجة تطبيقات وخدمات مصغرة في بايثون باستخدام FastAPI. غير متزامن وآمن وعالي الأداء.",
        icon: "FastAPI",
      },
      {
        title: "تعلم الآلة ومعالجة اللغة الطبيعية",
        description: "بناء نماذج ML وNLP وتحليل البيانات باستخدام بايثون وscikit-learn وspaCy وغيرها.",
        icon: "MLNLP",
      },
      {
        title: "Docker و DevOps",
        description: "حاويات، CI/CD، ونشر قابل للتوسع باستخدام Docker وCompose وأفضل ممارسات DevOps.",
        icon: "Docker",
      },
      {
        title: "السحابة و AWS",
        description: "نشر وإدارة البنية التحتية السحابية على AWS. EC2 وS3 وLambda والمزيد.",
        icon: "AWS",
      },
      {
        title: "لينكس وإدارة الأنظمة",
        description: "إدارة خوادم لينكس، الأتمتة، وكتابة السكربتات لضمان عمليات خلفية موثوقة.",
        icon: "Linux",
      },
    ],
  },
  {
    language: "French",
    code: "fr",
    title: "Mes compétences techniques",
    subtitle: "Je conçois des systèmes robustes et évolutifs sur plusieurs plateformes et langages. Voici les technologies et domaines que je maîtrise :",
    skills: [
      {
        title: "Développement Android",
        description: "Applications Android natives en Java/Kotlin. Expérience UI/UX, APIs REST et déploiement Play Store.",
        icon: "Android",
      },
      {
        title: "Backend (FastAPI)",
        description: "APIs et microservices en Python avec FastAPI. Asynchrone, sécurisé et performant.",
        icon: "FastAPI",
      },
      {
        title: "Machine Learning & NLP",
        description: "Pipelines ML, modèles NLP et data science avec Python, scikit-learn, spaCy, etc.",
        icon: "MLNLP",
      },
      {
        title: "Docker & DevOps",
        description: "Conteneurisation, CI/CD et déploiements évolutifs avec Docker, Compose et DevOps.",
        icon: "Docker",
      },
      {
        title: "Cloud & AWS",
        description: "Déploiement et gestion d’infrastructure cloud sur AWS. EC2, S3, Lambda, etc.",
        icon: "AWS",
      },
      {
        title: "Linux & Administration Système",
        description: "Gestion de serveurs Linux, automatisation et scripting pour des opérations backend fiables.",
        icon: "Linux",
      },
    ],
  },
  {
    language: "Urdu",
    code: "ur",
    title: "میری تکنیکی مہارتیں",
    subtitle: "میں مختلف پلیٹ فارمز اور زبانوں پر مضبوط اور قابل توسیع سسٹمز بناتا ہوں۔ یہ وہ بنیادی ٹیکنالوجیز اور شعبے ہیں جن میں میں مہارت رکھتا ہوں:",
    skills: [
      {
        title: "اینڈرائیڈ ڈویلپمنٹ",
        description: "جاوا/کوٹلن کے ساتھ نیٹو اینڈرائیڈ ایپس۔ UI/UX، REST APIs اور پلے اسٹور ڈپلائمنٹ کا تجربہ۔",
        icon: "Android",
      },
      {
        title: "بیک اینڈ انجینئرنگ (FastAPI)",
        description: "پائتھون اور FastAPI کے ساتھ پروڈکشن گریڈ APIs اور مائیکرو سروسز۔ تیز، محفوظ اور اسکیل ایبل۔",
        icon: "FastAPI",
      },
      {
        title: "مشین لرننگ اور NLP",
        description: "پائتھون، scikit-learn، spaCy وغیرہ کے ساتھ ML پائپ لائنز اور NLP ماڈلز۔",
        icon: "MLNLP",
      },
      {
        title: "ڈوکر اور ڈیواپس",
        description: "ڈوکر، کمپوز اور بہترین ڈیواپس پریکٹسز کے ساتھ کنٹینرائزیشن، CI/CD اور اسکیل ایبل ڈپلائمنٹ۔",
        icon: "Docker",
      },
      {
        title: "کلاؤڈ اور AWS",
        description: "AWS پر کلاؤڈ انفراسٹرکچر کی ڈپلائمنٹ، اسکیلنگ اور مینجمنٹ۔ EC2، S3، Lambda وغیرہ۔",
        icon: "AWS",
      },
      {
        title: "لینکس اور سسٹم ایڈمن",
        description: "لینکس سرور مینجمنٹ، آٹومیشن اور اسکرپٹنگ برائے قابل اعتماد بیک اینڈ آپریشنز۔",
        icon: "Linux",
      },
    ],
  },
  {
    language: "Japanese",
    code: "ja",
    title: "私の技術スキル",
    subtitle: "複数のプラットフォームと言語で堅牢かつスケーラブルなシステムを構築します。私の専門分野と技術はこちらです：",
    skills: [
      {
        title: "Android開発",
        description: "Java/KotlinによるネイティブAndroidアプリ。UI/UX、REST API、Playストア公開の経験。",
        icon: "Android",
      },
      {
        title: "バックエンドエンジニアリング（FastAPI）",
        description: "PythonとFastAPIによる本番API・マイクロサービス。非同期・安全・高性能。",
        icon: "FastAPI",
      },
      {
        title: "機械学習・NLP",
        description: "Python、scikit-learn、spaCy等を用いたMLパイプライン・NLPモデル・データサイエンス。",
        icon: "MLNLP",
      },
      {
        title: "Docker・DevOps",
        description: "Docker、Compose、DevOpsベストプラクティスによるコンテナ化・CI/CD・スケーラブルなデプロイ。",
        icon: "Docker",
      },
      {
        title: "クラウド・AWS",
        description: "AWSでのクラウドインフラのデプロイ・スケーリング・管理。EC2、S3、Lambda等。",
        icon: "AWS",
      },
      {
        title: "Linux・システム管理",
        description: "Linuxサーバ管理、自動化、シェルスクリプトによる信頼性の高いバックエンド運用。",
        icon: "Linux",
      },
    ],
  },
  {
    language: "Portuguese",
    code: "pt",
    title: "Minhas habilidades técnicas",
    subtitle: "Desenvolvo sistemas robustos e escaláveis em várias plataformas e linguagens. Estas são as principais tecnologias e áreas em que sou especialista:",
    skills: [
      {
        title: "Desenvolvimento Android",
        description: "Apps Android nativos com Java/Kotlin. Experiência em UI/UX, APIs REST e publicação na Play Store.",
        icon: "Android",
      },
      {
        title: "Backend (FastAPI)",
        description: "APIs e microsserviços em Python com FastAPI. Assíncrono, seguro e de alta performance.",
        icon: "FastAPI",
      },
      {
        title: "Machine Learning & NLP",
        description: "Pipelines de ML, modelos NLP e ciência de dados com Python, scikit-learn, spaCy e mais.",
        icon: "MLNLP",
      },
      {
        title: "Docker & DevOps",
        description: "Containerização, CI/CD e deploys escaláveis com Docker, Compose e melhores práticas DevOps.",
        icon: "Docker",
      },
      {
        title: "Cloud & AWS",
        description: "Implantação, escalonamento e gestão de infraestrutura na AWS. EC2, S3, Lambda e mais.",
        icon: "AWS",
      },
      {
        title: "Linux & Administração de Sistemas",
        description: "Administração de servidores Linux, automação e scripting para operações backend confiáveis.",
        icon: "Linux",
      },
    ],
  },
  {
    language: "Russian",
    code: "ru",
    title: "Мои технические навыки",
    subtitle: "Я создаю надёжные и масштабируемые системы на разных платформах и языках. Вот основные технологии и области моей специализации:",
    skills: [
      {
        title: "Разработка Android",
        description: "Нативные Android-приложения на Java/Kotlin. Опыт в UI/UX, REST API и публикации в Play Store.",
        icon: "Android",
      },
      {
        title: "Бэкенд (FastAPI)",
        description: "API и микросервисы на Python с FastAPI. Асинхронно, безопасно, высокопроизводительно.",
        icon: "FastAPI",
      },
      {
        title: "Машинное обучение и NLP",
        description: "ML-пайплайны, NLP-модели и Data Science на Python, scikit-learn, spaCy и др.",
        icon: "MLNLP",
      },
      {
        title: "Docker и DevOps",
        description: "Контейнеризация, CI/CD и масштабируемые деплои с Docker, Compose и DevOps.",
        icon: "Docker",
      },
      {
        title: "Облако и AWS",
        description: "Развёртывание и управление облачной инфраструктурой на AWS. EC2, S3, Lambda и др.",
        icon: "AWS",
      },
      {
        title: "Linux и администрирование",
        description: "Управление Linux-серверами, автоматизация и скрипты для надёжной работы бэкенда.",
        icon: "Linux",
      },
    ],
  },
  {
    language: "Korean",
    code: "ko",
    title: "나의 기술 스킬",
    subtitle: "여러 플랫폼과 언어에서 견고하고 확장 가능한 시스템을 구축합니다. 제가 전문으로 하는 핵심 기술과 분야입니다:",
    skills: [
      {
        title: "안드로이드 개발",
        description: "Java/Kotlin 기반 네이티브 안드로이드 앱. UI/UX, REST API, Play 스토어 배포 경험.",
        icon: "Android",
      },
      {
        title: "백엔드 엔지니어링 (FastAPI)",
        description: "Python과 FastAPI로 프로덕션급 API 및 마이크로서비스 개발. 비동기, 보안, 고성능.",
        icon: "FastAPI",
      },
      {
        title: "머신러닝 & NLP",
        description: "Python, scikit-learn, spaCy 등으로 ML 파이프라인, NLP 모델, 데이터 사이언스.",
        icon: "MLNLP",
      },
      {
        title: "Docker & DevOps",
        description: "Docker, Compose, DevOps 베스트 프랙티스로 컨테이너화, CI/CD, 확장형 배포.",
        icon: "Docker",
      },
      {
        title: "클라우드 & AWS",
        description: "AWS에서 클라우드 인프라 배포, 확장, 관리. EC2, S3, Lambda 등.",
        icon: "AWS",
      },
      {
        title: "리눅스 & 시스템 관리",
        description: "리눅스 서버 관리, 자동화, 백엔드 운영을 위한 스크립팅.",
        icon: "Linux",
      },
    ],
  },
  {
    language: "Mandarin Chinese",
    code: "zh",
    title: "我的技术技能",
    subtitle: "我在多个平台和语言上构建强大且可扩展的系统。以下是我的核心技术和专长领域：",
    skills: [
      {
        title: "Android开发",
        description: "使用Java/Kotlin开发原生Android应用。具备UI/UX、REST API和上架Play商店经验。",
        icon: "Android",
      },
      {
        title: "后端开发（FastAPI）",
        description: "使用Python和FastAPI构建生产级API和微服务。异步、安全、高性能。",
        icon: "FastAPI",
      },
      {
        title: "机器学习与NLP",
        description: "使用Python、scikit-learn、spaCy等进行ML流水线、NLP模型和数据科学。",
        icon: "MLNLP",
      },
      {
        title: "Docker与DevOps",
        description: "使用Docker、Compose和最佳DevOps实践进行容器化、CI/CD和可扩展部署。",
        icon: "Docker",
      },
      {
        title: "云计算与AWS",
        description: "在AWS上部署、扩展和管理云基础设施。EC2、S3、Lambda等。",
        icon: "AWS",
      },
      {
        title: "Linux与系统管理",
        description: "Linux服务器管理、自动化和脚本编写，保障后端稳定运行。",
        icon: "Linux",
      },
    ],
  },
  {
    language: "Hindi",
    code: "hi",
    title: "मेरी तकनीकी क्षमताएँ",
    subtitle: "मैं कई प्लेटफार्मों और भाषाओं में मजबूत, स्केलेबल सिस्टम बनाता हूँ। ये हैं मेरी मुख्य तकनीकें और विशेषज्ञता:",
    skills: [
      {
        title: "एंड्रॉइड डेवलपमेंट",
        description: "Java/Kotlin के साथ नेटिव एंड्रॉइड ऐप्स। UI/UX, REST API और Play Store डिप्लॉयमेंट का अनुभव।",
        icon: "Android",
      },
      {
        title: "बैकएंड इंजीनियरिंग (FastAPI)",
        description: "Python और FastAPI के साथ प्रोडक्शन-ग्रेड APIs और माइक्रोसर्विसेज। असिंक, सुरक्षित और हाई परफॉर्मेंस।",
        icon: "FastAPI",
      },
      {
        title: "मशीन लर्निंग और NLP",
        description: "Python, scikit-learn, spaCy आदि के साथ ML पाइपलाइन, NLP मॉडल और डेटा साइंस।",
        icon: "MLNLP",
      },
      {
        title: "Docker और DevOps",
        description: "Docker, Compose और DevOps बेस्ट प्रैक्टिस के साथ कंटेनराइजेशन, CI/CD और स्केलेबल डिप्लॉयमेंट।",
        icon: "Docker",
      },
      {
        title: "क्लाउड और AWS",
        description: "AWS पर क्लाउड इन्फ्रास्ट्रक्चर की डिप्लॉयमेंट, स्केलिंग और प्रबंधन। EC2, S3, Lambda आदि।",
        icon: "AWS",
      },
      {
        title: "Linux और सिस्टम एडमिन",
        description: "Linux सर्वर प्रबंधन, ऑटोमेशन और स्क्रिप्टिंग विश्वसनीय बैकएंड संचालन के लिए।",
        icon: "Linux",
      },
    ],
  },
  {
    language: "German",
    code: "de",
    title: "Meine technischen Fähigkeiten",
    subtitle: "Ich entwickle robuste, skalierbare Systeme auf verschiedenen Plattformen und in mehreren Sprachen. Hier sind meine Kerntechnologien und Fachgebiete:",
    skills: [
      {
        title: "Android-Entwicklung",
        description: "Native Android-Apps mit Java/Kotlin. Erfahrung mit UI/UX, REST-APIs und Play Store Deployment.",
        icon: "Android",
      },
      {
        title: "Backend-Engineering (FastAPI)",
        description: "Produktionsreife APIs und Microservices in Python mit FastAPI. Asynchron, sicher und leistungsstark.",
        icon: "FastAPI",
      },
      {
        title: "Machine Learning & NLP",
        description: "ML-Pipelines, NLP-Modelle und Data Science mit Python, scikit-learn, spaCy und mehr.",
        icon: "MLNLP",
      },
      {
        title: "Docker & DevOps",
        description: "Containerisierung, CI/CD und skalierbare Deployments mit Docker, Compose und DevOps Best Practices.",
        icon: "Docker",
      },
      {
        title: "Cloud & AWS",
        description: "Bereitstellung, Skalierung und Verwaltung von Cloud-Infrastruktur auf AWS. EC2, S3, Lambda und mehr.",
        icon: "AWS",
      },
      {
        title: "Linux & Systemadministration",
        description: "Linux-Serververwaltung, Automatisierung und Scripting für zuverlässige Backend-Operationen.",
        icon: "Linux",
      },
    ],
  },
]
