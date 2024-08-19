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
import type { ChannelOrgMappingType } from './ChannelOrgMappingType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for Fetch Channel to ORG and CRO Mapping.
 * @export
 * @interface ChannelOrgMappingsDetails
 */
export interface ChannelOrgMappingsDetails {
    /**
     * Respresents information of the Channel Code, OrgCode and Default Login Resort used for mapping.
     * @type {Array<ChannelOrgMappingType>}
     * @memberof ChannelOrgMappingsDetails
     */
    channelOrgMappingsDetails?: Array<ChannelOrgMappingType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ChannelOrgMappingsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelOrgMappingsDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ChannelOrgMappingsDetails interface.
 */
export declare function instanceOfChannelOrgMappingsDetails(value: object): boolean;
export declare function ChannelOrgMappingsDetailsFromJSON(json: any): ChannelOrgMappingsDetails;
export declare function ChannelOrgMappingsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelOrgMappingsDetails;
export declare function ChannelOrgMappingsDetailsToJSON(value?: ChannelOrgMappingsDetails | null): any;
