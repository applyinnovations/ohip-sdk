/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
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
 * Queue reservation delivery method configuration, settings for Text Message Delivery of Queue Reservation status
 * @export
 * @interface QueueReservationDeliveryMethodType
 */
export interface QueueReservationDeliveryMethodType {
    /**
     * 
     * @type {TextMessageDeliveryConfigurationType}
     * @memberof QueueReservationDeliveryMethodType
     */
    textMessage?: TextMessageDeliveryConfigurationType;
}

/**
 * Check if a given object implements the QueueReservationDeliveryMethodType interface.
 */
export function instanceOfQueueReservationDeliveryMethodType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QueueReservationDeliveryMethodTypeFromJSON(json: any): QueueReservationDeliveryMethodType {
    return QueueReservationDeliveryMethodTypeFromJSONTyped(json, false);
}

export function QueueReservationDeliveryMethodTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueueReservationDeliveryMethodType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'textMessage': !exists(json, 'textMessage') ? undefined : TextMessageDeliveryConfigurationTypeFromJSON(json['textMessage']),
    };
}

export function QueueReservationDeliveryMethodTypeToJSON(value?: QueueReservationDeliveryMethodType | null): any {
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
