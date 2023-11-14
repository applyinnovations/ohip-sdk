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
import type { CateringEventsProcessedInfoList } from './CateringEventsProcessedInfoList';
import {
    CateringEventsProcessedInfoListFromJSON,
    CateringEventsProcessedInfoListFromJSONTyped,
    CateringEventsProcessedInfoListToJSON,
} from './CateringEventsProcessedInfoList';
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
 * Response object for shift block operation.
 * @export
 * @interface ShiftedBlock
 */
export interface ShiftedBlock {
    /**
     * 
     * @type {CateringEventsProcessedInfoList}
     * @memberof ShiftedBlock
     */
    cateringEventsProcessedInfo?: CateringEventsProcessedInfoList;
    /**
     * 
     * @type {Links}
     * @memberof ShiftedBlock
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof ShiftedBlock
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ShiftedBlock interface.
 */
export function instanceOfShiftedBlock(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ShiftedBlockFromJSON(json: any): ShiftedBlock {
    return ShiftedBlockFromJSONTyped(json, false);
}

export function ShiftedBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShiftedBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cateringEventsProcessedInfo': !exists(json, 'cateringEventsProcessedInfo') ? undefined : CateringEventsProcessedInfoListFromJSON(json['cateringEventsProcessedInfo']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ShiftedBlockToJSON(value?: ShiftedBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cateringEventsProcessedInfo': CateringEventsProcessedInfoListToJSON(value.cateringEventsProcessedInfo),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
