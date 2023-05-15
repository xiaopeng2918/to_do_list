import style from './style.module.scss'
import { IconFont } from '../../components/CustomIcon'
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
        <div className={style.your_workspace}>
          <div className={style.fl_start_fz16}>你的工作区</div>
          <div className={style.fl_space_between}>
            <div className={style.m_left_15}>Trello Workspace</div>
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
        <div style={style.total_boards}>
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
            <li className={style.board_item + ' ' + style.bimg_none}>
              <a href="#11" className={style.p8}>
                <span>创建新看板</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
