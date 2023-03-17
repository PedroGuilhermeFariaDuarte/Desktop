// Icons
import { BsSearch } from "react-icons/bs"
import { FcFolder } from "react-icons/fc"
import iconFlamingo from "../../assets/icons/flamingo.png"

// Images
import backgrounHackathon from "../../assets/background/hackathon.png"

// Types
import { ISearchableProps } from "./types";

// Styles
import { Container, SearchableBox, SearchableCard, SearchableCardFooter, SearchableContent, SearchableHeader, SearchableItem, SearchableList, SearchableTagContainer  } from "./styles";
import { IconBar, IconContent } from "../IconBar";

export function Searchable(_props: ISearchableProps) {
    return <>
        <SearchableBox>
            <SearchableContent>
                <SearchableHeader>
                    <span>Recentes</span>
                </SearchableHeader>

                <SearchableList>
                    <IconBar>
                        <IconContent>
                            <SearchableItem>
                                <FcFolder />
                                <span>Flumer</span>
                            </SearchableItem>
                        </IconContent>
                    </IconBar>

                    <IconBar>
                        <IconContent>
                            <SearchableItem>
                                <FcFolder />
                                <span>Todo</span>
                            </SearchableItem>
                        </IconContent>
                    </IconBar>

                    <IconBar>
                        <IconContent>
                            <SearchableItem>
                                <FcFolder />
                                <span>Ignite Feed</span>
                            </SearchableItem>
                        </IconContent>
                    </IconBar>
                </SearchableList>

            </SearchableContent>
            <SearchableContent>
                <SearchableHeader>
                    <span className="searchable-header-title">Olá! recruiter 👋</span>
                </SearchableHeader>
                
                <SearchableList className="list-to-cards">
                    <SearchableCard>
                        <SearchableCardFooter>
                            <span className="searchable-card-title">Flumer</span>
                            <SearchableTagContainer>
                                <span className="taggable">React.JS</span>
                                <span className="taggable">Styled Components</span>
                            </SearchableTagContainer>
                        </SearchableCardFooter>
                    </SearchableCard>

                    <SearchableCard>
                        <SearchableCardFooter className="has-background">
                            <span>Todo</span>
                        </SearchableCardFooter>
                    </SearchableCard>

                    <SearchableCard>
                        <SearchableCardFooter className="has-background">                            
                            <span>Ignite Feed</span>
                        </SearchableCardFooter>
                    </SearchableCard>

                    <SearchableCard>
                        <img src={backgrounHackathon} alt="" />
                        <SearchableCardFooter className="has-background">
                            <span>Hackatons</span>
                        </SearchableCardFooter>
                    </SearchableCard>
                    
                </SearchableList>
            </SearchableContent>
        </SearchableBox>

        <Container>
            <BsSearch></BsSearch>
            <input type="text" placeholder="Pesquisar"/>
            <img src={iconFlamingo} alt=""/>
        </Container>
    </>
}