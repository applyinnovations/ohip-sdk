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
 * Indicates the type of folio to be created on the window.
 * @export
 */
export const FolioSplitType = {
    Taxtrx: 'TAXTRX',
    Revtrx: 'REVTRX'
} as const;
export type FolioSplitType = typeof FolioSplitType[keyof typeof FolioSplitType];


export function FolioSplitTypeFromJSON(json: any): FolioSplitType {
    return FolioSplitTypeFromJSONTyped(json, false);
}

export function FolioSplitTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioSplitType {
    return json as FolioSplitType;
}

export function FolioSplitTypeToJSON(value?: FolioSplitType | null): any {
    return value as any;
}
