/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
 * Request object that holds the details of Market Code to be created.
 * @export
 * @interface MarketCodeCriteria
 */
export interface MarketCodeCriteria {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof MarketCodeCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {MarketCodeType}
     * @memberof MarketCodeCriteria
     */
    marketCode?: MarketCodeType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MarketCodeCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the MarketCodeCriteria interface.
 */
export function instanceOfMarketCodeCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MarketCodeCriteriaFromJSON(json: any): MarketCodeCriteria {
    return MarketCodeCriteriaFromJSONTyped(json, false);
}

export function MarketCodeCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketCodeCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'marketCode': !exists(json, 'marketCode') ? undefined : MarketCodeTypeFromJSON(json['marketCode']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function MarketCodeCriteriaToJSON(value?: MarketCodeCriteria | null): any {
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

