

const element = ( 
    <div>
        <h1 className="header">This is JSX </h1>
        <h1 className="header">This is JSX </h1>
        <h1 className="header">This is JSX </h1>
    </div>
)
console.log(element)

const navbar = (
    <nav>
        <h1>MrReiaz Pizza</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar,
    document.getElementById("root")
)
