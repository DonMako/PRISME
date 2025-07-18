import React, { ReactElement } from "react";

const Profiles = function (): ReactElement {
  return <form id="choixProfil"><label style={{ "color": "black" }} htmlFor="profils">Profil sélectionné : </label>
    <select id="profils">
      <option value="profil1">Support de cours</option>
      <option value="profil2">Compte-rendu de réunion</option>
    </select></form>
}

export default Profiles;