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
 * Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation.
 * @export
 */
export declare const ReservationAllowedActionType: {
    readonly Cancel: "Cancel";
    readonly Move: "Move";
    readonly PreCharge: "PreCharge";
    readonly PostCharge: "PostCharge";
    readonly FacilitySchedule: "FacilitySchedule";
    readonly Upsell: "Upsell";
    readonly PreCheckIn: "PreCheckIn";
    readonly PostToNoShowCancel: "PostToNoShowCancel";
    readonly NoShow: "NoShow";
    readonly NameChange: "NameChange";
    readonly Discount: "Discount";
    readonly HouseKeeping: "HouseKeeping";
    readonly EnrollToPrimaryMembership: "EnrollToPrimaryMembership";
    readonly EnrollInProgress: "EnrollInProgress";
};
export type ReservationAllowedActionType = typeof ReservationAllowedActionType[keyof typeof ReservationAllowedActionType];
export declare function ReservationAllowedActionTypeFromJSON(json: any): ReservationAllowedActionType;
export declare function ReservationAllowedActionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationAllowedActionType;
export declare function ReservationAllowedActionTypeToJSON(value?: ReservationAllowedActionType | null): any;
