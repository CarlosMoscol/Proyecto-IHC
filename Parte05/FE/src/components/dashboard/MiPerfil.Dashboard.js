import React from "react";
import AuthService from "../../services/auth.service";

import userImagenPerfil from "../../source/image/user/userImagen.png";

export default function MiPerfil() {
  const client = AuthService.getCurrentUser();
  return (
    <div className="container mt-5 mb-5 p-5">
      <div className="row">
        <div className="col-4">
          <div style={{ width: "200px", height: "200px", borderRadius: "50%" }}>
            <img
              src={userImagenPerfil}
              alt="perfil"
              style={{ width: "100%", borderRadius: "50%" }}
            />
          </div>
        </div>
        <div className="col-8">
          <div>
            <h5>Afiliado Independiente</h5>
          </div>
          <ul>
            <li>Nombre: {client.name}</li>
            <li>Oficio: Alojamiento y Transporte</li>
            <li>
              Calificación: 4.5 <i className="material-icons">star</i>
            </li>
            <li>
              Email: {client.email}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}