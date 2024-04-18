/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Supported activity statistical codes.
 * @export
 */
export const ActivityStatCodeType = {
    CompletedToDo: 'CompletedToDo',
    IncompleteToDo: 'IncompleteToDo',
    CompletedAppointments: 'CompletedAppointments',
    IncompleteAppointments: 'IncompleteAppointments'
} as const;
export type ActivityStatCodeType = typeof ActivityStatCodeType[keyof typeof ActivityStatCodeType];


export function ActivityStatCodeTypeFromJSON(json: any): ActivityStatCodeType {
    return ActivityStatCodeTypeFromJSONTyped(json, false);
}

export function ActivityStatCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityStatCodeType {
    return json as ActivityStatCodeType;
}

export function ActivityStatCodeTypeToJSON(value?: ActivityStatCodeType | null): any {
    return value as any;
}
