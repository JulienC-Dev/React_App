import '../styles/Header.css' 
import SearchAddress from './SearchAddress'
import LogoApp from './LogoApp'
import Profile from './Profile'

function Header(){
    // const citation_header = [
    //     {
    //         name: 'plantfdfddf',
    //         category: 'classique',
    //         id: '1ed',
    //         isBestSale: true,
    //         stars: ["**","*"]
    //     },
    //     {
    //         name: 'vipére',
    //         category: 'classique',
    //         id: '2',
    //         isBestSale: true,
    //         stars: ["**","*"]
    //     },
    //     {
    //         name: 'lapillerra',
    //         category: 'classique',
    //         id: '3',
    //         isBestSale: true,
    //         stars: ["**","*"]
    //     },
    //             ]
    return (
        <header className="header-main">
            <LogoApp/>
            <SearchAddress/>
            <Profile/>
        </header>
    )
}
export default Header;