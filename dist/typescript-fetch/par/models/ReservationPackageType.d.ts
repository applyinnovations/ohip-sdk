/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { PackageCodeHeaderType } from './PackageCodeHeaderType';
import type { PackageConsumptionType } from './PackageConsumptionType';
import type { ProductSourceType } from './ProductSourceType';
import type { ReservationPackageScheduleType } from './ReservationPackageScheduleType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * A ReservationPackageType class.
 * @export
 * @interface ReservationPackageType
 */
export interface ReservationPackageType {
    /**
     * This is the Award code used to redeem the package if the package is a redemption package.
     * @type {string}
     * @memberof ReservationPackageType
     */
    awardCode?: string;
    /**
     *
     * @type {PackageConsumptionType}
     * @memberof ReservationPackageType
     */
    consumptionDetails?: PackageConsumptionType;
    /**
     * Required value when changing a reservation package. If the original end date was null, then null is required.
     * @type {Date}
     * @memberof ReservationPackageType
     */
    endDate?: Date;
    /**
     * Reservation Package Opera Internal Unique Id. This is the unique Id used for this reservation package.
     * @type {number}
     * @memberof ReservationPackageType
     */
    internalID?: number;
    /**
     *
     * @type {TimeSpanType}
     * @memberof ReservationPackageType
     */
    newTimeSpan?: TimeSpanType;
    /**
     * Package code. This is the unique code used for the package and is a required element.
     * @type {string}
     * @memberof ReservationPackageType
     */
    packageCode?: string;
    /**
     * Package group code. If this package is part of a package group, the group code is indicated here. This is a required element and is part of the key to fetch the correct package record .
     * @type {string}
     * @memberof ReservationPackageType
     */
    packageGroup?: string;
    /**
     *
     * @type {PackageCodeHeaderType}
     * @memberof ReservationPackageType
     */
    packageHeaderType?: PackageCodeHeaderType;
    /**
     * Indicates the points used to redeem the redemption package.
     * @type {number}
     * @memberof ReservationPackageType
     */
    points?: number;
    /**
     * The rate code which contains this package. If the package is not part of a rate code, this will be empty. Required element and part of the key to fetch the correct package record on the reservation.
     * @type {string}
     * @memberof ReservationPackageType
     */
    ratePlanCode?: string;
    /**
     * A HotelPackageSchedule type.
     * @type {Array<ReservationPackageScheduleType>}
     * @memberof ReservationPackageType
     */
    scheduleList?: Array<ReservationPackageScheduleType>;
    /**
     *
     * @type {ProductSourceType}
     * @memberof ReservationPackageType
     */
    source?: ProductSourceType;
    /**
     * Required value when changing a reservation package. If the original start date was null, then null is required.
     * @type {Date}
     * @memberof ReservationPackageType
     */
    startDate?: Date;
}
/**
 * Check if a given object implements the ReservationPackageType interface.
 */
export declare function instanceOfReservationPackageType(value: object): boolean;
export declare function ReservationPackageTypeFromJSON(json: any): ReservationPackageType;
export declare function ReservationPackageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationPackageType;
export declare function ReservationPackageTypeToJSON(value?: ReservationPackageType | null): any;
