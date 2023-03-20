// Components
import { IconBar, IconContent } from "../IconBar";
import { BoxContainer, BoxContent, BoxHeader } from "../Box";

// Types
import { INotificationProps } from "./types";

// Styles
import { NotificationButton, Container } from "./styles";
import { useState } from "react";

export function Notification(_props: INotificationProps){
    const [notificationOpened, setNotificionOpened] = useState(false)

    function handleOpenNotification() {
        try {
            setNotificionOpened(opened => !opened)
        } catch (error) {
            console.log(`Notification@Component ~ error`, error)
        }
    }
    return <>
        <Container opened={notificationOpened}>
            <BoxContainer width="100%" height="100%">
                <BoxHeader></BoxHeader>   
                <BoxContent></BoxContent>
            </BoxContainer>
            <BoxContainer width="100%" height="70%">
                <BoxHeader></BoxHeader>   
                <BoxContent></BoxContent>
            </BoxContainer>
        </Container>
        <NotificationButton onClick={handleOpenNotification}>
            <IconBar titleIcon={new Date().toLocaleString()}  className="icons-task-bar-info">
                <IconContent>
                    <span id="date-hour">
                        <span id="hour">15:50</span>
                        <span id="date">28/06/2021</span>
                    </span>
                </IconContent>
            </IconBar>
        </NotificationButton>
    </>    
}