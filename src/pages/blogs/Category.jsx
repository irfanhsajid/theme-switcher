import { useState } from "react";
import { MdCategory } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { CgCheckR, CgEye } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { Edit } from "../../../icon";
import { IoRemove } from "react-icons/io5";
import { Tooltip } from "@mui/material";


const Category = () => {
    const [showAddNewCategory, setShowAddNewCategory] = useState(false);
    const [newSubCategories, setNewSubCategories] = useState([""]); // Initialize with one input field

    const handleAddNewCategory = () => {
        setShowAddNewCategory(true);
    }

    const handleCancel = () => {
        setShowAddNewCategory(false);
    }

    const handleAddSubCategory = () => {
        setNewSubCategories(prevSubCategories => [...prevSubCategories, ""]);
    }

    const handleRemoveSubCategory = (indexToRemove) => {
        setNewSubCategories(prevSubCategories => prevSubCategories.filter((_, index) => index !== indexToRemove));
    }

    return (
        <main className="p-4">
            <section className="flex flex-wrap justify-center gap-6">
                {data.map((item, index) => (
                    <div key={index} className="border border-slate-300 hover:border-green w-[32%] p-5 rounded-[8px]">
                        <div className="flex items-center gap-2">
                            <h3 className="font-medium text-[18px]">{item.category}</h3>
                            <Edit className="text-xl" variant={'iconButton'} />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="w-[70%] flex flex-col gap-5">
                                <select className="bg-slate-200" name="sub_categories" defaultValue="">
                                    <option value="" disabled>
                                        <span className="text-red" > Sub-Categories&nbsp; </span>
                                        (<span className="ms-auto">{Object.keys(item.sub_categories).length}</span>)
                                    </option>
                                    {Object.values(item.sub_categories).map((subcategory, index) => (
                                        <option key={index} value={subcategory}>{subcategory}</option>
                                    ))}
                                </select>
                                <div className="flex justify-between items-center">
                                    <p>Total Posts</p>
                                    <p>{item.total_posts}</p>
                                    <p><CgEye className="text-xl hover:text-green" /></p>
                                </div>
                            </div>
                            <div className="w-[20%]">
                                <div className="size-20 border border-slate-300  rounded-full status new justify-center items-center flex">
                                    {item.total_views}
                                </div>
                                <p className="pt-1">Total Views</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            {!showAddNewCategory ? (
                <section>
                    <button className="w-full actionBtn mt-8" onClick={handleAddNewCategory}>
                        Add New Category <MdCategory className="ms-1 text-xl" />
                    </button>
                </section>
            ) : (
                <section className="bg-[#E2E8F0] p-2 mt-8">
                    
                    <div className="flex items-center gap-3 w-full">
                    <div className="w-[33%]">
                            <label htmlFor="site_name" className="font-medium">Select Site</label>
                            <select defaultValue="" name="category" id="" className="mt-1">
                                <option disabled value="">Select Site Name</option>
                                <option value="article">Article</option>
                                <option value="article">Article</option>
                                <option value="article">Article</option>
                            </select>
                        </div>

                        <div className="w-[33%]">
                            <label htmlFor="category_name" className="font-medium">Add New Category</label>
                            <input type="text" name="" className="mt-1" />
                        </div>
                        <div className="w-[33%] ">
                            <label htmlFor="sub-category" className="font-medium ">Add New Sub-Categories</label>
                            {newSubCategories.map((subCategory, index) => (
                                <div key={index} className={`w-full flex items-center gap-2 mt-${index > 0 ? '2' : '0'}`}>
                                    <input type="text" className="mt-1" value={subCategory} onChange={(e) => {
                                        const updatedSubCategories = [...newSubCategories];
                                        updatedSubCategories[index] = e.target.value;
                                        setNewSubCategories(updatedSubCategories);
                                    }} />
                                    {index === newSubCategories.length - 1 ? (
                                     
                                        <Tooltip title="Add New Field" arrow placement="top"><div><IoMdAddCircle onClick={handleAddSubCategory} className="text-xl cursor-pointer" /></div></Tooltip>
                                     
                                    ) : (
                                       
                                        <Tooltip title="Remove This Field" arrow placement="top"> <div><IoRemove onClick={() => handleRemoveSubCategory(index)} className="text-xl cursor-pointer" /></div> </Tooltip>
                                       
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-3 w-full mt-4 ">
                        <button className="actionBtn w-[50%]" onClick={handleCancel}>
                            Save <CgCheckR className="ms-1" />
                        </button>
                        <button className="actionBtn bg-slate-500 w-[50%]" onClick={handleCancel}>
                            Cancel <RxCross1 className="ms-1" />
                        </button>
                    </div>
                </section>
            )}
        </main>
    );
};
export default Category;

const data = [
    {
        id: 1,
        category: "Article",
        sub_categories: {
            name1: "Business Cyber Security",
            name2: "Personal Cyber Security",
            name3: "Amaar Ja Mon Cay"
        },
        total_posts: 15,
        total_views: 450,
    },
    {
        id: 2,
        category: "Case Study",
        sub_categories: {
            name1: "Business Cyber Security",
            name2: "Personal Cyber Security",
        },
        total_posts: 75,
        total_views: 750,
    },
    {
        id: 1,
        category: "Blogs",
        sub_categories: {
            name1: "Business Cyber Security",
            name2: "Personal Cyber Security",
        },
        total_posts: 25,
        total_views: 350,
    },
    {
        id: 4,
        category: "Blogs",
        sub_categories: {
            name1: "Business Cyber Security",
            name2: "Personal Cyber Security",
        },
        total_posts: 25,
        total_views: 350,
    },
    {
        id: 4,
        category: "Blogs",
        sub_categories: {
            name1: "Business Cyber Security",
            name2: "Personal Cyber Security",
        },
        total_posts: 25,
        total_views: 350,
    },
    {
        id: 1,
        category: "Blogs",
        sub_categories: {
            name1: "Business Cyber Security",
            name2: "Personal Cyber Security",
            name3: "Business Cyber Security",
            name4: "Personal Cyber Security",
        },
        total_posts: 25,
        total_views: 350,
    },

    {
        id: 1,
        category: "Blogs",
        sub_categories: {
            name1: "Business Cyber Security",
            name2: "Personal Cyber Security",
            name3: "Business Cyber Security",
            name4: "Personal Cyber Security",
        },
        total_posts: 25,
        total_views: 350,
    },
    {
        id: 1,
        category: "Blogs",
        sub_categories: {
            name1: "Business Cyber Security",
            name2: "Personal Cyber Security",
            name3: "Business Cyber Security",
            name4: "Personal Cyber Security",
        },
        total_posts: 25,
        total_views: 350,
    },

    {
        id: 1,
        category: "Blogs",
        sub_categories: {
            name1: "Business Cyber Security",
            name2: "Personal Cyber Security",
            name3: "Business Cyber Security",
            name4: "Personal Cyber Security",
        },
        total_posts: 25,
        total_views: 350,
    },

];
