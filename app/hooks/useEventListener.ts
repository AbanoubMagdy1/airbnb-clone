import { useEffect } from "react";

function useEventListener<T>(element: HTMLElement, eventName: keyof HTMLElementEventMap, handler: any){
    useEffect(() => {
        element.addEventListener(eventName, handler);

        return () => {
            element.removeEventListener(eventName, handler);
        };
    }, [element, eventName, handler]);
}

export default useEventListener;