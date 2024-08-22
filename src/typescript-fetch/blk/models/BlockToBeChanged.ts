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
import type { BlockInstructionType } from './BlockInstructionType';
import {
    BlockInstructionTypeFromJSON,
    BlockInstructionTypeFromJSONTyped,
    BlockInstructionTypeToJSON,
} from './BlockInstructionType';
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
 * Request object for change/modification of block details. This object contains modified block details with unique identifiers for each block. The standard optional Opera Context element is also included.
 * @export
 * @interface BlockToBeChanged
 */
export interface BlockToBeChanged {
    /**
     * Provides detailed information of the block to be changed.
     * @type {Array<BlockInstructionType>}
     * @memberof BlockToBeChanged
     */
    blocks?: Array<BlockInstructionType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BlockToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BlockToBeChanged interface.
 */
export function instanceOfBlockToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockToBeChangedFromJSON(json: any): BlockToBeChanged {
    return BlockToBeChangedFromJSONTyped(json, false);
}

export function BlockToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blocks': !exists(json, 'blocks') ? undefined : ((json['blocks'] as Array<any>).map(BlockInstructionTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BlockToBeChangedToJSON(value?: BlockToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blocks': value.blocks === undefined ? undefined : ((value.blocks as Array<any>).map(BlockInstructionTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

