/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Simple type for indicating if credit card number is tokenized.
 * @export
 */
export const CardNumberTypeType = {
    CardNumber: 'CardNumber',
    Token: 'Token'
} as const;
export type CardNumberTypeType = typeof CardNumberTypeType[keyof typeof CardNumberTypeType];


export function CardNumberTypeTypeFromJSON(json: any): CardNumberTypeType {
    return CardNumberTypeTypeFromJSONTyped(json, false);
}

export function CardNumberTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardNumberTypeType {
    return json as CardNumberTypeType;
}

export function CardNumberTypeTypeToJSON(value?: CardNumberTypeType | null): any {
    return value as any;
}

