/* tslint:disable */
/* eslint-disable */
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
 * The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status.
 * @export
 */
export const FolioStatusType = {
    Deposit: 'Deposit',
    Void: 'Void',
    Ok: 'Ok',
    Zero: 'Zero',
    Compress: 'Compress',
    Converted: 'Converted',
    Internal: 'Internal'
} as const;
export type FolioStatusType = typeof FolioStatusType[keyof typeof FolioStatusType];


export function FolioStatusTypeFromJSON(json: any): FolioStatusType {
    return FolioStatusTypeFromJSONTyped(json, false);
}

export function FolioStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioStatusType {
    return json as FolioStatusType;
}

export function FolioStatusTypeToJSON(value?: FolioStatusType | null): any {
    return value as any;
}

