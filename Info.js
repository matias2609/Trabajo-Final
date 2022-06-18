import React from 'react'

export const Info = () => {
    return (
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        POTENCIACIÓN
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Chip de Potencia - Reprogramaciones - Inyeccion Electronica - Motores Especiales - Accesorios de Competición - Metanol - Oxido Nitroso.
          Nos encargamos de la instalación y la puesta a punto para que disfrutes de la potencia que puede llegar a entregar tu auto.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       LLANTAS DEPORTIVAS
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Ofrecemos llantas deportivas en una amplia variedad de rodados y terminaciones con productos de calidad y certificaciones internacionales.
          Sea autos, clásico, hotrods o competición en pista, tenemos una opción para vos.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       KIT DEPORTIVOS
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Ofrecemos también una muy amplia línea de kits deportivos con un desarrollo estético acorde al vehículo, con los procesos de fabricación mas finos.
          Fabricados en plastico inyectado lo que garantiza una fijación perfecta y una durabilidad extendida.
          Los mismos por lo general incluyen una opción de alerón deportivo, faldones laterales, spoilers delanteros y extensiones traseras con difusores deportivos.</p>
      </div>
    </div>
  </div>
</div>
    )
}

export default Info;