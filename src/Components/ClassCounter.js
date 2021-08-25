import React from 'react'

class ClassCounter extends React.Component {
    render() {
        return (
            <div>
                <button
                onClick = {this.props.handleClick} >
                    {this.props.btnTitle}
                </button>
            </div>
        )
    }
}

export default ClassCounter;