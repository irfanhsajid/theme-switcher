import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Back, Delete, Edit } from "../../../icon";
import GlobalTable from "../../../components/shared/GlobalTable";
import { Tooltip } from "@mui/material";
import { toast } from "react-toastify";
import { confirmAlert } from "../../../utils/helperFunction";
import { Support } from "../../../utils/http";
import { useAuth } from "../../../context/auth/AuthProvider";
import { SlGlobe } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import { CgCheckR } from "react-icons/cg";

import AttachmentInput from './../../../components/shared/AttachmentInput';
import { LuImagePlus } from "react-icons/lu";

const SiteManagement = () => {
    const navigate = useNavigate();
    const { headers } = useAuth();
    const [showAddNewSite, setShowAddNewSite] = useState(false);

    // handle Delete Status
    const handleDeleteSite = async (id) => {
        try {
            confirmAlert(() => {
                Support.delete(`/ticket/${id}/`, { headers })
                    .then(() => {
                        toast.success(`Ticket deleted successfully`);
                        // setClientTickets(pre => ({ ...pre, results: pre.results?.filter(item => item.id !== id) }));
                    })
            })
        } catch (error) {
            toast.error(error.response?.data || 'Something went wrong.Please try again later');
        }
    }

    const handleAddNewSite = () => {
        setShowAddNewSite(true);
    }

    const handleCancel = () => {
        setShowAddNewSite(false);
    }

    const siteColumn = [
        {
            field: 'sl',
            fieldName: 'SL',
            width: '5%',
            render: (sl) => sl,
        },
        {
            field: 'site_name',
            fieldName: 'Site Name',
            width: '15%',
            isAlignmentCenter: false,
            render: (params) => (params ? <p className="">{params}</p> : "---")
        },
        {
            field: 'url',
            fieldName: 'URL',
            width: '30%',
            isAlignmentCenter: false,
            render: (params) => (params ? <p className="  ">{params}</p> : "---")
        },
        {
            field: '',
            fieldName: 'Action',
            width: '20%',
            isAlignmentCenter: true,
            render: (params) => (params ?
                <div className="flex gap-2 items-center">
                    <Link to={`/user/support/tickets/${params.id}/edit`}>
                        <Tooltip title="Edit" arrow placement="left">
                            <div>
                                <Edit className="text-2xl" variant={'iconButton'} />
                            </div>
                        </Tooltip>
                    </Link>
                    <Tooltip title="Delete" arrow placement="right">
                        <div>
                            <Delete variant='iconButton' className="text-2xl" onClick={() => handleDeleteSite(params.id)} />
                        </div>
                    </Tooltip>
                </div>
                : "---"
            )
        },
    ]

    return (
        <main className="p-4">
            <div className="flex justify-between items-center w-full pb-2">
                <div className='h-[20px] flex items-center gap-3'></div>
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="actionBtn !bg-white !text-blue">
                        <Back className='text-xl' />
                        <span className="!text-blue">Back</span>
                    </button>
                </div>
            </div>
            <section className="mt-4">
                <GlobalTable
                    title=""
                    columns={siteColumn}
                    isPagination={true}
                    data={{ results: siteData }}
                />
            </section>

            {!showAddNewSite ? (
                <section>
                    <button className="w-full actionBtn mt-4" onClick={handleAddNewSite}>Add New Site <SlGlobe className="ms-1" /> </button>
                </section>
            ) : (
                <section className="bg-[#E2E8F0] p-2 mt-4">
                    <div className="flex items-center gap-3 w-full">
                        <div className="w-[15%]">
                        <p className="font-medium py-2">Site Image</p>
                        <AttachmentInput 
                        label={<>
                            <div className=" w-4/5 flex items-center gap-1 bg-slate-400 actionBtn max-h-[38px]"> <p>Upload Logo</p> <LuImagePlus className="text-xl ms-1" /> </div>
                        </>
                        
                    }
                    single={true}
                    // values={getValues('invoice')}
                     setValue={(value) => {
                       //setValue('invoice', value || '');
                       console.log(value);
                     }}
                        />
                        </div>
                        <div className="w-[25%]">
                        <p className="font-medium py-2">Site Name</p>
                            <input type="text" name="site_name" id="site_name" className="min-h-[40px]" />
                        </div>
                        <div className="w-[60%]">
                        <p className="font-medium py-2">URL</p> 
                            <input type="url" name="url" id="url"  className="min-h-[40px]"/>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 w-full mt-4 ">
                        <button className="actionBtn w-[50%]" onClick={handleCancel}>Submit <CgCheckR className="ms-1"/>  </button>
                        <button className="actionBtn bg-slate-500 w-[50%]" onClick={handleCancel}>Cancel <RxCross1 className="ms-1"/> </button>
                    </div>
                </section>
            )}
        </main>
    );
};

export default SiteManagement;

const siteData = [
    {
        id: 1,
        site_name: "TechForing",
        url: 'www.techforing.com'
    },
    {
        id: 2,
        site_name: "TechForing Growth",
        url: 'www.techforinggrowth.com'
    },
    {
        id: 1,
        site_name: "TechForing",
        url: 'www.techforing.com'
    },
    {
        id: 2,
        site_name: "TechForing Growth",
        url: 'www.techforinggrowth.com'
    },
    {
        id: 1,
        site_name: "TechForing",
        url: 'www.techforing.com'
    },
    {
        id: 2,
        site_name: "TechForing Growth",
        url: 'www.techforinggrowth.com'
    },
    {
        id: 1,
        site_name: "TechForing",
        url: 'www.techforing.com'
    },
   
]
