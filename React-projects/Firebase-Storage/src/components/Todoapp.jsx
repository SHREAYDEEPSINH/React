import React, { useState } from 'react';
import { ref, uploadBytes, deleteObject } from 'firebase/storage';
import { storage } from '../../firebase';

const Todoapp = () => {
    const [file, setFile] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [fileToUpdate, setFileToUpdate] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        const fileRef = ref(storage, `uploads/${file.name}`);
        try {
            await uploadBytes(fileRef, file);
            setUploadedFiles([...uploadedFiles, file.name]);
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
            setUploadedFiles(uploadedFiles.filter(name => name !== fileName));
            alert('File deleted successfully!');
        } catch (error) {
            console.error("Error deleting file: ", error);
        }
    };

    const handleUpdateFile = async () => {
        if (!file || !fileToUpdate) return;

        const fileRef = ref(storage, `uploads/${fileToUpdate}`);
        try {
            await deleteObject(fileRef); // Delete the old file
            await uploadBytes(ref(storage, `uploads/${file.name}`), file); // Upload the new file
            setUploadedFiles(uploadedFiles.map(name => name === fileToUpdate ? file.name : name));
            setFile(null);
            setFileToUpdate(null);
            alert('File updated successfully!');
        } catch (error) {
            console.error("Error updating file: ", error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={fileToUpdate ? handleUpdateFile : handleUpload}>
                {fileToUpdate ? 'Update File' : 'Upload'}
            </button>

            <ul>
                {uploadedFiles.map((fileName, index) => (
                    <li key={index}>
                        {fileName}
                        <button onClick={() => handleDelete(fileName)}>Delete</button>
                        <button onClick={() => setFileToUpdate(fileName)}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todoapp;
