import "./App.css"
import TextExpander from "./components/TextExpander.tsx";

function App() {

    return (
        <main>
            <TextExpander  className={"box"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque, aut, et explicabo facilis maxime nisi
                odit recusandae, similique temporibus totam vitae. Assumenda corporis, dolorem enim illum nostrum porro
                repudiandae? Amet cupiditate harum, id incidunt iure laboriosam molestias quis repudiandae sint. Animi,
                cum cupiditate exercitationem harum libero nulla odio perferendis provident quasi saepe. Ab aut commodi
                corporis deserunt dicta dignissimos et explicabo in laboriosam nam natus praesentium, sunt suscipit. At
                aut beatae blanditiis consectetur deleniti, dignissimos doloribus ducimus eaque enim est expedita
                facilis inventore ipsam iure minus officiis omnis perferendis perspiciatis praesentium quaerat quasi,
                quisquam repudiandae sed totam unde voluptas, voluptate. Amet aspernatur debitis dolore id impedit
                magnam porro quod saepe! A alias aut consequuntur culpa ducimus eos, eum ex facilis ipsum, laboriosam
                libero modi nobis nostrum numquam, obcaecati optio perspiciatis recusandae reiciendis tenetur ullam.
                Delectus dolorum, et, ex illo inventore laboriosam libero minus necessitatibus praesentium reiciendis
                rerum tempore! Aliquam aspernatur doloremque, dolorum earum et laborum maiores obcaecati quae tempora
                voluptates? Assumenda blanditiis, distinctio enim eum eveniet fugiat fugit, impedit ipsa iste labore nam
                praesentium quia quibusdam quidem sit tempore voluptatem. Accusantium ad alias, aliquid dolore eius illo
                ipsa itaque iure labore nesciunt nostrum optio rem repellendus sint ut voluptates.
            </TextExpander>
            <TextExpander
                buttonColor={"orange"}
                expandButtonText={"Show everything"}
                collapseButtonText={"Show just a bit"}
                expanded={true}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti maxime officiis ullam. Architecto
                aspernatur commodi consectetur consequatur cum cupiditate delectus distinctio dolorem eos error fuga,
                illo illum in ipsum, iusto laborum laudantium libero magni numquam odit officia perferendis porro quam
                quo ratione repellat repellendus tenetur totam vel voluptatibus! A adipisci commodi, cumque facilis
                fugit ipsa neque similique sit vero voluptatum? Architecto earum excepturi explicabo laboriosam
                obcaecati rerum tempore. Architecto assumenda aut cumque eos impedit maiores nesciunt, officiis optio
                porro quaerat recusandae reiciendis velit voluptatibus! Atque ipsa nesciunt repellendus reprehenderit
                saepe sapiente sequi tempora unde ut voluptas? Sed, velit, voluptates.
            </TextExpander>
        </main>
    );
}

export default App
