import { Component } from "react";
import "./Previewer.scss";
import { marked } from 'marked';


marked.setOptions({
    breaks: true, // Converts line breaks into <br> tags
    // Additional options can go here
  });

class Previewer extends Component {
    constructor(props) {
        super(props);
    }
    state = {  };
    render() { 
        return ( 
            <section className="preview-section">
                <h4>#Preview</h4>
                <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.props.markdown) }}>
                </div>
            </section>
         );
    }
}
 
export default Previewer;