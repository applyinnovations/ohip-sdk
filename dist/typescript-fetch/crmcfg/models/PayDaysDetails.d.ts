/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { PayDayType } from './PayDayType';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching Pay Days.
 * @export
 * @interface PayDaysDetails
 */
export interface PayDaysDetails {
    /**
     * List of Pay Days.
     * @type {Array<PayDayType>}
     * @memberof PayDaysDetails
     */
    payDays?: Array<PayDayType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof PayDaysDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PayDaysDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the PayDaysDetails interface.
 */
export declare function instanceOfPayDaysDetails(value: object): boolean;
export declare function PayDaysDetailsFromJSON(json: any): PayDaysDetails;
export declare function PayDaysDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayDaysDetails;
export declare function PayDaysDetailsToJSON(value?: PayDaysDetails | null): any;
