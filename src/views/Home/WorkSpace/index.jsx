import style from "./style.module.scss";
import WorkSpaceItem from "./WorkSpaceItem";
import { useState, useEffect } from "react";
import { getWorkSpaceByUserId } from "../../../api/home";
function WorkSpace() {
  // 获取数据
  const [workSpaceData, setWorkSpaceData] = useState([]);
  const loadWorkSpaceDataByUserId = async (id) => {
    const result = await getWorkSpaceByUserId(id);
    const { data } = result;
    setWorkSpaceData(data);
    console.log(workSpaceData);
    return result;
  };
  useEffect(() => {
    loadWorkSpaceDataByUserId(1);
  }, []);
  return (
    <>
      {workSpaceData.map((item) => {
        return (
          <>
            <WorkSpaceItem data = {item} />
          </>
        );
      })}
    </>
  );
}
export default WorkSpace;
