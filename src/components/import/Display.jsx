import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { useFormikContext } from 'formik';
import CustomSelect from '../formikInputs/CustomSelect';
import { AxiosFetch } from '../AxiosFetch';


function Display(props) {
    const { data } = props;

    const axiosFetch = AxiosFetch();

    const [groupId, setgroupId] = useState(0);

    const initialValues = [
        { value: "", name: "" },
        { value: "customerFirstName", name: "Customer First Name" },
        { value: "customerLastName", name: "Customer Last Name" },
        { value: "customerLastRuby", name: "customer Last Ruby" },
        { value: "customerFirstRuby", name: "customer First Ruby" },
        { value: "customerZipCode", name: "customer Zip Code" },
        { value: "customerEmail", name: "customer Email" },
        { value: "customerFirstUserId", name: "customer First User Id" },
        { value: "customerSecondUserId", name: "customer Second User Id" },
        { value: "customerMemo1", name: "customer Memo 1" },
        { value: "customerMemo2", name: "customer Memo 2" },
        { value: "customerAddress1", name: "Customer Address 1" },
        { value: "customerAddress2", name: "Customer Address 2" },
        { value: "customerAddress3", name: "Customer Address 3" },
        { value: "customerAddress4", name: "Customer Address 4" },
        
    ];

    const [optionList, setOptionList] = useState(initialValues);

    const FormObserver = () => {
        const { values } = useFormikContext();
        useEffect(() => {
            console.log(values.groupId);
            setgroupId(values.groupId || "");
        }, [values.groupId]);
        return null;
    };

    useEffect(() => {
        async function getOptionList() {
            if (groupId) {
                const response = await axiosFetch.get(`/categoryItemsByGroupId/${groupId}`)
                if (response.status = 200) {
                    let temp = [];
                    response.data.map((data) => {
                        temp.push({
                            value: data.category.categoryId + "_" + data.itemId,
                            name: data.category.categoryName + " -> " + data.itemName
                        })
                    })
                    setOptionList(initialValues.concat(temp));
                    console.log(optionList);
                }
                else {
                    console.log("Response status not 200 in Display Component Import");
                }

            }
        }
        getOptionList();
    }, [groupId])


    return (
        <div>
            <FormObserver />
            <table className='table'>
                <thead>
                    <tr>
                        {   
                            data[0].map((item1, index1) => (
                                <th scope="col" key={index1 + "TH"}>
                                    <CustomSelect data={{
                                        name: `Column.${index1}`,
                                        label: "Select Item",
                                        list: optionList
                                    }}
                                        defaultValue={""}
                                        required></CustomSelect>
                                </th>

                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index + "TR"}>
                            {item.map((item1, index1) => (<td key={index1}>{item1}</td>))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default Display