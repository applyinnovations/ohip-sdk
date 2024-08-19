/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Enumeration of export file groups.
 * @export
 */
export const ScheduleExportGroupType = {
    Miscellaneous: 'Miscellaneous',
    Memberships: 'Memberships',
    Country: 'Country',
    BackOffice: 'BackOffice'
} as const;
export type ScheduleExportGroupType = typeof ScheduleExportGroupType[keyof typeof ScheduleExportGroupType];


export function ScheduleExportGroupTypeFromJSON(json: any): ScheduleExportGroupType {
    return ScheduleExportGroupTypeFromJSONTyped(json, false);
}

export function ScheduleExportGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduleExportGroupType {
    return json as ScheduleExportGroupType;
}

export function ScheduleExportGroupTypeToJSON(value?: ScheduleExportGroupType | null): any {
    return value as any;
}

