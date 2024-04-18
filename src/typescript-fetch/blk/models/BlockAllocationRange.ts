/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockAllocationRangeType } from './BlockAllocationRangeType';
import {
    BlockAllocationRangeTypeFromJSON,
    BlockAllocationRangeTypeFromJSONTyped,
    BlockAllocationRangeTypeToJSON,
} from './BlockAllocationRangeType';
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
 * Request for updating block allocation for a range of dates.
 * @export
 * @interface BlockAllocationRange
 */
export interface BlockAllocationRange {
    /**
     * 
     * @type {BlockAllocationRangeType}
     * @memberof BlockAllocationRange
     */
    blockAllocationRange?: BlockAllocationRangeType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BlockAllocationRange
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockAllocationRange
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BlockAllocationRange interface.
 */
export function instanceOfBlockAllocationRange(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockAllocationRangeFromJSON(json: any): BlockAllocationRange {
    return BlockAllocationRangeFromJSONTyped(json, false);
}

export function BlockAllocationRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockAllocationRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockAllocationRange': !exists(json, 'blockAllocationRange') ? undefined : BlockAllocationRangeTypeFromJSON(json['blockAllocationRange']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BlockAllocationRangeToJSON(value?: BlockAllocationRange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockAllocationRange': BlockAllocationRangeTypeToJSON(value.blockAllocationRange),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
