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
import type { ChannelOrgMappingType } from './ChannelOrgMappingType';
/**
 * Respresents information of the Channel Code, OrgCode and Default Login Resort used for mapping.
 * @export
 * @interface ChannelOrgMappingsType
 */
export interface ChannelOrgMappingsType extends Array<ChannelOrgMappingType> {
}
/**
 * Check if a given object implements the ChannelOrgMappingsType interface.
 */
export declare function instanceOfChannelOrgMappingsType(value: object): boolean;
export declare function ChannelOrgMappingsTypeFromJSON(json: any): ChannelOrgMappingsType;
export declare function ChannelOrgMappingsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelOrgMappingsType;
export declare function ChannelOrgMappingsTypeToJSON(value?: ChannelOrgMappingsType | null): any;
