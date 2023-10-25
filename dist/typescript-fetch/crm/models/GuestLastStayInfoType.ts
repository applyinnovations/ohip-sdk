/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
     * 
     * @type {CurrencyAmountType}
     * @memberof GuestLastStayInfoType
     */
    lastStayRate?: CurrencyAmountType;
    /**
     * Room Number where the guest stayed.
     * @type {string}
     * @memberof GuestLastStayInfoType
     */
    lastStayRoom?: string;
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
        'lastStayRate': !exists(json, 'lastStayRate') ? undefined : CurrencyAmountTypeFromJSON(json['lastStayRate']),
        'lastStayRoom': !exists(json, 'lastStayRoom') ? undefined : json['lastStayRoom'],
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
        'lastStayRate': CurrencyAmountTypeToJSON(value.lastStayRate),
        'lastStayRoom': value.lastStayRoom,
        'totalStay': value.totalStay,
    };
}

