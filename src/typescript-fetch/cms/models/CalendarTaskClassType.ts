/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Defines classification codes of calendar task.
 * @export
 */
export const CalendarTaskClassType = {
    Correspondence: 'Correspondence',
    Meeting: 'Meeting',
    Todolist: 'Todolist',
    Call: 'Call',
    Appointment: 'Appointment'
} as const;
export type CalendarTaskClassType = typeof CalendarTaskClassType[keyof typeof CalendarTaskClassType];


export function CalendarTaskClassTypeFromJSON(json: any): CalendarTaskClassType {
    return CalendarTaskClassTypeFromJSONTyped(json, false);
}

export function CalendarTaskClassTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CalendarTaskClassType {
    return json as CalendarTaskClassType;
}

export function CalendarTaskClassTypeToJSON(value?: CalendarTaskClassType | null): any {
    return value as any;
}

