import { useState } from "react";

function Search() {
    
    const [searchQuery, setSearchQuery] = useState('');

    
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };


    const filterContent = (content) => {
        return content.filter(item => {
            
            return item.toLowerCase().includes(searchQuery.toLowerCase());
        });
    };

    
    const content = [""];


    const filteredContent = filterContent(content);

    return (
        <div>
            <form>
                <div className="max-w-xl">
                    <div className="flex space-x-1 items-center mb-2">
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex rounded-md overflow-hidden w-80 border-2 border-black">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="w-full rounded-md rounded-r-none h-10"
                                placeholder="Search..."
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a890c21fd73c04af2abde1dec9af26e4f745399bebbe3d4a84cd65ad7618159?"
                                className="shrink-0 w-8 aspect-square cursor-pointer"
                                alt="Search icon"
                            />
                        </div>
                    </div>
                </div>
            </form>

            {/* Display filtered content */}
            <div>
                {filteredContent.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>
    );
}

export default Search;
