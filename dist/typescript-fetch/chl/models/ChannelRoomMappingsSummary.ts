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
import type { ChannelRoomMappingMasterInfoType } from './ChannelRoomMappingMasterInfoType';
import {
    ChannelRoomMappingMasterInfoTypeFromJSON,
    ChannelRoomMappingMasterInfoTypeFromJSONTyped,
    ChannelRoomMappingMasterInfoTypeToJSON,
} from './ChannelRoomMappingMasterInfoType';
import type { ChannelRoomMappingsSummaryType } from './ChannelRoomMappingsSummaryType';
import {
    ChannelRoomMappingsSummaryTypeFromJSON,
    ChannelRoomMappingsSummaryTypeFromJSONTyped,
    ChannelRoomMappingsSummaryTypeToJSON,
} from './ChannelRoomMappingsSummaryType';
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
 * Operation to fetch hotel-channel room type mappings.
 * @export
 * @interface ChannelRoomMappingsSummary
 */
export interface ChannelRoomMappingsSummary {
    /**
     * 
     * @type {ChannelRoomMappingsSummaryType}
     * @memberof ChannelRoomMappingsSummary
     */
    channelRoomMappingsSummary?: ChannelRoomMappingsSummaryType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChannelRoomMappingsSummary
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {ChannelRoomMappingMasterInfoType}
     * @memberof ChannelRoomMappingsSummary
     */
    masterInfo?: ChannelRoomMappingMasterInfoType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelRoomMappingsSummary
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChannelRoomMappingsSummary interface.
 */
export function instanceOfChannelRoomMappingsSummary(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelRoomMappingsSummaryFromJSON(json: any): ChannelRoomMappingsSummary {
    return ChannelRoomMappingsSummaryFromJSONTyped(json, false);
}

export function ChannelRoomMappingsSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRoomMappingsSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelRoomMappingsSummary': !exists(json, 'channelRoomMappingsSummary') ? undefined : ChannelRoomMappingsSummaryTypeFromJSON(json['channelRoomMappingsSummary']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'masterInfo': !exists(json, 'masterInfo') ? undefined : ChannelRoomMappingMasterInfoTypeFromJSON(json['masterInfo']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChannelRoomMappingsSummaryToJSON(value?: ChannelRoomMappingsSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelRoomMappingsSummary': ChannelRoomMappingsSummaryTypeToJSON(value.channelRoomMappingsSummary),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'masterInfo': ChannelRoomMappingMasterInfoTypeToJSON(value.masterInfo),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

