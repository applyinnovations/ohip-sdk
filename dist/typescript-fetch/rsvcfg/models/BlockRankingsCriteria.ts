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
import type { BlockRankingType } from './BlockRankingType';
import {
    BlockRankingTypeFromJSON,
    BlockRankingTypeFromJSONTyped,
    BlockRankingTypeToJSON,
} from './BlockRankingType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for creating Block Rankings.
 * @export
 * @interface BlockRankingsCriteria
 */
export interface BlockRankingsCriteria {
    /**
     * List of Block Rankings.
     * @type {Array<BlockRankingType>}
     * @memberof BlockRankingsCriteria
     */
    blockRankings?: Array<BlockRankingType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BlockRankingsCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockRankingsCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BlockRankingsCriteria interface.
 */
export function instanceOfBlockRankingsCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockRankingsCriteriaFromJSON(json: any): BlockRankingsCriteria {
    return BlockRankingsCriteriaFromJSONTyped(json, false);
}

export function BlockRankingsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockRankingsCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockRankings': !exists(json, 'blockRankings') ? undefined : ((json['blockRankings'] as Array<any>).map(BlockRankingTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BlockRankingsCriteriaToJSON(value?: BlockRankingsCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockRankings': value.blockRankings === undefined ? undefined : ((value.blockRankings as Array<any>).map(BlockRankingTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

