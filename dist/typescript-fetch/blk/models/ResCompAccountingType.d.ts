/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Information regarding comp accounting on the reservation.
 * @export
 * @interface ResCompAccountingType
 */
export interface ResCompAccountingType {
    /**
     * ID of the employee who will act as the host for this guest.
     * @type {string}
     * @memberof ResCompAccountingType
     */
    authorizer?: string;
    /**
     * Indicates if the Comp Billing/posting Exist
     * @type {string}
     * @memberof ResCompAccountingType
     */
    compPostings?: string;
    /**
     * Code used to identify the casino comp type and ranking of a guest.
     * @type {string}
     * @memberof ResCompAccountingType
     */
    compType?: string;
}
/**
 * Check if a given object implements the ResCompAccountingType interface.
 */
export declare function instanceOfResCompAccountingType(value: object): boolean;
export declare function ResCompAccountingTypeFromJSON(json: any): ResCompAccountingType;
export declare function ResCompAccountingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResCompAccountingType;
export declare function ResCompAccountingTypeToJSON(value?: ResCompAccountingType | null): any;
