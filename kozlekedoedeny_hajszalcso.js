window.FELADAT_ADATOK = {
  cim: "kozlekedoedeny_hajszalcso",
  feladat_id: "h5p_kozlekedoedeny_hajszalcso",
  feladat: "kozlekedoedeny_hajszalcso",
  feladatok: [
   {
      cim: "1. Fogalmi keresztrejtvény (Tárgyi tudás)",
      tipus: "crossword",
      pont: 5,
      leiras: "Oldd meg a testek úszásához, lebegéséhez és elmerüléséhez kapcsolódó keresztrejtvényt!",
      szavak: [
        {
          szam: 1,
          sor: 3,
          oszlop: 1,
          irany: "V",
          szo: "FELHAJTÓERŐ",
          meghatarozas: "A folyadékba merülő testre ható, függőlegesen felfelé mutató erő."
        },
        {
          szam: 2,
          sor: 3,
          oszlop: 3,
          irany: "F",
          szo: "LEBEGÉS",
          meghatarozas: "Ez az állapot jön létre, ha a folyadékba merült test sűrűsége megegyezik a folyadék sűrűségével."
        },
        {
          szam: 3,
          sor: 9,
          oszlop: 3,
          irany: "V",
          szo: "SŰRŰSÉG",
          meghatarozas: "Ettől a fizikai mennyiségtől függ, hogy egy adott test úszik, lebeg vagy elmerül a folyadékban."
        },
        {
          szam: 4,
          sor: 1,
          oszlop: 10,
          irany: "F",
          szo: "TÉRFOGAT",
          meghatarozas: "A kiszorított folyadéknak ez a mennyisége megegyezik a test bemerülő részének méretével."
        },
        {
          szam: 5,
          sor: 7,
          oszlop: 7,
          irany: "V",
          szo: "ÁTLAGSŰRŰSÉG",
          meghatarozas: "Ez határozza meg, hogy a sok levegőt tartalmazó acélhajó a víz felszínén marad-e."
        }
      ]
    },
    {
      cim: "2. Alapfogalmak és törvényszerűségek (Tárgyi tudás)",
      tipus: "drag_words",
      pont: 4,
      leiras: "Egészítsd ki a közlekedőedényekre és hajszálcsövekre vonatkozó definíciókat a megfelelő szavakkal!",
      szoveg: "Az alul összekötött, felül nyitott edényeket *közlekedőedényeknek* nevezzük. Ha ezekbe egyféle, nyugalomban lévő folyadékot öntünk, akkor a folyadékszintek minden ágban *azonos* magasságban állnak be, függetlenül az ágak alakjától és *keresztmetszetétől*. A nagyon vékony, néhány tized milliméter belső átmérőjű csöveket *hajszálcsöveknek* hívjuk.",
      extra: ["különböző", "sűrűségétől", "manométereknek", "zárt"]
    },
    {
      cim: "3. Hajszálcsövesség a mindennapokban és a természetben (Tárgyi tudás)",
      tipus: "group",
      pont: 4,
      leiras: "Csoportosítsd az alábbi jelenségeket és eszközöket aszerint, hogy a közlekedőedények elvén vagy a hajszálcsövesség jelenségén alapulnak!",
      kategoriak: ["Közlekedőedények elve", "Hajszálcsövesség (kapillaritás)"],
      elemek: [
        { szoveg: "Vízszintmérő (slagos vízmérték) használata építkezésen", csoport: 0 },
        { szoveg: "A víz felszívódása a papírtörlő rostjai közé", csoport: 1 },
        { szoveg: "Teáskanna kiöntőcsövének kialakítása", csoport: 0 },
        { szoveg: "A talajvíz felemelkedése a téglafal apró repedéseiben (vizesedés)", csoport: 1 },
        { szoveg: "A növények gyökereiből a víz eljutása a levelekig", csoport: 1 },
        { szoveg: "Töltőtoll hegyének folyamatos tintaellátása", csoport: 1 }
      ]
    },
    {
      cim: "4. Kísérleti elrendezés elemzése (Kompetenciaalapú feladat)",
      tipus: "hotspot",
      pont: 4,
      leiras: "Tanulmányozd az ábrát! Egy közlekedőedény-rendszerbe vizet öntöttünk (1-es jelölés), mellette pedig két hajszálcsövet állítottunk különböző folyadékokba (2-es és 3-as jelölés). Kattints a számozott pontokra, és válaszolj a kérdésekre!",
      svg: `<svg viewBox="0 0 400 220" width="100%" height="auto" xmlns="http://w3.org">
        <rect x="0" y="0" width="400" height="220" fill="#f8fafc" rx="8"/>
        <!-- Közlekedőedény -->
        <path d="M 30 40 L 30 180 L 180 180 L 180 40 M 80 40 L 80 150 L 110 150 L 110 40 M 130 40 L 130 150 L 155 150 L 155 40" fill="none" stroke="#334155" stroke-width="3"/>
        <path d="M 31.5 90 L 78.5 90 L 78.5 151.5 L 111.5 151.5 L 111.5 90 L 128.5 90 L 128.5 151.5 L 156.5 151.5 L 156.5 90 L 178.5 90 L 178.5 178.5 L 31.5 178.5 Z" fill="#38bdf8" opacity="0.7"/>
        <line x1="20" y1="90" x2="190" y2="90" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,4"/>
        <!-- Pohár 1: Víz és hajszálcső (nedvesítő) -->
        <path d="M 220 90 L 220 180 L 290 180 L 290 90" fill="none" stroke="#334155" stroke-width="3"/>
        <rect x="221.5" y="130" width="67" height="48.5" fill="#38bdf8" opacity="0.7"/>
        <rect x="250" y="50" width="10" height="115" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
        <rect x="251" y="75" width="8" height="90" fill="#38bdf8" opacity="0.8"/>
        <!-- Pohár 2: Higany és hajszálcső (nem nedvesítő) -->
        <path d="M 310 90 L 310 180 L 380 180 L 380 90" fill="none" stroke="#334155" stroke-width="3"/>
        <rect x="311.5" y="130" width="67" height="48.5" fill="#94a3b8" opacity="0.8"/>
        <rect x="340" y="50" width="10" height="115" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
        <rect x="341" y="150" width="8" height="15" fill="#94a3b8"/>
        <text x="105" y="205" font-family="sans-serif" font-size="12" fill="#1e293b" text-anchor="middle">Közlekedőedény</text>
        <text x="255" y="205" font-family="sans-serif" font-size="12" fill="#1e293b" text-anchor="middle">Víz (üvegcső)</text>
        <text x="345" y="205" font-family="sans-serif" font-size="12" fill="#1e293b" text-anchor="middle">Higany (üvegcső)</text>
      </svg>`,
      pontok: [
        {
          szam: 1,
          x: 26,
          y: 41,
          kerdes: "Miért áll meg pontosan a szaggatott vonal magasságában a víz a közlekedőedény eltérő vastagságú és alakú ágaiban?",
          opciok: [
            "Mert azonos mélységben minden ágban azonos a hidrosztatikai nyomás.",
            "Mert minden ágban pontosan ugyanannyi liter víz található.",
            "Mert a levegő nyomása csak a legszélesebb ágra hat."
          ],
          helyes: "Mert azonos mélységben minden ágban azonos a hidrosztatikai nyomás."
        },
        {
          szam: 2,
          x: 64,
          y: 34,
          kerdes: "Miért emelkedett meg a vízszint a vékony üvegcsőben a pohárban lévő vízszint fölé?",
          opciok: [
            "Mert a víz nedvesíti az üveget (a tapadási erő erősebb a kohéziónál).",
            "Mert a vékony csőben kisebb a gravitációs gyorsulás.",
            "Mert a víz nem nedvesíti az üveget, így kiszorul a pohárból."
          ],
          helyes: "Mert a víz nedvesíti az üveget (a tapadási erő erősebb a kohéziónál)."
        },
        {
          szam: 3,
          x: 86,
          y: 68,
          kerdes: "Mit figyelhetsz meg a higanyba merített vékony üvegcsőben, és mi ennek az oka?",
          opciok: [
            "Kapilláris süllyedést: a higany nem nedvesíti az üveget, a részecskéi jobban vonzzák egymást, mint az üveg falát.",
            "Kapilláris emelkedést: a higany sűrűsége miatt felkúszik a cső falán.",
            "A higany szintje pontosan megegyezik a pohárban lévő szinttel."
          ],
          helyes: "Kapilláris süllyedést: a higany nem nedvesíti az üveget, a részecskéi jobban vonzzák egymást, mint az üveg falát."
        }
      ]
    },
    {
      cim: "5. Vízellátás és víztorony működése (Kompetenciaalapú szövegértés)",
      tipus: "multi",
      pont: 4,
      leiras: "Olvasd el a rövid esettanulmányt, majd jelöld meg az ÖSSZES igaz állítást!",
      szituacio: "Egy dombos vidéken fekvő kisvárosban a vízművek egy 35 méter magas víztornyot épített a település legmagasabb pontjára. A torony tartályából a föld alatti csőhálózaton keresztül jut el az ivóvíz a lakóházakba szivattyúk folyamatos működtetése nélkül is.",
      svg: `<svg viewBox="0 0 400 180" width="100%" height="auto" xmlns="http://w3.org">
        <rect x="0" y="0" width="400" height="180" fill="#f1f5f9" rx="8"/>
        <!-- Talaj -->
        <polygon points="0,150 150,150 220,165 400,165 400,180 0,180" fill="#86efac"/>
        <!-- Víztorony -->
        <rect x="45" y="60" width="20" height="90" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
        <rect x="30" y="20" width="50" height="40" rx="4" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
        <rect x="32" y="30" width="46" height="28" fill="#38bdf8"/>
        <line x1="20" y1="30" x2="380" y2="30" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="5,5"/>
        <!-- Csővezeték -->
        <polyline points="55,60 55,160 320,160 320,90" fill="none" stroke="#0284c7" stroke-width="4"/>
        <!-- Ház -->
        <rect x="280" y="80" width="70" height="85" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <polygon points="275,80 315,45 355,80" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
        <text x="55" y="15" font-family="sans-serif" font-size="11" fill="#1e293b" text-anchor="middle">Víztorony</text>
        <text x="315" y="125" font-family="sans-serif" font-size="11" fill="#1e293b" text-anchor="middle">Lakóház</text>
      </svg>`,
      opciok: [
        { szoveg: "A víztorony és a város vízvezeték-hálózata egy hatalmas közlekedőedényt alkot.", helyes: true },
        { szoveg: "A lakóházakban a víz elméletileg legfeljebb a víztorony tartályában lévő vízszint magasságáig (a szaggatott vonalig) tud feljutni.", helyes: true },
        { szoveg: "Ha a domb alján építenek egy új, 10 emeletes panelházat, amely magasabb a víztoronynál, a legfelső emeletre külön szivattyú nélkül is felmegy a víz.", helyes: false },
        { szoveg: "Minél mélyebben fekszik egy ház a víztorony vízszintjéhez képest, annál nagyobb a víznyomás a csapoknál.", helyes: true },
        { szoveg: "A csővezetékekben a víz a hajszálcsövesség miatt áramlik felfelé a házakba.", helyes: false }
      ]
    },
    {
      cim: "6. Mezőgazdasági öntözés és talajművelés (Kompetenciaalapú sorrendalkotás)",
      tipus: "order",
      pont: 4,
      leiras: "A gazdák tavasszal és nyáron gyakran lazítják (kapálják, boronálják) a talaj felső rétegét a nedvesség megőrzése érdekében. Állítsd helyes logikai sorrendbe a folyamat lépéseit az ok-okozati összefüggések alapján!",
      lepesek: [
        "A tömörödött talajban a talajszemcsék között nagyon vékony, összefüggő járatok (hajszálcsövek) alakulnak ki.",
        "A mélyebb rétegekben található talajvíz a hajszálcsövesség révén folyamatosan felemelkedik a talaj felszínére.",
        "A felszínre jutott víz a napsütés és a szél hatására gyorsan elpárolog, így a talaj kiszárad.",
        "A kapálással és talajlazítással a gazdák megtörik és kiszélesítik a felső rétegben lévő hajszálcsöveket.",
        "A kapillaritás megszűnése miatt a víz nem tud a felszínre szivárogni, így a növények gyökerei számára megmarad a nedvesség."
      ]
    }
  ]
};



