/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TextMessageDeliveryConfigurationType } from './TextMessageDeliveryConfigurationType';
import {
    TextMessageDeliveryConfigurationTypeFromJSON,
    TextMessageDeliveryConfigurationTypeFromJSONTyped,
    TextMessageDeliveryConfigurationTypeToJSON,
} from './TextMessageDeliveryConfigurationType';

/**
 * Guest text message configuration, settings for Text Message Delivery of Guest Messages
 * @export
 * @interface GuestMessageDeliveryMethodType
 */
export interface GuestMessageDeliveryMethodType {
    /**
     * 
     * @type {TextMessageDeliveryConfigurationType}
     * @memberof GuestMessageDeliveryMethodType
     */
    textMessage?: TextMessageDeliveryConfigurationType;
}

/**
 * Check if a given object implements the GuestMessageDeliveryMethodType interface.
 */
export function instanceOfGuestMessageDeliveryMethodType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GuestMessageDeliveryMethodTypeFromJSON(json: any): GuestMessageDeliveryMethodType {
    return GuestMessageDeliveryMethodTypeFromJSONTyped(json, false);
}

export function GuestMessageDeliveryMethodTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestMessageDeliveryMethodType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'textMessage': !exists(json, 'textMessage') ? undefined : TextMessageDeliveryConfigurationTypeFromJSON(json['textMessage']),
    };
}

export function GuestMessageDeliveryMethodTypeToJSON(value?: GuestMessageDeliveryMethodType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'textMessage': TextMessageDeliveryConfigurationTypeToJSON(value.textMessage),
    };
}

