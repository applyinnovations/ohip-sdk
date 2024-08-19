/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { YearTypeType } from './YearTypeType';
import {
    YearTypeTypeFromJSON,
    YearTypeTypeFromJSONTyped,
    YearTypeTypeToJSON,
} from './YearTypeType';

/**
 * Fiscal Year Type
 * @export
 * @interface FiscalYearType
 */
export interface FiscalYearType {
    /**
     * Description of the Year.
     * @type {string}
     * @memberof FiscalYearType
     */
    description?: string;
    /**
     * End Date of the Year.
     * @type {string}
     * @memberof FiscalYearType
     */
    endDate?: string;
    /**
     * Resort for which the Year is defined.
     * @type {string}
     * @memberof FiscalYearType
     */
    hotelId?: string;
    /**
     * Start Date of the Year.
     * @type {string}
     * @memberof FiscalYearType
     */
    startDate?: string;
    /**
     * Number of the Year.
     * @type {number}
     * @memberof FiscalYearType
     */
    year?: number;
    /**
     * Unique id of the Year.
     * @type {number}
     * @memberof FiscalYearType
     */
    yearId?: number;
    /**
     * 
     * @type {YearTypeType}
     * @memberof FiscalYearType
     */
    yearType?: YearTypeType;
}

/**
 * Check if a given object implements the FiscalYearType interface.
 */
export function instanceOfFiscalYearType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FiscalYearTypeFromJSON(json: any): FiscalYearType {
    return FiscalYearTypeFromJSONTyped(json, false);
}

export function FiscalYearTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiscalYearType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
        'year': !exists(json, 'year') ? undefined : json['year'],
        'yearId': !exists(json, 'yearId') ? undefined : json['yearId'],
        'yearType': !exists(json, 'yearType') ? undefined : YearTypeTypeFromJSON(json['yearType']),
    };
}

export function FiscalYearTypeToJSON(value?: FiscalYearType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'endDate': value.endDate,
        'hotelId': value.hotelId,
        'startDate': value.startDate,
        'year': value.year,
        'yearId': value.yearId,
        'yearType': YearTypeTypeToJSON(value.yearType),
    };
}

