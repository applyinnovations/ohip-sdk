/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const LogicalOperatorType = {
    And: 'And',
    Or: 'Or'
} as const;
export type LogicalOperatorType = typeof LogicalOperatorType[keyof typeof LogicalOperatorType];


export function LogicalOperatorTypeFromJSON(json: any): LogicalOperatorType {
    return LogicalOperatorTypeFromJSONTyped(json, false);
}

export function LogicalOperatorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogicalOperatorType {
    return json as LogicalOperatorType;
}

export function LogicalOperatorTypeToJSON(value?: LogicalOperatorType | null): any {
    return value as any;
}

