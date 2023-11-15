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
import type { AmenityTypeType } from './AmenityTypeType';
import {
    AmenityTypeTypeFromJSON,
    AmenityTypeTypeFromJSONTyped,
    AmenityTypeTypeToJSON,
} from './AmenityTypeType';

/**
 * Base details used for amenities.
 * @export
 * @interface ConfigTemplateAmenityType
 */
export interface ConfigTemplateAmenityType {
    /**
     * 
     * @type {AmenityTypeType}
     * @memberof ConfigTemplateAmenityType
     */
    amenityType?: AmenityTypeType;
    /**
     * The date the amenity is scheduled to become active.
     * @type {string}
     * @memberof ConfigTemplateAmenityType
     */
    beginDate?: string;
    /**
     * The comments about amenity of the hotel.
     * @type {string}
     * @memberof ConfigTemplateAmenityType
     */
    comments?: string;
    /**
     * The description about amenity of the hotel.
     * @type {string}
     * @memberof ConfigTemplateAmenityType
     */
    description?: string;
    /**
     * The date the amenity is scheduled to become inactive.
     * @type {string}
     * @memberof ConfigTemplateAmenityType
     */
    endDate?: string;
    /**
     * Specifies the feature code (aka amenity code).
     * @type {string}
     * @memberof ConfigTemplateAmenityType
     */
    featureCode?: string;
    /**
     * The new chain code which is used in the change method.
     * @type {string}
     * @memberof ConfigTemplateAmenityType
     */
    newChainCode?: string;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof ConfigTemplateAmenityType
     */
    orderSequence?: number;
}

/**
 * Check if a given object implements the ConfigTemplateAmenityType interface.
 */
export function instanceOfConfigTemplateAmenityType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigTemplateAmenityTypeFromJSON(json: any): ConfigTemplateAmenityType {
    return ConfigTemplateAmenityTypeFromJSONTyped(json, false);
}

export function ConfigTemplateAmenityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigTemplateAmenityType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amenityType': !exists(json, 'amenityType') ? undefined : AmenityTypeTypeFromJSON(json['amenityType']),
        'beginDate': !exists(json, 'beginDate') ? undefined : json['beginDate'],
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'featureCode': !exists(json, 'featureCode') ? undefined : json['featureCode'],
        'newChainCode': !exists(json, 'newChainCode') ? undefined : json['newChainCode'],
        'orderSequence': !exists(json, 'orderSequence') ? undefined : json['orderSequence'],
    };
}

export function ConfigTemplateAmenityTypeToJSON(value?: ConfigTemplateAmenityType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amenityType': AmenityTypeTypeToJSON(value.amenityType),
        'beginDate': value.beginDate,
        'comments': value.comments,
        'description': value.description,
        'endDate': value.endDate,
        'featureCode': value.featureCode,
        'newChainCode': value.newChainCode,
        'orderSequence': value.orderSequence,
    };
}

