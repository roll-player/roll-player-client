import React from 'react'

import { withFormsy } from 'formsy-react'

class TextInput extends React.Component {
    constructor (props) {
        super(props)
        this.changeValue = this.changeValue.bind(this)
    }

    changeValue (event) {
        this.props.setValue(event.currentTarget.value)
    }

    render () {
        const errorMessage = this.props.getErrorMessage()

        return (
            <div>
                <label htmlFor={this.props.name}>{this.props.title}</label>
                <input
                    onChange={this.changeValue}
                    type="text"
                    value={this.props.getValue() || ''} />
                <span>{errorMessage}</span>
            </div>
        )
    }
}

export default withFormsy(TextInput)