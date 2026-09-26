<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->

Notes :
Extra Notes:
->If we want to install version specific library then we have to use command npm install@<version of library>
=============

Q)Which event is used by browser to load a page?
->Dom content loaded is the event used by browser to load a page
->inspect-->network-->Dom  content loaded
Q)What is static DOM?
Q)What is dynamic DOM?
Q)What is Bootstrapping?
-->The process of converting static dom to dynamic dom called as bootstrapping
Q)What is fragment in react? what are diff between empty fragment and fragment?
Q)What is Data binding in react?

Q)What is state?
->HTTP is stateless protocol(stateless means it will maintain data for a request and that data will be deleted after request completed)
->Hence it cant remember data between requests
->It used mechanism go-get-forget
->It erases the memory allocated for a request when request ends
->Hence state is used to maintain data between requests
->state management systems in javascripts are
  query string, session storage, local storage and cookies
->React component is configured with local state
->A local state is created implicitely for every component while creating component object.


Q)What is hook?
->Its predefined service, which we can inject and customized according to requirement
->Technically hook is function

Q)What is useState()?
->we can access  and use  local state by using react useState() hook
->useState() configures getter and setter which are used for reading and writing data into state
->state can handle any javascript data type i.e. primitive and non primitive
Syntax: const[getName,setName]=useState(any value);

Q)can we use var and let instead const in useState()?
->Yes, but not recommended 
->Because state must be initialized and used
->if we use var or let they will allow declaration and assignment which is good for state

Q)In useState() why we are using const? why not let and var? 
->const will not allow ignore initialization hence const is recommended

Q)const is not allowing assignment then how setter will work in useState()?
->set will not assign value, actually it initializes value

Q)How to set state?
->state is configured with setter and setter will not allow to assign value but allows to initialize value 	
Syntax:
	 const [name, setName] = useState('Sachin');
	
	setName="Sachin"; //invalid
	setName(Sachin);  //valid
->But we cant create state while creating a component
->state can be initialized with new value while mounting the component or on any specific element event [ like onclick,onload,onblur etc...]

Q)What is useEffect()/How to configure mount phase?
->Reacts useEffect() hook is used to configure mount
->It defines actions to perform while mounting component(while loading component)
->i.e. first component is created and then it is mounted(loaded)
->useEfect() hook uses callback function and it uses a dependency which is an array
Syntax: 
	useEffect(()=>{
		setName(name);
		setAge(age);
		},[dependancy])
->An component mounts only once on first request
->Dependacies are used to remount the component whenever dependacies changes.

Q)What is difference between map and foreach in javascript?
->map returns the data and foreach returns void
->in react we want method who reads and  returns data from array hence we use map

Q)What is difference between Object data type and Map data type?
->In object key must be string but in map key be of any type
->Object requires all manipulation from external, but Map have internal methods
->If we are dealing with structured data , better to go with object.If we are dealing with structureless data better to go with Map
->Map is much faster than Object,becoz it has so many internal methods

Q)How to represent date in react?
->for representing date we have third party library in react like, moment,dayjs, luxon
->Those library provides predefined  methods for manipulating date and time values

Q)What is fetch() API?
->It is promise based request
->promise is async request and it is better in error handling
->It returns response in binary format and explicet conversion requires
->It is not good in handling CORS and XSRF
Syntax:
	fetch('url')
            .then(function(response)){convert response to JSON})
		.then(function(data){handle data})
		.cath(function(error){})
		.finally(function(){})
->We can also use Axios, Whatwg fetch,Teleric these are all 3rd party services for AJAX call

Q)What are alternate of promise?
->instead of promise we can use async functions
->async and await by default creates an promise, so instead of using directly promise we can use async

Q)What is AXIOS?
->It uses XMLHttpRequest
->It is asynchronous by default
->It is promise based request
->It can manage CORS and XSRF
->It can handle ajax server side
->It can cancel request
->It can manages multiple requests simultaneously at the same time
->Firstly we have to install axios i.e. npm install axios
->import axios from axios
->configure request
	axios.get();
	axios.post();
	axios.put();
Syntax:	
	axios.get('url')
	     .then(function(response){})
	     .catch(function(error){})
	     .finally(function(){})

==================
React Event :
==================
->REact provides synthetic event library
->Its virtual dom library for handling events in react
->Synthetic event is base for all events in react
Syntax:
    function handleInsertClick(){
        alert("Insert clicked...");
    }
    return(
        <div className="container-fluid">
            <h4>Event Demo</h4>
            <button onClick={handleInsertClick}>Insert</button>
        </div>
    )

->Evnet handler is configured with default arguments implicitly
->React event subscriber(function) can access default argument using "event" reference.
->Event reference provides access to both element and event details
Syntax :
	    function handleInsertClick(e){
        e.target.name,e.target.id,e.target.value etc..
	e.clientX,e.clientY,e.keyCode,e.shiftKey etc..
    }
<button onClick={handleInsertClick}>Insert</button>
======
Note:  In React two way binding is possible by only one event and that event name is onChange()
======
==============
React Debounce
==============
->Bounce is task where task are executed immediately on trigger of specific event
->we can delay any task by specific duration using Debounce 


Q)What is useRef()?{To see useref, refer throttling and debouncing example}
->useRef() is hook which used to configure reference memory
->We can store any value or function inside reference memory which is good for using in reference of a process
->useRef() hook avoid unnecessary re-render of content i.e. it provides data or function to process without re-rendering the component
->we can also use this reference memory for presentation but not recommended
->It is intended to use inside the process
Syntax:
   let ref=useRef(null);
ref.current=value/function;
->eg: let user logged in to the app and for few minutes he is not doing anything, then we need to signout automatically after few min

Q)What is Throttle in react?
->Throttle is mechanism where task in memory is released into the process at regular time intervals
->A sequence of operations performed regularly until removed from memory
->A copy of task is released into process from memory
->we can throttle using setInterval()
->We can stop throttle using clearInterval()

Syntax: setInterval(function(){},interval)
	clearInterval(refferenceName);
->example of throttle can be carousal, in which images are changing after specific intervals


Q)How react form can be configure?
->from react 18/19 we have react form data concept otherwise we have to go with third party library like formic,teleric
->form data uses key valuecollection
->form submits data of elements as "FormData" field name can be use as key and  value can be use as value


Q)What is higher order function(i.e.component)?
->In javascript higher order function means , a function that can take a function as a parameter and 
  returns a function is known as higher order function

Q)What is pure and impure function(i.e.component)?
->In javascript pure and impure function means, if function returning same even its parameter changed then that function is pure function
->Impure function means, even we passed same parameter type its return type is different

Q)What is controlled and un-controlled function(i.e.component)?
->Every component is un-controlled component by default,which is absolute in functionality
->Controlled component is controlled by the data coming from parents that means controlled component expecting data from the parent
  and controlled component is relative component
->controlled component is comprises of properties
Q)What is difference between properties and attributes?
->properties are mutable and attributes are immutable
->jsx have not an attributes, jsx have only properties.In html elements we usually have attributes
->attributes has fixed values but properties are changing dynamically

Q)How to transport data from parent component to child component?  Or What is props drilling?
->We can transport data from parent to child using props but condition is that child component must be controlled component i.e. child component 
  must be configured with properties.
Q)What is props drilling?
->When we are passing data from parent to child at multilevel hierarchy then it is called as props drilling
->Parent can not pass the data to any level of hierarchy It can pass data to only next level hence it requires props drilling mechanism

Q)How to handle the issue of props drilling ? OR what is React Context API? OR How to transport data from parent to child if it is not controlled 
  component?
->so solution on that like we can transfer data from parent to at any level of hierarchy using context api
->The issue of props drilling is resolved using Context API

Q)If we can pass data from parent to child component then why we are using context api?
->Using props we can pass data only if component is only controlled component, but if we have to pass data to uncontrolled component then
  we have to use context api

Q)How we can send data from child component to parent?
->To pass data from child to parent component, child component needs an event and this event event will going to Event-Trigger and that trigger 
  pushes the data
->So basically for transferring the data from child to parent we need to create custom event for child component, so that that event will trigger
  data	and then parent can catch and use the data
->Step 1:Cild component requires custom event
	function Child({event}) //We can define multiple event
	{
	}
  Step 2:Define actions for custom event, the actions are specified using synthetic event
		function handleEvent(){  //Synthetic event
			event(data);     //child custom event
		}
 Step 3:Configure event handler for child in parent component
		<Child event={handleName}/>
		where event-->child event
		handleName-->parent function
Step 4:Parent can have function that can access data from child
	function handleName(e){ //event argument contains child data
		}
		
Q)What is useMemo() and useCallback()?{coverd in vdo: 26}
->An component can request data from any api
->It can handle various interactions of data, which includes search, filter, sort etc
->Component will fetch data from api every time while searching, filtering, sorting
->So we can cache the data and use across multiple requests by using useMemo()
->It saves round trip from db
->so the memoized data is updated using dependancies
->Note:useMemo() must return a data. because it is not storing any logic
Syntax:
	const data=useMemo(()=>{
				return data;
			  },[dependancies])

->If we want to cache the function then we will go with useCallback(), so that particular functionality we can
  use again and again for improving the performance
->So if any functionality is used by clients repeatedly then we can cache and use across the request.
->So it can update function in cache using dependancies
->useCallback() is void its not return any data
Syntax:
	useCallback(()=>{
		//actions to perform in cache
	},[dependancies])

Q)What is difference between usememo(),usecallback() and useref()?
=====
Note:  To avoid unnecessary rendering of component we have three techniques i.e. useMemo(),useCallback(),useRef() hooks.
=====  The difference between usememo,usecallbak and useref is useref doesn't uses dependancies where usememo and usecallback uses dependancies(i.e.
       usememo and usecallback update data/function in cache whenever dependancies changes).
       useref() changes dynamically

Q)What is routing? {covered in vdo:26}
->Routing is technique to configure user and seo friendly url's
->Routing simplifies the navigation in SPA
->It allows to load new content in page without reloading the page
->Routing in react is mangaged by react-router-dom library
->React-router-dom provides built-in componenents that handles navigation, It handles route in virtual dom[for react 18 and 19 we are using version 7]
->react router component

	<BrowserRouter> :
		->It is container that handles routes in virtual dom and it acts as provider scope for routes in application
		->All routes must be run within the scope of browser router
		->It translates the virtual routes and maps to actual dom location object.(Location is browser object that handles navigation in browser)
	<Routes> :
		->It configures a route table.
		->Route table comprises of collection of routes provided by application.
		->It maps to every route on client request and renders the requested component into UI.
	<Route> :
		->It configures individual route path in application.
		->It uses request header to read request and send response
		->It can render jsx element with markup or component
	<link> :
		->It conifugres the hyperlink tah navigates to specified route path.
	<Outlet> :
		->Outlest decides where the child element should render in parent

Syntax:
------	<BrowserRouter>
	    <Routes>
		<RoutePath="/" element={}/>
		 …
	    </Routes>
	</BrowserRouter>
	
Q)What is relative path/route and what is absolute path/route?
->relative path is appended to the existing path which is required for child route to be accessed within context of parent
->absolute path cleans up existing path and sets a new path,It is not related to any context

-----------
**Concept**
----------- Nested Routes: We can configure relative route for a parent route.
			 -relative route will run within the context of parent.
	Syntax:
		<Route path="parent" element={<Parent/>}>
			<Route path="child" element={<Child/>}/>
		</Route>


Q)What is useContext()?
->It uses the context memory
->The context memory is memory which is allocated to parent and which is shared to child
->It is used to avoid props drilling

Q)What is useReducer()?
->It is used to handle global application state
->application state is available from application start to end
->It can be shared across multiple session
->Every application can manage global state with reducer
->It can provided data to any component in application 
->It is handled by using following components
   1)store 	:It comprises of initial state and final state
	    	 ->It  is global storage 

   2)state 	:It is responsible to access data from store and update to component

   3)reducer 	:It is responsible for identifying the changes using actions and updates the data in to store
                ->It can dispatch payload on specific action and updates in store	

 Syntax :
1)Create global state for initial values
  let initialState={
                     key:value,
	             key:value,

		}
->Store is an object type that can handle any type of data
2)Configure reducer function
    function reducer(state,action){
			
				switch(action.type){
					case "type":
						//updates state
						break;
						}
				}
3)component can use the state and updates using actions
		->We have to import the reducer
		->dispatch the data[payload] on specific action.
		->component can use the reducer using useReducer() hook
	
		syntax: 
			const[state, dispatch]=useReducer(reducer,initialState);
			  dispatch({action:'type'})

Q)Redux toolkit?
->Redux is js library for global application state
->It is predictable, debuggabe and testable
->It provides toolkit that allows developer to track application state
->It comprises of store, state, reducer and actions etc

1)Install redux toolkit for the project
	> npm install @reduxjs/toolkit react-redux --save

2)Install devtools for our browser
3)Create slicer
->slicer comprises of initial state with data
->it configures the reducer with the actions
->Its created using creatSlice() method
Syntax: 
	const slicerName=createSlice({
			name:"slicer-name",
			initialState,
			reducers :{
				action1:(state,action)=>{},
				action2:(state,action)=>{}
				}
		})
	export const{action1,action2}=slicerName.actions;
	export default slicerName.reducer;
4)Create and configure the store



