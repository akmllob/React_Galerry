import React, { Component } from 'react';

class media extends Component{
    render(){
        return(
            <div>
                <img src={process.env.PUBLIC_URL+"/image/"+this.props.image}
                className="nr-3"alt="media"width="100"></img>
                <div className="media-body text-left">
                    <h5 className="mt-0">{this.props.title}</h5>
                    {this.props.children}
                </div>
            </div>
        );
    }
    
}

export default media;

