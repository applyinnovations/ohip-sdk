/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method.
 * @export
 */
export const CardTypeType = {
    Ab: 'Ab',
    Am: 'Am',
    Ax: 'Ax',
    Cb: 'Cb',
    Dc: 'Dc',
    Ds: 'Ds',
    Dt: 'Dt',
    Ec: 'Ec',
    Er: 'Er',
    Jc: 'Jc',
    Jl: 'Jl',
    Mc: 'Mc',
    Nb: 'Nb',
    So: 'So',
    St: 'St',
    Sw: 'Sw',
    Va: 'Va',
    Xy: 'Xy',
    Zz: 'Zz',
    Cp: 'Cp',
    Cu: 'Cu'
} as const;
export type CardTypeType = typeof CardTypeType[keyof typeof CardTypeType];


export function CardTypeTypeFromJSON(json: any): CardTypeType {
    return CardTypeTypeFromJSONTyped(json, false);
}

export function CardTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardTypeType {
    return json as CardTypeType;
}

export function CardTypeTypeToJSON(value?: CardTypeType | null): any {
    return value as any;
}

