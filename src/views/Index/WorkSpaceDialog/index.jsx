import style from './style.module.scss'
function WorkSpaceDialog(props){
  return (
    <>
    <div className={style.work_space_wrapper}>
      <span>你的工作区</span>
      <div>工作区一</div>
      <div>工作区二</div>
    </div>
    </>
  )
}
export default WorkSpaceDialog