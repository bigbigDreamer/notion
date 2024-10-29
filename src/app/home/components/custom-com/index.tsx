'use client'
import type { FC, PropsWithChildren } from "react";
import { useEffect } from 'react';

const CustomCom: FC<PropsWithChildren> = ({ children }) => {

    useEffect(() => {
        console.log("template")
    }, []);

    return (
        <>{children}</>
    )
}


export {
    CustomCom
}
