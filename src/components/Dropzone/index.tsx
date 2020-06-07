import React, { useCallback, useState } from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUploadCloud } from 'react-icons/fi'

import './styles.css'

const Dropzone = () => {

  const [selectedFileURL, setSelectedFileURL] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileURL = URL.createObjectURL(file);

    setSelectedFileURL(fileURL);

  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: 'image/*'
    })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept='image/*' />
      { isDragActive
            ? <p>Solte a imagem aqui ...</p> 
            : (
                selectedFileURL
                    ? <img src={selectedFileURL} alt="Imagem do ponto de coleta"/>
                    : (
                        <p>
                            <FiUploadCloud />
                            Arraste e solte a imagem aqui, ou clique para selecionar o arquivo
                        </p>
                    )
            )
      }
    </div>
  )
}

export default Dropzone;