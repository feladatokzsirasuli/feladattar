window.FELADAT_ADATOK = {
  cim: "Lencsék fajtái, nevezetes sugármenetek",
  feladat_id: "h5p_lencsek_sugarmenetek",
  feladat: "lencsek_sugarmenetek",
  feladatok: [
    {
      cim: "1. feladat: Lencsék fajtái és alapfogalmak",
      tipus: "drag_words",
      pont: 5,
      leiras: "Kattints a szóbankban egy szóra, majd kattints a megfelelő üres helyre!",
      szoveg: "A két gömbfelülettel határolt átlátszó testet *optikai lencsének* nevezzük. A középen vastagabb, peremén vékonyabb lencse a *gyűjtőlencse*, amely a párhuzamos fénysugarakat egy pontban egyesíti. Ezt a pontot *fókuszpontnak* hívjuk. A középen vékonyabb lencse a *szórólencse*, amely a fénynyalábot *széttartóvá* teszi.",
      extra: ["homorú tükör", "összetartóvá"]
    },
    {
      cim: "2. feladat: Nevezetes sugármenetek gyűjtőlencsén",
      tipus: "hotspot",
      pont: 5,
      leiras: "Tanulmányozd a gyűjtőlencse nevezetes sugármeneteit mutató ábrát, majd válaszd ki a számozott pontokhoz tartozó helyes megnevezést!",
      svg: `<svg viewBox="0 0 600 280" width="600" height="280" xmlns="http://w3.org">
        <rect width="600" height="280" fill="#f8fafc" rx="8"/>
        <line x1="20" y1="140" x2="580" y2="140" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6,4"/>
        <path d="M 300 30 Q 335 140 300 250 Q 265 140 300 30 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>
        <circle cx="170" cy="140" r="4" fill="#0f172a"/><text x="165" y="160" font-size="13" font-weight="bold" fill="#0f172a">F</text>
        <circle cx="430" cy="140" r="4" fill="#0f172a"/><text x="425" y="160" font-size="13" font-weight="bold" fill="#0f172a">F'</text>
        <line x1="60" y1="70" x2="300" y2="70" stroke="#dc2626" stroke-width="2.5"/>
        <line x1="300" y1="70" x2="530" y2="215" stroke="#dc2626" stroke-width="2.5"/>
        <line x1="60" y1="100" x2="530" y2="180" stroke="#16a34a" stroke-width="2.5"/>
        <line x1="60" y1="190" x2="300" y2="110" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="300" y1="110" x2="540" y2="110" stroke="#2563eb" stroke-width="2.5"/>
      </svg>`,
      pontok: [
        {
          szam: 1, x: 50, y: 50,
          kerdes: "Mi a neve a lencse mértani középpontjának (zöld sugár)?",
          opciok: ["Optikai középpont", "Képponti fókuszpont", "Tárgyponti fókuszpont", "Görbületi középpont"],
          helyes: "Optikai középpont"
        },
        {
          szam: 2, x: 71.6, y: 50,
          kerdes: "Hol metszi a piros sugár az optikai tengelyt?",
          opciok: ["Képponti fókuszpontban", "Optikai középpontban", "Tárgyponti fókuszpontban", "A lencse peremén"],
          helyes: "Képponti fókuszpontban"
        },
        {
          szam: 3, x: 25, y: 25,
          kerdes: "Hogyan halad tovább az optikai tengellyel párhuzamos beeső sugár (piros)?",
          opciok: ["A képponti fókuszponton át", "Törés nélkül egyenesen", "Az optikai tengellyel párhuzamosan", "Visszaverődik a tengelyre"],
          helyes: "A képponti fókuszponton át"
        },
        {
          szam: 4, x: 65, y: 58,
          kerdes: "Mi történik az optikai középponton áthaladó fénysugárral (zöld)?",
          opciok: ["Irányváltoztatás nélkül halad tovább", "Megtörik a fókuszpont felé", "Párhuzamos lesz a tengellyel", "Teljesen visszaverődik"],
          helyes: "Irányváltoztatás nélkül halad tovább"
        },
        {
          szam: 5, x: 68, y: 39,
          kerdes: "Hogyan halad tovább a tárgyponti fókuszponton át érkező sugár (kék)?",
          opciok: ["Az optikai tengellyel párhuzamosan", "A képponti fókuszponton át", "Törés nélkül egyenesen", "Széttartóan szóródik"],
          helyes: "Az optikai tengellyel párhuzamosan"
        }
      ]
    },
    {
      cim: "3. feladat: Optikai keresztrejtvény",
      tipus: "crossword",
      pont: 2,
      leiras: "Írd be a meghatározásoknak megfelelő optikai fogalmakat a rácsba (ékezetekkel)!",
      szavak: [
        { szam: 1, sor: 1, oszlop: 3, irany: "F", szo: "OPTIKAI", meghatarozas: "Ilyen tengelye és középpontja van minden lencsének." },
        { szam: 2, sor: 1, oszlop: 2, irany: "V", szo: "FÓKUSZ", meghatarozas: "A párhuzamos fénysugarak találkozási pontja (más néven gyújtópont)." },
        { szam: 3, sor: 3, oszlop: 3, irany: "V", szo: "TÖRÉS", meghatarozas: "Ez a fényjelenség játszódik le a lencse két határfelületén." },
        { szam: 4, sor: 5, oszlop: 1, irany: "V", szo: "LUKAS", meghatarozas: "Nem tömör, hanem üreges (átlyukasztott)." }
      ]
    },
    {
      cim: "4. feladat: Gyűjtőlencse vagy szórólencse?",
      tipus: "group",
      pont: 4,
      leiras: "Kattints egy állításra, majd kattints a megfelelő lencsetípus dobozára!",
      kategoriak: ["Gyűjtőlencse", "Szórólencse"],
      elemek: [
        { szoveg: "Középen vastagabb, a szélein elvékonyodik.", csoport: 0 },
        { szoveg: "Középen vékonyabb, a szélein megvastagszik.", csoport: 1 },
        { szoveg: "Nagyítóként (lupeként) használjuk.", csoport: 0 },
        { szoveg: "Rövidlátók szemüvegében alkalmazzák.", csoport: 1 },
        { szoveg: "Valódi, ernyőn felfogható képet is alkothat.", csoport: 0 },
        { szoveg: "Mindig látszólagos, kicsinyített képet ad.", csoport: 1 }
      ]
    },
    {
      cim: "5. feladat: A gyújtópont kísérleti meghatározása",
      tipus: "blanks",
      pont: 4,
      leiras: "Olvasd el a kísérlet leírását, és egészítsd ki a hiányzó szavakat!",
      szituacio: "Dávid egy napsütéses délutánon egy domború lencsét tartott egy száraz falap fölé. Addig mozgatta a lencsét fel-le, amíg a falapon egyetlen tűéles, vakítóan fényes pont jelent meg a lencsétől 15 cm-re. Néhány másodperc múlva a fa füstölni kezdett.",
      szoveg: "A távoli Napból érkező fénysugarak gyakorlatilag [párhuzamosan] érkeznek a lencsére. A domború lencse ezeket a sugarakat a képponti [fókuszpontban|gyújtópontban] egyesítette, ezért a lencse fókusztávolsága pontosan [15] cm. A fa azért gyulladt meg, mert a fényenergia egyetlen kis felületen összpontosulva [hőhatást|melegítő hatást] fejtett ki."
    },
    {
      cim: "6. feladat: Következtetések a képalkotásról",
      tipus: "multi",
      pont: 5,
      leiras: "Válaszd ki az ÖSSZES helyes állítást a gyűjtőlencse képalkotásával kapcsolatban! (Hibás jelölésért pontlevonás jár.)",
      opciok: [
        { szoveg: "A kétszeres fókusztávolságon kívül lévő tárgyról fordított állású, kicsinyített, valódi kép keletkezik.", helyes: true },
        { szoveg: "A fókusztávolságon belül lévő tárgyról nagyított, egyenes állású, látszólagos képet látunk.", helyes: true },
        { szoveg: "A fókuszpontba helyezett tárgyról mindig kétszeres nagyítású valódi kép keletkezik.", helyes: false },
        { szoveg: "Valódi kép ott jön létre, ahol a megtört fénysugarak ténylegesen metszik egymást.", helyes: true },
        { szoveg: "A látszólagos kép ernyőn nem fogható fel, csak a lencsébe nézve látható.", helyes: true }
      ]
    }
  ]
};
