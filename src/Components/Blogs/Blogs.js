import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='text-center'>
                <h2 className='fw-bold py-4 text-success'>Some Useful Notes!!</h2>
            </div>

            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> <h6 className='fw-semibold'>What is the purpose of React Router?</h6></Accordion.Header>
                        <Accordion.Body>
                            Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. <br /><br />React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h6 className='fw-semibold'>How does context API works?</h6></Accordion.Header>
                        <Accordion.Body>
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br /><br />React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h6 className='fw-semibold'>Write a short note of 'useRef Hook'.</h6></Accordion.Header>
                        <Accordion.Body>
                            The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                            The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br /><br /> <h6>Syntax: const refContainer = useRef(initialValue);</h6><br />The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </div>

    );
};

export default Blogs;