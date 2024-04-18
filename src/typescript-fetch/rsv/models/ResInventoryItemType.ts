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
import type { DateRangeType } from './DateRangeType';
import {
    DateRangeTypeFromJSON,
    DateRangeTypeFromJSONTyped,
    DateRangeTypeToJSON,
} from './DateRangeType';
import type { ItemInfoType } from './ItemInfoType';
import {
    ItemInfoTypeFromJSON,
    ItemInfoTypeFromJSONTyped,
    ItemInfoTypeToJSON,
} from './ItemInfoType';
import type { ResInventoryItemSourceType } from './ResInventoryItemSourceType';
import {
    ResInventoryItemSourceTypeFromJSON,
    ResInventoryItemSourceTypeFromJSONTyped,
    ResInventoryItemSourceTypeToJSON,
} from './ResInventoryItemSourceType';

/**
 * An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote).
 * @export
 * @interface ResInventoryItemType
 */
export interface ResInventoryItemType {
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof ResInventoryItemType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof ResInventoryItemType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof ResInventoryItemType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof ResInventoryItemType
     */
    instance?: string;
    /**
     * 
     * @type {ItemInfoType}
     * @memberof ResInventoryItemType
     */
    item?: ItemInfoType;
    /**
     * Number of items booked.
     * @type {number}
     * @memberof ResInventoryItemType
     */
    quantity?: number;
    /**
     * 
     * @type {ResInventoryItemSourceType}
     * @memberof ResInventoryItemType
     */
    source?: ResInventoryItemSourceType;
    /**
     * 
     * @type {DateRangeType}
     * @memberof ResInventoryItemType
     */
    timeSpan?: DateRangeType;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof ResInventoryItemType
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof ResInventoryItemType
     */
    url?: string;
}

/**
 * Check if a given object implements the ResInventoryItemType interface.
 */
export function instanceOfResInventoryItemType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResInventoryItemTypeFromJSON(json: any): ResInventoryItemType {
    return ResInventoryItemTypeFromJSONTyped(json, false);
}

export function ResInventoryItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResInventoryItemType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idContext': !exists(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !exists(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !exists(json, 'instance') ? undefined : json['instance'],
        'item': !exists(json, 'item') ? undefined : ItemInfoTypeFromJSON(json['item']),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'source': !exists(json, 'source') ? undefined : ResInventoryItemSourceTypeFromJSON(json['source']),
        'timeSpan': !exists(json, 'timeSpan') ? undefined : DateRangeTypeFromJSON(json['timeSpan']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function ResInventoryItemTypeToJSON(value?: ResInventoryItemType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
        'instance': value.instance,
        'item': ItemInfoTypeToJSON(value.item),
        'quantity': value.quantity,
        'source': ResInventoryItemSourceTypeToJSON(value.source),
        'timeSpan': DateRangeTypeToJSON(value.timeSpan),
        'type': value.type,
        'url': value.url,
    };
}
