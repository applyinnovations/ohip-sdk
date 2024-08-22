/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StrategyDetailType } from './StrategyDetailType';
import {
    StrategyDetailTypeFromJSON,
    StrategyDetailTypeFromJSONTyped,
    StrategyDetailTypeToJSON,
} from './StrategyDetailType';

/**
 * The Rate strategy type with Hotel code.
 * @export
 * @interface HotelRateStrategyType
 */
export interface HotelRateStrategyType {
    /**
     * Hotel code.
     * @type {string}
     * @memberof HotelRateStrategyType
     */
    hotelId?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof HotelRateStrategyType
     */
    id?: string;
    /**
     * 
     * @type {StrategyDetailType}
     * @memberof HotelRateStrategyType
     */
    strategyDetail?: StrategyDetailType;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof HotelRateStrategyType
     */
    type?: string;
}

/**
 * Check if a given object implements the HotelRateStrategyType interface.
 */
export function instanceOfHotelRateStrategyType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelRateStrategyTypeFromJSON(json: any): HotelRateStrategyType {
    return HotelRateStrategyTypeFromJSONTyped(json, false);
}

export function HotelRateStrategyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelRateStrategyType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'strategyDetail': !exists(json, 'strategyDetail') ? undefined : StrategyDetailTypeFromJSON(json['strategyDetail']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function HotelRateStrategyTypeToJSON(value?: HotelRateStrategyType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'id': value.id,
        'strategyDetail': StrategyDetailTypeToJSON(value.strategyDetail),
        'type': value.type,
    };
}

