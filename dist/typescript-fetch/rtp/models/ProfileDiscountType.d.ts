/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ProfileDiscountTypeDiscAmount } from './ProfileDiscountTypeDiscAmount';
import type { TimeSpanDaysOfWeekType } from './TimeSpanDaysOfWeekType';
/**
 * Discount details for a profile.
 * @export
 * @interface ProfileDiscountType
 */
export interface ProfileDiscountType {
    /**
     *
     * @type {TimeSpanDaysOfWeekType}
     * @memberof ProfileDiscountType
     */
    dateRangeDetails?: TimeSpanDaysOfWeekType;
    /**
     *
     * @type {ProfileDiscountTypeDiscAmount}
     * @memberof ProfileDiscountType
     */
    discAmount?: ProfileDiscountTypeDiscAmount;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof ProfileDiscountType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof ProfileDiscountType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof ProfileDiscountType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof ProfileDiscountType
     */
    instance?: string;
    /**
     * A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT).
     * @type {string}
     * @memberof ProfileDiscountType
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof ProfileDiscountType
     */
    url?: string;
}
/**
 * Check if a given object implements the ProfileDiscountType interface.
 */
export declare function instanceOfProfileDiscountType(value: object): boolean;
export declare function ProfileDiscountTypeFromJSON(json: any): ProfileDiscountType;
export declare function ProfileDiscountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileDiscountType;
export declare function ProfileDiscountTypeToJSON(value?: ProfileDiscountType | null): any;