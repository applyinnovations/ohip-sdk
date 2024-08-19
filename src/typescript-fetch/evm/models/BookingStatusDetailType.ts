/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockStatusTypeType } from './BlockStatusTypeType';
import {
    BlockStatusTypeTypeFromJSON,
    BlockStatusTypeTypeFromJSONTyped,
    BlockStatusTypeTypeToJSON,
} from './BlockStatusTypeType';
import type { BookingStatusType } from './BookingStatusType';
import {
    BookingStatusTypeFromJSON,
    BookingStatusTypeFromJSONTyped,
    BookingStatusTypeToJSON,
} from './BookingStatusType';

/**
 * Booking Status details of the business block.
 * @export
 * @interface BookingStatusDetailType
 */
export interface BookingStatusDetailType {
    /**
     * 
     * @type {BookingStatusType}
     * @memberof BookingStatusDetailType
     */
    bookingStatus?: BookingStatusType;
    /**
     * 
     * @type {BlockStatusTypeType}
     * @memberof BookingStatusDetailType
     */
    catStatusType?: BlockStatusTypeType;
    /**
     * Indicates if catering event's spaces are deducted from inventory
     * @type {boolean}
     * @memberof BookingStatusDetailType
     */
    cateringDeductInventory?: boolean;
    /**
     * Indicates if blocked rooms are deducted from inventory.
     * @type {boolean}
     * @memberof BookingStatusDetailType
     */
    deductInventory?: boolean;
    /**
     * Indicates if blocked rooms will be returned to availability or not.
     * @type {boolean}
     * @memberof BookingStatusDetailType
     */
    returnToInventory?: boolean;
    /**
     * 
     * @type {BlockStatusTypeType}
     * @memberof BookingStatusDetailType
     */
    statusType?: BlockStatusTypeType;
}

/**
 * Check if a given object implements the BookingStatusDetailType interface.
 */
export function instanceOfBookingStatusDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BookingStatusDetailTypeFromJSON(json: any): BookingStatusDetailType {
    return BookingStatusDetailTypeFromJSONTyped(json, false);
}

export function BookingStatusDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookingStatusDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingStatus': !exists(json, 'bookingStatus') ? undefined : BookingStatusTypeFromJSON(json['bookingStatus']),
        'catStatusType': !exists(json, 'catStatusType') ? undefined : BlockStatusTypeTypeFromJSON(json['catStatusType']),
        'cateringDeductInventory': !exists(json, 'cateringDeductInventory') ? undefined : json['cateringDeductInventory'],
        'deductInventory': !exists(json, 'deductInventory') ? undefined : json['deductInventory'],
        'returnToInventory': !exists(json, 'returnToInventory') ? undefined : json['returnToInventory'],
        'statusType': !exists(json, 'statusType') ? undefined : BlockStatusTypeTypeFromJSON(json['statusType']),
    };
}

export function BookingStatusDetailTypeToJSON(value?: BookingStatusDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingStatus': BookingStatusTypeToJSON(value.bookingStatus),
        'catStatusType': BlockStatusTypeTypeToJSON(value.catStatusType),
        'cateringDeductInventory': value.cateringDeductInventory,
        'deductInventory': value.deductInventory,
        'returnToInventory': value.returnToInventory,
        'statusType': BlockStatusTypeTypeToJSON(value.statusType),
    };
}

