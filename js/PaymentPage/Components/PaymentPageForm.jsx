import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from 'redux-form';
import classNames from "classnames";

export const validate = (values) => {
    let errors = {};
    if (!values.email) {
        errors.email = "This field is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (!values.password) {
        errors.password = "This field is required";
    } else if (values.password.length < 10) {
        errors.password = "Password must be 10 or more chars";
    }

    return errors;
};

const RenderInput = ({input, label, type, meta: {touched, error}}) => (
    <label class="form-control error bg" class={classNames("form-control", {"error": touched && error}, "bg")}>
        <input {...input} placeholder={label}
               class="scentbird-input" type={type}/>
        {touched && ((error && <p class="validation-message">{error}</p>))}

    </label>
);

const RenderSelect = ({input, label, meta: {touched, error}, children}) => (
    <label class="form-control error bg" class={classNames("form-control", {"error": touched && error}, "bg")}>

        <select {...input} class="scentbird-input">
            {children}
        </select>

        {touched && ((error && <p class="validation-message">{error}</p>))}

    </label>
);



@connect((s) => ({}))
@reduxForm({
    form: "PaymentPageForm",
    destroyOnUnmount: false,
    enableReinitialize: true,
    validate: validate,
})
export class PaymentPageForm extends React.Component {

    submit = (values) => {
        // some submit action
    };

    handleClickCheckbox = (e) => {
        //this.setState({checked: e.target.checked});
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.submit)}>
                <div class="checkout">

                    <h2>Create account</h2>
                    <section>
                        <div class="column">
                            <Field name="email" type="email" component={RenderInput} label="Email address"/>
                        </div>
                        <div class="column">
                            <Field name="password" type="password" component={RenderInput} label="Password"/>
                        </div>
                    </section>

                    <h2>Shipping address</h2>

                    <section>
                        <div class="column">
                            <Field name="firstName" type="text" component={RenderInput} label="First name"/>
                        </div>
                        <div class="column">
                            <Field name="lastName" type="text" component={RenderInput} label="Last name"/>
                        </div>
                    </section>

                    <section>
                        <div class="column column-street">
                            <Field name="street" type="text" component={RenderInput} label="Street address"/>
                        </div>
                        <div class="column column-apt">
                            <Field name="apt" type="text" component={RenderInput} label="Apt/Suite"/>
                        </div>
                    </section>

                    <section>
                        <div class="column">
                            <Field name="zip" type="text" component={RenderInput} label="Zip"/>
                        </div>
                        <div class="column">
                            <Field name="state" component={RenderSelect} label="State">
                                <option>Select state</option>
                                <option>NEW YORK</option>
                                <option>qqq</option>
                            </Field>
                        </div>
                        <div class="column">
                            <Field name="city" component={RenderSelect} label="City">
                                <option>Select city</option>
                                <option>NEW YORK</option>
                                <option>qqq</option>
                            </Field>
                        </div>
                    </section>

                    <section>
                        <div class="column column-long">
                            <Field name="country" type="text" component={RenderInput} label="Country"/>
                        </div>
                    </section>

                    <section>
                        <div class="column">
                            <Field name="phone" type="text" component={RenderInput} label="Mobile number (Optional)"/>
                        </div>
                        <div class="column column-center">
                            We may send you special discounts and offers
                        </div>
                    </section>

                    <div class="billing-address-on">
                        <input type="checkbox" name="useAsBilling" id="useAsBilling" class="css-checkbox"
                               defaultChecked={true}
                               onClick={this.handleClickCheckbox}
                               />
                        <label htmlFor="useAsBilling" class="css-label">
                            Use this address as my billing address
                        </label>
                    </div>

                    <h2>Secure credit card payment</h2>

                    <div class="cc-wrapper">
                        <span class="b-icon icon-cc-sign"/>
                        <span class="cc-encryption">128-BIT ENCRYPTION. YOU’RE SAFE</span>
                        <span class="b-icon icon-cc-all"/>

                        <section class="credit-card-payment">
                            <div class="column cc-number">
                                <label class="form-control error a4P6">
                                    <input type="text"
                                           placeholder="Credit card number"
                                           name="ccNumber" value=""
                                           class="K2F3 scentbird-input"/>

                                    <p class="validation-message">This field is required</p>
                                </label>
                            </div>
                            <div class="column cc-security-code">
                                <label class="form-control error a4P6">
                                    <input type="text"
                                           placeholder="Security code"
                                           name="ccNumber" value=""
                                           class="K2F3 scentbird-input"/>
                                    <p class="validation-message">This field is required</p>
                                </label>
                            </div>
                            <div class="column cc-year">
                                <label class="form-control error a4P6">
                                    <select name="ccMonth" class="K2F3 scentbird-input">
                                        <option>Month</option>
                                        <option>NEW YORK</option>
                                        <option>yyy</option>
                                    </select>

                                    <p class="validation-message">This field is required</p>
                                </label>
                            </div>
                            <div class="column cc-month">
                                <label class="form-control error a4P6">
                                    <select name="ccYear" class="K2F3 scentbird-input">
                                        <option>Year</option>
                                        <option>NEW YORK</option>
                                        <option>uu</option>
                                    </select>

                                    <p class="validation-message">This field is required</p>
                                </label>
                            </div>
                            <div class="column cc-other">
                                <span>Exp.</span>
                            </div>
                        </section>
                    </div>

                    <div class="buttons">
                        <button class="btn btn-primary">BUY NOW</button>
                    </div>
                </div>
            </form>
        );
    }
}