/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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

