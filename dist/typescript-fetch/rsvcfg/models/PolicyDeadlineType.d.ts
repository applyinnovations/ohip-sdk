/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Cancellation deadline, absolute or relative.
 * @export
 * @interface PolicyDeadlineType
 */
export interface PolicyDeadlineType {
    /**
     * Defines the absolute deadline. Either this or the offset attributes may be used.
     * @type {string}
     * @memberof PolicyDeadlineType
     */
    absoluteDeadline?: string;
    /**
     * Time on offset day the cancellation penalties applies.
     * @type {string}
     * @memberof PolicyDeadlineType
     */
    offsetDropTime?: string;
    /**
     * The number of days before arrival that allows cancellation without penalties.
     * @type {number}
     * @memberof PolicyDeadlineType
     */
    offsetFromArrival?: number;
    /**
     * The number of days after booking deposit must be paid.
     * @type {number}
     * @memberof PolicyDeadlineType
     */
    offsetFromBookingDate?: number;
}
/**
 * Check if a given object implements the PolicyDeadlineType interface.
 */
export declare function instanceOfPolicyDeadlineType(value: object): boolean;
export declare function PolicyDeadlineTypeFromJSON(json: any): PolicyDeadlineType;
export declare function PolicyDeadlineTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolicyDeadlineType;
export declare function PolicyDeadlineTypeToJSON(value?: PolicyDeadlineType | null): any;