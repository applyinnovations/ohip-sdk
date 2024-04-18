/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Indicates that this is electronic certificate.
 * @export
 */
export const AwardKindType = {
    Paper: 'Paper',
    ECertificate: 'ECertificate'
} as const;
export type AwardKindType = typeof AwardKindType[keyof typeof AwardKindType];


export function AwardKindTypeFromJSON(json: any): AwardKindType {
    return AwardKindTypeFromJSONTyped(json, false);
}

export function AwardKindTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwardKindType {
    return json as AwardKindType;
}

export function AwardKindTypeToJSON(value?: AwardKindType | null): any {
    return value as any;
}
