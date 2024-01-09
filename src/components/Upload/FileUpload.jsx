import { useState } from "react";

function FileUpload() {
    const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="fileupload">
            <h2 id="add-image">{file ? 'Change Image:' : 'Add Image:'}</h2>
            <section className="image-container">
                <label class="file">
                    <input type="file" id="file" aria-label="File browser example" onChange={handleChange} />
                    <span class="file-custom"></span>
                </label>
                <img src={file} id='image' className={file ? 'border' : ''} />
                {/* <div class="text-block">
                    <h4>New Hire</h4>
                    <p>Congratulations on New Position</p>
                </div> */}
            </section>
        </div>
    );
}

export default FileUpload;