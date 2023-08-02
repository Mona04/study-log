'use client'
import {useContext, useState} from "react"
import {Context} from '@/context/context'
import style from "./masthead.module.scss"

function MenuButton() {
  const context = useContext(Context);
  const [bOpen, setOpen] = useState(context !== undefined ? context?.statemgr.bMenuOpened : false);
  
  const onClickMenu = (event:  React.MouseEvent<HTMLElement>) => {      
    const target = event.currentTarget;
    target.classList.add(style.animate);

    // 애니메이션이 끝나고 상태를 바꿈. 상태를 바꾸면 자동으로 다시 그리게 됨.
    setTimeout(()=>{
      !bOpen ? context?.statemgr.openMenu() : context?.statemgr.closeMenu();
      setOpen(!bOpen);
    }, 150);  
  };

  return (
    <div className={[style['menu-btn'], bOpen ? style.change : ''].join(' ')} title="menu"
         onClick={onClickMenu}>
      <div className={style["menu-lines"]}>
        <div className={[style['line'], style['line1']].join(' ')}></div>
        <div className={[style['line'], style['line2']].join(' ')}></div>
        <div className={[style['line'], style['line3']].join(' ')}></div>
      </div>
    </div>
  )
}

export default MenuButton;