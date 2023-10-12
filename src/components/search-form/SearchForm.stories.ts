import { SearchForm } from './SearchForm';

export default {
    title: 'SearchForm',
    component: SearchForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export const WithInitialValue = {
    args: {
        initialQuery: 'test'
    },
};
