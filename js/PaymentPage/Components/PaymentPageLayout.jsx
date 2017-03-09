import React from "react";

export class PaymentPageLayout extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {

        return (
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
                                You will receive an email confirmation when recipient accepts your gift. Scentbird ships between the 15th and the 18th of every month. Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery.
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
                                    <label class="form-control _3FFR a4P6">
                                        <input type="text"
                                               placeholder="Email address"
                                               name="email" value=""
                                               tabIndex="0" class="K2F3 scentbird-input"/>
                                        <p class="validation-message">This field is required</p>
                                    </label>
                                </div>
                                <div class="column">
                                    <label class="form-control _3FFR a4P6">
                                        <input type="password"
                                               placeholder="Password"
                                               name="password" value=""
                                               class="K2F3 scentbird-input"/>
                                        <p class="validation-message">This field is required</p>
                                    </label>
                                </div>
                            </section>

                            <h2>Shipping address</h2>

                            <section>
                                <div class="column">
                                    <label class="form-control _3FFR a4P6">
                                        <input type="text"
                                               placeholder="First name"
                                               name="firstName" value=""
                                               class="K2F3 scentbird-input"/>

                                            <p class="validation-message">This field is required</p>
                                    </label>
                                </div>
                                <div class="column">
                                    <label class="form-control _3FFR a4P6">
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
                                    <label class="form-control _3FFR a4P6">
                                        <input type="text"
                                               placeholder="Street address"
                                               name="street" value=""
                                               class="K2F3 scentbird-input"/>
                                        <p class="validation-message">This field is required</p>
                                    </label>
                                </div>
                                <div class="column column-apt">
                                    <label class="form-control _3FFR a4P6">
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
                                    <label class="form-control _3FFR a4P6">
                                        <input type="text"
                                               placeholder="Zip"
                                               name="zip" value=""
                                               class="K2F3 scentbird-input"/>

                                            <p class="validation-message">This field is required</p>
                                    </label>
                                </div>
                                <div class="column">
                                    <label class="form-control _3FFR a4P6">
                                        <select name="state" class="K2F3 scentbird-input">
                                            <option>Select state</option>
                                            <option>NEW YORK</option>
                                            <option>qqq</option>
                                        </select>

                                        <p class="validation-message">This field is required</p>
                                    </label>
                                </div>
                                <div class="column">
                                    <label class="form-control _3FFR a4P6">
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
                                    <label class="form-control _3FFR a4P6">
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
                                    <label class="form-control _3FFR a4P6">
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
                                    <label htmlFor="checkboxG5" class="css-label">Use this address as my billing address</label>
                            </div>

                            <h2>Secure credit card payment</h2>

                            <div class="cc-wrapper">
                                <span class="b-icon icon-cc-sign"/>
                                <span class="cc-encryption">128-BIT ENCRYPTION.     YOU’RE SAFE</span>
                                <span class="b-icon icon-cc-all"/>

                                <section class="credit-card-payment">
                                    <div class="column cc-number">
                                        <label class="form-control _3FFR a4P6">
                                            <input type="text"
                                                   placeholder="Credit card number"
                                                   name="ccNumber" value=""
                                                   class="K2F3 scentbird-input"/>

                                                <p class="validation-message">This field is required</p>
                                        </label>
                                    </div>
                                    <div class="column cc-security-code">
                                        <label class="form-control _3FFR a4P6">
                                            <input type="text"
                                                   placeholder="Security code"
                                                   name="ccNumber" value=""
                                                   class="K2F3 scentbird-input"/>
                                                <p class="validation-message">This field is required</p>
                                        </label>
                                    </div>
                                    <div class="column cc-year">
                                        <label class="form-control _3FFR a4P6">
                                            <select name="ccMonth" class="K2F3 scentbird-input">
                                                <option>Month</option>
                                                <option>NEW YORK</option>
                                                <option>yyy</option>
                                            </select>

                                            <p class="validation-message">This field is required</p>
                                        </label>
                                    </div>
                                    <div class="column cc-month">
                                        <label class="form-control _3FFR a4P6">
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
                            You will receive an email confirmation when recipient accepts your gift. Scentbird ships between the 15th and the 18th of every month. Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery.
                        </p>
                        <div class="bird-on-bike"></div>
                    </div>
                    <div class="cleared"></div>
                </div>
            </div>
        );
    }
}