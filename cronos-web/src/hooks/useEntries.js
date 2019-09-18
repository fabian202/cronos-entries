import { useState, useEffect } from "react";
import api from '../api'
import _ from 'lodash';

export const useEntries = () => {
    const [ entries, setEntries ] = useState([])

    const getEntries = async () => {
        try {
            const res = await api.get('entry');
            console.log(res.data)

            const gEntries = _(res.data)
            .groupBy(x => x.project.name)
            .map((value, key) => ({key: key, data: value, total: _.sumBy(value, t => t.billable && t.hours)}))
            .value();
            
            console.log(gEntries)
            setEntries(gEntries);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteEntry = (_id) => {
        console.log('delete', _id)
    }

    useEffect(() => {
        getEntries();
    }, [])

    return {
        entries,
        onDeleteEntry: (_id) => {
            deleteEntry(_id)
        }
    }
}
