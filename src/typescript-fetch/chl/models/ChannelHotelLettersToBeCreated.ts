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
import type { ChannelHotelLetterType } from './ChannelHotelLetterType';
import {
    ChannelHotelLetterTypeFromJSON,
    ChannelHotelLetterTypeFromJSONTyped,
    ChannelHotelLetterTypeToJSON,
} from './ChannelHotelLetterType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object to create new Hotel Letters associated with the Channels
 * @export
 * @interface ChannelHotelLettersToBeCreated
 */
export interface ChannelHotelLettersToBeCreated {
    /**
     * Collection of Hotel Letters Type
     * @type {Array<ChannelHotelLetterType>}
     * @memberof ChannelHotelLettersToBeCreated
     */
    channelHotelLetters?: Array<ChannelHotelLetterType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChannelHotelLettersToBeCreated
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelHotelLettersToBeCreated
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChannelHotelLettersToBeCreated interface.
 */
export function instanceOfChannelHotelLettersToBeCreated(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelHotelLettersToBeCreatedFromJSON(json: any): ChannelHotelLettersToBeCreated {
    return ChannelHotelLettersToBeCreatedFromJSONTyped(json, false);
}

export function ChannelHotelLettersToBeCreatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelHotelLettersToBeCreated {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelHotelLetters': !exists(json, 'channelHotelLetters') ? undefined : ((json['channelHotelLetters'] as Array<any>).map(ChannelHotelLetterTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChannelHotelLettersToBeCreatedToJSON(value?: ChannelHotelLettersToBeCreated | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelHotelLetters': value.channelHotelLetters === undefined ? undefined : ((value.channelHotelLetters as Array<any>).map(ChannelHotelLetterTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

