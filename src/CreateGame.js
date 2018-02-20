import React from 'react'
import { graphql } from 'react-apollo'
import Formsy from 'formsy-react'

import { CreateGameMutation } from './queries'
import TextInput from './components/TextInput'

class CreateGame extends React.Component {
    constructor (props) {
        super(props)
        this.state = { canSubmit : false }
        this.submit = this.submit.bind(this)
        this.enableButton = this.enableButton.bind(this)
        this.disableButton = this.disableButton.bind(this)
    }

    enableButton = () => this.setState({ canSubmit: true })

    disableButton = () => this.setState({ canSubmit: false })

    submit = model => {
        this.props.mutate({
            variables: {
                name: model.name,
                description: model.description
            },
            refetchQueries: ['GamesQuery']
        })
    }

    render() {
        return (
            <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                <TextInput
                    title="Name"
                    name="name"
                    required />
                <TextInput
                    title="Description"
                    name="description"
                    required />
                <button type="submit" disabled={!this.state.canSubmit}>Create!</button>
            </Formsy>
        )
    }
}

const CreateGameWithMutation = graphql(CreateGameMutation)(CreateGame)

export default CreateGameWithMutation