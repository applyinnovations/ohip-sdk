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
import type { EnhancedDescriptionType } from './EnhancedDescriptionType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for information regarding global descriptions of hotel room types.
 * @export
 * @interface ChannelEnhancedGlobalDescription
 */
export interface ChannelEnhancedGlobalDescription {
    /**
     *
     * @type {EnhancedDescriptionType}
     * @memberof ChannelEnhancedGlobalDescription
     */
    globalDescription?: EnhancedDescriptionType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ChannelEnhancedGlobalDescription
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelEnhancedGlobalDescription
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ChannelEnhancedGlobalDescription interface.
 */
export declare function instanceOfChannelEnhancedGlobalDescription(value: object): boolean;
export declare function ChannelEnhancedGlobalDescriptionFromJSON(json: any): ChannelEnhancedGlobalDescription;
export declare function ChannelEnhancedGlobalDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelEnhancedGlobalDescription;
export declare function ChannelEnhancedGlobalDescriptionToJSON(value?: ChannelEnhancedGlobalDescription | null): any;
