/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Indicates the guest's room preferences.
 * @export
 * @interface RoomPreferencesType
 */
export interface RoomPreferencesType {
    /**
     * Indicates if the member requires accessible rooms.
     * @type {boolean}
     * @memberof RoomPreferencesType
     */
    accessible?: boolean;
    /**
     * Indicates the bed type preference.
     * @type {string}
     * @memberof RoomPreferencesType
     */
    bedType?: string;
    /**
     * Indicates the beverage preference.
     * @type {string}
     * @memberof RoomPreferencesType
     */
    beverage?: string;
    /**
     * Indicates the floor type preference.
     * @type {string}
     * @memberof RoomPreferencesType
     */
    floor?: string;
    /**
     * Indicates guest preferred interests.
     * @type {string}
     * @memberof RoomPreferencesType
     */
    interests?: string;
    /**
     * Indicates the newspaper preference.
     * @type {string}
     * @memberof RoomPreferencesType
     */
    newspapers?: string;
    /**
     * Indicates the pillow type preference.
     * @type {string}
     * @memberof RoomPreferencesType
     */
    pillow?: string;
    /**
     * Indicates which room preference takes priority, bed type or smoking type.
     * @type {string}
     * @memberof RoomPreferencesType
     */
    precedence?: string;
    /**
     * Indicates the room amenities requested.
     * @type {string}
     * @memberof RoomPreferencesType
     */
    roomAmenities?: string;
    /**
     * Indicates the smoking preference.
     * @type {string}
     * @memberof RoomPreferencesType
     */
    smoking?: string;
    /**
     * Indicates the snack preference.
     * @type {string}
     * @memberof RoomPreferencesType
     */
    snack?: string;
}

/**
 * Check if a given object implements the RoomPreferencesType interface.
 */
export function instanceOfRoomPreferencesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomPreferencesTypeFromJSON(json: any): RoomPreferencesType {
    return RoomPreferencesTypeFromJSONTyped(json, false);
}

export function RoomPreferencesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomPreferencesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessible': !exists(json, 'accessible') ? undefined : json['accessible'],
        'bedType': !exists(json, 'bedType') ? undefined : json['bedType'],
        'beverage': !exists(json, 'beverage') ? undefined : json['beverage'],
        'floor': !exists(json, 'floor') ? undefined : json['floor'],
        'interests': !exists(json, 'interests') ? undefined : json['interests'],
        'newspapers': !exists(json, 'newspapers') ? undefined : json['newspapers'],
        'pillow': !exists(json, 'pillow') ? undefined : json['pillow'],
        'precedence': !exists(json, 'precedence') ? undefined : json['precedence'],
        'roomAmenities': !exists(json, 'roomAmenities') ? undefined : json['roomAmenities'],
        'smoking': !exists(json, 'smoking') ? undefined : json['smoking'],
        'snack': !exists(json, 'snack') ? undefined : json['snack'],
    };
}

export function RoomPreferencesTypeToJSON(value?: RoomPreferencesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessible': value.accessible,
        'bedType': value.bedType,
        'beverage': value.beverage,
        'floor': value.floor,
        'interests': value.interests,
        'newspapers': value.newspapers,
        'pillow': value.pillow,
        'precedence': value.precedence,
        'roomAmenities': value.roomAmenities,
        'smoking': value.smoking,
        'snack': value.snack,
    };
}

