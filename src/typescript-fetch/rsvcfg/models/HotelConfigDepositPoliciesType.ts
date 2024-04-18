/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ConfigDepositPolicyType } from './ConfigDepositPolicyType';
import {
    ConfigDepositPolicyTypeFromJSON,
    ConfigDepositPolicyTypeFromJSONTyped,
    ConfigDepositPolicyTypeToJSON,
} from './ConfigDepositPolicyType';

/**
 * Collection of Deposit Policy Configurations of a hotel.
 * @export
 * @interface HotelConfigDepositPoliciesType
 */
export interface HotelConfigDepositPoliciesType {
    /**
     * Collection of Deposit Policy configurations of a hotel.
     * @type {Array<ConfigDepositPolicyType>}
     * @memberof HotelConfigDepositPoliciesType
     */
    depositPolicy?: Array<ConfigDepositPolicyType>;
    /**
     * Hotel code of the collection of Deposit Policy configurations.
     * @type {string}
     * @memberof HotelConfigDepositPoliciesType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the HotelConfigDepositPoliciesType interface.
 */
export function instanceOfHotelConfigDepositPoliciesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelConfigDepositPoliciesTypeFromJSON(json: any): HotelConfigDepositPoliciesType {
    return HotelConfigDepositPoliciesTypeFromJSONTyped(json, false);
}

export function HotelConfigDepositPoliciesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelConfigDepositPoliciesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'depositPolicy': !exists(json, 'depositPolicy') ? undefined : ((json['depositPolicy'] as Array<any>).map(ConfigDepositPolicyTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function HotelConfigDepositPoliciesTypeToJSON(value?: HotelConfigDepositPoliciesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'depositPolicy': value.depositPolicy === undefined ? undefined : ((value.depositPolicy as Array<any>).map(ConfigDepositPolicyTypeToJSON)),
        'hotelId': value.hotelId,
    };
}
