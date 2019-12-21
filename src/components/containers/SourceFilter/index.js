import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { getDictionaries } from '../../../redux/actions/dictionaries'
import {dictionaries as dictionaryModel } from "../../../constatnts/beModels";
import { SourceFilter } from '../../presentationals/SourceFilter'
import {optionsCreator} from "../../../utils";

const SourceFilterContainer = ({
                                   isFailed,
                                   isFetching,
                                   collections,
                                   getDictionaries
}) => {
    const [options, setOptions] = useState({});
    useEffect(()=> { getDictionaries() }, []);
    console.log(collections);
    useEffect(()=> {
        if(!isFailed){
            const { cars, os, valueTypes } = collections;
            setOptions({
                cars: optionsCreator(cars, dictionaryModel.TEXT, dictionaryModel.ID),
                os: optionsCreator(os, dictionaryModel.TEXT, dictionaryModel.ID),
                valueTypes: optionsCreator(valueTypes, dictionaryModel.TEXT, dictionaryModel.ID),
            })
        }

    }, [collections]);
    return <SourceFilter options={options} isFetching={isFetching} />
};

const mapStateToProps = ({ dictionaries }) => ({
    collections: dictionaries.collections,
    isFailed: dictionaries.isFailed,
    isFetching: dictionaries.isFetching
});

const mapDispatchToProps = {
    getDictionaries
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SourceFilterContainer)