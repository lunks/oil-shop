import React from 'react';
import style from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <div className={style.sidebarItem}>Item 1</div>
            <div className={style.sidebarItem}>Item 2</div>
            <div className={style.sidebarItem}>Item 3</div>
        </div>
    );
};

export default Sidebar;
