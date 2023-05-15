import style from './style.module.scss'
import CustomHeader from '../../components/Header'
import SideBar from '../../components/SideBar'
import { Routes, Route } from 'react-router-dom'
import Demo from '../../components/Demo'
import ToDoBoard from '../../ToDoBoard'
import Home from '../Home'
function Index() {
  return (
    <>
      <CustomHeader />
      <div className={style.container}>
        <main className={style.main_container}>
          <SideBar />
          <Routes>
            <Route path="/demo" element={<Demo />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/board" element={<ToDoBoard />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default Index
