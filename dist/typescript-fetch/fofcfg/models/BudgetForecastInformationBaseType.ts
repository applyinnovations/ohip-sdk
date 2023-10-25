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
import type { BudgetForecastCateringInfoBaseType } from './BudgetForecastCateringInfoBaseType';
import {
    BudgetForecastCateringInfoBaseTypeFromJSON,
    BudgetForecastCateringInfoBaseTypeFromJSONTyped,
    BudgetForecastCateringInfoBaseTypeToJSON,
} from './BudgetForecastCateringInfoBaseType';
import type { BudgetForecastCustomInfoBaseType } from './BudgetForecastCustomInfoBaseType';
import {
    BudgetForecastCustomInfoBaseTypeFromJSON,
    BudgetForecastCustomInfoBaseTypeFromJSONTyped,
    BudgetForecastCustomInfoBaseTypeToJSON,
} from './BudgetForecastCustomInfoBaseType';
import type { BudgetForecastMarketInfoBaseType } from './BudgetForecastMarketInfoBaseType';
import {
    BudgetForecastMarketInfoBaseTypeFromJSON,
    BudgetForecastMarketInfoBaseTypeFromJSONTyped,
    BudgetForecastMarketInfoBaseTypeToJSON,
} from './BudgetForecastMarketInfoBaseType';
import type { BudgetForecastRateInfoBaseType } from './BudgetForecastRateInfoBaseType';
import {
    BudgetForecastRateInfoBaseTypeFromJSON,
    BudgetForecastRateInfoBaseTypeFromJSONTyped,
    BudgetForecastRateInfoBaseTypeToJSON,
} from './BudgetForecastRateInfoBaseType';
import type { BudgetForecastTransactionInfoBaseType } from './BudgetForecastTransactionInfoBaseType';
import {
    BudgetForecastTransactionInfoBaseTypeFromJSON,
    BudgetForecastTransactionInfoBaseTypeFromJSONTyped,
    BudgetForecastTransactionInfoBaseTypeToJSON,
} from './BudgetForecastTransactionInfoBaseType';

/**
 * Holds budget forecast information for included segment types.
 * @export
 * @interface BudgetForecastInformationBaseType
 */
export interface BudgetForecastInformationBaseType {
    /**
     * 
     * @type {BudgetForecastCateringInfoBaseType}
     * @memberof BudgetForecastInformationBaseType
     */
    cateringSegmentInformation?: BudgetForecastCateringInfoBaseType;
    /**
     * 
     * @type {BudgetForecastCustomInfoBaseType}
     * @memberof BudgetForecastInformationBaseType
     */
    customSegmentInformation?: BudgetForecastCustomInfoBaseType;
    /**
     * Opera Hotel code for the Fetch Revenue information.
     * @type {string}
     * @memberof BudgetForecastInformationBaseType
     */
    hotelId?: string;
    /**
     * 
     * @type {BudgetForecastMarketInfoBaseType}
     * @memberof BudgetForecastInformationBaseType
     */
    marketSegmentInformation?: BudgetForecastMarketInfoBaseType;
    /**
     * 
     * @type {BudgetForecastRateInfoBaseType}
     * @memberof BudgetForecastInformationBaseType
     */
    rateSegmentInformation?: BudgetForecastRateInfoBaseType;
    /**
     * 
     * @type {BudgetForecastTransactionInfoBaseType}
     * @memberof BudgetForecastInformationBaseType
     */
    transactionSegmentInformation?: BudgetForecastTransactionInfoBaseType;
    /**
     * Year of revenue to be fetched.
     * @type {string}
     * @memberof BudgetForecastInformationBaseType
     */
    year?: string;
}

/**
 * Check if a given object implements the BudgetForecastInformationBaseType interface.
 */
export function instanceOfBudgetForecastInformationBaseType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BudgetForecastInformationBaseTypeFromJSON(json: any): BudgetForecastInformationBaseType {
    return BudgetForecastInformationBaseTypeFromJSONTyped(json, false);
}

export function BudgetForecastInformationBaseTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetForecastInformationBaseType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cateringSegmentInformation': !exists(json, 'cateringSegmentInformation') ? undefined : BudgetForecastCateringInfoBaseTypeFromJSON(json['cateringSegmentInformation']),
        'customSegmentInformation': !exists(json, 'customSegmentInformation') ? undefined : BudgetForecastCustomInfoBaseTypeFromJSON(json['customSegmentInformation']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'marketSegmentInformation': !exists(json, 'marketSegmentInformation') ? undefined : BudgetForecastMarketInfoBaseTypeFromJSON(json['marketSegmentInformation']),
        'rateSegmentInformation': !exists(json, 'rateSegmentInformation') ? undefined : BudgetForecastRateInfoBaseTypeFromJSON(json['rateSegmentInformation']),
        'transactionSegmentInformation': !exists(json, 'transactionSegmentInformation') ? undefined : BudgetForecastTransactionInfoBaseTypeFromJSON(json['transactionSegmentInformation']),
        'year': !exists(json, 'year') ? undefined : json['year'],
    };
}

export function BudgetForecastInformationBaseTypeToJSON(value?: BudgetForecastInformationBaseType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cateringSegmentInformation': BudgetForecastCateringInfoBaseTypeToJSON(value.cateringSegmentInformation),
        'customSegmentInformation': BudgetForecastCustomInfoBaseTypeToJSON(value.customSegmentInformation),
        'hotelId': value.hotelId,
        'marketSegmentInformation': BudgetForecastMarketInfoBaseTypeToJSON(value.marketSegmentInformation),
        'rateSegmentInformation': BudgetForecastRateInfoBaseTypeToJSON(value.rateSegmentInformation),
        'transactionSegmentInformation': BudgetForecastTransactionInfoBaseTypeToJSON(value.transactionSegmentInformation),
        'year': value.year,
    };
}

