/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { TranslationTextType50 } from './TranslationTextType50';
import {
    TranslationTextType50FromJSON,
    TranslationTextType50FromJSONTyped,
    TranslationTextType50ToJSON,
} from './TranslationTextType50';

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
export function instanceOfChannelMappingEnhancedDescriptionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelMappingEnhancedDescriptionTypeFromJSON(json: any): ChannelMappingEnhancedDescriptionType {
    return ChannelMappingEnhancedDescriptionTypeFromJSONTyped(json, false);
}

export function ChannelMappingEnhancedDescriptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelMappingEnhancedDescriptionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enhancedDescriptionLine1': !exists(json, 'enhancedDescriptionLine1') ? undefined : TranslationTextType50FromJSON(json['enhancedDescriptionLine1']),
        'enhancedDescriptionLine2': !exists(json, 'enhancedDescriptionLine2') ? undefined : TranslationTextType50FromJSON(json['enhancedDescriptionLine2']),
        'enhancedDescriptionLine3': !exists(json, 'enhancedDescriptionLine3') ? undefined : TranslationTextType50FromJSON(json['enhancedDescriptionLine3']),
    };
}

export function ChannelMappingEnhancedDescriptionTypeToJSON(value?: ChannelMappingEnhancedDescriptionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enhancedDescriptionLine1': TranslationTextType50ToJSON(value.enhancedDescriptionLine1),
        'enhancedDescriptionLine2': TranslationTextType50ToJSON(value.enhancedDescriptionLine2),
        'enhancedDescriptionLine3': TranslationTextType50ToJSON(value.enhancedDescriptionLine3),
    };
}

