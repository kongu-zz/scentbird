import React from "react";
import {PaymentPageForm} from "./PaymentPageForm";
import classNames from "classnames";

const HeaderLogo = () => (
    <div class="header">
        <div class="logo"></div>
    </div>
);

const ContentHeader = ({title, isDesktop = false}) => (
    <div class={classNames("content-header", {"content-header-desktop": isDesktop})}>
        <div class="title">
            {title}
        </div>
        <div class="slogan">
            Billed monthly. Renews automatically, cancel any time. Free shipping.
        </div>
    </div>
);

const Aside = () => (
    <div class="aside">
        <div class="order">
            <FreePerfume/>
            <TotalBody/>
            <TotalFinal/>
            <CouponCode/>
        </div>
        <div class="picture picture-desktop">
            <BirdOnBike/>
            <BirdText/>
        </div>
    </div>
);

const FreePerfume = () => (
    <div class="free-perfume-product"/>
);

const TotalBody = () => (
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
);

const TotalFinal = () => (
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
);

const CouponCode = () => (
    <div class="coupon-code">Have a <a href="#">coupon code</a>?</div>
);


const BirdOnBike = () => (
    <div class="bird-on-bike"></div>
);

const BirdText = () => (
    <p>
        You will receive an email confirmation when recipient accepts your gift.
        Scentbird ships between the 15th and the 18th of every month.
        Recipient will receive an email confirmation of shipment every month.
        Please allow 5-7 days for delivery.
    </p>
);

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
                    <HeaderLogo/>
                    <ContentHeader title="MONTHLY SUBSCRIPTION"/>

                    <Aside/>
                    <div class="content">
                        <ContentHeader title="MONTH-TO-MONTH SUBSCRIPTION" isDesktop={true}/>

                        <PaymentPageForm/>
                    </div>
                    <div class="picture">
                        <BirdText/>
                        <BirdOnBike/>
                    </div>
                    <div class="cleared"></div>
                </div>
            </div>
        );
    }
}