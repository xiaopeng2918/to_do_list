import style from "./style.module.scss";
import { IconFont } from "../../../../components/CustomIcon";
import { useNavigate } from "react-router-dom";
function WorkSpaceItem(props) {
  const {name, boardlist} = props.data
  const navigate = useNavigate()
  return (
    <>
      <div className={style.your_workspace}>
        <div className={style.fl_space_between}>
          <div className={style.m_left_15}>{name}</div>
          <div>
            <ul className={style.fl_start_list}>
              <li>
                <span>
                  <IconFont type="icon-board" />
                </span>
                看板
              </li>
              <li>
                <span>
                  <IconFont type="icon-shitujuzhen_o" />
                </span>
                视图
              </li>
              <li>
                <span>
                  <IconFont type="icon-ic_member" />
                </span>
                成员
              </li>
              <li>
                <span>
                  <IconFont type="icon-setting" />
                </span>
                设置
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <ul className={style.recent_board_list}>
          {boardlist.map((item) => {
            return (
              <>
                <li className={style.board_item} onClick={() => {
                  navigate('/board')
                }}>
                  <a href="#11" className={style.p8}>
                    <span>{item.name}</span>
                  </a>
                </li>
              </>
            );
          })}
          <li className={style.board_item + " " + style.bimg_none}>
            <a href="#11" className={style.p8}>
              <span>创建新看板</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default WorkSpaceItem;
