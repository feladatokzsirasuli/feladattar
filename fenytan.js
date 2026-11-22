window.FELADAT_ADATOK = {
  cim: "A fény terjedése, árnyékjelenségek és fogyatkozások",
  feladat_id: "h5p_fenytan",
  feladat: "fenytan",
  feladatok: [
    {
      cim: "1. feladat: Fényforrások és fényhatások",
      tipus: "drag_words",
      pont: 5,
      leiras: "Kattints a szóbankban egy szóra, majd kattints a megfelelő üres helyre!",
      szoveg: "A Nap és a csillagok *természetes* fényforrások, míg az izzólámpa és a gyertya *mesterséges* fényforrás. A növények növekedéséhez elengedhetetlen a napfény, amelyet a zöld színtestek a fotoszintézis során hasznosítanak – ez a fény *biológiai* hatása. A napelemek a fény *elektromos* hatását használják ki áramtermelésre, míg a sötét ruhák gyorsabb felmelegedése a fény *hőhatásával* magyarázható.",
      extra: ["kémiai"]
    },
    {
      cim: "2. feladat: Fényjelenségek fogalomtára",
      tipus: "blanks",
      pont: 4,
      leiras: "Írd be a meghatározásoknak megfelelő fizikai fogalmakat!",
      szoveg: "1. Vékony, párhuzamos fénnyaláb: [fénysugár]<br><br>2. Az árnyéknak az a része, ahová a kiterjedt fényforrásnak csak egy részéből jut fény: [félárnyék]<br><br>3. Ez az égitest kerül a Nap és a Föld közé teljes napfogyatkozáskor: [Hold|hold]<br><br>4. Az átlátszatlan test mögött kialakuló, fénytől elzárt térrész neve: [árnyékkúp]"
    },
    {
      cim: "3. feladat: Napfogyatkozás vagy holdfogyatkozás?",
      tipus: "group",
      pont: 3,
      leiras: "Tanulmányozd az ábrát, majd kattints egy állításra és a megfelelő dobozra!",
      svg: `<svg viewBox="0 0 600 220" width="600" height="220" xmlns="http://w3.org">
        <rect width="600" height="220" fill="#0f172a" rx="8"/>
        <text x="20" y="30" fill="#facc15" font-size="14" font-weight="bold">Napfogyatkozás (Újhold)</text>
        <circle cx="70" cy="65" r="24" fill="#facc15"/>
        <polygon points="70,41 320,60 320,70 70,89" fill="rgba(148,163,184,0.25)"/>
        <polygon points="210,58 320,65 210,72" fill="#020617"/>
        <circle cx="210" cy="65" r="7" fill="#cbd5e1"/>
        <circle cx="320" cy="65" r="16" fill="#38bdf8"/>
        <text x="20" y="135" fill="#f87171" font-size="14" font-weight="bold">Holdfogyatkozás (Telihold)</text>
        <circle cx="70" cy="175" r="24" fill="#facc15"/>
        <polygon points="70,151 390,175 70,199" fill="rgba(148,163,184,0.2)"/>
        <polygon points="240,159 385,175 240,191" fill="#020617"/>
        <circle cx="240" cy="175" r="16" fill="#38bdf8"/>
        <circle cx="345" cy="175" r="7" fill="#ef4444"/>
      </svg>`,
      kategoriak: ["Napfogyatkozás", "Holdfogyatkozás"],
      elemek: [
        { szoveg: "Csak újhold idején következhet be.", csoport: 0 },
        { szoveg: "Csak telihold idején következhet be.", csoport: 1 },
        { szoveg: "A Föld felszínének csak egy keskeny sávjából látható teljesnek.", csoport: 0 },
        { szoveg: "A Föld teljes éjszakai oldaláról egyszerre megfigyelhető.", csoport: 1 },
        { szoveg: "Speciális védőszemüveg nélkül veszélyes szabad szemmel nézni.", csoport: 0 },
        { szoveg: "Az égitest vörösesbarna színt ölt a Föld légkörén megtörő fény miatt.", csoport: 1 }
      ]
    },
    {
      cim: "4. feladat: A kerti napóra rejtélye",
      tipus: "blanks",
      pont: 4,
      leiras: "Olvasd el a megfigyelést, és egészítsd ki a következtetéseket a megfelelő szavakkal!",
      szituacio: "Anna és Bence egy napsütéses délelőttön leszúrtak egy 1 méter magas karót a kert közepébe. Reggel 8 órakor a karó árnyéka 2,5 méter hosszú volt, és nyugati irányba mutatott. Délben az árnyék hossza lecsökkent 0,6 méterre, és észak felé mutatott.",
      szoveg: "A megfigyelés bizonyítja, hogy a fény homogén közegben [egyenes] vonalban terjed. Az árnyék hossza azért változott meg délig, mert a Nap látszólagos [magassága|állása] megnőtt a horizont felett. Délután 16 órakor a karó árnyéka ismét [hosszabb|nagyobb] lesz a délinél, és ekkor már [keleti] irányba fog mutatni."
    },
    {
      cim: "5. feladat: Árnyékjáték a szobában",
      tipus: "multi",
      pont: 4,
      leiras: "Válaszd ki az ÖSSZES helyes következtetést! (Hibás jelölésért pontlevonás jár.)",
      szituacio: "Egy sötét szobában bekapcsolsz egy kisméretű, pontszerűnek tekinthető zseblámpát, és elé tartasz egy teniszlabdát, mögé pedig egy fehér kartonlapot (ernyőt) teszel.",
      svg: `<svg viewBox="0 0 600 180" width="600" height="180" xmlns="http://w3.org">
        <rect width="600" height="180" fill="#1e293b" rx="8"/>
        <circle cx="60" cy="90" r="8" fill="#fde047"/>
        <line x1="60" y1="90" x2="520" y2="25" stroke="#fde047" stroke-width="1.5" stroke-dasharray="5,4"/>
        <line x1="60" y1="90" x2="520" y2="155" stroke="#fde047" stroke-width="1.5" stroke-dasharray="5,4"/>
        <circle cx="260" cy="90" r="28" fill="#22c55e" stroke="#fff" stroke-width="1.5"/>
        <rect x="520" y="15" width="12" height="150" fill="#f8fafc"/>
        <rect x="520" y="54" width="12" height="72" fill="#0f172a"/>
        <text x="40" y="160" fill="#cbd5e1" font-size="12">Pontszerű fényforrás</text>
        <text x="235" y="160" fill="#cbd5e1" font-size="12">Labda</text>
        <text x="495" y="160" fill="#cbd5e1" font-size="12">Ernyő</text>
      </svg>`,
      opciok: [
        { szoveg: "Ha a teniszlabdát közelebb viszed a zseblámpához, az ernyőn megjelenő árnyék mérete megnő.", helyes: true },
        { szoveg: "Ha a teniszlabdát közelebb viszed a zseblámpához, az ernyőn megjelenő árnyék mérete lecsökken.", helyes: false },
        { szoveg: "Az árnyék pereme továbbra is éles marad.", helyes: true },
        { szoveg: "Az árnyék körül széles félárnyék alakul ki.", helyes: false },
        { szoveg: "A labda közelebb vitelével a fénynyaláb nagyobb részét takarja ki, mint korábban.", helyes: true },
        { szoveg: "A jelenség a fény egyenes vonalú terjedésével magyarázható.", helyes: true }
      ]
    },
    {
      cim: "6. feladat: Kísérlet a kiterjedt fényforrással",
      tipus: "order",
      pont: 5,
      leiras: "Rakd helyes logikai sorrendbe a kísérlet lépéseit és a levont következtetéseket (▲ / ▼ gombokkal)!",
      svg: `<svg viewBox="0 0 600 180" width="600" height="180" xmlns="http://w3.org">
        <rect width="600" height="180" fill="#1e293b" rx="8"/>
        <rect x="50" y="35" width="14" height="110" rx="6" fill="#fef08a"/>
        <line x1="64" y1="35" x2="520" y2="115" stroke="#fef08a" stroke-width="1" stroke-dasharray="4,4"/>
        <line x1="64" y1="145" x2="520" y2="65" stroke="#fef08a" stroke-width="1" stroke-dasharray="4,4"/>
        <rect x="275" y="65" width="16" height="50" fill="#3b82f6" stroke="#fff"/>
        <rect x="520" y="15" width="12" height="150" fill="#f8fafc"/>
        <rect x="520" y="40" width="12" height="100" fill="#94a3b8"/>
        <rect x="520" y="65" width="12" height="50" fill="#0f172a"/>
        <text x="30" y="165" fill="#cbd5e1" font-size="12">Fénycső</text>
        <text x="265" y="165" fill="#cbd5e1" font-size="12">Könyv</text>
        <text x="480" y="165" fill="#cbd5e1" font-size="12">Teljes + félárnyék</text>
      </svg>`,
      lepesek: [
        "Helyezz el egy bekapcsolt, hosszúkás fénycsövet az asztal szélén, vele szemben pedig 1 méterre egy fehér falat.",
        "Tarts egy függőlegesen álló könyvet pontosan félúton a fénycső és a fal közé.",
        "Figyeld meg, hogy a falon középen egy teljesen sötét sáv (teljes árnyék), kétoldalt pedig halványabb szürke sávok jelennek meg.",
        "Magyarázat: A halványabb sávokba a fénycső egyik végéből eljut a fény, de a másik végéből érkező sugarakat a könyv kitakarja.",
        "Következtetés: Kiterjedt fényforrás használatakor a fény egyenes vonalú terjedése miatt a teljes árnyék mellett félárnyék is keletkezik."
      ]
    }
  ]
};
