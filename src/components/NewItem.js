import React , {Component} from 'react'

class NewItem extends Component {
    constructor(){
        super()
        this.state = {
            input:''
        }
    }

    handleChange(e){
        this.setState({
            input: e.target.value
        })
    }

    handleAdd = () => {
        this.props.addItem(this.state.input)
        this.setState({input:''})
    }


    render(){
        return(
            <div>
                <input value={this.state.input} placeholder='Item' onChange={e => this.handleChange(e)}/>
                <button onClick={this.handleAdd}>add</button>
            </div>
        )
    }
}

export default NewItem