/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
     * Indicator if the Hotel Interface is active or not. This is different from the Interface Status, which is either STOPPED or RUNNING.
     * @type {boolean}
     * @memberof HotelInterfaceType
     */
    activeFlag?: boolean;
    /**
     * Hotel Code
     * @type {string}
     * @memberof HotelInterfaceType
     */
    hotelId?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof HotelInterfaceType
     */
    interfaceId?: UniqueIDType;
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
        
        'activeFlag': !exists(json, 'activeFlag') ? undefined : json['activeFlag'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'interfaceId': !exists(json, 'interfaceId') ? undefined : UniqueIDTypeFromJSON(json['interfaceId']),
        'interfaceName': !exists(json, 'interfaceName') ? undefined : json['interfaceName'],
        'interfaceType': !exists(json, 'interfaceType') ? undefined : HotelInterfaceTypeTypeFromJSON(json['interfaceType']),
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'machineName': !exists(json, 'machineName') ? undefined : json['machineName'],
        'status': !exists(json, 'status') ? undefined : HotelInterfaceStatusTypeFromJSON(json['status']),
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
        
        'activeFlag': value.activeFlag,
        'hotelId': value.hotelId,
        'interfaceId': UniqueIDTypeToJSON(value.interfaceId),
        'interfaceName': value.interfaceName,
        'interfaceType': HotelInterfaceTypeTypeToJSON(value.interfaceType),
        'logo': value.logo,
        'machineName': value.machineName,
        'status': HotelInterfaceStatusTypeToJSON(value.status),
    };
}

