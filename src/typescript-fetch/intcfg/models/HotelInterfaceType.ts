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
import type { HotelInterfaceStatusType } from './HotelInterfaceStatusType';
import {
    HotelInterfaceStatusTypeFromJSON,
    HotelInterfaceStatusTypeFromJSONTyped,
    HotelInterfaceStatusTypeToJSON,
} from './HotelInterfaceStatusType';
import type { HotelInterfaceTypeType } from './HotelInterfaceTypeType';
import {
    HotelInterfaceTypeTypeFromJSON,
    HotelInterfaceTypeTypeFromJSONTyped,
    HotelInterfaceTypeTypeToJSON,
} from './HotelInterfaceTypeType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * 
 * @export
 * @interface HotelInterfaceType
 */
export interface HotelInterfaceType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof HotelInterfaceType
     */
    interfaceId?: UniqueIDType;
    /**
     * Hotel Code
     * @type {string}
     * @memberof HotelInterfaceType
     */
    hotelId?: string;
    /**
     * Name of the Hotel Interface
     * @type {string}
     * @memberof HotelInterfaceType
     */
    interfaceName?: string;
    /**
     * 
     * @type {HotelInterfaceTypeType}
     * @memberof HotelInterfaceType
     */
    interfaceType?: HotelInterfaceTypeType;
    /**
     * Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create.
     * @type {string}
     * @memberof HotelInterfaceType
     */
    logo?: string;
    /**
     * Unique machine name of the running IFC.
     * @type {string}
     * @memberof HotelInterfaceType
     */
    machineName?: string;
    /**
     * 
     * @type {HotelInterfaceStatusType}
     * @memberof HotelInterfaceType
     */
    status?: HotelInterfaceStatusType;
    /**
     * Indicator if the Hotel Interface is active or not. This is different from the Interface Status, which is either STOPPED or RUNNING.
     * @type {boolean}
     * @memberof HotelInterfaceType
     */
    activeFlag?: boolean;
    /**
     * Stores the Outbound Code to identify the target system.
     * @type {string}
     * @memberof HotelInterfaceType
     */
    outboundCode?: string;
}

/**
 * Check if a given object implements the HotelInterfaceType interface.
 */
export function instanceOfHotelInterfaceType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelInterfaceTypeFromJSON(json: any): HotelInterfaceType {
    return HotelInterfaceTypeFromJSONTyped(json, false);
}

export function HotelInterfaceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInterfaceType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'interfaceId': !exists(json, 'interfaceId') ? undefined : UniqueIDTypeFromJSON(json['interfaceId']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'interfaceName': !exists(json, 'interfaceName') ? undefined : json['interfaceName'],
        'interfaceType': !exists(json, 'interfaceType') ? undefined : HotelInterfaceTypeTypeFromJSON(json['interfaceType']),
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'machineName': !exists(json, 'machineName') ? undefined : json['machineName'],
        'status': !exists(json, 'status') ? undefined : HotelInterfaceStatusTypeFromJSON(json['status']),
        'activeFlag': !exists(json, 'activeFlag') ? undefined : json['activeFlag'],
        'outboundCode': !exists(json, 'outboundCode') ? undefined : json['outboundCode'],
    };
}

export function HotelInterfaceTypeToJSON(value?: HotelInterfaceType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'interfaceId': UniqueIDTypeToJSON(value.interfaceId),
        'hotelId': value.hotelId,
        'interfaceName': value.interfaceName,
        'interfaceType': HotelInterfaceTypeTypeToJSON(value.interfaceType),
        'logo': value.logo,
        'machineName': value.machineName,
        'status': HotelInterfaceStatusTypeToJSON(value.status),
        'activeFlag': value.activeFlag,
        'outboundCode': value.outboundCode,
    };
}

