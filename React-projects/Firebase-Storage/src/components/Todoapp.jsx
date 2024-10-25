import React, { useState, useEffect, useRef } from 'react';
import { ref, uploadBytes, deleteObject, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

const Todoapp = () => {
    const [file, setFile] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [fileToUpdate, setFileToUpdate] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const fetchFiles = async () => {
            const listRef = ref(storage, 'uploads/');
            try {
                const fileList = await listAll(listRef);
                const fileNames = await Promise.all(
                    fileList.items.map(async (fileRef) => {
                        const url = await getDownloadURL(fileRef);
                        return { name: fileRef.name, url };
                    })
                );
                setUploadedFiles(fileNames);
            } catch (error) {
                console.error("Error fetching files: ", error);
            }
        };

        fetchFiles();
    }, []);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        const fileRef = ref(storage, `uploads/${file.name}`);
        try {
            await uploadBytes(fileRef, file);
            const url = await getDownloadURL(fileRef);
            setUploadedFiles([...uploadedFiles, { name: file.name, url }]);
            setFile(null);
            alert('File uploaded successfully!');
        } catch (error) {
            console.error("Error uploading file: ", error);
        }
    };

    const handleDelete = async (fileName) => {
        const fileRef = ref(storage, `uploads/${fileName}`);
        try {
            await deleteObject(fileRef);
            setUploadedFiles(uploadedFiles.filter(file => file.name !== fileName));
            alert('File deleted successfully!');
        } catch (error) {
            console.error("Error deleting file: ", error);
        }
    };

    const handleUpdateFile = async () => {
        if (!file || !fileToUpdate) return;

        const fileRef = ref(storage, `uploads/${fileToUpdate}`);
        try {
            await deleteObject(fileRef);
            const newFileRef = ref(storage, `uploads/${file.name}`);
            await uploadBytes(newFileRef, file);
            const url = await getDownloadURL(newFileRef);
            setUploadedFiles(
                uploadedFiles.map(fileItem =>
                    fileItem.name === fileToUpdate ? { name: file.name, url } : fileItem
                )
            );
            setFile(null);
            setFileToUpdate(null);
            alert('File updated successfully!');
        } catch (error) {
            console.error("Error updating file: ", error);
        }
    };

    const handleUpdateClick = (fileName) => {
        setFileToUpdate(fileName);
        if (fileInputRef.current) {
            fileInputRef.current.focus();
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="mb-3">
                        <input
                            type="file"
                            className="form-control"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    </div>
                    <button
                        className={`btn ${fileToUpdate ? 'btn-warning' : 'btn-primary'} mb-3`}
                        onClick={fileToUpdate ? handleUpdateFile : handleUpload}
                    >
                        {fileToUpdate ? 'Update File' : 'Upload'}
                    </button>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <ul className="list-group">
                        {uploadedFiles.map((fileItem, index) => (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                <a href={fileItem.url} target="_blank" rel="noopener noreferrer">
                                    {fileItem.name}
                                </a>
                                <div className='d-flex'>
                                    <button
                                        className="btn btn-danger btn-sm mx-2"
                                        onClick={() => handleDelete(fileItem.name)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        onClick={() => handleUpdateClick(fileItem.name)}
                                    >
                                        Update
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todoapp;
