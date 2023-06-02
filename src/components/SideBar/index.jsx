import { useState } from "react";
import { IconFont } from "../CustomIcon";
import style from "./style.module.scss";
import Workspace from "./WorkSpace";
import Dialog from "../Dialog";
function SideBar() {
  const [showAddWorkSpaceDialog, setShowAddWorkSpaceDialog] = useState(false);
  return (
    <>
      <div className={style.sidebar}>
        <nav className={style.home_left_sidebar_contianer}>
          <div className={style.sidebar_top}>
            <ul>
              <li>
                <a className={style.disfl} href="#11">
                  <span className={style.icon_w32}>
                    <IconFont type="icon-board" />
                  </span>
                  <span className={style.w200}>看板</span>
                </a>
              </li>
              <li>
                <a className={style.disfl} href="#11">
                  <span className={style.icon_w32}>
                    <IconFont type="icon-model" />
                  </span>
                  <span className={style.w200}>模板</span>
                </a>
              </li>
              <li>
                <a className={style.disfl} href="#11">
                  <span className={style.icon_w32}>
                    <IconFont type="icon-main" />
                  </span>
                  <span className={style.w200}>主页</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={style.sidebar_down}>
            <div className={style.add_work_space}>
              <span>工作区</span>
              <button>
                <IconFont
                  type="icon-add"
                  onClick={() => {
                    setShowAddWorkSpaceDialog(true);
                  }}
                />
              </button>
            </div>
            {/* 工作区 */}
            <Workspace />
            {/* 添加工作区弹窗 */}
          </div>
        </nav>
        {showAddWorkSpaceDialog ? (
          <Dialog>
            <div className={style.slot_content}>
              <h2>开始构建工作区吧</h2>
              <div className={style.fl_col}>
                <label for="work_space_name">工作区名称</label>
                <input
                  id="work_space_name"
                  type="text"
                  placeholder="为工作区起一个名字吧！"
                />
              </div>
              <div className={style.fl_col}>
                <label htmlFor="">工作区描述</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <button
                onClick={() => {
                  setShowAddWorkSpaceDialog(false);
                }}
              >
                继续
              </button>
              <div
                className={style.close_add_work_space_dialog}
                onClick={() => {
                  setShowAddWorkSpaceDialog(false);
                }}
              >
                X
              </div>
            </div>
          </Dialog>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SideBar;
