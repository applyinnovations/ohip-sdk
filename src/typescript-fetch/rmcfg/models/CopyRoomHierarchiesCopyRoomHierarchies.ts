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
import type { CopyConfigurationCodeType } from './CopyConfigurationCodeType';
import {
    CopyConfigurationCodeTypeFromJSON,
    CopyConfigurationCodeTypeFromJSONTyped,
    CopyConfigurationCodeTypeToJSON,
} from './CopyConfigurationCodeType';
import type { RoomHierarchyTypeType } from './RoomHierarchyTypeType';
import {
    RoomHierarchyTypeTypeFromJSON,
    RoomHierarchyTypeTypeFromJSONTyped,
    RoomHierarchyTypeTypeToJSON,
} from './RoomHierarchyTypeType';

/**
 * Takes either Type or Class
 * @export
 * @interface CopyRoomHierarchiesCopyRoomHierarchies
 */
export interface CopyRoomHierarchiesCopyRoomHierarchies {
    /**
     * List of room hierarchies to be copied.
     * @type {Array<CopyConfigurationCodeType>}
     * @memberof CopyRoomHierarchiesCopyRoomHierarchies
     */
    roomHierarchies?: Array<CopyConfigurationCodeType>;
    /**
     * 
     * @type {RoomHierarchyTypeType}
     * @memberof CopyRoomHierarchiesCopyRoomHierarchies
     */
    roomHierarchyType?: RoomHierarchyTypeType;
}

/**
 * Check if a given object implements the CopyRoomHierarchiesCopyRoomHierarchies interface.
 */
export function instanceOfCopyRoomHierarchiesCopyRoomHierarchies(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyRoomHierarchiesCopyRoomHierarchiesFromJSON(json: any): CopyRoomHierarchiesCopyRoomHierarchies {
    return CopyRoomHierarchiesCopyRoomHierarchiesFromJSONTyped(json, false);
}

export function CopyRoomHierarchiesCopyRoomHierarchiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyRoomHierarchiesCopyRoomHierarchies {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roomHierarchies': !exists(json, 'roomHierarchies') ? undefined : ((json['roomHierarchies'] as Array<any>).map(CopyConfigurationCodeTypeFromJSON)),
        'roomHierarchyType': !exists(json, 'roomHierarchyType') ? undefined : RoomHierarchyTypeTypeFromJSON(json['roomHierarchyType']),
    };
}

export function CopyRoomHierarchiesCopyRoomHierarchiesToJSON(value?: CopyRoomHierarchiesCopyRoomHierarchies | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roomHierarchies': value.roomHierarchies === undefined ? undefined : ((value.roomHierarchies as Array<any>).map(CopyConfigurationCodeTypeToJSON)),
        'roomHierarchyType': RoomHierarchyTypeTypeToJSON(value.roomHierarchyType),
    };
}

