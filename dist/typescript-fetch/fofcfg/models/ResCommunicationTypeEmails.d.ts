/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { EmailInfoType } from './EmailInfoType';
/**
 * List of email address for the customer.
 * @export
 * @interface ResCommunicationTypeEmails
 */
export interface ResCommunicationTypeEmails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ResCommunicationTypeEmails
     */
    count?: number;
    /**
     * Collection of Detailed information on an eMail address for the customer.
     * @type {Array<EmailInfoType>}
     * @memberof ResCommunicationTypeEmails
     */
    emailInfo?: Array<EmailInfoType>;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ResCommunicationTypeEmails
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ResCommunicationTypeEmails
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the ResCommunicationTypeEmails interface.
 */
export declare function instanceOfResCommunicationTypeEmails(value: object): boolean;
export declare function ResCommunicationTypeEmailsFromJSON(json: any): ResCommunicationTypeEmails;
export declare function ResCommunicationTypeEmailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResCommunicationTypeEmails;
export declare function ResCommunicationTypeEmailsToJSON(value?: ResCommunicationTypeEmails | null): any;
