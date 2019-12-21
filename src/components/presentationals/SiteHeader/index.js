import React from 'react'
import styles from './SiteHeader.module.scss';
import { NavLink } from 'react-router-dom'
import { PngIcon } from "../../common";

export const SiteHeader = ({ menuItems, setupNav, ...rest }) => (
    <header className={styles['header']}>
        <label className={styles['title']}>Data gate</label>
        <nav className={styles['nav']}>
         <div className={styles['links']}>
        { menuItems.map(({ name, path }) => <NavLink
            to={path}
            activeClassName={styles['active']}
            className={styles['link']}
            exact={path === '/'}
            key={`${name}${path}`}
            {...rest}
        >{name}</NavLink>)}
         </div>
        <ul className={styles['setup']}>
            {
                setupNav.map(({icon}) => <li
                    key={`icon_${icon}`}
                    className={styles['setup-item']}
                    >
                    <PngIcon type={icon}/>
                </li>
                )
            }
        </ul>
        </nav>
    </header>
);