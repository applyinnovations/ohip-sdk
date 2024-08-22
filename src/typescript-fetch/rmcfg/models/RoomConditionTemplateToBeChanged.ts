/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { RoomCondtionTemplateType } from './RoomCondtionTemplateType';
import {
    RoomCondtionTemplateTypeFromJSON,
    RoomCondtionTemplateTypeFromJSONTyped,
    RoomCondtionTemplateTypeToJSON,
} from './RoomCondtionTemplateType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for Modifying Room Condition Template.
 * @export
 * @interface RoomConditionTemplateToBeChanged
 */
export interface RoomConditionTemplateToBeChanged {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RoomConditionTemplateToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {RoomCondtionTemplateType}
     * @memberof RoomConditionTemplateToBeChanged
     */
    roomConditionTemplate?: RoomCondtionTemplateType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomConditionTemplateToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RoomConditionTemplateToBeChanged interface.
 */
export function instanceOfRoomConditionTemplateToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomConditionTemplateToBeChangedFromJSON(json: any): RoomConditionTemplateToBeChanged {
    return RoomConditionTemplateToBeChangedFromJSONTyped(json, false);
}

export function RoomConditionTemplateToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomConditionTemplateToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'roomConditionTemplate': !exists(json, 'roomConditionTemplate') ? undefined : RoomCondtionTemplateTypeFromJSON(json['roomConditionTemplate']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RoomConditionTemplateToBeChangedToJSON(value?: RoomConditionTemplateToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'roomConditionTemplate': RoomCondtionTemplateTypeToJSON(value.roomConditionTemplate),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

