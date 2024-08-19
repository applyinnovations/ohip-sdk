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
 * Apply changes to block reservations that are staying in the hotel within the date range specified.
 * @export
 * @interface BlockReservationsCriteriaTypeStayOn
 */
export interface BlockReservationsCriteriaTypeStayOn {
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof BlockReservationsCriteriaTypeStayOn
     */
    end?: string;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof BlockReservationsCriteriaTypeStayOn
     */
    start?: string;
}
/**
 * Check if a given object implements the BlockReservationsCriteriaTypeStayOn interface.
 */
export declare function instanceOfBlockReservationsCriteriaTypeStayOn(value: object): boolean;
export declare function BlockReservationsCriteriaTypeStayOnFromJSON(json: any): BlockReservationsCriteriaTypeStayOn;
export declare function BlockReservationsCriteriaTypeStayOnFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockReservationsCriteriaTypeStayOn;
export declare function BlockReservationsCriteriaTypeStayOnToJSON(value?: BlockReservationsCriteriaTypeStayOn | null): any;
