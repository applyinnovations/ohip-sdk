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
import type { ChannelRateMappingMasterInfoType } from './ChannelRateMappingMasterInfoType';
import {
    ChannelRateMappingMasterInfoTypeFromJSON,
    ChannelRateMappingMasterInfoTypeFromJSONTyped,
    ChannelRateMappingMasterInfoTypeToJSON,
} from './ChannelRateMappingMasterInfoType';
import type { ChannelRateMappingsType } from './ChannelRateMappingsType';
import {
    ChannelRateMappingsTypeFromJSON,
    ChannelRateMappingsTypeFromJSONTyped,
    ChannelRateMappingsTypeToJSON,
} from './ChannelRateMappingsType';
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
 * Response object for fetching hotel-channel rate code mappings given search criteria including hotel codes, booking channel codes, rate codes, channel rate codes, etc.
 * @export
 * @interface ChannelRateMappings
 */
export interface ChannelRateMappings {
    /**
     * 
     * @type {ChannelRateMappingsType}
     * @memberof ChannelRateMappings
     */
    channelRateMappings?: ChannelRateMappingsType;
    /**
     * 
     * @type {Links}
     * @memberof ChannelRateMappings
     */
    links?: Links;
    /**
     * 
     * @type {ChannelRateMappingMasterInfoType}
     * @memberof ChannelRateMappings
     */
    masterInfo?: ChannelRateMappingMasterInfoType;
    /**
     * 
     * @type {WarningsType}
     * @memberof ChannelRateMappings
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ChannelRateMappings interface.
 */
export function instanceOfChannelRateMappings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelRateMappingsFromJSON(json: any): ChannelRateMappings {
    return ChannelRateMappingsFromJSONTyped(json, false);
}

export function ChannelRateMappingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRateMappings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelRateMappings': !exists(json, 'channelRateMappings') ? undefined : ChannelRateMappingsTypeFromJSON(json['channelRateMappings']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'masterInfo': !exists(json, 'masterInfo') ? undefined : ChannelRateMappingMasterInfoTypeFromJSON(json['masterInfo']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ChannelRateMappingsToJSON(value?: ChannelRateMappings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelRateMappings': ChannelRateMappingsTypeToJSON(value.channelRateMappings),
        'links': LinksToJSON(value.links),
        'masterInfo': ChannelRateMappingMasterInfoTypeToJSON(value.masterInfo),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
