/**
 * Comprehensive Translations dictionary for English (en) and Arabic (ar)
 * Covers every page, section, form, button, and dynamic status in the application.
 */

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      contact: "Contact Us",
      login: "Login",
      register: "Register",
      dashboard: "Dashboard",
      profile: "Profile",
      admin: "Admin Panel",
      sellCar: "Sell Your Car",
      logout: "Logout",
    },

    // Common UI elements
    common: {
      aed: "AED",
      loading: "Loading...",
      save: "Save",
      cancel: "Cancel",
      submit: "Submit",
      back: "Back",
      viewDetails: "View Details",
      status: "Status",
      date: "Date",
      actions: "Actions",
      instantCash: "Instant Cash",
      freeTowing: "Free Towing",
      quickOffer: "Quick Offer",
      whatsAppChat: "Chat on WhatsApp",
      callUs: "Call Us Now",
      switchLanguage: "العربية",
      manage: "Manage",
      close: "Close",
      noData: "No records found.",
    },

    // Hero Section
    hero: {
      badge: "Dubai's #1 Scrap & Damaged Car Buyer",
      titleStart: "Sell Your Scrap Car in Dubai for ",
      titleHighlight: "Instant Cash",
      subtitle: "Get the highest guaranteed cash offer for any damaged, broken, accident, or scrap car across UAE. Free same-day towing and hassle-free RTA paperwork handled.",
      ctaPrimary: "Get Instant Cash Offer",
      ctaSecondary: "WhatsApp Quotation",
      stat1Number: "15,000+",
      stat1Label: "Cars Purchased",
      stat2Number: "30 Min",
      stat2Label: "Fastest Towing",
      stat3Number: "100%",
      stat3Label: "Free Paperwork",
    },

    // Services Page
    servicesPage: {
      tag: "WHAT WE DO",
      title: "Premium Services For",
      titleGradient: "Scrap & Damaged Cars",
      subtitle: "We offer hassle-free services for selling your damaged or scrap car. From valuation to free towing and legal paperwork, we handle everything.",
      items: [
        {
          title: "Scrap & Junk Car Buying",
          desc: "Turn your completely dead or scrap car into instant cash. We offer the best scrap metal and salvage rates in the UAE. Our team handles the RTA cancellation process and provides free towing from your location.",
        },
        {
          title: "Accident Damaged Cars",
          desc: "Got into a severe accident? Don't stress over expensive repair quotes. We buy total loss and heavily damaged vehicles as-is. You get a fair market valuation based on salvageable parts.",
        },
        {
          title: "Engine & Transmission Failures",
          desc: "When a car's engine seizes or transmission blows, repairs often exceed the car's value. We specialize in buying cars with major mechanical faults, paying you cash on the spot instead of a repair bill.",
        },
        {
          title: "RTA Failed & Expired Cars",
          desc: "If your car failed the RTA passing inspection and is too costly to fix, or has been sitting with expired registration for years, we will buy it and clear the headache for you.",
        },
      ],
      coverageTitle: "Our Service Coverage",
      coverageSubtitle: "We provide free towing and instant cash services across all 7 Emirates.",
      cities: ["Dubai", "Sharjah", "Ajman", "Abu Dhabi", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
    },

    // About Page
    aboutPage: {
      storyTag: "Our Story",
      titleStart: "Redefining the",
      titleGradient: "Auto Salvage",
      titleEnd: "Industry in UAE.",
      p1: "Founded with a mission to make selling scrap, accidental, and damaged cars transparent, hassle-free, and profitable for vehicle owners across the United Arab Emirates.",
      p2: "We believe that even a totaled car has value. By eliminating middlemen and operating our own dismantling facilities, we ensure you get the absolute best price for your vehicle, paid instantly in cash.",
      ecoBadge: "100% Eco-Friendly",
      stats: [
        { label: "Years Experience", value: "10+" },
        { label: "Happy Clients", value: "5,000+" },
        { label: "Cars Recycled", value: "8,500+" },
        { label: "Awards Won", value: "3" },
      ],
      missionTitle: "Our Mission & Standards",
      missionDesc: "Traditional scrapyards often undercut car owners with aggressive lowballing and surprise towing fees. At ScrapCars Dubai, we built a modern digital valuation model backed by our own salvage dismantling centers in Al Quoz and Sharjah.",
      zeroFeesTitle: "Zero Hidden Fees",
      zeroFeesDesc: "What we quote is what you get. We cover all RTA ownership transfer fees, cancellation fees, and towing charges. You receive the full agreed amount in cash.",
      zeroFeesPoints: ["Free Valuation", "Free Towing", "RTA Fees Covered"],
      greenTitle: "Green Recycling",
      greenDesc: "We are 100% compliant with Dubai Municipality environmental regulations. Fluids are safely drained, usable parts are salvaged, and metal is ethically recycled.",
      greenPoints: ["Safe Fluid Disposal", "Parts Salvaging", "Metal Recycling"],
    },

    // Contact Page
    contactPage: {
      tag: "GET IN TOUCH",
      titleStart: "We're Here To",
      titleGradient: "Help",
      subtitle: "Have questions about selling your scrap car? Need an instant valuation? Reach out to our team 24/7.",
      callTitle: "Call Us Directly",
      whatsAppTitle: "WhatsApp Us",
      whatsAppSubtitle: "Click to Chat (Instant Reply)",
      hoursTitle: "Business Hours",
      hoursDesc: "Open 24/7",
      towingBadge: "Towing available anytime",
      facilityTitle: "Our Dismantling Facility",
      viewMap: "View on Google Maps",
      formTitle: "Send a Message",
      formSubtitle: "Fill out the form below and our team will get back to you within 30 minutes.",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone / WhatsApp Number",
      message: "Your Message",
      messagePlaceholder: "How can we help? Include car details if you want a quote...",
      sendBtn: "Send Message",
    },

    // Auth Pages
    auth: {
      loginTitle: "Welcome Back",
      loginSubtitle: "Login to manage your car listings & view offers",
      emailLabel: "Email Address",
      passwordLabel: "Password",
      confirmPasswordLabel: "Confirm Password",
      passwordMismatch: "Passwords do not match",
      passwordMinLength: "Password must be at least 6 characters",
      loginBtn: "Login",
      loggingIn: "Logging in...",
      noAccount: "Don't have an account?",
      registerLink: "Register",
      registerTitle: "Create Account",
      registerSubtitle: "Register to sell your car and track cash offers",
      fullNameLabel: "Full Name",
      phoneLabel: "Phone / WhatsApp",
      creatingAccount: "Creating account...",
      hasAccount: "Already have an account?",
      loginLink: "Login",
    },

    // User Dashboard
    dashboard: {
      title: "My Dashboard",
      subtitle: "Manage your car listings and track cash offers",
      newPostBtn: "New Car Post",
      noPostsTitle: "No car posts yet",
      noPostsDesc: "Post your first car to get an instant guaranteed cash offer.",
      postFirstCarBtn: "Post Your Car",
      offerLabel: "Cash Offer",
      postedOn: "Posted on",
    },

    // Admin Panel
    admin: {
      panelTitle: "Admin Panel",
      overview: "Dashboard Overview",
      statTotalPosts: "Total Posts",
      statPending: "Pending Review",
      statCompleted: "Completed Deals",
      statTotalUsers: "Total Users",
      carPostsTitle: "Manage Car Posts",
      usersTitle: "Registered Users",
      tableCar: "Car",
      tableStatus: "Status",
      tableOffer: "Offer Price",
      tableDate: "Date",
      tableAction: "Action",
      tableName: "Name",
      tableEmail: "Email",
      tablePhone: "Phone",
      tableRole: "Role",
      tableJoined: "Joined Date",
      postDetailsTitle: "Post Details",
      adminActions: "Admin Actions",
      sendOfferBtn: "Send Offer",
      offerAmountPlaceholder: "Offer Amount (AED)",
      userLabel: "Customer",
      locationLabel: "Location",
      descLabel: "Description",
    },

    // How It Works
    howItWorks: {
      tag: "SIMPLE 4-STEP PROCESS",
      title: "How It Works",
      subtitle: "Selling your scrap or damaged car in the UAE has never been easier. From valuation to instant cash in hand within 24 hours.",
      steps: [
        {
          step: "01",
          title: "Submit Your Car",
          desc: "Fill in your car details, upload photos, and pinpoint your pickup location in Dubai or UAE.",
        },
        {
          step: "02",
          title: "Get Cash Offer",
          desc: "Our valuation experts review your vehicle condition and send you a top guaranteed cash offer.",
        },
        {
          step: "03",
          title: "Accept & Confirm",
          desc: "Review and accept the cash offer online or via WhatsApp with one simple tap.",
        },
        {
          step: "04",
          title: "Free Towing & Cash",
          desc: "Our recovery truck collects your car anywhere in UAE and hands over instant cash on the spot.",
        },
      ],
    },

    // Why Choose Us
    whyChooseUs: {
      tag: "WHY SCRAPCARS DUBAI",
      title: "The Most Trusted Car Scrapping Service in UAE",
      subtitle: "We eliminate the stress of selling scrap, damaged, or unwanted vehicles with transparent pricing and zero hidden fees.",
      features: [
        {
          title: "Best Price Guarantee",
          desc: "We offer top market rates based on real scrap metal and recyclable parts value.",
        },
        {
          title: "Free UAE-wide Towing",
          desc: "Same-day free recovery and towing from Dubai, Sharjah, Abu Dhabi, and all Emirates.",
        },
        {
          title: "Instant Cash On The Spot",
          desc: "Get paid on pickup in cash or instant bank transfer before the car leaves your sight.",
        },
        {
          title: "RTA Paperwork Handled",
          desc: "We manage official RTA deregistration and scrap certificates completely free.",
        },
        {
          title: "Any Condition Accepted",
          desc: "Running, dead engine, total loss, failed RTA inspection, or flooded — we buy them all.",
        },
        {
          title: "24/7 Rapid Response",
          desc: "Fast quotes within 15 minutes and available round the clock on WhatsApp.",
        },
      ],
    },

    // CTA Section
    cta: {
      tag: "READY TO SELL?",
      title: "Ready to Sell Your Car?",
      subtitle: "Get your instant cash offer today. We buy any car, in any condition, and offer free pickup anywhere in Dubai & UAE.",
      btnSell: "Sell Your Car Now",
      btnWhatsApp: "Chat with an Appraiser",
    },

    // Footer
    footer: {
      description: "Dubai's premier scrap car buying service. We buy scrap, accident-damaged, dead engine, and end-of-life vehicles across all 7 Emirates with free recovery and instant cash.",
      quickLinks: "Quick Links",
      legal: "Legal",
      contactInfo: "Contact Us",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved.",
      location: "Al Quoz Industrial Area 3, Dubai, UAE",
    },

    // Status Badges
    statuses: {
      PENDING: "Pending Review",
      UNDER_REVIEW: "Under Review",
      OFFER_SENT: "Offer Sent",
      ACCEPTED: "Offer Accepted",
      PICKUP_SCHEDULED: "Pickup Scheduled",
      COMPLETED: "Completed",
      CANCELLED: "Cancelled",
    },

    // Car Conditions
    conditions: {
      scrap: "Complete Scrap / Total Loss",
      damaged: "Accident Damaged",
      engine_dead: "Engine / Transmission Dead",
      rta_failed: "Failed RTA / Expired Registration",
      running_old: "Old but Running",
      flood: "Flood / Water Damaged",
    },

    // Sell Car / New Post Form
    sellForm: {
      pageTitle: "Submit Your Scrap Car for Cash",
      pageSubtitle: "Fill in the car details below to receive a guaranteed cash offer within 15 minutes.",
      brandLabel: "Car Make / Brand",
      brandPlaceholder: "Select Brand (e.g. Toyota, Nissan)",
      modelLabel: "Car Model",
      modelPlaceholder: "e.g. Camry, Patrol, Civic",
      yearLabel: "Year of Manufacture",
      yearPlaceholder: "e.g. 2014",
      conditionLabel: "Vehicle Condition",
      locationLabel: "Pickup Location / Area in UAE",
      locationPlaceholder: "e.g. Al Barsha 1, Dubai or Industrial Area 6, Sharjah",
      descLabel: "Description / Damage Details (Optional)",
      descPlaceholder: "Describe mechanical issues, missing parts, accident details, etc.",
      photosLabel: "Car Photos (Recommended for best offer)",
      photosHelp: "Upload up to 5 clear photos (Front, Rear, Sides, Engine, Interior)",
      submitBtn: "Submit for Cash Offer",
      submitting: "Uploading & Submitting...",
      successTitle: "Submission Successful!",
      successDesc: "Your car has been submitted. Our valuation team is reviewing it and will send you a cash offer shortly.",
      chatOnWhatsapp: "Speed up valuation on WhatsApp",
    },

    // Post Details Page
    postDetails: {
      offerReceived: "Cash Offer Received!",
      offerSubtitle: "Our team has evaluated your vehicle. Please review the guaranteed offer below:",
      offerAmount: "Guaranteed Offer Amount",
      acceptOfferBtn: "Accept Offer & Schedule Pickup",
      rejectOfferBtn: "Decline Offer",
      acceptSuccess: "You have accepted the offer! Our logistics team will call you to schedule pickup.",
      carDetails: "Vehicle Specifications",
      makeModel: "Make & Model",
      year: "Year",
      condition: "Condition",
      location: "Pickup Location",
      description: "Description",
      photos: "Attached Photos",
      timeline: "Process Timeline",
      needHelp: "Need help or want to negotiate?",
    },
  },

  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      contact: "اتصل بنا",
      login: "تسجيل الدخول",
      register: "إنشاء حساب",
      dashboard: "لوحة التحكم",
      profile: "الملف الشخصي",
      admin: "لوحة الإدارة",
      sellCar: "بيع سيارتك السكراب",
      logout: "تسجيل الخروج",
    },

    // Common UI elements
    common: {
      aed: "درهم",
      loading: "جاري التحميل...",
      save: "حفظ",
      cancel: "إلغاء",
      submit: "إرسال",
      back: "رجوع",
      viewDetails: "عرض التفاصيل",
      status: "الحالة",
      date: "التاريخ",
      actions: "الإجراءات",
      instantCash: "كاش فوري",
      freeTowing: "ونش وسحب مجاني",
      quickOffer: "عرض سعر سريع",
      whatsAppChat: "تواصل عبر واتساب",
      callUs: "اتصل بنا الآن",
      switchLanguage: "English",
      manage: "إدارة",
      close: "إغلاق",
      noData: "لا توجد بيانات حالياً.",
    },

    // Hero Section
    hero: {
      badge: "الخيار الأول لشراء سيارات السكراب والحوادث في دبي",
      titleStart: "بع سيارتك السكراب أو المعطلة في دبي بـ ",
      titleHighlight: "كاش فوري بأعلى سعر",
      subtitle: "احصل على أعلى تقييم نقدي مضمون لأي سيارة سكراب، مصدومة، معطلة أو منتهية الصلاحية في جميع أنحاء الإمارات مع ونش سحب مجاني وتخليص فوري لإجراءات المرور RTA.",
      ctaPrimary: "احصل على عرض سعر فوري",
      ctaSecondary: "طلب تسعير عبر واتساب",
      stat1Number: "+15,000",
      stat1Label: "سيارة تم شراؤها",
      stat2Number: "30 دقيقة",
      stat2Label: "أسرع وصول للونش",
      stat3Number: "%100",
      stat3Label: "إسقاط لوحات مجاني",
    },

    // Services Page
    servicesPage: {
      tag: "ما نقدمه لك",
      title: "خدمات متميزة لشراء",
      titleGradient: "السيارات السكراب والتالفة",
      subtitle: "نقدم أسرع وأسهل خدمة لبيع سيارتك المعطلة أو السكراب. من التقييم إلى السحب المجاني وإسقاط اللوحات، نتكفل بكل شيء.",
      items: [
        {
          title: "شراء سيارات السكراب والشطب",
          desc: "حول سيارتك التالفة أو السكراب إلى كاش فوري. نقدم أعلى أسعار المعادن وإعادة التدوير في الإمارات ونتولى إجراءات المرور والسحب المجاني من موقعك.",
        },
        {
          title: "شراء سيارات الحوادث والمصدومة",
          desc: "تعرضت لحادث مروري وتكاليف التصليح مرتفعة؟ نشتري السيارات الملغية والمصدومة بحالتها الراهنة بأعلى تقييم لقطع الغيار الصالحة.",
        },
        {
          title: "سيارات الأعطال الميكانيكية والماكينة",
          desc: "إذا تعطلت الماكينة أو الجير وتجاوزت تكلفة الصيانة قيمة السيارة، نحن نشتريها وندفع لك كاش فوراً بدلاً من دفع فواتير صيانة باهظة.",
        },
        {
          title: "السيارات الراسبة بالفحص ومنتهية الملكية",
          desc: "سيارتك لم تجتز فحص RTA أو منتهية الملكية منذ سنوات؟ نخلصك من عبء الغرامات وتجديد الملكية ونشتريها مع تسقيط اللوحات رسمياً.",
        },
      ],
      coverageTitle: "نطاق خدماتنا في الإمارات",
      coverageSubtitle: "نوفر خدمة الونش والسحب المجاني والدفع الكاش في كافة الإمارات السبع.",
      cities: ["دبي", "الشارقة", "عجمان", "أبوظبي", "رأس الخيمة", "الفجيرة", "أم القيوين"],
    },

    // About Page
    aboutPage: {
      storyTag: "قصتنا",
      titleStart: "إعادة تعريف قطاع",
      titleGradient: "تشليح وسكراب السيارات",
      titleEnd: "في دولة الإمارات.",
      p1: "تأسست شركتنا بهدف جعل عملية بيع سيارات السكراب، الحوادث، والأعطال عملية شفافة وسريعة ومربحة لجميع ملاك السيارات في الإمارات.",
      p2: "نحن نؤمن أن لكل سيارة قيمة حتى لو كانت تالفة كلياً. من خلال امتلاكنا لمراكزنا الخاصة لتشليح وتدوير السيارات في القوز والشارقة بدون وسطاء، نضمن لك أعلى سعر كاش فوري في يدك.",
      ecoBadge: "%100 صديق للبيئة",
      stats: [
        { label: "سنوات خبرة", value: "+10" },
        { label: "عميل راضٍ", value: "+5,000" },
        { label: "سيارة تم تدويرها", value: "+8,500" },
        { label: "جوائز التميز", value: "3" },
      ],
      missionTitle: "رسالتنا ومعاييرنا",
      missionDesc: "عادة ما تستغل ساحات السكراب التقليدية أصحاب السيارات بأسعار بخسة ورسوم سحب مفاجئة. في ScrapCars دبي أنشأنا نظام تقييم رقمي حديث مدعوماً بمراكز تفكيك وإعادة تدوير معتمدة.",
      zeroFeesTitle: "بدون أي رسوم خفية",
      zeroFeesDesc: "السعر المتفق عليه هو ما تستلمه بالكامل. نتحمل كافة رسوم إسقاط اللوحات، معاملات RTA، وتكاليف ونش السحب.",
      zeroFeesPoints: ["تقييم مجاني فوري", "ونش سحب مجاني", "تحمل رسوم المرور بالكامل"],
      greenTitle: "إعادة تدوير بيئي آمن",
      greenDesc: "نلتزم بنسبة 100% بالمعايير البيئية لبلدية دبي؛ تفريغ الزيوت والسوائل بطرق آمنة، فرز قطع الغيار الصالحة، وإعادة تدوير الهياكل المعدنية.",
      greenPoints: ["تفريغ آمن للزيوت", "استرداد القطع الصالحة", "تدوير المعادن"],
    },

    // Contact Page
    contactPage: {
      tag: "تواصل معنا",
      titleStart: "نحن هنا من أجل",
      titleGradient: "خدمتك",
      subtitle: "لديك استفسار حول بيع سيارتك السكراب؟ تحتاج تقييم فوري؟ فريقنا متاح لخدمتك على مدار الساعة 24/7.",
      callTitle: "اتصل بنا مباشرة",
      whatsAppTitle: "راسلنا على واتساب",
      whatsAppSubtitle: "اضغط للمحادثة (رد فوري)",
      hoursTitle: "ساعات العمل",
      hoursDesc: "متاحون 24/7",
      towingBadge: "الونش متاح في أي وقت",
      facilityTitle: "موقع مراكز التفكيك والتشليح",
      viewMap: "عرض الموقع على خرائط جوجل",
      formTitle: "أرسل لنا رسالة",
      formSubtitle: "املأ النموذج أدناه وسيقوم فريق التسعير بالتواصل معك خلال 30 دقيقة.",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف / واتساب",
      message: "نص الرسالة",
      messagePlaceholder: "كيف يمكننا مساعدتك؟ أرفق تفاصيل السيارة إذا كنت تطلب تسعيراً...",
      sendBtn: "إرسال الرسالة",
    },

    // Auth Pages
    auth: {
      loginTitle: "مرحباً بك مجدداً",
      loginSubtitle: "سجل الدخول لإدارة سياراتك ومتابعة عروض الأسعار",
      emailLabel: "البريد الإلكتروني",
      passwordLabel: "كلمة المرور",
      confirmPasswordLabel: "تأكيد كلمة المرور",
      passwordMismatch: "كلمات المرور غير متطابقة",
      passwordMinLength: "يجب أن تكون كلمة المرور 6 أحرف على الأقل",
      loginBtn: "تسجيل الدخول",
      loggingIn: "جاري الدخول...",
      noAccount: "ليس لديك حساب؟",
      registerLink: "إنشاء حساب جديد",
      registerTitle: "إنشاء حساب جديد",
      registerSubtitle: "سجل حسابك لعرض سيارتك واستلام عروض الكاش",
      fullNameLabel: "الاسم الكامل",
      phoneLabel: "رقم الهاتف / واتساب",
      creatingAccount: "جاري إنشاء الحساب...",
      hasAccount: "لديك حساب بالفعل؟",
      loginLink: "تسجيل الدخول",
    },

    // User Dashboard
    dashboard: {
      title: "لوحة التحكم الخاصة بي",
      subtitle: "إدارة إعلانات السيارات ومتابعة عروض الكاش المستلمة",
      newPostBtn: "إضافة سيارة جديدة",
      noPostsTitle: "لا توجد طلبات بعد",
      noPostsDesc: "اعرض سيارتك الأولى الآن لتصلك أفضل تسعيرة كاش مضمونة.",
      postFirstCarBtn: "اعرض سيارتك الآن",
      offerLabel: "عرض السعر",
      postedOn: "تاريخ الطلب",
    },

    // Admin Panel
    admin: {
      panelTitle: "لوحة تحكم الإدارة",
      overview: "نظرة عامة على الإحصائيات",
      statTotalPosts: "إجمالي السيارات",
      statPending: "قيد المراجعة",
      statCompleted: "الصفقات المكتملة",
      statTotalUsers: "إجمالي المستخدمين",
      carPostsTitle: "إدارة طلبات السيارات",
      usersTitle: "المستخدمين المسجلين",
      tableCar: "السيارة",
      tableStatus: "الحالة",
      tableOffer: "قيمة العرض",
      tableDate: "التاريخ",
      tableAction: "الإجراء",
      tableName: "الاسم",
      tableEmail: "البريد الإلكتروني",
      tablePhone: "الهاتف",
      tableRole: "الصلاحية",
      tableJoined: "تاريخ التسجيل",
      postDetailsTitle: "تفاصيل الطلب",
      adminActions: "إجراءات الإدارة",
      sendOfferBtn: "إرسال العرض",
      offerAmountPlaceholder: "قيمة العرض (بالدرهم)",
      userLabel: "العميل",
      locationLabel: "الموقع",
      descLabel: "الوصف",
    },

    // How It Works
    howItWorks: {
      tag: "خطوات بسيطة وسريعة",
      title: "كيف تعمل الخدمة؟",
      subtitle: "بيع سيارتك السكراب أو المعطلة في الإمارات أصبح أسهل من أي وقت مضى. من التقييم إلى استلام الكاش خلال 24 ساعة.",
      steps: [
        {
          step: "01",
          title: "أدخل بيانات سيارتك",
          desc: "املأ بيانات السيارة، ارفع الصور، وحدد موقع تواجد السيارة في دبي أو الإمارات.",
        },
        {
          step: "02",
          title: "استلم عرض السعر",
          desc: "يقوم خبراؤنا بفحص حالة السيارة وإرسال أفضل عرض سعر نقدي مضمون لك.",
        },
        {
          step: "03",
          title: "الموافقة والتأكيد",
          desc: "وافق على العرض بضغطة زر واحدة عبر لوحة التحكم أو مباشرة عبر واتساب.",
        },
        {
          step: "04",
          title: "سحب مجاني واستلام الكاش",
          desc: "يصل الونش لموقعك لسحب السيارة مجاناً وتسليمك المبلغ نقداً فوراً في يدك.",
        },
      ],
    },

    // Why Choose Us
    whyChooseUs: {
      tag: "لماذا تختار ScrapCars دبي؟",
      title: "الخدمة الأكثر موثوقية لشراء سيارات السكراب في الإمارات",
      subtitle: "نخلصك من عناء بيع السيارات التالفة أو المعطلة بأسعار شفافة وبدون أي رسوم خفية.",
      features: [
        {
          title: "ضمان أعلى سعر في السوق",
          desc: "نقدم أعلى الأسعار وفقاً للقيمة الحقيقية لقطع الغيار والمعادن القابلة للتدوير.",
        },
        {
          title: "ونش سحب مجاني لجميع الإمارات",
          desc: "سحب مجاني في نفس اليوم من دبي، الشارقة، أبوظبي، وجميع الإمارات الأخرى.",
        },
        {
          title: "دفع كاش فوري عند الاستلام",
          desc: "استلم المبلغ نقداً أو تحويل بنكي فوري عند استلام السيارة وقبل تحركها.",
        },
        {
          title: "إسقاط اللوحات وتخليص المرور مجاناً",
          desc: "نتولى كافة إجراءات هيئة الطرق والمواصلات RTA وشهادات السكراب بدون أي تكلفة.",
        },
        {
          title: "نشتري جميع الحالات",
          desc: "شغالة، ماكينة مخبطة، سيارات حوادث ملغية، راسبة فحص، أو غارقة بالسيول.",
        },
        {
          title: "خدمة واستجابة سريعة 24/7",
          desc: "تسعير خلال 15 دقيقة فقط وتواجد دائم على واتساب لخدمتك على مدار الساعة.",
        },
      ],
    },

    // CTA Section
    cta: {
      tag: "جاهز لبيع سيارتك؟",
      title: "جاهز لبيع سيارتك الآن؟",
      subtitle: "احصل على أعلى تقييم نقدي فوري اليوم. نشتري أي سيارة بأي حالة مع سحب مجاني لجميع مناطق دبي والإمارات.",
      btnSell: "بع سيارتك الآن",
      btnWhatsApp: "تحدث مع خبير التسعير",
    },

    // Footer
    footer: {
      description: "الخدمة الرائدة لشراء سيارات السكراب في دبي. نشتري سيارات الحوادث، الأعطال الميكانيكية والسيارات التالفة في الإمارات السبع مع سحب مجاني ودفع كاش فوري.",
      quickLinks: "روابط سريعة",
      legal: "الشروط والسياسات",
      contactInfo: "تواصل معنا",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      rights: "جميع الحقوق محفوظة.",
      location: "منطقة القوز الصناعية 3، دبي، الإمارات العربية المتحدة",
    },

    // Status Badges
    statuses: {
      PENDING: "قيد المراجعة",
      UNDER_REVIEW: "جاري الفحص",
      OFFER_SENT: "تم إرسال العرض",
      ACCEPTED: "تم قبول العرض",
      PICKUP_SCHEDULED: "تم جدولة السحب",
      COMPLETED: "مكتمل",
      CANCELLED: "ملغي",
    },

    // Car Conditions
    conditions: {
      scrap: "سكراب كامل / شطب كلي",
      damaged: "سيارة حادث مصدومة",
      engine_dead: "ماكينة / جير معطل",
      rta_failed: "راسبة فحص RTA / ملكية منتهية",
      running_old: "قديمة لكن شغالة",
      flood: "غارقة / تالفة بالمياه",
    },

    // Sell Car / New Post Form
    sellForm: {
      pageTitle: "اعرض سيارتك السكراب واستلم كاش",
      pageSubtitle: "املأ بيانات السيارة أدناه لتصلك أفضل تسعيرة نقدية خلال 15 دقيقة.",
      brandLabel: "ماركة / نوع السيارة",
      brandPlaceholder: "اختر الماركة (مثال: تويوتا، نيسان)",
      modelLabel: "موديل السيارة",
      modelPlaceholder: "مثال: كامري، باترول، سيفيك",
      yearLabel: "سنة الصنع",
      yearPlaceholder: "مثال: 2014",
      conditionLabel: "حالة السيارة",
      locationLabel: "مكان تواجد السيارة في الإمارات",
      locationPlaceholder: "مثال: البرشاء 1، دبي أو الصناعية 6، الشارقة",
      descLabel: "وصف الأعطال أو الأضرار (اختياري)",
      descPlaceholder: "وضح أي مشاكل بالماكينة، قطع ناقصة، أو تفاصيل الحادث...",
      photosLabel: "صور السيارة (ينصح بإرفاقها للحصول على أعلى سعر)",
      photosHelp: "ارفع حتى 5 صور واضحة (الأمام، الخلف، الجوانب، الماكينة، الداخلية)",
      submitBtn: "إرسال لطلب التسعير",
      submitting: "جاري رفع الصور والإرسال...",
      successTitle: "تم إرسال الطلب بنجاح!",
      successDesc: "تم تسجيل طلبك بنجاح. فريق التقييم يراجع بيانات السيارة حالياً وسيرسل لك عرض السعر قريباً.",
      chatOnWhatsapp: "تسريع التقييم عبر واتساب مباشرة",
    },

    // Post Details Page
    postDetails: {
      offerReceived: "وصلك عرض سعر نقدي!",
      offerSubtitle: "قام فريقنا بتقييم سيارتك. يرجى مراجعة العرض النقدي المضمون أدناه:",
      offerAmount: "قيمة العرض المضمونة",
      acceptOfferBtn: "قبول العرض وجدولة السحب المجاني",
      rejectOfferBtn: "رفض العرض",
      acceptSuccess: "تم قبول العرض بنجاح! سيتصل بك فريق السحب لترتيب موعد الاستلام.",
      carDetails: "مواصفات السيارة",
      makeModel: "الماركة والموديل",
      year: "سنة الصنع",
      condition: "الحالة",
      location: "مكان السحب",
      description: "الوصف",
      photos: "الصور المرفقة",
      timeline: "مراحل الطلب",
      needHelp: "هل تحتاج مساعدة أو ترغب بالتفاوض؟",
    },
  },
};
