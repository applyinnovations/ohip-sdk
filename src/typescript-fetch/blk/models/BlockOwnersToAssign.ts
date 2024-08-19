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
import type { SetBlockOwnersType } from './SetBlockOwnersType';
import {
    SetBlockOwnersTypeFromJSON,
    SetBlockOwnersTypeFromJSONTyped,
    SetBlockOwnersTypeToJSON,
} from './SetBlockOwnersType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object to assign block owners.
 * @export
 * @interface BlockOwnersToAssign
 */
export interface BlockOwnersToAssign {
    /**
     * 
     * @type {SetBlockOwnersType}
     * @memberof BlockOwnersToAssign
     */
    criteria?: SetBlockOwnersType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BlockOwnersToAssign
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockOwnersToAssign
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BlockOwnersToAssign interface.
 */
export function instanceOfBlockOwnersToAssign(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockOwnersToAssignFromJSON(json: any): BlockOwnersToAssign {
    return BlockOwnersToAssignFromJSONTyped(json, false);
}

export function BlockOwnersToAssignFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockOwnersToAssign {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : SetBlockOwnersTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BlockOwnersToAssignToJSON(value?: BlockOwnersToAssign | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': SetBlockOwnersTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

