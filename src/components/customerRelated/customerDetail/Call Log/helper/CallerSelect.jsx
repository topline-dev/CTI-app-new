import React from "react";
import { AxiosFetch } from "../../../../AxiosFetch";
import CustomSelect from "../../../../formikInputs/CustomSelect";
import { useState, useEffect } from "react";

//<CallGroupSelect mode={readMode} name="callLogGroup.id"/>

export default function CallerSelect(props) {
  const axiosFetch = AxiosFetch();
  const [groupList, setGroupList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  var group = [];

  useEffect(() => {
    async function getData() {
      const response = await axiosFetch.get(`/caller`);
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
            label: "Caller",
            list: groupList,
          }}
          mode={props.mode}
        />
      </div>
    </>
  );
}
