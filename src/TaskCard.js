import React from 'react';
import './TaskCard.css';
import Icon from './icon';
function TaskCard({title,deadline}) {
    return (
            <div className='anas-taskcard anas-gris'>
                <div className='anas-container'>
                    <div className='anas-titre'> {title}
                    </div>
                    <div className='anas-deadline anas-rouge'>
                    {deadline}
                    </div>
                    <div className='anas-iconcontainer'>
                        <Icon></Icon>
                        <Icon></Icon>
                    </div>
                </div>
                <div className='anas-button anas-marron'>
                    <a className='anas-link' href='https://drive.google.com/drive/folders/1vE7Kmt-XmUua7urzfDqhPcje5heUOqeG?usp=drive_link' target='_blank'>
                        Drive Equipe
                    </a>
                </div>
            </div>
       
    );
  }
  
  export default TaskCard;
  