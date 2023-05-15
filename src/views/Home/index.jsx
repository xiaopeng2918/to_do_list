import style from './style.module.scss'
import { IconFont } from '../../components/CustomIcon'
import CustomHeader from '../../components/Header'
function Home() {
  return (
    <>
      <CustomHeader />
      <main className={style.home_container}>
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
              <div className={style.work_space}>
                <span>工作区</span>
                <button>
                  <IconFont type="icon-add" />
                </button>
              </div>
              <a href="#11" className={style.mt10}>
                <span>Workspace</span>
                <span>
                  <IconFont type="icon-arrowup" />
                </span>
              </a>
              <ul className={style.mt20}>
                <li>
                  <span className={style.mr10}>
                    <IconFont type="icon-board" />
                  </span>
                  <span>看板</span>
                </li>
                <li>
                  <span className={style.mr10}>
                    <IconFont type="icon-love" />
                  </span>
                  <span>要点</span>
                </li>
                <li>
                  <span className={style.mr10}>
                    <IconFont type="icon-shitujuzhen_o" />
                  </span>
                  <span>视图</span>
                </li>
                <li className={style.posi_re}>
                  <span className={style.mr10}>
                    <IconFont type="icon-ic_member" />
                  </span>
                  <span>成员列表</span>
                  <span className={style.posi_ab}>
                    <IconFont type="icon-add" />
                  </span>
                </li>
                <li>
                  <span className={style.mr10}>
                    <IconFont type="icon-setting" />
                  </span>
                  <span>设置</span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
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
      </main>
    </>
  )
}

export default Home
