/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DeliveryMethodType } from './DeliveryMethodType';
import {
    DeliveryMethodTypeFromJSON,
    DeliveryMethodTypeFromJSONTyped,
    DeliveryMethodTypeToJSON,
} from './DeliveryMethodType';
import type { StatusType } from './StatusType';
import {
    StatusTypeFromJSON,
    StatusTypeFromJSONTyped,
    StatusTypeToJSON,
} from './StatusType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * 
 * @export
 * @interface DeliveryHistoryType
 */
export interface DeliveryHistoryType {
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof DeliveryHistoryType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof DeliveryHistoryType
     */
    creatorId?: string;
    /**
     * Delivery Date.
     * @type {string}
     * @memberof DeliveryHistoryType
     */
    deliveryDate?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof DeliveryHistoryType
     */
    deliveryId?: UniqueIDType;
    /**
     * 
     * @type {DeliveryMethodType}
     * @memberof DeliveryHistoryType
     */
    deliveryMethod?: DeliveryMethodType;
    /**
     * 
     * @type {StatusType}
     * @memberof DeliveryHistoryType
     */
    deliveryStatus?: StatusType;
    /**
     * The error Description Of Reservation Delivery status
     * @type {string}
     * @memberof DeliveryHistoryType
     */
    errorDescription?: string;
    /**
     * Hotel Code.
     * @type {string}
     * @memberof DeliveryHistoryType
     */
    hotelId?: string;
    /**
     * Interface Id.
     * @type {string}
     * @memberof DeliveryHistoryType
     */
    interfaceId?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof DeliveryHistoryType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof DeliveryHistoryType
     */
    lastModifyDateTime?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof DeliveryHistoryType
     */
    purgeDate?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof DeliveryHistoryType
     */
    resvNameId?: UniqueIDType;
    /**
     * Retry Count
     * @type {number}
     * @memberof DeliveryHistoryType
     */
    retryCount?: number;
}

/**
 * Check if a given object implements the DeliveryHistoryType interface.
 */
export function instanceOfDeliveryHistoryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeliveryHistoryTypeFromJSON(json: any): DeliveryHistoryType {
    return DeliveryHistoryTypeFromJSONTyped(json, false);
}

export function DeliveryHistoryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeliveryHistoryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'deliveryDate': !exists(json, 'deliveryDate') ? undefined : json['deliveryDate'],
        'deliveryId': !exists(json, 'deliveryId') ? undefined : UniqueIDTypeFromJSON(json['deliveryId']),
        'deliveryMethod': !exists(json, 'deliveryMethod') ? undefined : DeliveryMethodTypeFromJSON(json['deliveryMethod']),
        'deliveryStatus': !exists(json, 'deliveryStatus') ? undefined : StatusTypeFromJSON(json['deliveryStatus']),
        'errorDescription': !exists(json, 'errorDescription') ? undefined : json['errorDescription'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'interfaceId': !exists(json, 'interfaceId') ? undefined : json['interfaceId'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'purgeDate': !exists(json, 'purgeDate') ? undefined : json['purgeDate'],
        'resvNameId': !exists(json, 'resvNameId') ? undefined : UniqueIDTypeFromJSON(json['resvNameId']),
        'retryCount': !exists(json, 'retryCount') ? undefined : json['retryCount'],
    };
}

export function DeliveryHistoryTypeToJSON(value?: DeliveryHistoryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'deliveryDate': value.deliveryDate,
        'deliveryId': UniqueIDTypeToJSON(value.deliveryId),
        'deliveryMethod': DeliveryMethodTypeToJSON(value.deliveryMethod),
        'deliveryStatus': StatusTypeToJSON(value.deliveryStatus),
        'errorDescription': value.errorDescription,
        'hotelId': value.hotelId,
        'interfaceId': value.interfaceId,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'purgeDate': value.purgeDate,
        'resvNameId': UniqueIDTypeToJSON(value.resvNameId),
        'retryCount': value.retryCount,
    };
}

