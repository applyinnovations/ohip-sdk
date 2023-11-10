/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { MembershipType } from './MembershipType';
import type { VIPStatusType } from './VIPStatusType';
/**
 *
 * @export
 * @interface AlertGuestInfoType
 */
export interface AlertGuestInfoType {
    /**
     * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
     * @type {Date}
     * @memberof AlertGuestInfoType
     */
    birthDate?: Date;
    /**
     * Indicates the date of birth as masked.
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    birthDateMasked?: string;
    /**
     * Additional alert information regarding the membership of the guest.
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    comments?: string;
    /**
     * Guest Name.
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    guestName?: string;
    /**
     *
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    guestPreferredLanguage?: string;
    /**
     * Hotel code of the last stay location of the guest.
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    lastHotelCode?: string;
    /**
     * Last stay date at the property.
     * @type {Date}
     * @memberof AlertGuestInfoType
     */
    lastStayDate?: Date;
    /**
     *
     * @type {MembershipType}
     * @memberof AlertGuestInfoType
     */
    membership?: MembershipType;
    /**
     * Additional alert information regarding the guest.
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    preference?: string;
    /**
     * Additional mandatory alert information regarding the guest preferences.
     * @type {string}
     * @memberof AlertGuestInfoType
     */
    preference2?: string;
    /**
     * Holds total number of days that the guest have stayed in the properties for the same brand.
     * @type {number}
     * @memberof AlertGuestInfoType
     */
    totalBrandStay?: number;
    /**
     * Holds total number of days that the guest have stayed in the property.
     * @type {number}
     * @memberof AlertGuestInfoType
     */
    totalStay?: number;
    /**
     *
     * @type {VIPStatusType}
     * @memberof AlertGuestInfoType
     */
    vipStatus?: VIPStatusType;
}
/**
 * Check if a given object implements the AlertGuestInfoType interface.
 */
export declare function instanceOfAlertGuestInfoType(value: object): boolean;
export declare function AlertGuestInfoTypeFromJSON(json: any): AlertGuestInfoType;
export declare function AlertGuestInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertGuestInfoType;
export declare function AlertGuestInfoTypeToJSON(value?: AlertGuestInfoType | null): any;
