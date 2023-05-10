const { Component } = require("react");


export class Form extends Component {

    state = {
    name: '',
    number: '',
    }

    handleInputChange = event => {
    console.log(event.currentTarget.value);
    const { name, value } = event.currentTarget;
    this.setState({[name]: value});
  }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
      
        this.props.onSubmit(this.state);
        this.reset();

    }

    reset = () => {
        this.setState({name: '',
    number: '',})
    }



    render() {
        return <form action="" onSubmit={this.hanleSubmit}>
        <label htmlFor="">Name
          <input
        type="text"
        name="name"
        value={this.state.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={this.handleInputChange}
        />
        </label>
        <label htmlFor="">Number
          <input
  type="tel"
            name="number"
            value={this.state.number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputChange}
/>
        </label>
        <button type="submit">Add contacts</button>
       </form>
 
    }

}