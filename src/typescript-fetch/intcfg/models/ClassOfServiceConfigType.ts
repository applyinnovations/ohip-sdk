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
 * Class Of Service is set to available and freely switchable.
 * @export
 */
export const ClassOfServiceConfigType = {
    NotAvailable: 'NotAvailable',
    AlwaysOn: 'AlwaysOn',
    AlwaysOff: 'AlwaysOff',
    FreelySwitchable: 'FreelySwitchable'
} as const;
export type ClassOfServiceConfigType = typeof ClassOfServiceConfigType[keyof typeof ClassOfServiceConfigType];


export function ClassOfServiceConfigTypeFromJSON(json: any): ClassOfServiceConfigType {
    return ClassOfServiceConfigTypeFromJSONTyped(json, false);
}

export function ClassOfServiceConfigTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClassOfServiceConfigType {
    return json as ClassOfServiceConfigType;
}

export function ClassOfServiceConfigTypeToJSON(value?: ClassOfServiceConfigType | null): any {
    return value as any;
}
