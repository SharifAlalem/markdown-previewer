import { Component } from "react";
import Editor from "../EditorComponent/Editor";
import Previewer from "../PreviewerComponent/Previewer";
import "./Wrapper.scss";

class Wrapper extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        markdown: ''
    }

    handleUpdate = (event) => {
        this.setState({
            markdown: event.target.value
        })
    }

    render() { 
        return (
            <main className="main-wrapper">
                <h1>Markdown Previewer Project</h1>
                <div className="row">
                    <Editor markdown={this.state.markdown} handleUpdate={this.handleUpdate}/>
                    <Previewer markdown={this.state.markdown} />
                </div>
            </main>
        );
    }
}
 
export default Wrapper;