import React from 'react';
import moment from 'moment';

const Entry = ( {entry} ) => {
    return (
        <div className="entrycontents">
            <div className="entryheader">
                <p className="entryheaderinfo">{entry.user}</p>
                <p className="entryheaderinfo">{entry.location}</p>
                <p className="entryheaderinfo">{moment(entry.createdAt).format('[circulation] YY [sol] MMDD')}</p>
            </div>
            <h3>{entry.message}</h3>
        </div>
    );
}

export default Entry;