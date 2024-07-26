const heading = React.createElement('div',{id:'container',class:'heading'},[React.createElement('h2',{id:"sub-heading"},'i am an h2 tag'),
    React.createElement('p',{id:"para"},'i am a paragraph tag')
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)