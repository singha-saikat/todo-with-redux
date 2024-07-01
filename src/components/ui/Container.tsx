import { ReactNode } from "react";

type TContainerProf = {
    children : ReactNode;
}

const Container = ({children}:TContainerProf) => {
    return (
        <div className="h-screen w-full max-w-7xl mx-auto">
            {children}
        </div>
    );
};

export default Container;