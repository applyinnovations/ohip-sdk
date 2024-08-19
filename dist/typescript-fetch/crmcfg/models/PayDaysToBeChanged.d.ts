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
 * Request object for changing Pay Days.
 * @export
 * @interface PayDaysToBeChanged
 */
export interface PayDaysToBeChanged {
    /**
     * List of Pay Days.
     * @type {Array<PayDayType>}
     * @memberof PayDaysToBeChanged
     */
    payDays?: Array<PayDayType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof PayDaysToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PayDaysToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the PayDaysToBeChanged interface.
 */
export declare function instanceOfPayDaysToBeChanged(value: object): boolean;
export declare function PayDaysToBeChangedFromJSON(json: any): PayDaysToBeChanged;
export declare function PayDaysToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayDaysToBeChanged;
export declare function PayDaysToBeChangedToJSON(value?: PayDaysToBeChanged | null): any;
