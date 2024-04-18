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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { ShiftBlockCriteriaType } from './ShiftBlockCriteriaType';
import {
    ShiftBlockCriteriaTypeFromJSON,
    ShiftBlockCriteriaTypeFromJSONTyped,
    ShiftBlockCriteriaTypeToJSON,
} from './ShiftBlockCriteriaType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object to shift business block starting date.
 * @export
 * @interface BlockToShift
 */
export interface BlockToShift {
    /**
     * 
     * @type {ShiftBlockCriteriaType}
     * @memberof BlockToShift
     */
    criteria?: ShiftBlockCriteriaType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BlockToShift
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockToShift
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BlockToShift interface.
 */
export function instanceOfBlockToShift(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockToShiftFromJSON(json: any): BlockToShift {
    return BlockToShiftFromJSONTyped(json, false);
}

export function BlockToShiftFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockToShift {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : ShiftBlockCriteriaTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BlockToShiftToJSON(value?: BlockToShift | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': ShiftBlockCriteriaTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
