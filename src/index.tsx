import React, { ReactElement, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ToolBar from './toolbar/ToolBar';
import ChangeMode from './ChangeMode';
import Profiles from './toolbar/Profiles';

const App = function (): ReactElement {
  const [uploadedFile, setUploadedFile] = useState("");
  const deleteFile = () => {
    return setUploadedFile("");
  }

  return <div className="App">
    <ChangeMode />
    <h2 id="outils">
      <section id="contenu">
        <button>On doit avoir l'upload ici</button>
        <div id="fileName">{uploadedFile}</div>
        <button onClick={deleteFile}>Fermer le PDF chargé</button>
      </section>
      <Profiles />
    </h2>
    <h2>
      <ToolBar />
    </h2>
    {uploadedFile && <main id="pdf">
      <p>Ministère de l’éducation nationale</p>
      <p>Liberté Égalité Fraternité</p>
      <p>Journée nationale Non au harcèlement</p>
      <p>Jeudi 7 Novembre 2024</p>
      <h1>Ton problème, c’est mon problème</h1>
      <p>Non au harcèlement</p>
      <img alt="" src="./image.jpg" />
      <h2>Édito</h2>
      <p>En France, près de deux élèves par classe sont harcelés à l’École. Face à ce fléau, nous le savons, il est urgent d’agir. Car chaque enfant a le droit d’aller à l’école sans avoir la boule au ventre, sans redouter la prochaine humiliation, sans craindre la prochaine agression. Depuis ma nomination comme ministre de l’Éducation nationale, j’ai fait de ce combat l’une de mes priorités, en le poursuivant sans relâche, en cohérence avec l’action résolue de mes prédécesseurs. Depuis 2022, nous avons posé des fondations solides pour prévenir et combattre le harcèlement à l’École : moyens décuplés pour la ligne d’écoute 3018, durcissement des sanctions, nomination d’au moins un référent harcèlement et d'une équipe ressource de cinq personnes dans chaque collège et lycée, recrutement de 150 personnes en académies dédiées à la résolution des situations, renouvellement, enfin, de l’enquête nationale menée dans tous nos établissements, pour libérer la parole de nos élèves. Leur implication dans ce combat force notre admiration. Cette année, le clip du prix Non au harcèlement, produit par les élèves du collège Émile Guillaumin de Moulins, a de nouveau mis à l’honneur leur créativité. Cette vidéo porte un message fort : « Ton problème, c’est mon problème ». Ces mots résument l’essence de notre combat : faire prévaloir la solidarité et l’empathie. Du fond du cœur, je remercie ces élèves pour leur engagement et leur capacité à nous inspirer, en portant un message qui incite à agir, à protéger, à écouter. C’est à cette tâche immense que s’attellent chaque jour, dans la proximité des élèves, les enseignants, les personnels éducatifs et les référents harcèlement. Ce sont eux, les premiers témoins, qui recueillent la parole des élèves, identifient les signes avant-coureurs et agissent. Car ce n’est qu’ensemble que nous pouvons changer la donne, pour que chaque élève sache qu’il sera entendu. Alors face au harcèlement à l’École, soyons à la hauteur de cet engagement, soyons toujours à l’écoute, soyons intransigeants.</p>
      <p>Anne GENETET</p>
      <p>Ministre de l’Éducation nationale</p>
    </main>}
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
