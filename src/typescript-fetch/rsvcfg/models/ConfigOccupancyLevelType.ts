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
/**
 * This type holds the upsell amount by occupancy levels. This is used when upsell rule is being set bu occupancy levels
 * @export
 * @interface ConfigOccupancyLevelType
 */
export interface ConfigOccupancyLevelType {
    /**
     * Used to specify the occupancy level id.
     * @type {number}
     * @memberof ConfigOccupancyLevelType
     */
    level?: number;
    /**
     * Used to specify the occupancy level description.
     * @type {string}
     * @memberof ConfigOccupancyLevelType
     */
    levelDescription?: string;
    /**
     * Used to specify the occupancy level upsell amount.
     * @type {number}
     * @memberof ConfigOccupancyLevelType
     */
    levelUpsellAmount?: number;
}

/**
 * Check if a given object implements the ConfigOccupancyLevelType interface.
 */
export function instanceOfConfigOccupancyLevelType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigOccupancyLevelTypeFromJSON(json: any): ConfigOccupancyLevelType {
    return ConfigOccupancyLevelTypeFromJSONTyped(json, false);
}

export function ConfigOccupancyLevelTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigOccupancyLevelType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'level': !exists(json, 'level') ? undefined : json['level'],
        'levelDescription': !exists(json, 'levelDescription') ? undefined : json['levelDescription'],
        'levelUpsellAmount': !exists(json, 'levelUpsellAmount') ? undefined : json['levelUpsellAmount'],
    };
}

export function ConfigOccupancyLevelTypeToJSON(value?: ConfigOccupancyLevelType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'level': value.level,
        'levelDescription': value.levelDescription,
        'levelUpsellAmount': value.levelUpsellAmount,
    };
}

