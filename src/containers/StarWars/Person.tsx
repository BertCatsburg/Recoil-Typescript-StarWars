import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PersonNumberState } from 'store/starwars/personNumberState';
import { getStarWarsPerson } from 'store/starwars/getPerson';
import { useForm } from 'react-hook-form';
import { Button, Typography } from '@material-ui/core';

const SWPerson: React.FC = () => {
    const [personNumber, setPersonNumber] = useRecoilState(PersonNumberState);
    const person = useRecoilValue(getStarWarsPerson);

    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        setPersonNumber(data.personNumber);
    };
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
                    return <li key={p}>{p}</li>;
                })}
            </ul>
        </React.Fragment>
    );
};

export default SWPerson;
