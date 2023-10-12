import { GenreSelect } from './GenreSelect';
import {listGenres} from '../../App'


const onSelect = (event, setGenres) => {
    event.preventDefault();
    const { target: { value } } = event;
    setGenres(value);
};
export default {
    title: 'GenreSelect',
    component: GenreSelect,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        initialGenre: 'string'
    }
};

export const WithInitialValue = {
    args: {
        listGenres: listGenres,
        onSelect: onSelect
    },
};
