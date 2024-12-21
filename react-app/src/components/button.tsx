interface ButtonProps {
    text?: string;
    style?: React.CSSProperties;
}
export function Button({text = 'default', style=null}: ButtonProps) {
    return (
        <button>
            <p style={style}>{text}</p>
        </button>);
}