/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Information about the transportation type.
 * @export
 * @interface TransportationInfoType
 */
export interface TransportationInfoType {
    /**
     * Code for the transportation type.
     * @type {string}
     * @memberof TransportationInfoType
     */
    code?: string;
    /**
     * Description of the transportation type.
     * @type {string}
     * @memberof TransportationInfoType
     */
    description?: string;
    /**
     * Single character label for the transportation type.
     * @type {string}
     * @memberof TransportationInfoType
     */
    label?: string;
}

/**
 * Check if a given object implements the TransportationInfoType interface.
 */
export function instanceOfTransportationInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransportationInfoTypeFromJSON(json: any): TransportationInfoType {
    return TransportationInfoTypeFromJSONTyped(json, false);
}

export function TransportationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransportationInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'label': !exists(json, 'label') ? undefined : json['label'],
    };
}

export function TransportationInfoTypeToJSON(value?: TransportationInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'label': value.label,
    };
}

