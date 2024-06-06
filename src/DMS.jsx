import DMSNAV from "./Components/DMSNAV";
import Footer from "./Components/Footer";
import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { FaDownload } from "react-icons/fa";

function DMS() {
    const [product, setProduct] = useState({ productCategory: "" });
    const [category] = useState({ periodCategory: "" });
    const [setDocument] = useState({ documentCategory: "" });
    const [selectedCategory, setSelectedCategory] = useState("All documents");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [files, setFiles] = useState([]);
    const [downloadHistory, setDownloadHistory] = useState([]);
    const [viewedFile, setViewedFile] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        setSelectedFiles(acceptedFiles);
    }, []);

    const handleFileUpload = async () => {
        const formData = new FormData();
        selectedFiles.forEach((file) => {
            formData.append("files", file);
        });

        try {
            const response = await fetch("http://localhos", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                const newFiles = result.files.map((file) => ({
                    name: file.originalname,
                    size: (file.size / (1024 * 1024)).toFixed(2),
                    date: new Date().toLocaleDateString(),
                    type: file.mimetype,
                    file: file,
                }));
                setFiles([...files, ...newFiles]);
                setDownloadHistory([...downloadHistory, ...newFiles]);
                setSelectedFiles([]);
            } else {
                console.error("File upload failed:", response.statusText);
            }
        } catch (error) {
            console.error("File upload error:", error);
        }
    };

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:3000/search?q=${searchQuery}`);
            if (response.ok) {
                const result = await response.json();
                const newFiles = result.map(file => ({
                    name: file.originalname,
                    size: (file.size / (1024 * 1024)).toFixed(2),
                    date: new Date(file.uploadDate).toLocaleDateString(),
                    type: file.mimetype,
                    file: file,
                }));
                setFiles(newFiles);
            } else {
                console.error('Search failed:', response.statusText);
            }
        } catch (error) {
            console.error('Search error:', error);
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleFileView = (file) => {
        setViewedFile(file);
    };

    const closeFileView = () => {
        setViewedFile(null);
    };

    const handleFileDownload = (file) => {
        const url = URL.createObjectURL(file.file);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await fetch('http://localhost:3000/search?q=');
                if (response.ok) {
                    const result = await response.json();
                    const initialFiles = result.map(file => ({
                        name: file.originalname,
                        size: (file.size / (1024 * 1024)).toFixed(2),
                        date: new Date(file.uploadDate).toLocaleDateString(),
                        type: file.mimetype,
                        file: file,
                    }));
                    setFiles(initialFiles);
                } else {
                    console.error('Failed to fetch files:', response.statusText);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchFiles();
    }, []);

    return (
        <div>
            <DMSNAV />
            <div className="flex flex-col pb-12 rounded-2xl ">
                <div className="flex flex-col px-8 mt-11 w-full font-medium leading-[140%] max-md:px-5 max-md:mt-10 max-md:max-w-full">

                    {/* First-LINE */}
                    <div className="flex gap-5 self-start max-md:flex-wrap">
                        <div>
                            <input type="text" value={selectedCategory} readOnly placeholder="Documents"
                                className="justify-center px-9 py-3.5 rounded-3xl border-2 border-solid bg-zinc-300 bg-opacity-0 border-neutral-400 max-md:px-5 w-[180px] h-[50px]"/>
                        </div>
                        <div className="flex flex-auto gap-5 text-lg text-zinc-500 max-md:flex-wrap h-[50px]">
                            {['All documents', 'Receipts', 'Contracts', 'Others'].map(category => (
                                <div key={category}
                                    className={`flex flex-col justify-center cursor-pointer h-[50px] ${selectedCategory === category ? ' text-zinc-500' : ''}`}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    <div className="justify-center px-9 py-3.5 rounded-3xl border-2 border-solid bg-zinc-300 bg-opacity-0 h-[50px] border-neutral-400 max-md:px-5">
                                        {category}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SECOND-LINE */}
                    <div className="flex gap-5 justify-between mt-11  max-md:flex-wrap max-md:mt-10 ">
                        <div className="flex gap-4 text-lg text-zinc-500 max-md:flex-wrap">
                            <div className="flex gap-5 px-6 py-2 bg-white rounded-xl border-2 border-solid border-neutral-400 ml-0 h-[50px]">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a890c21fd73c04af2abde1dec9af26e4f745399bebbe3d4a84cd65ad7618159?"
                                    className="shrink-0 w-[25px] h-[25px] " alt="Search icon" />
                                <input type="text" className="flex-auto my-auto outline-none " placeholder="Search documents"
                                    value={searchQuery}
                                    onChange={handleSearchQueryChange}
                                />
                            </div>

                            <div className="flex gap-5 py-2 pr-2.5 pl-6 bg-white rounded-xl border-2 border-solid border-neutral-400 max-md:pl-5 h-[50px]">
                                <select className='' value={product.productCategory} onChange={(evt) => setProduct({ ...product, productCategory: evt.target.value })}>
                                    <option value="Blank"></option>
                                    <option className='border' value="All">All</option>
                                </select>
                            </div>
                            <div className="flex gap-5 py-2 pr-2.5 pl-6 bg-white rounded-xl border-2 border-solid border-neutral-400 max-md:pl-5 w-[200px] h-[50px]">
                                <div className="mt-1 ">Period</div>
                                <select className='ml-6' value={product.productCategory} onChange={(evt) => setProduct({ ...product, productCategory: evt.target.value })}>
                                    <option value="Blank"></option>
                                    <option className='w-10' value="All">7days</option>
                                </select>
                            </div>
                        </div>
                        <button
                            className="justify-center  text-xl text-white whitespace-nowrap rounded-xl bg-violet-950 w-[100px] h-[50px]"
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

                    {/* Fourth-Line */}
                    <div className="w-[100%] ml-[0%]">
                        <table className="bg-white  border border-gray-200 mt-4 w-[100%]">
                            <thead>
                                <tr className=" bg-violet-950 text-white size-9">
                                    <th className="px-4 py-2 border-b w-[30%] mr-[-25%]">File Name</th>
                                    <th className="px-4 py-2 border-b text-left w-[10%]">Upload Date</th>
                                    <th className="px-4 py-2 border-b ">File Size (MB)</th>
                                    <th className="px-4 py-2 border-b text-left">File Type</th>
                                    <th className="px-4 py-2 border-b ">Owner</th>
                                    <th className="px-4 py-2 border-b ">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {files.map((file, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2 border-b">{file.name}</td>
                                        <td className="px-4 py-2 border-b">{file.date}</td>
                                        <td className="px-4 py-2 border-b text-center">{file.size}</td>
                                        <td className="px-4 py-2 border-b text-left">{file.type}</td>
                                        <td className="px-4 py-2 border-b">{file.owner}</td>
                                        <td className="px-4 py-2 border-b">
                                            <button
                                                className="text-blue-500 hover:underline"
                                                onClick={() => handleFileView(file)}
                                            >
                                                View
                                            </button>
                                            <button
                                                className="ml-2 text-green-500 hover:underline"
                                                onClick={() => handleFileDownload(file)}
                                            >
                                                <FaDownload />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {viewedFile && (
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white rounded-lg p-6 max-w-lg w-full">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold">{viewedFile.name}</h3>
                                    <button
                                        className="text-red-500 hover:underline"
                                        onClick={closeFileView}
                                    >
                                        Close
                                    </button>
                                </div>
                                <div className="overflow-auto" style={{ maxHeight: '400px' }}>
                                    {viewedFile.type.startsWith('image/') && (
                                        <img src={URL.createObjectURL(viewedFile.file)} alt={viewedFile.name} />
                                    )}
                                    {viewedFile.type === 'application/pdf' && (
                                        <iframe
                                            src={URL.createObjectURL(viewedFile.file)}
                                            width="100%"
                                            height="400px"
                                        ></iframe>
                                    )}
                                    {viewedFile.type.startsWith('text/') && (
                                        <pre>{URL.createObjectURL(viewedFile.file)}</pre>
                                    )}
                                    {!viewedFile.type.startsWith('image/') && !viewedFile.type.startsWith('text/') && viewedFile.type !== 'application/pdf' && (
                                        <p>File type not supported for viewing.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DMS;
