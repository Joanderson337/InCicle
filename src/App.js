import React from 'react';
import foto from './image/fotoPerfil.jpg';
import { BsFillBriefcaseFill, BsBuilding , BsGearWideConnected } from "react-icons/bs";
import { BiCalendarCheck} from "react-icons/bi";
import { GiAbstract118} from "react-icons/gi";
import { ImImages, ImCamera, ImBubble } from "react-icons/im";
import  Post from '../src/components/Post'

import './App.css';

function App() {
  return (
   <div className='container'>
     <div className= 'perfil'>
       <div className='containerPerfil'> 
         <img src={foto} alt="fotoPerfil" />
         <div className='nomePerfil'>
           <h2>Maria Roberta</h2>
           <h3>@Maria Roberta</h3>
           <p>Front-End Developer</p>
           </div>
         <div className='descricaoPerfil'>
           <h2>Rio Branco/Acre - Brasil</h2>
           <div className='iconPerfil'>
             <h2><BsFillBriefcaseFill/> InCicle </h2>
             <h2> <BsBuilding/> Uninorte</h2>
           </div>
         </div>
       </div>
     </div>
     <div className="publicacao">
       <div className='containerPublicacao'>
         <h2> <ImBubble/> Escrevendo publicação...</h2>
         <div>   <ImCamera/> <ImImages/> </div>
       </div>
       <div className='arquivo'>
           <h2> ou <span>publique um artigo</span> na InCicle </h2>
         </div>
         <Post/>
         <Post/>
     </div>
  
     <div className="painel">
       <div className='eficiencia'>
       < GiAbstract118/> <h2> Eficiência</h2>
       </div>
       <div className='teste'></div>
       <div class="main">
   <div class="activities">
     <div className='ati'>
     <h3>Atividades </h3>
     <h3>23/106</h3>
     </div>
     <div className="cin">
       <h3>50%</h3>
     </div>
   </div>
   <div className="projects">
     <div className='proj'>
     <h3>Projetos</h3>
     <h3>23/106</h3>
     </div>
     <div className="cin">
       <h3>50%</h3>
     </div>
   </div>
   <div class="total">
     <div className='tot'>
     <h3>Total</h3>
     <h3>23/106</h3>
     </div>
     <div className="cin">
       <h3>50%</h3>
     </div>
   </div>
   <div class="containerResult">
     <div class="activitiesResult">
     <div className="acti">
     <h3>Atividades</h3>
       <h4>Pendentes 3</h4>
       <div className='divi'></div>
       <h4>Pendentes 3</h4>
       <div className='divi'></div>
       <h4>Pendentes 3</h4>
     </div>
     </div>
     <div class="projectsResult">
       <div className="resul">
       <h3>Projetos</h3>
       <h4>Pendentes 3</h4>
       <div className='divi'></div>
       <h4>Pendentes 3</h4>
       <div className='divi'></div>
       <h4>Pendentes 3</h4>
       </div>
     </div>
     <div class="totalResult">
      <div className="res">
      <h3>Total</h3>
       <h4>Pendentes 3</h4>
       <div className='divi'></div>
       <h4>Pendentes 3</h4>
       <div className='divi'></div>
       <h4>Pendentes 3</h4>
      </div>
     </div>
  </div>
</div>
     
       <div className='aniversariante'> <BiCalendarCheck/> <h2>Aniversariantes</h2></div>
       <div className='teste'></div>
       <div className='textoAniversario'><h2>Nenhum dos seus amigos comemora
         aniverário hoje</h2></div>
       <div className='pendencia'> <BsGearWideConnected/> <h2>Pendências</h2></div>
       <div className='data'><h2>Seg, 21 de Jun</h2></div>
       <div className='textoPendencia'><h2>Você não possui nenhuma pendência para hoje</h2></div>
     </div>
   </div>
  );
}

export default App;
