import React from 'react';
import { useSelector } from 'react-redux';


import Entry from './Entry/Entry';


const Entries = () => {
    const entries = useSelector((state) => state.entries);

    console.log(entries);

    return (
        !entries.length ? (<div>No entries</div>) : (
            <section className="section">
                <div className="entries">
                    {entries.map((entry) => (
                        <div className="entry underlined" key={entry.id}>
                            <Entry entry={entry} />
                        </div>
                    ))}
                </div>
            </section>
        )
    );
}

export default Entries;