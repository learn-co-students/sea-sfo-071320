# Organizing Redux

## Overview

Our goal today is to add redux to an existing app. We'll cover:

- Thinking in Redux
- `combineReducers`
- `mapDispatchToProps`
- Action Creators

## Thinking in Redux

So far, we've only used redux in a tiny sample application. Let's refactor our paintr app to use redux!

The steps we'll follow when we're thinking in Redux resemble our Thinking In React steps.

( 0. Set up redux, react-redux plumbing )

1. Figure out the "shape" of your state
  - Minimal representation of UI state, same as React
  - Focus on single source of truth
  - "Shape" = keys and the _types_ of their values, e.g. { count: number, friends: [string] }
  - Decide initial values
2. Add 'static' version of state using Redux
  - Create 'default' reducers with initial values (or maybe mock data)
  - Connect state to components with `mapStateToProps`
3. Figure out how state changes over time
  - List the actions that will be triggered in your app
  - Decide how your state should change in response to each action
4. Implement actions and reducers
  - Write action creators
  - Write cases in reducers that correspond to each action
  - Connect actions to components with `mapDispatchToProps`

## Figuring out the shape of our state

If we are adopting redux on our existing project, we can just use the state that we chose for React.

If we are designing our state from scratch, we'll need to follow the same rules as we did for choosing the 'minimal' state in React. Identify the different things that could show up on the screen, and figure out what data we'll need in order to represent that view.

> Note: Some components might keep local state, instead of moving the state to redux. A good rule of thumb: If more than one component needs the data, it probably should go in redux.

We should end up with a 'type' for our root reducer. In this case, it looks like:

```js
{
  paintings: [Painting],
  searchText: string,
}
```

What should the initial values be for these keys?

```
const initialState = {
  paintings: [],
  searchText: ""
}
```

## Connecting our components to redux

Now that we know the shape of our state and the initial values, we can connect a 'static' version of our store to our components. We'll start by adding our initial values as the default value in the reducer:

```js
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}
```

Now, we can choose the components that need access to the state in our store, and connect them. We know that the Searchbar needs to know about the searchText, so let's connect it. We define a mapStateToProps function that we can use to choose which pieces of the store state this component needs.

```js
const mapStateToProps = (state) => {
  return {
    value: state.searchText,
  }
}

const ConnectedSearchbar = connect(mapStateToProps)(Searchbar)
export default ConnectedSearchbar;
```

For the PaintingsList, we'll need to be slightly more choosy about how which paintings are passed in:
```js
const mapStateToProps = (state) => {
  return {
    paintings: state.paintings.filter(p =>
        p.title.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        p.artist.name
          .toLowerCase()
          .includes(this.state.searchText.toLowerCase())
    );)
  }
}
```

## `mapDispatchToProps`

## Action Creators

## `combineReducers`



# Redux BindActionCreators

## Overview

Our goal today is to practice adding features to an app with redux. We'll cover:

- Revisiting Thinking in Redux
- `mapDispatchToProps`
- Action Creators
- bindActionCreators
- `connect` syntactic sugar 

## Thinking in Redux


1. Figure out the "shape" of your state
2. Add 'static' version of state using Redux
  - Create 'default' reducers with initial values (or maybe mock data)
  - Connect state to components with `mapStateToProps`
3. Figure out how state changes over time
  - List the actions that will be triggered in your app
  - Decide how your state should change in response to each action

Actions                      ->    response in the reducer

X changing the search text (value) ->  change the search text

update the painting details      ->  change the painting details
vote on a particular painting    ->  painting.votes increases by 1

4. Implement actions and reducers
  - Write action creators
  - Write cases in reducers that correspond to each action
  - Connect actions to components with `mapDispatchToProps`

## `mapDispatchToProps`

Like `mapStateToProps` but for the actions that our component can take.

Should pass functions as the props!

## Action Creators

- Function that creates an action

## bindActionCreators

[In the Redux docs](https://redux.js.org/api/bindactioncreators)

There's a common pattern when we're defining mapDispatchToProps with action creators - we want functions that are basically the same, but they dispatch the results. `bindActionCreators` takes in an object of action creators and the dispatch function, and 'binds' them. It returns new functions that do the same thing, but the results are immediately dispatched.

That gives us a nice shortcut when we're defining mapDispatch to props:

```js
import { updateSearchText } from '../redux/actions'
const actionCreators = {
  updateSearchText: updateSearchText
}
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);
connect(null, mapDispatchToProps)(Searchbar)
```

## Sugar

`connect` will do it for us.

```js
import { updateSearchText } from '../redux/actions';

connect(null, { updateSearchText })(Searchbar)
```


# Redux Thunk

[Diagrams of Thunk Architecture](http://codesheep.io/2017/01/06/redux-architecture/)

## Overview

- problem: async actions in redux
- redux thunk plumbing
- What is a thunk
- middleware pattern

## Async actions in redux

In vanilla React, we'd do our fetch in componentDidMount. Now that we're using redux, we dispatch actions instead of setting the state:

```js
componentDidMount() {
  fetch(URL)
    .then(res => res.json())
    .then(paintings => this.props.fetchedPaintings(paintings)))
}
```

We want to move our logic out of our components and into redux.

Why?

1. Components shouldn't know about state management logic. If we delete this component, we might still want to load the paintings. One goal of redux is to decouple our components from our state.
2. We want more control over how our actions work. For instance, we want to dispatch a 'FETCHING' action before our fetch so that we can show a spinner
3. We might want to access something else in the store, just for the action. We don't want to pollute this component with extra data if we can avoid it

## Solution: Redux Thunk

- Thunk lets us write more complex action creators
- Instead of returning action objects, action creators can return _thunks_

**Thunk**: a function we can dispatch

Thunks get in the dispatch function as an argument, so they can dispatch further actions.

## Thunk Plumbing

`yarn add redux-thunk`

```
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
```

Now we can use thunks!

## Using Thunks

Now our actionCreators can return thunk actions - functions that will get called with `dispatch`.

```js
// plain old actionCreator
const fetchedPaintings = (paintings) => {
  return { type: "FETCHED_PAINTINGS", paintings }
}

// Thunk actionCreator
const fetchPaintings = () => {
  return (dispatch) => {
    fetch(URL)
      .then(res => res.json())
      .then(paintings => dispatch(fetchedPaintings(paintings))) 
  }
}
```

Now, in our component, we can just call the prop function:

```js
componentDidMount() {
  this.props.fetchPaintings();
}
```

## Spinner

We did all this thunking so that we could introduce a new state 'loading' - let's actually add that!

```js
const loadingPaintings = () => {
  return {type: "LOADING_PAINTINGS" }
}

const fetchPaintings = () => {
  return (dispatch) => {
    dispatch(loadingPaintings())
    fetch(URL)
      .then(res => res.json())
      .then(paintings => dispatch(fetchedPaintings(paintings))) 
  }
}
```

We can dispatch multiple times from a thunk! This is handy when we want to do something immediately, and something else async, or when we want to compose multiple actions into a single dispatch (e.g. "load and select user")

## Middleware Pattern

Let's take another look at this 'middleware' pattern.

All of redux-thunk:

```js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

The middleware - like our root reducer - gets called for each of the actions that get dispatched to the store. Instead of getting in the state, it gets in the `dispatch` and `getState` functions, as well as the `next` middleware in the sequence.

It can do whatever it wants with the action, and then call the `next` middleware in the line with the action. In this case, thunk takes any of the actions that are functions and invokes them. Any actions that aren't functions, it 'ignores' by passing them to the next middleware unchanged.

## More complex thunks

Now that we are loading our paintings in from the server, lets make our increaseVotes and updatePainting actions actually save the new data to our server. 

With thunk action creators, we can change this logic 'under the hood' - without the components even knowing the difference.

```js
function increaseVotes(paintingId) {
  // return { type: "INCREASE_VOTES", paintingId }
  return (dispatch) => {
    // we need the painting's votes! 
    const votes = ???
    fetch(URL, {method: "PATCH", body: JSON.stringify({
      id: paintingId,
      votes
    })})
  }
}
```

Conveniently, thunk actions get called with not only the `dispatch` function, but also the `getState` function.

```js
function increaseVotes(paintingId) {
  // return { type: "INCREASE_VOTES", paintingId }
  return (dispatch, getState) => {
    // we need the painting's votes! 
    const votes = getState().paintings.find(p => p.id === paintingId).votes + 1;
    fetch(URL, {method: "PATCH", body: JSON.stringify({
      id: paintingId,
      votes
    })})
  }
}
```

## Challenge: Thunk Actions

1. Dispatch an action from the `increaseVotes` thunk action to update the painting once the fetch resolves. You may need to update the reducer.
2. Add a thunk action to update the painting's title and artist info on the server. 
3. After the promise resolves, update the painting in the store.
4. Update your thunks - `increaseVotes` and `updatePainting` to use the same helper function once the promise resolves. 

## BONUS Challenge: PaintingContainer Refactor

Notice how our PaintingsContainer has a fairly complicated `render` function. We can simplify it by making each Route render with the `component` prop instead of the `render` prop.

1. refactor the PaintingForm `mapStateToProps` so that you can render it as the `component` prop of the `Route`
2. refactor the PaintingDetail component in the same way
3. extract into a component the div wrapping the Searchbar and PaintingsList