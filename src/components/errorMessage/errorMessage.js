const ErrorMessage = (props) => {
    return (
        <div className="text-danger">{props.children}</div>
    )
}

export default ErrorMessage;