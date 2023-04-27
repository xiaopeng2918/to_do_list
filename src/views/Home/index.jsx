import style from './style.module.scss'
import { IconFont } from '../../components/CustomIcon'
function Home() {
  return (
    <>
      <header className={style.header}>
        <nav className={style.navbar}>
          <button>logo</button>
          <a href="#111">网站名称</a>
          <div className={style.left}>
            <a href="#11">
              工作区 <IconFont type="icon-arrow-down" />
            </a>
            <a href="#11">
              最近 <IconFont type="icon-arrow-down" />
            </a>
            <a href="#11">
              加星 <IconFont type="icon-arrow-down" />
            </a>
            <a href="#11">
              模板 <IconFont type="icon-arrow-down" />
            </a>
            <button>创建</button>
          </div>
          <div className={style.right}>
            <div className={style.search}>
              <IconFont className={`${style.search_icon}`} type="icon-search" />
              <input type="text" placeholder="搜索" />
            </div>
            <div className={style.ja_center}>
              <a href="#11" className={style.notice}>
                <IconFont type="icon-notice" />
              </a>
            </div>
            <div className={style.ja_center}>
              <a href="#11" className={style.help}>
                <IconFont type="icon-help" />
              </a>
            </div>
            <div className={style.ja_center}>
              <a href="#11" className={style.theme}>
                <IconFont type="icon-DarkTheme" />
              </a>
            </div>
            <div className={style.ja_center}>
              <a href="#11" className={style.user}>
                <IconFont type="icon-user-circle" />
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <h1>欢迎来到我们的网站！</h1>
        <p>这是一个自适应的Home页面。</p>
      </main>
      <footer>
        <p>版权所有 &copy; 2023</p>
      </footer>
    </>
  )
}

export default Home
