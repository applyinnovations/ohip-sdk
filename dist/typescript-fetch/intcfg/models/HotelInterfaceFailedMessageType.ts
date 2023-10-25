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
/**
 * 
 * @export
 * @interface HotelInterfaceFailedMessageType
 */
export interface HotelInterfaceFailedMessageType {
    /**
     * Action Name
     * @type {string}
     * @memberof HotelInterfaceFailedMessageType
     */
    actionName?: string;
    /**
     * Hotel Code
     * @type {string}
     * @memberof HotelInterfaceFailedMessageType
     */
    hotelId?: string;
    /**
     * ifcType
     * @type {string}
     * @memberof HotelInterfaceFailedMessageType
     */
    ifcType?: string;
    /**
     * Date time stamp of a Hotel Interface Schema.
     * @type {string}
     * @memberof HotelInterfaceFailedMessageType
     */
    insertDate?: string;
    /**
     * Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create.
     * @type {string}
     * @memberof HotelInterfaceFailedMessageType
     */
    logo?: string;
    /**
     * Message
     * @type {string}
     * @memberof HotelInterfaceFailedMessageType
     */
    message?: string;
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
        
        'actionName': !exists(json, 'actionName') ? undefined : json['actionName'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'ifcType': !exists(json, 'ifcType') ? undefined : json['ifcType'],
        'insertDate': !exists(json, 'insertDate') ? undefined : json['insertDate'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'message': !exists(json, 'message') ? undefined : json['message'],
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
        
        'actionName': value.actionName,
        'hotelId': value.hotelId,
        'ifcType': value.ifcType,
        'insertDate': value.insertDate,
        'logo': value.logo,
        'message': value.message,
    };
}

