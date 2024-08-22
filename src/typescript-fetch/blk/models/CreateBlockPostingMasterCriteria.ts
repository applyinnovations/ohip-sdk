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
import type { BlockId } from './BlockId';
import {
    BlockIdFromJSON,
    BlockIdFromJSONTyped,
    BlockIdToJSON,
} from './BlockId';
import type { CreateBlockPostingMasterCriteriaResponseInstruction } from './CreateBlockPostingMasterCriteriaResponseInstruction';
import {
    CreateBlockPostingMasterCriteriaResponseInstructionFromJSON,
    CreateBlockPostingMasterCriteriaResponseInstructionFromJSONTyped,
    CreateBlockPostingMasterCriteriaResponseInstructionToJSON,
} from './CreateBlockPostingMasterCriteriaResponseInstruction';

/**
 * Criteria to create a new posting master reservation.
 * @export
 * @interface CreateBlockPostingMasterCriteria
 */
export interface CreateBlockPostingMasterCriteria {
    /**
     * 
     * @type {BlockId}
     * @memberof CreateBlockPostingMasterCriteria
     */
    blockId?: BlockId;
    /**
     * Hotel Code of the business block.
     * @type {string}
     * @memberof CreateBlockPostingMasterCriteria
     */
    hotelId?: string;
    /**
     * 
     * @type {CreateBlockPostingMasterCriteriaResponseInstruction}
     * @memberof CreateBlockPostingMasterCriteria
     */
    responseInstruction?: CreateBlockPostingMasterCriteriaResponseInstruction;
}

/**
 * Check if a given object implements the CreateBlockPostingMasterCriteria interface.
 */
export function instanceOfCreateBlockPostingMasterCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateBlockPostingMasterCriteriaFromJSON(json: any): CreateBlockPostingMasterCriteria {
    return CreateBlockPostingMasterCriteriaFromJSONTyped(json, false);
}

export function CreateBlockPostingMasterCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBlockPostingMasterCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockId': !exists(json, 'blockId') ? undefined : BlockIdFromJSON(json['blockId']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'responseInstruction': !exists(json, 'responseInstruction') ? undefined : CreateBlockPostingMasterCriteriaResponseInstructionFromJSON(json['responseInstruction']),
    };
}

export function CreateBlockPostingMasterCriteriaToJSON(value?: CreateBlockPostingMasterCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockId': BlockIdToJSON(value.blockId),
        'hotelId': value.hotelId,
        'responseInstruction': CreateBlockPostingMasterCriteriaResponseInstructionToJSON(value.responseInstruction),
    };
}

