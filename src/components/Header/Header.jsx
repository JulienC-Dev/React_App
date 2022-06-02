import '../../styles/Header.css' 
import SearchNav from './SearchNav'
import LogoApp from './LogoApp'
import {Wrapper} from './Style';
import Profile from './Profile';
import { useState } from "react";


function Header(){
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Wrapper>
            <LogoApp/>
            <SearchNav isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Profile/>
        </Wrapper>
    )
}
export default Header;

