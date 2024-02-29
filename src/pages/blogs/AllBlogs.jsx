import { IoMdAddCircle } from "react-icons/io";
import { Delete, Edit, FilterIcon, SearchIcon, View } from "../../../icon";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import GlobalTable from "../../../components/shared/GlobalTable";
import { Link } from "react-router-dom";
import { MdDownload } from "react-icons/md";

const AllBlogs = () => {
    const [quickSearch, setQuickSearch] = useState(false);

    const handleSearch = (e) => {
        console.log(e.target.value);
    }

    const handleDeleteRow = (e) => {
        console.log(e.target.value);
    }

    const blogsColumn = [
        {
            field: 'sl',
            fieldName: 'SL',
            width: '5%',
            render: (sl) => sl,
        },
        {
            field: '',
            fieldName: 'Name',
            width: '25%',
            isAlignmentCenter: false,
            render: (params) => (params ? <div>
                <p className="truncate  overflow-hidden text-[16px] pb-1">{params?.title}</p>
                <div className="flex flex-wrap gap-1 me-2">
                    <p> <span className="text-sm font-medium">Category: </span>{params?.category}</p>
                    <p> <span className="text-sm font-medium ps-2">Sub-Category: </span>{params?.sub_category}</p>
                    <p> <span className="text-sm font-medium"> URL: </span> <Link href={params?.url} className="text-sky-500 underline italic">{params?.url}</Link> </p>
                </div>
            </div> : "---")
        },
        {
            field: 'published_site',
            fieldName: 'Published Site',
            width: '15%',
            isAlignmentCenter: false,
            render: (params) => (params ? <p className="">{params.join(', ')}</p> : "---")
        },
        {
            field: 'timestamp',
            fieldName: 'Date and Time',
            width: '15%',
            isAlignmentCenter: false,
            render: (params) => (params ? <p className="">{params}</p> : "---")
        },
        {
            field: 'total_views',
            fieldName: 'Total Views',
            width: '10%',
            isAlignmentCenter: true,
            render: (params) => (params ? <p className="  ">{params}</p> : "---")
        },
        {
            field: '',
            fieldName: 'Action',
            width: '20%',
            isAlignmentCenter: true,
            render: (params) => (params ?
                <div className="flex gap-2 items-center">
                    <Link to={`/user/support/tickets/${params.id}/view`}>
                        <Tooltip title="View" arrow placement="left">
                            <div>
                                <View className="text-2xl" variant={'iconButton'} />
                            </div>
                        </Tooltip>
                    </Link>
                    <Link to={`/user/support/tickets/${params.id}/edit`}>
                        <Tooltip title="Edit" arrow placement="top">
                            <div>
                                <Edit className="text-2xl" variant={'iconButton'} />
                            </div>
                        </Tooltip>
                    </Link>
                    <Tooltip title="Download" arrow placement="top">
                        <div>
                            <MdDownload className="text-2xl hover:text-green transition-all cursor-pointer" />
                        </div>
                    </Tooltip>
                    <Tooltip title="Delete" arrow placement="right">
                        <div>
                            <Delete variant='iconButton' className="text-2xl" onClick={() => handleDeleteRow(params.id)} />
                        </div>
                    </Tooltip>

                </div>
                : "---"
            )
        },
    ]
    return (
        <main className="p-4">
            <section className="flex justify-between items-end ">
                <Link to={'/blog/blogs/new'} className="actionBtn w-[10%]">
                    <span>Add New</span>
                    <IoMdAddCircle className="text-xl ms-1" />
                </Link>
                {
                    !quickSearch ? <div className="flex items-end justify-center gap-8 w-[80%]">
                        <div className="w-1/3">
                            <label htmlFor="category" className="font-medium">Category</label>
                            <select defaultValue=" " name="category" id="">
                                <option disabled value=" ">Select Category</option>
                                <option value="article">Article</option>
                                <option value="article">Article</option>
                                <option value="article">Article</option>
                            </select>
                        </div>
                        <div className="w-1/3">
                            <label htmlFor="sub_category" className="font-medium">Sub Category</label>
                            <select defaultValue=" " name="Sub_category" id="">
                                <option disabled value=" ">Select Category</option>
                                <option value="article">Sub Article</option>
                                <option value="article">Sub Article</option>
                                <option value="article">Sub Article</option>
                            </select>
                        </div>
                        <div className="w-1/3">
                            <label htmlFor="category" className="font-medium">Site</label>
                            <select defaultValue=" " name="site" id="">
                                <option disabled value=" ">Select Site Name</option>
                                <option value="article">Site Article</option>
                                <option value="article">Site Article</option>
                                <option value="article">Site Article</option>
                            </select>
                        </div>

                        <div className="size-11 rounded-[8px] flex justify-center items-center bg-[#F1F5FF] border border-[#8CACFF] cursor-pointer" >
                            <FilterIcon />
                        </div>
                        <Tooltip title="Search Here" arrow placement="bottom">
                            <div className="size-11 rounded-[8px] flex justify-center items-center bg-[#F1F5FF] border border-[#8CACFF] cursor-pointer" onClick={() => setQuickSearch(true)}>

                                <SearchIcon />
                            </div>
                        </Tooltip>
                    </div> :
                        <div className="flex gap-7 items-end justify-center w-[80%]">
                            <Tooltip title="Switch to Filter" arrow placement="bottom">
                                <div className="size-11 rounded-[8px] flex justify-center items-center bg-[#F1F5FF] border border-[#8CACFF] cursor-pointer" onClick={() => setQuickSearch(false)} >
                                    <FilterIcon />
                                </div>
                            </Tooltip>
                            <input type="text" name="search" id="" placeholder="Type Any Article, Site Name, Category" />

                            <div className="size-11 rounded-[8px] flex justify-center items-center bg-[#F1F5FF] border border-[#8CACFF] cursor-pointer" onClick={handleSearch} >
                                <SearchIcon />
                            </div>

                        </div>
                }
            </section>
            <section className="mt-4">
                <GlobalTable
                    title=""
                    columns={blogsColumn}
                    isPagination={true}
                    data={{ results: dummyData }}
                />
            </section>

        </main>
    );
};

export default AllBlogs;


const dummyData = [
    {
        id: 1,
        title: "What is Cryptojacking and how to reolve the data issue or habijabi ami janina",
        category: "Article",
        sub_category: "Sub Article",
        url: "www.techforing.com",
        published_site: ["Techforing", "TechForing Growth"],
        timestamp: "Dec 11, 2021,2:35pm",
        total_views: 400
    },
    {
        id: 2,
        title: "What is Cryptojacking and how to reolve the data issue or habijabi ami janina",
        category: "Article",
        sub_category: "Sub Article",
        url: "www.techforing.com",
        published_site: ["Techforing", "TechForing Growth"],
        timestamp: "Dec 11, 2021,2:35pm",
        total_views: 400
    },
    {
        id: 3,
        title: "What is Cryptojacking and how to reolve the data issue or habijabi ami janina",
        category: "Article",
        sub_category: "Sub Article",
        url: "www.techforing.com",
        published_site: ["Techforing", "TechForing Growth"],
        timestamp: "Dec 11, 2021,2:35pm",
        total_views: 400
    },
    {
        id: 4,
        title: "What is Cryptojacking and how to reolve the data issue or habijabi ami jani nafffffffffffffdssssssssssssssssssssssssssssssssssssssssssssssghsdfhsdfhsdfh",
        category: "Article",
        sub_category: "Sub Article",
        url: "www.techforing.com",
        published_site: ["Techforing", "TechForing Growth"],
        timestamp: "Dec 11, 2021,2:35pm",
        total_views: 400
    }
]