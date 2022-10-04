import React from "react";
import { useEffect, useState } from "react";
import axiosClient from "../customerRelated/axios";
import CustomMultiSelect from "./CustomMultiSelect";
import CustomMultiSelectCheck from "./CustomMultiSelectCheck";
import { AxiosFetch } from "../AxiosFetch";

export default function GroupMultiSelect(props) {
  const axiosFetch=AxiosFetch();
  const [groupList, setGroupList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  let group = [];
 
  useEffect(() => {
    async function getData() {
      const response = await axiosFetch.get(`/group`);
      if (response.status === 200) {
        response.data.map((data, index) => {
          group[index] = { name: data.groupDisplayName, value: data.groupId };
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
