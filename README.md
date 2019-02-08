# DeclarativeJSON
Declarative JSON templating for Render frameworks

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
    h2: {
      condition: function() { return true }, // Accepts Function, Boolean, or String, returns Boolean or String
      content: function() { return 'something' }, // Accepts Function, String, or Object, returns String or Object
      tags: ['<h2>', '</h2>'] // optional tags
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
