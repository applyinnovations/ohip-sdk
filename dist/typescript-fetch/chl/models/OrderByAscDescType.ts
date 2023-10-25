/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const OrderByAscDescType = {
    Asc: 'Asc',
    Desc: 'Desc'
} as const;
export type OrderByAscDescType = typeof OrderByAscDescType[keyof typeof OrderByAscDescType];


export function OrderByAscDescTypeFromJSON(json: any): OrderByAscDescType {
    return OrderByAscDescTypeFromJSONTyped(json, false);
}

export function OrderByAscDescTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderByAscDescType {
    return json as OrderByAscDescType;
}

export function OrderByAscDescTypeToJSON(value?: OrderByAscDescType | null): any {
    return value as any;
}

