/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Search criteria for testing upsell rules.
 * @export
 * @interface ConfigTestUpsellRuleSearchType
 */
export interface ConfigTestUpsellRuleSearchType {
    /**
     * Signifies the number of adults set in the test reservation.
     * @type {number}
     * @memberof ConfigTestUpsellRuleSearchType
     */
    adults?: number;
    /**
     * Arrival date set in the test reservation.
     * @type {Date}
     * @memberof ConfigTestUpsellRuleSearchType
     */
    arrivalDate?: Date;
    /**
     * Signifies the channel for which the upsell rule test has to be run.
     * @type {string}
     * @memberof ConfigTestUpsellRuleSearchType
     */
    channel?: string;
    /**
     * Signifies the number of children set in the test reservation.
     * @type {number}
     * @memberof ConfigTestUpsellRuleSearchType
     */
    children?: number;
    /**
     * Specifies the hotel code for which the upsell rules have to be tested.
     * @type {string}
     * @memberof ConfigTestUpsellRuleSearchType
     */
    hotelId?: string;
    /**
     * Signifies the market code for which the upsell rule test has to be run.
     * @type {string}
     * @memberof ConfigTestUpsellRuleSearchType
     */
    marketCode?: string;
    /**
     * Signifies the membership level for which the upsell rule test has to be run.
     * @type {string}
     * @memberof ConfigTestUpsellRuleSearchType
     */
    membershipLevel?: string;
    /**
     * Signifies the membership type for which the upsell rule test has to be run.
     * @type {string}
     * @memberof ConfigTestUpsellRuleSearchType
     */
    membershipType?: string;
    /**
     * Number of nights set in the test reservation.
     * @type {number}
     * @memberof ConfigTestUpsellRuleSearchType
     */
    nights?: number;
    /**
     * The number of rooms set in the test reservation.
     * @type {number}
     * @memberof ConfigTestUpsellRuleSearchType
     */
    numberOfRooms?: number;
    /**
     * Signifies the occupancy level id for which the upsell rule test has to be run. This field is only available when the test upgrade rule is set for 'Upgrade By Occupancy Levels'.
     * @type {number}
     * @memberof ConfigTestUpsellRuleSearchType
     */
    occupancyLevelId?: number;
    /**
     * Signifies the rate code for which the upsell rule test has to be run.
     * @type {string}
     * @memberof ConfigTestUpsellRuleSearchType
     */
    rateCode?: string;
    /**
     * Signifies the reservation type for which the upsell rule test has to be run.
     * @type {string}
     * @memberof ConfigTestUpsellRuleSearchType
     */
    reservationType?: string;
    /**
     * Signifies the room type for which the upsell rule test has to be run.
     * @type {string}
     * @memberof ConfigTestUpsellRuleSearchType
     */
    roomType?: string;
}

/**
 * Check if a given object implements the ConfigTestUpsellRuleSearchType interface.
 */
export function instanceOfConfigTestUpsellRuleSearchType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigTestUpsellRuleSearchTypeFromJSON(json: any): ConfigTestUpsellRuleSearchType {
    return ConfigTestUpsellRuleSearchTypeFromJSONTyped(json, false);
}

export function ConfigTestUpsellRuleSearchTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigTestUpsellRuleSearchType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adults': !exists(json, 'adults') ? undefined : json['adults'],
        'arrivalDate': !exists(json, 'arrivalDate') ? undefined : (new Date(json['arrivalDate'])),
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'children': !exists(json, 'children') ? undefined : json['children'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'marketCode': !exists(json, 'marketCode') ? undefined : json['marketCode'],
        'membershipLevel': !exists(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipType': !exists(json, 'membershipType') ? undefined : json['membershipType'],
        'nights': !exists(json, 'nights') ? undefined : json['nights'],
        'numberOfRooms': !exists(json, 'numberOfRooms') ? undefined : json['numberOfRooms'],
        'occupancyLevelId': !exists(json, 'occupancyLevelId') ? undefined : json['occupancyLevelId'],
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'reservationType': !exists(json, 'reservationType') ? undefined : json['reservationType'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
    };
}

export function ConfigTestUpsellRuleSearchTypeToJSON(value?: ConfigTestUpsellRuleSearchType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adults': value.adults,
        'arrivalDate': value.arrivalDate === undefined ? undefined : (value.arrivalDate.toISOString().substr(0,10)),
        'channel': value.channel,
        'children': value.children,
        'hotelId': value.hotelId,
        'marketCode': value.marketCode,
        'membershipLevel': value.membershipLevel,
        'membershipType': value.membershipType,
        'nights': value.nights,
        'numberOfRooms': value.numberOfRooms,
        'occupancyLevelId': value.occupancyLevelId,
        'rateCode': value.rateCode,
        'reservationType': value.reservationType,
        'roomType': value.roomType,
    };
}

