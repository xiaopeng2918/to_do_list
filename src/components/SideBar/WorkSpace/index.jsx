import { useState } from 'react'
import { IconFont } from '../../CustomIcon'
import style from './style.module.scss'
function Workspace() {
  const [showWorkspaceDetail, setShowWorkspaceDetail] = useState(true)
  return (
    <>
      <a href="#11" className={style.mt10}  onClick={() => {setShowWorkspaceDetail(!showWorkspaceDetail)}}>
              <span>Workspace</span>
              <span>
                <IconFont type={showWorkspaceDetail ? "icon-arrowup" : "icon-arrow-down"} />
              </span>
            </a>
            {showWorkspaceDetail ? <ul className={style.mt15}>
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
            </ul> : ""}
    </>
  )
}

export default Workspace
