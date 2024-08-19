/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TranslationTextType2000 } from './TranslationTextType2000';
import {
    TranslationTextType2000FromJSON,
    TranslationTextType2000FromJSONTyped,
    TranslationTextType2000ToJSON,
} from './TranslationTextType2000';
import type { TranslationTextType50 } from './TranslationTextType50';
import {
    TranslationTextType50FromJSON,
    TranslationTextType50FromJSONTyped,
    TranslationTextType50ToJSON,
} from './TranslationTextType50';

/**
 * This type holds enhanced room/rate description.
 * @export
 * @interface ChannelGlobalDescriptionType
 */
export interface ChannelGlobalDescriptionType {
    /**
     * 
     * @type {string}
     * @memberof ChannelGlobalDescriptionType
     */
    bookingChannelCode?: string;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof ChannelGlobalDescriptionType
     */
    description?: TranslationTextType2000;
    /**
     * 
     * @type {TranslationTextType50}
     * @memberof ChannelGlobalDescriptionType
     */
    enhancedDesc1?: TranslationTextType50;
    /**
     * 
     * @type {TranslationTextType50}
     * @memberof ChannelGlobalDescriptionType
     */
    enhancedDesc2?: TranslationTextType50;
    /**
     * 
     * @type {TranslationTextType50}
     * @memberof ChannelGlobalDescriptionType
     */
    enhancedDesc3?: TranslationTextType50;
    /**
     * 
     * @type {string}
     * @memberof ChannelGlobalDescriptionType
     */
    hotelId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelGlobalDescriptionType
     */
    rateCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelGlobalDescriptionType
     */
    roomType?: string;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof ChannelGlobalDescriptionType
     */
    shortDescription?: TranslationTextType2000;
    /**
     * 
     * @type {string}
     * @memberof ChannelGlobalDescriptionType
     */
    source?: string;
}

/**
 * Check if a given object implements the ChannelGlobalDescriptionType interface.
 */
export function instanceOfChannelGlobalDescriptionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelGlobalDescriptionTypeFromJSON(json: any): ChannelGlobalDescriptionType {
    return ChannelGlobalDescriptionTypeFromJSONTyped(json, false);
}

export function ChannelGlobalDescriptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelGlobalDescriptionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingChannelCode': !exists(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'description': !exists(json, 'description') ? undefined : TranslationTextType2000FromJSON(json['description']),
        'enhancedDesc1': !exists(json, 'enhancedDesc1') ? undefined : TranslationTextType50FromJSON(json['enhancedDesc1']),
        'enhancedDesc2': !exists(json, 'enhancedDesc2') ? undefined : TranslationTextType50FromJSON(json['enhancedDesc2']),
        'enhancedDesc3': !exists(json, 'enhancedDesc3') ? undefined : TranslationTextType50FromJSON(json['enhancedDesc3']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : TranslationTextType2000FromJSON(json['shortDescription']),
        'source': !exists(json, 'source') ? undefined : json['source'],
    };
}

export function ChannelGlobalDescriptionTypeToJSON(value?: ChannelGlobalDescriptionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingChannelCode': value.bookingChannelCode,
        'description': TranslationTextType2000ToJSON(value.description),
        'enhancedDesc1': TranslationTextType50ToJSON(value.enhancedDesc1),
        'enhancedDesc2': TranslationTextType50ToJSON(value.enhancedDesc2),
        'enhancedDesc3': TranslationTextType50ToJSON(value.enhancedDesc3),
        'hotelId': value.hotelId,
        'rateCode': value.rateCode,
        'roomType': value.roomType,
        'shortDescription': TranslationTextType2000ToJSON(value.shortDescription),
        'source': value.source,
    };
}

