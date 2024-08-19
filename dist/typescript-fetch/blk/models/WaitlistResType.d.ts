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
 * Information regarding why reservation is being /has been waitlisted.
 * @export
 * @interface WaitlistResType
 */
export interface WaitlistResType {
    /**
     * Description why the reservation is being /has been waitlisted.
     * @type {string}
     * @memberof WaitlistResType
     */
    description?: string;
    /**
     * Waitlist Priority Code.
     * @type {string}
     * @memberof WaitlistResType
     */
    priorityCode?: string;
    /**
     * Waitlist priority Description.
     * @type {string}
     * @memberof WaitlistResType
     */
    priorityDescription?: string;
    /**
     * Waitlist Reason Code.
     * @type {string}
     * @memberof WaitlistResType
     */
    reasonCode?: string;
    /**
     * Waitlist Reason Description.
     * @type {string}
     * @memberof WaitlistResType
     */
    reasonDescription?: string;
    /**
     * Guest telephone number.
     * @type {string}
     * @memberof WaitlistResType
     */
    telephone?: string;
}
/**
 * Check if a given object implements the WaitlistResType interface.
 */
export declare function instanceOfWaitlistResType(value: object): boolean;
export declare function WaitlistResTypeFromJSON(json: any): WaitlistResType;
export declare function WaitlistResTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WaitlistResType;
export declare function WaitlistResTypeToJSON(value?: WaitlistResType | null): any;
