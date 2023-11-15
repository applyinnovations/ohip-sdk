/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Detailed attributes of Menu Class .
 * @export
 * @interface CateringMenuClassInfoType
 */
export interface CateringMenuClassInfoType {
    /**
     * 
     * @type {Array<string>}
     * @memberof CateringMenuClassInfoType
     */
    eventTypes?: Array<string>;
    /**
     * Return true, when this Menu Item Class will not be available to be associated to a Catering Event.
     * @type {boolean}
     * @memberof CateringMenuClassInfoType
     */
    inactive?: boolean;
    /**
     * Inactive date of menu class.
     * @type {string}
     * @memberof CateringMenuClassInfoType
     */
    inactiveDate?: string;
    /**
     * This type holds name of Menu Class.
     * @type {string}
     * @memberof CateringMenuClassInfoType
     */
    name?: string;
    /**
     * This type tells about whether menu class is book through web or not.
     * @type {boolean}
     * @memberof CateringMenuClassInfoType
     */
    webBookable?: boolean;
}

/**
 * Check if a given object implements the CateringMenuClassInfoType interface.
 */
export function instanceOfCateringMenuClassInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringMenuClassInfoTypeFromJSON(json: any): CateringMenuClassInfoType {
    return CateringMenuClassInfoTypeFromJSONTyped(json, false);
}

export function CateringMenuClassInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringMenuClassInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eventTypes': !exists(json, 'eventTypes') ? undefined : json['eventTypes'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'inactiveDate': !exists(json, 'inactiveDate') ? undefined : json['inactiveDate'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'webBookable': !exists(json, 'webBookable') ? undefined : json['webBookable'],
    };
}

export function CateringMenuClassInfoTypeToJSON(value?: CateringMenuClassInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'eventTypes': value.eventTypes,
        'inactive': value.inactive,
        'inactiveDate': value.inactiveDate,
        'name': value.name,
        'webBookable': value.webBookable,
    };
}

