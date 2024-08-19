/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * External system attributes.
 * @export
 * @interface SystemInfoType
 */
export interface SystemInfoType {
    /**
     * Channel Icon URL
     * @type {string}
     * @memberof SystemInfoType
     */
    iconURL?: string;
    /**
     * Indicates whether code is inactive or not.
     * @type {boolean}
     * @memberof SystemInfoType
     */
    inactive?: boolean;
    /**
     * External system code such as TRAVELOCITY, EXPEDIA, etc.
     * @type {string}
     * @memberof SystemInfoType
     */
    systemCode?: string;
    /**
     * External system name.
     * @type {string}
     * @memberof SystemInfoType
     */
    systemName?: string;
    /**
     * External system subtype such as GDS, WEB, etc.
     * @type {string}
     * @memberof SystemInfoType
     */
    systemSubType?: string;
    /**
     * External system type such as CHANNEL, OXI, etc.
     * @type {string}
     * @memberof SystemInfoType
     */
    systemType?: string;
    /**
     * Cannel Website URL
     * @type {string}
     * @memberof SystemInfoType
     */
    websiteURL?: string;
}

/**
 * Check if a given object implements the SystemInfoType interface.
 */
export function instanceOfSystemInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SystemInfoTypeFromJSON(json: any): SystemInfoType {
    return SystemInfoTypeFromJSONTyped(json, false);
}

export function SystemInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'iconURL': !exists(json, 'iconURL') ? undefined : json['iconURL'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'systemCode': !exists(json, 'systemCode') ? undefined : json['systemCode'],
        'systemName': !exists(json, 'systemName') ? undefined : json['systemName'],
        'systemSubType': !exists(json, 'systemSubType') ? undefined : json['systemSubType'],
        'systemType': !exists(json, 'systemType') ? undefined : json['systemType'],
        'websiteURL': !exists(json, 'websiteURL') ? undefined : json['websiteURL'],
    };
}

export function SystemInfoTypeToJSON(value?: SystemInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'iconURL': value.iconURL,
        'inactive': value.inactive,
        'systemCode': value.systemCode,
        'systemName': value.systemName,
        'systemSubType': value.systemSubType,
        'systemType': value.systemType,
        'websiteURL': value.websiteURL,
    };
}

