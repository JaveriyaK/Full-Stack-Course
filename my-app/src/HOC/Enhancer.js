const Enhancer = (Component) => {
return (props) => {
    console.log(props)
    return  (
        <div>
              <Component {...props}/>
              <h3><sub>Property of Mercedes Benz</sub></h3>
        </div>
    )

    }
}

export default Enhancer;
