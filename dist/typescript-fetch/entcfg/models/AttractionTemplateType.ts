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
import type { AddressType } from './AddressType';
import {
    AddressTypeFromJSON,
    AddressTypeFromJSONTyped,
    AddressTypeToJSON,
} from './AddressType';
import type { RelativePositionType } from './RelativePositionType';
import {
    RelativePositionTypeFromJSON,
    RelativePositionTypeFromJSONTyped,
    RelativePositionTypeToJSON,
} from './RelativePositionType';
import type { TranslationTextType2000 } from './TranslationTextType2000';
import {
    TranslationTextType2000FromJSON,
    TranslationTextType2000FromJSONTyped,
    TranslationTextType2000ToJSON,
} from './TranslationTextType2000';
import type { URLType } from './URLType';
import {
    URLTypeFromJSON,
    URLTypeFromJSONTyped,
    URLTypeToJSON,
} from './URLType';

/**
 * Information about the attractions near the hotel.
 * @export
 * @interface AttractionTemplateType
 */
export interface AttractionTemplateType {
    /**
     * 
     * @type {AddressType}
     * @memberof AttractionTemplateType
     */
    address?: AddressType;
    /**
     * The class of the attraction.
     * @type {string}
     * @memberof AttractionTemplateType
     */
    _class?: string;
    /**
     * 
     * @type {string}
     * @memberof AttractionTemplateType
     */
    code?: string;
    /**
     * Display sequence of the attraction.
     * @type {number}
     * @memberof AttractionTemplateType
     */
    displaySeq?: number;
    /**
     * Directions to the attraction from the hotel.
     * @type {string}
     * @memberof AttractionTemplateType
     */
    generalDirections?: string;
    /**
     * The date the record was marked as inactive.
     * @type {Date}
     * @memberof AttractionTemplateType
     */
    inactiveDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof AttractionTemplateType
     */
    latitude?: number;
    /**
     * The longitude of the location from which the organism or observation was collected, expressed in decimal degrees. Positive values are East of the Greenwich Meridian, negative values are West of the Greenwich Meridian.
     * @type {number}
     * @memberof AttractionTemplateType
     */
    longitude?: number;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof AttractionTemplateType
     */
    name?: TranslationTextType2000;
    /**
     * Price range for the attraction.
     * @type {string}
     * @memberof AttractionTemplateType
     */
    operationHours?: string;
    /**
     * Price range for the attraction.
     * @type {string}
     * @memberof AttractionTemplateType
     */
    priceRange?: string;
    /**
     * The region in which this attraction is located.
     * @type {string}
     * @memberof AttractionTemplateType
     */
    region?: string;
    /**
     * 
     * @type {RelativePositionType}
     * @memberof AttractionTemplateType
     */
    relativePosition?: RelativePositionType;
    /**
     * The type of the attraction.
     * @type {string}
     * @memberof AttractionTemplateType
     */
    type?: string;
    /**
     * 
     * @type {URLType}
     * @memberof AttractionTemplateType
     */
    website?: URLType;
}

/**
 * Check if a given object implements the AttractionTemplateType interface.
 */
export function instanceOfAttractionTemplateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttractionTemplateTypeFromJSON(json: any): AttractionTemplateType {
    return AttractionTemplateTypeFromJSONTyped(json, false);
}

export function AttractionTemplateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttractionTemplateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : AddressTypeFromJSON(json['address']),
        '_class': !exists(json, 'class') ? undefined : json['class'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'displaySeq': !exists(json, 'displaySeq') ? undefined : json['displaySeq'],
        'generalDirections': !exists(json, 'generalDirections') ? undefined : json['generalDirections'],
        'inactiveDate': !exists(json, 'inactiveDate') ? undefined : (new Date(json['inactiveDate'])),
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'name': !exists(json, 'name') ? undefined : TranslationTextType2000FromJSON(json['name']),
        'operationHours': !exists(json, 'operationHours') ? undefined : json['operationHours'],
        'priceRange': !exists(json, 'priceRange') ? undefined : json['priceRange'],
        'region': !exists(json, 'region') ? undefined : json['region'],
        'relativePosition': !exists(json, 'relativePosition') ? undefined : RelativePositionTypeFromJSON(json['relativePosition']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'website': !exists(json, 'website') ? undefined : URLTypeFromJSON(json['website']),
    };
}

export function AttractionTemplateTypeToJSON(value?: AttractionTemplateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': AddressTypeToJSON(value.address),
        'class': value._class,
        'code': value.code,
        'displaySeq': value.displaySeq,
        'generalDirections': value.generalDirections,
        'inactiveDate': value.inactiveDate === undefined ? undefined : (value.inactiveDate.toISOString().substr(0,10)),
        'latitude': value.latitude,
        'longitude': value.longitude,
        'name': TranslationTextType2000ToJSON(value.name),
        'operationHours': value.operationHours,
        'priceRange': value.priceRange,
        'region': value.region,
        'relativePosition': RelativePositionTypeToJSON(value.relativePosition),
        'type': value.type,
        'website': URLTypeToJSON(value.website),
    };
}

