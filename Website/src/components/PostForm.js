import React, { Component } from 'react'
import { Form} from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';


class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            info: '',
            skill: props.skill
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault() //avoid page refresh

        //create a new form object that contain values from the form
        const newForm = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            info: this.state.info,
            skill: this.state.skill

        }
        // //make the post
        // axios.post('http://localhost:3000/agents/forms/add', newForm)
        //     .then(res => console.log(res.data))
        //     .catch ((err) => {
        //         console.log("ERROR FOUND:");
        //         console.log(err)});
        // console.log(this.state)
    }

    clickHandler = e => {
        const newForm = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            info: this.state.info,
            skill: this.state.skill

        }
        //make the post
        axios.post('http://localhost:3000/agents/request/add', newForm)
            .then(res => console.log(res.data))
            .catch ((err) => {
                console.log("ERROR FOUND:");
                console.log(err)});
        window.location.href= 'startchat';
    }

    render() {
        const { firstName, lastName, email, info } = this.state;
        return (
            <React.Fragment>
                <div className='mt-3'>
                        <Form onSubmit={this.submitHandler}>
                            {/* <div className="form-group col">
                        <label for="Salutations" className="col-sm-6 col-form-label">Salutations</label>
                        <div className="col-sm-2">
                            <select
                                onChange={e => handleItemChange(e)}
                                classNameName="browser-default custom-select" >
                                {
                                    Item.map((address, key) => <option key={key} value={key}>{address}</option>)
                                }
                            </select>
                        </div>
                    </div> */}
                            <div className="form-group col">
                                <label htmlFor="firstname" className="col-sm-6 col-form-label">First Name *</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name"
                                        defaultValue={firstName}
                                        onChange={this.changeHandler}
                                        required />
                                </div>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="lastname" className="col-sm-6 col-form-label">Last Name *</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name"
                                        defaultValue={lastName}
                                        onChange={this.changeHandler}
                                        required />
                                </div>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="email" className="col-sm-6 col-form-label">Email *</label>
                                <div className="col-sm-6">
                                    <input type="email" className="form-control" id="email" name='email' placeholder="Email"
                                        defaultValue={email}
                                        onChange={this.changeHandler}
                                        required />
                                </div>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="email" className="col-sm-6 col-form-label">Any Further Info You Can Give Us</label>
                                <div className="col-sm-6">
                                    <textarea id="info" rows="4" cols="50" placeholder="Information" name='info'
                                        defaultValue={info}
                                        onChange={this.changeHandler}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-group col">
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1"
                                            required
                                        // value={agreeTandC}
                                        // onChange={this.changeHandler}
                                        />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            I agree to the Terms and Conditions. *
                            </label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group col">
                                <div className="col-sm-10">
                                    <Link to='/startchat'>
                                    <button onClick={this.clickHandler} type="submit" className="btn btn-primary" id="submitbutton"
                                        style={{ backgroundColor: "white", color: "black", borderColor: "lightgray" }}>
                                        Connect</button>
                                    </Link>
                                </div>
                            </div>
                        </Form>
                </div>
            </React.Fragment>
        )
    }
}

export default PostForm;

