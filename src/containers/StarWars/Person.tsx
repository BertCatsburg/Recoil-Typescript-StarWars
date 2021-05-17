import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PersonNumberState } from 'store/starwars/personNumberState';
import { getStarWarsPerson } from 'store/starwars/getPerson';
import { useForm } from 'react-hook-form';
import { Button, Typography } from '@material-ui/core';

const SWPerson: React.FC = () => {
    // * The Recoil Atom
    const [personNumber, setPersonNumber] = useRecoilState(PersonNumberState);
    // * The Recoil Selector
    const person = useRecoilValue(getStarWarsPerson);

    // * We need a Form (React-Hook-Form)
    const { register, handleSubmit } = useForm();

    // * When a SubmitButton is clicked
    const onSubmit = (data: any) => {
        // * Set the PersonNumber in the Atom, and automatically the Selector will react
        setPersonNumber(data.personNumber);
    };

    // * Cosmetic: Enter the field and it's selected.
    const onFocusInput = (event: any) => event.target.select();

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type={'text'}
                    defaultValue={personNumber}
                    onFocus={onFocusInput}
                    {...register('personNumber')}
                />
                <br />
                <Button type={'submit'} variant={'contained'}>
                    Get Data
                </Button>
            </form>

            <Typography variant="h5" component="h2" color={'primary'}>
                Person = {person.name}
            </Typography>

            <ul>
                {person.films.map((p: any) => {
                    // * Show all movies the person played in
                    return <li key={p}>{p}</li>;
                })}
            </ul>
        </React.Fragment>
    );
};

export default SWPerson;
