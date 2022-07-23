import React from 'react'
import { Field } from 'formik';
import { Typography, Checkbox } from '@mui/material';
import BasicSelect from '../../newcustomer/inputs/BasicSelect';

export default function CustomSelect(props) {

    const [dataList, setdataList] = useState([]);

    const baseURL = "http://localhost:8083/categoryItems/"
	useEffect(() => {
		axios.get(baseURL)
			.then((response) => {
				setCategoryItems(response.data);
			})
	}, [])

    const data = props.data;
    const customSelect = (props) => {
        return (
            <>
                <BasicSelect
                    {...props}
                />
            </>
        )
    }
    return (
        <div>
            {/* <Typography variant='h4'>{data.label}</Typography> */}
            <Field
                name={data.name}
                component={customSelect}
                list={data.list}
                label={data.label}
            />
        </div>
    )
}