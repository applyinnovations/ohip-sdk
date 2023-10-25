/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
import type { CateringEventCopyInstructionType } from './CateringEventCopyInstructionType';
import {
    CateringEventCopyInstructionTypeFromJSON,
    CateringEventCopyInstructionTypeFromJSONTyped,
    CateringEventCopyInstructionTypeToJSON,
} from './CateringEventCopyInstructionType';
import type { CopyStatusModeType } from './CopyStatusModeType';
import {
    CopyStatusModeTypeFromJSON,
    CopyStatusModeTypeFromJSONTyped,
    CopyStatusModeTypeToJSON,
} from './CopyStatusModeType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Criteria to copy events
 * @export
 * @interface CopyCateringEventsType
 */
export interface CopyCateringEventsType {
    /**
     * 
     * @type {BlockId}
     * @memberof CopyCateringEventsType
     */
    blockId?: BlockId;
    /**
     * Indicates wether to perform pre-cahnge or post-change snapshot of the copied events. By default, it is always considered as false and will provide post-change snapshot.
     * @type {boolean}
     * @memberof CopyCateringEventsType
     */
    copyAsSnapshot?: boolean;
    /**
     * Indicate weather to include Catering Event Copy Options. e.g. sub events, notes.
     * @type {Array<CateringEventCopyInstructionType>}
     * @memberof CopyCateringEventsType
     */
    copyInstructions?: Array<CateringEventCopyInstructionType>;
    /**
     * 
     * @type {CopyStatusModeType}
     * @memberof CopyCateringEventsType
     */
    copyStatusMode?: CopyStatusModeType;
    /**
     * Specifies a single date.
     * @type {Array<Date>}
     * @memberof CopyCateringEventsType
     */
    copyToDates?: Array<Date>;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof CopyCateringEventsType
     */
    copyToPackageId?: UniqueIDType;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof CopyCateringEventsType
     */
    eventIdList?: Array<UniqueIDType>;
    /**
     * Hotel code where event will be copied.
     * @type {string}
     * @memberof CopyCateringEventsType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the CopyCateringEventsType interface.
 */
export function instanceOfCopyCateringEventsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyCateringEventsTypeFromJSON(json: any): CopyCateringEventsType {
    return CopyCateringEventsTypeFromJSONTyped(json, false);
}

export function CopyCateringEventsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyCateringEventsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockId': !exists(json, 'blockId') ? undefined : BlockIdFromJSON(json['blockId']),
        'copyAsSnapshot': !exists(json, 'copyAsSnapshot') ? undefined : json['copyAsSnapshot'],
        'copyInstructions': !exists(json, 'copyInstructions') ? undefined : ((json['copyInstructions'] as Array<any>).map(CateringEventCopyInstructionTypeFromJSON)),
        'copyStatusMode': !exists(json, 'copyStatusMode') ? undefined : CopyStatusModeTypeFromJSON(json['copyStatusMode']),
        'copyToDates': !exists(json, 'copyToDates') ? undefined : json['copyToDates'],
        'copyToPackageId': !exists(json, 'copyToPackageId') ? undefined : UniqueIDTypeFromJSON(json['copyToPackageId']),
        'eventIdList': !exists(json, 'eventIdList') ? undefined : ((json['eventIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function CopyCateringEventsTypeToJSON(value?: CopyCateringEventsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockId': BlockIdToJSON(value.blockId),
        'copyAsSnapshot': value.copyAsSnapshot,
        'copyInstructions': value.copyInstructions === undefined ? undefined : ((value.copyInstructions as Array<any>).map(CateringEventCopyInstructionTypeToJSON)),
        'copyStatusMode': CopyStatusModeTypeToJSON(value.copyStatusMode),
        'copyToDates': value.copyToDates,
        'copyToPackageId': UniqueIDTypeToJSON(value.copyToPackageId),
        'eventIdList': value.eventIdList === undefined ? undefined : ((value.eventIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'hotelId': value.hotelId,
    };
}

