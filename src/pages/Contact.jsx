
import MyModal from "../component/global-modal";
import MyDropzone from "../component/Dropzone";


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
                    modalBody={
                        
                          <MyDropzone/>
                       
                    }
                />
            </div>
        </section>
    );
};

export default Contact;