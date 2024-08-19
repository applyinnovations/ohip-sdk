/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HotelInterfaceType } from './HotelInterfaceType';
import {
    HotelInterfaceTypeFromJSON,
    HotelInterfaceTypeFromJSONTyped,
    HotelInterfaceTypeToJSON,
} from './HotelInterfaceType';
import type { InterfaceRightsStatusType } from './InterfaceRightsStatusType';
import {
    InterfaceRightsStatusTypeFromJSON,
    InterfaceRightsStatusTypeFromJSONTyped,
    InterfaceRightsStatusTypeToJSON,
} from './InterfaceRightsStatusType';

/**
 * Hotel Interface Type for a reservation and status of the various services
 * @export
 * @interface ReservationInterfaceStatusType
 */
export interface ReservationInterfaceStatusType {
    /**
     * 
     * @type {HotelInterfaceType}
     * @memberof ReservationInterfaceStatusType
     */
    hotelInterface?: HotelInterfaceType;
    /**
     * Contains a list of status/rights for the various services under this interface
     * @type {Array<InterfaceRightsStatusType>}
     * @memberof ReservationInterfaceStatusType
     */
    interfaceRights?: Array<InterfaceRightsStatusType>;
    /**
     * Identifier for the room extension
     * @type {string}
     * @memberof ReservationInterfaceStatusType
     */
    roomExtension?: string;
}

/**
 * Check if a given object implements the ReservationInterfaceStatusType interface.
 */
export function instanceOfReservationInterfaceStatusType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationInterfaceStatusTypeFromJSON(json: any): ReservationInterfaceStatusType {
    return ReservationInterfaceStatusTypeFromJSONTyped(json, false);
}

export function ReservationInterfaceStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationInterfaceStatusType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelInterface': !exists(json, 'hotelInterface') ? undefined : HotelInterfaceTypeFromJSON(json['hotelInterface']),
        'interfaceRights': !exists(json, 'interfaceRights') ? undefined : ((json['interfaceRights'] as Array<any>).map(InterfaceRightsStatusTypeFromJSON)),
        'roomExtension': !exists(json, 'roomExtension') ? undefined : json['roomExtension'],
    };
}

export function ReservationInterfaceStatusTypeToJSON(value?: ReservationInterfaceStatusType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelInterface': HotelInterfaceTypeToJSON(value.hotelInterface),
        'interfaceRights': value.interfaceRights === undefined ? undefined : ((value.interfaceRights as Array<any>).map(InterfaceRightsStatusTypeToJSON)),
        'roomExtension': value.roomExtension,
    };
}

