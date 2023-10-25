/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The types of Profile handled by the web service.
 * @export
 */
export const GuestProfileTypeType = {
    Guest: 'Guest',
    Employee: 'Employee',
    Contact: 'Contact'
} as const;
export type GuestProfileTypeType = typeof GuestProfileTypeType[keyof typeof GuestProfileTypeType];


export function GuestProfileTypeTypeFromJSON(json: any): GuestProfileTypeType {
    return GuestProfileTypeTypeFromJSONTyped(json, false);
}

export function GuestProfileTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestProfileTypeType {
    return json as GuestProfileTypeType;
}

export function GuestProfileTypeTypeToJSON(value?: GuestProfileTypeType | null): any {
    return value as any;
}

