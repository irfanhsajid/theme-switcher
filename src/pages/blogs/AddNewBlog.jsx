/* eslint-disable no-unused-vars */
import { useState } from "react";
import MultipleSelectCheckmarks from './../../../components/shared/MultiSelectCheckMarks';
import { FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight, FaCamera, FaRegImage, FaVideo } from "react-icons/fa6";
import { Editor } from "@tinymce/tinymce-react";
import { FormControlLabel, Radio, RadioGroup, Tooltip } from "@mui/material";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { RiIndentIncrease, RiIndentDecrease } from "react-icons/ri";
import { FiUpload } from "react-icons/fi";
import { LuImagePlus } from "react-icons/lu";
import { PiAlignLeftSimple, PiAlignRightSimple, PiAlignTopSimple, PiAlignBottomSimple } from "react-icons/pi";
import GlobalModal from "../../../components/shared/GlobalModal";
import AttachmentInput from "../../../components/shared/AttachmentInput";

const AddNewBlog = () => {
    const [selectedValue, setSelectedValue] = useState([]);
    //for multiselect options checkbox
    const handleValueChange = (value) => {
        setSelectedValue(value);
    };

    // for creating multiple editor sections
    const [sections, setSections] = useState([{ id: 1 }]);

    // add and remove editor section
    const addSection = () => {
        const newId = sections.length + 1;
        setSections([...sections, { id: newId }]);
    };
    const removeSection = (indexToRemove) => {
        if (sections.length > 1) {
            const updatedSections = sections.filter((_, index) => index !== indexToRemove);
            setSections(updatedSections);
        }
    };

    //modal Open Close
    const [openImgModal, setOpenImgModal] = useState(false);
    //modal Open Close
    const [openVdoModal, setOpenVdoModal] = useState(false);



    return (
        <main className="p-4">
            <section className=" p-2 mt-8">
                <div className="w-full pb-2 ">
                    <label htmlFor="site_name" className="font-medium ">Select Site</label>

                    {/* <select defaultValue="" multiple name="category" id="" className="mt-1 h-auto">
                        <option disabled value="">Select Site Name</option>
                        <option value="article">Article</option>
                        <option value="article">Article</option>
                        <option value="article">Article</option>
                    </select> */}

                    <MultipleSelectCheckmarks
                        placeholder="Select Site"
                        options={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']}
                        value={selectedValue}
                        onChange={handleValueChange}
                        className="w-full bg-white mt-1 focus:border focus:border-green"
                    />
                </div>

                <div className="flex items-center gap-3 w-full">
                    <div className="w-[33%]">
                        <label htmlFor="site_name" className="font-medium">Category <span className="text-red">*</span> </label>
                        <select defaultValue="" name="category" id="" className="mt-1 min-h-[48px]">
                            <option disabled value="">Select Category </option>
                            <option value="article">Article</option>
                            <option value="article">Article</option>
                            <option value="article">Article</option>
                        </select>
                    </div>
                    <div className="w-[33%]">
                        <label htmlFor="site_name" className="font-medium">Sub Category </label>
                        <select defaultValue="" name="category" id="" className="mt-1 min-h-[48px]">
                            <option disabled value="">Select Sub Category</option>
                            <option value="article">Article</option>
                            <option value="article">Article</option>
                            <option value="article">Article</option>
                        </select>
                    </div>
                    <div className="w-[33%] ">
                        <label htmlFor="sub-category" className="font-medium ">Filter Option</label>
                        <input type="text" className="mt-1 min-h-[48px]" />
                    </div>
                </div>

                <div className="w-full my-2">
                    <label htmlFor="url" className="font-medium">URL<span className="text-red">*</span></label>
                    <input type="url" className="mt-1 min-h-[48px]" />
                </div>

                <p className="font-medium">Add Title<span className="text-red">*</span></p>
                <div className="flex items-center justify-between w-full gap-7">
                    <input type="url" className="mt-1 min-h-[48px]" />
                    <button onClick={() => setOpenImgModal(true)} className="actionBtn min-h-[45px]">Add Feature Image <FaRegImage className="text-xl ms-1" /> </button>
                </div>

                {/* TinyMCE Editor Area */}
                {
                    sections.map((_, index) => (
                        <section key={index} className="tinyMCE">
                            <p className="font-medium my-2"> {sections.length === 1 ? "Post Content" : `Post Content (${index + 1})`} <span className="text-red"></span></p>
                            <div className="w-full bg-[#E2E8F0] p-4 rounded-[5px]">

                                <Editor
                                    // value={tinyMCEBody}
                                    // onEditorChange={handleEditorChange}
                                    apiKey='jt9p86b7nlo8chg0f4urmg82loqc9e2j5u2sjdep7gfrnuus'
                                    init={{
                                        height: 406,
                                        width: "100%",
                                        plugins: [
                                            'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
                                            'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media',
                                            'table', 'emoticons', 'template', 'help'
                                        ],
                                        toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
                                            'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
                                            'forecolor backcolor emoticons | help',
                                        menu: {
                                            favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' }
                                        },
                                        menubar: 'favs file edit view insert format tools table help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
                                    }}
                                // initialValue="Welcome to TinyMCE!"
                                />
                                <div className="mt-2 flex gap-3 items-center justify-evenly flex-shrink-0">
                                    <div className="flex gap-3">
                                        <Tooltip title="Add Image" arrow placement="bottom">
                                            <div onClick={() => setOpenImgModal(true)} className="size-11 rounded-[5px] flex justify-center items-center bg-[#E1EDFF] border border-inherit cursor-pointer" >
                                                <FaCamera className="text-xl" />
                                            </div>
                                        </Tooltip>
                                        <Tooltip title="Add Video" arrow placement="bottom">
                                            <div onClick={() => setOpenVdoModal(true)} className="size-11 rounded-[5px] flex justify-center items-center bg-[#D6FFD6] border border-inherit cursor-pointer" >
                                                <FaVideo className="text-xl" />
                                            </div>
                                        </Tooltip>
                                    </div>

                                    <select defaultValue="" name="category" id="" className="mt-1 h-[44px] w-[30%]">
                                        <option disabled value="">Choose Image Placement Area</option>
                                        <option value="below">Below Content</option>
                                        <option value="article">Above Content</option>
                                        <option value="article">Below Content</option>
                                    </select>

                                    <div className="flex gap-3 items-center mt-1">
                                        <Tooltip title="Text Align Left" arrow placement="bottom">
                                            <div className="iconDiv" >
                                                <FaAlignLeft className="text-xl" />
                                            </div>
                                        </Tooltip>
                                        <Tooltip title="Text Align Center" arrow placement="bottom">
                                            <div className="iconDiv" >
                                                <FaAlignCenter className="text-xl" />
                                            </div>
                                        </Tooltip>
                                        <Tooltip title="Text Align Right" arrow placement="bottom">
                                            <div className="iconDiv" >
                                                <FaAlignRight className="text-xl" />
                                            </div>
                                        </Tooltip>

                                        <Tooltip title="Text Justify" arrow placement="bottom">
                                            <div className="iconDiv" >
                                                <FaAlignJustify className="text-xl" />
                                            </div>
                                        </Tooltip>
                                        <Tooltip title="Text Indent Increase" arrow placement="bottom">
                                            <div className="iconDiv" >
                                                <RiIndentIncrease className="text-2xl" />

                                            </div>
                                        </Tooltip>
                                        <Tooltip title="Text Indent Decrease" arrow placement="bottom">
                                            <div className="iconDiv" >
                                                <RiIndentDecrease className="text-2xl" />

                                            </div>
                                        </Tooltip>
                                        <Tooltip title="Padding Left" arrow placement="bottom">
                                            <div className="iconInputArea" >
                                                <PiAlignLeftSimple className="text-2xl w-4/5" />
                                                <input type="number" className="focus:border-0 rounded-[5px]" />
                                            </div>
                                        </Tooltip>
                                        <Tooltip title="Padding Right" arrow placement="bottom">
                                            <div className="iconInputArea" >
                                                <PiAlignRightSimple className="text-2xl w-4/5" />
                                                <input type="number" className="focus:border-0 rounded-[5px]" />
                                            </div>
                                        </Tooltip>
                                        <Tooltip title="Padding Top" arrow placement="bottom">
                                            <div className="iconInputArea" >
                                                <PiAlignTopSimple className="text-2xl w-4/5" />
                                                <input type="number" className="focus:border-0 rounded-[5px]" />
                                            </div>
                                        </Tooltip>
                                        <Tooltip title="Padding Bottom" arrow placement="bottom">
                                            <div className="iconInputArea" >
                                                <PiAlignBottomSimple className="text-2xl w-4/5" />
                                                <input type="number" className="focus:border-0 rounded-[5px]" />
                                            </div>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 justify-end mt-1 items-center">
                                {/* add another new editor section */}
                                <Tooltip title="Add Another Editor" arrow placement="left">
                                    <div className="size-11 rounded-[8px] flex justify-center items-center bg-[#F1F5FF] border border-inherit  cursor-pointer">
                                        <IoMdAddCircle className="text-3xl text-blue cursor-pointer" id="AddBtn" onClick={addSection} />
                                    </div>
                                </Tooltip>
                                {/* remove section button */}
                                {
                                    sections.length > 1 && <Tooltip title="Remove This Section" arrow placement="bottom">
                                        <div className="size-11 rounded-[8px] flex justify-center items-center bg-[#F1F5FF]  border border-inherit cursor-pointer">
                                            <IoMdRemoveCircle className="text-3xl text-red cursor-pointer" onClick={() => removeSection(index)} />
                                        </div>
                                    </Tooltip>
                                }

                            </div>
                        </section>


                    ))
                }
            </section>
            {/*   comment and keywords section  */}

            <div className="flex items-center w-full gap-7 -pt-4">
                <div className="radio-buttons grow-0 w-1/5 ">
                    <p className="font-medium py-2">Comment</p>
                    <RadioGroup
                        sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }} defaultValue="enable"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="enable" control={<Radio />} label="Enable"
                        //   onClick={() => { setValue('email_use_tls', true); setValue('email_use_ssl', false) }}
                        />
                        <FormControlLabel value="disable" control={<Radio />} label="Disable"
                        //   onClick={() => { setValue('email_use_tls', false); setValue('email_use_ssl', true) }}
                        />
                    </RadioGroup>
                </div>

                <div className="grow-1 w-full">
                    <p className="font-medium py-2">Keywords</p>
                    <input type="keyword" className="mt-1 min-h-[48px]" />
                </div>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center py-4">
                <button className="actionBtn bg-green px-10">POST</button>
            </div>

            {/* image Modal Content Area */}
            {
                openImgModal && <GlobalModal
                    style={{ background: "#FFFFFF" }}
                    open={openImgModal}
                    setOpen={setOpenImgModal}
                    header={<h3 className="font-bold">Image Upload</h3>}
                    body={
                        <div className="modalDashedArea">
                            <div className="size-48 mt-4 flex justify-center items-center border-[30px] border-[#E7E8FF]  bg-[#D7D8FF] rounded-full cursor-pointer">
                                <FiUpload className="text-white size-12 bg-[#7075FF] p-2 rounded-full text-xl" />
                            </div>
                            <div>
                                <h3 className="font-bold">Click to upload or Drag and Drop</h3>
                                <small className="text-lightGray  mt-5"> Maximum file size 50mb</small>
                            </div>
                        </div>
                    }
                />
            }
            {/* video Modal Content Area */}
            {
                openVdoModal && <GlobalModal
                    style={{ background: "#FFFFFF" }}
                    open={openVdoModal}
                    setOpen={setOpenVdoModal}
                    header={<h3 className="font-bold">Video Upload</h3>}
                    body={

                        <section>
                            <div className="flex items-center justify-between gap-3 w-full py-2">
                                <div className=" w-1/2 ">
                                    <p className="font-medium text-[12px]">Video Title</p>
                                    <input type="text" className="mt-1 " />
                                </div>
                                <div className="w-1/2">
                                    <p className="font-medium text-[12px]">Alt Text</p>
                                    <input type="text" className="mt-1 " />
                                </div>
                            </div>

                            <div className="modalDashedArea">
                                <div className="size-48 mt-4 flex justify-center items-center border-[30px] border-[#E7E8FF]  bg-[#D7D8FF] rounded-full cursor-pointer">
                                    <FiUpload className="text-white size-12 bg-[#7075FF] p-2 rounded-full text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Click to upload or Drag and Drop</h3>
                                    <small className="text-lightGray  mt-5"> Maximum file size 50mb</small>
                                </div>
                            </div>
                            <div className="pb-2 flex flex-col gap-3">
                                <p className="font-medium text-[16px]">OR</p>
                                <p className="font-medium text-[16px]">Upload URL</p>
                                <input type="text" className="mt-1 border border-dashed border-[#7075FF] " />
                            </div>

                            <div className="py-2 flex items-center justify-between">
                             <AttachmentInput
                             label={
                                <div className="actionBtn bg-[#D7D8FF] text-[#6C71FF]">Select Thumbnail Image <LuImagePlus className="text-xl ms-1" /> </div>
                             }
                             single={true}
                            // values={getValues('invoice')}
                             setValue={(value) => {
                               //setValue('invoice', value || '');
                               console.log(value);
                             }}
                             
                             />
                                <button className="actionBtn  bg-[#6C71FF] px-10">UPLOAD</button>
                            </div>
                        </section>

                    }

                />
            }

        </main>
    );
};

export default AddNewBlog;

