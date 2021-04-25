export default (entries = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...entries, action.payload]; // SPREAD the entries with ...
        default:
            return entries;
    }
}