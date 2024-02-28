import MyModal from "../component/global-modal";

const Dashboard = () => {
    return (
        <div className="sectionContainer">
            <h1>This is Dashboard page</h1>

            <MyModal
            className={"w-3/5"}
                openButtonLabel={"Open Modal"}
                modalTitle={"This is My Tesst Modal"}
                modalBody={<div>
                    <h2 className="text-2xl font-bold ">Hello Bro? </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio incidunt commodi autem fugit aperiam architecto explicabo nam saepe voluptatibus, laborum ad repudiandae ab laudantium eos voluptate labore libero impedit totam? Consequuntur delectus dolore odit beatae dicta iste unde repudiandae molestias ab impedit aut corrupti ex quaerat nostrum aliquid, repellendus distinctio, officia enim suscipit laborum sequi accusamus eligendi? Facilis voluptatem mollitia aliquam reiciendis tempora corporis quos dicta, repellat dolorem dolores expedita illo, officiis ducimus, facere ex distinctio labore animi. Sed provident quis repudiandae debitis quasi hic labore commodi, quas minus architecto animi quos, numquam beatae a corporis ducimus repellendus consequatur voluptas quam doloribus. Porro praesentium et molestias perspiciatis magnam repellendus possimus tempora quod quia illum id, ratione voluptates impedit suscipit maxime maiores exercitationem eum hic voluptatem, inventore quam! Voluptatem iusto laudantium saepe neque repellendus quod vitae delectus id sit. Est cupiditate in ut nihil, veniam voluptate obcaecati? Adipisci, soluta aliquam. Explicabo ab nemo esse harum dolorem totam ad quos accusamus ipsa quia odio qui et deleniti, amet, unde cumque eos delectus quod maiores dolores sequi iste doloremque. Inventore maxime cupiditate dolorem sapiente molestiae odit, magnam, quae sit aperiam nihil ullam, quam minima sunt repellat asperiores officiis illum. Deserunt officia ut amet voluptatem fuga quam quia modi ratione sapiente aut, quos aperiam consequuntur magni cum natus eos omnis fugiat exercitationem, vel aspernatur doloribus. Cupiditate perspiciatis atque repellat incidunt! Fuga quaerat, similique vel accusamus autem in fugiat ab omnis minima at magnam reiciendis veritatis repellat animi cupiditate nostrum corrupti eveniet unde! Ea blanditiis id neque deserunt quos non nihil dolor officiis dolorem, amet hic alias velit accusantium pariatur odit molestias quae temporibus nobis reprehenderit culpa quis. Neque, provident sit error reiciendis iste nihil nobis molestias ullam quaerat! Repudiandae porro, dolor, iusto enim ducimus nulla eveniet suscipit beatae rem similique saepe in unde eligendi!</p>
                </div>}
            />
        </div>
    );
};

export default Dashboard;