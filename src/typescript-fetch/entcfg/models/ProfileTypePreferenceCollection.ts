/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PreferenceTypeType } from './PreferenceTypeType';
import {
    PreferenceTypeTypeFromJSON,
    PreferenceTypeTypeFromJSONTyped,
    PreferenceTypeTypeToJSON,
} from './PreferenceTypeType';

/**
 * List of customer preferences.
 * @export
 * @interface ProfileTypePreferenceCollection
 */
export interface ProfileTypePreferenceCollection {
    /**
     * Collection of Detailed information on preferences of the customer.
     * @type {Array<PreferenceTypeType>}
     * @memberof ProfileTypePreferenceCollection
     */
    preferenceType?: Array<PreferenceTypeType>;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileTypePreferenceCollection
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypePreferenceCollection
     */
    totalResults?: number;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypePreferenceCollection
     */
    count?: number;
}

/**
 * Check if a given object implements the ProfileTypePreferenceCollection interface.
 */
export function instanceOfProfileTypePreferenceCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileTypePreferenceCollectionFromJSON(json: any): ProfileTypePreferenceCollection {
    return ProfileTypePreferenceCollectionFromJSONTyped(json, false);
}

export function ProfileTypePreferenceCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypePreferenceCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'preferenceType': !exists(json, 'preferenceType') ? undefined : ((json['preferenceType'] as Array<any>).map(PreferenceTypeTypeFromJSON)),
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'count': !exists(json, 'count') ? undefined : json['count'],
    };
}

export function ProfileTypePreferenceCollectionToJSON(value?: ProfileTypePreferenceCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'preferenceType': value.preferenceType === undefined ? undefined : ((value.preferenceType as Array<any>).map(PreferenceTypeTypeToJSON)),
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
        'count': value.count,
    };
}
