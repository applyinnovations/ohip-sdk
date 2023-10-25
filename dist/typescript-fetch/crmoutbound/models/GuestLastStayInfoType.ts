/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
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
 * Contains last stay related details of the guest.
 * @export
 * @interface GuestLastStayInfoType
 */
export interface GuestLastStayInfoType {
    /**
     * Guest's last stay date.
     * @type {Date}
     * @memberof GuestLastStayInfoType
     */
    lastStayDate?: Date;
    /**
     * Room Number where the guest stayed.
     * @type {string}
     * @memberof GuestLastStayInfoType
     */
    lastStayRoom?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof GuestLastStayInfoType
     */
    lastStayRate?: CurrencyAmountType;
    /**
     * The total number of previous stay of the guest.
     * @type {number}
     * @memberof GuestLastStayInfoType
     */
    totalStay?: number;
}

/**
 * Check if a given object implements the GuestLastStayInfoType interface.
 */
export function instanceOfGuestLastStayInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GuestLastStayInfoTypeFromJSON(json: any): GuestLastStayInfoType {
    return GuestLastStayInfoTypeFromJSONTyped(json, false);
}

export function GuestLastStayInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestLastStayInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastStayDate': !exists(json, 'lastStayDate') ? undefined : (new Date(json['lastStayDate'])),
        'lastStayRoom': !exists(json, 'lastStayRoom') ? undefined : json['lastStayRoom'],
        'lastStayRate': !exists(json, 'lastStayRate') ? undefined : CurrencyAmountTypeFromJSON(json['lastStayRate']),
        'totalStay': !exists(json, 'totalStay') ? undefined : json['totalStay'],
    };
}

export function GuestLastStayInfoTypeToJSON(value?: GuestLastStayInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastStayDate': value.lastStayDate === undefined ? undefined : (value.lastStayDate.toISOString().substr(0,10)),
        'lastStayRoom': value.lastStayRoom,
        'lastStayRate': CurrencyAmountTypeToJSON(value.lastStayRate),
        'totalStay': value.totalStay,
    };
}

