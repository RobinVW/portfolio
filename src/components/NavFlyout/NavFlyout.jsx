import { useStore } from "@nanostores/react";
import { isNavOpen } from "../../utils/store";
import Drawer from 'react-modern-drawer';
import { AiOutlineClose,AiOutlineHome,AiOutlineUser,AiOutlineSetting,AiOutlinePhone,AiOutlineFilePpt } from 'react-icons/ai';
import './NavFlyout.scss';

//styles
import 'react-modern-drawer/dist/index.css';

const toggleDrawer = () => {
    isNavOpen.set(!isNavOpen);
}

export default function NavFlyout() {
    const $isNavOpen = useStore(isNavOpen);
    return (
    <Drawer
                open={$isNavOpen}
                onClose={toggleDrawer}
                direction='left'
                size='20vw'
                className="drawer"
                overlayColor='rgba(33, 33, 33, 0.40)'
                overlayOpacity='1'
    >
        <div className="close-btn">
            <AiOutlineClose onClick={toggleDrawer}/>
        </div>

        <div className="drawer-nav-container">
            <a href='#' onClick={toggleDrawer}>
                <div className="drawer-nav-item">
                    <AiOutlineHome className="drawer-nav-icon"/>
                    <span>Home</span>
                </div>
            </a>
            <a href='#about' onClick={toggleDrawer}>
                <div className="drawer-nav-item">
                    <AiOutlineUser className="drawer-nav-icon"/>
                    <span>About</span>
                </div>
            </a>
            <a href='#projects' onClick={toggleDrawer}>
                <div className="drawer-nav-item">
                    <AiOutlineFilePpt className="drawer-nav-icon"/>
                    <span>Projects</span>
                </div>
            </a>
            <a href='#skills' onClick={toggleDrawer}>
                <div className="drawer-nav-item">
                    <AiOutlineSetting className="drawer-nav-icon"/>
                    <span>Skills</span>
                </div>
            </a>
            <a href='#contact' onClick={toggleDrawer}>
                <div className="drawer-nav-item">
                    <AiOutlinePhone className="drawer-nav-icon"/>
                    <span>Contact</span>
                </div>
            </a>
        </div>
        
    </Drawer>
    )
}