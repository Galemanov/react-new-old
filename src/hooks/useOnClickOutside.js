import { useEffect } from "react";

export const useOnClickOutside = (ref, callback) => {
    useEffect(() => {
        const clickOutsideHandler = (event) => {
            if (ref.current && !event.path.includes(ref.current)) {
                callback();
            }
        };

        document.body.addEventListener("click", clickOutsideHandler);

        return () =>
            document.body.removeEventListener("click", clickOutsideHandler);
    }, [callback, ref]);
};
