/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TelephoneInfoType } from './TelephoneInfoType';
import {
    TelephoneInfoTypeFromJSON,
    TelephoneInfoTypeFromJSONTyped,
    TelephoneInfoTypeToJSON,
} from './TelephoneInfoType';

/**
 * List of Telephone Number Information
 * @export
 * @interface ProfileTypeTelephones
 */
export interface ProfileTypeTelephones {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypeTelephones
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileTypeTelephones
     */
    hasMore?: boolean;
    /**
     * Collection of Detailed information on telephone/fax for the customer.
     * @type {Array<TelephoneInfoType>}
     * @memberof ProfileTypeTelephones
     */
    telephoneInfo?: Array<TelephoneInfoType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypeTelephones
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the ProfileTypeTelephones interface.
 */
export function instanceOfProfileTypeTelephones(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileTypeTelephonesFromJSON(json: any): ProfileTypeTelephones {
    return ProfileTypeTelephonesFromJSONTyped(json, false);
}

export function ProfileTypeTelephonesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeTelephones {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'telephoneInfo': !exists(json, 'telephoneInfo') ? undefined : ((json['telephoneInfo'] as Array<any>).map(TelephoneInfoTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function ProfileTypeTelephonesToJSON(value?: ProfileTypeTelephones | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'telephoneInfo': value.telephoneInfo === undefined ? undefined : ((value.telephoneInfo as Array<any>).map(TelephoneInfoTypeToJSON)),
        'totalResults': value.totalResults,
    };
}

