import React, { useState } from 'react'
import CustomSelect from '../formikInputs/CustomSelect'

//Props to be passed
//name="name", groupId="groupId", 

function Dropdown(props) {
    
    const [itemList, setItemList] = useState([]);

    setItemList([{ value: "NoImport", name: "Do not Import" },
    { value: "Import", name: "Import" },
    { value: "OverWrite", name: "Overwrite" }])

    return (
        // <select className='select'>
        //     <option></option>
        //     <option>First Name</option>
        //     <option>Last Name</option>
        //     <option>Address 1</option>
        //     <option>Address 2</option>
        //     <option>Address 3</option>
        //     <option>Address 4</option>
        //     <option>Date of birth</option>
        // </select>

        <CustomSelect data={{
            name: "importType",
            label: "Select Import type",
            list: [
                { value: "NoImport", name: "Do not Import" },
                { value: "Import", name: "Import" },
                { value: "OverWrite", name: "Overwrite" }
            ]
        }}
            defaultValue={"Import"}></CustomSelect>
    )
}

export default Dropdown