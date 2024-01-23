import React from 'react';
import './TaskCard.css';
import Icon from './icon';
function TaskCard({title,deadline}) {
    return (
            <div className='taskcard gris'>
                <div className='container'>
                    <div className='titre'> {title}
                    </div>
                    <div className='deadline rouge'>
                    {deadline}
                    </div>
                    <div className='iconcontainer'>
                        <Icon></Icon>
                        <Icon></Icon>
                    </div>
                </div>
                <div className='button marron'>
                    <a className='link' href='https://drive.google.com/drive/folders/1vE7Kmt-XmUua7urzfDqhPcje5heUOqeG?usp=drive_link' target='_blank'>
                        Drive Equipe
                    </a>
                </div>
            </div>
       
    );
  }
  
  export default TaskCard;
  