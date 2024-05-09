import { createContext, useState } from "react";
import data from "../constants/provinces";

const FormContext = createContext();

export const FormProvider = ({children}) => {
    const [provinces, setProvinces] = useState(data.provinces)
    
    const updateData = (newData) => {
        const updatedProvinces = [...provinces];
        const provinceToUpdate = updatedProvinces[newData.provinsi];
        provinceToUpdate[newData.status] = newData.total;
        setProvinces(updatedProvinces);
    }

    return (
        <FormContext.Provider value={{provinces, updateData}}>{children}</FormContext.Provider>
    )
}

export default FormContext;