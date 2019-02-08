# Declarative
Declarative templating for Render frameworks such as HTML, React, React Native, Vue, etc

<br>

## Setup: ##
### Node: ###
```
const DC = require('DeclarativeJSON')
```
### Browser: ###
```
<script src='js/DeclarativeJSON.js' />
var DC = DeclarativeJSON
```

<br>

## Example use: ##
```
const template = {}
const appContext = {}

let dc = new DC(template, appContext)
let output = dc.render()
```

## Template Example: ###
```
{
  div: {
    someElement: {
      condition: function() { return true }, // Accepts Function, Boolean, or String, returns Boolean or String
      content: function() { return 'something' }, // Accepts Function, String, or Object, returns String or Object
      tag: 'h2', // optional tag string, can be used instead of tags property.
      tags: ['<h2>', '</h2>'] // optional tags, can be any valid HTML or framework syntax
    }
  }
}
```

## Optional Context Example: ##
```
{
  user: { // element name
    // props
    username: 'Levi',
    loggedIn: true,
    admin: false,
  }
}
```

## Output Example: ##
```
<div><h1>Welcome Levi</h1></div>
```

<br>

## TODOs: ##
- [ ] More error checking
- [ ] Element ID's
- [ ] Data binding for elements
- [ ] Events for data binding
- [ ] References to other elements

<br>

## License: ##
[MIT](https://github.com/bugs181/DeclarativeJSON/blob/master/LICENSE)
