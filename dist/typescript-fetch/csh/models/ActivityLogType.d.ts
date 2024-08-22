/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ActivityLogType
 */
export interface ActivityLogType {
    /**
     *
     * @type {string}
     * @memberof ActivityLogType
     */
    actionDescription?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityLogType
     */
    actionType?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityLogType
     */
    croCode?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityLogType
     */
    hotelId?: string;
    /**
     * The IP Address of the machine that performed the activity
     * @type {string}
     * @memberof ActivityLogType
     */
    iPAddress?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityLogType
     */
    logDate?: string;
    /**
     *
     * @type {number}
     * @memberof ActivityLogType
     */
    logUserId?: number;
    /**
     *
     * @type {string}
     * @memberof ActivityLogType
     */
    logUserName?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityLogType
     */
    machineStation?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityLogType
     */
    module?: string;
    /**
     *
     * @type {number}
     * @memberof ActivityLogType
     */
    refActionId?: number;
}
/**
 * Check if a given object implements the ActivityLogType interface.
 */
export declare function instanceOfActivityLogType(value: object): boolean;
export declare function ActivityLogTypeFromJSON(json: any): ActivityLogType;
export declare function ActivityLogTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityLogType;
export declare function ActivityLogTypeToJSON(value?: ActivityLogType | null): any;
