/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Direct Inward Dial is set to available and freely switchable.
 * @export
 */
export const DirectInwardDialType = {
    NotAvailable: 'NotAvailable',
    AlwaysOn: 'AlwaysOn',
    AlwaysOff: 'AlwaysOff',
    FreelySwitchable: 'FreelySwitchable'
} as const;
export type DirectInwardDialType = typeof DirectInwardDialType[keyof typeof DirectInwardDialType];


export function DirectInwardDialTypeFromJSON(json: any): DirectInwardDialType {
    return DirectInwardDialTypeFromJSONTyped(json, false);
}

export function DirectInwardDialTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectInwardDialType {
    return json as DirectInwardDialType;
}

export function DirectInwardDialTypeToJSON(value?: DirectInwardDialType | null): any {
    return value as any;
}
