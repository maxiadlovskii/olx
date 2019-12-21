import React from 'react'
import { Select as AntSelect } from 'antd'
import classNames from 'classnames'
import styles from './Select.module.scss'
import {additionsClasses} from "../../../utils";
const { Option } = AntSelect;

export const Select = ({ additions = [], options = [], ...rest }) => (
    <AntSelect
        className={classNames(styles['Select'], additionsClasses(additions, styles))}
        {...rest}
    >
        {options.map(({ key, text}) => <Option value={key} key={key}>{text}</Option> )}
    </AntSelect>
);