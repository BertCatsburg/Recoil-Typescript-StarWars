import { selector } from 'recoil';
import { PersonNumberState } from 'store/starwars/personNumberState';

export const getStarWarsPerson = selector({
    key: 'GetPerson',
    get: async ({ get }) => {
        // * Call the API with the number of the person from the Atom. You MUST use an Atom here otherwise it won't work.
        const response: any = await fetch('https://swapi.dev/api/people/' + get(PersonNumberState));
        return await response.json();
    }
});
