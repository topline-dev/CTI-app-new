import React from "react";
import { AxiosFetch } from "../../../../AxiosFetch";
import CustomSelect from "../../../../formikInputs/CustomSelect";
import { useState, useEffect } from "react";

//<CallGroupSelect mode={readMode} name="callLogGroup.id"/>

export default function PhaseSelect(props) {
  const axiosFetch = AxiosFetch();
  const [groupList, setGroupList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  var group = [];

  useEffect(() => {
    async function getData() {
      const response = await axiosFetch.get(`/phase`);
      if (response.status === 200) {
        response.data.map((data, index) => {
          group[index] = { name: data.name, value: data.name };
        });
        setGroupList(group);
        setIsLoading(false);
      }
    }
    getData();
  }, []);
  return isLoading ? (
    <div>Loading</div>
  ) : (
    <>
      <div>
        <CustomSelect
          data={{
            name: props.name,
            label: "Phase",
            list: groupList,
          }}
          mode={props.mode}
        />
      </div>
    </>
  );
}
