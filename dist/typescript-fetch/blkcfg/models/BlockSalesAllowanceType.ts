/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Contains single entry information for Block's Sales Allowance.
 * @export
 * @interface BlockSalesAllowanceType
 */
export interface BlockSalesAllowanceType {
    /**
     * Contains allocated number of rooms for allowance.
     * @type {number}
     * @memberof BlockSalesAllowanceType
     */
    allowance?: number;
    /**
     * Contains number of rooms are booked/consumed from sales allowance.
     * @type {number}
     * @memberof BlockSalesAllowanceType
     */
    booked?: number;
    /**
     * Contains cutoff date for sales allowance.
     * @type {Date}
     * @memberof BlockSalesAllowanceType
     */
    cutoffDate?: Date;
    /**
     * Contains Hotel Code.
     * @type {string}
     * @memberof BlockSalesAllowanceType
     */
    hotelId?: string;
    /**
     * Contains number of rooms are overbooked from sales allowance.
     * @type {number}
     * @memberof BlockSalesAllowanceType
     */
    overBooked?: number;
    /**
     * Contains room pool code.
     * @type {string}
     * @memberof BlockSalesAllowanceType
     */
    roomPool?: string;
    /**
     * Contains room type.
     * @type {string}
     * @memberof BlockSalesAllowanceType
     */
    roomType?: string;
    /**
     * Contains sales allowance date.
     * @type {Date}
     * @memberof BlockSalesAllowanceType
     */
    salesAllowanceDate?: Date;
}

/**
 * Check if a given object implements the BlockSalesAllowanceType interface.
 */
export function instanceOfBlockSalesAllowanceType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockSalesAllowanceTypeFromJSON(json: any): BlockSalesAllowanceType {
    return BlockSalesAllowanceTypeFromJSONTyped(json, false);
}

export function BlockSalesAllowanceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockSalesAllowanceType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowance': !exists(json, 'allowance') ? undefined : json['allowance'],
        'booked': !exists(json, 'booked') ? undefined : json['booked'],
        'cutoffDate': !exists(json, 'cutoffDate') ? undefined : (new Date(json['cutoffDate'])),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'overBooked': !exists(json, 'overBooked') ? undefined : json['overBooked'],
        'roomPool': !exists(json, 'roomPool') ? undefined : json['roomPool'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'salesAllowanceDate': !exists(json, 'salesAllowanceDate') ? undefined : (new Date(json['salesAllowanceDate'])),
    };
}

export function BlockSalesAllowanceTypeToJSON(value?: BlockSalesAllowanceType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowance': value.allowance,
        'booked': value.booked,
        'cutoffDate': value.cutoffDate === undefined ? undefined : (value.cutoffDate.toISOString().substr(0,10)),
        'hotelId': value.hotelId,
        'overBooked': value.overBooked,
        'roomPool': value.roomPool,
        'roomType': value.roomType,
        'salesAllowanceDate': value.salesAllowanceDate === undefined ? undefined : (value.salesAllowanceDate.toISOString().substr(0,10)),
    };
}

