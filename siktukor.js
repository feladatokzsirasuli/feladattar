window.FELADAT_ADATOK = {
  cim: "Síktükör",
  feladat_id: "h5p_sktukor",
  feladat: "Síktükör",
  feladatok: [
    {
      cim: "1. A fényvisszaverődés törvénye",
      tipus: "drag_words",
      pont: 4,
      leiras: "Egészítsd ki a fényvisszaverődés törvényére vonatkozó megállapításokat a megadott szavakkal!",
      szoveg: "A tükröző felületre érkező fénysugarat beeső fénysugárnak nevezzük. A beesési pontban a tükör felületére állított merőleges egyenes a *beesési merőleges*. A beeső fénysugár és e merőleges által bezárt szög a *beesési szög*. A visszaverődés törvénye kimondja, hogy a visszaverődési szög mindig *egyenlő* a beesési szöggel, továbbá a beeső fénysugár, a beesési merőleges és a visszavert fénysugár egy *síkban* fekszik.",
      extra: ["tükörsík", "nagyobb", "kisebb", "térben", "törési szög"]
    },
    {
      cim: "2. Alapfogalmak és jelölések (t, k, T, K)",
      tipus: "group",
      pont: 4,
      leiras: "Csoportosítsd a síktükör képalkotásához kapcsolódó állításokat aszerint, hogy a tárgyra vagy a képre vonatkoznak!",
      kategoriak: [
        "A tárgyra vonatkozó adatok (t, T)",
        "A képre vonatkozó adatok (k, K)"
      ],
      elemek: [
        { szoveg: "A tükör síkja és a megvilágított test közötti távolság.", csoport: 0 },
        { szoveg: "A tükör mögött látszólagosan megjelenő alakzat mérete.", csoport: 1 },
        { szoveg: "A valódi test fizikai magassága.", csoport: 0 },
        { szoveg: "A látszólagos kép és a tükör síkja közötti távolság.", csoport: 1 },
        { szoveg: "Értéke látszólagos kép esetén negatív előjellel is szerepelhet a számításokban.", csoport: 1 },
        { szoveg: "Ha a tárgyat 10 cm-rel közelebb visszük a tükörhöz, ez az érték csökken 10 cm-rel.", csoport: 0 }
      ]
    },
    {
      cim: "3. A síktükör által alkotott kép tulajdonságai",
      tipus: "multi",
      pont: 5,
      leiras: "Válaszd ki az összes igaz állítást a síktükör által alkotott képre vonatkozóan!",
      szituacio: "Egy 160 cm magas tanuló egy függőlegesen álló, nagy síktükör előtt áll 1,5 méter távolságra.",
      opciok: [
        { szoveg: "A keletkező kép látszólagos (virtuális), mert a visszavert fénysugarak meghosszabbításai metszik egymást.", helyes: true },
        { szoveg: "A kép ernyőn (például egy fehér papírlapon) is felfogható a tükör mögött.", helyes: false },
        { szoveg: "A kép magassága megegyezik a tárgy magasságával (K = T = 160 cm).", helyes: true },
        { szoveg: "A kép állása fordított (fejjel lefelé álló).", helyes: false },
        { szoveg: "A kép oldalhelyessége felcserélt (a jobb és a bal oldal felcserélődik).", helyes: true },
        { szoveg: "A tárgy és a kép a tükör síkjára nézve szimmetrikusan helyezkedik el (t = k = 1,5 m).", helyes: true }
      ]
    },
    {
      cim: "4. Optikai elemek felismerése az ábrán",
      tipus: "hotspot",
      pont: 4,
      leiras: "Kattints az ábra számozott pontjaira, és azonosítsd a fényvisszaverődés elemeit!",
      svg: `<svg viewBox="0 0 400 260" width="100%" style="max-width:450px; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1; display:block; margin: 0 auto;">
        <!-- Tükör -->
        <line x1="40" y1="210" x2="360" y2="210" stroke="#1e293b" stroke-width="4"/>
        <path d="M50 210 L40 222 M70 210 L60 222 M90 210 L80 222 M110 210 L100 222 M130 210 L120 222 M150 210 L140 222 M170 210 L160 222 M190 210 L180 222 M210 210 L200 222 M230 210 L220 222 M250 210 L240 222 M270 210 L260 222 M290 210 L280 222 M310 210 L300 222 M330 210 L320 222 M350 210 L340 222" stroke="#64748b" stroke-width="2"/>
        <!-- Beesési merőleges -->
        <line x1="200" y1="30" x2="200" y2="210" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,4"/>
        <!-- Beeső fénysugár -->
        <line x1="80" y1="60" x2="200" y2="210" stroke="#ef4444" stroke-width="3"/>
        <polygon points="145,141 133,134 141,127" fill="#ef4444"/>
        <!-- Visszavert fénysugár -->
        <line x1="200" y1="210" x2="320" y2="60" stroke="#2563eb" stroke-width="3"/>
        <polygon points="265,129 253,136 261,143" fill="#2563eb"/>
        <!-- Szögívek -->
        <path d="M 168 170 A 50 50 0 0 1 200 160" fill="none" stroke="#ef4444" stroke-width="2"/>
        <path d="M 200 160 A 50 50 0 0 1 232 170" fill="none" stroke="#2563eb" stroke-width="2"/>
      </svg>`,
      pontok: [
        {
          szam: 1,
          x: 32,
          y: 45,
          kerdes: "Mit jelöl a piros, tükör felé mutató nyíl (1-es pont)?",
          opciok: ["Beeső fénysugár", "Visszavert fénysugár", "Beesési merőleges"],
          helyes: "Beeső fénysugár"
        },
        {
          szam: 2,
          x: 50,
          y: 25,
          kerdes: "Mi a neve a szaggatott függőleges egyenesnek (2-es pont)?",
          opciok: ["Beesési merőleges", "Optikai tengely", "Fényút"],
          helyes: "Beesési merőleges"
        },
        {
          szam: 3,
          x: 54,
          y: 63,
          kerdes: "Ha a beesési szög 38°-os, mekkora a 3-as ponttal jelölt visszaverődési szög?",
          opciok: ["38°", "52°", "76°"],
          helyes: "38°"
        },
        {
          szam: 4,
          x: 50,
          y: 81,
          kerdes: "Hogyan nevezzük azt a pontot a tükrön, ahol a fénysugár irányt változtat (4-es pont)?",
          opciok: ["Beesési pont", "Fókuszpont", "Képpont"],
          helyes: "Beesési pont"
        }
      ]
    },
    {
      cim: "5. A síktükör képalkotásának szerkesztése",
      tipus: "order",
      pont: 4,
      leiras: "Állítsd helyes logikai sorrendbe egy pontszerű tárgy (T) síktükör által alkotott képének (K) szerkesztési lépéseit!",
      lepesek: [
        "A tárgyból (T) két különböző irányú, a tükör felületét elérő beeső fénysugarat rajzolunk.",
        "Mindkét beesési pontban merőlegest állítunk a tükör síkjára (beesési merőlegesek).",
        "A fényvisszaverődés törvényét alkalmazva (α = α') megszerkesztjük a két visszavert fénysugarat.",
        "A széttartó visszavert fénysugarakat szaggatott vonallal meghosszabbítjuk a tükör mögé.",
        "A meghosszabbított egyenesek metszéspontjában kijelöljük a látszólagos képpontot (K)."
      ]
    },
    {
      cim: "6. Síktükrök a mindennapokban – Szövegértés és számítás",
      tipus: "blanks",
      pont: 4,
      leiras: "Olvasd el az alábbi rövid szöveget, majd írd be a hiányzó szavakat vagy számértékeket!",
      szituacio: "A mentőautók elejére gyakran tükörírással festik fel az „AMBULANCE” feliratot, hogy az előttük haladó autós a visszapillantó tükörbe nézve helyesen tudja elolvasni azt. A tengeralattjárókban pedig két, egymással párhuzamos, 45°-os szögben megdöntött síktükörből álló periszkóp segítségével figyelhetik meg a vízfelszínt.",
      szoveg: "A mentőautó feliratát azért írják fordítva, mert a síktükör a jobb és a [bal] oldalt felcseréli. Ha egy autó 8 méterre halad a mögötte lévő mentőautótól, akkor a sofőr a síktükörben úgy látja, mintha a mentőautó képétől [16|tizenhat] méterre lenne. A periszkópban lévő tükrök [45|negyvenöt] fokos szögben állnak, így a vízszintesen érkező fénysugár összesen [90|kilencven] fokkal változtatja meg az irányát az első visszaverődéskor."
    }
  ]
};
