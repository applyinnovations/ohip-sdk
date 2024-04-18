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
 * @interface InterfaceWorkstationType
 */
export interface InterfaceWorkstationType {
    /**
     * IP of a workstation.
     * @type {string}
     * @memberof InterfaceWorkstationType
     */
    deviceIp?: string;
    /**
     * Device Group / Area.
     * @type {string}
     * @memberof InterfaceWorkstationType
     */
    deviceLocation?: string;
    /**
     * Hotel Code of a workstation.
     * @type {string}
     * @memberof InterfaceWorkstationType
     */
    hotelId?: string;
    /**
     * Internal code of a workstation.
     * @type {number}
     * @memberof InterfaceWorkstationType
     */
    internalCode?: number;
    /**
     * Location of a workstation.
     * @type {string}
     * @memberof InterfaceWorkstationType
     */
    location?: string;
    /**
     * Logo of a workstation.
     * @type {string}
     * @memberof InterfaceWorkstationType
     */
    logo?: string;
    /**
     * Type of a workstation.
     * @type {string}
     * @memberof InterfaceWorkstationType
     */
    type?: string;
    /**
     * Workstation of a hotel interface.
     * @type {string}
     * @memberof InterfaceWorkstationType
     */
    workstation?: string;
}

/**
 * Check if a given object implements the InterfaceWorkstationType interface.
 */
export function instanceOfInterfaceWorkstationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InterfaceWorkstationTypeFromJSON(json: any): InterfaceWorkstationType {
    return InterfaceWorkstationTypeFromJSONTyped(json, false);
}

export function InterfaceWorkstationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfaceWorkstationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deviceIp': !exists(json, 'deviceIp') ? undefined : json['deviceIp'],
        'deviceLocation': !exists(json, 'deviceLocation') ? undefined : json['deviceLocation'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'internalCode': !exists(json, 'internalCode') ? undefined : json['internalCode'],
        'location': !exists(json, 'location') ? undefined : json['location'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'workstation': !exists(json, 'workstation') ? undefined : json['workstation'],
    };
}

export function InterfaceWorkstationTypeToJSON(value?: InterfaceWorkstationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deviceIp': value.deviceIp,
        'deviceLocation': value.deviceLocation,
        'hotelId': value.hotelId,
        'internalCode': value.internalCode,
        'location': value.location,
        'logo': value.logo,
        'type': value.type,
        'workstation': value.workstation,
    };
}
