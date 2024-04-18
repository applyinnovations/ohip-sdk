/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { GuestLastStayInfoType } from './GuestLastStayInfoType';
/**
 *
 * @export
 * @interface ResGuestAdditionalInfoType
 */
export interface ResGuestAdditionalInfoType {
    /**
     * Entry Date into the country. (Croatian Requirements).
     * @type {string}
     * @memberof ResGuestAdditionalInfoType
     */
    dateOfEntry?: string;
    /**
     * Guest Classification for the data export.
     * @type {string}
     * @memberof ResGuestAdditionalInfoType
     */
    guestClassification?: string;
    /**
     * Guest Status for the data export.
     * @type {string}
     * @memberof ResGuestAdditionalInfoType
     */
    guestStatus?: string;
    /**
     *
     * @type {GuestLastStayInfoType}
     * @memberof ResGuestAdditionalInfoType
     */
    lastStay?: GuestLastStayInfoType;
    /**
     * Entry Date into the country. (Croatian Requirements).
     * @type {string}
     * @memberof ResGuestAdditionalInfoType
     */
    nextDestination?: string;
    /**
     * Entry point into the country. (Croatian Requirements).
     * @type {string}
     * @memberof ResGuestAdditionalInfoType
     */
    portOfEntry?: string;
    /**
     * Preferred Room Type of the guest.
     * @type {string}
     * @memberof ResGuestAdditionalInfoType
     */
    preferredRoomType?: string;
    /**
     * Purpose of stay.
     * @type {string}
     * @memberof ResGuestAdditionalInfoType
     */
    purposeOfStay?: string;
}
/**
 * Check if a given object implements the ResGuestAdditionalInfoType interface.
 */
export declare function instanceOfResGuestAdditionalInfoType(value: object): boolean;
export declare function ResGuestAdditionalInfoTypeFromJSON(json: any): ResGuestAdditionalInfoType;
export declare function ResGuestAdditionalInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResGuestAdditionalInfoType;
export declare function ResGuestAdditionalInfoTypeToJSON(value?: ResGuestAdditionalInfoType | null): any;