/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Simple type for block status code's room status type and catering status type. Valid status values are Waitlist,Cancel,Lost,Refused,Actual,Inquiry,NonDeductInv,DeductInv and Referral.
 * @export
 */
export const BlockStatusCodeStatusType = {
    Waitlist: 'Waitlist',
    Cancel: 'Cancel',
    Lost: 'Lost',
    Refused: 'Refused',
    Actual: 'Actual',
    Inquiry: 'Inquiry',
    NonDeductInv: 'NonDeductInv',
    DeductInv: 'DeductInv',
    Referral: 'Referral'
} as const;
export type BlockStatusCodeStatusType = typeof BlockStatusCodeStatusType[keyof typeof BlockStatusCodeStatusType];


export function BlockStatusCodeStatusTypeFromJSON(json: any): BlockStatusCodeStatusType {
    return BlockStatusCodeStatusTypeFromJSONTyped(json, false);
}

export function BlockStatusCodeStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockStatusCodeStatusType {
    return json as BlockStatusCodeStatusType;
}

export function BlockStatusCodeStatusTypeToJSON(value?: BlockStatusCodeStatusType | null): any {
    return value as any;
}

