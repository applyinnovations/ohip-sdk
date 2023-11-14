/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockRateCodeValidationType } from './BlockRateCodeValidationType';
import {
    BlockRateCodeValidationTypeFromJSON,
    BlockRateCodeValidationTypeFromJSONTyped,
    BlockRateCodeValidationTypeToJSON,
} from './BlockRateCodeValidationType';
import type { BlocksType } from './BlocksType';
import {
    BlocksTypeFromJSON,
    BlocksTypeFromJSONTyped,
    BlocksTypeToJSON,
} from './BlocksType';
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
 * Request object for validating creation of blocks only. Block is not created. This object contains block details with unique identifiers for each block. The standard optional Opera Context element is also included.
 * @export
 * @interface BlockValidate
 */
export interface BlockValidate {
    /**
     * 
     * @type {BlockRateCodeValidationType}
     * @memberof BlockValidate
     */
    blockRateCodeDetails?: BlockRateCodeValidationType;
    /**
     * 
     * @type {BlocksType}
     * @memberof BlockValidate
     */
    blocks?: BlocksType;
    /**
     * 
     * @type {Links}
     * @memberof BlockValidate
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof BlockValidate
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the BlockValidate interface.
 */
export function instanceOfBlockValidate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockValidateFromJSON(json: any): BlockValidate {
    return BlockValidateFromJSONTyped(json, false);
}

export function BlockValidateFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockValidate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockRateCodeDetails': !exists(json, 'blockRateCodeDetails') ? undefined : BlockRateCodeValidationTypeFromJSON(json['blockRateCodeDetails']),
        'blocks': !exists(json, 'blocks') ? undefined : BlocksTypeFromJSON(json['blocks']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function BlockValidateToJSON(value?: BlockValidate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockRateCodeDetails': BlockRateCodeValidationTypeToJSON(value.blockRateCodeDetails),
        'blocks': BlocksTypeToJSON(value.blocks),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
