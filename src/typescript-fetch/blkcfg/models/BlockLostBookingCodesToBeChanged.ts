/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockLostBookingCodesType } from './BlockLostBookingCodesType';
import {
    BlockLostBookingCodesTypeFromJSON,
    BlockLostBookingCodesTypeFromJSONTyped,
    BlockLostBookingCodesTypeToJSON,
} from './BlockLostBookingCodesType';
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
 * Request object for changing Block Lost Booking Codes.
 * @export
 * @interface BlockLostBookingCodesToBeChanged
 */
export interface BlockLostBookingCodesToBeChanged {
    /**
     * 
     * @type {BlockLostBookingCodesType}
     * @memberof BlockLostBookingCodesToBeChanged
     */
    blockLostBookingCodes?: BlockLostBookingCodesType;
    /**
     * 
     * @type {Links}
     * @memberof BlockLostBookingCodesToBeChanged
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof BlockLostBookingCodesToBeChanged
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the BlockLostBookingCodesToBeChanged interface.
 */
export function instanceOfBlockLostBookingCodesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockLostBookingCodesToBeChangedFromJSON(json: any): BlockLostBookingCodesToBeChanged {
    return BlockLostBookingCodesToBeChangedFromJSONTyped(json, false);
}

export function BlockLostBookingCodesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockLostBookingCodesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockLostBookingCodes': !exists(json, 'blockLostBookingCodes') ? undefined : BlockLostBookingCodesTypeFromJSON(json['blockLostBookingCodes']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function BlockLostBookingCodesToBeChangedToJSON(value?: BlockLostBookingCodesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockLostBookingCodes': BlockLostBookingCodesTypeToJSON(value.blockLostBookingCodes),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
