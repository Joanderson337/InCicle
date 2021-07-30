import React,{useState} from 'react';
import foto from '../../image/fotoPerfil.jpg';
import { AiFillCalendar, AiFillLike } from "react-icons/ai";
import {BsFillLockFill,BsStopwatch,BsChevronDown, BsFillChatSquareDotsFill, BsFillChatDotsFill} from "react-icons/bs";
import image  from './../../image/fotoPerfil.jpg'

import './posts.css';

function Post() {
  const [curti , setCurti] = useState(false)

  return (
   <div className='caixa'>
     <div className='cabecalho'>
       <div className='box'>
         <img src={image} alt="" />
         <div>
           <h2>Maria Roberta</h2>
           <div>
             <span> <BsStopwatch/>há cerca de 8horas</span>  <span><BsFillLockFill/>Somente eu</span>
           </div>
         </div>
       </div>
       <div className='seta'> <BsChevronDown/></div>
     </div>
     <div className= 'btn-like'>
       <p className='texto'>Essa publicação está configurado no modo privado "somente eu"</p>
       <div className='duasDiv'>
         <div className='seja'> <AiFillLike/> Seja o primeiro a curtir</div>
         <div className='seja'><span>0 comentários</span> <span>0 compartilhamento</span></div>
       </div>
       <div className='linha'>
       {curti ? 
            (<button className= 'btn-curtir' onClick={() =>{setCurti(false)}}> <AiFillLike/> Curtiu </button>) 
          : (<button onClick={() =>{setCurti(true)}}>  <AiFillLike/> Curtir </button>)
        }

        <button> <BsFillChatDotsFill/> Comentários</button>
        <button><BsFillChatSquareDotsFill/> Compartilhar</button>
       </div>
    
     </div>
   </div>
  );
}

export default Post;
