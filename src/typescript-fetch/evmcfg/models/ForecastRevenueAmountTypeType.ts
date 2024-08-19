/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Defines values for Amount Type of an event forecast revenue.
 * @export
 */
export const ForecastRevenueAmountTypeType = {
    FlatAmount: 'FlatAmount',
    PerPerson: 'PerPerson'
} as const;
export type ForecastRevenueAmountTypeType = typeof ForecastRevenueAmountTypeType[keyof typeof ForecastRevenueAmountTypeType];


export function ForecastRevenueAmountTypeTypeFromJSON(json: any): ForecastRevenueAmountTypeType {
    return ForecastRevenueAmountTypeTypeFromJSONTyped(json, false);
}

export function ForecastRevenueAmountTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForecastRevenueAmountTypeType {
    return json as ForecastRevenueAmountTypeType;
}

export function ForecastRevenueAmountTypeTypeToJSON(value?: ForecastRevenueAmountTypeType | null): any {
    return value as any;
}

