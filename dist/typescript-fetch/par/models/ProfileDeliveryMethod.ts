/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProfileDeliveryModuleType } from './ProfileDeliveryModuleType';
import {
    ProfileDeliveryModuleTypeFromJSON,
    ProfileDeliveryModuleTypeFromJSONTyped,
    ProfileDeliveryModuleTypeToJSON,
} from './ProfileDeliveryModuleType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Delivery Information type to the profile.
 * @export
 * @interface ProfileDeliveryMethod
 */
export interface ProfileDeliveryMethod {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ProfileDeliveryMethod
     */
    deliveryId?: UniqueIDType;
    /**
     * 
     * @type {ProfileDeliveryModuleType}
     * @memberof ProfileDeliveryMethod
     */
    deliveryModule?: ProfileDeliveryModuleType;
    /**
     * Delivery type can have a value EMAIL, ELECTRONIC etc and it depends on the parameter set in OPERA Control.
     * @type {string}
     * @memberof ProfileDeliveryMethod
     */
    deliveryType?: string;
    /**
     * Delivery value holds the corresponding value of the delivery type..
     * @type {string}
     * @memberof ProfileDeliveryMethod
     */
    deliveryValue?: string;
    /**
     * Property that has delivery methods configured.
     * @type {string}
     * @memberof ProfileDeliveryMethod
     */
    hotelId?: string;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof ProfileDeliveryMethod
     */
    orderSequence?: number;
    /**
     * When true, indicates a primary information.
     * @type {boolean}
     * @memberof ProfileDeliveryMethod
     */
    primaryInd?: boolean;
}

/**
 * Check if a given object implements the ProfileDeliveryMethod interface.
 */
export function instanceOfProfileDeliveryMethod(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileDeliveryMethodFromJSON(json: any): ProfileDeliveryMethod {
    return ProfileDeliveryMethodFromJSONTyped(json, false);
}

export function ProfileDeliveryMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileDeliveryMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deliveryId': !exists(json, 'deliveryId') ? undefined : UniqueIDTypeFromJSON(json['deliveryId']),
        'deliveryModule': !exists(json, 'deliveryModule') ? undefined : ProfileDeliveryModuleTypeFromJSON(json['deliveryModule']),
        'deliveryType': !exists(json, 'deliveryType') ? undefined : json['deliveryType'],
        'deliveryValue': !exists(json, 'deliveryValue') ? undefined : json['deliveryValue'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'orderSequence': !exists(json, 'orderSequence') ? undefined : json['orderSequence'],
        'primaryInd': !exists(json, 'primaryInd') ? undefined : json['primaryInd'],
    };
}

export function ProfileDeliveryMethodToJSON(value?: ProfileDeliveryMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deliveryId': UniqueIDTypeToJSON(value.deliveryId),
        'deliveryModule': ProfileDeliveryModuleTypeToJSON(value.deliveryModule),
        'deliveryType': value.deliveryType,
        'deliveryValue': value.deliveryValue,
        'hotelId': value.hotelId,
        'orderSequence': value.orderSequence,
        'primaryInd': value.primaryInd,
    };
}

