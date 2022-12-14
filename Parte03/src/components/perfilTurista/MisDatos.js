import React from "react";
import imageTurist from "../../source/image/user/turist.jpg";
import Title from "../Title";

export default function MisDatos() {
  return (
    <div className="container p-5">
      <div className="row">
        <Title title="Mis Datos" />
        <div className="col-4">
          <img
            src={imageTurist}
            alt="turist"
            style={{ width: "100%", borderRadius: "50%" }}
          />
        </div>
        <div className="col-8">
          <h4>Lana Doe</h4>
          <span>
            Viajando por el mundo!<i className="material-icons">edit</i>
          </span>
          <ul>
            <li>
              email: lanaDoe@uni.pe <i className="material-icons">edit</i>
            </li>
            <li>Recorrido: 7053Km</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <Title title="Mis viajes" />
        mi viajes
      </div>
    </div>
  );
}