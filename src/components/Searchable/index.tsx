// Context
import { useHooksContextReducer} from "../../context/reducer/hooks";

// Icons
import { BsSearch } from "react-icons/bs"
import { FcFolder } from "react-icons/fc"
import iconFlamingo from "../../assets/icons/flamingo.png"

// Images
import backgrounHackathon from "../../assets/background/hackathon.png"
import backgrouTwitch from "../../assets/background/twitch.png"

// Types
import { ILastedState, ISearchableProps } from "./types";

// Styles
import { Container, SearchableBox, SearchableCard, SearchableCardFooter, SearchableContent, SearchableFooter, SearchableHeader, SearchableItem, SearchableList, SearchableTagContainer  } from "./styles";
import { IconBar, IconContent } from "../IconBar";
import { useState } from "react"
import { actionReducerSearch } from "../../context/reducer/actions";

export function Searchable(_props: ISearchableProps) {
    const [lasted, setLasted] = useState<Array<ILastedState>>([])
    const {state, dispatch} = useHooksContextReducer()

    
    function handleOpenSearchBox(){
        try {
            dispatch(actionReducerSearch(!state.search))
        } catch (error) {
            console.log('Searchable@Component ~ error', error)
        }
    }
    
    function handleOpenApplication(name: string = "", path:string = ""){
        try {
            if(path.trim() === '' || name.trim() ==='') return
            
            setLasted(lasteds => {
                return [{ name, path }, ...lasteds.filter(lasted => lasted.name !== name)]
            })

            window.open(path)
        } catch (error) {
            console.log('Searchable@Component ~ error', error)
        }
    }

    return <>
        <SearchableBox opened={state.search}>
            <SearchableContent>
                <SearchableHeader>
                    <span>Recentes</span>
                </SearchableHeader>

                <SearchableList>
                    {
                        lasted.length <= 0 ? 'Você ainda não visualizou nenhum app..' : ''
                    }
                    {
                        lasted.map((lasted) => <IconBar>
                            <IconContent onClick={() => handleOpenApplication(lasted.name, lasted.path)}>
                                <SearchableItem>
                                    <FcFolder />
                                    <span>{lasted.name}</span>
                                </SearchableItem>
                            </IconContent>
                        </IconBar>)
                    }                                       
                </SearchableList>

            </SearchableContent>
            <SearchableContent>
                <SearchableHeader>
                    <span className="searchable-header-title">Olá! recruiter 👋</span>
                </SearchableHeader>
                
                <SearchableList className="list-to-cards">
                    <SearchableCard onClick={() => handleOpenApplication('Flumer', 'https://flumer.netlify.app/')}>
                        <SearchableCardFooter>
                            <span className="searchable-card-title">Flumer</span>
                            <SearchableTagContainer>
                                <span className="taggable">React.JS</span>
                                <span className="taggable">Styled Components</span>
                                <span className="taggable">Music</span>
                                <span className="taggable">Concept</span>
                            </SearchableTagContainer>
                        </SearchableCardFooter>
                    </SearchableCard>

                    <SearchableCard onClick={() => handleOpenApplication('Todo', 'https://tuudo.netlify.app/')}>
                        <img src="https://tuudo.netlify.app/assets/main-logo-ba2446f9.svg" alt="" />
                        <SearchableCardFooter className="has-background">
                            <span>Todo, um app bem legal para suas tarefas</span>
                        </SearchableCardFooter>
                    </SearchableCard>

                    <SearchableCard onClick={() => handleOpenApplication('Ignite Feed', 'https://whatsfeed.netlify.app/')}>
                        <img src="https://whatsfeed.netlify.app/assets/ignite-a7b6d80d.svg" alt="" />
                        <SearchableCardFooter className="has-background">                            
                            <span>Ignite Feed, um app de conclusão de modulo #ignite</span>
                        </SearchableCardFooter>
                    </SearchableCard>

                    <SearchableCard onClick={() => handleOpenApplication('Hackatons', 'https://github.com/PedroGuilhermeFariaDuarte')}>
                        <img src={backgrounHackathon} alt="" />
                        <SearchableCardFooter className="has-background">
                            <span>Já participei de alguns Hackatons</span>
                        </SearchableCardFooter>
                    </SearchableCard>

                    <SearchableCard onClick={() => handleOpenApplication('Hackatons', 'https://github.com/PedroGuilhermeFariaDuarte/ONEDEV')}>
                        <img src={backgrouTwitch} alt="" />
                        <SearchableCardFooter className="has-background">
                            <span>Veja meu projeto para Twitch, tem muito app legal lá, tem um até com Chat e Notificação, tudo rodando em tempo real</span>
                            <span>Em breve vou fazer o deploy... Eu prometo </span>
                        </SearchableCardFooter>
                    </SearchableCard>
                    
                    <SearchableFooter>
                        Legal, que você se interresou pela aplicação...

                        <p>
                            Essa aplicação faz parte do meu portfolio para demonstração das minhas habilidades e capacidades,
                            estou disponível para novas oportunidades entre contato comigo, vou adorar te conhecer e saber mais sobre a proposta.                            
                        </p>

                        <span className="cursor-pointer" onClick={() => handleOpenApplication('Aee!! Obrigadoo', 'https://www.linkedin.com/in/pedrogfd/')}>Fico no aguardo 🎉</span>
                    </SearchableFooter>
                </SearchableList>

            </SearchableContent>
        </SearchableBox>

        <Container>
            <BsSearch></BsSearch>
            <input type="text" placeholder="Pesquisar" onClick={handleOpenSearchBox}/>
            <img src={iconFlamingo} alt=""/>
        </Container>
    </>
}