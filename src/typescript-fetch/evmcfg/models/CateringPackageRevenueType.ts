/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
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
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Type used for managing Revenue Details associated with a particular Catering Package Price Code.
 * @export
 * @interface CateringPackageRevenueType
 */
export interface CateringPackageRevenueType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof CateringPackageRevenueType
     */
    costExpected?: CurrencyAmountType;
    /**
     * Sorting Order.
     * @type {number}
     * @memberof CateringPackageRevenueType
     */
    orderBy?: number;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof CateringPackageRevenueType
     */
    packageEventId?: UniqueIDType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof CateringPackageRevenueType
     */
    revExpected?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof CateringPackageRevenueType
     */
    revForecast?: CurrencyAmountType;
    /**
     * Revenue Type associated with the Catering Package Price Code.
     * @type {string}
     * @memberof CateringPackageRevenueType
     */
    revType?: string;
}

/**
 * Check if a given object implements the CateringPackageRevenueType interface.
 */
export function instanceOfCateringPackageRevenueType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringPackageRevenueTypeFromJSON(json: any): CateringPackageRevenueType {
    return CateringPackageRevenueTypeFromJSONTyped(json, false);
}

export function CateringPackageRevenueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringPackageRevenueType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'costExpected': !exists(json, 'costExpected') ? undefined : CurrencyAmountTypeFromJSON(json['costExpected']),
        'orderBy': !exists(json, 'orderBy') ? undefined : json['orderBy'],
        'packageEventId': !exists(json, 'packageEventId') ? undefined : UniqueIDTypeFromJSON(json['packageEventId']),
        'revExpected': !exists(json, 'revExpected') ? undefined : CurrencyAmountTypeFromJSON(json['revExpected']),
        'revForecast': !exists(json, 'revForecast') ? undefined : CurrencyAmountTypeFromJSON(json['revForecast']),
        'revType': !exists(json, 'revType') ? undefined : json['revType'],
    };
}

export function CateringPackageRevenueTypeToJSON(value?: CateringPackageRevenueType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'costExpected': CurrencyAmountTypeToJSON(value.costExpected),
        'orderBy': value.orderBy,
        'packageEventId': UniqueIDTypeToJSON(value.packageEventId),
        'revExpected': CurrencyAmountTypeToJSON(value.revExpected),
        'revForecast': CurrencyAmountTypeToJSON(value.revForecast),
        'revType': value.revType,
    };
}

