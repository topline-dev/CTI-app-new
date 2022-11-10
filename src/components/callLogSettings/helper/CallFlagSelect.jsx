import React from "react";
import { AxiosFetch } from "../../AxiosFetch";
import CustomSelect from "../../formikInputs/CustomSelect";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";

//<CallGroupSelect mode={readMode} name="callLogGroup.id"/>

export default function CallFlagSelect(props) {
    const axiosFetch = AxiosFetch();
    const [groupList, setGroupList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    var group = [];

    useEffect(() => {
        async function getData() {
            // if (props.callGroup) {
                const response = await axiosFetch.get(`/callFlag/${props.callGroup ? props.callGroup : ""}`);
                if (response.status === 200) {
                    response.data.map((data, index) => {
                        group[index] = { name: data.name, value: data.id };
                    });
                    setGroupList(group);
                    setIsLoading(false);
                }
            // }
        }
        getData();
    }, [props.callGroup]);
    return isLoading ? (
        <div>Loading</div>
    ) : (
        <>
            <div>
                <CustomSelect
                    data={{
                        name: props.name,
                        label: "Call Flag",
                        list: groupList,
                    }}
                    mode={props.mode}
                />
            </div>
        </>
    );
}
