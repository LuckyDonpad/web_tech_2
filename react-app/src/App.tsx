import {Button} from './components/button.tsx'
import {AuthWindow} from "./components/authWindow.tsx";

function App() {
    return (
        <div className="flex-center" style={{height: "100%", marginBottom: '1rem'}}>
            <div className={"container"}>
                <div className={"container p2"}>
                    <AuthWindow contentText={"Мы всегда рады новым пользователям"} titleBarText={"Регистрация"}/>
                </div>
                <div className={"container p2"}>
                    <AuthWindow contentText={"Но ещё больше мы рады видеть старых друзей"} titleBarText={"Вход"}/>
                </div>
            </div>
        </div>
    )
}

export default App
