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
import type { AwardVouchersTypeInner } from './AwardVouchersTypeInner';
import {
    AwardVouchersTypeInnerFromJSON,
    AwardVouchersTypeInnerFromJSONTyped,
    AwardVouchersTypeInnerToJSON,
} from './AwardVouchersTypeInner';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Membership Awards code applied on the reservation.
 * @export
 * @interface ResAwardsType
 */
export interface ResAwardsType {
    /**
     * This stores the Membership Awards code applied on the reservation.
     * @type {Array<AwardVouchersTypeInner>}
     * @memberof ResAwardsType
     */
    awardVouchers?: Array<AwardVouchersTypeInner>;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ResAwardsType
     */
    membershipNo?: UniqueIDType;
    /**
     * Room Type before the Upgrade Award.
     * @type {string}
     * @memberof ResAwardsType
     */
    originalRoomType?: string;
    /**
     * Room Type after the Upgrade Award.
     * @type {string}
     * @memberof ResAwardsType
     */
    upgradeRoomType?: string;
}

/**
 * Check if a given object implements the ResAwardsType interface.
 */
export function instanceOfResAwardsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResAwardsTypeFromJSON(json: any): ResAwardsType {
    return ResAwardsTypeFromJSONTyped(json, false);
}

export function ResAwardsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResAwardsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'awardVouchers': !exists(json, 'awardVouchers') ? undefined : ((json['awardVouchers'] as Array<any>).map(AwardVouchersTypeInnerFromJSON)),
        'membershipNo': !exists(json, 'membershipNo') ? undefined : UniqueIDTypeFromJSON(json['membershipNo']),
        'originalRoomType': !exists(json, 'originalRoomType') ? undefined : json['originalRoomType'],
        'upgradeRoomType': !exists(json, 'upgradeRoomType') ? undefined : json['upgradeRoomType'],
    };
}

export function ResAwardsTypeToJSON(value?: ResAwardsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'awardVouchers': value.awardVouchers === undefined ? undefined : ((value.awardVouchers as Array<any>).map(AwardVouchersTypeInnerToJSON)),
        'membershipNo': UniqueIDTypeToJSON(value.membershipNo),
        'originalRoomType': value.originalRoomType,
        'upgradeRoomType': value.upgradeRoomType,
    };
}

