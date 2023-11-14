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
import type { ChannelMappingEnhancedDescriptionType } from './ChannelMappingEnhancedDescriptionType';
import type { ChannelRateMappingEnhancedDescriptionType } from './ChannelRateMappingEnhancedDescriptionType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { GlobalDescTypeType } from './GlobalDescTypeType';
/**
 * This type holds enhanced room/rate description.
 * @export
 * @interface GenericGlobalDescriptionType
 */
export interface GenericGlobalDescriptionType {
    /**
     *
     * @type {GlobalDescTypeType}
     * @memberof GenericGlobalDescriptionType
     */
    globalDescType?: GlobalDescTypeType;
    /**
     * Property mapping with Rate plan code or Room type
     * @type {string}
     * @memberof GenericGlobalDescriptionType
     */
    hotelId?: string;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof GenericGlobalDescriptionType
     */
    ratePlanCode?: CodeDescriptionType;
    /**
     *
     * @type {ChannelRateMappingEnhancedDescriptionType}
     * @memberof GenericGlobalDescriptionType
     */
    ratePlanGlobalDescription?: ChannelRateMappingEnhancedDescriptionType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof GenericGlobalDescriptionType
     */
    roomType?: CodeDescriptionType;
    /**
     *
     * @type {ChannelMappingEnhancedDescriptionType}
     * @memberof GenericGlobalDescriptionType
     */
    roomTypeGlobalDescription?: ChannelMappingEnhancedDescriptionType;
}
/**
 * Check if a given object implements the GenericGlobalDescriptionType interface.
 */
export declare function instanceOfGenericGlobalDescriptionType(value: object): boolean;
export declare function GenericGlobalDescriptionTypeFromJSON(json: any): GenericGlobalDescriptionType;
export declare function GenericGlobalDescriptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericGlobalDescriptionType;
export declare function GenericGlobalDescriptionTypeToJSON(value?: GenericGlobalDescriptionType | null): any;