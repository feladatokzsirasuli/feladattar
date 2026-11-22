window.FELADAT_ADATOK = {
  feladat_id: "h5p_fenytan",
  feladat: "fenytan",
  cim: "Fénytan – Fényjelenségek és fogyatkozások",
  alcim: "7. osztályos interaktív fizika szorgalmi feladatsor (25 pont)",
  feladatok: [
    {
      szekcio: "I. rész: Tárgyi tudás mérése (12 pont)",
      cim: "Fényforrások és fényhatások",
      tipus: "drag_words",
      pont: 5,
      utasitas: "Kattints egy szóra a szóbankban, majd kattints a megfelelő üres helyre a szövegben! (1 zavaró szó is van a listában.)",
      szoveg: "A Nap és a csillagok *természetes* fényforrások, míg az izzólámpa és a gyertya *mesterséges* fényforrás. A növények növekedéséhez elengedhetetlen a napfény, amelyet a zöld színtestek a fotoszintézis során hasznosítanak – ez a fény *biológiai* hatása. A napelemek a fény *elektromos* hatását használják ki áramtermelésre, míg a sötét ruhák gyorsabb felmelegedése a fény *hőhatásával* magyarázható.",
      extra: ["kémiai"]
    },
    {
      szekcio: "I. rész: Tárgyi tudás mérése (12 pont)",
      cim: "Fényjelenségek fogalomtára",
      tipus: "blanks",
      pont: 4,
      utasitas: "Írd be a meghatározásoknak megfelelő fizikai fogalmakat! (1 pont / helyes fogalom)",
      definiciok: [
        {
          leiras: "Sok fénysugár együttese, amelyet a gyakorlatban is megfigyelhetünk (pl. egy zseblámpa csóvája).",
          megoldas: ["fénynyaláb"]
        },
        {
          leiras: "Az árnyéknak az a része, ahová a kiterjedt fényforrásnak csak egy részéből jut fény.",
          megoldas: ["félárnyék"]
        },
        {
          leiras: "Ez az égitest kerül a Nap és a Föld közé teljes napfogyatkozáskor.",
          megoldas: ["Hold", "a Hold"]
        },
        {
          leiras: "Az átlátszatlan test mögött kialakuló, fénytől elzárt térrész neve.",
          megoldas: ["árnyékkúp"]
        }
      ]
    },
    {
      szekcio: "I. rész: Tárgyi tudás mérése (12 pont)",
      cim: "Fogyatkozások összehasonlítása",
      tipus: "group",
      pont: 3,
      utasitas: "Kattints egy állításra, majd kattints arra a dobozra, amelyikbe tartozik! (Minden 2 helyes besorolás 1 pontot ér.)",
      svg: `<svg viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg">
        <rect width="760" height="230" rx="10" fill="#0f172a"/>
        <text x="20" y="28" fill="#fde047" font-size="14" font-weight="bold">1. Napfogyatkozás (Nap – Hold – Föld)</text>
        <circle cx="70" cy="75" r="32" fill="#facc15"/>
        <polygon points="70,43 390,68 390,82 70,107" fill="rgba(250,204,21,0.15)"/>
        <polygon points="240,65 390,75 240,85" fill="#020617"/>
        <circle cx="240" cy="75" r="10" fill="#cbd5e1"/>
        <circle cx="390" cy="75" r="22" fill="#38bdf8"/>
        <text x="52" y="122" fill="#fef08a" font-size="12">Nap</text>
        <text x="226" y="102" fill="#e2e8f0" font-size="12">Hold</text>
        <text x="376" y="112" fill="#bae6fd" font-size="12">Föld</text>
        <line x1="15" y1="132" x2="745" y2="132" stroke="#334155" stroke-dasharray="4"/>
        <text x="20" y="155" fill="#f87171" font-size="14" font-weight="bold">2. Holdfogyatkozás (Nap – Föld – Hold)</text>
        <circle cx="70" cy="188" r="28" fill="#facc15"/>
        <polygon points="240,166 430,188 240,210" fill="#020617"/>
        <circle cx="240" cy="188" r="22" fill="#38bdf8"/>
        <circle cx="370" cy="188" r="9" fill="#ef4444"/>
        <text x="226" y="222" fill="#bae6fd" font-size="12">Föld</text>
        <text x="356" y="212" fill="#fca5a5" font-size="12">Hold</text>
        <text x="460" y="185" fill="#94a3b8" font-size="12">A Föld árnyékkúpja eléri a Holdat</text>
      </svg>`,
      kategoriak: ["Napfogyatkozás", "Holdfogyatkozás"],
      elemek: [
        { szoveg: "Csak újhold idején következhet be.", kategoria: 0 },
        { szoveg: "A Föld felszínének csak egy keskeny sávjából látható teljesnek.", kategoria: 0 },
        { szoveg: "Speciális védőszemüveg nélkül veszélyes szabad szemmel nézni.", kategoria: 0 },
        { szoveg: "Csak telihold idején következhet be.", kategoria: 1 },
        { szoveg: "A Föld teljes éjszakai oldaláról egyszerre megfigyelhető.", kategoria: 1 },
        { szoveg: "Az égitest vörösesbarna színt ölt a Föld légkörén megtörő fény miatt.", kategoria: 1 }
      ]
    },
    {
      szekcio: "II. rész: Kompetenciaalapú feladatok (13 pont)",
      cim: "A kerti napóra rejtélye",
      tipus: "blanks",
      pont: 4,
      utasitas: "Olvasd el a megfigyelést, és egészítsd ki a következtetéseket a megfelelő szavakkal!",
      szituacio: "<strong>Szituáció:</strong> Anna és Bence egy napsütéses délelőttön leszúrtak egy 1 méter magas karót a kert közepébe. Reggel 8 órakor a karó árnyéka 2,5 méter hosszú volt, és nyugati irányba mutatott. Délben az árnyék hossza lecsökkent 0,6 méterre, és észak felé mutatott.",
      szoveg: "A megfigyelés bizonyítja, hogy a fény homogén közegben {0} vonalban terjed. Az árnyék hossza azért változott meg délig, mert a Nap látszólagos {1} megnőtt a horizont felett. Délután 16 órakor a karó árnyéka ismét {2} lesz a délinél, és ekkor már {3} irányba fog mutatni.",
      megoldasok: [
        ["egyenes"],
        ["magassága", "állása"],
        ["hosszabb", "nagyobb"],
        ["keleti"]
      ]
    },
    {
      szekcio: "II. rész: Kompetenciaalapú feladatok (13 pont)",
      cim: "Árnyékjáték a szobában",
      tipus: "multi",
      pont: 4,
      utasitas: "Jelöld be az ÖSSZES helyes következtetést! (4 helyes válasz van; hibás jelölésért pontlevonás jár.)",
      szituacio: "<strong>Szituáció:</strong> Egy sötét szobában bekapcsolsz egy kisméretű, pontszerűnek tekinthető zseblámpát, és elé tartasz egy teniszlabdát, mögé pedig egy fehér kartonlapot (ernyőt) teszel.",
      svg: `<svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
        <rect width="700" height="180" rx="8" fill="#1e293b"/>
        <circle cx="60" cy="90" r="8" fill="#fde047"/>
        <text x="25" y="120" fill="#fde047" font-size="12">Pontszerű lámpa</text>
        <line x1="60" y1="90" x2="620" y2="35" stroke="#fef08a" stroke-dasharray="5"/>
        <line x1="60" y1="90" x2="620" y2="145" stroke="#fef08a" stroke-dasharray="5"/>
        <circle cx="340" cy="90" r="26" fill="#22c55e"/>
        <text x="315" y="135" fill="#bbf7d0" font-size="12">Labda (távolabb)</text>
        <rect x="620" y="15" width="12" height="150" fill="#f8fafc"/>
        <rect x="620" y="35" width="12" height="110" fill="#0f172a"/>
        <text x="595" y="175" fill="#e2e8f0" font-size="12">Ernyő</text>
        <text x="150" y="30" fill="#38bdf8" font-size="13" font-weight="bold">Mi történik, ha a labdát közelebb viszed a lámpához?</text>
      </svg>`,
      opciok: [
        { szoveg: "Az ernyőn megjelenő árnyék mérete megnő.", helyes: true },
        { szoveg: "Az ernyőn megjelenő árnyék mérete lecsökken.", helyes: false },
        { szoveg: "Az árnyék pereme továbbra is éles marad.", helyes: true },
        { szoveg: "Az árnyék körül széles félárnyék alakul ki.", helyes: false },
        { szoveg: "A labda a fénynyaláb nagyobb részét takarja ki, mint korábban.", helyes: true },
        { szoveg: "A jelenség a fény egyenes vonalú terjedésével magyarázható.", helyes: true }
      ]
    },
    {
      szekcio: "II. rész: Kompetenciaalapú feladatok (13 pont)",
      cim: "Kísérlet a kiterjedt fényforrással",
      tipus: "order",
      pont: 5,
      utasitas: "Rendezd helyes logikai sorrendbe a kísérlet lépéseit és a levont következtetéseket a ▲ és ▼ gombokkal! (5 × 1 pont)",
      svg: `<svg viewBox="0 0 700 190" xmlns="http://www.w3.org/2000/svg">
        <rect width="700" height="190" rx="8" fill="#1e293b"/>
        <rect x="55" y="45" width="14" height="100" rx="6" fill="#fef08a"/>
        <text x="25" y="168" fill="#fef08a" font-size="12">Kiterjedt fénycső</text>
        <line x1="69" y1="45" x2="620" y2="115" stroke="#fde047" stroke-opacity="0.6"/>
        <line x1="69" y1="45" x2="620" y2="170" stroke="#fde047" stroke-opacity="0.6"/>
        <line x1="69" y1="145" x2="620" y2="75" stroke="#38bdf8" stroke-opacity="0.6"/>
        <line x1="69" y1="145" x2="620" y2="20" stroke="#38bdf8" stroke-opacity="0.6"/>
        <rect x="335" y="68" width="16" height="54" fill="#f97316"/>
        <text x="323" y="142" fill="#fed7aa" font-size="12">Könyv</text>
        <rect x="620" y="15" width="14" height="160" fill="#f8fafc"/>
        <rect x="620" y="40" width="14" height="110" fill="#64748b"/>
        <rect x="620" y="75" width="14" height="40" fill="#020617"/>
        <text x="520" y="99" fill="#f8fafc" font-size="11">Teljes árnyék</text>
        <text x="535" y="58" fill="#cbd5e1" font-size="11">Félárnyék</text>
        <text x="535" y="142" fill="#cbd5e1" font-size="11">Félárnyék</text>
      </svg>`,
      lepesek: [
        "1. lépés: Helyezz el egy bekapcsolt, hosszúkás fénycsövet az asztal szélén, vele szemben pedig 1 méterre egy fehér falat.",
        "2. lépés: Tarts egy függőlegesen álló könyvet pontosan félúton a fénycső és a fal közé.",
        "3. lépés: Figyeld meg, hogy a falon középen egy teljesen sötét sáv (teljes árnyék), kétoldalt pedig halványabb szürke sávok jelennek meg.",
        "4. lépés: Magyarázat: A halványabb sávokba a fénycső egyik végéből eljut a fény, de a másik végéből érkező sugarakat a könyv kitakarja.",
        "5. lépés: Következtetés: Kiterjedt fényforrás használatakor a fény egyenes vonalú terjedése miatt a teljes árnyék mellett félárnyék is keletkezik."
      ]
    }
  ]
};
