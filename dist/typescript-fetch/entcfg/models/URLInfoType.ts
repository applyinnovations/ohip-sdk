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
import type { URLType } from './URLType';
import {
    URLTypeFromJSON,
    URLTypeFromJSONTyped,
    URLTypeToJSON,
} from './URLType';

/**
 * Web site address.
 * @export
 * @interface URLInfoType
 */
export interface URLInfoType {
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof URLInfoType
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof URLInfoType
     */
    type?: string;
    /**
     * 
     * @type {URLType}
     * @memberof URLInfoType
     */
    url?: URLType;
}

/**
 * Check if a given object implements the URLInfoType interface.
 */
export function instanceOfURLInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function URLInfoTypeFromJSON(json: any): URLInfoType {
    return URLInfoTypeFromJSONTyped(json, false);
}

export function URLInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): URLInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'url': !exists(json, 'url') ? undefined : URLTypeFromJSON(json['url']),
    };
}

export function URLInfoTypeToJSON(value?: URLInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'url': URLTypeToJSON(value.url),
    };
}

