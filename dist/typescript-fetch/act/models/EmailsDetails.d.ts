/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { EmailsFetchedType } from './EmailsFetchedType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for FetchEmails Operation.
 * @export
 * @interface EmailsDetails
 */
export interface EmailsDetails {
    /**
     *
     * @type {EmailsFetchedType}
     * @memberof EmailsDetails
     */
    emailsFetched?: EmailsFetchedType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof EmailsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof EmailsDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the EmailsDetails interface.
 */
export declare function instanceOfEmailsDetails(value: object): boolean;
export declare function EmailsDetailsFromJSON(json: any): EmailsDetails;
export declare function EmailsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailsDetails;
export declare function EmailsDetailsToJSON(value?: EmailsDetails | null): any;