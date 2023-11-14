/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';
import type { YieldMarketInfoType } from './YieldMarketInfoType';
import {
    YieldMarketInfoTypeFromJSON,
    YieldMarketInfoTypeFromJSONTyped,
    YieldMarketInfoTypeToJSON,
} from './YieldMarketInfoType';

/**
 * Response object Of Yield Market Type LookUp.
 * @export
 * @interface YieldMarketTypeDetails
 */
export interface YieldMarketTypeDetails {
    /**
     * 
     * @type {Links}
     * @memberof YieldMarketTypeDetails
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof YieldMarketTypeDetails
     */
    warnings?: WarningsType;
    /**
     * 
     * @type {YieldMarketInfoType}
     * @memberof YieldMarketTypeDetails
     */
    yieldMarketTypeInfo?: YieldMarketInfoType;
}

/**
 * Check if a given object implements the YieldMarketTypeDetails interface.
 */
export function instanceOfYieldMarketTypeDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function YieldMarketTypeDetailsFromJSON(json: any): YieldMarketTypeDetails {
    return YieldMarketTypeDetailsFromJSONTyped(json, false);
}

export function YieldMarketTypeDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): YieldMarketTypeDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
        'yieldMarketTypeInfo': !exists(json, 'yieldMarketTypeInfo') ? undefined : YieldMarketInfoTypeFromJSON(json['yieldMarketTypeInfo']),
    };
}

export function YieldMarketTypeDetailsToJSON(value?: YieldMarketTypeDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
        'yieldMarketTypeInfo': YieldMarketInfoTypeToJSON(value.yieldMarketTypeInfo),
    };
}
