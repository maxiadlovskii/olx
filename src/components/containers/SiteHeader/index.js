import React from 'react'
import { SiteHeader } from "../../presentationals/SiteHeader";
import {icons, paths} from "../../../constatnts";

const SiteHeaderContainer = () => {
    const menuItems = [
        { path: paths.REVIEW, name: 'Review'},
        { path: paths.REQUEST, name: 'Request'},
        { path: paths.MESSAGE, name: 'Message'}
    ];
    const setupNav = [
        { icon: icons.BELL},
        { icon: icons.PROFILE},
        { icon: icons.SETTINGS}
    ];
    return <SiteHeader menuItems={menuItems} setupNav={setupNav}/>
}

export default SiteHeaderContainer;