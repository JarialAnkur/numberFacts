import{useState} from "react";
const useText = (initialvalues) => {
    const[values,setValues]=useState(initialvalues);
    return [
        values,
        (e)=>{
            setValues({
                ...values,
                [e.target.name] : e.target.value,
            });
        },
    ];
};
 
export default useText;