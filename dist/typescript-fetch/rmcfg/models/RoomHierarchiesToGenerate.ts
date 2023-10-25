/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
import type { RoomHierarchySearchType } from './RoomHierarchySearchType';
import {
    RoomHierarchySearchTypeFromJSON,
    RoomHierarchySearchTypeFromJSONTyped,
    RoomHierarchySearchTypeToJSON,
} from './RoomHierarchySearchType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Generates the room hierarchies based on the AI cost function
 * @export
 * @interface RoomHierarchiesToGenerate
 */
export interface RoomHierarchiesToGenerate {
    /**
     * 
     * @type {RoomHierarchySearchType}
     * @memberof RoomHierarchiesToGenerate
     */
    criteria?: RoomHierarchySearchType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RoomHierarchiesToGenerate
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomHierarchiesToGenerate
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RoomHierarchiesToGenerate interface.
 */
export function instanceOfRoomHierarchiesToGenerate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomHierarchiesToGenerateFromJSON(json: any): RoomHierarchiesToGenerate {
    return RoomHierarchiesToGenerateFromJSONTyped(json, false);
}

export function RoomHierarchiesToGenerateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomHierarchiesToGenerate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : RoomHierarchySearchTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RoomHierarchiesToGenerateToJSON(value?: RoomHierarchiesToGenerate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': RoomHierarchySearchTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

