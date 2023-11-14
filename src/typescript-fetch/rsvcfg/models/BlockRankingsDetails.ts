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
import type { BlockRankingsType } from './BlockRankingsType';
import {
    BlockRankingsTypeFromJSON,
    BlockRankingsTypeFromJSONTyped,
    BlockRankingsTypeToJSON,
} from './BlockRankingsType';
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
 * Response object for fetching Block Rankings.
 * @export
 * @interface BlockRankingsDetails
 */
export interface BlockRankingsDetails {
    /**
     * 
     * @type {BlockRankingsType}
     * @memberof BlockRankingsDetails
     */
    blockRankings?: BlockRankingsType;
    /**
     * 
     * @type {Links}
     * @memberof BlockRankingsDetails
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof BlockRankingsDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the BlockRankingsDetails interface.
 */
export function instanceOfBlockRankingsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockRankingsDetailsFromJSON(json: any): BlockRankingsDetails {
    return BlockRankingsDetailsFromJSONTyped(json, false);
}

export function BlockRankingsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockRankingsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockRankings': !exists(json, 'blockRankings') ? undefined : BlockRankingsTypeFromJSON(json['blockRankings']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function BlockRankingsDetailsToJSON(value?: BlockRankingsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockRankings': BlockRankingsTypeToJSON(value.blockRankings),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
