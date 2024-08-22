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
import type { TranslationTextType50 } from './TranslationTextType50';
/**
 * Enhanced descriptions of hotel-channel room type or rate code mapping.
 * @export
 * @interface ChannelMappingEnhancedDescriptionType
 */
export interface ChannelMappingEnhancedDescriptionType {
    /**
     *
     * @type {TranslationTextType50}
     * @memberof ChannelMappingEnhancedDescriptionType
     */
    enhancedDescriptionLine1?: TranslationTextType50;
    /**
     *
     * @type {TranslationTextType50}
     * @memberof ChannelMappingEnhancedDescriptionType
     */
    enhancedDescriptionLine2?: TranslationTextType50;
    /**
     *
     * @type {TranslationTextType50}
     * @memberof ChannelMappingEnhancedDescriptionType
     */
    enhancedDescriptionLine3?: TranslationTextType50;
}
/**
 * Check if a given object implements the ChannelMappingEnhancedDescriptionType interface.
 */
export declare function instanceOfChannelMappingEnhancedDescriptionType(value: object): boolean;
export declare function ChannelMappingEnhancedDescriptionTypeFromJSON(json: any): ChannelMappingEnhancedDescriptionType;
export declare function ChannelMappingEnhancedDescriptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelMappingEnhancedDescriptionType;
export declare function ChannelMappingEnhancedDescriptionTypeToJSON(value?: ChannelMappingEnhancedDescriptionType | null): any;
