import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import classNames from "classnames";
let valid = require('card-validator');

const validate = (values) => {
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

    validateAddress(errors, values, shippingValues);
    validateAddress(errors, values, billingValues);


    if (!values.ccNumber) {
        errors.ccNumber = "This field is required";
    } else if (valid.number(values.ccNumber).isValid === false) {
        errors.ccNumber = "Invalid Credit Card number";
    }

    if (!values.ccCode) {
        errors.ccCode = "This field is required";
    } else if (values.ccCode === "111") {
        errors.ccCode = "Incorrect code";
    }

    if (!values.ccYear || values.ccYear === "Year") {
        errors.ccYear = "This field is required";
    }

    if (!values.ccMonth || values.ccMonth === "Month") {
        errors.ccMonth = "This field is required";
    }

    return errors;
};

const shippingValues = [
    "shippingfirstName",
    "shippinglastName",
    "shippingstreet",
    "shippingapt",
    "shippingzip",
    "shippingstate",
    "shippingcity",
    "shippingcountry",
    "shippingphone"
];

const billingValues = [
    "billingfirstName",
    "billinglastName",
    "billingstreet",
    "billingapt",
    "billingzip",
    "billingstate",
    "billingcity",
    "billingcountry",
    "billingphone"
];

const validateAddress = (errors, values, testValues) => {
    for (let value of testValues) {
        if (!values[value]) {
            if (value.includes("apt") || value.includes("phone")) {
                continue;
            }
            errors[value] = "This field is required";
        }
        if(value.includes("state") && values[value] === "Select state") {
            errors[value] = "This field is required";
        }
        if(value.includes("city") && values[value] === "Select city") {
            errors[value] = "This field is required";
        }
    }
};

const RenderInput = ({input, label, type, meta: {touched, error}, icon}) => (
    <label class={classNames("form-control", {"error": touched && error}, "bg")}>
        <input {...input} placeholder={label}
               class={classNames("scentbird-input", icon)} type={type}/>
        {touched && ((error && <p class="validation-message">{error}</p>))}

    </label>
);

const RenderSelect = ({input, label, meta: {touched, error}, children}) => (
    <label class={classNames("form-control", {"error": touched && error}, "bg")}>

        <select {...input} class="scentbird-input arrow-down">
            {children}
        </select>

        {touched && ((error && <p class="validation-message">{error}</p>))}

    </label>
);

const AccountForm = () => (
    <div>
        <h2>Create account</h2>
        <section>
            <div class="column">
                <Field name="email" type="email" component={RenderInput} label="Email address"/>
            </div>
            <div class="column">
                <Field name="password" type="password" component={RenderInput} label="Password"/>
            </div>
        </section>
    </div>
);

const AddressForm = ({fieldPrefix, title}) => (
    <div>
        <h2>{title}</h2>

        <section>
            <div class="column">
                <Field name={`${fieldPrefix}firstName`} type="text" component={RenderInput} label="First name"/>
            </div>
            <div class="column">
                <Field name={`${fieldPrefix}lastName`} type="text" component={RenderInput} label="Last name"/>
            </div>
        </section>

        <section>
            <div class="column column-street">
                <Field name={`${fieldPrefix}street`} type="text" component={RenderInput} label="Street address"/>
            </div>
            <div class="column column-apt">
                <Field name={`${fieldPrefix}apt`} type="text" component={RenderInput} label="Apt/Suite (Optional)"/>
            </div>
        </section>

        <section>
            <div class="column">
                <Field name={`${fieldPrefix}zip`} type="text" component={RenderInput} label="Zip"/>
            </div>
            <div class="column">
                <Field name={`${fieldPrefix}state`} component={RenderSelect} label="State">
                    <option>Select state</option>
                    <option>NEW YORK</option>
                    <option>qqq</option>
                </Field>
            </div>
            <div class="column">
                <Field name={`${fieldPrefix}city`} component={RenderSelect} label="City">
                    <option>Select city</option>
                    <option>NEW YORK</option>
                    <option>qqq</option>
                </Field>
            </div>
        </section>

        <section>
            <div class="column column-long">
                <Field name={`${fieldPrefix}country`} type="text" component={RenderInput} label="Country"/>
            </div>
        </section>

        <section>
            <div class="column">
                <Field name={`${fieldPrefix}phone`} type="text" component={RenderInput} label="Mobile number (Optional)"/>
            </div>
            <div class="column column-center">
                We may send you special discounts and offers
            </div>
        </section>
    </div>
);

const CreditCardForm = () => (
    <div>
        <h2>Secure credit card payment</h2>

        <div class="cc-wrapper">
            <span class="b-icon icon-cc-sign"/>
            <span class="cc-encryption">128-BIT ENCRYPTION. YOU’RE SAFE</span>
            <span class="b-icon icon-cc-all"/>

            <section class="credit-card-payment">
                <div class="column cc-number">
                    <Field name="ccNumber" type="text"
                           component={props =>
                                <RenderInput {...props} icon="question-circle-gray"
                                />}
                           label="Credit card number"
                           props={{icon: "question-circle-gray"}}/>

                </div>
                <div class="column cc-security-code">
                    <Field name="ccCode" type="text"
                           component={props =>
                        <RenderInput {...props}
                        />} label="Security code"/>

                    <span class="b-icon icon-cc-question"/>
                </div>
                <div class="column cc-year">
                    <Field name={`ccMonth`} component={RenderSelect} label="Month">
                        <option>Month</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </Field>
                </div>
                <div class="column cc-month">
                    <Field name={`ccYear`} component={RenderSelect} label="Year">
                        <option>Year</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>

                    </Field>
                </div>
                <div class="column cc-other">
                    <span>Exp.</span>
                </div>
            </section>
        </div>
    </div>
);


@connect((s) => ({}))
@reduxForm({
    form: "PaymentPageForm",
    destroyOnUnmount: false,
    enableReinitialize: true,
    validate: validate,
})
export class PaymentPageForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {showBilling: false};
    }

    submit = (values) => {
        // some submit action
    };

    handleClickCheckbox = () => {
        this.setState({showBilling: !this.state.showBilling});
    };

    render() {
        let billingAddressForm = null;
        if (this.state.showBilling) {
            billingAddressForm = <AddressForm fieldPrefix="billing" title="Billing address"/>
        }

        return (
            <form onSubmit={this.props.handleSubmit(this.submit)}>
                <div class="checkout">

                    <AccountForm/>

                    <AddressForm fieldPrefix="shipping" title="Shipping address"/>

                    {billingAddressForm}

                    <div class="billing-address-on">
                        <input type="checkbox" name="useAsBilling" id="useAsBilling" class="css-checkbox"
                               defaultChecked={true}
                               onClick={this.handleClickCheckbox}
                               />
                        <label htmlFor="useAsBilling" class="css-label">
                            Use this address as my billing address
                        </label>
                    </div>

                    <CreditCardForm/>

                    <div class="buttons">
                        <button class="btn btn-primary">BUY NOW</button>
                    </div>
                </div>
            </form>
        );
    }
}