import style from './style.module.scss'
import ReactDOM from 'react-dom';
function Dialog(props){
  const { children } = props
  return ReactDOM.createPortal(
    <>
      <div className={style.posFix}>
        
        <div className={style.form_box}>
          { children }
        </div>
      </div>
    </>,
    document.getElementsByTagName("body")[0]
  )
}

export default Dialog