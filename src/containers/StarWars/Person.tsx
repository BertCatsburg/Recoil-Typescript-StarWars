import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PersonNumberState } from 'store/starwars/personNumberState';
import { getStarWarsPerson } from 'store/starwars/getPerson';

const SWPerson: React.FC = () => {
    const [personNumber, setPersonNumber] = useRecoilState(PersonNumberState);
    const person = useRecoilValue(getStarWarsPerson);

    const handleChange = (event: any) => {
        setPersonNumber(event.target.value);
    };

    return (
        <React.Fragment>
            <input type={'text'} value={personNumber} onChange={handleChange} />
            <p>Person = {person.name}</p>
            <ul>
                {person.films.map((p: any) => {
                    return <li key={p}>{p}</li>;
                })}
            </ul>
        </React.Fragment>
    );
};

export default SWPerson;
