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
 * Respresents information of the Channel Code, OrgCode and Default Login Resort used for mapping.
 * @export
 * @interface ChannelOrgMappingType
 */
export interface ChannelOrgMappingType {
    /**
     * Channel code for which OrgCode mapping needs to be done.
     * @type {string}
     * @memberof ChannelOrgMappingType
     */
    channelCode?: string;
    /**
     * Default Login Resort value used while mapping Channel Code and OrgCode.
     * @type {string}
     * @memberof ChannelOrgMappingType
     */
    defaultLoginResort?: string;
    /**
     * OrgCode for which Channel code mapping needs to be done.
     * @type {string}
     * @memberof ChannelOrgMappingType
     */
    orgCode?: string;
}

/**
 * Check if a given object implements the ChannelOrgMappingType interface.
 */
export function instanceOfChannelOrgMappingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelOrgMappingTypeFromJSON(json: any): ChannelOrgMappingType {
    return ChannelOrgMappingTypeFromJSONTyped(json, false);
}

export function ChannelOrgMappingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelOrgMappingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelCode': !exists(json, 'channelCode') ? undefined : json['channelCode'],
        'defaultLoginResort': !exists(json, 'defaultLoginResort') ? undefined : json['defaultLoginResort'],
        'orgCode': !exists(json, 'orgCode') ? undefined : json['orgCode'],
    };
}

export function ChannelOrgMappingTypeToJSON(value?: ChannelOrgMappingType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelCode': value.channelCode,
        'defaultLoginResort': value.defaultLoginResort,
        'orgCode': value.orgCode,
    };
}

