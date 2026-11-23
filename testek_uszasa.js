window.FELADAT_ADATOK = {
  cim: "testek_uszasa",
  feladat_id: "h5p_testek_uszasa",
  feladat: "testek_uszasa",
  feladatok: [
    {
      cim: "1. Fogalmi keresztrejtvény (Tárgyi tudás)",
      tipus: "crossword",
      pont: 5,
      leiras: "Oldd meg a testek úszásához, lebegéséhez és elmerüléséhez kapcsolódó keresztrejtvényt!",
      szavak: [
        {
          szam: 1,
          sor: 2,
          oszlop: 1,
          irany: "V",
          szo: "FELHAJTÓERŐ",
          meghatarozas: "A folyadékba merülő testre ható, függőlegesen felfelé mutató erő."
        },
        {
          szam: 2,
          sor: 1,
          oszlop: 3,
          irany: "F",
          szo: "LEBEGÉS",
          meghatarozas: "Ez az állapot jön létre, ha a folyadékba merült test sűrűsége megegyezik a folyadék sűrűségével."
        },
        {
          szam: 3,
          sor: 5,
          oszlop: 3,
          irany: "V",
          szo: "GRAVITÁCIÓ",
          meghatarozas: "Ez a lefelé mutató erő tart egyensúlyt a felhajtóerővel úszáskor és lebegéskor."
        },
        {
          szam: 4,
          sor: 1,
          oszlop: 8,
          irany: "F",
          szo: "TÉRFOGAT",
          meghatarozas: "A kiszorított folyadéknak ez a mennyisége megegyezik a test bemerülő részének méretével."
        },
        {
          szam: 5,
          sor: 7,
          oszlop: 8,
          irany: "V",
          szo: "TENGELYLÁDA",
          meghatarozas: "A hajók oldalára festett jelzés, amely a biztonságos merülési mélységet mutatja különböző vizekben."
        }
      ]
    },
    {
      cim: "2. Az úszás, lebegés és elmerülés feltételei (Tárgyi tudás)",
      tipus: "drag_words",
      pont: 4,
      leiras: "Egészítsd ki a folyadékba helyezett testek viselkedésére vonatkozó szabályokat!",
      szoveg: "Ha egy tömör test sűrűsége nagyobb, mint a folyadék sűrűsége, akkor a test *elmerül*. Ha a két sűrűség pontosan megegyezik, a test a folyadék belsejében bárhol *lebeg*. Ha a test átlagsűrűsége kisebb a folyadékénál, akkor felemelkedik a felszínre, és *úszik* rajta. Úszás közben a testre ható gravitációs erő nagysága *egyenlő* a bemerülő rész által kiszorított folyadék súlyával.",
      extra: ["nagyobb", "kisebb", "lebegő", "lesüllyed"]
    },
    {
      cim: "3. Mi történik a vízbe tett tárgyakkal? (Tárgyi tudás)",
      tipus: "group",
      pont: 4,
      leiras: "Csoportosítsd az alábbi tárgyakat és anyagokat aszerint, hogy a tiszta vízben (sűrűsége 1000 kg/m³) elmerülnek vagy úsznak a felszínén!",
      kategoriak: ["Úszik a víz felszínén", "Elmerül a vízben"],
      elemek: [
        { szoveg: "Jégkocka (sűrűsége: 920 kg/m³)", csoport: 0 },
        { szoveg: "Tömör vasgolyó (sűrűsége: 7800 kg/m³)", csoport: 1 },
        { szoveg: "Parafadugó (sűrűsége: 240 kg/m³)", csoport: 0 },
        { szoveg: "Üveggolyó (sűrűsége: 2500 kg/m³)", csoport: 1 },
        { szoveg: "Étolajcsepp (sűrűsége: 920 kg/m³)", csoport: 0 },
        { szoveg: "Tömör alumíniumkocka (sűrűsége: 2700 kg/m³)", csoport: 1 }
      ]
    },
    {
      cim: "4. Három golyó ugyanabban a folyadékban (Kompetenciaalapú ábraelemzés)",
      tipus: "hotspot",
      pont: 4,
      leiras: "Tanulmányozd az ábrát! Három, pontosan egyforma térfogatú, de különböző anyagú golyót (1, 2, 3) tettünk egy vízzel teli főzőpohárba. Kattints a számozott pontokra, és válaszolj a kérdésekre!",
      svg: `<svg viewBox="0 0 400 220" width="100%" height="auto" xmlns="http://w3.org">
        <rect x="0" y="0" width="400" height="220" fill="#f8fafc" rx="8"/>
        <!-- Főzőpohár -->
        <path d="M 80 30 L 80 190 L 320 190 L 320 30" fill="none" stroke="#334155" stroke-width="3"/>
        <!-- Víz -->
        <rect x="81.5" y="70" width="237" height="118.5" fill="#bae6fd" opacity="0.75"/>
        <line x1="80" y1="70" x2="320" y2="70" stroke="#0284c7" stroke-width="2"/>
        <!-- 1. golyó: Úszó (félig merül) -->
        <circle cx="135" cy="70" r="22" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
        <!-- 2. golyó: Lebegő -->
        <circle cx="205" cy="125" r="22" fill="#4ade80" stroke="#15803d" stroke-width="2"/>
        <!-- 3. golyó: Elmerült -->
        <circle cx="270" cy="167" r="22" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
        <text x="200" y="210" font-family="sans-serif" font-size="12" fill="#1e293b" text-anchor="middle">Egyforma térfogatú (V) golyók vízben</text>
      </svg>`,
      pontok: [
        {
          szam: 1,
          x: 34,
          y: 32,
          kerdes: "Az 1-es golyó térfogatának pontosan a fele merül a vízbe. Mit tudhatunk meg ebből a golyó sűrűségéről?",
          opciok: [
            "A golyó sűrűsége pontosan a fele a víz sűrűségének (500 kg/m³).",
            "A golyó sűrűsége kétszerese a víz sűrűségének (2000 kg/m³).",
            "A golyó sűrűsége megegyezik a víz sűrűségével (1000 kg/m³)."
          ],
          helyes: "A golyó sűrűsége pontosan a fele a víz sűrűségének (500 kg/m³)."
        },
        {
          szam: 2,
          x: 51,
          y: 57,
          kerdes: "Melyik golyóra hat a LEGKISEBB felhajtóerő a három közül?",
          opciok: [
            "Az 1-es golyóra, mert az szorítja ki a legkevesebb vizet.",
            "A 2-es golyóra, mert az lebeg középen.",
            "A 3-as golyóra, mert az fekszik a pohár alján."
          ],
          helyes: "Az 1-es golyóra, mert az szorítja ki a legkevesebb vizet."
        },
        {
          szam: 3,
          x: 68,
          y: 76,
          kerdes: "Hogyan viszonyul egymáshoz a 2-es és a 3-as golyóra ható felhajtóerő nagysága?",
          opciok: [
            "Egyenlőek, mert mindkettő teljes térfogatával a víz alá merül, így ugyanannyi vizet szorítanak ki.",
            "A 3-as golyóra nagyobb felhajtóerő hat, mert nagyobb a tömege.",
            "A 2-es golyóra nagyobb felhajtóerő hat, mert nem süllyedt le az aljára."
          ],
          helyes: "Egyenlőek, mert mindkettő teljes térfogatával a víz alá merül, így ugyanannyi vizet szorítanak ki."
        }
      ]
    },
    {
      cim: "5. Hogyan úszik a hatalmas acélhajó? (Kompetenciaalapú szövegértés)",
      tipus: "multi",
      pont: 4,
      leiras: "Olvasd el a szöveget, és jelöld meg az ÖSSZES helyes állítást!",
      szituacio: "Egy modern óceánjáró hajó teste több tízezer tonna acélból készül. Bár az acél sűrűsége közel nyolcszorosa a tengervíz sűrűségének (7850 kg/m³ szemben az 1025 kg/m³-rel), a hajó mégsem süllyed el. Sőt, amikor a hajó édesvízű folyótorkolatba hajt be a sós tengerből, szemmel láthatóan mélyebbre merül a vízben.",
      svg: `<svg viewBox="0 0 400 160" width="100%" height="auto" xmlns="http://w3.org">
        <rect x="0" y="0" width="400" height="160" fill="#f1f5f9" rx="8"/>
        <!-- Víz -->
        <rect x="0" y="95" width="400" height="65" fill="#38bdf8" opacity="0.7"/>
        <!-- Hajótest -->
        <polygon points="70,65 330,65 300,115 100,115" fill="#475569" stroke="#1e293b" stroke-width="2"/>
        <rect x="120" y="40" width="140" height="25" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
        <!-- Erőnyilak -->
        <line x1="200" y1="80" x2="200" y2="145" stroke="#ef4444" stroke-width="3"/>
        <polygon points="195,140 205,140 200,150" fill="#ef4444"/>
        <text x="210" y="142" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">G (gravitációs erő)</text>
        <line x1="185" y1="100" x2="185" y2="35" stroke="#15803d" stroke-width="3"/>
        <polygon points="180,40 190,40 185,30" fill="#15803d"/>
        <text x="175" y="32" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="end">F_fel (felhajtóerő)</text>
      </svg>`,
      opciok: [
        { szoveg: "A hajó belsejében nagy térfogatú, levegővel teli üregek vannak, így a hajó egészének átlagsűrűsége kisebb, mint a víz sűrűsége.", helyes: true },
        { szoveg: "Az édesvíz sűrűsége kisebb, mint a sós tengervízé, ezért ugyanakkora felhajtóerőhöz a hajónak nagyobb térfogatú vizet kell kiszorítania (mélyebbre merül).", helyes: true },
        { szoveg: "A hajóra ható felhajtóerő édesvízben kisebb lesz, mint a tengerben volt, miközben a hajó tömege nem változott.", helyes: false },
        { szoveg: "Ha a hajó oldalán léket üt egy szikla és a belső terek megtelnek vízzel, az átlagsűrűsége megnő, ezért a hajó elsüllyed.", helyes: true },
        { szoveg: "A hajó azért marad a felszínen, mert az acéllemez nem nedvesíti a tengervizet.", helyes: false }
      ]
    },
    {
      cim: "6. A tengeralattjáró merülése és emelkedése (Kompetenciaalapú folyamatrendezés)",
      tipus: "blanks",
      pont: 4,
      leiras: "Egészítsd ki a tengeralattjáró merülésének és felemelkedésének fizikai magyarázatát!",
      szituacio: "A tengeralattjárók kettős hajótesttel rendelkeznek. A két fal között úgynevezett ballaszttartályok találhatók, amelyekbe tengervizet engedhetnek, vagy sűrített levegővel kinyomhatják belőlük a vizet.",
      szoveg: "Amikor a tengeralattjáró le akar merülni, kinyitja a szelepeket, és vizet enged a ballaszttartályokba. Ezzel megnő a hajó tömege és [átlagsűrűsége|sűrűsége], miközben a külső térfogata (és így a rá ható felhajtóerő) nem változik. Amint a lefelé ható gravitációs erő nagyobb lesz, mint a [felhajtóerő|felhajtó], a hajó merülni kezd. Ha újra a felszínre akar emelkedni, sűrített [levegővel|levegőt] kiszorítja a vizet a tartályokból, így a hajó könnyebbé válik és felemelkedik."
    }
  ]
};