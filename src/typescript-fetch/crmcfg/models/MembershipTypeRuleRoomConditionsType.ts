/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Membership Type Rules room conditions.
 * @export
 * @interface MembershipTypeRuleRoomConditionsType
 */
export interface MembershipTypeRuleRoomConditionsType {
    /**
     * Room type/label for which the rule is applied.
     * @type {string}
     * @memberof MembershipTypeRuleRoomConditionsType
     */
    roomType?: string;
    /**
     * Membership room group for which the rule is applied.
     * @type {string}
     * @memberof MembershipTypeRuleRoomConditionsType
     */
    roomGroup?: string;
    /**
     * Room class for the room for which the rule is applied.
     * @type {string}
     * @memberof MembershipTypeRuleRoomConditionsType
     */
    roomClass?: string;
    /**
     * Indicates whether to use Room Type or Booked Room Type for the rule. If Y then Booked Room Type will be used for points calculation otherwise Room Type to be used.
     * @type {boolean}
     * @memberof MembershipTypeRuleRoomConditionsType
     */
    roomsToCharge?: boolean;
}

/**
 * Check if a given object implements the MembershipTypeRuleRoomConditionsType interface.
 */
export function instanceOfMembershipTypeRuleRoomConditionsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipTypeRuleRoomConditionsTypeFromJSON(json: any): MembershipTypeRuleRoomConditionsType {
    return MembershipTypeRuleRoomConditionsTypeFromJSONTyped(json, false);
}

export function MembershipTypeRuleRoomConditionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipTypeRuleRoomConditionsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'roomGroup': !exists(json, 'roomGroup') ? undefined : json['roomGroup'],
        'roomClass': !exists(json, 'roomClass') ? undefined : json['roomClass'],
        'roomsToCharge': !exists(json, 'roomsToCharge') ? undefined : json['roomsToCharge'],
    };
}

export function MembershipTypeRuleRoomConditionsTypeToJSON(value?: MembershipTypeRuleRoomConditionsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roomType': value.roomType,
        'roomGroup': value.roomGroup,
        'roomClass': value.roomClass,
        'roomsToCharge': value.roomsToCharge,
    };
}
