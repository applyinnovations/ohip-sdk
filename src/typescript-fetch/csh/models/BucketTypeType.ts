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
 * Fiscal Bucket Type.
 * @export
 */
export const BucketTypeType = {
    Default: 'Default',
    Fiscal: 'Fiscal'
} as const;
export type BucketTypeType = typeof BucketTypeType[keyof typeof BucketTypeType];


export function BucketTypeTypeFromJSON(json: any): BucketTypeType {
    return BucketTypeTypeFromJSONTyped(json, false);
}

export function BucketTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BucketTypeType {
    return json as BucketTypeType;
}

export function BucketTypeTypeToJSON(value?: BucketTypeType | null): any {
    return value as any;
}

