import React from 'react'
import Header from './components/Header/Header.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import FileUpload from './components/Upload/FileUpload.jsx'

export default function App() {
    return (
        <>
            <Header />
            <div className='main'>
                <Sidebar />
                <FileUpload />
            </div>
        </>
    )
}