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
     * @type {string}
     * @memberof GuestLastStayInfoType
     */
    lastStayDate?: string;
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
        
        'lastStayDate': !exists(json, 'lastStayDate') ? undefined : json['lastStayDate'],
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
        
        'lastStayDate': value.lastStayDate,
        'lastStayRoom': value.lastStayRoom,
        'lastStayRate': CurrencyAmountTypeToJSON(value.lastStayRate),
        'totalStay': value.totalStay,
    };
}
