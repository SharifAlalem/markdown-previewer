import { Component } from "react";
import './Editor.scss';

class Editor extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <section className="editor-section">
                <h4>#Editor</h4>
                <textarea onChange={this.props.handleUpdate} name="editor" id="editor" value={this.props.markdown}></textarea>
            </section>
         );
    }
}
 
export default Editor;