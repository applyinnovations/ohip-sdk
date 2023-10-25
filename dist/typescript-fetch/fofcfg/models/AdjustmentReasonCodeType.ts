/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Defines values for Adjustment reason codes. e.g. ADJ for adjustment, COR for correction, DEL for deletion.
 * @export
 */
export const AdjustmentReasonCodeType = {
    Adjustment: 'Adjustment',
    Correction: 'Correction',
    Deletion: 'Deletion',
    ServiceRecovery: 'ServiceRecovery',
    CreditBill: 'CreditBill'
} as const;
export type AdjustmentReasonCodeType = typeof AdjustmentReasonCodeType[keyof typeof AdjustmentReasonCodeType];


export function AdjustmentReasonCodeTypeFromJSON(json: any): AdjustmentReasonCodeType {
    return AdjustmentReasonCodeTypeFromJSONTyped(json, false);
}

export function AdjustmentReasonCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdjustmentReasonCodeType {
    return json as AdjustmentReasonCodeType;
}

export function AdjustmentReasonCodeTypeToJSON(value?: AdjustmentReasonCodeType | null): any {
    return value as any;
}

