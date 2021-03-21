import React from 'react';

class HornedBeasts extends React.Component{
    render () {
        return(
            <>
                <h2>{this.props.title}</h2>
                <img 
                    alt={this.props.keyword}
                    src={this.props.imgUrl}
                    title={this.props.horns} 
                />
                <p>{this.props.description}</p>
            </>
        );
    }
}

export default HornedBeasts;