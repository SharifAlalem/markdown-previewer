import { Component } from "react";
import "./Previewer.scss";

class Previewer extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <section className="preview-section">
                 <h4>#Preview</h4>
                <div id="preview">
                    {this.props.markdown}          
                </div>
            </section>
         );
    }
}
 
export default Previewer;