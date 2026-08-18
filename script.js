(function () {
  if (window.__bakFreightScriptLoaded) return;
  window.__bakFreightScriptLoaded = true;

  window.tailwind = window.tailwind || {};
  window.tailwind.config = {
    theme: {
      extend: {
        colors: {
          navy: '#071A33',
          navy2: '#0C2A52',
          blue: '#FF7A00',
          orange: '#FF7A00',
          bg: '#F8FAFC',
          dark: '#020617',
          ink: '#111827',
        },
        fontFamily: {
          display: ['"Plus Jakarta Sans"', 'sans-serif'],
          body: ['"Inter"', 'sans-serif'],
          mono: ['"JetBrains Mono"', 'monospace'],
        },
      },
    },
  };

  const frenchTranslations = {
    'Partner with BAK Freight': 'Devenez partenaire de BAK Freight', 'Looking for reliable freight opportunities? Submit your carrier details and our team will review your information for available loads and lanes.': 'Vous recherchez des occasions de transport fiables ? Envoyez vos informations de transporteur et notre équipe les examinera pour les chargements et itinéraires disponibles.', 'Select truck type': 'Sélectionnez le type de camion', 'Dry Van': 'Fourgon sec', 'Reefer': 'Réfrigéré', 'Flatbed': 'Plateau', 'Box Truck': 'Camion fourgon', 'Straight Truck': 'Camion porteur', 'Sprinter Van': 'Fourgon Sprinter', 'Other': 'Autre', 'Submit Carrier Information': 'Envoyer les informations du transporteur', 'Carrier information is reviewed by our operations team. Submission does not guarantee load availability.': 'Les informations du transporteur sont examinées par notre équipe des opérations. L’envoi ne garantit pas la disponibilité de chargements.',
    'Freight & Lane Updates': 'Actualités du fret et des itinéraires', 'Stay informed about new lanes, network capacity, and important freight updates from BAK Freight.': 'Restez informé des nouveaux itinéraires, de la capacité du réseau et des mises à jour importantes de BAK Freight.', 'Occasional logistics updates. No spam.': 'Mises à jour logistiques occasionnelles. Aucun pourriel.', 'Subscription confirmed.': 'Abonnement confirmé.',
    'Services': 'Services', 'Industries': 'Industries', 'Technology': 'Technologie', 'Carriers': 'Transporteurs',
    'Coverage': 'Couverture', 'Tracking': 'Suivi', 'Contact': 'Contact', 'Canada': 'Canada', 'United States': 'États-Unis', 'United States (+1)': 'États-Unis (+1)', 'Phone country': 'Pays du téléphone', 'Select country': 'Sélectionnez un pays', 'Select province or state': 'Sélectionnez une province ou un État', 'Select city': 'Sélectionnez une ville', 'Other': 'Autre', 'Enter city': 'Saisissez une ville', 'Select shipment type': 'Sélectionnez le type d’envoi', 'Select delivery type': 'Sélectionnez le type de livraison', 'Track Shipment': 'Suivre un envoi',
    'Get A Quote': 'Obtenir un devis', 'Manifest Status · Network Live': 'Statut du manifeste · Réseau actif',
    'Reliable Cross-Border Freight & Last-Mile Delivery Solutions': 'Solutions fiables de transport transfrontalier et de livraison du dernier kilomètre',
    'We specialize in cross-border transportation, first & mid-mile logistics, and professional last-mile delivery solutions — helping businesses move freight efficiently with dedicated fleets, real-time visibility, and dependable service.': 'Nous sommes spécialisés dans le transport transfrontalier, la logistique du premier et moyen kilomètre et la livraison professionnelle du dernier kilomètre. Nous aidons les entreprises à déplacer leurs marchandises efficacement grâce à des flottes dédiées, une visibilité en temps réel et un service fiable.',
    'Request a Quote': 'Demander un devis', 'Explore Our Services': 'Découvrir nos services', 'Cross-Border Shipment': 'Envoi transfrontalier',
    'First & Mid-Mile Transportation': 'Transport du premier et moyen kilomètre', 'Last-Mile Delivery': 'Livraison du dernier kilomètre',
    'In Transit': 'En transit', 'Dispatched': 'Expédié', 'Successful Shipments': 'Envois réussis', 'On-Time Delivery': 'Livraison à temps',
    'Dispatch Support': 'Assistance répartition', 'Full Realtime Coverage': 'Couverture en temps réel',
    '/ Services': '/ Services', 'Freight transportation or last-mile delivery — choose the right route.': 'Transport de marchandises ou livraison du dernier kilomètre : choisissez le bon itinéraire.',
    'Two dedicated service paths for logistics and delivery. Pick the option that fits your freight lane or final-mile needs, then share the shipment details.': 'Deux parcours dédiés pour la logistique et la livraison. Choisissez l’option adaptée à vos besoins, puis partagez les détails de votre envoi.',
    'Freight Transportation': 'Transport de marchandises', 'Reliable capacity for long-haul and cross-border freight movement.': 'Une capacité fiable pour le transport longue distance et transfrontalier.',
    'From full truckload shipments to specialized transportation, BAK Freight provides dependable freight solutions with experienced dispatch support, qualified carriers, and real-time communication.': 'Des chargements complets au transport spécialisé, BAK Freight propose des solutions fiables avec une équipe de répartition expérimentée, des transporteurs qualifiés et une communication en temps réel.',
    'FTL — Full Truckload': 'FTL — Chargement complet', 'Dedicated capacity with direct routing.': 'Capacité dédiée avec itinéraire direct.',
    'LTL — Less Than Truckload': 'LTL — Chargement partiel', 'Flexible solutions for partial shipments.': 'Des solutions flexibles pour les envois partiels.',
    'Reefer Transportation': 'Transport réfrigéré', 'Temperature-controlled freight solutions.': 'Solutions de transport à température contrôlée.',
    'Flatbed Transportation': 'Transport à plateau', 'Specialized equipment for oversized and heavy loads.': 'Équipement spécialisé pour les charges surdimensionnées et lourdes.',
    'Drayage': 'Drayage', 'Port-to-warehouse short-haul transportation.': 'Transport courte distance du port à l’entrepôt.',
    'Cross-Border Freight': 'Fret transfrontalier', 'Reliable Canada-USA freight movement with efficient coordination.': 'Transport fiable entre le Canada et les États-Unis, avec une coordination efficace.',
    'Get a Freight Quote': 'Obtenir un devis de transport', 'EV Last-Mile Delivery': 'Livraison électrique du dernier kilomètre',
    'Sustainable final-mile solutions with reliable execution.': 'Des solutions durables pour le dernier kilomètre, exécutées avec fiabilité.',
    'BAK Freight delivers professional last-mile services using a dedicated fleet, including EV delivery solutions, residential deliveries, furniture handling, and large package transportation.': 'BAK Freight offre des services professionnels du dernier kilomètre avec une flotte dédiée, notamment des livraisons électriques, résidentielles, de meubles et de colis volumineux.',
    'Furniture Delivery': 'Livraison de meubles', 'White-glove handling and in-home placement.': 'Manutention soignée et installation à domicile.',
    'Large Package Delivery': 'Livraison de colis volumineux', 'Safe handling of oversized residential and commercial deliveries.': 'Manutention sécurisée des livraisons résidentielles et commerciales surdimensionnées.',
    'EV Delivery Solutions': 'Solutions de livraison électrique', 'Zero-emission last-mile transportation.': 'Transport du dernier kilomètre sans émissions.',
    'Scheduled Home Delivery': 'Livraison à domicile planifiée', 'Reliable appointment-based delivery services.': 'Services de livraison fiables sur rendez-vous.',
    'Electric Fleet Capability': 'Capacité de flotte électrique', 'EV Kilometers Logged': 'Kilomètres électriques parcourus', 'Schedule a Delivery': 'Planifier une livraison',
    '/ Why BAK Freight': '/ Pourquoi BAK Freight', 'A dispatch desk that answers, on a network that\'s visible end to end.': 'Un bureau de répartition qui répond, sur un réseau visible de bout en bout.',
    'Real-Time Tracking': 'Suivi en temps réel', 'GPS visibility on every active load, down to the trailer.': 'Visibilité GPS sur chaque chargement actif, jusqu’à la remorque.',
    'Dedicated Dispatch': 'Répartition dédiée', 'One point of contact who owns your lane, not a queue.': 'Un interlocuteur dédié à votre itinéraire, pas une file d’attente.',
    'Transparent Pricing': 'Tarification transparente', 'Rate confirmations with no hidden accessorials.': 'Confirmation des tarifs sans frais accessoires cachés.',
    'Fast Communication': 'Communication rapide', 'Status updates pushed proactively, not on request.': 'Mises à jour envoyées de manière proactive.',
    'Reliable Delivery': 'Livraison fiable', '98% on-time performance across the network.': '98 % de livraisons à temps sur tout le réseau.',
    'Live Fleet Snapshot': 'Aperçu de la flotte en direct', 'ONLINE': 'EN LIGNE', 'On-time this quarter': 'À temps ce trimestre',
    '/ Process': '/ Processus', 'From quote to proof of delivery, in six stages.': 'Du devis à la preuve de livraison, en six étapes.',
    'Every load follows the same bill-of-lading lifecycle — so you always know exactly which stage your freight is in.': 'Chaque chargement suit le même cycle de connaissement, afin que vous sachiez toujours où se trouve votre marchandise.',
    'Request Quote': 'Demander un devis', 'Submit lane, weight and equipment need.': 'Indiquez l’itinéraire, le poids et l’équipement requis.', 'Load Planning': 'Planification du chargement',
    'Dispatch matches equipment to lane.': 'La répartition associe l’équipement à l’itinéraire.', 'Carrier Assignment': 'Affectation du transporteur', 'Vetted driver confirmed and rated.': 'Chauffeur vérifié, confirmé et évalué.',
    'Pickup': 'Ramassage', 'Freight loaded and BOL confirmed.': 'Marchandise chargée et connaissement confirmé.', 'Live Tracking': 'Suivi en direct', 'GPS status pushed in real time.': 'Statut GPS transmis en temps réel.',
    'Delivery Confirmation': 'Confirmation de livraison', 'Digital POD signed and delivered.': 'Preuve de livraison numérique signée.',
    '/ Network Coverage': '/ Couverture du réseau', 'Network Coverage': 'Couverture du réseau', 'Every major lane, both sides of the border.': 'Tous les principaux itinéraires, des deux côtés de la frontière.',
    'active lanes': 'itinéraires actifs', 'network hubs': 'hubs du réseau', '/ Technology': '/ Technologie', 'Active loads': 'Chargements actifs', 'On-time performance': 'Performance à temps', 'ETA accuracy': 'Précision de l’ETA',
    'Shipment Tracking Dashboard': 'Tableau de suivi des envois', 'Live GPS status on every load, from any device.': 'Statut GPS en direct sur chaque chargement, depuis tout appareil.',
    'Digital Proof of Delivery': 'Preuve de livraison numérique', 'Signed PODs available the moment freight is delivered.': 'Preuves signées disponibles dès la livraison.', 'Driver Management': 'Gestion des chauffeurs', 'Route Optimization': 'Optimisation des itinéraires', 'Customer Portal': 'Portail client',
    '/ Industries': '/ Secteurs', '/ Testimonials': '/ Témoignages', 'Testimonials': 'Témoignages', 'Built around how your freight actually moves.': 'Conçu autour de la façon dont vos marchandises circulent.',
    'Automotive': 'Automobile', 'Retail': 'Commerce de détail', 'Furniture': 'Meubles', 'Manufacturing': 'Fabrication', 'Food & Beverage': 'Alimentation et boissons', 'Construction': 'Construction', 'E-commerce': 'Commerce électronique',
    '/ Get Your Logistics Quote': '/ Obtenez votre devis logistique', 'Get Your Logistics Quote': 'Obtenez votre devis logistique', 'Choose your service type and submit your details. Our logistics team will review your request and respond quickly.': 'Choisissez votre type de service et envoyez vos informations. Notre équipe logistique étudiera votre demande et vous répondra rapidement.',
    'Freight Quote': 'Devis de transport', 'Get an estimate for freight transportation across Canada and USA.': 'Obtenez une estimation pour le transport de marchandises au Canada et aux États-Unis.', 'Company Name': 'Nom de l’entreprise', 'Contact Person': 'Personne à contacter', 'Shipment Type': 'Type d’envoi', 'Origin Location': 'Lieu d’origine', 'Destination Location': 'Lieu de destination', 'Load Details': 'Détails du chargement', 'Pickup Date': 'Date de ramassage', 'Calculate Estimate': 'Calculer l’estimation', 'Request Freight Quote': 'Demander un devis de transport',
    'Last-Mile Delivery Quote': 'Devis de livraison du dernier kilomètre', 'Tell us about your delivery requirements and our team will respond quickly.': 'Parlez-nous de vos besoins de livraison et notre équipe vous répondra rapidement.', 'Delivery Type': 'Type de livraison', 'Pickup Location': 'Lieu de ramassage', 'Delivery Location': 'Lieu de livraison', 'Delivery Schedule': 'Horaire de livraison', 'Special Requirements': 'Exigences particulières', 'Request Delivery Quote': 'Demander un devis de livraison', 'By submitting this form, you agree to be contacted by BAK Freight regarding your request.': 'En envoyant ce formulaire, vous acceptez que BAK Freight vous contacte au sujet de votre demande.',
    '/ Track A Shipment': '/ Suivre un envoi', 'Where\'s my freight?': 'Où est ma marchandise ?', 'Enter your BAK waybill number to see live status.': 'Entrez votre numéro de connaissement BAK pour voir le statut en direct.', 'Track': 'Suivre', 'Origin': 'Origine', 'Destination': 'Destination', 'Distance Left': 'Distance restante', 'Last Update': 'Dernière mise à jour', '4 min ago': 'il y a 4 min',
    '/ Contact BAK Freight': '/ Contactez BAK Freight', 'Two Offices. One Team. Ready To Move Your Freight.': 'Deux bureaux. Une équipe. Prête à transporter vos marchandises.', 'Email': 'Courriel', 'Phone': 'Téléphone', 'Quote Form': 'Formulaire de devis', 'View on Google Maps': 'Voir sur Google Maps', 'Headquarters': 'Siège social', 'New Office': 'Nouveau bureau',
    'Ready to move your freight smarter?': 'Prêt à transporter vos marchandises plus intelligemment ?', 'Talk to a dispatcher today, or send your first load through in minutes.': 'Parlez à un répartiteur aujourd’hui ou envoyez votre premier chargement en quelques minutes.', 'Contact Dispatch': 'Contacter la répartition',
    'Locations': 'Emplacements', 'Solutions': 'Solutions', 'Follow BAK Freight': 'Suivez BAK Freight', 'Privacy Policy': 'Politique de confidentialité', 'Terms of Service': 'Conditions d’utilisation', 'All rights reserved.': 'Tous droits réservés.', 'Get a Quote': 'Obtenir un devis', 'Subscribe': 'S’abonner', 'Apply To Haul': 'Postuler pour transporter',
    'A logistics technology partner, not just a trucking company.': 'Un partenaire technologique en logistique, pas seulement une entreprise de camionnage.',
    'Trusted by teams who move freight for a living.': 'La confiance des équipes qui transportent des marchandises au quotidien.',
    'Supporting Deliveries for Leading North American Brands': 'Au service des livraisons des grandes marques nord-américaines',
    'Delivering reliable last-mile and logistics solutions for leading retail, furniture, and e-commerce brands across Canada and the USA.': 'Des solutions fiables de logistique et de dernier kilomètre pour les grandes marques du commerce, de l’ameublement et du commerce électronique au Canada et aux États-Unis.',
    'Lane & capacity updates': 'Actualités des itinéraires et de la capacité', 'Monthly notes on freight conditions, new lanes, and network capacity — no spam.': 'Notes mensuelles sur les conditions de transport, les nouveaux itinéraires et la capacité du réseau, sans pourriel.',
    'Subscribed — welcome aboard.': 'Inscription confirmée, bienvenue à bord.', 'Haul with BAK Freight': 'Transportez avec BAK Freight', 'Consistent freight, fast settlement, and a dispatch team that treats your truck like it\'s their own.': 'Des chargements réguliers, un paiement rapide et une équipe de répartition qui traite votre camion comme le sien.',
    'BAK Freight provides first & mid-mile transportation, cross-border freight solutions, and zero-emission last-mile delivery services across Canada and the USA.': 'BAK Freight fournit des services de transport du premier et moyen kilomètre, de fret transfrontalier et de livraison du dernier kilomètre sans émissions au Canada et aux États-Unis.',
    'Thanks — a dispatcher will follow up shortly with a firm quote.': 'Merci. Un répartiteur vous contactera bientôt avec un devis ferme.', 'Thanks — a delivery specialist will follow up shortly with your quote.': 'Merci. Un spécialiste de la livraison vous contactera bientôt avec votre devis.',
    'On-time performance': 'Performance à temps', 'Secure transportation for high-value equipment': 'Transport sécurisé pour les équipements de grande valeur', 'AI-assisted planning that trims miles and dwell time.': 'Planification assistée par IA qui réduit les kilomètres et les temps d’attente.', 'Quotes, invoices and history in a single login.': 'Devis, factures et historique dans une seule connexion.'
  };

  const frenchAttributes = {
    'Enter your MC number': 'Saisissez votre numéro MC', 'Carrier / MC Number': 'Transporteur / numéro MC', 'Equipment Type': 'Type d’équipement', 'Email Address': 'Adresse courriel', 'Delivery date': 'Date de livraison', 'Approximate delivery time': 'Heure approximative de livraison',
    'Address, city, province/state, postal/ZIP code': 'Adresse, ville, province/État, code postal/ZIP', 'Address, city, province/state, postal code': 'Adresse, ville, province/État, code postal',
    'Dimensions and equipment details': 'Dimensions et détails de l’équipement',
    'Open menu': 'Ouvrir le menu', 'Switch to French': 'Passer au français', 'Switch to English': 'Passer à l’anglais', 'Previous testimonials': 'Témoignages précédents', 'Next testimonials': 'Témoignages suivants', 'Phone country': 'Pays du téléphone', 'Select country': 'Sélectionner un pays', 'Origin country': 'Pays d’origine', 'Origin province or state': 'Province ou État d’origine', 'Origin city': 'Ville d’origine', 'Destination country': 'Pays de destination', 'Destination province or state': 'Province ou État de destination', 'Destination city': 'Ville de destination', 'Your company': 'Votre entreprise',
    'Name': 'Nom', 'City, Province/State': 'Ville, province/État', 'Enter city': 'Saisissez une ville', 'Weight, dimensions, equipment needs': 'Poids, dimensions, besoins en équipement',
    'Preferred date / time window': 'Date / plage horaire souhaitée', 'Assembly, access details, item handling notes': 'Montage, accès et notes de manutention', 'Carrier / MC Number': 'Transporteur / numéro MC', 'Equipment Type': 'Type d’équipement'
  };

  function translatePage(language) {
    const isFrench = language === 'fr';
    document.documentElement.lang = isFrench ? 'fr' : 'en';
    document.title = isFrench ? 'BAK Freight | Transport de marchandises Canada et États-Unis' : 'BAK Freight | Cross-Border Freight Transportation — Canada & USA';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = isFrench
      ? 'BAK Freight transporte du fret sec, réfrigéré, à plateau, LTL et transfrontalier au Canada et aux États-Unis, avec suivi en temps réel et livraison fiable.'
      : 'BAK Freight moves dry van, reefer, flatbed, LTL and cross-border freight across Canada and the United States, with real-time tracking, dedicated dispatch and 98% on-time delivery.';

    const walker = document.createTreeWalker(document.body, window.NodeFilter?.SHOW_TEXT || 4);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((node) => {
      if (node.parentElement?.closest('script, style, [data-i18n-ignore]')) return;
      const original = node.__bakEnglishText || node.nodeValue.trim();
      if (!node.__bakEnglishText) node.__bakEnglishText = original;
      const translated = isFrench ? frenchTranslations[original] : original;
      if (translated) node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), translated);
    });

    document.querySelectorAll('input, textarea, [aria-label]').forEach((element) => {
      ['placeholder', 'aria-label'].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        const original = element.dataset[`en${attribute}`] || element.getAttribute(attribute);
        element.dataset[`en${attribute}`] = original;
        const translated = isFrench ? frenchAttributes[original] : original;
        if (translated) element.setAttribute(attribute, translated);
      });
    });
    document.querySelectorAll('select option').forEach((option) => {
      const original = option.dataset.enText || option.textContent.trim();
      option.dataset.enText = original;
      const translated = isFrench ? frenchTranslations[original] : original;
      if (translated) option.textContent = translated;
    });

    document.querySelectorAll('#languageToggle, #mobileLanguageToggle').forEach((button) => {
      button.setAttribute('aria-pressed', String(isFrench));
      button.setAttribute('aria-label', isFrench ? 'Switch to English' : 'Switch to French');
      button.classList.toggle('is-french', isFrench);
    });
    window.dispatchEvent(new Event('languagechange'));
  }

  function init() {
    if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
      lucide.createIcons();
    }

    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    const languageButtons = document.querySelectorAll('#languageToggle, #mobileLanguageToggle');
    languageButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const isFrench = document.documentElement.lang === 'fr';
        const nextIsFrench = !isFrench;
        document.querySelectorAll('#languageToggle, #mobileLanguageToggle').forEach((languageButton) => {
          languageButton.classList.toggle('is-french', nextIsFrench);
          languageButton.setAttribute('aria-pressed', String(nextIsFrench));
          languageButton.setAttribute('aria-label', nextIsFrench ? 'Switch to English' : 'Switch to French');
        });
        try {
          translatePage(nextIsFrench ? 'fr' : 'en');
        } catch (error) {
          console.warn('BAK Freight language switch skipped:', error);
        }
      });
    });
    try {
      translatePage('en');
    } catch (error) {
      console.warn('BAK Freight language initialization skipped:', error);
    }

    const testimonialTrack = document.getElementById('testimonialTrack');
    const testimonialPrev = document.getElementById('testimonialPrev');
    const testimonialNext = document.getElementById('testimonialNext');
    const testimonialCards = testimonialTrack ? Array.from(testimonialTrack.querySelectorAll('.testimonial-card')) : [];
    let testimonialIndex = 0;
    let testimonialVisibleCount = 3;
    let testimonialResetTimer;

    if (testimonialTrack && testimonialPrev && testimonialNext && testimonialCards.length) {
      const renderTestimonials = (animate = true) => {
        if (!animate) testimonialTrack.style.transition = 'none';
        const cardWidth = testimonialTrack.querySelector('.testimonial-card').getBoundingClientRect().width;
        const gap = parseFloat(window.getComputedStyle(testimonialTrack).gap) || 0;
        testimonialTrack.style.transform = `translateX(-${testimonialIndex * (cardWidth + gap)}px)`;
        if (!animate) {
          testimonialTrack.offsetHeight;
          testimonialTrack.style.transition = '';
        }
      };

      const rebuildTestimonials = () => {
        testimonialVisibleCount = window.matchMedia('(max-width: 767px)').matches ? 1 : 3;
        testimonialTrack.querySelectorAll('.testimonial-clone').forEach((card) => card.remove());
        const before = testimonialCards.slice(-testimonialVisibleCount).map((card) => {
          const clone = card.cloneNode(true);
          clone.classList.add('testimonial-clone');
          return clone;
        });
        const after = testimonialCards.slice(0, testimonialVisibleCount).map((card) => {
          const clone = card.cloneNode(true);
          clone.classList.add('testimonial-clone');
          return clone;
        });
        testimonialTrack.prepend(...before);
        testimonialTrack.append(...after);
        testimonialIndex = testimonialVisibleCount;
        renderTestimonials(false);
      };

      const moveTestimonials = (direction) => {
        window.clearTimeout(testimonialResetTimer);
        const firstOriginalIndex = testimonialVisibleCount;
        const lastOriginalIndex = testimonialVisibleCount + testimonialCards.length - testimonialVisibleCount;
        const isWrappingForward = direction > 0 && testimonialIndex === lastOriginalIndex;
        const isWrappingBackward = direction < 0 && testimonialIndex === firstOriginalIndex;

        if (testimonialIndex > lastOriginalIndex || testimonialIndex < firstOriginalIndex) {
          testimonialIndex = direction > 0 ? firstOriginalIndex : lastOriginalIndex;
          renderTestimonials(false);
        }

        testimonialIndex += direction;
        renderTestimonials();

        if (isWrappingForward || isWrappingBackward) {
          testimonialResetTimer = window.setTimeout(() => {
            testimonialIndex = isWrappingForward ? firstOriginalIndex : lastOriginalIndex;
            renderTestimonials(false);
          }, 460);
        }
      };

      testimonialPrev.addEventListener('click', () => {
        moveTestimonials(-1);
      });
      testimonialNext.addEventListener('click', () => {
        moveTestimonials(1);
      });
      window.addEventListener('resize', rebuildTestimonials);
      window.addEventListener('languagechange', () => renderTestimonials(false));
      rebuildTestimonials();
    }

    const navbar = document.getElementById('navbar');
    const navInner = document.getElementById('navInner');

    if (navbar && navInner) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          navbar.classList.add('shrink');
          navInner.classList.add('py-3');
          navInner.classList.remove('py-5');
        } else {
          navbar.classList.remove('shrink');
          navInner.classList.remove('py-3');
          navInner.classList.add('py-5');
        }
      });
    }

    const backToTop = document.getElementById('backToTop');
    const heroSection = document.getElementById('top');

    if (backToTop) {
      const updateBackToTop = () => {
        const heroHasPassed = heroSection
          ? heroSection.getBoundingClientRect().bottom <= 0
          : window.scrollY > window.innerHeight * 0.65;

        backToTop.classList.toggle('is-visible', heroHasPassed);
        backToTop.setAttribute('aria-hidden', String(!heroHasPassed));
      };

      window.addEventListener('scroll', updateBackToTop, { passive: true });
      updateBackToTop();

      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Demo activity data is isolated here so it can later be replaced by a live booking feed.
    const recentBookingActivities = [
      { title: 'FTL shipment booked', lane: 'Toronto → Chicago', time: 'Just now' },
      { title: 'LTL shipment booked', lane: 'Mississauga → Montreal', time: 'Just now' },
      { title: 'Dry Van load booked', lane: 'Detroit → Toronto', time: 'Just now' },
      { title: 'Reefer shipment booked', lane: 'Toronto → New York', time: 'Just now' },
      { title: 'Last-Mile delivery booked', lane: 'Greater Toronto Area', time: 'Just now' },
      { title: 'Furniture delivery scheduled', lane: 'Mississauga → Ottawa', time: 'Just now' },
      { title: 'Cross-Border FTL booked', lane: 'Ontario → Michigan', time: 'Just now' },
      { title: 'LTL freight scheduled', lane: 'Vancouver → Calgary', time: 'Just now' },
      { title: 'Dry Van capacity reserved', lane: 'Chicago → Toronto', time: 'Just now' },
      { title: 'Last-Mile delivery scheduled', lane: 'Toronto, ON', time: 'Just now' },
      { title: 'FTL load confirmed', lane: 'Montreal → Toronto', time: 'Just now' },
      { title: 'Large-package delivery booked', lane: 'Greater Toronto Area', time: 'Just now' },
    ];

    const recentBookingNotification = document.getElementById('recentBookingNotification');
    const recentBookingTitle = document.getElementById('recentBookingTitle');
    const recentBookingLane = document.getElementById('recentBookingLane');
    const recentBookingTime = document.getElementById('recentBookingTime');
    const recentBookingProgress = document.getElementById('recentBookingProgress');
    const recentBookingClose = document.getElementById('recentBookingClose');

    if (recentBookingNotification && recentBookingTitle && recentBookingLane && recentBookingTime && recentBookingProgress && recentBookingClose) {
      const displayDuration = 9000;
      const nextActivityDelay = 30000;
      let activityQueue = [];
      let lastActivity;
      let currentActivity;
      let currentActivityDisplays = 0;
      let hideTimer;
      let nextActivityTimer;

      const shuffleActivities = () => {
        activityQueue = [...recentBookingActivities];
        for (let index = activityQueue.length - 1; index > 0; index -= 1) {
          const randomIndex = Math.floor(Math.random() * (index + 1));
          [activityQueue[index], activityQueue[randomIndex]] = [activityQueue[randomIndex], activityQueue[index]];
        }
        if (lastActivity && activityQueue.length > 1 && activityQueue[0] === lastActivity) {
          [activityQueue[0], activityQueue[1]] = [activityQueue[1], activityQueue[0]];
        }
      };

      const hideRecentBooking = () => {
        window.clearTimeout(hideTimer);
        recentBookingNotification.classList.remove('is-visible');
        recentBookingNotification.setAttribute('aria-hidden', 'true');
        window.setTimeout(() => recentBookingNotification.classList.add('hidden'), 320);
      };

      const scheduleNextActivity = () => {
        window.clearTimeout(nextActivityTimer);
        nextActivityTimer = window.setTimeout(showRecentBooking, nextActivityDelay);
      };

      const showRecentBooking = () => {
        if (!currentActivity || currentActivityDisplays >= 2) {
          if (!activityQueue.length) shuffleActivities();
          lastActivity = currentActivity || lastActivity;
          currentActivity = activityQueue.shift();
          currentActivityDisplays = 0;
        }
        const activity = currentActivity;
        currentActivityDisplays += 1;
        lastActivity = activity;
        recentBookingTitle.textContent = activity.title;
        recentBookingLane.textContent = activity.lane;
        recentBookingTime.textContent = activity.time;
        recentBookingNotification.classList.remove('hidden');
        recentBookingNotification.setAttribute('aria-hidden', 'false');
        window.requestAnimationFrame(() => recentBookingNotification.classList.add('is-visible'));
        recentBookingProgress.classList.remove('is-running');
        recentBookingProgress.offsetWidth;
        recentBookingProgress.classList.add('is-running');
        window.clearTimeout(hideTimer);
        hideTimer = window.setTimeout(() => {
          hideRecentBooking();
          scheduleNextActivity();
        }, displayDuration);
      };

      recentBookingClose.addEventListener('click', () => {
        hideRecentBooking();
        scheduleNextActivity();
      });

      scheduleNextActivity();
    }

    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('hidden') === false;
        menuBtn.setAttribute('aria-expanded', open);
        menuBtn.innerHTML = open
          ? '<i data-lucide="x" class="h-7 w-7"></i>'
          : '<i data-lucide="menu" class="h-7 w-7"></i>';

        if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
          lucide.createIcons();
        }
      });

      document.querySelectorAll('#mobileMenu a').forEach((a) => {
        a.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          menuBtn.innerHTML = '<i data-lucide="menu" class="h-7 w-7"></i>';
          if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
            lucide.createIcons();
          }
        });
      });
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    const counters = document.querySelectorAll('[data-counter]');
    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          const dur = 1400;
          const start = performance.now();

          function tick(now) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(eased * target).toLocaleString() + suffix;

            if (p < 1) {
              requestAnimationFrame(tick);
            }
          }

          requestAnimationFrame(tick);
          counterIO.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => counterIO.observe(counter));

    const calcBtn = document.getElementById('calcBtn');
    const quoteForm = document.getElementById('quoteform');
    const formMsg = document.getElementById('formMsg');
    const pickupDate = document.getElementById('pickupDate');
    const lastMileDate = document.getElementById('lastMileDate');
    if (pickupDate || lastMileDate) {
      const today = new Date();
      const localDate = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, '0'), String(today.getDate()).padStart(2, '0')].join('-');
      if (pickupDate) pickupDate.min = localDate;
      if (lastMileDate) lastMileDate.min = localDate;
    }
    const emailInputs = document.querySelectorAll('#quoteform input[type="email"], #lastMileForm input[type="email"], #carrierForm input[type="email"], #newsForm input[type="email"]');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const getEmailError = () => document.documentElement.lang === 'fr'
      ? 'Veuillez saisir une adresse courriel valide.'
      : 'Please enter a valid email address.';

    const hideEmailError = (input) => {
      input.setCustomValidity('');
      input.parentElement?.querySelector('.email-error-popup')?.remove();
      input.classList.remove('email-input-error');
    };

    const showEmailError = (input) => {
      const wrapper = input.parentElement;
      if (!wrapper) return;
      input.setCustomValidity(getEmailError());
      input.classList.add('email-input-error');
      wrapper.classList.add('email-field');
      let popup = wrapper.querySelector('.email-error-popup');
      if (!popup) {
        popup = document.createElement('div');
        popup.className = 'email-error-popup';
        wrapper.appendChild(popup);
      }
      popup.textContent = getEmailError();
    };

    emailInputs.forEach((input) => {
      input.pattern = '[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}';
      input.addEventListener('blur', () => {
        if (input.value && !emailPattern.test(input.value.trim())) showEmailError(input);
      });
      input.addEventListener('input', () => hideEmailError(input));
      input.addEventListener('invalid', () => {
        if (!input.validity.valid) showEmailError(input);
      }, true);
    });

    const formatPhoneNumber = (value) => {
      let digits = value.replace(/\D/g, '');
      if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
      digits = digits.slice(0, 10);
      if (digits.length <= 3) return digits ? `(${digits}` : '';
      if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    };

    document.querySelectorAll('#freightPhone, #lastMilePhone').forEach((input) => {
      input.maxLength = 14;
      input.addEventListener('input', () => {
        input.value = formatPhoneNumber(input.value);
        input.setCustomValidity('');
        input.classList.remove('phone-input-error');
        input.parentElement?.parentElement?.querySelector('.phone-error-popup')?.remove();
      });
    });

    const countryButton = document.getElementById('freightPhoneCountryButton');
    const countryMenu = document.getElementById('freightPhoneCountryMenu');
    if (countryButton && countryMenu) {
      countryButton.addEventListener('click', () => {
        const isOpen = !countryMenu.classList.contains('hidden');
        countryMenu.classList.toggle('hidden', isOpen);
        countryButton.setAttribute('aria-expanded', String(!isOpen));
      });
      countryMenu.querySelectorAll('[data-country]').forEach((option) => {
        option.addEventListener('click', () => {
          const selectedFlag = option.querySelector('.flag-icon')?.className || 'flag-icon flag-canada';
          const buttonFlag = countryButton.querySelector('.flag-icon');
          const buttonCountry = countryButton.querySelector('.country-short');
          if (buttonFlag) buttonFlag.className = selectedFlag;
          if (buttonCountry) buttonCountry.textContent = option.dataset.short || 'CA';
          countryMenu.classList.add('hidden');
          countryButton.setAttribute('aria-expanded', 'false');
        });
      });
      document.addEventListener('click', (event) => {
        if (!countryButton.contains(event.target) && !countryMenu.contains(event.target)) {
          countryMenu.classList.add('hidden');
          countryButton.setAttribute('aria-expanded', 'false');
        }
      });
    }

    const phoneInputs = document.querySelectorAll('#freightPhone, #lastMilePhone');
    const phonePattern = /^[2-9]\d{9}$/;
    const getPhoneError = () => document.documentElement.lang === 'fr'
      ? 'Veuillez saisir un numéro de téléphone valide.'
      : 'Please enter a valid phone number.';

    const showPhoneError = (input) => {
      const group = input.parentElement;
      const wrapper = group?.parentElement;
      if (!group || !wrapper) return;
      input.setCustomValidity(getPhoneError());
      input.classList.add('phone-input-error');
      wrapper.classList.add('phone-field');
      let popup = wrapper.querySelector('.phone-error-popup');
      if (!popup) {
        popup = document.createElement('div');
        popup.className = 'phone-error-popup';
        wrapper.appendChild(popup);
      }
      popup.textContent = getPhoneError();
    };

    phoneInputs.forEach((input) => {
      const isValidPhone = () => phonePattern.test(input.value.replace(/\D/g, ''));
      input.addEventListener('blur', () => {
        if (!isValidPhone()) showPhoneError(input);
      });
      input.addEventListener('invalid', () => {
        if (!input.validity.valid) showPhoneError(input);
      }, true);
    });

    const quoteControls = document.querySelectorAll('#quoteform [required], #lastMileForm [required], #carrierForm [required], #newsForm [required]');
    quoteControls.forEach((control) => {
      control.addEventListener('invalid', () => {
        control.classList.add('required-input-error');
      }, true);
      control.addEventListener('input', () => {
        control.classList.remove('required-input-error');
      });
      control.addEventListener('change', () => {
        control.classList.remove('required-input-error');
      });
    });

    const locationData = {
      Canada: {
        Alberta: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge'],
        'British Columbia': ['Vancouver', 'Surrey', 'Victoria', 'Kelowna', 'Prince George'],
        Manitoba: ['Winnipeg', 'Brandon', 'Thompson'],
        'New Brunswick': ['Moncton', 'Saint John', 'Fredericton'],
        'Newfoundland and Labrador': ["St. John's", 'Corner Brook', 'Gander'],
        'Nova Scotia': ['Halifax', 'Sydney', 'Truro'],
        Ontario: ['Toronto', 'Mississauga', 'Brampton', 'Hamilton', 'Ottawa', 'London', 'Windsor', 'Barrie', 'Thunder Bay'],
        'Prince Edward Island': ['Charlottetown', 'Summerside'],
        Quebec: ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Sherbrooke', 'Trois-Rivieres'],
        Saskatchewan: ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw'],
        'Northwest Territories': ['Yellowknife', 'Hay River'],
        Nunavut: ['Iqaluit', 'Rankin Inlet'],
        Yukon: ['Whitehorse', 'Dawson City'],
      },
      'United States': {
        Alabama: ['Birmingham', 'Mobile', 'Montgomery'], Alaska: ['Anchorage', 'Fairbanks', 'Juneau'],
        Arizona: ['Phoenix', 'Tucson', 'Mesa'], Arkansas: ['Little Rock', 'Fort Smith', 'Fayetteville'],
        California: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'Fresno'],
        Colorado: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins'], Connecticut: ['Bridgeport', 'New Haven', 'Hartford'],
        Delaware: ['Wilmington', 'Dover', 'Newark'], Florida: ['Miami', 'Orlando', 'Tampa', 'Jacksonville'],
        Georgia: ['Atlanta', 'Savannah', 'Augusta', 'Columbus'], Hawaii: ['Honolulu', 'Hilo', 'Kahului'],
        Idaho: ['Boise', 'Idaho Falls', 'Nampa'], Illinois: ['Chicago', 'Rockford', 'Peoria', 'Springfield'],
        Indiana: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend'], Iowa: ['Des Moines', 'Cedar Rapids', 'Davenport'],
        Kansas: ['Wichita', 'Kansas City', 'Topeka'], Kentucky: ['Louisville', 'Lexington', 'Bowling Green'],
        Louisiana: ['New Orleans', 'Baton Rouge', 'Shreveport'], Maine: ['Portland', 'Bangor', 'Augusta'],
        Maryland: ['Baltimore', 'Frederick', 'Rockville', 'Annapolis'], Massachusetts: ['Boston', 'Worcester', 'Springfield'],
        Michigan: ['Detroit', 'Grand Rapids', 'Lansing', 'Flint'], Minnesota: ['Minneapolis', 'St. Paul', 'Duluth', 'Rochester'],
        Mississippi: ['Jackson', 'Gulfport', 'Southaven'], Missouri: ['Kansas City', 'St. Louis', 'Springfield', 'Columbia'],
        Montana: ['Billings', 'Missoula', 'Great Falls'], Nebraska: ['Omaha', 'Lincoln', 'Bellevue'],
        Nevada: ['Las Vegas', 'Reno', 'Henderson'], 'New Hampshire': ['Manchester', 'Nashua', 'Concord'],
        'New Jersey': ['Newark', 'Jersey City', 'Paterson', 'Trenton'], 'New Mexico': ['Albuquerque', 'Santa Fe', 'Las Cruces'],
        'New York': ['New York City', 'Buffalo', 'Rochester', 'Albany', 'Syracuse'], 'North Carolina': ['Charlotte', 'Raleigh', 'Greensboro', 'Wilmington'],
        'North Dakota': ['Fargo', 'Bismarck', 'Grand Forks'], Ohio: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo'],
        Oklahoma: ['Oklahoma City', 'Tulsa', 'Norman'], Oregon: ['Portland', 'Eugene', 'Salem', 'Bend'],
        Pennsylvania: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Harrisburg'], 'Rhode Island': ['Providence', 'Warwick', 'Cranston'],
        'South Carolina': ['Charleston', 'Columbia', 'Greenville'], 'South Dakota': ['Sioux Falls', 'Rapid City', 'Aberdeen'],
        Tennessee: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga'], Texas: ['Dallas', 'Houston', 'Austin', 'San Antonio', 'El Paso'],
        Utah: ['Salt Lake City', 'West Valley City', 'Provo'], Vermont: ['Burlington', 'South Burlington', 'Montpelier'],
        Virginia: ['Virginia Beach', 'Richmond', 'Norfolk', 'Arlington'], Washington: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver'],
        'West Virginia': ['Charleston', 'Huntington', 'Morgantown'], Wisconsin: ['Milwaukee', 'Madison', 'Green Bay'],
        Wyoming: ['Cheyenne', 'Casper', 'Laramie'],
      },
    };

    const locationPlaceholder = (type) => {
      const french = document.documentElement.lang === 'fr';
      const labels = {
        country: french ? 'Sélectionnez un pays' : 'Select country',
        region: french ? 'Sélectionnez une province ou un État' : 'Select province or state',
        city: french ? 'Sélectionnez une ville' : 'Select city',
      };
      return labels[type];
    };

    const setLocationOptions = (select, options, type) => {
      select.innerHTML = `<option value="" selected disabled>${locationPlaceholder(type)}</option>`;
      options.forEach((option) => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
      });
    };

    const connectLocationFields = (prefix, countryOptions) => {
      const country = document.getElementById(`${prefix}Country`);
      const region = document.getElementById(`${prefix}Region`);
      if (!country || !region) return;

      if (countryOptions) {
        country.innerHTML = countryOptions[0] === ''
          ? `<option value="" selected disabled>${locationPlaceholder('country')}</option>`
          : '';
        countryOptions.forEach((option) => {
          if (!option) return;
          const optionElement = document.createElement('option');
          optionElement.value = option;
          optionElement.textContent = option;
          country.appendChild(optionElement);
        });
      }

      country.addEventListener('change', () => {
        setLocationOptions(region, Object.keys(locationData[country.value] || {}), 'region');
        region.disabled = false;
        country.classList.remove('required-input-error');
        region.classList.remove('required-input-error');
      });

      if (country.value) {
        setLocationOptions(region, Object.keys(locationData[country.value] || {}), 'region');
        region.disabled = false;
      }

      region.addEventListener('change', () => {
        region.classList.remove('required-input-error');
      });
    };

    connectLocationFields('origin', ['','Canada', 'United States']);
    connectLocationFields('destination', ['','Canada', 'United States']);
    connectLocationFields('lastOrigin', ['Canada']);
    connectLocationFields('lastDestination', ['Canada']);

    window.addEventListener('languagechange', () => {
      document.querySelectorAll('#originCountry, #destinationCountry').forEach((select) => {
        const selected = select.value;
        select.options[0].textContent = locationPlaceholder('country');
        select.value = selected;
      });
      document.querySelectorAll('#originRegion, #destinationRegion, #lastOriginRegion, #lastDestinationRegion').forEach((select) => {
        if (select.options[0]) select.options[0].textContent = locationPlaceholder('region');
      });
    });
    const weightInput = document.getElementById('weightInput')
      || quoteForm?.querySelector('input[placeholder^="Weight"]');
    const weightUnit = document.getElementById('weightUnit');
    const dimensionsInput = document.getElementById('dimensionsInput');
    const freightType = document.getElementById('freightType')
      || quoteForm?.querySelector('select');
    let estimateBox = document.getElementById('estimateBox');
    let estimateValue = document.getElementById('estimateValue');

    if (calcBtn && !estimateBox) {
      estimateBox = document.createElement('div');
      estimateBox.className = 'hidden rounded-lg border border-orange/30 bg-orange/10 px-4 py-4 text-center text-navy';
      estimateBox.innerHTML = '<span class="block text-sm font-semibold">Estimated range:</span><span class="block mt-1 font-mono text-lg font-bold text-orange"></span>';
      calcBtn.closest('div')?.after(estimateBox);
      estimateValue = estimateBox.querySelector('span:last-child');
    }

    if (calcBtn && weightInput && freightType) {
      calcBtn.addEventListener('click', () => {
        const estimateFields = [
          freightType,
          document.getElementById('originCountry'),
          document.getElementById('originRegion'),
          document.getElementById('originAddress'),
          document.getElementById('destinationCountry'),
          document.getElementById('destinationRegion'),
          document.getElementById('destinationAddress'),
          weightInput,
          weightUnit,
          dimensionsInput,
        ].filter(Boolean);
        const invalidFields = estimateFields.filter((field) => !field.checkValidity());
        if (invalidFields.length) {
          invalidFields.forEach((field) => field.classList.add('required-input-error'));
          estimateBox?.classList.add('hidden');
          invalidFields[0].focus();
          return;
        }

        const originCountry = document.getElementById('originCountry').value;
        const originRegion = document.getElementById('originRegion').value;
        const destinationCountry = document.getElementById('destinationCountry').value;
        const destinationRegion = document.getElementById('destinationRegion').value;
        const originRegions = Object.keys(locationData[originCountry] || {});
        const destinationRegions = Object.keys(locationData[destinationCountry] || {});
        const originIndex = Math.max(0, originRegions.indexOf(originRegion));
        const destinationIndex = Math.max(0, destinationRegions.indexOf(destinationRegion));
        const laneKey = `${originCountry}-${originRegion}-${destinationCountry}-${destinationRegion}`;
        const laneHash = [...laneKey].reduce((total, character) => total + character.charCodeAt(0), 0);
        const regionalFactor = 0.94 + (laneHash % 13) * 0.01;
        const distanceFactor = 1 + (Math.abs(originIndex - destinationIndex) % 7) * 0.025;
        const crossBorderFactor = originCountry !== destinationCountry ? 1.16 : 1;
        const enteredWeight = parseFloat(weightInput.value) || 24000;
        const w = weightUnit?.value === 'kg' ? enteredWeight * 2.20462 : enteredWeight;
        const mult = parseFloat(freightType.value) || 1;
        const base = 850 + (w / 1000) * 38;
        const laneMultiplier = regionalFactor * distanceFactor * crossBorderFactor;
        const low = Math.round((base * mult * laneMultiplier * 0.92) / 5) * 5;
        const high = Math.round((base * mult * laneMultiplier * 1.18) / 5) * 5;

        if (estimateValue) {
          estimateValue.textContent = `$${low.toLocaleString()} – $${high.toLocaleString()} CAD`;
        }

        if (estimateBox) {
          estimateBox.classList.remove('hidden');
        }
      });
    }

    if (quoteForm) {
      quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (formMsg) {
          formMsg.classList.remove('hidden');
        }
      });
    }

    const lastMileForm = document.getElementById('lastMileForm');
    const lastMileFormMsg = document.getElementById('lastMileFormMsg');

    if (lastMileForm) {
      lastMileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (lastMileFormMsg) {
          lastMileFormMsg.classList.remove('hidden');
        }
      });
    }

    const trackForm = document.getElementById('trackForm');
    const trackDateInput = document.getElementById('trackDateCode');
    const trackIdInput = document.getElementById('trackGenericId');
    const trackInputGroup = document.querySelector('.tracking-input-group');
    const trackWaybill = document.getElementById('trackWaybill');
    const trackResult = document.getElementById('trackResult');
    const trackError = document.getElementById('trackError');
    const trackingPattern = /^BAK-(0[1-9]|1[0-2])\d{2}-\d{6}$/;
    const trackingErrorMessage = 'Please enter a valid BAK tracking number in the format BAK-0826-482133.';

    const validateTrackingNumber = (showError = false) => {
      if (!trackDateInput || !trackIdInput) return false;
      const dateCode = trackDateInput.value.trim();
      const genericId = trackIdInput.value.trim();
      trackDateInput.value = dateCode;
      trackIdInput.value = genericId;
      const trackingNumber = `BAK-${dateCode}-${genericId}`;
      const isValid = trackingPattern.test(trackingNumber);
      trackInputGroup?.classList.toggle('tracking-input-error', !isValid && showError);
      if (trackError) {
        trackError.textContent = trackingErrorMessage;
        trackError.classList.toggle('hidden', isValid || !showError);
      }
      return { isValid, trackingNumber };
    };

    if (trackForm && trackDateInput && trackIdInput && trackWaybill && trackResult) {
      [trackDateInput, trackIdInput].forEach((input) => input.addEventListener('input', () => {
        trackInputGroup?.classList.remove('tracking-input-error');
        trackError?.classList.add('hidden');
        trackResult?.classList.add('hidden');
      }));

      trackDateInput.addEventListener('blur', () => {
        validateTrackingNumber(false);
      });
      trackIdInput.addEventListener('blur', () => {
        validateTrackingNumber(false);
      });

      trackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const validation = validateTrackingNumber(true);
        if (!validation.isValid) {
          trackResult.classList.add('hidden');
          trackDateInput.focus();
          return;
        }
        trackWaybill.textContent = 'WAYBILL # ' + validation.trackingNumber;
        trackResult.classList.remove('hidden');
      });
    }

    const carrierForm = document.getElementById('carrierForm');
    if (carrierForm) {
      carrierForm.addEventListener('submit', (e) => {
        e.preventDefault();
      });
    }

    const newsForm = document.getElementById('newsForm');
    const newsMsg = document.getElementById('newsMsg');

    if (newsForm) {
      newsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (newsMsg) {
          newsMsg.classList.remove('hidden');
        }
      });
    }

    const coverageMapEl = document.getElementById('coverageMap');
    if (coverageMapEl && typeof window.L !== 'undefined') {
      const map = window.L.map('coverageMap', {
        zoomControl: true,
        scrollWheelZoom: false,
        dragging: true,
        attributionControl: true,
        preferCanvas: true,
      }).setView([49.5, -97.5], 3.5);

      const mapContainer = map.getContainer();
      mapContainer.addEventListener('wheel', (event) => {
        if (event.ctrlKey) {
          map.scrollWheelZoom.enable();
        } else {
          map.scrollWheelZoom.disable();
        }
      }, { capture: true, passive: true });

      window.L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
        detectRetina: true,
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      }).addTo(map);

      const cities = [
        { name: 'Toronto, ON', coords: [43.6532, -79.3832] },
        { name: 'Mississauga, ON', coords: [43.5890, -79.6441] },
        { name: 'Montreal, QC', coords: [45.5017, -73.5673] },
        { name: 'Halifax, NS', coords: [44.6488, -63.5752] },
        { name: 'Detroit, MI', coords: [42.3314, -83.0458] },
        { name: 'Chicago, IL', coords: [41.8781, -87.6298] },
        { name: 'Cleveland, OH', coords: [41.4993, -81.6944] },
        { name: 'New York, NY', coords: [40.7128, -74.0060] },
        { name: 'Philadelphia, PA', coords: [39.9526, -75.1652] },
        { name: 'Dallas, TX', coords: [32.7767, -96.7970] },
        { name: 'Atlanta, GA', coords: [33.7490, -84.3880] },
        { name: 'Memphis, TN', coords: [35.1495, -90.0490] },
        { name: 'Denver, CO', coords: [39.7392, -104.9903] },
        { name: 'Los Angeles, CA', coords: [34.0522, -118.2437] },
        { name: 'Phoenix, AZ', coords: [33.4484, -112.0740] },
        { name: 'Vancouver, BC', coords: [49.2827, -123.1207] },
        { name: 'Seattle, WA', coords: [47.6062, -122.3321] },
        { name: 'Calgary, AB', coords: [51.0447, -114.0719] },
        { name: 'Edmonton, AB', coords: [53.5444, -113.4909] },
        { name: 'Winnipeg, MB', coords: [49.8951, -97.1384] },
        { name: 'Regina, SK', coords: [50.4452, -104.6189] },
        { name: 'Saskatoon, SK', coords: [52.1332, -106.6700] },
        { name: 'Ottawa, ON', coords: [45.4215, -75.6972] },
        { name: 'Quebec City, QC', coords: [46.8139, -71.2080] },
        { name: 'Boston, MA', coords: [42.3601, -71.0589] },
        { name: 'Washington, DC', coords: [38.9072, -77.0369] },
        { name: 'Columbus, OH', coords: [39.9612, -82.9988] },
        { name: 'Indianapolis, IN', coords: [39.7684, -86.1581] },
        { name: 'Nashville, TN', coords: [36.1627, -86.7816] },
        { name: 'Charlotte, NC', coords: [35.2271, -80.8431] },
        { name: 'Minneapolis, MN', coords: [44.9778, -93.2650] },
        { name: 'Houston, TX', coords: [29.7604, -95.3698] },
        { name: 'San Antonio, TX', coords: [29.4241, -98.4936] },
        { name: 'San Francisco, CA', coords: [37.7749, -122.4194] },
        { name: 'Salt Lake City, UT', coords: [40.7608, -111.8910] },
      ];

      const routes = [
        { coords: [[43.6532, -79.3832], [43.5890, -79.6441]], color: '#FF7A00' },
        { coords: [[43.6532, -79.3832], [45.5017, -73.5673]], color: '#FF7A00' },
        { coords: [[43.6532, -79.3832], [44.6488, -63.5752]], color: '#FF7A00' },
        { coords: [[43.6532, -79.3832], [42.3314, -83.0458], [41.8781, -87.6298]], color: '#FF7A00' },
        { coords: [[42.3314, -83.0458], [41.4993, -81.6944]], color: '#FF7A00' },
        { coords: [[43.6532, -79.3832], [40.7128, -74.0060], [39.9526, -75.1652]], color: '#FF7A00' },
        { coords: [[41.8781, -87.6298], [32.7767, -96.7970]], color: '#FF7A00' },
        { coords: [[32.7767, -96.7970], [33.7490, -84.3880]], color: '#FF7A00' },
        { coords: [[33.7490, -84.3880], [35.1495, -90.0490]], color: '#FF7A00' },
        { coords: [[35.1495, -90.0490], [39.7392, -104.9903]], color: '#FF7A00' },
        { coords: [[39.7392, -104.9903], [34.0522, -118.2437]], color: '#FF7A00' },
        { coords: [[34.0522, -118.2437], [33.4484, -112.0740]], color: '#FF7A00' },
        { coords: [[49.2827, -123.1207], [47.6062, -122.3321]], color: '#FF7A00' },
        { coords: [[51.0447, -114.0719], [53.5444, -113.4909]], color: '#FF7A00' },
        { coords: [[51.0447, -114.0719], [43.6532, -79.3832]], color: '#FF7A00' },
        { coords: [[44.6488, -63.5752], [45.5017, -73.5673], [43.6532, -79.3832]], color: '#FF7A00' },
        { coords: [[45.5017, -73.5673], [42.3601, -71.0589], [40.7128, -74.0060]], color: '#FF7A00' },
        { coords: [[40.7128, -74.0060], [39.9526, -75.1652], [38.9072, -77.0369]], color: '#FF7A00' },
        { coords: [[43.6532, -79.3832], [42.3314, -83.0458], [41.4993, -81.6944]], color: '#FF7A00' },
        { coords: [[41.8781, -87.6298], [41.4993, -81.6944], [40.7128, -74.0060]], color: '#FF7A00' },
        { coords: [[32.7767, -96.7970], [29.7604, -95.3698], [29.4241, -98.4936]], color: '#FF7A00' },
        { coords: [[33.7490, -84.3880], [30.2672, -97.7431], [32.7767, -96.7970]], color: '#FF7A00' },
        { coords: [[34.0522, -118.2437], [36.1699, -115.1398], [33.4484, -112.0740]], color: '#FF7A00' },
        { coords: [[47.6062, -122.3321], [45.5152, -122.6784], [39.7392, -104.9903]], color: '#FF7A00' },
        { coords: [[51.0447, -114.0719], [49.2827, -123.1207], [47.6062, -122.3321]], color: '#FF7A00' },
        { coords: [[43.6532, -79.3832], [42.3314, -83.0458], [39.7392, -104.9903]], color: '#FF7A00' },
        { coords: [[53.5444, -113.4909], [52.1332, -106.6700], [50.4452, -104.6189], [49.8951, -97.1384]], color: '#FF7A00' },
        { coords: [[49.8951, -97.1384], [44.9778, -93.2650], [41.8781, -87.6298]], color: '#FF7A00' },
        { coords: [[49.8951, -97.1384], [43.6532, -79.3832]], color: '#FF7A00' },
        { coords: [[46.8139, -71.2080], [45.5017, -73.5673], [45.4215, -75.6972]], color: '#FF7A00' },
        { coords: [[45.4215, -75.6972], [43.6532, -79.3832], [42.3314, -83.0458]], color: '#FF7A00' },
        { coords: [[39.9612, -82.9988], [39.7684, -86.1581], [41.8781, -87.6298]], color: '#FF7A00' },
        { coords: [[39.7684, -86.1581], [36.1627, -86.7816], [33.7490, -84.3880]], color: '#FF7A00' },
        { coords: [[38.9072, -77.0369], [35.2271, -80.8431], [33.7490, -84.3880]], color: '#FF7A00' },
        { coords: [[40.7128, -74.0060], [38.9072, -77.0369], [35.2271, -80.8431]], color: '#FF7A00' },
        { coords: [[39.7392, -104.9903], [40.7608, -111.8910], [37.7749, -122.4194]], color: '#FF7A00' },
        { coords: [[29.7604, -95.3698], [29.4241, -98.4936], [32.7767, -96.7970]], color: '#FF7A00' },
        { coords: [[36.1627, -86.7816], [29.7604, -95.3698]], color: '#FF7A00' },
        { coords: [[37.7749, -122.4194], [34.0522, -118.2437], [32.7767, -96.7970]], color: '#FF7A00' },
        { coords: [[43.6532, -79.3832], [39.9612, -82.9988], [33.7490, -84.3880]], color: '#FF7A00' },
        { coords: [[49.2827, -123.1207], [51.0447, -114.0719], [39.7392, -104.9903]], color: '#FF7A00' },
      ];

      routes.forEach((route) => {
        window.L.polyline(route.coords, {
          color: route.color,
          weight: 2.2,
          opacity: 0.7,
          lineCap: 'round',
          lineJoin: 'round',
        }).addTo(map);
      });

      cities.forEach((city) => {
        window.L.circleMarker(city.coords, {
          radius: 4.2,
          color: 'rgba(255,255,255,0.72)',
          weight: 1,
          fillColor: '#3B82F6',
          fillOpacity: 0.95,
        }).addTo(map);
      });

      const bounds = window.L.latLngBounds(cities.map((city) => city.coords));
      map.fitBounds(bounds.pad(0.18));
      window.setTimeout(() => map.invalidateSize(), 150);
    }

  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
