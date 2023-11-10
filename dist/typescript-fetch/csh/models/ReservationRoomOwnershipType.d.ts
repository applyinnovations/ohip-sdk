/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Indicates if the assigned reservation room is an Owner/Referral or Regular room.
 * @export
 */
export declare const ReservationRoomOwnershipType: {
    readonly Owner: "Owner";
    readonly Referral: "Referral";
    readonly Regular: "Regular";
};
export type ReservationRoomOwnershipType = typeof ReservationRoomOwnershipType[keyof typeof ReservationRoomOwnershipType];
export declare function ReservationRoomOwnershipTypeFromJSON(json: any): ReservationRoomOwnershipType;
export declare function ReservationRoomOwnershipTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationRoomOwnershipType;
export declare function ReservationRoomOwnershipTypeToJSON(value?: ReservationRoomOwnershipType | null): any;
