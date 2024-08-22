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
import type { CateringEventsProcessedInfoType } from './CateringEventsProcessedInfoType';
import {
    CateringEventsProcessedInfoTypeFromJSON,
    CateringEventsProcessedInfoTypeFromJSONTyped,
    CateringEventsProcessedInfoTypeToJSON,
} from './CateringEventsProcessedInfoType';
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
 * Response object for shift block operation.
 * @export
 * @interface ShiftedBlock
 */
export interface ShiftedBlock {
    /**
     * Status/Info of the processed events.
     * @type {Array<CateringEventsProcessedInfoType>}
     * @memberof ShiftedBlock
     */
    cateringEventsProcessedInfo?: Array<CateringEventsProcessedInfoType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ShiftedBlock
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ShiftedBlock
     */
    warnings?: Array<WarningType>;
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
        
        'cateringEventsProcessedInfo': !exists(json, 'cateringEventsProcessedInfo') ? undefined : ((json['cateringEventsProcessedInfo'] as Array<any>).map(CateringEventsProcessedInfoTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
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
        
        'cateringEventsProcessedInfo': value.cateringEventsProcessedInfo === undefined ? undefined : ((value.cateringEventsProcessedInfo as Array<any>).map(CateringEventsProcessedInfoTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

