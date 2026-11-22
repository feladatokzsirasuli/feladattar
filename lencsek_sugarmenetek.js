window.FELADAT_ADATOK = {
  feladat_id: "h5p_lencsek_sugarmenetek",
  feladat: "lencsek_sugarmenetek",
  cim: "7. osztály – Fizika: Lencsék fajtái, nevezetes sugármenetek",
  leiras: "25 pontos interaktív feladatsor (12 pont tárgyi tudás + 13 pont kompetenciaalapú feladat).",
  feladatok: [
    {
      id: "f1",
      tipus: "drag_words",
      cim: "1. feladat: Lencsék fajtái és alapfogalmak (5 pont – Tárgyi tudás)",
      utmutato: "Húzd (vagy kattintással helyezd) a megfelelő kifejezéseket a szöveg üres helyeire! (1 zavaró elem van a szóbankban.)",
      pont: 5,
      szoveg: "Az átlátszó, két gömbfelülettel (vagy egy gömb- és egy síkfelülettel) határolt optikai eszközöket *lencséknek* nevezzük. Azokat a lencséket, amelyek a közepükön vastagabbak, mint a szélükön, *domború* lencséknek, más néven *gyűjtőlencséknek* hívjuk. Ezzel szemben a szélükön vastagabb *homorú* lencsék a párhuzamos fénysugarakat szétszórják, ezért *szórólencséknek* nevezzük őket.",
      extra_szavak: ["tükröknek"]
    },
    {
      id: "f2",
      tipus: "hotspot",
      cim: "2. feladat: Nevezetes sugármenetek gyűjtőlencsén (5 pont – Tárgyi tudás)",
      utmutato: "Kattints az ábrán található 5 sorszámozott pontra, és válaszd ki a legördülő listából a jelölt fogalom vagy sugármenet nevét!",
      pont: 5,
      svg: `<svg viewBox="0 0 640 280" width="100%" style="max-width:640px;display:block;margin:0 auto;background:#f8fafc;border-radius:8px;border:1px solid #cbd5e1;">
        <line x1="20" y1="140" x2="620" y2="140" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6,4"/>
        <ellipse cx="320" cy="140" rx="16" ry="105" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>
        <line x1="320" y1="25" x2="320" y2="255" stroke="#0284c7" stroke-width="1" stroke-dasharray="3,3"/>
        <circle cx="320" cy="140" r="4" fill="#0f172a"/>
        <circle cx="190" cy="140" r="5" fill="#dc2626"/>
        <text x="184" y="162" font-size="13" font-weight="bold" fill="#dc2626">F</text>
        <circle cx="450" cy="140" r="5" fill="#dc2626"/>
        <text x="444" y="162" font-size="13" font-weight="bold" fill="#dc2626">F'</text>
        <!-- 1. Sugár: tengellyel párhuzamos -> F'-n át -->
        <polyline points="60,75 320,75 560,210" fill="none" stroke="#ea580c" stroke-width="2.5"/>
        <!-- 2. Sugár: optikai középponton át törés nélkül -->
        <line x1="70" y1="45" x2="570" y2="235" stroke="#16a34a" stroke-width="2.5"/>
        <!-- 3. Sugár: F-en át -> tengellyel párhuzamosan -->
        <polyline points="110,80 190,140 320,235 580,235" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
        <text x="35" y="132" font-size="12" fill="#475569">Optikai tengely</text>
      </svg>`,
      opciok: [
        "Optikai középpont (O)",
        "Képponti fókuszpont (F')",
        "Tengellyel párhuzamos sugár törés után a fókuszponton halad át",
        "Optikai középponton áthaladó sugár irányváltoztatás nélkül halad tovább",
        "Tárgyponti fókuszon áthaladó sugár törés után a tengellyel párhuzamosan halad"
      ],
      pontok: [
        { x: 50, y: 50, helyes: "Optikai középpont (O)" },
        { x: 70.3, y: 50, helyes: "Képponti fókuszpont (F')" },
        { x: 64, y: 58, helyes: "Tengellyel párhuzamos sugár törés után a fókuszponton halad át" },
        { x: 22, y: 24, helyes: "Optikai középponton áthaladó sugár irányváltoztatás nélkül halad tovább" },
        { x: 68, y: 84, helyes: "Tárgyponti fókuszon áthaladó sugár törés után a tengellyel párhuzamosan halad" }
      ]
    },
    {
      id: "f3",
      tipus: "crossword",
      cim: "3. feladat: Optikai fogalomtár keresztrejtvény (2 pont – Tárgyi tudás)",
      utmutato: "Írd be a meghatározásoknak megfelelő 4 alapfogalmat a keresztrejtvény mezőibe! (Minden 2 helyes szó 1 pontot ér.)",
      pont: 2,
      sorok: 8,
      oszlopok: 11,
      szavak: [
        { szam: 1, irany: "Vízszintes", szo: "FOKUSZ", sor: 1, oszlop: 1, kerdes: "1. Vízszintes: A gyűjtőlencsére eső párhuzamos sugarak metszéspontja, más néven gyújtópont (ékezet nélkül, 6 betű)." },
        { szam: 2, irany: "Függőleges", szo: "OPTIKAI", sor: 1, oszlop: 2, kerdes: "2. Függőleges: A lencse két gömbfelületének középpontját összekötő egyenes neve: ... tengely (7 betű)." },
        { szam: 3, irany: "Vízszintes", szo: "TORES", sor: 3, oszlop: 1, kerdes: "3. Vízszintes: Ez a fényjelenség játszódik le a lencse két határfelületén (ékezet nélkül, 5 betű)." },
        { szam: 4, irany: "Függőleges", szo: "SZORO", sor: 0, oszlop: 6, kerdes: "4. Függőleges: A homorú lencse másik elnevezése: ...lencse (ékezet nélkül, 5 betű)." }
      ]
    },
    {
      id: "f4",
      tipus: "group",
      cim: "4. feladat: Gyűjtőlencse és szórólencse összehasonlítása (4 pont – Kompetenciaalapú)",
      utmutato: "Sorold be az állításokat és mindennapi példákat a megfelelő lencsetípushoz!",
      pont: 4,
      kategoriak: ["Gyűjtőlencse (domború)", "Szórólencse (homorú)"],
      elemek: [
        { szoveg: "Középen vastagabb, a szélén vékonyabb.", kategoria: 0 },
        { szoveg: "Középen vékonyabb, a szélén vastagabb.", kategoria: 1 },
        { szoveg: "A tengellyel párhuzamos sugarakat egy pontban egyesíti.", kategoria: 0 },
        { szoveg: "A sugarak úgy térülnek el, mintha a tárgyponti fókuszból indulnának.", kategoria: 1 },
        { szoveg: "Nagyítóként és távollátást javító szemüvegként használják.", kategoria: 0 },
        { szoveg: "Rövidlátást javító szemüvegben és ajtókitekintőben alkalmazzák.", kategoria: 1 }
      ]
    },
    {
      id: "f5",
      tipus: "blanks",
      cim: "5. feladat: A napsugár és a nagyító kísérlete (4 pont – Kompetenciaalapú)",
      utmutato: "Olvasd el a szituációt, és egészítsd ki a következtetéseket a megfelelő szavakkal!",
      pont: 4,
      szituacio: "Dávid egy napsütéses délutánon egy domború lencsét tartott egy száraz falap fölé. Addig mozgatta a lencsét fel-le, amíg a falapon egyetlen tűéles, vakítóan fényes pont jelent meg a lencsétől 15 cm-re. Néhány másodperc múlva a fa füstölni kezdett.",
      szoveg: "A távoli Napból érkező fénysugarak gyakorlatilag [párhuzamosan] érkeznek a lencsére. A domború lencse ezeket a sugarakat a képponti [fókuszpontban|gyújtópontban] egyesítette, ezért a lencse fókusztávolsága pontosan [15] cm. A fa azért gyulladt meg, mert a fényenergia egyetlen kis felületen összpontosulva [hőhatást|melegítő hatást] fejtett ki."
    },
    {
      id: "f6",
      tipus: "multi",
      cim: "6. feladat: Képalkotási és sugármenet-következtetések (5 pont – Kompetenciaalapú)",
      utmutato: "Válaszd ki az ÖSSZES igaz állítást a nevezetes sugármenetekkel kapcsolatban! (Hibás jelölésért pontlevonás jár.)",
      pont: 5,
      kerdes: "Egy gyűjtőlencse elé helyezett gyertya lángjának csúcsából több fénysugár is elindul a lencse felé. Melyik állítások igazak a sugármenetekre?",
      opciok: [
        { szoveg: "A gyertya csúcsából induló összes fénysugár képe abban a pontban keletkezik, ahol a nevezetes sugarak metszik egymást.", helyes: true },
        { szoveg: "Ha a gyertyát pontosan a tárgyponti fókuszba (F) helyezzük, a megtört sugarak párhuzamosan lépnek ki a lencséből.", helyes: true },
        { szoveg: "A lencse optikai középpontján áthaladó fénysugár a legnagyobb szögben törik meg.", helyes: false },
        { szoveg: "A képszerkesztéshez elegendő bármelyik két nevezetes sugármenetet megrajzolni.", helyes: true },
        { szoveg: "Ha a gyertya lángja az optikai tengelyen van, a képe is az optikai tengelyen keletkezik.", helyes: true }
      ]
    }
  ]
};
