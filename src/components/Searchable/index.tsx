// Icons
import { BsSearch } from "react-icons/bs"
import iconFlamingo from "../../assets/icons/flamingo.png"

// Types
import { ISearchableProps } from "./types";

// Styles
import { Container  } from "./styles";

export function Searchable(_props: ISearchableProps) {
    return (
        <Container>
            <BsSearch></BsSearch>
            <input type="text" placeholder="Pesquisar"/>
            <img src={iconFlamingo} alt=""/>
        </Container>
    )
}