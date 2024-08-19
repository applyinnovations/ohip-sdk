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
/**
 * 
 * @export
 * @interface HotelInterfaceFailedMessageType
 */
export interface HotelInterfaceFailedMessageType {
    /**
     * Hotel Code
     * @type {string}
     * @memberof HotelInterfaceFailedMessageType
     */
    hotelId?: string;
    /**
     * Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create.
     * @type {string}
     * @memberof HotelInterfaceFailedMessageType
     */
    logo?: string;
    /**
     * Action Name
     * @type {string}
     * @memberof HotelInterfaceFailedMessageType
     */
    actionName?: string;
    /**
     * Message
     * @type {string}
     * @memberof HotelInterfaceFailedMessageType
     */
    message?: string;
    /**
     * Date time stamp of a Hotel Interface Schema.
     * @type {string}
     * @memberof HotelInterfaceFailedMessageType
     */
    insertDate?: string;
    /**
     * ifcType
     * @type {string}
     * @memberof HotelInterfaceFailedMessageType
     */
    ifcType?: string;
}

/**
 * Check if a given object implements the HotelInterfaceFailedMessageType interface.
 */
export function instanceOfHotelInterfaceFailedMessageType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelInterfaceFailedMessageTypeFromJSON(json: any): HotelInterfaceFailedMessageType {
    return HotelInterfaceFailedMessageTypeFromJSONTyped(json, false);
}

export function HotelInterfaceFailedMessageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInterfaceFailedMessageType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'actionName': !exists(json, 'actionName') ? undefined : json['actionName'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'insertDate': !exists(json, 'insertDate') ? undefined : json['insertDate'],
        'ifcType': !exists(json, 'ifcType') ? undefined : json['ifcType'],
    };
}

export function HotelInterfaceFailedMessageTypeToJSON(value?: HotelInterfaceFailedMessageType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'logo': value.logo,
        'actionName': value.actionName,
        'message': value.message,
        'insertDate': value.insertDate,
        'ifcType': value.ifcType,
    };
}

