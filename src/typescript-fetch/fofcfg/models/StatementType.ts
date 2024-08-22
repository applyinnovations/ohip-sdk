/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The Types of Statements that can be used on an Account Type.
 * @export
 */
export const StatementType = {
    BalanceForward: 'BalanceForward',
    IndividualOpenItems: 'IndividualOpenItems'
} as const;
export type StatementType = typeof StatementType[keyof typeof StatementType];


export function StatementTypeFromJSON(json: any): StatementType {
    return StatementTypeFromJSONTyped(json, false);
}

export function StatementTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatementType {
    return json as StatementType;
}

export function StatementTypeToJSON(value?: StatementType | null): any {
    return value as any;
}

