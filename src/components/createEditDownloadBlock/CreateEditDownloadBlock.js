import React, { Component } from 'react';
import './CreateEditDownloadBlock.scss';
import { Link } from 'react-router-dom';

class CreateEditDownloadBlock extends Component {
    state = {  }
    render() { 
        return ( 
        <section id="_create-edit-download-block">
            <div className="narrow-wrapper">
              <h4 id="_create-edit-download-title" className="sub-title light-sub-title">Create, edit, and download stunning educational videos in a blink!</h4>
              <div className="btn-wrapper">
                <Link key="_create-video" to="#" className="button light-btn">Create My Video</Link>
              </div>
            </div>
          </section>
         );
    }
}
 
export default CreateEditDownloadBlock;