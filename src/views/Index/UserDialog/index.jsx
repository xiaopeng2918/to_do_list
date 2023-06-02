import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
function UserDialog() {
  const navigate = useNavigate()
  return (
    <>
      <div className={style.user_info_wrapper}>
        <span className={style.pal_15}>账号</span>
        <div className={style.user_avatar_email}>
          <span className={style.avatar}></span>
          <div className={style.name_email}>
            <span>yxp2918</span>
            <span>2918369878@qq.com</span>
          </div>
        </div>
        <div>管理账号</div>
        <div onClick={() => {navigate('/login')}}>退出登录</div>
      </div>
    </>
  );
}

export default UserDialog;
