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
import type { FixedChargeDetailType } from './FixedChargeDetailType';
import type { FixedChargeScheduleType } from './FixedChargeScheduleType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * The traces on the AR Account.
 * @export
 * @interface ARAccountFixedChargeCriteriaType
 */
export interface ARAccountFixedChargeCriteriaType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof ARAccountFixedChargeCriteriaType
     */
    accountId?: UniqueIDType;
    /**
     *
     * @type {FixedChargeDetailType}
     * @memberof ARAccountFixedChargeCriteriaType
     */
    charge?: FixedChargeDetailType;
    /**
     * The resort where the AR Account exists.
     * @type {string}
     * @memberof ARAccountFixedChargeCriteriaType
     */
    hotelId?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof ARAccountFixedChargeCriteriaType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof ARAccountFixedChargeCriteriaType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof ARAccountFixedChargeCriteriaType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof ARAccountFixedChargeCriteriaType
     */
    instance?: string;
    /**
     *
     * @type {FixedChargeScheduleType}
     * @memberof ARAccountFixedChargeCriteriaType
     */
    schedule?: FixedChargeScheduleType;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof ARAccountFixedChargeCriteriaType
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof ARAccountFixedChargeCriteriaType
     */
    url?: string;
}
/**
 * Check if a given object implements the ARAccountFixedChargeCriteriaType interface.
 */
export declare function instanceOfARAccountFixedChargeCriteriaType(value: object): boolean;
export declare function ARAccountFixedChargeCriteriaTypeFromJSON(json: any): ARAccountFixedChargeCriteriaType;
export declare function ARAccountFixedChargeCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARAccountFixedChargeCriteriaType;
export declare function ARAccountFixedChargeCriteriaTypeToJSON(value?: ARAccountFixedChargeCriteriaType | null): any;
