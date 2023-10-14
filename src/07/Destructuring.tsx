import React, {useState} from 'react';
import {WomanType} from "./destruction.test";

type PropsType = {
    title: string
    woman: WomanType
    food: Array<string>
    car: {model: string}

}

function useElizabeth (m: string) {
    return [m, function (){}]
}

export const Destructuring: React.FC <PropsType> = ({title, woman,...props}) => {

    const [message, setMessage] = useState('hello')

    return (
        <div>
            <h1>{title}</h1>
            <div>{woman.name}</div>
        </div>
    );
};

export default Destructuring;