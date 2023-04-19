This is the for first small practice project. Nothing new here but it is reinforcing the idea of css modules and also using components as wrappers with children, etc. But I do definitly have my preferred style of writing React code as compared to some of what he suggests. It's fun to see multiple viewpoints though and to have confidence in how I do some things. 

Notes on Portals and Fragments:     
    React.Fragment is basically a wrapper function that works because the .createElement() will be able to return that function as an anomonous function. This is the same as React.Fragment. This works, I think, because it wraps the the children in an anomonous function. CHECK OUT THE 'components/wrapper/wrapper' for an example.

    As for portals, they as used for things like modals/overlays for the sake of the same mindset as the aria roles. For example, you wouldnt give a div an 'onclick' rather than use a butoon. You start by adding portals in the index.js file and add a div, about the root div, with an id of your choosing. You then import ReactDom, create a new function containing your component and then in the parent component you use ReactDOM.createPortal() and enter the argements of yoour component and document.getElementById('pointer to the created root div') to get yourself there. CHECK OUT THE 'components/ui/errormodal' for an example.

Refs: 
    'References" in their most basic form allow us to get access to dom elements and work with them. They are good when you need to read a value, rather than using 'document.getElementById()', to read a value.

    With a ref we can set up a connection between out html elements and our javascript code 

    {
        const Component = props {

            const domElement = useRef();

            return (
                        <>
                            <input type='text' ref={domElement} />
                        </>
                    )
        }
       
    }

    This will return the const 'domElement' as an object with a value of 'current' and from there we can access any properties/values that that element has. For example the value property. we will access that by reading domElement.current.value.

    It is recommended that you DO NOT malipulate the DOM from a ref, only manipulate it from React. Use this mainly for reading values. Even how we've used it in the AddUser component here could be considered bad coding.

    Refs probably return everything as a string, just like State does, because it is reading it from the DOM, which convers everything to a string..... I think. Yes! After some investigation, it does indeed still return a string even when its an int.

    useRef() is a way to sidestep exessive re-rendering when it is not necessary as the component does not get re-evaluated with ref values.


Controlled vs. Uncontrolled Components 
    If we access values with a ref, it is an 'uncontrolled component'. 

    'Controlled' means we use state and have two way binding between the state and the dom element.