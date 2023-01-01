import React from "react";
import imageTurist from "../../source/image/user/turist.jpg";
import Title from "../Title";
import userImagenPerfil from "../../source/image/user/userImagen.png";

import AuthService from "../../services/auth.service";

export default function MisDatos() {
  const client = AuthService.getCurrentUser();
  function imagenPerfil() {
    let src;
    if (client.type=='turista') {
      src=imageTurist;
      
    } else {
      src=userImagenPerfil;
    }
    return src
  }
  return (
    <div className="container p-5">
      <div className="row">
        <Title title="Mis Datos" />
        <div className="col-4">
          <img
            src={imagenPerfil()}
            alt="imagen_perfil"
            style={{ width: "100%", borderRadius: "50%" }}
          />
        </div>
        <div className="col-8">
          <h4>{client.name}</h4>
          <span>
            Viajando por el mundo!<i className="material-icons">edit</i>
          </span>
          <ul>
            <li>
              email: {client.email}
            </li>
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