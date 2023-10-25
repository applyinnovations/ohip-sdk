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
/**
 * This type holds HTML description of hotel-channel room type with additional channel room type short description.
 * @export
 * @interface ChannelRoomMappingHTMLSupportedDescriptionType
 */
export interface ChannelRoomMappingHTMLSupportedDescriptionType {
    /**
     * Description.
     * @type {string}
     * @memberof ChannelRoomMappingHTMLSupportedDescriptionType
     */
    description?: string;
    /**
     * Channel room type or rate code short description.
     * @type {string}
     * @memberof ChannelRoomMappingHTMLSupportedDescriptionType
     */
    shortDescription?: string;
}

/**
 * Check if a given object implements the ChannelRoomMappingHTMLSupportedDescriptionType interface.
 */
export function instanceOfChannelRoomMappingHTMLSupportedDescriptionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelRoomMappingHTMLSupportedDescriptionTypeFromJSON(json: any): ChannelRoomMappingHTMLSupportedDescriptionType {
    return ChannelRoomMappingHTMLSupportedDescriptionTypeFromJSONTyped(json, false);
}

export function ChannelRoomMappingHTMLSupportedDescriptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRoomMappingHTMLSupportedDescriptionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
    };
}

export function ChannelRoomMappingHTMLSupportedDescriptionTypeToJSON(value?: ChannelRoomMappingHTMLSupportedDescriptionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'shortDescription': value.shortDescription,
    };
}

