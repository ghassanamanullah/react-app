import { createContext } from 'react';

export const Context = createContext({
    bahasa: 'id',
    onLangChange: () => {},
    tema: 'light',
    onThemeChange: () => {}
})