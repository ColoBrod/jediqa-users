import React from 'react';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import './style.css';

export interface TabProps {
  url: string;
  title: string;
}

const Tab = ({ url, title }: TabProps) => {
  const getClasses = ({ isActive }: NavLinkRenderProps) => isActive 
    ? 'tab active' 
    : 'tab';
  return (
    <NavLink className={getClasses} to={url} >{title}</NavLink>
  );
};

export default Tab;
