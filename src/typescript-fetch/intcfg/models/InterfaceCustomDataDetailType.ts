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

import { exists, mapValues } from '../runtime';
/**
 * This gives information of custom detail of a hotel interface.
 * @export
 * @interface InterfaceCustomDataDetailType
 */
export interface InterfaceCustomDataDetailType {
    /**
     * Specifies the type of data stored.
     * @type {string}
     * @memberof InterfaceCustomDataDetailType
     */
    customDataField?: string;
    /**
     * Specifies the actual data corresponding to each value in the field.
     * @type {string}
     * @memberof InterfaceCustomDataDetailType
     */
    customDataValue?: string;
}

/**
 * Check if a given object implements the InterfaceCustomDataDetailType interface.
 */
export function instanceOfInterfaceCustomDataDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InterfaceCustomDataDetailTypeFromJSON(json: any): InterfaceCustomDataDetailType {
    return InterfaceCustomDataDetailTypeFromJSONTyped(json, false);
}

export function InterfaceCustomDataDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfaceCustomDataDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customDataField': !exists(json, 'customDataField') ? undefined : json['customDataField'],
        'customDataValue': !exists(json, 'customDataValue') ? undefined : json['customDataValue'],
    };
}

export function InterfaceCustomDataDetailTypeToJSON(value?: InterfaceCustomDataDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customDataField': value.customDataField,
        'customDataValue': value.customDataValue,
    };
}
