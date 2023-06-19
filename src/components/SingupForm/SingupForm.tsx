import { useEffect, useState } from "react";
import "./SingupForm.scss";
import axios from "axios";

const useLocalStorage = (key: string, defaultValue: any) => {
    const [state, setState] = useState(() => {
        const local = localStorage.getItem(key) ? localStorage.getItem(key) : null;
        return (local && JSON.parse(local)) ?? defaultValue
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

function SingupForm(props: any) {
    const [email, setEmail] = useLocalStorage('email', null);
    const [password, setPassword] = useLocalStorage('password', null);
    const [counter, setCounter] = useState(0);
    const [list, setList] = useState([]);

    // list useEffect
    useEffect(() => {
        console.log("component list");

        if (!list.length) {
            axios({
                url: "https://jsonplaceholder.typicode.com/posts",
                method: "get",
            }).then((response) => setList(response.data));
        }

        return () => {};
    }, [list]);

    const handleSubmit = (e: any): void => {
        e.preventDefault();
    };

    const handleChange = (event: any): void => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        switch (inputName) {
            case "email":
                setEmail(inputValue);
                break;
            case "password":
                setPassword(inputValue);
                break;
        }
    };

    return (
        <form onSubmit={handleSubmit} className="" autoComplete="off">
            <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
            />
            <input
                type="text"
                name="password"
                value={password}
                onChange={handleChange}
            />

            <button type="submit">submit</button>

            <div className="p3"></div>

            <div>{counter}</div>
            <button
                onClick={() => setCounter((prev) => prev + 1)}
                className="btn btn-dark me-2"
            >
                +
            </button>
            <button
                onClick={() => setCounter((prev) => prev - 1)}
                className="btn btn-dark"
            >
                -
            </button>
            <div className="p3"></div>

            {list.map((el: any) => (
                <div>{el.title}</div>
            ))}
        </form>
    );
}

export default SingupForm;
