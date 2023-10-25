/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Configured delimiters for parsing a card track data based on a particular card reader device.
 * @export
 * @interface CardReaderDelimitersType
 */
export interface CardReaderDelimitersType {
    /**
     * Character to be used as Additional Info End Separator.
     * @type {string}
     * @memberof CardReaderDelimitersType
     */
    additionalInfoEndSeparator?: string;
    /**
     * String to be used to indicate whether KSNField, ET1Field, ET2Field should be interpreted as field positions or field IDs.
     * @type {string}
     * @memberof CardReaderDelimitersType
     */
    additionalInfoFormatType?: string;
    /**
     * Character to be used as Additional Info Separator.
     * @type {string}
     * @memberof CardReaderDelimitersType
     */
    additionalInfoSeparator?: string;
    /**
     * Character to be used as Guest Name separator.
     * @type {string}
     * @memberof CardReaderDelimitersType
     */
    cardHolderNameSeparator?: string;
    /**
     * Device ID to which this delimiter is assigned.
     * @type {number}
     * @memberof CardReaderDelimitersType
     */
    deviceId?: number;
    /**
     * Interpreted as the field position or field ID of Encrypted Track 1, depending on the value of Additional Information Format Type.
     * @type {number}
     * @memberof CardReaderDelimitersType
     */
    eT1Field?: number;
    /**
     * Interpreted as the field position or field ID of Encrypted Track 2, depending on the value of Additional Information Format Type.
     * @type {number}
     * @memberof CardReaderDelimitersType
     */
    eT2Field?: number;
    /**
     * Encryption Format Code.
     * @type {string}
     * @memberof CardReaderDelimitersType
     */
    encryptionFormatCode?: string;
    /**
     * Character to be used as End of Track Separator.
     * @type {string}
     * @memberof CardReaderDelimitersType
     */
    endOfTrackSeparator?: string;
    /**
     * Character that will denote the start of Expiry Date.
     * @type {string}
     * @memberof CardReaderDelimitersType
     */
    expirationDateStartCharacter?: string;
    /**
     * Interpreted as the field position or field ID of KSN, depending on the value of Additional Information Format Type.
     * @type {number}
     * @memberof CardReaderDelimitersType
     */
    kSNField?: number;
    /**
     * The Regular Expression pattern of the token that is present in the track data if data was inputted manually through the device instead of swiping.
     * @type {string}
     * @memberof CardReaderDelimitersType
     */
    manualTokenPattern?: string;
    /**
     * A flag indicating whether the data from the device is encrypted or not.
     * @type {boolean}
     * @memberof CardReaderDelimitersType
     */
    secureDevice?: boolean;
    /**
     * Software ID of device.
     * @type {string}
     * @memberof CardReaderDelimitersType
     */
    softwareId?: string;
    /**
     * Character to be used as Track2 Separator.
     * @type {string}
     * @memberof CardReaderDelimitersType
     */
    track2Separator?: string;
    /**
     * The Regular Expression pattern of the track data that is generated by this device.
     * @type {string}
     * @memberof CardReaderDelimitersType
     */
    trackDataPattern?: string;
}

/**
 * Check if a given object implements the CardReaderDelimitersType interface.
 */
export function instanceOfCardReaderDelimitersType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CardReaderDelimitersTypeFromJSON(json: any): CardReaderDelimitersType {
    return CardReaderDelimitersTypeFromJSONTyped(json, false);
}

export function CardReaderDelimitersTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardReaderDelimitersType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalInfoEndSeparator': !exists(json, 'additionalInfoEndSeparator') ? undefined : json['additionalInfoEndSeparator'],
        'additionalInfoFormatType': !exists(json, 'additionalInfoFormatType') ? undefined : json['additionalInfoFormatType'],
        'additionalInfoSeparator': !exists(json, 'additionalInfoSeparator') ? undefined : json['additionalInfoSeparator'],
        'cardHolderNameSeparator': !exists(json, 'cardHolderNameSeparator') ? undefined : json['cardHolderNameSeparator'],
        'deviceId': !exists(json, 'deviceId') ? undefined : json['deviceId'],
        'eT1Field': !exists(json, 'eT1Field') ? undefined : json['eT1Field'],
        'eT2Field': !exists(json, 'eT2Field') ? undefined : json['eT2Field'],
        'encryptionFormatCode': !exists(json, 'encryptionFormatCode') ? undefined : json['encryptionFormatCode'],
        'endOfTrackSeparator': !exists(json, 'endOfTrackSeparator') ? undefined : json['endOfTrackSeparator'],
        'expirationDateStartCharacter': !exists(json, 'expirationDateStartCharacter') ? undefined : json['expirationDateStartCharacter'],
        'kSNField': !exists(json, 'kSNField') ? undefined : json['kSNField'],
        'manualTokenPattern': !exists(json, 'manualTokenPattern') ? undefined : json['manualTokenPattern'],
        'secureDevice': !exists(json, 'secureDevice') ? undefined : json['secureDevice'],
        'softwareId': !exists(json, 'softwareId') ? undefined : json['softwareId'],
        'track2Separator': !exists(json, 'track2Separator') ? undefined : json['track2Separator'],
        'trackDataPattern': !exists(json, 'trackDataPattern') ? undefined : json['trackDataPattern'],
    };
}

export function CardReaderDelimitersTypeToJSON(value?: CardReaderDelimitersType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalInfoEndSeparator': value.additionalInfoEndSeparator,
        'additionalInfoFormatType': value.additionalInfoFormatType,
        'additionalInfoSeparator': value.additionalInfoSeparator,
        'cardHolderNameSeparator': value.cardHolderNameSeparator,
        'deviceId': value.deviceId,
        'eT1Field': value.eT1Field,
        'eT2Field': value.eT2Field,
        'encryptionFormatCode': value.encryptionFormatCode,
        'endOfTrackSeparator': value.endOfTrackSeparator,
        'expirationDateStartCharacter': value.expirationDateStartCharacter,
        'kSNField': value.kSNField,
        'manualTokenPattern': value.manualTokenPattern,
        'secureDevice': value.secureDevice,
        'softwareId': value.softwareId,
        'track2Separator': value.track2Separator,
        'trackDataPattern': value.trackDataPattern,
    };
}

