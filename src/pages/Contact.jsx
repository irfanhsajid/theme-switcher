import MyModal from "../component/global-modal";


const Contact = () => {
    return (
        <section className="sectionContainer">
            <h1>
                this is contact page
            </h1>
          <div className="my-4">
          <MyModal
            className={"w-3/5"}
                openButtonLabel={"Open Contact Info"}
                modalTitle={""}
                modalBody={<div>
                    <h2 className="text-2xl font-bold my-2 ">Hello Bro? </h2>
                    <input type="text" className="w-full rounded-[5px] p-4 bg-themeForeground border min-h-[40px] border-themeBackground" />
                    <button style={{background:"#024488", color:"white"}} className="actionBtn mt-2">Submit</button>
                </div>}
            />
          </div>
        </section>
    );
};

export default Contact;