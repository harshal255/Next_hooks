import { useEffect } from "react";

const useCustomHook = (count: any) => {
    useEffect(() => {
        console.log("calling useeffect");
        if (count) document.title = `Chats (${count})`;
    }, [count])
}

export default useCustomHook
