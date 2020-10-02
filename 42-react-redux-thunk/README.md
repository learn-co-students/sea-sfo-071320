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