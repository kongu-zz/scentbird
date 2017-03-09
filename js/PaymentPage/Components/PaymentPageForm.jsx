import React from "react";
import {connect} from "react-redux";
import { Field, reduxForm } from 'redux-form';
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
    // let query = new DomainSearchQuery(values);
    //
    // if (!query.Contact && !query.Domain && !query.NameServer && !query.InfoUpdateDateRange) {
    //     if (!query.Contact) {
    //         errors.Contact = "required";
    //     }
    //     if (!query.Domain) {
    //         errors.Domain = "required";
    //     }
    //     if (!query.NameServer) {
    //         errors.NameServer = "required";
    //     }
    //     if (!query.InfoUpdateDateRange) {
    //         errors.InfoUpdateDateRange = "required";
    //     }
    // }

    return errors;
};

const renderInput = ({ input, label, type, meta: { touched, error } }) => (
    <label class="form-control error bg" class={classNames("form-control", {"error": touched && error}, "bg")}>
        <input {...input} placeholder={label}
               class="scentbird-input" type={type}/>
        {touched && ((error && <p class="validation-message">{error}</p>))}

    </label>
);

@connect((s) => ({

}))
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

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.submit)}>
                <div class="container">

                    <div class="wrapper">
                        <div class="header">
                            <div class="logo"></div>
                        </div>
                        <div class="content-header">
                            <div class="title">
                                MONTHLY SUBSCRIPTION
                            </div>
                            <div class="slogan">
                                Billed monthly. Renews automatically, cancel any time. Free shipping.
                            </div>
                        </div>
                        <div class="aside">
                            <div class="order">
                                <div class="free-perfume-product"/>
                                <div class="total-body">
                                    <table>
                                        <colgroup>
                                            <col/>
                                            <col/>
                                        </colgroup>
                                        <tbody>
                                        <tr>
                                            <td>Monthly subscription</td>
                                            <td>$14.95</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                            <td>FREE</td>
                                        </tr>
                                        <tr>
                                            <td>Tax</td>
                                            <td>$2.35</td>
                                        </tr>
                                        <tr>
                                            <td>Discount</td>
                                            <td class="discount">-$5</td>
                                        </tr>
                                        <tr>
                                            <td>Credit (Balance $100)</td>
                                            <td>$50</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="total-final">
                                    <table>
                                        <colgroup>
                                            <col/>
                                            <col/>
                                        </colgroup>
                                        <tbody>
                                        <tr>
                                            <td>TOTAL</td>
                                            <td>$25.00</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="coupon-code">Have a <a href="#">coupon code</a>?</div>
                            </div>
                            <div class="picture picture-desktop">
                                <div class="bird-on-bike"></div>
                                <p>
                                    You will receive an email confirmation when recipient accepts your gift.
                                    Scentbird ships between the 15th and the 18th of every month.
                                    Recipient will receive an email confirmation of shipment every month.
                                    Please allow 5-7 days for delivery.
                                </p>

                            </div>
                        </div>
                        <div class="content">
                            <div class="content-header content-header-desktop">
                                <div class="title">
                                    MONTH-TO-MONTH SUBSCRIPTION
                                </div>
                                <div class="slogan">
                                    Billed monthly. Renews automatically, cancel any time. Free shipping.
                                </div>
                            </div>
                            <div class="checkout">

                                <h2>Create account</h2>
                                <section>
                                    <div class="column">
                                        <Field name="email" type="email" component={renderInput} label="Email address"/>
                                    </div>
                                    <div class="column">
                                        <Field name="password" type="password" component={renderInput} label="Password"/>
                                        {/*<label class="form-control error a4P6">*/}
                                            {/*<Field name="password" placeholder="Password"*/}
                                                   {/*class="K2F3 scentbird-input" component="input" type="password"/>*/}
                                            {/*/!*<input type="password"*/}
                                                   {/*placeholder="Password"*/}
                                                   {/*name="password" value=""*/}
                                                   {/*class="K2F3 scentbird-input"/>*!/*/}
                                            {/*<p class="validation-message">This field is required</p>*/}
                                        {/*</label>*/}
                                    </div>
                                </section>

                                <h2>Shipping address</h2>

                                <section>
                                    <div class="column">
                                        <label class="form-control error a4P6">
                                            <input type="text"
                                                   placeholder="First name"
                                                   name="firstName" value=""
                                                   class="K2F3 scentbird-input"/>

                                            <p class="validation-message">This field is required</p>
                                        </label>
                                    </div>
                                    <div class="column">
                                        <label class="form-control error a4P6">
                                            <input type="text"
                                                   placeholder="Last name"
                                                   name="lastName" value=""
                                                   class="K2F3 scentbird-input"/>

                                            <p class="validation-message">This field is required</p>
                                        </label>
                                    </div>
                                </section>

                                <section>
                                    <div class="column column-street">
                                        <label class="form-control error a4P6">
                                            <input type="text"
                                                   placeholder="Street address"
                                                   name="street" value=""
                                                   class="K2F3 scentbird-input"/>
                                            <p class="validation-message">This field is required</p>
                                        </label>
                                    </div>
                                    <div class="column column-apt">
                                        <label class="form-control error a4P6">
                                            <input type="text"
                                                   placeholder="Apt/Suite (Optional)"
                                                   name="apt" value=""
                                                   class="K2F3 scentbird-input"/>
                                            <p class="validation-message">This field is required</p>
                                        </label>
                                    </div>
                                </section>

                                <section>
                                    <div class="column">
                                        <label class="form-control error a4P6">
                                            <input type="text"
                                                   placeholder="Zip"
                                                   name="zip" value=""
                                                   class="K2F3 scentbird-input"/>

                                            <p class="validation-message">This field is required</p>
                                        </label>
                                    </div>
                                    <div class="column">
                                        <label class="form-control error a4P6">
                                            <select name="state" class="K2F3 scentbird-input">
                                                <option>Select state</option>
                                                <option>NEW YORK</option>
                                                <option>qqq</option>
                                            </select>

                                            <p class="validation-message">This field is required</p>
                                        </label>
                                    </div>
                                    <div class="column">
                                        <label class="form-control error a4P6">
                                            <select name="city" class="K2F3 scentbird-input">
                                                <option>Select city</option>
                                                <option>NEW YORK</option>
                                                <option>www</option>
                                            </select>

                                            <p class="validation-message">This field is required</p>
                                        </label>
                                    </div>
                                </section>

                                <section>
                                    <div class="column column-long">
                                        <label class="form-control error a4P6">
                                            <input type="text"
                                                   placeholder="Country"
                                                   name="country" value=""
                                                   class="K2F3 scentbird-input"/>

                                            <p class="validation-message">This field is required</p>
                                        </label>
                                    </div>
                                </section>

                                <section>
                                    <div class="column">
                                        <label class="form-control error a4P6">
                                            <input type="text"
                                                   placeholder="Mobile number (Optional)"
                                                   name="phone" value=""
                                                   class="K2F3 scentbird-input"/>

                                        </label>
                                    </div>
                                    <div class="column column-center">
                                        We may send you special discounts and offers
                                    </div>
                                </section>

                                <div class="billing-address-on">
                                    <input type="checkbox" name="checkboxG5" id="checkboxG5" class="css-checkbox" checked="checked"/>
                                    <label htmlFor="checkboxG5" class="css-label">
                                        Use this address as my billing address
                                    </label>
                                </div>

                                <h2>Secure credit card payment</h2>

                                <div class="cc-wrapper">
                                    <span class="b-icon icon-cc-sign"/>
                                    <span class="cc-encryption">128-BIT ENCRYPTION.     YOU’RE SAFE</span>
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


                        </div>
                        <div class="picture">
                            <p>
                                You will receive an email confirmation when recipient accepts your gift.
                                Scentbird ships between the 15th and the 18th of every month.
                                Recipient will receive an email confirmation of shipment every month.
                                Please allow 5-7 days for delivery.
                            </p>
                            <div class="bird-on-bike"></div>
                        </div>
                        <div class="cleared"></div>
                    </div>
                </div>
            </form>
        );
    }
}