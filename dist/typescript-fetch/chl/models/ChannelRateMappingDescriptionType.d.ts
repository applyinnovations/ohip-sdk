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
import type { ChannelRateMappingDescriptionDetailsType } from './ChannelRateMappingDescriptionDetailsType';
import type { ChannelRateMappingEnhancedDescriptionType } from './ChannelRateMappingEnhancedDescriptionType';
import type { TranslationTextType80 } from './TranslationTextType80';
/**
 * This type holds descriptions of hotel-channel rate code mapping. Description may be from Hotel rate code description, Global description or custom user defined description. Global description only supports enhanced description.
 * @export
 * @interface ChannelRateMappingDescriptionType
 */
export interface ChannelRateMappingDescriptionType {
    /**
     *
     * @type {ChannelRateMappingDescriptionDetailsType}
     * @memberof ChannelRateMappingDescriptionType
     */
    customDescription?: ChannelRateMappingDescriptionDetailsType;
    /**
     *
     * @type {ChannelRateMappingEnhancedDescriptionType}
     * @memberof ChannelRateMappingDescriptionType
     */
    globalDescription?: ChannelRateMappingEnhancedDescriptionType;
    /**
     *
     * @type {ChannelRateMappingDescriptionDetailsType}
     * @memberof ChannelRateMappingDescriptionType
     */
    rateCodeDescription?: ChannelRateMappingDescriptionDetailsType;
    /**
     *
     * @type {TranslationTextType80}
     * @memberof ChannelRateMappingDescriptionType
     */
    shortDescription?: TranslationTextType80;
}
/**
 * Check if a given object implements the ChannelRateMappingDescriptionType interface.
 */
export declare function instanceOfChannelRateMappingDescriptionType(value: object): boolean;
export declare function ChannelRateMappingDescriptionTypeFromJSON(json: any): ChannelRateMappingDescriptionType;
export declare function ChannelRateMappingDescriptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRateMappingDescriptionType;
export declare function ChannelRateMappingDescriptionTypeToJSON(value?: ChannelRateMappingDescriptionType | null): any;
