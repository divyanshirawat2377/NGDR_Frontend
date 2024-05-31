import DMSNAV from "./Components/DMSNAV";
import Footer from "./Components/Footer";
import { useState } from "react";
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function DMS() {
    const [product, setProduct] = useState({ productCategory: '' });
    const [] = useState({ periodCategory: '' });
    const [setDocument] = useState({ documentCategory: '' });
    const [selectedCategory, setSelectedCategory] = useState('All documents');
    const [searchQuery, setSearchQuery] = useState('');
    const [documents] = useState([
        { id: 1, name: 'Document 1', category: 'Receipts', owner: 'John Doe', date: '2024-05-01' },
        { id: 2, name: 'Document 2', category: 'Contracts', owner: 'Jane Doe', date: '2024-05-02' },
        { id: 3, name: 'Document 3', category: 'Others', owner: 'Alice Smith', date: '2024-05-03' },
        { id: 4, name: 'Document 4', category: 'Receipts', owner: 'Bob Johnson', date: '2024-05-04' },
        { id: 5, name: 'Document 5', category: 'Contracts', owner: 'Charlie Brown', date: '2024-05-05' },
    ]);

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [files, setFiles] = useState([]);
    const [downloadHistory, setDownloadHistory] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        setSelectedFiles(acceptedFiles);
    }, []);

    const handleFileUpload = () => {
        const newFiles = selectedFiles.map((file) => ({
            name: file.name,
            size: (file.size / (1024 * 1024)).toFixed(2), // Size in MB
            date: new Date().toLocaleDateString(),
            type: file.type,
        }));
        setFiles([...files, ...newFiles]);
        setDownloadHistory([...downloadHistory, ...newFiles]); // Update download history
        setSelectedFiles([]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        // Implement the search functionality
    };

    return (
        <div>
            <DMSNAV />
            <div className="flex flex-col pb-12 rounded-2xl ">
                <div className="flex flex-col px-8 mt-11 w-full font-medium leading-[140%] max-md:px-5 max-md:mt-10 max-md:max-w-full">

                    {/* First-LINE */}
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

                    {/* SECOND-LINE */}
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

                            {/* Other dropdowns... */}
                        </div>
                        <button
                            className="justify-center px-16 py-4 text-xl text-white whitespace-nowrap rounded-xl bg-violet-950 max-md:pr-7 max-md:pl-6"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>

                    {/* THIRD-LINE */}
                    <div className="max-w-2xl mx-auto p-4 ">
                        <h2 className="text-2xl font-bold mb-4">File Upload</h2>
                        <div
                            {...getRootProps()}
                            className={`border-2 border-dashed rounded-lg p-6 text-center ${isDragActive ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-gray-50'
                                }`}
                        >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p className="text-blue-500">Drop the files here ...</p>
                            ) : (
                                <p className="text-gray-500">Drag and drop some files here, or click to select files</p>
                            )}
                        </div>
                        <button onClick={handleFileUpload}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
                            Upload
                        </button>
                    </div>

                    {/* Fifth-Line */}
                    <div className="w-[100%] ml-[0%]">
                        <table className=" bg-white border border-gray-200 mt-4">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-b">File Name</th>
                                    <th className="px-4 py-2 border-b text-left">Upload Date</th>
                                    <th className="px-4 py-2 border-b ">File Size (MB)</th>
                                    <th className="px-4 py-2 border-b text-left">File Type</th>
                                    <th className="px-4 py-2 border-b ">Owner</th>
                                </tr>
                            </thead>
                            <tbody>
                                {files.map((file, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2 border-b ">{file.name}</td>
                                        <td className="px-4 py-2 border-b ">{file.date}</td>
                                        <td className="px-4 py-2 border-b text-center ">{file.size}</td>
                                        <td className="px-4 py-2 border-b text-left ">{file.type}</td>
                                        <td className="px-4 py-2 border-b ">{file.owner}</td> 
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="mt-[-12%]">
                <Footer />
            </div>
        </div>
    );
}

export default DMS;
