import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getEntries } from './actions/entries';
import Entries from './components/Entries/Entries';
import Form from './components/Form/Form';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEntries());
    }, [dispatch]);

    return (
        <div className="screen">
            <Form />
            <Entries />
        </div>
    );
}

export default App;