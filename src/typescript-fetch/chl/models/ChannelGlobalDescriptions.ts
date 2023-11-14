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
import type { ChannelGlobalDescriptionsType } from './ChannelGlobalDescriptionsType';
import {
    ChannelGlobalDescriptionsTypeFromJSON,
    ChannelGlobalDescriptionsTypeFromJSONTyped,
    ChannelGlobalDescriptionsTypeToJSON,
} from './ChannelGlobalDescriptionsType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object to create new Global Descriptions of the GDS Channels
 * @export
 * @interface ChannelGlobalDescriptions
 */
export interface ChannelGlobalDescriptions {
    /**
     * 
     * @type {ChannelGlobalDescriptionsType}
     * @memberof ChannelGlobalDescriptions
     */
    channelGlobalDescriptions?: ChannelGlobalDescriptionsType;
    /**
     * 
     * @type {Links}
     * @memberof ChannelGlobalDescriptions
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof ChannelGlobalDescriptions
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ChannelGlobalDescriptions interface.
 */
export function instanceOfChannelGlobalDescriptions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelGlobalDescriptionsFromJSON(json: any): ChannelGlobalDescriptions {
    return ChannelGlobalDescriptionsFromJSONTyped(json, false);
}

export function ChannelGlobalDescriptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelGlobalDescriptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelGlobalDescriptions': !exists(json, 'channelGlobalDescriptions') ? undefined : ChannelGlobalDescriptionsTypeFromJSON(json['channelGlobalDescriptions']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ChannelGlobalDescriptionsToJSON(value?: ChannelGlobalDescriptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelGlobalDescriptions': ChannelGlobalDescriptionsTypeToJSON(value.channelGlobalDescriptions),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
