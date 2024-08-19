/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Creation date time, Creator Id, last modification date time and last Modifier Id.
 * @export
 * @interface ChangeHistoryType
 */
export interface ChangeHistoryType {
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof ChangeHistoryType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof ChangeHistoryType
     */
    creatorId?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof ChangeHistoryType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof ChangeHistoryType
     */
    lastModifyDateTime?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof ChangeHistoryType
     */
    purgeDate?: string;
}
/**
 * Check if a given object implements the ChangeHistoryType interface.
 */
export declare function instanceOfChangeHistoryType(value: object): boolean;
export declare function ChangeHistoryTypeFromJSON(json: any): ChangeHistoryType;
export declare function ChangeHistoryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeHistoryType;
export declare function ChangeHistoryTypeToJSON(value?: ChangeHistoryType | null): any;
