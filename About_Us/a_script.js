    // Back to Top Button Functionality
    document.getElementById('backToTop').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide Back to Top button based on scroll position
    window.addEventListener('scroll', function() {
        const backToTop = document.getElementById('backToTop');
        if (window.scrollY > 300) {
            backToTop.style.display = 'inline-flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Initialize - hide button on page load
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('backToTop').style.display = 'none';
    });

    // Language Toggle Functionality
    const languageToggle = document.getElementById('languageToggle');
    let isMarathi = false;

    // Marathi translations for About Us page
    const marathiTexts = {
      // Hero Section
      heroTitle: "वहा मोबिलिटी बद्दल",
      heroSubtitle:
        "नवोन्मेष आणि तंत्रज्ञानाद्वारे चांगल्या उद्यासाठी शाश्वत उपायांचा पायनियरिंग",

      // Our Story Section
      storyTitle: "आमची गोष्ट",
      storyDescription:
        "भारतातील विविध रस्त्यांसाठी डिझाइन केलेल्या खडबडीत, भूप्रदेश-सज्ज इलेक्ट्रिक दुचाकी वाहने तयार करण्याच्या दृष्टिकोनातून VAHA मोबिलिटीची सुरुवात झाली. शहरी-केंद्रित EVs च्या विपरीत, आम्ही ग्रामीण आणि अर्ध-शहरी समुदायांसाठी परवडणारी, शाश्वत आणि व्यावहारिक गतिशीलता निर्माण करण्याच्या ध्येयाने सुरुवात केली - खरोखर भारतासाठी बनवलेली.",

      // Card 1
      card1Title: "आमची सुरुवात",
      card1Content:
        "भारतातील विविध रस्त्यांसाठी डिझाइन केलेल्या खडबडीत, भूप्रदेश-सज्ज इलेक्ट्रिक दुचाकी वाहने तयार करण्याच्या दृष्टिकोनातून VAHA मोबिलिटीची सुरुवात झाली. शहरी-केंद्रित EVs च्या विपरीत, आम्ही ग्रामीण आणि अर्ध-शहरी समुदायांसाठी परवडणारी, शाश्वत आणि व्यावहारिक गतिशीलता निर्माण करण्याच्या ध्येयाने सुरुवात केली - खरोखर भारतासाठी बनवलेली.",

      // Card 2
      card2Title: "आमची वाढ",
      card2Content:
        "VAHA मोबिलिटी एका कल्पनेपासून कार्यरत प्रोटोटाइपपर्यंत विकसित झाली आहे ज्यामध्ये मजबूत विक्रेता समर्थन, स्केलेबल डिझाइन आणि लीन मॅन्युफॅक्चरिंगचा स्पष्ट मार्ग आहे, ज्याचा उद्देश भारताच्या भूप्रदेश-अभियांत्रिकी EV मोबिलिटी स्पेसचे नेतृत्व करणे आहे.",

      // Card 3
      card3Title: "आमचे भविष्य",
      card3Content:
        "भारताच्या विविध गतिशीलतेच्या गरजांसाठी विश्वसनीय, परवडणारे आणि व्यावहारिक अशा शाश्वत इलेक्ट्रिक दुचाकी वाहने तयार करण्याचे VAHA मोबिलिटीचे उद्दिष्ट आहे. २०३२ पर्यंत संपूर्ण भारतात विस्तार करण्याचे, पुढील पिढीचे मॉडेल सादर करण्याचे आणि जागतिक बाजारपेठांचा शोध घेण्याचे आमचे ध्येय आहे - २०३५ पर्यंत हरित गतिशीलता वाढवणे आणि समुदायांना सक्षम करणे.",

      // Mission Section
      missionTitle: "आमचे ध्येय आणि दृष्टी",
      missionContent1:
        "आमचे ध्येय म्हणजे ग्रामीण खेड्यांपासून ते गजबजलेल्या शहरी केंद्रांपर्यंत विविध समुदायांच्या गरजा पूर्ण करणाऱ्या विश्वासार्ह आणि शाश्वत इलेक्ट्रिक दुचाकी वाहनांची निर्मिती करणे. नवोपक्रम, खर्च कार्यक्षमता आणि वापरकर्ता-केंद्रित डिझाइनद्वारे, आम्ही आर्थिक समावेशनाला चालना देणे, जीवाश्म इंधनांवरील अवलंबित्व कमी करणे आणि स्वच्छ आणि हिरव्या गतिशीलतेकडे भारताच्या संक्रमणाला गती देणे हे आमचे ध्येय आहे.",
      missionContent2:
        "ग्रामीण, अर्ध-शहरी आणि शहरी समुदायांसाठी डिझाइन केलेले टिकाऊ, परवडणारे, साधे आणि भविष्यासाठी तयार इलेक्ट्रिक दुचाकी वाहने देऊन शाश्वत गतिशीलतेची पुनर्परिभाषा करणे. VAHA मोबिलिटी दैनंदिन गतिशीलता वाढवणे, कार्बन फूटप्रिंट कमी करणे, कमी धावण्याचा खर्च सुनिश्चित करणे आणि स्वच्छ गतिशीलता सर्वांना खरोखर उपलब्ध करून देणे हे ध्येय ठेवते.",

      // Stats
      stat1Number: "५०+",
      stat1Label: "प्रकल्प",
      stat2Number: "१२",
      stat2Label: "देश",
      stat3Number: "२००+",
      stat3Label: "तज्ञ",
      stat4Number: "१.५ कोटी+",
      stat4Label: "प्रभावित जीवन",

      // Team Section
      teamTitle: "आमचे नेतृत्व परिचय",
      teamDescription:
        "आमच्या मिशनला पुढे नेणाऱ्या तज्ञ आणि उत्साही लोकांची मंडळी",

      // Team Members
      member1Name: "जयदीप शेळके",
      member1Position: "संस्थापक आणि मुख्य कार्यकारी अधिकारी",
      member1Bio: "पर्यावरण अभियांत्रिकीत पीएचडी आणि २५+ वर्षांचा अनुभव",

      member2Name: "मीरक सुब्बा",
      member2Position: "मुख्य तंत्रज्ञान अधिकारी",
      member2Bio: "नूतन ऊर्जा प्रणाली आणि स्मार्ट ग्रीडमधील तज्ञ",

      member3Name: "रंजन चौधरी",
      member3Position: "ऑपरेशन्स संचालक",
      member3Bio: "मोठ्या प्रमाणात शाश्वतता अंमलबजावणीतील तज्ञ",

      member4Name: "अमोल शिंदे",
      member4Position: "संशोधन प्रमुख",
      member4Bio: "शाश्वत शेतीमधील आमच्या नाविन्याचे नेतृत्व",

      // Footer
      footerAbout: "ETI डायनॅमिक्स",
      footerDesc:
        "नाविन्य आणि तंत्रज्ञानाद्वारे उद्याच्या दिवसासाठी शाश्वत उपाय तयार करणे.",
      quickLinks: "द्रुत दुवे",
      contactLink: "आमच्याशी संपर्क साधा",
      careersLink: "करिअर",
      projectsLink: "आमचे प्रकल्प",
      aboutLink: "आमच्याबद्दल",
      contactInfo: "संपर्क माहिती",
      locationText: "जागतिक मुख्यालय",
      hoursText: "सोम-शुक्र: सकाळी ९ ते संध्याकाळी ५",
      privacyLink: "गोपनीयता धोरण",
      termsLink: "सेवा अटी",
      cookiesLink: "कुकीज",
      copyrightText: "© २०२५ ETI डायनॅमिक्स. सर्व हक्क राखीव.",
      toggleButton: "English",
      backToTopText: "वर जा",
    };

    // English texts (original)
    const englishTexts = {
      // Hero Section
      heroTitle: "About ETI Dynamics",
      heroSubtitle:
        "Pioneering sustainable solutions for a better tomorrow through innovation and technology",

      // Our Story Section
      storyTitle: "Our Story",
      storyDescription:
        "VAHA Mobility began with the vision to build rugged, terrain-ready electric two-wheelers designed for India’s diverse roads. Unlike urban-focused EVs, we started with the goal of creating affordable, sustainable, and practical mobility for rural and semi-urban communities — truly made for India.",

      // Card 1
      card1Title: "Our Beginning",
      card1Content:
        "VAHA Mobility began with the vision to build rugged, terrain-ready electric two-wheelers designed for India’s diverse roads. Unlike urban-focused EVs, we started with the goal of creating affordable, sustainable, and practical mobility for rural and semi-urban communities — truly made for India.",

      // Card 2
      card2Title: "Our Growth",
      card2Content:
        "VAHA Mobility has grown from an idea to working prototypes with strong vendor support, scalable designs, and a clear path to lean manufacturing, aiming to lead India’s terrain-engineered EV mobility space.",

      // Card 3
      card3Title: "Our Future",
      card3Content:
        "VAHA Mobility envisions creating sustainable electric two-wheelers that are reliable, affordable, and practical for India’s diverse mobility needs. We aim to expand pan-india by 2032, introduce next-generation models, and explore global markets—driving green mobility and empowering communities by 2035.",

      // Mission Section
      missionTitle: "Our Mission & Vision",
      missionContent1:
        "our mission is to engineer reliable and sustainable electric two-wheelers that address the needs of diverse communities—from rural villages to bustling urban centers. Through innovation, cost efficiency, and user-focused design, we aim to foster economic inclusion, reduce dependency on fossil fuels, and accelerate India’s transition to clean and green mobility.",
      missionContent2:
        "To redefine sustainable mobility by delivering durable, affordable, simple, and future-ready electric two-wheelers designed for rural, semi-urban, and urban communities. VAHA Mobility aspires to enhance everyday mobility, reduce carbon footprints, ensure low running costs, and make clean mobility truly accessible to all.",

      // Stats
      stat1Number: "50+",
      stat1Label: "Projects",
      stat2Number: "12",
      stat2Label: "Countries",
      stat3Number: "200+",
      stat3Label: "Experts",
      stat4Number: "15M+",
      stat4Label: "Lives Impacted",

      // Team Section
      teamTitle: "Meet Our Leadership",
      teamDescription:
        "The brilliant minds driving our mission forward with expertise and passion",

      // Team Members
      member1Name: "Jaydip Shelke",
      member1Position: "Founder & CEO",
      member1Bio:
        "PhD in Environmental Engineering with 25+ years of experience",

      member2Name: "Meerak Subba",
      member2Position: "Chief Technology Officer",
      member2Bio: "Specialist in renewable energy systems and smart grids",

      member3Name: "Ranjan Choudhury",
      member3Position: "Director of Operations",
      member3Bio: "Expert in large-scale sustainability implementations",

      member4Name: "Amol Shinde",
      member4Position: "Head of Research",
      member4Bio: "Leading our innovation in sustainable agriculture",

      // Footer
      footerAbout: "ETI Dynamics",
      footerDesc:
        "Creating sustainable solutions for a better tomorrow through innovation and technology.",
      quickLinks: "Quick Links",
      contactLink: "Contact Us",
      careersLink: "Careers",
      projectsLink: "Our Projects",
      aboutLink: "About Us",
      contactInfo: "Contact Info",
      locationText: "Global Headquarters",
      hoursText: "Mon-Fri: 9AM - 5PM",
      privacyLink: "Privacy Policy",
      termsLink: "Terms of Service",
      cookiesLink: "Cookies",
      copyrightText: "© 2025 ETI Dynamics. All rights reserved.",
      toggleButton: "मराठी",
      backToTopText: "Back to top",
    };

    // Function to toggle language
    function toggleLanguage() {
      isMarathi = !isMarathi;
      const texts = isMarathi ? marathiTexts : englishTexts;
      
      // Update all text elements
      document.querySelector('.hero-content h1').textContent = texts.heroTitle;
      document.querySelector('.hero-content p').textContent = texts.heroSubtitle;
      
      // Our Story Section
      document.querySelector('.section-title h2').textContent = texts.storyTitle;
      document.querySelector('.section-title p').textContent = texts.storyDescription;
      
      // Cards
      const cards = document.querySelectorAll('.about-card');
      cards[0].querySelector('h3').textContent = texts.card1Title;
      cards[0].querySelector('p').textContent = texts.card1Content;
      cards[1].querySelector('h3').textContent = texts.card2Title;
      cards[1].querySelector('p').textContent = texts.card2Content;
      cards[2].querySelector('h3').textContent = texts.card3Title;
      cards[2].querySelector('p').textContent = texts.card3Content;
      
      // Mission Section
      document.querySelector('.mission-container h2').textContent = texts.missionTitle;
      const missionParagraphs = document.querySelectorAll('.mission-container p');
      missionParagraphs[0].textContent = texts.missionContent1;
      missionParagraphs[1].textContent = texts.missionContent2;
      
      // Stats
      const stats = document.querySelectorAll('.stat-item');
      stats[0].querySelector('.stat-number').textContent = texts.stat1Number;
      stats[0].querySelector('.stat-label').textContent = texts.stat1Label;
      stats[1].querySelector('.stat-number').textContent = texts.stat2Number;
      stats[1].querySelector('.stat-label').textContent = texts.stat2Label;
      stats[2].querySelector('.stat-number').textContent = texts.stat3Number;
      stats[2].querySelector('.stat-label').textContent = texts.stat3Label;
      stats[3].querySelector('.stat-number').textContent = texts.stat4Number;
      stats[3].querySelector('.stat-label').textContent = texts.stat4Label;
      
      // Team Section
      document.querySelector('.team-section .section-title h2').textContent = texts.teamTitle;
      document.querySelector('.team-section .section-title p').textContent = texts.teamDescription;
      
      // Team Members
      const members = document.querySelectorAll('.team-member');
      members[0].querySelector('h3').textContent = texts.member1Name;
      members[0].querySelectorAll('p')[0].textContent = texts.member1Position;
      members[0].querySelectorAll('p')[1].textContent = texts.member1Bio;
      
      members[1].querySelector('h3').textContent = texts.member2Name;
      members[1].querySelectorAll('p')[0].textContent = texts.member2Position;
      members[1].querySelectorAll('p')[1].textContent = texts.member2Bio;
      
      members[2].querySelector('h3').textContent = texts.member3Name;
      members[2].querySelectorAll('p')[0].textContent = texts.member3Position;
      members[2].querySelectorAll('p')[1].textContent = texts.member3Bio;
      
      members[3].querySelector('h3').textContent = texts.member4Name;
      members[3].querySelectorAll('p')[0].textContent = texts.member4Position;
      members[3].querySelectorAll('p')[1].textContent = texts.member4Bio;
      
      // Footer
      const footerColumns = document.querySelectorAll('.footer-column');
      footerColumns[0].querySelector('h3').textContent = texts.footerAbout;
      footerColumns[0].querySelector('p').textContent = texts.footerDesc;
      
      footerColumns[1].querySelector('h3').textContent = texts.quickLinks;
      const footerLinks = footerColumns[1].querySelectorAll('.footer-links a span');
      footerLinks[0].textContent = texts.contactLink;
      footerLinks[1].textContent = texts.careersLink;
      footerLinks[2].textContent = texts.projectsLink;
      footerLinks[3].textContent = texts.aboutLink;
      
      footerColumns[2].querySelector('h3').textContent = texts.contactInfo;
      const contactItems = footerColumns[2].querySelectorAll('.footer-links li');
      contactItems[2].querySelector('span').textContent = texts.locationText;
      contactItems[3].querySelector('span').textContent = texts.hoursText;
      
      const legalLinks = document.querySelectorAll('.footer-legal a');
      legalLinks[0].textContent = texts.privacyLink;
      legalLinks[1].textContent = texts.termsLink;
      legalLinks[2].textContent = texts.cookiesLink;
      
      document.querySelector('.copyright').textContent = texts.copyrightText;
      document.getElementById('backToTopText').textContent = texts.backToTopText;
      document.getElementById('languageToggle').innerHTML = `<i class="fas fa-language"></i> ${texts.toggleButton}`;
    }

    // Add click event to language toggle button
    languageToggle.addEventListener('click', toggleLanguage);

