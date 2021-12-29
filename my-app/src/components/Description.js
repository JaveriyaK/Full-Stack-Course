import Enhancer from "../HOC/Enhancer";

const Description = ({heading}) => {
    return (
        <div>
            <h1>{heading}</h1>
            <div>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Delectus dolores eos
            nihil ex totam, eligendi aliquid explicabo
            aut accusamus. Deserunt recusandae voluptatem
            at, repudiandae inventore reiciendis amet
            voluptas excepturi impedit!
            </div>
        </div>
    )
}

export default Enhancer(Description);