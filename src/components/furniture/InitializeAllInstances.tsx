import { InitializeAlbengaInstances } from "./AlbengaDiningChair"
import { InitializeAntiguaInstances } from "./AntiguaTable"
import { InitializeArlosInstances } from "./ArlosTable"
import { InitializeIsabelitaInstances } from "./IsabelitaChair"
import { InitializeTitusInstances } from "./TitusDiningChair"

export default function InitializeAllInstances() {
  return (
    <>
      <InitializeTitusInstances />
      <InitializeIsabelitaInstances />
      <InitializeAlbengaInstances />
      <InitializeAntiguaInstances />
      <InitializeArlosInstances />
    </>
  )
}
