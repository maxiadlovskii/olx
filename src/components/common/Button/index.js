import React from 'react'
import { Button as AntButton } from 'antd';
import { PngIcon } from "../index";
import styles from './Button.module.scss'
import classNames from 'classnames'
import {additionsClasses} from "../../../utils";

export const Button = ({
                           icon,
                           iconProps,
                           text,
                           children,
                           additions = [],
                           ...rest
}) => <AntButton
        className={classNames(styles['btn'], additionsClasses(additions, styles))}
        {...rest}
    >
        { icon && <PngIcon type={icon} {...iconProps}/> }
        <span className={styles['text']}>{children || text}</span>
        </AntButton>;
