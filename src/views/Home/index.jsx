import style from "./style.module.scss";
import { IconFont } from "../../components/CustomIcon";
import WorkSpace from "./WorkSpace";
function Home() {
  return (
    <>
      <div className={style.all_boards}>
        <div>
          <div className={style.fl_start}>
            <span>
              <IconFont type="icon-time" />
            </span>
            <span>最近查看</span>
          </div>
          <div>
            <ul className={style.recent_board_list}>
              <li className={style.board_item}>
                <a href="#11" className={style.p8}>
                  <span>看板标题</span>
                </a>
              </li>
              <li className={style.board_item}>
                <a href="#11" className={style.p8}>
                  <span>看板标题</span>
                </a>
              </li>
              <li className={style.board_item}>
                <a href="#11" className={style.p8}>
                  <span>看板标题</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.fl_start_fz16}>你的工作区</div>
        <WorkSpace />
      </div>
    </>
  );
}

export default Home;
