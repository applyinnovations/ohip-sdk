/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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

