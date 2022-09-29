import React from "react";
import { useEffect, useState } from "react";
import axiosClient from "../customerRelated/axios";
import CustomMultiSelect from "./CustomMultiSelect";
import CustomMultiSelectCheck from "./CustomMultiSelectCheck";

export default function GroupMultiSelect(props) {
  const [groupList, setGroupList] = useState([]);
  let group = [];
  useEffect(() => {
    async function getData() {
      const response = await axiosClient.get(`/group`);
      if (response.status === 200) {
        response.data.map((data, index) => {
          group[index] = { name: data.groupDisplayName, value: data.groupId };
        });
        setGroupList(group);
      }
    }
    getData();
  }, []);
  return (
    <div>
      <CustomMultiSelectCheck
        data={{
          name: props.name,
          label: "Select Group",
          list: groupList,
        }}
        mode={props.mode}
      />
    </div>
  );
}
