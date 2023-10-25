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
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { ProfileRoutingInstructionsType } from './ProfileRoutingInstructionsType';
import {
    ProfileRoutingInstructionsTypeFromJSON,
    ProfileRoutingInstructionsTypeFromJSONTyped,
    ProfileRoutingInstructionsTypeToJSON,
} from './ProfileRoutingInstructionsType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * The type contains routing instructions for the profile.
 * @export
 * @interface ProfileCashieringDetailType
 */
export interface ProfileCashieringDetailType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ProfileCashieringDetailType
     */
    eCommerceId?: UniqueIDType;
    /**
     * Guest type code.
     * @type {string}
     * @memberof ProfileCashieringDetailType
     */
    fiscalGuestType?: string;
    /**
     * Hotel Code for which the routing instructions are provided for a profile.
     * @type {string}
     * @memberof ProfileCashieringDetailType
     */
    hotelId?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof ProfileCashieringDetailType
     */
    paymentMethod?: CodeDescriptionType;
    /**
     * 
     * @type {ProfileRoutingInstructionsType}
     * @memberof ProfileCashieringDetailType
     */
    routingInstructions?: ProfileRoutingInstructionsType;
    /**
     * Tax type code.
     * @type {string}
     * @memberof ProfileCashieringDetailType
     */
    taxType?: string;
}

/**
 * Check if a given object implements the ProfileCashieringDetailType interface.
 */
export function instanceOfProfileCashieringDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileCashieringDetailTypeFromJSON(json: any): ProfileCashieringDetailType {
    return ProfileCashieringDetailTypeFromJSONTyped(json, false);
}

export function ProfileCashieringDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCashieringDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eCommerceId': !exists(json, 'eCommerceId') ? undefined : UniqueIDTypeFromJSON(json['eCommerceId']),
        'fiscalGuestType': !exists(json, 'fiscalGuestType') ? undefined : json['fiscalGuestType'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : CodeDescriptionTypeFromJSON(json['paymentMethod']),
        'routingInstructions': !exists(json, 'routingInstructions') ? undefined : ProfileRoutingInstructionsTypeFromJSON(json['routingInstructions']),
        'taxType': !exists(json, 'taxType') ? undefined : json['taxType'],
    };
}

export function ProfileCashieringDetailTypeToJSON(value?: ProfileCashieringDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'eCommerceId': UniqueIDTypeToJSON(value.eCommerceId),
        'fiscalGuestType': value.fiscalGuestType,
        'hotelId': value.hotelId,
        'paymentMethod': CodeDescriptionTypeToJSON(value.paymentMethod),
        'routingInstructions': ProfileRoutingInstructionsTypeToJSON(value.routingInstructions),
        'taxType': value.taxType,
    };
}

