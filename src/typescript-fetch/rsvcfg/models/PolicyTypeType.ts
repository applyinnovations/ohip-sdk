/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Simple type for Policy type.
 * @export
 */
export const PolicyTypeType = {
    Deposit: 'Deposit',
    Cancellation: 'Cancellation'
} as const;
export type PolicyTypeType = typeof PolicyTypeType[keyof typeof PolicyTypeType];


export function PolicyTypeTypeFromJSON(json: any): PolicyTypeType {
    return PolicyTypeTypeFromJSONTyped(json, false);
}

export function PolicyTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolicyTypeType {
    return json as PolicyTypeType;
}

export function PolicyTypeTypeToJSON(value?: PolicyTypeType | null): any {
    return value as any;
}

