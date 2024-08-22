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
import type { BorrowCandidateType } from './BorrowCandidateType';
import {
    BorrowCandidateTypeFromJSON,
    BorrowCandidateTypeFromJSONTyped,
    BorrowCandidateTypeToJSON,
} from './BorrowCandidateType';
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
 * Response object that returns the candidate room types on which inventory is available to borrow. The standard optional Opera Context element is also included.
 * @export
 * @interface InventoryToBorrowInfo
 */
export interface InventoryToBorrowInfo {
    /**
     * Contains the dates and rooms that can be borrowed from room types or House if the block is elastic.
     * @type {Array<BorrowCandidateType>}
     * @memberof InventoryToBorrowInfo
     */
    borrowCandidates?: Array<BorrowCandidateType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof InventoryToBorrowInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof InventoryToBorrowInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the InventoryToBorrowInfo interface.
 */
export function instanceOfInventoryToBorrowInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InventoryToBorrowInfoFromJSON(json: any): InventoryToBorrowInfo {
    return InventoryToBorrowInfoFromJSONTyped(json, false);
}

export function InventoryToBorrowInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryToBorrowInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'borrowCandidates': !exists(json, 'borrowCandidates') ? undefined : ((json['borrowCandidates'] as Array<any>).map(BorrowCandidateTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function InventoryToBorrowInfoToJSON(value?: InventoryToBorrowInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'borrowCandidates': value.borrowCandidates === undefined ? undefined : ((value.borrowCandidates as Array<any>).map(BorrowCandidateTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

