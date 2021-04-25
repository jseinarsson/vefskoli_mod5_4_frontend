import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createEntry } from '../../actions/entries';

const Form = () => {
    const [entryData, setEntryData] = useState({ user: '', location: '', message: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createEntry(entryData));
        clear();
    }

    const clear = () => {
        setEntryData({ user: '', location: '', message: '' })
    }

    return (
        <section className="section">
            <form className="form" autoComplete="off" noValidate onSubmit={handleSubmit}>
                <div className="input">
                    <label>
                        User:
                        <input className="textfield underlined" type="text" name="user" label="User" value={entryData.user} onChange={(e) => setEntryData({ ...entryData, user: e.target.value })}/>
                    </label>
                    <label>
                        Location:
                        <input className="textfield underlined" type="text" name="location" label="Location" value={entryData.location} onChange={(e) => setEntryData({ ...entryData, location: e.target.value })}/>
                    </label>
                </div>
                <textarea className="entryinput" name="message" label="Message" value={entryData.message} onChange={(e) => setEntryData({ ...entryData, message: e.target.value })} />
                <button className="button" type="submit">Add entry</button>
            </form>
        </section>
    );
}

export default Form;