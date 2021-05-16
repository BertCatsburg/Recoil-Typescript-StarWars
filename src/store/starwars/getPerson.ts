import { selector } from 'recoil';
import { PersonNumberState } from 'store/starwars/personNumberState';

export const getStarWarsPerson = selector({
    key: 'GetPerson',
    get: async ({ get }) => {
        const response: any = await fetch('https://swapi.dev/api/people/' + get(PersonNumberState));
        return await response.json();
    }
});
