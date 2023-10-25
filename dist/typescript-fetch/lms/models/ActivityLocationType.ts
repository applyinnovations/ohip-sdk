/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Activity Location detail information.
 * @export
 * @interface ActivityLocationType
 */
export interface ActivityLocationType {
    /**
     * Code for the activity Location.
     * @type {string}
     * @memberof ActivityLocationType
     */
    code?: string;
    /**
     * Description for the Activity Location.
     * @type {string}
     * @memberof ActivityLocationType
     */
    description?: string;
    /**
     * Property to which the activity Location belongs to.
     * @type {string}
     * @memberof ActivityLocationType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the ActivityLocationType interface.
 */
export function instanceOfActivityLocationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivityLocationTypeFromJSON(json: any): ActivityLocationType {
    return ActivityLocationTypeFromJSONTyped(json, false);
}

export function ActivityLocationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityLocationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function ActivityLocationTypeToJSON(value?: ActivityLocationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'hotelId': value.hotelId,
    };
}

