/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { LetterTypeType } from './LetterTypeType';
import {
    LetterTypeTypeFromJSON,
    LetterTypeTypeFromJSONTyped,
    LetterTypeTypeToJSON,
} from './LetterTypeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Provide unique identification of Hotel Letter associated with a Booking Channel.
 * @export
 * @interface ChannelHotelLetterType
 */
export interface ChannelHotelLetterType {
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof ChannelHotelLetterType
     */
    bookingChannel?: CodeDescriptionType;
    /**
     * Hotel code which the hotel letters belong to.
     * @type {string}
     * @memberof ChannelHotelLetterType
     */
    hotelId?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof ChannelHotelLetterType
     */
    languageCode?: CodeDescriptionType;
    /**
     * Name of the letter that associated to Hotel Letter.
     * @type {string}
     * @memberof ChannelHotelLetterType
     */
    letterName?: string;
    /**
     * 
     * @type {LetterTypeType}
     * @memberof ChannelHotelLetterType
     */
    letterType?: LetterTypeType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelHotelLetterType
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChannelHotelLetterType interface.
 */
export function instanceOfChannelHotelLetterType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelHotelLetterTypeFromJSON(json: any): ChannelHotelLetterType {
    return ChannelHotelLetterTypeFromJSONTyped(json, false);
}

export function ChannelHotelLetterTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelHotelLetterType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingChannel': !exists(json, 'bookingChannel') ? undefined : CodeDescriptionTypeFromJSON(json['bookingChannel']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'languageCode': !exists(json, 'languageCode') ? undefined : CodeDescriptionTypeFromJSON(json['languageCode']),
        'letterName': !exists(json, 'letterName') ? undefined : json['letterName'],
        'letterType': !exists(json, 'letterType') ? undefined : LetterTypeTypeFromJSON(json['letterType']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChannelHotelLetterTypeToJSON(value?: ChannelHotelLetterType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingChannel': CodeDescriptionTypeToJSON(value.bookingChannel),
        'hotelId': value.hotelId,
        'languageCode': CodeDescriptionTypeToJSON(value.languageCode),
        'letterName': value.letterName,
        'letterType': LetterTypeTypeToJSON(value.letterType),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

