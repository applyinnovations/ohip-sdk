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
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';

/**
 * Contains last stay related details for the profile
 * @export
 * @interface LastStayInfoType
 */
export interface LastStayInfoType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof LastStayInfoType
     */
    lastRate?: CurrencyAmountType;
    /**
     * Used to hold last room information for the profile.
     * @type {string}
     * @memberof LastStayInfoType
     */
    lastRoom?: string;
    /**
     * Used to hold last stay information for the profile.
     * @type {Date}
     * @memberof LastStayInfoType
     */
    lastVisit?: Date;
    /**
     * The total number of previous stay of the profile.
     * @type {number}
     * @memberof LastStayInfoType
     */
    totalStay?: number;
}

/**
 * Check if a given object implements the LastStayInfoType interface.
 */
export function instanceOfLastStayInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LastStayInfoTypeFromJSON(json: any): LastStayInfoType {
    return LastStayInfoTypeFromJSONTyped(json, false);
}

export function LastStayInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LastStayInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastRate': !exists(json, 'lastRate') ? undefined : CurrencyAmountTypeFromJSON(json['lastRate']),
        'lastRoom': !exists(json, 'lastRoom') ? undefined : json['lastRoom'],
        'lastVisit': !exists(json, 'lastVisit') ? undefined : (new Date(json['lastVisit'])),
        'totalStay': !exists(json, 'totalStay') ? undefined : json['totalStay'],
    };
}

export function LastStayInfoTypeToJSON(value?: LastStayInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastRate': CurrencyAmountTypeToJSON(value.lastRate),
        'lastRoom': value.lastRoom,
        'lastVisit': value.lastVisit === undefined ? undefined : (value.lastVisit.toISOString().substr(0,10)),
        'totalStay': value.totalStay,
    };
}

