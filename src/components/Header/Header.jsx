import '../../styles/Header.css' 
import SearchAddress from './SearchAddress'
import LogoApp from './LogoApp'
import {Wrapper} from './Style';



function Header({showResults, setShowResults}){
    return (
        <Wrapper>
            <LogoApp/>
            <SearchAddress/>
        </Wrapper>
    )
}
export default Header;

