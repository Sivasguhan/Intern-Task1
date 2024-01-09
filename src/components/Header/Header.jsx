import logo from '../../../public/logo.jpeg'

export default function Header(){
    return(
        <header id="main-header">
            <img src={logo} alt="logo" />
            <h1>Image Annotator</h1>
        </header>
    )
}