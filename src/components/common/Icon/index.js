import React from 'react'
import { icons } from '../../../constatnts'
const iconPaths = {
    [icons.BELL]: '/images/icon-bell.png',
    [icons.ADD]: '/images/icon-add.png',
    [icons.PROFILE]: '/images/icon-profile.png',
    [icons.SETTINGS]: '/images/icon-settings.png',
};

export const PngIcon = ({ width, height, type }) =>
    <img
        width={width}
        height={height}
        src={iconPaths[type]}
        alt={'icon'}
    />;