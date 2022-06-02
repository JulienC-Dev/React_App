
import { ContainerSearchNav, ButtonSearchAdresse, ButtonNav,ContainerButtonsNav} from "./Style";
import ModalMain from "./ModalMain";

function SearchAddress({isOpen,setIsOpen}){

    return !isOpen?(
        <ContainerSearchNav isOpen={isOpen}>
            <ButtonSearchAdresse onClick={() => setIsOpen(true)}>GrapH / Article/ your dashboard</ButtonSearchAdresse>
        </ContainerSearchNav>
        ):(
        <ContainerSearchNav isOpen={isOpen}>
            <ContainerButtonsNav>
                <ButtonNav>Graphique</ButtonNav>
                <ButtonNav>Article</ButtonNav>
                <ButtonNav>Your Dashboard</ButtonNav>
            </ContainerButtonsNav>
            <ModalMain/>
        </ContainerSearchNav>
        
        )
}

export default SearchAddress;