import { array } from "../data/data.js";
import { arrayCoords } from "../data/data.js";
import { arr } from "../data/data.js";
import { mapDiv } from "../index.js";
import { AktobeCoords } from "./Aktobe.js";
import { AktauCoords } from "./Aktau.js";
import { AlmatyCoords } from "./Almaty.js";
import { AntalyaCoords } from "./Antalya.js";
import { AtyrauCoords } from "./Atyrau.js";
import { BakuCoords } from "./Baku.js";
import { BishkekCoords } from "./Bishkek.js";
import { DubaiCoords } from "./Dubai.js";
/* delete */
import { IssykKulCoords } from "./IssykKulCoords.js";
import { IstanbulCoords2 } from "./IstanbulCoords2.js";
import { IstanbulCoords } from "./IstanbulCoords.js";
import { JeddahCoords } from "./JeddahCoords.js";
import { KaragandaCoords } from "./KaragandaCoords.js";
import { KostanayCoords } from "./KostanayCoords.js";
import { KrasnodarCoords } from "./KrasnodarCoords.js";
import { KutaisiCoords } from "./KutaisiCoords.js";
import { KyzylordaCoords } from "./KyzylordaCoords.js";
import { MineralnyeVodyCoords } from "./MineralnyeVodyCoords.js";
import { MoscowCoords } from "./MoscowCoords.js";
import { NamanganCoords } from "./NamanganCoords.js";
import { NovosibirskCoords } from "./NovosibirskCoords.js";
import { NukusCoords } from "./NukusCoords.js";
import { NurSultanCoords } from "./NurSultanCoords.js";
import { OmskCoords } from "./OmskCoords.js";
import { OshCoords } from "./OshCoords.js";
import { PavlodarCoords } from "./PavlodarCoords.js";
import { SaintPetersburgCoords } from "./SaintPetersburgCoords.js";
import { SemeyCoords } from "./SemeyCoords.js";
import { SharmElSheikhCoords } from "./SharmElSheikhCoords.js";
import { ShymkentCoords } from "./ShymkentCoords.js";
import { SochiCoords } from "./SochiCoords.js";
import { TashkentCoords } from "./TashkentCoords.js";
import { TurkestanCoords } from "./TurkestanCoords.js";
import { UralskCoords } from "./UralskCoords.js";
import { YekaterinburgCoords } from "./YekaterinburgCoords.js";

function myMarkers(map) {
  for (let i = 0; i < arrayCoords.length; i++) {
    const blueLineSymbol = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 7,
      fillColor: "#9C8761",
      fillOpacity: 0.6,
      strokeColor: "#9C8761",
      strokeOpacity: 0.9,
      strokeWeight: 2,
      labelOrigin: new google.maps.Point(0, 2.8),
    };
    const redLineSymbol = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 7,
      fillColor: "#002A47",
      fillOpacity: 0.5,
      strokeColor: "#002A47",
      strokeOpacity: 0.9,
      strokeWeight: 2,
      labelOrigin: new google.maps.Point(0, 2.8),
    };

    let markerCity = new google.maps.Marker({
      position: arrayCoords[i],
      map: map,
      icon: redLineSymbol,
      label: {
        text: arr[i],
        className: "",
        color: "",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "14px",
        fontWeight: "bold",
      },
    });

    AktobeCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    AktauCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    AlmatyCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    AntalyaCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    AtyrauCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    BakuCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    BishkekCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    DubaiCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    IssykKulCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    IstanbulCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    IstanbulCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    JeddahCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    KaragandaCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    KostanayCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    KrasnodarCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    KutaisiCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    KyzylordaCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    MineralnyeVodyCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    MoscowCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    NamanganCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    NovosibirskCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    NukusCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    NurSultanCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    OmskCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    OshCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    PavlodarCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    SaintPetersburgCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    SemeyCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    SharmElSheikhCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    ShymkentCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    SochiCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    TashkentCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    TurkestanCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    UralskCoords(map, markerCity, blueLineSymbol, redLineSymbol);
    YekaterinburgCoords(map, markerCity, blueLineSymbol, redLineSymbol);
  }
}

export { myMarkers };
