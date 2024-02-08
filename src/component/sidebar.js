import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faCalendarAlt, faUsers, faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import '../Style/sidebar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = (props) => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    { id: 'tasks', route: '/task', icon: faTasks, label: 'Tasks' },
    { id: 'events', route: '/events', icon: faCalendarAlt, label: 'Events' },
    { id: 'meetings', route: '/meeting', icon: faUsers, label: 'Meetings' },
    { id: 'anonym', route: '/anonymbox', icon: 'bi bi-file-lock-fill', label: 'Anonymbox' },
    { id: 'manage', route: '/functionalities', icon: 'bi bi-person-fill', label: 'Manage' },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.id);
    if (item.id === 'profile') {
      // Handle special case for the "cactus cactus" user name
      navigate('/profile');
    } else {
      navigate(item.route);
    }
  };

  const isItemActive = (item) => location.pathname.includes(item.route);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className='back'>
      <div className="sidebar">
        <div
          className="sidebar-item"
          style={{ color: 'black' }}
          onClick={() => handleItemClick({ id: 'profile' })}
        >
          <div className='icon-size'>
            <i className="bi bi-person-circle "></i>
          </div>
          <div>
            <div className='userName'>cactus cactus</div>
            <div className='userStatus'>ressources humaines</div>
          </div>
        </div>

        <div className='items'>
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className="sidebar-item"
              style={{ color: isItemActive(item) ? 'black' : 'grey' }}
              onClick={() => handleItemClick(item)}
            >
              <div className={`tickedDiv ${isItemActive(item) ? 'visible' : ''}`}></div>
              {typeof item.icon === 'string' ? <i className={item.icon}></i> : <FontAwesomeIcon icon={item.icon} />}
              <div className='item'>{item.label}</div>
            </div>
          ))}
        </div>

        <div className="Settings">
          <i className="bi bi-gear-fill"></i>
          <div className='item'>Settings</div>
        </div>

        <button className='out' onClick={() => handleLogout()}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
