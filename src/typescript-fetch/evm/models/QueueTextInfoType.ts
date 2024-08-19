/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Information regarding the message sent to guest.
 * @export
 * @interface QueueTextInfoType
 */
export interface QueueTextInfoType {
    /**
     * User name of the user who sent message.
     * @type {string}
     * @memberof QueueTextInfoType
     */
    sentBy?: string;
    /**
     * Time the text was last sent to the user.
     * @type {string}
     * @memberof QueueTextInfoType
     */
    sentTime?: string;
}

/**
 * Check if a given object implements the QueueTextInfoType interface.
 */
export function instanceOfQueueTextInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QueueTextInfoTypeFromJSON(json: any): QueueTextInfoType {
    return QueueTextInfoTypeFromJSONTyped(json, false);
}

export function QueueTextInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueueTextInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sentBy': !exists(json, 'sentBy') ? undefined : json['sentBy'],
        'sentTime': !exists(json, 'sentTime') ? undefined : json['sentTime'],
    };
}

export function QueueTextInfoTypeToJSON(value?: QueueTextInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sentBy': value.sentBy,
        'sentTime': value.sentTime,
    };
}

