/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ConditionGroupType } from './ConditionGroupType';
import type { NotificationType } from './NotificationType';
/**
 * A property level global alert attached with global alert types.
 * @export
 * @interface GlobalAlertType
 */
export interface GlobalAlertType {
    /**
     *
     * @type {string}
     * @memberof GlobalAlertType
     */
    alertCode?: string;
    /**
     *
     * @type {number}
     * @memberof GlobalAlertType
     */
    alertId?: number;
    /**
     *
     * @type {string}
     * @memberof GlobalAlertType
     */
    area?: string;
    /**
     *
     * @type {ConditionGroupType}
     * @memberof GlobalAlertType
     */
    conditions?: ConditionGroupType;
    /**
     *
     * @type {string}
     * @memberof GlobalAlertType
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof GlobalAlertType
     */
    hotelId?: string;
    /**
     *
     * @type {NotificationType}
     * @memberof GlobalAlertType
     */
    notifications?: NotificationType;
    /**
     *
     * @type {number}
     * @memberof GlobalAlertType
     */
    queryId?: number;
    /**
     * Indicates the Reservation Stop Check In/Check Out Global Alert.
     * @type {boolean}
     * @memberof GlobalAlertType
     */
    stopCheckInCheckOut?: boolean;
    /**
     * Determines the Global Alert is a Welcome Offer Alert or not.
     * @type {boolean}
     * @memberof GlobalAlertType
     */
    welcomeOffer?: boolean;
}
/**
 * Check if a given object implements the GlobalAlertType interface.
 */
export declare function instanceOfGlobalAlertType(value: object): boolean;
export declare function GlobalAlertTypeFromJSON(json: any): GlobalAlertType;
export declare function GlobalAlertTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalAlertType;
export declare function GlobalAlertTypeToJSON(value?: GlobalAlertType | null): any;
