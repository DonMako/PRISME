const Profiles = () => {
    return <form style={{'display':'flex','justify-content':'center','marginBottom':'3em'}}><label style={{'color':'black'}} htmlFor="profils">Profil sélectionné :</label>
    <select id="profils">
      <option value="profil1">Support de cours</option>
      <option value="profil2">Compte-rendu de réunion</option>
    </select></form>
}

export default Profiles;