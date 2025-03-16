import AlbengaDiningChair from "../assets/raster/AlbengaDiningChair.png"
import AntiguaTable from "../assets/raster/AntiguaTable.png"
import ArlosTable from "../assets/raster/ArlosTable.png"
import IsabelitaChair from "../assets/raster/IsabelitaChair.png"
import TitusDiningChair from "../assets/raster/TitusDiningChair.png"
import type * as Furniture from "../types/furniture"

export const FURNITURE = {
  IsabelitaChair: {
    name: "Isabelita Chair",
    price: 245,
    type: "IsabelitaChair",
    image: IsabelitaChair,
  },
  AlbengaDiningChair: {
    name: "Albenga Dining Chair",
    price: 280,
    type: "AlbengaDiningChair",
    image: AlbengaDiningChair,
  },
  TitusDiningChair: {
    name: "Titus Dining Chair",
    price: 220,
    type: "TitusDiningChair",
    image: TitusDiningChair,
  },
  AntiguaTable: {
    name: "Antigua Dining Table",
    price: 620,
    type: "AntiguaTable",
    image: AntiguaTable,
  },
  ArlosTable: {
    name: "Arlos Dining Table",
    price: 650,
    type: "ArlosTable",
    image: ArlosTable,
  },
} as const satisfies Record<string, Furniture.Metadata>
