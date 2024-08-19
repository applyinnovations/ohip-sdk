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
import type { TranslationTextType2000 } from './TranslationTextType2000';
import type { TranslationTextType50 } from './TranslationTextType50';
/**
 * This type holds enhanced room/rate description.
 * @export
 * @interface ChannelGlobalDescriptionType
 */
export interface ChannelGlobalDescriptionType {
    /**
     *
     * @type {string}
     * @memberof ChannelGlobalDescriptionType
     */
    bookingChannelCode?: string;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof ChannelGlobalDescriptionType
     */
    description?: TranslationTextType2000;
    /**
     *
     * @type {TranslationTextType50}
     * @memberof ChannelGlobalDescriptionType
     */
    enhancedDesc1?: TranslationTextType50;
    /**
     *
     * @type {TranslationTextType50}
     * @memberof ChannelGlobalDescriptionType
     */
    enhancedDesc2?: TranslationTextType50;
    /**
     *
     * @type {TranslationTextType50}
     * @memberof ChannelGlobalDescriptionType
     */
    enhancedDesc3?: TranslationTextType50;
    /**
     *
     * @type {string}
     * @memberof ChannelGlobalDescriptionType
     */
    hotelId?: string;
    /**
     *
     * @type {string}
     * @memberof ChannelGlobalDescriptionType
     */
    rateCode?: string;
    /**
     *
     * @type {string}
     * @memberof ChannelGlobalDescriptionType
     */
    roomType?: string;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof ChannelGlobalDescriptionType
     */
    shortDescription?: TranslationTextType2000;
    /**
     *
     * @type {string}
     * @memberof ChannelGlobalDescriptionType
     */
    source?: string;
}
/**
 * Check if a given object implements the ChannelGlobalDescriptionType interface.
 */
export declare function instanceOfChannelGlobalDescriptionType(value: object): boolean;
export declare function ChannelGlobalDescriptionTypeFromJSON(json: any): ChannelGlobalDescriptionType;
export declare function ChannelGlobalDescriptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelGlobalDescriptionType;
export declare function ChannelGlobalDescriptionTypeToJSON(value?: ChannelGlobalDescriptionType | null): any;
