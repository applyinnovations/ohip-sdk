/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ReservationId } from './ReservationId';
import type { TraceResolveType } from './TraceResolveType';
import type { TraceTimeInfoType } from './TraceTimeInfoType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * The traces on the AR Account.
 * @export
 * @interface ARAccountTraceCriteriaType
 */
export interface ARAccountTraceCriteriaType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof ARAccountTraceCriteriaType
     */
    accountId?: UniqueIDType;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof ARAccountTraceCriteriaType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof ARAccountTraceCriteriaType
     */
    creatorId?: string;
    /**
     * Indicates the Department code.
     * @type {string}
     * @memberof ARAccountTraceCriteriaType
     */
    departmentId?: string;
    /**
     * The resort where the AR Account exists.
     * @type {string}
     * @memberof ARAccountTraceCriteriaType
     */
    hotelId?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof ARAccountTraceCriteriaType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof ARAccountTraceCriteriaType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof ARAccountTraceCriteriaType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof ARAccountTraceCriteriaType
     */
    instance?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof ARAccountTraceCriteriaType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof ARAccountTraceCriteriaType
     */
    lastModifyDateTime?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {Date}
     * @memberof ARAccountTraceCriteriaType
     */
    purgeDate?: Date;
    /**
     *
     * @type {ReservationId}
     * @memberof ARAccountTraceCriteriaType
     */
    reservationId?: ReservationId;
    /**
     *
     * @type {TraceResolveType}
     * @memberof ARAccountTraceCriteriaType
     */
    resolveInfo?: TraceResolveType;
    /**
     *
     * @type {TraceTimeInfoType}
     * @memberof ARAccountTraceCriteriaType
     */
    timeInfo?: TraceTimeInfoType;
    /**
     * The information this trace contains.
     * @type {string}
     * @memberof ARAccountTraceCriteriaType
     */
    traceText?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof ARAccountTraceCriteriaType
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof ARAccountTraceCriteriaType
     */
    url?: string;
}
/**
 * Check if a given object implements the ARAccountTraceCriteriaType interface.
 */
export declare function instanceOfARAccountTraceCriteriaType(value: object): boolean;
export declare function ARAccountTraceCriteriaTypeFromJSON(json: any): ARAccountTraceCriteriaType;
export declare function ARAccountTraceCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARAccountTraceCriteriaType;
export declare function ARAccountTraceCriteriaTypeToJSON(value?: ARAccountTraceCriteriaType | null): any;
