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
 * 
 * @export
 * @interface InterfaceControlSpecType
 */
export interface InterfaceControlSpecType {
    /**
     * Hotel Code of the hotel interface.
     * @type {string}
     * @memberof InterfaceControlSpecType
     */
    hotelId?: string;
    /**
     * Logo of the hotel interface.
     * @type {string}
     * @memberof InterfaceControlSpecType
     */
    logo?: string;
    /**
     * Internal code of a translation specification setup.
     * @type {number}
     * @memberof InterfaceControlSpecType
     */
    internalCode?: number;
    /**
     * Selector of a translation specification setup.
     * @type {string}
     * @memberof InterfaceControlSpecType
     */
    selector?: string;
    /**
     * Specification of a translation specification setup.
     * @type {string}
     * @memberof InterfaceControlSpecType
     */
    specification?: string;
    /**
     * Priority of a translation specification setup.
     * @type {string}
     * @memberof InterfaceControlSpecType
     */
    priority?: string;
    /**
     * Position of a translation specification setup.
     * @type {string}
     * @memberof InterfaceControlSpecType
     */
    position?: string;
}

/**
 * Check if a given object implements the InterfaceControlSpecType interface.
 */
export function instanceOfInterfaceControlSpecType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InterfaceControlSpecTypeFromJSON(json: any): InterfaceControlSpecType {
    return InterfaceControlSpecTypeFromJSONTyped(json, false);
}

export function InterfaceControlSpecTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfaceControlSpecType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'internalCode': !exists(json, 'internalCode') ? undefined : json['internalCode'],
        'selector': !exists(json, 'selector') ? undefined : json['selector'],
        'specification': !exists(json, 'specification') ? undefined : json['specification'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'position': !exists(json, 'position') ? undefined : json['position'],
    };
}

export function InterfaceControlSpecTypeToJSON(value?: InterfaceControlSpecType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'logo': value.logo,
        'internalCode': value.internalCode,
        'selector': value.selector,
        'specification': value.specification,
        'priority': value.priority,
        'position': value.position,
    };
}

