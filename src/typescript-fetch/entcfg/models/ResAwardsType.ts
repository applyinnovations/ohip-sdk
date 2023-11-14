/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AwardVouchersType } from './AwardVouchersType';
import {
    AwardVouchersTypeFromJSON,
    AwardVouchersTypeFromJSONTyped,
    AwardVouchersTypeToJSON,
} from './AwardVouchersType';
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
     * 
     * @type {AwardVouchersType}
     * @memberof ResAwardsType
     */
    awardVouchers?: AwardVouchersType;
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
        
        'awardVouchers': !exists(json, 'awardVouchers') ? undefined : AwardVouchersTypeFromJSON(json['awardVouchers']),
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
        
        'awardVouchers': AwardVouchersTypeToJSON(value.awardVouchers),
        'membershipNo': UniqueIDTypeToJSON(value.membershipNo),
        'originalRoomType': value.originalRoomType,
        'upgradeRoomType': value.upgradeRoomType,
    };
}
