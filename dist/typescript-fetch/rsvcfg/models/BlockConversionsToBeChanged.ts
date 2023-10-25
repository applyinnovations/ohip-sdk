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
import type { BlockConversionType } from './BlockConversionType';
import {
    BlockConversionTypeFromJSON,
    BlockConversionTypeFromJSONTyped,
    BlockConversionTypeToJSON,
} from './BlockConversionType';
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
 * Request object for changing Block Conversions.
 * @export
 * @interface BlockConversionsToBeChanged
 */
export interface BlockConversionsToBeChanged {
    /**
     * List of Block Conversions.
     * @type {Array<BlockConversionType>}
     * @memberof BlockConversionsToBeChanged
     */
    blockConversions?: Array<BlockConversionType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BlockConversionsToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockConversionsToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BlockConversionsToBeChanged interface.
 */
export function instanceOfBlockConversionsToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockConversionsToBeChangedFromJSON(json: any): BlockConversionsToBeChanged {
    return BlockConversionsToBeChangedFromJSONTyped(json, false);
}

export function BlockConversionsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockConversionsToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockConversions': !exists(json, 'blockConversions') ? undefined : ((json['blockConversions'] as Array<any>).map(BlockConversionTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BlockConversionsToBeChangedToJSON(value?: BlockConversionsToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockConversions': value.blockConversions === undefined ? undefined : ((value.blockConversions as Array<any>).map(BlockConversionTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

