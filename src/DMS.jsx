import DMSNAV from "./Components/DMSNAV";
import Footer from "./Components/Footer";
import { useState } from "react";

import pdf from './assets/pdf.png';
import word from './assets/word.png';
import img from './assets/img.png';
import folder from './assets/folder.png';

function DMS() {
    const [product, setProduct] = useState({ productCategory: '' });
    const [period, setPeriod] = useState({ periodCategory: '' });
    const [document, setDocument] = useState({ documentCategory: '' });

    const [dragging, setDragging] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('All documents');
    const [searchQuery, setSearchQuery] = useState('');
    const [documents, setDocuments] = useState([
        { id: 1, name: 'Document 1', category: 'Receipts', owner: 'John Doe', date: '2024-05-01' },
        { id: 2, name: 'Document 2', category: 'Contracts', owner: 'Jane Doe', date: '2024-05-02' },
        { id: 3, name: 'Document 3', category: 'Others', owner: 'Alice Smith', date: '2024-05-03' },
        { id: 4, name: 'Document 4', category: 'Receipts', owner: 'Bob Johnson', date: '2024-05-04' },
        { id: 5, name: 'Document 5', category: 'Contracts', owner: 'Charlie Brown', date: '2024-05-05' },
    ]);

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const files = e.dataTransfer.files;
        handleFiles(files);
    };

    const handleFileInputChange = (e) => {
        const files = e.target.files;
        handleFiles(files);
    };

    const handleFiles = (files) => {
        const fileList = Array.from(files);
        setSelectedFiles(fileList);
        addFilesToDocuments(fileList);
        simulateUpload(fileList);
    };

    const simulateUpload = (files) => {
        const progress = {};
        files.forEach(file => {
            progress[file.name] = 0;
            const interval = setInterval(() => {
                setUploadProgress(prevProgress => {
                    const newProgress = { ...prevProgress };
                    if (newProgress[file.name] < 100) {
                        newProgress[file.name] += 10;
                    } else {
                        clearInterval(interval);
                    }
                    return newProgress;
                });
            }, 200);
        });
        setUploadProgress(progress);
    };

    const getFileIcon = (fileName) => {
        const ext = fileName.split('.').pop().toLowerCase();
        switch (ext) {
            case 'pdf':
                return pdf;
            case 'doc':
            case 'docx':
                return word;
            case 'jpg':
            case 'jpeg':
            case 'png':
                return img;
            default:
                return folder;
        }
    };

    const handleUploadButtonClick = () => {
        document.getElementById('fileInput').click(); // Trigger file input click
    };

    const addFilesToDocuments = (files) => {
        const newDocuments = files.map((file, index) => ({
            id: documents.length + index + 1,
            name: file.name,
            category: 'Uploaded', // You can change this to any relevant category
            owner: 'You', // Replace with actual owner if needed
            date: new Date().toISOString().split('T')[0], // Current date
        }));
        setDocuments(prevDocuments => [...prevDocuments, ...newDocuments]);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        // Implement the search functionality
    };

    const filteredDocuments = documents.filter(doc => {
        return (
            (selectedCategory === 'All documents' || doc.category === selectedCategory) &&
            doc.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <div>
            <DMSNAV />
            <div className="flex flex-col pb-12 rounded-2xl ">
                <div className="flex flex-col px-8 mt-11 w-full font-medium leading-[140%] max-md:px-5 max-md:mt-10 max-md:max-w-full">

                    {/*  First-LINE   */}
                    <div className="flex gap-5 self-start max-md:flex-wrap">
                        <div>
                            <input
                                type="text"
                                value={selectedCategory}
                                readOnly
                                placeholder="Documents"
                                className="justify-center px-9 py-3.5 rounded-3xl border-2 border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:px-5"
                            />
                        </div>
                        <div className="flex flex-auto gap-5 justify-between text-lg text-zinc-500 max-md:flex-wrap">
                            {['All documents', 'Receipts', 'Contracts', 'Others'].map(category => (
                                <div
                                    key={category}
                                    className={`flex flex-col justify-center cursor-pointer ${selectedCategory === category ? ' text-zinc-500' : ''}`}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    <div className="justify-center px-9 py-3.5 rounded-3xl border-2 border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:px-5">
                                        {category}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/*  SECOND-LINE  */}
                    <div className="flex gap-5 justify-between mt-11 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-4 text-lg text-zinc-500 max-md:flex-wrap">
                            <div className="flex gap-5 px-6 py-2 bg-white rounded-xl border-2 border-solid border-neutral-400 max-md:px-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a890c21fd73c04af2abde1dec9af26e4f745399bebbe3d4a84cd65ad7618159?"
                                    className="shrink-0 w-8 aspect-square"
                                    alt="Search icon"
                                />
                                <input
                                    type="text"
                                    className="flex-auto my-auto outline-none"
                                    placeholder="Search documents"
                                    value={searchQuery}
                                    onChange={handleSearchQueryChange}
                                />
                            </div>
                            <div className="flex gap-5 py-2 pr-2.5 pl-6 bg-white rounded-xl border-2 border-solid border-neutral-400 max-md:pl-5">
                                <div className="flex-auto my-auto">All Categories</div>
                                <div className="dropdown">
                                    <select className='form-select mt-2' value={product.productCategory} onChange={(evt) => setProduct({ ...product, productCategory: evt.target.value })}>
                                        <option value="Blank"></option>
                                        <option value="All">All</option>
                                        <option value="Books">Books</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Mobile">Mobile</option>
                                        <option value="None">None</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex gap-5 py-2 pr-2.5 pl-6 bg-white rounded-xl border-2 border-solid border-neutral-400 max-md:pl-5">
                                <div className="flex-auto my-auto">Period</div>
                                <div className="dropdown">
                                    <select className='form-select mt-2' value={period.periodCategory} onChange={(evt) => setPeriod({ ...period, periodCategory: evt.target.value })}>
                                        <option value="Blank"></option>
                                        <option value="All">All</option>
                                        <option value="Books">Books</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Mobile">Mobile</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex gap-5 py-2 pr-2.5 pl-6 bg-white rounded-xl border-2 border-solid border-neutral-400 max-md:pl-5">
                                <div className="flex-auto my-auto">Documents Type</div>
                                <div className="dropdown">
                                    <select className='form-select mt-2' value={document.documentCategory} onChange={(evt) => setDocument({ ...document, documentCategory: evt.target.value })}>
                                        <option value="Blank"></option>
                                        <option value="All">All</option>
                                        <option value="Books">Books</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Mobile">Mobile</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button
                            className="justify-center px-16 py-4 text-xl text-white whitespace-nowrap rounded-xl bg-violet-950 max-md:pr-7 max-md:pl-6"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>

                    {/*  THIRD-LINE   */}
                    <div className="flex justify-center items-center px-16 py-8 mt-11 bg-gray-200 rounded-xl border border-dashed border-zinc-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col max-w-full w-[260px]">
                            <label
                                htmlFor="fileInput"
                                className="cursor-pointer justify-center items-center px-16 py-4 text-xl text-white rounded-xl bg-violet-950 max-md:px-5"
                            >
                                Choose file
                                <input
                                    type="file"
                                    id="fileInput"
                                    className="hidden"
                                    onChange={handleFileInputChange}
                                    multiple
                                />
                            </label>
                            <div
                                className="self-center mt-6 text-lg text-neutral-600"
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                                style={{
                                    border: '1px dashed #555',
                                    padding: '20px',
                                    textAlign: 'center',
                                    backgroundColor: dragging ? 'rgba(255, 0, 0, 0.1)' : 'transparent',
                                    cursor: 'pointer',
                                }}
                                onDragEnter={() => setDragging(true)}
                                onDragLeave={() => setDragging(false)}
                            >
                                {dragging ? 'Drop here' : 'or drag file in here'}
                            </div>
                        </div>
                        <div className="mt-4">
                            {selectedFiles.length > 0 && (
                                <ul>
                                    {selectedFiles.map((file, index) => (
                                        <li key={index} className="flex items-center mb-2">
                                            <img src={getFileIcon(file.name)} alt="File icon" className="w-8 h-8 mr-2" />
                                            {file.name}
                                            {uploadProgress[file.name] !== undefined && (
                                                <div className="w-full ml-4">
                                                    <div className="bg-gray-200 h-2.5 rounded-full">
                                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${uploadProgress[file.name]}%` }}></div>
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <button
                            className="justify-center px-16 py-4 text-xl text-white whitespace-nowrap rounded-xl bg-violet-950 max-md:pr-7 max-md:pl-6"
                            onClick={handleUploadButtonClick}>
                            Upload
                        </button>

                    </div>

                    {/*  FOURTH-LINE  */}
                    <div className="flex flex-col pb-20 mt-8 text-lg text-white bg-white rounded-xl border-2 border-solid border-zinc-400 max-md:max-w-full">
                        <div className="flex justify-center items-center px-16 py-8 mb-24 rounded-xl bg-violet-950 max-md:px-5 max-md:mb-10 max-md:max-w-full">
                            <div className="flex gap-5 justify-between w-full max-w-[1070px] max-md:flex-wrap max-md:max-w-full">
                                <div>Name</div>
                                <div>Owner</div>
                                <div>File Type</div>
                                <div>Date</div>
                                <div>Action</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            {filteredDocuments.map(doc => (
                                <div key={doc.id} className="flex gap-5 justify-between w-full max-w-[1070px] mb-4 p-4 border-b border-gray-300">
                                    <div>{doc.name}</div>
                                    <div>{doc.owner}</div>
                                    <div>{doc.category}</div>
                                    <div>{doc.date}</div>
                                    <div>Action</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DMS;
