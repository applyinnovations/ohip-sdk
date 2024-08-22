/* tslint:disable */
/* eslint-disable */
/**
 * Opera Cloud Inventory Asynchronous API
 * APIs to cater for Inventory related asynchronous functionality in OPERA Cloud. This includes viewing inventory data along with its revenue and updating inventory&apos;s sell limits for date ranges. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HouseSellLimitType } from './HouseSellLimitType';
import {
    HouseSellLimitTypeFromJSON,
    HouseSellLimitTypeFromJSONTyped,
    HouseSellLimitTypeToJSON,
} from './HouseSellLimitType';
import type { RoomClassSellLimitType } from './RoomClassSellLimitType';
import {
    RoomClassSellLimitTypeFromJSON,
    RoomClassSellLimitTypeFromJSONTyped,
    RoomClassSellLimitTypeToJSON,
} from './RoomClassSellLimitType';
import type { RoomTypeSellLimitType } from './RoomTypeSellLimitType';
import {
    RoomTypeSellLimitTypeFromJSON,
    RoomTypeSellLimitTypeFromJSONTyped,
    RoomTypeSellLimitTypeToJSON,
} from './RoomTypeSellLimitType';

/**
 * This type is used by sell limit request.
 * @export
 * @interface SellLimitByDateType
 */
export interface SellLimitByDateType {
    /**
     * Collection of House level sell limit by the date.
     * @type {Array<HouseSellLimitType>}
     * @memberof SellLimitByDateType
     */
    houseSellLimits?: Array<HouseSellLimitType>;
    /**
     * Collection of Room Class level sell limit by the date.
     * @type {Array<RoomClassSellLimitType>}
     * @memberof SellLimitByDateType
     */
    roomClassSellLimits?: Array<RoomClassSellLimitType>;
    /**
     * Collection of Room type level sell limit by the date.
     * @type {Array<RoomTypeSellLimitType>}
     * @memberof SellLimitByDateType
     */
    roomTypeSellLimits?: Array<RoomTypeSellLimitType>;
}

/**
 * Check if a given object implements the SellLimitByDateType interface.
 */
export function instanceOfSellLimitByDateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SellLimitByDateTypeFromJSON(json: any): SellLimitByDateType {
    return SellLimitByDateTypeFromJSONTyped(json, false);
}

export function SellLimitByDateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SellLimitByDateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'houseSellLimits': !exists(json, 'houseSellLimits') ? undefined : ((json['houseSellLimits'] as Array<any>).map(HouseSellLimitTypeFromJSON)),
        'roomClassSellLimits': !exists(json, 'roomClassSellLimits') ? undefined : ((json['roomClassSellLimits'] as Array<any>).map(RoomClassSellLimitTypeFromJSON)),
        'roomTypeSellLimits': !exists(json, 'roomTypeSellLimits') ? undefined : ((json['roomTypeSellLimits'] as Array<any>).map(RoomTypeSellLimitTypeFromJSON)),
    };
}

export function SellLimitByDateTypeToJSON(value?: SellLimitByDateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'houseSellLimits': value.houseSellLimits === undefined ? undefined : ((value.houseSellLimits as Array<any>).map(HouseSellLimitTypeToJSON)),
        'roomClassSellLimits': value.roomClassSellLimits === undefined ? undefined : ((value.roomClassSellLimits as Array<any>).map(RoomClassSellLimitTypeToJSON)),
        'roomTypeSellLimits': value.roomTypeSellLimits === undefined ? undefined : ((value.roomTypeSellLimits as Array<any>).map(RoomTypeSellLimitTypeToJSON)),
    };
}

