import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
 
export const SidebarData = [
  {
    title: 'Logging',
    path: '/Logging',
    icon: <AiIcons.AiTwotoneHome />,
    cName: 'nav-text'
  },
  {
    title: 'Analitik',
    path: '/Analitik',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Daftar Inventory',
    path: '/Inventory',
    icon: <FaIcons.FaList />,
    cName: 'nav-text'
  },
  {
    title: 'Profil',
    path: '/Profil',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/Logout',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text'
  },
  
];