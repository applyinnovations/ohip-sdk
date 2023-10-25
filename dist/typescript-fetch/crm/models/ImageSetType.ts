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
import type { ImageStyleType } from './ImageStyleType';
import {
    ImageStyleTypeFromJSON,
    ImageStyleTypeFromJSONTyped,
    ImageStyleTypeToJSON,
} from './ImageStyleType';

/**
 * Represents on image set record.
 * @export
 * @interface ImageSetType
 */
export interface ImageSetType {
    /**
     * The image set chain code.
     * @type {string}
     * @memberof ImageSetType
     */
    chainCode?: string;
    /**
     * The image set description.
     * @type {string}
     * @memberof ImageSetType
     */
    description?: string;
    /**
     * The image set hotel code.
     * @type {string}
     * @memberof ImageSetType
     */
    hotelId?: string;
    /**
     * The image set order.
     * @type {number}
     * @memberof ImageSetType
     */
    imageOrder?: number;
    /**
     * The image set name.
     * @type {string}
     * @memberof ImageSetType
     */
    imageSet?: string;
    /**
     * 
     * @type {ImageStyleType}
     * @memberof ImageSetType
     */
    imageStyle?: ImageStyleType;
    /**
     * The image set type.
     * @type {string}
     * @memberof ImageSetType
     */
    imageType?: string;
    /**
     * The image set URL.
     * @type {string}
     * @memberof ImageSetType
     */
    imageURL?: string;
    /**
     * Language identification.
     * @type {string}
     * @memberof ImageSetType
     */
    language?: string;
    /**
     * The image set sequence ID.
     * @type {number}
     * @memberof ImageSetType
     */
    sequenceId?: number;
    /**
     * The image set website.
     * @type {string}
     * @memberof ImageSetType
     */
    website?: string;
}

/**
 * Check if a given object implements the ImageSetType interface.
 */
export function instanceOfImageSetType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ImageSetTypeFromJSON(json: any): ImageSetType {
    return ImageSetTypeFromJSONTyped(json, false);
}

export function ImageSetTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageSetType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chainCode': !exists(json, 'chainCode') ? undefined : json['chainCode'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'imageOrder': !exists(json, 'imageOrder') ? undefined : json['imageOrder'],
        'imageSet': !exists(json, 'imageSet') ? undefined : json['imageSet'],
        'imageStyle': !exists(json, 'imageStyle') ? undefined : ImageStyleTypeFromJSON(json['imageStyle']),
        'imageType': !exists(json, 'imageType') ? undefined : json['imageType'],
        'imageURL': !exists(json, 'imageURL') ? undefined : json['imageURL'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'sequenceId': !exists(json, 'sequenceId') ? undefined : json['sequenceId'],
        'website': !exists(json, 'website') ? undefined : json['website'],
    };
}

export function ImageSetTypeToJSON(value?: ImageSetType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chainCode': value.chainCode,
        'description': value.description,
        'hotelId': value.hotelId,
        'imageOrder': value.imageOrder,
        'imageSet': value.imageSet,
        'imageStyle': ImageStyleTypeToJSON(value.imageStyle),
        'imageType': value.imageType,
        'imageURL': value.imageURL,
        'language': value.language,
        'sequenceId': value.sequenceId,
        'website': value.website,
    };
}

