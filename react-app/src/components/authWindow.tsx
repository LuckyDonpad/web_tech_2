interface WindowProps {
    contentText?: string;
    titleBarText?: string;
}

export function AuthWindow({contentText = 'default', titleBarText = 'default',}: WindowProps) {
    return (
        <div className={"window"} style={{width: '500px'}}>
            <div className="title-bar">
                <div className="title-bar-text">{titleBarText}</div>
                <div className="title-bar-controls">
                    <button aria-label={"Minimize"}></button>
                    <button aria-label={"Maximize"}></button>
                    <button aria-label={"Close"}></button>
                </div>
            </div>
            <div className="window-body flex-center p1">
                <div>
                    <p>{contentText}</p>
                    <div className="field-row flex-center">
                        <div style={{width: '40px'}}>
                            <label htmlFor="sign_up_login">Логин</label>
                        </div>
                        <input id="sign_up_login" type="text"/>
                    </div>
                    <div className="field-row flex-center">
                        <div style={{width: '40px'}}>
                            <label htmlFor="sign_up_login">Пароль</label>
                        </div>
                        <input id="sign_up_login" type="password"/>
                    </div>
                </div>
            </div>
        </div>);
}