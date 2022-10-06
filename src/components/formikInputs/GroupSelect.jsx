import React from 'react'
import { AxiosFetch } from '../AxiosFetch';
import CustomSelect from './CustomSelect';
import { useState,useEffect } from 'react';

export default function GroupSelect(props) {
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
        <CustomSelect
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
