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
import type { OperaLockRecordType } from './OperaLockRecordType';
/**
 * This type contains information about a record lock.
 * @export
 * @interface OperaRecordLock
 */
export interface OperaRecordLock {
    /**
     * This is the user name of the current owner of the locked record.
     * @type {string}
     * @memberof OperaRecordLock
     */
    createdBy?: string;
    /**
     * This is the time when the record was locked.
     * @type {string}
     * @memberof OperaRecordLock
     */
    createdOn?: string;
    /**
     * This is the estimated expiry time of the lock.
     * @type {string}
     * @memberof OperaRecordLock
     */
    expiresOn?: string;
    /**
     * Notification flag to specify if the lock is based on an Internal Opera9 lock versus an External lock.
     * @type {boolean}
     * @memberof OperaRecordLock
     */
    internal?: boolean;
    /**
     * This is the identifier of the lock. This will be null when the requesting user does not own the lock.
     * @type {number}
     * @memberof OperaRecordLock
     */
    lockHandle?: number;
    /**
     * This is the id of the locked record.
     * @type {string}
     * @memberof OperaRecordLock
     */
    recordId?: string;
    /**
     *
     * @type {OperaLockRecordType}
     * @memberof OperaRecordLock
     */
    recordType?: OperaLockRecordType;
    /**
     * This is the validity of the lock in seconds.
     * @type {number}
     * @memberof OperaRecordLock
     */
    timeToLive?: number;
}
/**
 * Check if a given object implements the OperaRecordLock interface.
 */
export declare function instanceOfOperaRecordLock(value: object): boolean;
export declare function OperaRecordLockFromJSON(json: any): OperaRecordLock;
export declare function OperaRecordLockFromJSONTyped(json: any, ignoreDiscriminator: boolean): OperaRecordLock;
export declare function OperaRecordLockToJSON(value?: OperaRecordLock | null): any;
