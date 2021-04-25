import axios from 'axios';

const url = 'https://mod5-4--birthdaycalendar.herokuapp.com/entries';

export const fetchEntries = () => axios.get(url);
export const createEntry = (newEntry) => axios.post(url, newEntry);