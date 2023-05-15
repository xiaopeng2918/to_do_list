import { IconFont } from '../CustomIcon'
import style from './style.module.scss'
function SideBar() {
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
    </>
  )
}

export default SideBar
