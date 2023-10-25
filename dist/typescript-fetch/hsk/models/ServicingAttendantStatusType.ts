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
 * Possible values for the Status of a Servicing Attendant.
 * @export
 */
export const ServicingAttendantStatusType = {
    Standby: 'Standby',
    Break: 'Break',
    Working: 'Working',
    Completed: 'Completed'
} as const;
export type ServicingAttendantStatusType = typeof ServicingAttendantStatusType[keyof typeof ServicingAttendantStatusType];


export function ServicingAttendantStatusTypeFromJSON(json: any): ServicingAttendantStatusType {
    return ServicingAttendantStatusTypeFromJSONTyped(json, false);
}

export function ServicingAttendantStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServicingAttendantStatusType {
    return json as ServicingAttendantStatusType;
}

export function ServicingAttendantStatusTypeToJSON(value?: ServicingAttendantStatusType | null): any {
    return value as any;
}

