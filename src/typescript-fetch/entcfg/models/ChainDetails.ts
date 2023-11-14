/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChainConfigInfoType } from './ChainConfigInfoType';
import {
    ChainConfigInfoTypeFromJSON,
    ChainConfigInfoTypeFromJSONTyped,
    ChainConfigInfoTypeToJSON,
} from './ChainConfigInfoType';
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

/**
 * Response object for fetching Chain.
 * @export
 * @interface ChainDetails
 */
export interface ChainDetails {
    /**
     * 
     * @type {ChainConfigInfoType}
     * @memberof ChainDetails
     */
    chains?: ChainConfigInfoType;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ChainDetails
     */
    hasMore?: boolean;
    /**
     * 
     * @type {Links}
     * @memberof ChainDetails
     */
    links?: Links;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ChainDetails
     */
    totalResults?: number;
    /**
     * 
     * @type {WarningsType}
     * @memberof ChainDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ChainDetails interface.
 */
export function instanceOfChainDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChainDetailsFromJSON(json: any): ChainDetails {
    return ChainDetailsFromJSONTyped(json, false);
}

export function ChainDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chains': !exists(json, 'chains') ? undefined : ChainConfigInfoTypeFromJSON(json['chains']),
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ChainDetailsToJSON(value?: ChainDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chains': ChainConfigInfoTypeToJSON(value.chains),
        'hasMore': value.hasMore,
        'links': LinksToJSON(value.links),
        'totalResults': value.totalResults,
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
