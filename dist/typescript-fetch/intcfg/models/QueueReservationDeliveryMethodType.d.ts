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
import type { TextMessageDeliveryConfigurationType } from './TextMessageDeliveryConfigurationType';
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
export declare function instanceOfQueueReservationDeliveryMethodType(value: object): boolean;
export declare function QueueReservationDeliveryMethodTypeFromJSON(json: any): QueueReservationDeliveryMethodType;
export declare function QueueReservationDeliveryMethodTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueueReservationDeliveryMethodType;
export declare function QueueReservationDeliveryMethodTypeToJSON(value?: QueueReservationDeliveryMethodType | null): any;
