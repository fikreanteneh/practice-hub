

import { RefObject, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


type QuillWriterProp = {
    quillRef: RefObject<ReactQuill | null | string>;
}

const QuillWriter = (props: QuillWriterProp) =>  {
    const [value, setValue] = useState('');
    const { quillRef } = props;

    const handeChange = (content, delta, source, editor) => {
        setValue(content);
    }

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            // ['link', 'image'],
            ['clean']
        ],
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]
    return (
        <div className="text-editor">
            <ReactQuill theme="snow"
                value={value}
                modules={modules}
                formats={formats}
                onChange={handeChange}
                ref={quillRef}>
            </ReactQuill>
        </div>
    )
}



export default QuillWriter;