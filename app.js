const container = document.getElementById("app")

const content = React.createElement('div', {}, [
    React.createElement('h1', {}, `I'm a heading one`),
    React.createElement('p', {}, `I'm a paragraph one`),
]
)






ReactDOM.render(content, container)


