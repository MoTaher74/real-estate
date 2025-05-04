import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
className:string;
children:ReactNode;

}

const Buttons =({className,children,...rest}:IProps)=>{
return <button className={`${className} duration-300 px-8 py-3 rounded`} {...rest}>{children}</button>

}

export default Buttons ;