/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { UniqueIDListType } from './UniqueIDListType';
/**
 * Summary of claim activity log information.
 * @export
 * @interface ClaimReservationInfoType
 */
export interface ClaimReservationInfoType {
    /**
     * Property where the stay associated with this claim.
     * @type {string}
     * @memberof ClaimReservationInfoType
     */
    hotelId?: string;
    /**
     *
     * @type {UniqueIDListType}
     * @memberof ClaimReservationInfoType
     */
    confirmationNo?: UniqueIDListType;
    /**
     * Arrival date for the stay associated with this claim.
     * @type {Date}
     * @memberof ClaimReservationInfoType
     */
    arrival?: Date;
    /**
     * Departure date for the stay associated with this claim.
     * @type {Date}
     * @memberof ClaimReservationInfoType
     */
    departure?: Date;
}
/**
 * Check if a given object implements the ClaimReservationInfoType interface.
 */
export declare function instanceOfClaimReservationInfoType(value: object): boolean;
export declare function ClaimReservationInfoTypeFromJSON(json: any): ClaimReservationInfoType;
export declare function ClaimReservationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClaimReservationInfoType;
export declare function ClaimReservationInfoTypeToJSON(value?: ClaimReservationInfoType | null): any;
