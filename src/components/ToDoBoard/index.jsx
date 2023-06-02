import React, { useEffect, useState } from "react";
import Board from "react-trello";
import { getTaskListByBoardId } from "../../api/board";
import style from "./style.module.scss";
const ToDoBoard = () => {
  // board数据
  const [listData, setListData] = useState({
    lanes: [],
  });

  const loadData = async (workspaceId, boardId) => {
    const { data } = await getTaskListByBoardId(workspaceId, boardId);
    console.log(data);
    const taskList = data.taskListList;
    console.log(taskList);
    const lanes = taskList.map((item) => {
      return {
        id: item.id,
        title: item.name,
        label: item.description,
        cards: [
          {
            id: "Card1",
            title: "Write Blog",
            description: "Can AI make memes",
            label: "30 mins",
            draggable: false,
          },
          {
            id: "Card2",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
          {
            id: "Card3",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
          {
            id: "Card4",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
          {
            id: "Card5",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
          {
            id: "Card6",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
          {
            id: "Card7",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
          {
            id: "Card8",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
          {
            id: "Card9",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
          {
            id: "Card10",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
          {
            id: "Card11",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
          {
            id: "Card12",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
          {
            id: "Card13",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
        ],
        style: {
          height: "calc(100vh - 80px)",
        },
      };
    });
    setListData({ lanes });
  };
  useEffect(() => {
    loadData(1, 1);
  }, []);
  return (
    <>
      {/* <div className={style.board_container}> */}
      {
        <Board
          data={listData}
          editable
          style={{
            fontFamily: "Verdana",
            color: "red",
            height: "calc(100vh - 48px)",
            minWidth: "1800px"
            // overflow: "hidden"
          }}
        />
      }
      {/* </div> */}
    </>
  );
};

export default ToDoBoard;
