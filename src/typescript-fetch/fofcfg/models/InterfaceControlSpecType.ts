/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
     * Internal code of a translation specification setup.
     * @type {number}
     * @memberof InterfaceControlSpecType
     */
    internalCode?: number;
    /**
     * Logo of the hotel interface.
     * @type {string}
     * @memberof InterfaceControlSpecType
     */
    logo?: string;
    /**
     * Position of a translation specification setup.
     * @type {string}
     * @memberof InterfaceControlSpecType
     */
    position?: string;
    /**
     * Priority of a translation specification setup.
     * @type {string}
     * @memberof InterfaceControlSpecType
     */
    priority?: string;
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
        'internalCode': !exists(json, 'internalCode') ? undefined : json['internalCode'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'selector': !exists(json, 'selector') ? undefined : json['selector'],
        'specification': !exists(json, 'specification') ? undefined : json['specification'],
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
        'internalCode': value.internalCode,
        'logo': value.logo,
        'position': value.position,
        'priority': value.priority,
        'selector': value.selector,
        'specification': value.specification,
    };
}

