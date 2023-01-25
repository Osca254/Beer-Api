import React, { Component } from 'react';
import axios from 'axios';

class AddForm extends Component {
    state = {
        name: '',
        description: '',
        image_url: '',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://api.punkapi.com/v2/beers', {
            name: this.state.name,
            description: this.state.description,
            image_url: this.state.image_url
        })
        .then(response => {
            // Get the new beer's data from the response
            const newBeer = response.data;
            
            // Use the spread operator to create a new array with the new beer added
            const updatedData = [...this.state.data, newBeer];
            
            // Update the state with the new data array
            this.setState({
                data: updatedData,
                filteredData: updatedData
            });
            // Clear the form fields
            this.setState({
                name: '',
                description: '',
                image_url: '',
            });
        })
        .catch(error => {
            // Handle any errors that occur
            console.error(error);
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="image_url"
                    placeholder="Image URL"
                    value={this.state.image_url}
                    onChange={this.handleChange}
                />
                <button type="submit">Add Beer</button>
            </form>
        );
    }
}

export default AddForm;
