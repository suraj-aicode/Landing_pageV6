document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS animation library
  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }

  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Toggle navbar on mobile
  document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("navLinks").classList.toggle("show");
  });

  // ========================
  // 🌐 Language Translation
  // ========================
  const translations = {
    mr: {
      home: "मुख्य पृष्ठ",
      contact: "संपर्क करा",
      about: "आमच्याबद्दल",

      info1:
        "वाहा मोबिलिटी भारताच्या विविध आणि आव्हानात्मक रस्त्यांच्या परिस्थितीसाठी खास डिझाइन केलेली मजबूत, भूभाग-अभियांत्रिकी केलेली इलेक्ट्रिक दुचाकी तयार करते. मजबूत चेसिस डिझाइन, उंच ग्राउंड क्लीयरन्स, मॉड्युलर सीट आणि फ्लोअरबोर्ड स्पेस आणि विश्वासार्ह बॅटरी प्रणालीसह आमची ई-वाहने कठीण रस्ते, जड मालवाहतूक आणि दीर्घकालीन कामकाज सहजतेने हाताळण्यासाठी डिझाइन केली गेली आहेत, आणि त्याचवेळी वापरकर्त्यांसाठी कमी खर्चात उपलब्ध आहेत.",
      info2: "आमचे प्रमुख क्षेत्र:",
      sector1: "मॉड्युलर आर्किटेक्चर",
      sector2: "भूभागासाठी तयार व्यासपीठ",
      sector3: "सुलभ देखभाल आणि अपटाइम",
      sector4: "कमी चालू खर्च",
      sector5: "मजबूत आणि टिकाऊ चेसिस",
      sector6: "स्लिम तंत्रज्ञान",
      info3:
        "वाहतुकीपलीकडे, आमची वाहने कृषी, लॉजिस्टिक्स आणि ग्रामीण प्रवासासारख्या वैयक्तिक आणि उपजीविकेच्या वापरांना समर्थन देऊन समुदायांना सक्षम करतात. टिकाऊपणा, अनुकूलता आणि परवडणारी किंमत यांचे संयोजन करून, वाहा मोबिलिटी शाश्वत उपाय उपलब्ध करते, जे नावीन्य आणि सहज उपलब्धतेमधील दरी कमी करते आणि इलेक्ट्रिक वाहनांचा स्वीकार देशातील प्रत्येक बाजारपेठेत पोहोचवते.",
      info4:
        "भागीदारी संधींसाठी किंवा अधिक माहितीसाठी, कृपया आम्हाला info@vahamobility.com वर संपर्क करा किंवा आमच्या संपर्क फॉर्मद्वारे संदेश द्या.",

      section2_info1:
        "वाहा मोबिलिटी भारतातील फ्लीट ऑपरेटरसाठी डिझाइन केलेल्या मजबूत, साध्या आणि मॉड्युलर इलेक्ट्रिक दुचाकी उपलब्ध करून इलेक्ट्रिक मोबिलिटीमध्ये आघाडी घेण्याचे स्वप्न पाहते. आमचे लक्ष लॉजिस्टिक्स, गिग-इकॉनॉमी रायडर्स आणि शहरी फ्लीट मोबिलिटीच्या अनोख्या गरजांसाठी स्केलेबल उपाय प्रदान करण्यावर आहे.",
      section2_info2: "आमचे प्रमुख क्षेत्र:",
      section2_info3:
        "टिकाऊपणा, कमी चालू खर्च आणि सुलभ देखभाल यासाठी डिझाइन केलेल्या व्यासपीठासह, आम्ही पारंपरिक पेट्रोल फ्लीट्सची जागा स्वच्छ, कार्यक्षम आणि विश्वासार्ह इलेक्ट्रिक वाहनांनी घेण्याचे उद्दिष्ट ठेवले आहे. तंत्रज्ञानाच्या पलीकडे, वाहा स्थानिक समुदायांना सक्षम करण्यास, शाश्वत उपजीविका निर्माण करण्यास आणि नवकल्पना देशभर सहज उपलब्ध व परवडणारी राहावी यासाठी वचनबद्ध आहे.",
      section2_info4:
        "भागीदारी संधींसाठी किंवा अधिक माहितीसाठी, कृपया आम्हाला info@vahamobility.com वर संपर्क करा किंवा आमच्या संपर्क फॉर्मद्वारे संदेश द्या.",

      // Section 2 (cards)
      "electrification-title": "विद्युतीकरण",
      "electrification-text":
        "आमच्या नवीनतम इलेक्ट्रिक ड्राइव सिस्टीम्ससह कार्यक्षमता, कार्यप्रदर्शन आणि शाश्वतता अनुभवून घ्या.",
      "maintenance-title": "देखभाल व दुरुस्ती",
      "maintenance-text":
        "तुमच्या दोन-चाकी वाहनासाठी व्यावसायिक देखभाल आणि दुरुस्ती सेवा, सर्वोत्तम कार्यप्रदर्शन सुनिश्चित करण्यासाठी.",
      "profile-title": "प्रोफाइल व बिलिंग",
      "profile-text":
        "तुमचे खाते व्यवस्थापित करा, सदस्यता अपडेट करा आणि तुमच्या बिलिंग माहितीवर सहज प्रवेश करा.",

      // Footer
      footer_title: "वाहा मोबिलिटी",
      footer_tagline:
        "साधेपणा आणि तंत्रज्ञानाद्वारे चांगल्या उद्याच्या दृष्टीने शाश्वत उपाय निर्माण करणे.",
      quick_links: "त्वरित दुवे",
      contact_info: "संपर्क माहिती",
      privacy: "गोपनीयता धोरण",
      terms: "सेवेचे अटी",
      cookies: "कुकीज",
      copyright: "© 2025 वाहा मोबिलिटी. सर्व हक्क राखीव.",
      back: "वर जा",
    },
    en: {
      home: "Home",
      contact: "Contact Us",
      about: "About Us",

      info1:
        "VAHA MOBILITY focuses on building rugged, terrain-engineered electric two-wheelers designed specifically for India’s diverse and challenging road conditions. With reinforced chassis design, high ground clearance, modular seat and floorboard space, and reliable battery systems, our EVs are engineered to handle rough terrains, heavy loads, and long operating hours while keeping costs low for users.",
      info2: "Our core sectors include:",
      sector1: "Modular Architecture",
      sector2: "Terrain road ready platform",
      sector3: "Easy Serviceability & Uptime",
      sector4: "Low Running cost",
      sector5: "Strong & Robust chassis",
      sector6: "Lean Technology",
      info3:
        "Beyond mobility, our vehicles empower communities by supporting personal and livelihood applications—from agriculture and logistics to rural commuting. By combining durability, adaptability, and affordability, VAHA Mobility delivers a sustainable solution that bridges the gap between innovation and accessibility, ensuring EV adoption reaches even the most underserved markets.",
      info4:
        "For partnership opportunities or more information, please contact us at info@vahamobility.com or through our contact form.",

      section2_info1:
        "Vaha Mobility envisions becoming a leading force in electric mobility by delivering rugged, simple, and modular EV two-wheelers tailored for India’s fleet operators. Our focus is on scalable solutions that meet the unique demands of logistics, gig-economy riders, and urban fleet mobility.",
      section2_info2: "Our core sectors include:",
      section2_info3:
        "With a platform designed for durability, low running cost, and ease of service, we aim to replace conventional petrol fleets with clean, efficient, and reliable EVs. Beyond technology, VAHA is committed to empowering local communities, creating sustainable livelihoods, and ensuring innovation remains accessible and affordable across India.",
      section2_info4:
        "For partnership opportunities or more information, please contact us at info@vahamobility.com or through our contact form.",

      // Section 2 (cards)
      "electrification-title": "Electrification",
      "electrification-text":
        "Experience efficiency, performance, and sustainability with our latest electric drive systems.",
      "maintenance-title": "Maintenance & Repair",
      "maintenance-text":
        "Professional maintenance and repair services for your two-wheeler to ensure top performance.",
      "profile-title": "Profile & Billing",
      "profile-text":
        "Manage your account, update subscriptions, and access your billing information with ease.",

      // Footer
      footer_title: "Vaha Mobility",
      footer_tagline:
        "Creating sustainable solutions for a better tomorrow through simplicity and technology.",
      quick_links: "Quick Links",
      contact_info: "Contact Info",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookies",
      copyright: "© 2025 Vaha Mobility. All rights reserved.",
      back: "Back to top",
    },
  };

  let currentLang = "en"; // default language

  const toggleBtn = document.getElementById("languageToggle");
  toggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "mr" : "en";
    document.querySelectorAll("[data-translate]").forEach((el) => {
      const key = el.getAttribute("data-translate");
      if (translations[currentLang][key]) {
        el.textContent = translations[currentLang][key];
      }
    });

    // Change button text
    toggleBtn.innerHTML =
      currentLang === "en"
        ? '<i class="fas fa-language"></i> मराठी'
        : '<i class="fas fa-language"></i> English';
  });
});
