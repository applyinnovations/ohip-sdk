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
 * @interface HotelInterfaceErrorType
 */
export interface HotelInterfaceErrorType {
    /**
     * Hotel Code
     * @type {string}
     * @memberof HotelInterfaceErrorType
     */
    hotelId?: string;
    /**
     * Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create.
     * @type {string}
     * @memberof HotelInterfaceErrorType
     */
    logo?: string;
    /**
     * Action Name
     * @type {string}
     * @memberof HotelInterfaceErrorType
     */
    actionName?: string;
    /**
     * Message
     * @type {string}
     * @memberof HotelInterfaceErrorType
     */
    message?: string;
    /**
     * Error
     * @type {string}
     * @memberof HotelInterfaceErrorType
     */
    error?: string;
    /**
     * Schema
     * @type {string}
     * @memberof HotelInterfaceErrorType
     */
    resvNameId?: string;
    /**
     * Date time stamp of a Hotel Interface Schema.
     * @type {string}
     * @memberof HotelInterfaceErrorType
     */
    insertDate?: string;
    /**
     * ifcType
     * @type {string}
     * @memberof HotelInterfaceErrorType
     */
    ifcType?: string;
}

/**
 * Check if a given object implements the HotelInterfaceErrorType interface.
 */
export function instanceOfHotelInterfaceErrorType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelInterfaceErrorTypeFromJSON(json: any): HotelInterfaceErrorType {
    return HotelInterfaceErrorTypeFromJSONTyped(json, false);
}

export function HotelInterfaceErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInterfaceErrorType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'actionName': !exists(json, 'actionName') ? undefined : json['actionName'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'resvNameId': !exists(json, 'resvNameId') ? undefined : json['resvNameId'],
        'insertDate': !exists(json, 'insertDate') ? undefined : json['insertDate'],
        'ifcType': !exists(json, 'ifcType') ? undefined : json['ifcType'],
    };
}

export function HotelInterfaceErrorTypeToJSON(value?: HotelInterfaceErrorType | null): any {
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
        'error': value.error,
        'resvNameId': value.resvNameId,
        'insertDate': value.insertDate,
        'ifcType': value.ifcType,
    };
}

