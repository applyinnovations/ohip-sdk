/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockCancellationTypeType } from './BlockCancellationTypeType';
import type { BlockStatusTypeType } from './BlockStatusTypeType';
import type { BookingStatusType } from './BookingStatusType';
/**
 * Booking Status details of the business block.
 * @export
 * @interface BookingStatusDetailType
 */
export interface BookingStatusDetailType {
    /**
     * Indicates if business blocks with this status will be allowed for pickup or not.
     * @type {boolean}
     * @memberof BookingStatusDetailType
     */
    allowPickup?: boolean;
    /**
     *
     * @type {BookingStatusType}
     * @memberof BookingStatusDetailType
     */
    bookingStatus?: BookingStatusType;
    /**
     *
     * @type {BlockCancellationTypeType}
     * @memberof BookingStatusDetailType
     */
    cancellationType?: BlockCancellationTypeType;
    /**
     * Indicates if catering event's spaces are deducted from inventory
     * @type {boolean}
     * @memberof BookingStatusDetailType
     */
    catDeductInventory?: boolean;
    /**
     *
     * @type {BlockStatusTypeType}
     * @memberof BookingStatusDetailType
     */
    catStatusType?: BlockStatusTypeType;
    /**
     * Indicates if blocked rooms are deducted from inventory.
     * @type {boolean}
     * @memberof BookingStatusDetailType
     */
    deductInventory?: boolean;
    /**
     * Default reservation type for the booking status.
     * @type {string}
     * @memberof BookingStatusDetailType
     */
    defaultReservationType?: string;
    /**
     * Parent status of the booking status, if one exists.
     * @type {string}
     * @memberof BookingStatusDetailType
     */
    parentBookingStatus?: string;
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
export declare function instanceOfBookingStatusDetailType(value: object): boolean;
export declare function BookingStatusDetailTypeFromJSON(json: any): BookingStatusDetailType;
export declare function BookingStatusDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookingStatusDetailType;
export declare function BookingStatusDetailTypeToJSON(value?: BookingStatusDetailType | null): any;
