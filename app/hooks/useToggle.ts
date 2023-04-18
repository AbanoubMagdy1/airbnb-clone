import { useState } from "react";

function useToggle(val: boolean = false): [boolean, () => void]{
    const [value, setValue] = useState<boolean>(val);

    function toggle(){
        setValue(val => !val)
    }

    return [value, toggle]
}

export default useToggle;