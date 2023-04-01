import { useState } from "react";
export const useLocalStorage = (props) => {
    const { keyname, defaultValue } = props;
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(keyname);
            if (value) {
                return JSON.parse(value);
            }
            else {
                window.localStorage.setItem(keyname, JSON.stringify(defaultValue));
                return defaultValue;
            }
        }
        catch (err) {
            return defaultValue;
        }
    });
    const setValue = (newValue) => {
        try {
            window.localStorage.setItem(keyname, JSON.stringify(newValue));
        }
        catch (err) {
            console.log(err);
        }
        setStoredValue(newValue);
    };
    return [storedValue, setValue];
};
