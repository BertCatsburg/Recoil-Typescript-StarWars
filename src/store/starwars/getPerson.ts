import { selector } from 'recoil';
// import { PersonNumberState } from 'store/starwars/personNumberState';

export const getStarWarsPerson = selector({
    key: 'GetPerson',
    get: async ({ get }) => {
        console.log('About to get StarWars-API-info');
        // const personNumber = get(PersonNumberState);
        const response: any = await fetch('https://swapi.dev/api/people/1');
        console.log(response);
        const resp = await response.json();
        console.log(resp.name);
        return resp.name;
    }
});
