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
      ctaPrimary: "Sell Your Car",
      ctaSecondary: "WhatsApp Quotation",
      stat1Number: "15,000+",
      stat1Label: "Cars Purchased",
      stat2Number: "30 Min",
      stat2Label: "Fastest Towing",
      stat3Number: "100%",
      stat3Label: "Free Paperwork",
    },

    // Services Page & Homepage Services Section
    servicesPage: {
      tag: "OUR CORE SERVICES",
      title: "Comprehensive Car Buying &",
      titleGradient: "Salvage Solutions",
      subtitle: "Professional car scrapping and salvage solutions tailored for UAE vehicle owners. From lightning-fast digital valuations to certified eco-friendly recycling.",
      items: [
        {
          title: "Instant Car Scrap Quote",
          badge: "Lightning Response",
          desc: "An instant online quote for your scrap or damaged car actually means instant. Simply submit vehicle photos and condition online or via WhatsApp to receive a transparent, guaranteed cash quotation in minutes without waiting.",
        },
        {
          title: "Best Price Offers",
          badge: "Highest Payout",
          desc: "Excellent prices paid for broken, defective, scrap, or unwanted automobiles. Operating our own direct salvage facilities in Dubai and Sharjah means no middlemen deductions — our buyout price is guaranteed upon approval.",
        },
        {
          title: "Specialist UAE Salvage",
          badge: "Free 2-4 Hr Recovery",
          desc: "The go-to salvage company when your car is too good to wreck but too expensive to fix. Our fleet of heavy-duty recovery flatbeds dispatches anywhere in the UAE, scheduling doorstep collection within 2 to 4 hours completely free.",
        },
        {
          title: "Trusted & Certified Recyclers",
          badge: "100% RTA Cleared",
          desc: "We cooperate with authorized facilities compliant with Dubai Municipality environmental regulations. Fluids are safely disposed of, parts salvaged, and your official RTA Certificate of Destruction or ownership cancellation is processed legally.",
        },
      ],
      coverageTitle: "Our Service Coverage",
      coverageSubtitle: "We provide free doorstep towing and instant cash handover across all 7 Emirates.",
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

    // Customer Reviews & Social Proof
    reviews: {
      tag: "Verified UAE Customer Stories",
      titleStart: "What UAE Car Sellers ",
      titleHighlight: "Say About Us",
      subtitle: "Join over 15,000 satisfied car owners who turned their scrap, damaged, and accidental cars into instant cash across Dubai & the UAE.",
      googleRating: "4.9 / 5 Rating on Google Reviews",
      verifiedSeller: "Verified UAE Seller",
      badgeTitle: "100% Guaranteed Cash & Free Towing",
      items: [
        {
          name: "Tariq Al-Nuaimi",
          location: "Dubai Marina, Dubai",
          car: "2019 Lexus ES 350 (Flood Damaged)",
          rating: 5,
          date: "2 days ago",
          comment: "My Lexus suffered heavy water damage during the recent rains. Most scrap yards offered peanut rates. ScrapCars Dubai came with a recovery flatbed within 90 minutes and paid cash on the spot. RTA deregistration was completely taken care of!",
        },
        {
          name: "Sarah Jenkins",
          location: "Al Barsha, Dubai",
          car: "2014 Honda Civic (Expired Registration)",
          rating: 5,
          date: "1 week ago",
          comment: "I had a car sitting in my villa parking with expired registration for almost 2 years. I was worried about accumulated fines. Their team sorted out the RTA clearance smoothly and towed it away for free with instant cash handover.",
        },
        {
          name: "Bilal Farooqi",
          location: "Industrial Area 3, Sharjah",
          car: "2017 Nissan Patrol (Total Loss Collision)",
          rating: 5,
          date: "2 weeks ago",
          comment: "After an unfortunate highway accident, insurance declared it a total loss. ScrapCars gave me the highest salvage valuation by far compared to local Sharjah scrap yards. Professional, transparent, and prompt WhatsApp response.",
        },
        {
          name: "Hamad Al-Ketbi",
          location: "Mussafah, Abu Dhabi",
          car: "2015 BMW 528i (Blown Engine)",
          rating: 5,
          date: "3 weeks ago",
          comment: "Engine seized and the garage quoted 18,000 AED to replace it. Decided to sell it as scrap instead. The team picked it up directly from the workshop in Abu Dhabi without any towing fee. Super seamless transaction!",
        },
      ],
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
      ctaPrimary: "بيع سيارتك",
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
      tag: "خدماتنا الأساسية",
      title: "حلول متكاملة لشراء و",
      titleGradient: "تشليح وسكراب السيارات",
      subtitle: "خدمات احترافية متكاملة لمالكي السيارات في الإمارات؛ بدءاً من التقييم الفوري وأعلى عائد كاش، وحتى ونش السحب المجاني وإسقاط اللوحات المعتمد.",
      items: [
        {
          title: "تسعيرة فورية لسيارات السكراب",
          badge: "تقييم فوري",
          desc: "تقييم فوري حقيقي لسيارتك التالفة أو السكراب. ما عليك سوى إرسال صور وتفاصيل السيارة عبر الموقع أو واتساب للحصول على تسعيرة كاش مضمونة خلال دقائق معدودة دون أي انتظار.",
        },
        {
          title: "أفضل عروض الأسعار النقدية",
          badge: "أعلى سعر كاش",
          desc: "ندفع أفضل الأسعار للسيارات المعطلة، القديمة، أو التالفة كلياً. بفضل امتلاكنا لمرافق التشليح الخاصة في دبي والشارقة دون وسطاء، نضمن لك الحصول على أعلى قيمة سوقية ممكنة.",
        },
        {
          title: "خدمات السحب والتشليح المتخصصة",
          badge: "سحب مجاني 2-4 ساعات",
          desc: "وجهتك الأولى عندما تكون تكلفة إصلاح السيارة أعلى من قيمتها. أسطول شاحنات الونش لدينا جاهز لنقل سيارتك من أمام منزلك أو الورشة في أي مكان بالإمارات مجاناً خلال ساعتين إلى 4 ساعات.",
        },
        {
          title: "إعادة تدوير معتمدة وموثوقة",
          badge: "إسقاط لوحات رسمي 100%",
          desc: "نلتزم بنسبة 100% بالمعايير البيئية لبلدية دبي. يتم تفريغ السوائل بأمان، إعادة تدوير المعادن، وإنهاء كافة معاملات إسقاط اللوحات المرورية لدى هيئة الطرق والمواصلات (RTA) بشكل قانوني وسليم.",
        },
      ],
      coverageTitle: "نطاق تغطية خدماتنا في الإمارات",
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

    // Customer Reviews & Social Proof (Arabic)
    reviews: {
      tag: "تجارب العملاء الموثقة",
      titleStart: "ماذا يقول عملاؤنا في ",
      titleHighlight: "الإمارات عنا",
      subtitle: "انضم إلى أكثر من 15,000 مالك سيارة باعوا سياراتهم السكراب والمتضررة وحصلوا على كاش فوري في دبي وجميع أنحاء الإمارات.",
      googleRating: "تقييم 4.9 / 5 على تقييمات جوجل",
      verifiedSeller: "بائع موثق في الإمارات",
      badgeTitle: "دفع نقدي فوري 100% وسحب مجاني",
      items: [
        {
          name: "طارق النعيمي",
          location: "دبي مارينا، دبي",
          car: "لكزس ES 350 موديل 2019 (أضرار غرق ومياه)",
          rating: 5,
          date: "منذ يومين",
          comment: "تضررت سيارتي اللكزس بشدة جراء مياه الأمطار، ومعظم محلات السكراب قدمت أسعاراً بخسة. فريق سكراب كارز دبي وصل مع ونش السحب خلال 90 دقيقة واستلمت المبلغ كاش فوراً مع إسقاط اللوحات وإجراءات المرور بالكامل!",
        },
        {
          name: "سارة جينكينز",
          location: "البرشاء، دبي",
          car: "هوندا سيفيك موديل 2014 (ملكية منتهية)",
          rating: 5,
          date: "منذ أسبوع",
          comment: "كانت السيارة متوقفة في مواقف الفيلا مع ملكية منتهية لأكثر من عامين وكنت قلقة من الغرامات. قام الفريق بتسوية أوراق المرور ونقل السيارة بسحب مجاني واستلام نقدي دون أي تعقيدات.",
        },
        {
          name: "بلال فاروقي",
          location: "المنطقة الصناعية 3، الشارقة",
          car: "نيسان باترول موديل 2017 (شطب حادث كلي)",
          rating: 5,
          date: "منذ أسبوعين",
          comment: "بعد حادث على الطريق السريع قررت شركة التأمين شطب السيارة كلياً. قدموا لي أعلى سعر سكراب مقارنة بسوق الشارقة مع احترافية عالية وسرعة في الرد عبر واتساب.",
        },
        {
          name: "حمد الكتبي",
          location: "مصفح، أبوظبي",
          car: "بي إم دبليو الفئة الخامسة 2015 (عطل محرك)",
          rating: 5,
          date: "منذ 3 أسابيع",
          comment: "تعطل المحرك وطلب الكراج 18,000 درهم للإصلاح. قررت بيعها كسكراب، وتم استلام السيارة من باب الكراج في أبوظبي مجاناً واستلام الكاش فوراً. خدمة ممتازة ومريحة جداً!",
        },
      ],
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
