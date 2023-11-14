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
import type { BlockConversionsType } from './BlockConversionsType';
import {
    BlockConversionsTypeFromJSON,
    BlockConversionsTypeFromJSONTyped,
    BlockConversionsTypeToJSON,
} from './BlockConversionsType';
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
 * Response object for fetching Block Conversions.
 * @export
 * @interface BlockConversionsDetails
 */
export interface BlockConversionsDetails {
    /**
     * 
     * @type {BlockConversionsType}
     * @memberof BlockConversionsDetails
     */
    blockConversions?: BlockConversionsType;
    /**
     * 
     * @type {Links}
     * @memberof BlockConversionsDetails
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof BlockConversionsDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the BlockConversionsDetails interface.
 */
export function instanceOfBlockConversionsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockConversionsDetailsFromJSON(json: any): BlockConversionsDetails {
    return BlockConversionsDetailsFromJSONTyped(json, false);
}

export function BlockConversionsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockConversionsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockConversions': !exists(json, 'blockConversions') ? undefined : BlockConversionsTypeFromJSON(json['blockConversions']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function BlockConversionsDetailsToJSON(value?: BlockConversionsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockConversions': BlockConversionsTypeToJSON(value.blockConversions),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
