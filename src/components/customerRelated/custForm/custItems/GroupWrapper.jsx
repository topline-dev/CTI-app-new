import React, { useEffect } from 'react'
import axios from '../../axios'
import CustomSelect from '../../../formikInputs/CustomSelect'

function GroupWrapper(props) {
    useEffect(async() => {
		const data = await axios.get('/group');
        console.log(data);
	}, [])


    return (
        <CustomSelect
            data={{
                name: "custData.customerGroupId",
                label: "Group",
                list:
                    [
                        { value: "Male", name: "Male" },
                        { value: "Female", name: "Female" },
                        { value: "Other", name: "Other" }
                    ]
            }} 
            {...props}
            />
    )
}

export default GroupWrapper