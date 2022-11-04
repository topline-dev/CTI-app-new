import React from "react";
import { AxiosFetch } from "../AxiosFetch";
import CustomSelect from "./CustomSelect";
import { useState, useEffect } from "react";

export default function ProjectSelect(props) {
  const axiosFetch = AxiosFetch();
  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  var project = [];

  useEffect(() => {
    async function getData() {
      const response = await axiosFetch.get(`/project`);
      if (response.status === 200) {
        response.data.map((data, index) => {
          project[index] = { name: data.name, value: data.id };
        });
        setProjectList(project);
        setIsLoading(false);
      }
    }
    getData();
  }, []);
  return isLoading ? (
    <div>Loading</div>
  ) : (
    <>
      {/* {console.log(groupList, "group select page")} */}
      <div>
        <CustomSelect
          data={{
            name: props.name,
            label: "Select Project",
            list: projectList,
          }}
          mode={props.mode}
        />
      </div>
    </>
  );
}
