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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { MarketCodeType } from './MarketCodeType';
import {
    MarketCodeTypeFromJSON,
    MarketCodeTypeFromJSONTyped,
    MarketCodeTypeToJSON,
} from './MarketCodeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object that holds the details of Market Code to be changed.
 * @export
 * @interface MarketCodeToBeChanged
 */
export interface MarketCodeToBeChanged {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof MarketCodeToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {MarketCodeType}
     * @memberof MarketCodeToBeChanged
     */
    marketCode?: MarketCodeType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MarketCodeToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the MarketCodeToBeChanged interface.
 */
export function instanceOfMarketCodeToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MarketCodeToBeChangedFromJSON(json: any): MarketCodeToBeChanged {
    return MarketCodeToBeChangedFromJSONTyped(json, false);
}

export function MarketCodeToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketCodeToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'marketCode': !exists(json, 'marketCode') ? undefined : MarketCodeTypeFromJSON(json['marketCode']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function MarketCodeToBeChangedToJSON(value?: MarketCodeToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'marketCode': MarketCodeTypeToJSON(value.marketCode),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

