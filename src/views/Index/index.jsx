import style from "./style.module.scss";
import CustomHeader from "../../components/Header";
import SideBar from "../../components/SideBar";
import { Routes, Route } from "react-router-dom";
import Demo from "../../components/Demo";
import ToDoBoard from "../../components/ToDoBoard";
import Home from "../Home";
import UserDialog from "./UserDialog";
import WorkSpaceDialog from "./WorkSpaceDialog";
import { useState } from "react";

function Index() {
  // 控制显示用户信息弹窗
  const [showUserInfoDialog, setShowUserInfoDialog] = useState(false);
  const updateShowUserInfoDialogState = (newState) => {
    setShowUserInfoDialog(newState);
  };
  // 控制显示工作区弹窗
  const [showWorkSpaceDialog, setShowWorkSpaceDialog] = useState(false);
  const updateShowWorkSpaceDialogState = (newState) => {
    setShowWorkSpaceDialog(newState);
  };
  return (
    <>
      <CustomHeader
        updateShowUserInfoDialogState={updateShowUserInfoDialogState}
        currentShowUserInfoDialog={showUserInfoDialog}
        updateShowWorkSpaceDialogState={updateShowWorkSpaceDialogState}
        currentWorkSpaceDialog={showWorkSpaceDialog}
      />
      <div className={style.container}>
        <main className={style.main_container}>
          <SideBar />
          <div className={style.flex1}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/demo" element={<Demo />} />
              <Route exact path="/board" element={<ToDoBoard />} />
            </Routes>
          </div>
        </main>
        {/* userDialog */}
        <div className={style.userinfo_dialog_container}>
          {showUserInfoDialog ? <UserDialog /> : ""}
        </div>
        {/* WorkSpaceDialog */}
        <div className={style.work_space_dialog_container}>
          {showWorkSpaceDialog ? <WorkSpaceDialog /> : ""}
        </div>
      </div>
    </>
  );
}

export default Index;
