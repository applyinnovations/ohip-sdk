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
import type { EmailDeliveryFormatType } from './EmailDeliveryFormatType';
import {
    EmailDeliveryFormatTypeFromJSON,
    EmailDeliveryFormatTypeFromJSONTyped,
    EmailDeliveryFormatTypeToJSON,
} from './EmailDeliveryFormatType';
import type { EmailDeliveryMethodType } from './EmailDeliveryMethodType';
import {
    EmailDeliveryMethodTypeFromJSON,
    EmailDeliveryMethodTypeFromJSONTyped,
    EmailDeliveryMethodTypeToJSON,
} from './EmailDeliveryMethodType';

/**
 * Email content configuration template
 * @export
 * @interface EmailDeliveryConfigurationType
 */
export interface EmailDeliveryConfigurationType {
    /**
     * This option must be selected in order to activate emailing from an SMTP compliant email server
     * @type {boolean}
     * @memberof EmailDeliveryConfigurationType
     */
    activateDelivery?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmailDeliveryConfigurationType
     */
    attachICalender?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmailDeliveryConfigurationType
     */
    body?: string;
    /**
     * 
     * @type {EmailDeliveryFormatType}
     * @memberof EmailDeliveryConfigurationType
     */
    format?: EmailDeliveryFormatType;
    /**
     * 
     * @type {string}
     * @memberof EmailDeliveryConfigurationType
     */
    fromAddress?: string;
    /**
     * Available for Confirmation Letters only and when Activate Email Delivery is selected
     * @type {boolean}
     * @memberof EmailDeliveryConfigurationType
     */
    hTMLFormatDelivery?: boolean;
    /**
     * Hotel code
     * @type {string}
     * @memberof EmailDeliveryConfigurationType
     */
    hotelId?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailDeliveryConfigurationType
     */
    serverName?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailDeliveryConfigurationType
     */
    subject?: string;
    /**
     * 
     * @type {EmailDeliveryMethodType}
     * @memberof EmailDeliveryConfigurationType
     */
    type?: EmailDeliveryMethodType;
    /**
     * 
     * @type {string}
     * @memberof EmailDeliveryConfigurationType
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailDeliveryConfigurationType
     */
    userPassword?: string;
}

/**
 * Check if a given object implements the EmailDeliveryConfigurationType interface.
 */
export function instanceOfEmailDeliveryConfigurationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailDeliveryConfigurationTypeFromJSON(json: any): EmailDeliveryConfigurationType {
    return EmailDeliveryConfigurationTypeFromJSONTyped(json, false);
}

export function EmailDeliveryConfigurationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailDeliveryConfigurationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activateDelivery': !exists(json, 'activateDelivery') ? undefined : json['activateDelivery'],
        'attachICalender': !exists(json, 'attachICalender') ? undefined : json['attachICalender'],
        'body': !exists(json, 'body') ? undefined : json['body'],
        'format': !exists(json, 'format') ? undefined : EmailDeliveryFormatTypeFromJSON(json['format']),
        'fromAddress': !exists(json, 'fromAddress') ? undefined : json['fromAddress'],
        'hTMLFormatDelivery': !exists(json, 'hTMLFormatDelivery') ? undefined : json['hTMLFormatDelivery'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'serverName': !exists(json, 'serverName') ? undefined : json['serverName'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'type': !exists(json, 'type') ? undefined : EmailDeliveryMethodTypeFromJSON(json['type']),
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'userPassword': !exists(json, 'userPassword') ? undefined : json['userPassword'],
    };
}

export function EmailDeliveryConfigurationTypeToJSON(value?: EmailDeliveryConfigurationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activateDelivery': value.activateDelivery,
        'attachICalender': value.attachICalender,
        'body': value.body,
        'format': EmailDeliveryFormatTypeToJSON(value.format),
        'fromAddress': value.fromAddress,
        'hTMLFormatDelivery': value.hTMLFormatDelivery,
        'hotelId': value.hotelId,
        'serverName': value.serverName,
        'subject': value.subject,
        'type': EmailDeliveryMethodTypeToJSON(value.type),
        'userId': value.userId,
        'userPassword': value.userPassword,
    };
}
