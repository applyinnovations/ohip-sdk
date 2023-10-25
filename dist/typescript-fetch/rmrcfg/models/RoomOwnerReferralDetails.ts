/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { RoomOwnerReferralList } from './RoomOwnerReferralList';
import {
    RoomOwnerReferralListFromJSON,
    RoomOwnerReferralListFromJSONTyped,
    RoomOwnerReferralListToJSON,
} from './RoomOwnerReferralList';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object containing Room Owner Referral details.
 * @export
 * @interface RoomOwnerReferralDetails
 */
export interface RoomOwnerReferralDetails {
    /**
     * Flag to indicate if the associated profile has any active Room Ownership records attached to it.
     * @type {boolean}
     * @memberof RoomOwnerReferralDetails
     */
    hasOwnershipRecords?: boolean;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RoomOwnerReferralDetails
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {RoomOwnerReferralList}
     * @memberof RoomOwnerReferralDetails
     */
    roomOwnerReferrals?: RoomOwnerReferralList;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomOwnerReferralDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RoomOwnerReferralDetails interface.
 */
export function instanceOfRoomOwnerReferralDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomOwnerReferralDetailsFromJSON(json: any): RoomOwnerReferralDetails {
    return RoomOwnerReferralDetailsFromJSONTyped(json, false);
}

export function RoomOwnerReferralDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomOwnerReferralDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasOwnershipRecords': !exists(json, 'hasOwnershipRecords') ? undefined : json['hasOwnershipRecords'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'roomOwnerReferrals': !exists(json, 'roomOwnerReferrals') ? undefined : RoomOwnerReferralListFromJSON(json['roomOwnerReferrals']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RoomOwnerReferralDetailsToJSON(value?: RoomOwnerReferralDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasOwnershipRecords': value.hasOwnershipRecords,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'roomOwnerReferrals': RoomOwnerReferralListToJSON(value.roomOwnerReferrals),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

