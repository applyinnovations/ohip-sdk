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
 * Simple type for turndown status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Required, Not Required and Completed.
 * @export
 */
export const TurndownStatusType = {
    Required: 'Required',
    NotRequired: 'NotRequired',
    Compeleted: 'Compeleted'
} as const;
export type TurndownStatusType = typeof TurndownStatusType[keyof typeof TurndownStatusType];


export function TurndownStatusTypeFromJSON(json: any): TurndownStatusType {
    return TurndownStatusTypeFromJSONTyped(json, false);
}

export function TurndownStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TurndownStatusType {
    return json as TurndownStatusType;
}

export function TurndownStatusTypeToJSON(value?: TurndownStatusType | null): any {
    return value as any;
}
