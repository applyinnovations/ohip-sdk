/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Indicates any Updates/Changes on the reservation as well as Reservation Cancellation are not allowed.
 * @export
 */
export const ResAccessRestrictionType = {
    Change: 'Change',
    Cancel: 'Cancel',
    ChangeOrCancel: 'ChangeOrCancel'
} as const;
export type ResAccessRestrictionType = typeof ResAccessRestrictionType[keyof typeof ResAccessRestrictionType];


export function ResAccessRestrictionTypeFromJSON(json: any): ResAccessRestrictionType {
    return ResAccessRestrictionTypeFromJSONTyped(json, false);
}

export function ResAccessRestrictionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResAccessRestrictionType {
    return json as ResAccessRestrictionType;
}

export function ResAccessRestrictionTypeToJSON(value?: ResAccessRestrictionType | null): any {
    return value as any;
}

