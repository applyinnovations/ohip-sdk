/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FiscalPeriodType } from './FiscalPeriodType';
import {
    FiscalPeriodTypeFromJSON,
    FiscalPeriodTypeFromJSONTyped,
    FiscalPeriodTypeToJSON,
} from './FiscalPeriodType';

/**
 * Values of the old primary key.
 * @export
 * @interface FiscalPeriodEditType
 */
export interface FiscalPeriodEditType {
    /**
     * Resort for which the Period is defined.
     * @type {string}
     * @memberof FiscalPeriodEditType
     */
    hotelId?: string;
    /**
     * 
     * @type {FiscalPeriodType}
     * @memberof FiscalPeriodEditType
     */
    newPeriod?: FiscalPeriodType;
    /**
     * Start Date of the Period
     * @type {string}
     * @memberof FiscalPeriodEditType
     */
    startDate?: string;
    /**
     * Id of the Year.
     * @type {number}
     * @memberof FiscalPeriodEditType
     */
    yearId?: number;
}

/**
 * Check if a given object implements the FiscalPeriodEditType interface.
 */
export function instanceOfFiscalPeriodEditType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FiscalPeriodEditTypeFromJSON(json: any): FiscalPeriodEditType {
    return FiscalPeriodEditTypeFromJSONTyped(json, false);
}

export function FiscalPeriodEditTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiscalPeriodEditType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'newPeriod': !exists(json, 'newPeriod') ? undefined : FiscalPeriodTypeFromJSON(json['newPeriod']),
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
        'yearId': !exists(json, 'yearId') ? undefined : json['yearId'],
    };
}

export function FiscalPeriodEditTypeToJSON(value?: FiscalPeriodEditType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'newPeriod': FiscalPeriodTypeToJSON(value.newPeriod),
        'startDate': value.startDate,
        'yearId': value.yearId,
    };
}

