/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BestAvailableRateType } from './BestAvailableRateType';
import {
    BestAvailableRateTypeFromJSON,
    BestAvailableRateTypeFromJSONTyped,
    BestAvailableRateTypeToJSON,
} from './BestAvailableRateType';
import type { MasterInfo } from './MasterInfo';
import {
    MasterInfoFromJSON,
    MasterInfoFromJSONTyped,
    MasterInfoToJSON,
} from './MasterInfo';

/**
 * The list of best availabe rates for rate code(s)
 * @export
 * @interface BestAvailableRatesListType
 */
export interface BestAvailableRatesListType {
    /**
     * Collection of best available rates for rate code(s)
     * @type {Array<BestAvailableRateType>}
     * @memberof BestAvailableRatesListType
     */
    bestAvailableRates?: Array<BestAvailableRateType>;
    /**
     * Hotel code for which best available rates will be considered.
     * @type {string}
     * @memberof BestAvailableRatesListType
     */
    hotelId?: string;
    /**
     * The list of references of rate code selected as best available rates
     * @type {Array<MasterInfo>}
     * @memberof BestAvailableRatesListType
     */
    masterInfoList?: Array<MasterInfo>;
}

/**
 * Check if a given object implements the BestAvailableRatesListType interface.
 */
export function instanceOfBestAvailableRatesListType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BestAvailableRatesListTypeFromJSON(json: any): BestAvailableRatesListType {
    return BestAvailableRatesListTypeFromJSONTyped(json, false);
}

export function BestAvailableRatesListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BestAvailableRatesListType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bestAvailableRates': !exists(json, 'bestAvailableRates') ? undefined : ((json['bestAvailableRates'] as Array<any>).map(BestAvailableRateTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'masterInfoList': !exists(json, 'masterInfoList') ? undefined : ((json['masterInfoList'] as Array<any>).map(MasterInfoFromJSON)),
    };
}

export function BestAvailableRatesListTypeToJSON(value?: BestAvailableRatesListType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bestAvailableRates': value.bestAvailableRates === undefined ? undefined : ((value.bestAvailableRates as Array<any>).map(BestAvailableRateTypeToJSON)),
        'hotelId': value.hotelId,
        'masterInfoList': value.masterInfoList === undefined ? undefined : ((value.masterInfoList as Array<any>).map(MasterInfoToJSON)),
    };
}

