
// this is the same as React.Fragment. This works, I think, because it wraps the the children in an anomonous function.
const Wrapper = props => {
    return props.children;
}

export default Wrapper;