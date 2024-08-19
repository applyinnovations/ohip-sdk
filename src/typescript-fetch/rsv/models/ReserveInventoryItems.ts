/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { ResInventoryItemsType } from './ResInventoryItemsType';
import {
    ResInventoryItemsTypeFromJSON,
    ResInventoryItemsTypeFromJSONTyped,
    ResInventoryItemsTypeToJSON,
} from './ResInventoryItemsType';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object to reserve inventory Items for a reservation.
 * @export
 * @interface ReserveInventoryItems
 */
export interface ReserveInventoryItems {
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof ReserveInventoryItems
     */
    hotelId?: string;
    /**
     * 
     * @type {ResInventoryItemsType}
     * @memberof ReserveInventoryItems
     */
    inventoryItems?: ResInventoryItemsType;
    /**
     * ID of an Hold Item
     * @type {Array<number>}
     * @memberof ReserveInventoryItems
     */
    itemHoldIdList?: Array<number>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ReserveInventoryItems
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {ReservationId}
     * @memberof ReserveInventoryItems
     */
    reservationId?: ReservationId;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ReserveInventoryItems
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ReserveInventoryItems interface.
 */
export function instanceOfReserveInventoryItems(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReserveInventoryItemsFromJSON(json: any): ReserveInventoryItems {
    return ReserveInventoryItemsFromJSONTyped(json, false);
}

export function ReserveInventoryItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReserveInventoryItems {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'inventoryItems': !exists(json, 'inventoryItems') ? undefined : ResInventoryItemsTypeFromJSON(json['inventoryItems']),
        'itemHoldIdList': !exists(json, 'itemHoldIdList') ? undefined : json['itemHoldIdList'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ReserveInventoryItemsToJSON(value?: ReserveInventoryItems | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'inventoryItems': ResInventoryItemsTypeToJSON(value.inventoryItems),
        'itemHoldIdList': value.itemHoldIdList,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'reservationId': ReservationIdToJSON(value.reservationId),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

