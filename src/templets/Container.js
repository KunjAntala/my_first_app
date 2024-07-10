import './Container.css'

// Use of arrow function ---> syntaxt:- const functionname = () => {}
const Container = (props) => {

    const classes = "container " + props.className

    return <div className={classes}>{props.children}</div>
}
export default Container