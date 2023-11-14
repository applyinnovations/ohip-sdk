/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ColorType } from './ColorType';
import {
    ColorTypeFromJSON,
    ColorTypeFromJSONTyped,
    ColorTypeToJSON,
} from './ColorType';
import type { HotelFolioTextsType } from './HotelFolioTextsType';
import {
    HotelFolioTextsTypeFromJSON,
    HotelFolioTextsTypeFromJSONTyped,
    HotelFolioTextsTypeToJSON,
} from './HotelFolioTextsType';

/**
 * A Type that holds key values, that uniquely identifies a membership level
 * @export
 * @interface MembershipLevelType
 */
export interface MembershipLevelType {
    /**
     * Select the number of graces the member will be allowed before the membership level auto-renews based on the member current points. It is available when the Tier Management Reset option is selected on Membership Type.
     * @type {number}
     * @memberof MembershipLevelType
     */
    autoRenewGrace?: number;
    /**
     * Specify the time limit (from 1 to 5 years) for membership card expiration for this level
     * @type {number}
     * @memberof MembershipLevelType
     */
    cardValidYears?: number;
    /**
     * Indicates whether memberships level is restricted to prevent users from making changes to it.
     * @type {boolean}
     * @memberof MembershipLevelType
     */
    changesRestricted?: boolean;
    /**
     * Membership level
     * @type {string}
     * @memberof MembershipLevelType
     */
    code?: string;
    /**
     * Description of the Membership level.
     * @type {string}
     * @memberof MembershipLevelType
     */
    description?: string;
    /**
     * 
     * @type {ColorType}
     * @memberof MembershipLevelType
     */
    displayColor?: ColorType;
    /**
     * Indicates whether membership fee payment is required upon upgrade to this membership level.
     * @type {boolean}
     * @memberof MembershipLevelType
     */
    feeRequired?: boolean;
    /**
     * 
     * @type {HotelFolioTextsType}
     * @memberof MembershipLevelType
     */
    folioTexts?: HotelFolioTextsType;
    /**
     * Indicates whether memberships upgraded or downgraded to or from this level will be included in the Membership Export.
     * @type {boolean}
     * @memberof MembershipLevelType
     */
    fulfillment?: boolean;
    /**
     * Inactive flag for a Membership level.
     * @type {boolean}
     * @memberof MembershipLevelType
     */
    inactive?: boolean;
    /**
     * Label of the Membership level.
     * @type {string}
     * @memberof MembershipLevelType
     */
    label?: string;
    /**
     * The lowest level in which this level can be downgraded to.
     * @type {string}
     * @memberof MembershipLevelType
     */
    maxDowngradeLevel?: string;
    /**
     * Number of transaction(s) for each stay. Value will be 2 in case of double dipping otherwise it will be null or 1.
     * @type {number}
     * @memberof MembershipLevelType
     */
    numberOfTransactions?: number;
    /**
     * Rank of Membership level.
     * @type {number}
     * @memberof MembershipLevelType
     */
    rank?: number;
    /**
     * Indicates whether membership has expired by the time the membership record is uploaded, the members card will be renewed and updated with a new expiration date.
     * @type {boolean}
     * @memberof MembershipLevelType
     */
    renewCard?: boolean;
    /**
     * Indicates whether memberships level is restricted to prevent users from making changes to it. It is available when the Advanced Enrollment option is selected on Membership Type.
     * @type {boolean}
     * @memberof MembershipLevelType
     */
    restrictedLevel?: boolean;
    /**
     * Membership type
     * @type {string}
     * @memberof MembershipLevelType
     */
    type?: string;
    /**
     * VIP level associated to the Membership level.
     * @type {string}
     * @memberof MembershipLevelType
     */
    vip?: string;
}

/**
 * Check if a given object implements the MembershipLevelType interface.
 */
export function instanceOfMembershipLevelType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipLevelTypeFromJSON(json: any): MembershipLevelType {
    return MembershipLevelTypeFromJSONTyped(json, false);
}

export function MembershipLevelTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipLevelType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autoRenewGrace': !exists(json, 'autoRenewGrace') ? undefined : json['autoRenewGrace'],
        'cardValidYears': !exists(json, 'cardValidYears') ? undefined : json['cardValidYears'],
        'changesRestricted': !exists(json, 'changesRestricted') ? undefined : json['changesRestricted'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'displayColor': !exists(json, 'displayColor') ? undefined : ColorTypeFromJSON(json['displayColor']),
        'feeRequired': !exists(json, 'feeRequired') ? undefined : json['feeRequired'],
        'folioTexts': !exists(json, 'folioTexts') ? undefined : HotelFolioTextsTypeFromJSON(json['folioTexts']),
        'fulfillment': !exists(json, 'fulfillment') ? undefined : json['fulfillment'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'maxDowngradeLevel': !exists(json, 'maxDowngradeLevel') ? undefined : json['maxDowngradeLevel'],
        'numberOfTransactions': !exists(json, 'numberOfTransactions') ? undefined : json['numberOfTransactions'],
        'rank': !exists(json, 'rank') ? undefined : json['rank'],
        'renewCard': !exists(json, 'renewCard') ? undefined : json['renewCard'],
        'restrictedLevel': !exists(json, 'restrictedLevel') ? undefined : json['restrictedLevel'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'vip': !exists(json, 'vip') ? undefined : json['vip'],
    };
}

export function MembershipLevelTypeToJSON(value?: MembershipLevelType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'autoRenewGrace': value.autoRenewGrace,
        'cardValidYears': value.cardValidYears,
        'changesRestricted': value.changesRestricted,
        'code': value.code,
        'description': value.description,
        'displayColor': ColorTypeToJSON(value.displayColor),
        'feeRequired': value.feeRequired,
        'folioTexts': HotelFolioTextsTypeToJSON(value.folioTexts),
        'fulfillment': value.fulfillment,
        'inactive': value.inactive,
        'label': value.label,
        'maxDowngradeLevel': value.maxDowngradeLevel,
        'numberOfTransactions': value.numberOfTransactions,
        'rank': value.rank,
        'renewCard': value.renewCard,
        'restrictedLevel': value.restrictedLevel,
        'type': value.type,
        'vip': value.vip,
    };
}
