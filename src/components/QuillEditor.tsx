import { useCallback, useMemo, useRef, useState } from 'react';
import QuillEditor from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
  label: string;
}
const TextEditor = ({ value, onChange }: Props) => {
  //  const [editorValue, setEditorValue] = useState(value);
  const quill = useRef<any>(null);

  const imageHandler = useCallback(() => {
    // Create an input element of type 'file'
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    // When a file is selected
    input.onchange = () => {
      const file = input.files?.[0];
      const reader = new FileReader();

      // Read the selected file as a data URL
      reader.onload = () => {
        const imageUrl = reader.result;
        const quillEditor = quill.current?.getEditor();

        // Get the current selection range and insert the image at that index
        const range = quillEditor.getSelection(true);
        quillEditor.insertEmbed(range.index, 'image', imageUrl, 'user');
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, false] }],
          ['bold', 'italic', 'underline', 'blockquote'],
          [{ color: [] }],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link', 'image'],
          ['clean'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'clean',
  ];

  return (
    <div className=' py-10'>
      <QuillEditor
        ref={(el) => {
          quill.current = el;
        }}
        className=' py-2'
        theme='snow'
        value={value}
        formats={formats}
        modules={modules}
        onChange={(value) => onChange(value)}
      />
    </div>
  );
};

export default TextEditor;
