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
 * To specify price will be billed per reservation. This is allowed only if Fee type is Transaction or Fax.
 * @export
 */
export const ContractPriceType = {
    FlatFee: 'FlatFee',
    Property: 'Property',
    Room: 'Room',
    Reservation: 'Reservation'
} as const;
export type ContractPriceType = typeof ContractPriceType[keyof typeof ContractPriceType];


export function ContractPriceTypeFromJSON(json: any): ContractPriceType {
    return ContractPriceTypeFromJSONTyped(json, false);
}

export function ContractPriceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContractPriceType {
    return json as ContractPriceType;
}

export function ContractPriceTypeToJSON(value?: ContractPriceType | null): any {
    return value as any;
}

