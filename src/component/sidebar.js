import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faCalendarAlt, faUsers, faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import '../Style/sidebar.css';

const Sidebar = ({isAdmin}) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item); 
  };

  return (
    <div className='back'>
    <div className="sidebar">
      <div className="sidebar-item" style={{ color: 'black' }}>
        <div className='icon-size'>
          <i className="bi bi-person-circle "></i>
        </div>
        <div>
          <div className='userName'>cactus cactus</div>
          <div className='userStatus'>ressources humaines</div>
        </div>
      </div>
      <div className='items'>
        <div className="sidebar-item" style={{ color: activeItem === 'tasks' ? 'black' : 'grey' }} onClick={() => handleItemClick('tasks')}>
          <div className={`tickedDiv ${activeItem === 'tasks' ? 'visible' : ''}`}></div>
          <FontAwesomeIcon icon={faTasks} />
          <div className='item'>Tasks </div>
        </div>
        <div className="sidebar-item" style={{ color: activeItem === 'events' ? 'black' : 'grey' }} onClick={() => handleItemClick('events')}>
          <div className={`tickedDiv ${activeItem === 'events' ? 'visible' : ''}`}></div>
          <FontAwesomeIcon icon={faCalendarAlt} />
          <div className='item'>Events </div>
        </div>
        <div className="sidebar-item" style={{ color: activeItem === 'meetings' ? 'black' : 'grey' }} onClick={() => handleItemClick('meetings')}>
          <div className={`tickedDiv ${activeItem === 'meetings' ? 'visible' : ''}`}></div>
          <FontAwesomeIcon icon={faUsers} />
          <div className='item'>Meetings </div>
        </div>
        <div className="sidebar-item" style={{ color: activeItem === 'notifications' ? 'black' : 'grey' }} onClick={() => handleItemClick('notifications')}>
          <div className={`tickedDiv ${activeItem === 'notifications' ? 'visible' : ''}`}></div>
          <FontAwesomeIcon icon={faBell} />
          <div className='item'>Notifications </div>
        </div>
        <div className="sidebar-item" style={{ color: activeItem === 'anonym' ? 'black' : 'grey' }} onClick={() => handleItemClick('anonym')}>
          <div className={`tickedDiv ${activeItem === 'anonym' ? 'visible' : ''}`}></div>
          <i class="bi bi-file-lock-fill"></i>
          <div className='item'>anonymbox </div>
       </div>
       {isAdmin &&(
        <div className="sidebar-item" style={{ color: activeItem === 'manage' ? 'black' : 'grey' }} onClick={() => handleItemClick('manage')}>
          <div className={`tickedDiv ${activeItem === 'manage' ? 'visible' : ''}`}></div>
          <i class="bi bi-person-fill"></i>
          <div className='item'>Manage </div>
        </div>)}
      </div>
      <div className="Settings" >
      <i class="bi bi-gear-fill"></i>
      <div className='item'> Settings </div>
      </div>
      <button className='out'>Log Out</button>
    </div>
    </div>

  );
};

export default Sidebar;
