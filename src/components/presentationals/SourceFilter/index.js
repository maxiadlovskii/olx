import React from 'react'
import { Select, Button } from '../../common'
import styles from './SourceFilter.module.scss'
import {icons} from "../../../constatnts";

export const SourceFilter = ({ options: { cars, os } }) => {
    return (
    <div className={styles['wrapper']}>
        <div className={styles['fields']}>
            <label className={styles['label']}>{'Select source'}</label>
            <div className={styles['item']}><Select options={cars} placeholder='Select value'/></div>
            <div className={styles['item']}><Select options={os} placeholder='Select value'/></div>
            <div className={styles['item']}><Button icon={icons.ADD} text='Add data source' /></div>
        </div>
        <Button additions={['dark']} text='View all data sources'/>
    </div>
    )
};