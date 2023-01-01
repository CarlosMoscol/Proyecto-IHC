import React from "react";
import AuthService from "../../services/auth.service";

import userImagenPerfil from "../../source/image/user/userImagen.png";

export default function MiPerfil() {
  const client = AuthService.getCurrentUser();
  return (
    <div className="conatiner p-5">
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
            <h5>{client.type} Independiente</h5>
          </div>
          <ul>
            <li>Nombre: {client.name}</li>
            <li>Oficio: Transportista</li>
            <li>
              Calificación: 4.5 <i className="material-icons">star</i>
            </li>
            <li>
              Email: {client.email} <i className="material-icons">edit</i>
            </li>
            <li>
              Telefono: 987654321 <i className="material-icons">edit</i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}