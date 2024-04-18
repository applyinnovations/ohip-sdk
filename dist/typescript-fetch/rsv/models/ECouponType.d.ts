/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { UniqueIDType } from './UniqueIDType';
/**
 * Reservation eCoupon Type Information.
 * @export
 * @interface ECouponType
 */
export interface ECouponType {
    /**
     * Determines whether the eCoupon is attached through the Rate Code or not.
     * @type {boolean}
     * @memberof ECouponType
     */
    autoAttached?: boolean;
    /**
     * Code to attach the eCoupon to Reservation.
     * @type {string}
     * @memberof ECouponType
     */
    code?: string;
    /**
     * Description of the eCoupon attached to the Reservation.
     * @type {string}
     * @memberof ECouponType
     */
    description?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ECouponType
     */
    eCouponId?: UniqueIDType;
    /**
     * Assigned Quantity for the eCoupon when attached to Reservation.
     * @type {number}
     * @memberof ECouponType
     */
    issuedQuantity?: number;
    /**
     * Rate plan of the attached eCoupon to Reservation.
     * @type {string}
     * @memberof ECouponType
     */
    ratePlanCode?: string;
    /**
     * Reason for attaching/modifing eCoupon.
     * @type {string}
     * @memberof ECouponType
     */
    reason?: string;
    /**
     * Used Quantity of the eCoupon for the Reservation.
     * @type {number}
     * @memberof ECouponType
     */
    usedQuantity?: number;
    /**
     * Determines whether this eCoupon is eligible for welcome offer or not.
     * @type {boolean}
     * @memberof ECouponType
     */
    welcomeOffer?: boolean;
}
/**
 * Check if a given object implements the ECouponType interface.
 */
export declare function instanceOfECouponType(value: object): boolean;
export declare function ECouponTypeFromJSON(json: any): ECouponType;
export declare function ECouponTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECouponType;
export declare function ECouponTypeToJSON(value?: ECouponType | null): any;