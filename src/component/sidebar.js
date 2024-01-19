import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faCalendarAlt, faUsers, faBell, faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import '..style/sidebar.css';

const Sidebar = () => {
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
          <div className='userName'> cactus catus </div>
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
        <div className="sidebar-item" style={{ color: activeItem === 'manage' ? 'black' : 'grey' }} onClick={() => handleItemClick('manage')}>
          <div className={`tickedDiv ${activeItem === 'manage' ? 'visible' : ''}`}></div>
          <FontAwesomeIcon icon={faCog} />
          <div className='item'>Manage </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
