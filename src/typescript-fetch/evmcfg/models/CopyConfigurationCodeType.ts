/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Information needed to copy configuration code from one property to the other.
 * @export
 * @interface CopyConfigurationCodeType
 */
export interface CopyConfigurationCodeType {
    /**
     * Source hotel code from which code is to be copied from.
     * @type {string}
     * @memberof CopyConfigurationCodeType
     */
    code?: string;
    /**
     * Code that is to be copied.
     * @type {string}
     * @memberof CopyConfigurationCodeType
     */
    sourceHotelCode?: string;
    /**
     * Property to which configuration code type to be copied to.
     * @type {Array<string>}
     * @memberof CopyConfigurationCodeType
     */
    targetHotelCode?: Array<string>;
}

/**
 * Check if a given object implements the CopyConfigurationCodeType interface.
 */
export function instanceOfCopyConfigurationCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyConfigurationCodeTypeFromJSON(json: any): CopyConfigurationCodeType {
    return CopyConfigurationCodeTypeFromJSONTyped(json, false);
}

export function CopyConfigurationCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyConfigurationCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'sourceHotelCode': !exists(json, 'sourceHotelCode') ? undefined : json['sourceHotelCode'],
        'targetHotelCode': !exists(json, 'targetHotelCode') ? undefined : json['targetHotelCode'],
    };
}

export function CopyConfigurationCodeTypeToJSON(value?: CopyConfigurationCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'sourceHotelCode': value.sourceHotelCode,
        'targetHotelCode': value.targetHotelCode,
    };
}

