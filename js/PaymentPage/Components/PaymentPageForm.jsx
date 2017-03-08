import React from "react";
import {connect} from "react-redux";


import {reduxForm} from "redux-form";

// export interface IProps {
//     router: Router.InjectedRouter;
//     searchStatus: LoadingStatus;
// }

export const ValidateDomainSearch = (values) => {
    let errors = {};
    let query = new DomainSearchQuery(values);

    if (!query.Contact && !query.Domain && !query.NameServer && !query.InfoUpdateDateRange) {
        if (!query.Contact) {
            errors.Contact = "required";
        }
        if (!query.Domain) {
            errors.Domain = "required";
        }
        if (!query.NameServer) {
            errors.NameServer = "required";
        }
        if (!query.InfoUpdateDateRange) {
            errors.InfoUpdateDateRange = "required";
        }
    }

    return errors;
};

// @connect((s: IMainState) => ({
//     initialValues: s.whois.search.query || new DomainSearchQuery(),
//     location: s.routing.locationBeforeTransitions,
//     searchStatus: s.whois.search.searchStatus,
// }))
// @reduxForm({
//     form: WhoisGlobalFormName,
//     destroyOnUnmount: false,
//     enableReinitialize: true,
//     validate: ValidateDomainSearch,
// })
export class PaymentPageForm extends React.Component {

    props: IProps & any;

    submit = (values) => {
        const search = new DomainSearchQuery(values);
        this.props.dispatch(RedirectTo(RoutingPaths.WhoisQuery(search)));
        WhoisController.Global.searchDomains(search);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.submit)}>
                <div class="b-report-info b-report-whois">

                    <DomainNameserver />
                    <DomainContactInfo />
                    <DomainDates />

                    <div class="b-report-info_col b-report-info_col-whois grid-offset-right">
                        <div class="info-entry "><span class="info-entry-label ">&nbsp; </span>&nbsp;</div>
                        <div class="info-entry "><span class="info-entry-label ">&nbsp; </span>&nbsp;</div>
                        <div class="info-entry "><span class="info-entry-label ">&nbsp; </span>
                            <button type="submit" class="btn btn-new btn-large" autoFocus={true}>
                                <FormattedMessage id="Search.SearchDomainForm.Render.Search"/>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}