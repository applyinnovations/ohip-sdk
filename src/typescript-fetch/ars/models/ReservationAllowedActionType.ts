/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation.
 * @export
 */
export const ReservationAllowedActionType = {
    Cancel: 'Cancel',
    Move: 'Move',
    PreCharge: 'PreCharge',
    PostCharge: 'PostCharge',
    FacilitySchedule: 'FacilitySchedule',
    Upsell: 'Upsell',
    PreCheckIn: 'PreCheckIn',
    PostToNoShowCancel: 'PostToNoShowCancel',
    NoShow: 'NoShow',
    NameChange: 'NameChange',
    Discount: 'Discount',
    EnrollToPrimaryMembership: 'EnrollToPrimaryMembership',
    EnrollInProgress: 'EnrollInProgress'
} as const;
export type ReservationAllowedActionType = typeof ReservationAllowedActionType[keyof typeof ReservationAllowedActionType];


export function ReservationAllowedActionTypeFromJSON(json: any): ReservationAllowedActionType {
    return ReservationAllowedActionTypeFromJSONTyped(json, false);
}

export function ReservationAllowedActionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationAllowedActionType {
    return json as ReservationAllowedActionType;
}

export function ReservationAllowedActionTypeToJSON(value?: ReservationAllowedActionType | null): any {
    return value as any;
}
