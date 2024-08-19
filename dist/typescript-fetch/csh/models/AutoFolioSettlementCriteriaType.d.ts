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
 * @interface AutoFolioSettlementCriteriaType
 */
export interface AutoFolioSettlementCriteriaType {
    /**
     * Date since the last auto folio settlement.
     * @type {string}
     * @memberof AutoFolioSettlementCriteriaType
     */
    dateSinceLastAutoSettled?: string;
    /**
     * Days since the last auto folio settlement.
     * @type {number}
     * @memberof AutoFolioSettlementCriteriaType
     */
    daysSinceLastAutoSettled?: number;
    /**
     * Use the Number of Days For Settlement, defined for the Reservation.
     * @type {boolean}
     * @memberof AutoFolioSettlementCriteriaType
     */
    defaultDays?: boolean;
    /**
     * Comma-delimited list of Folio Settlement Type codes.
     * @type {string}
     * @memberof AutoFolioSettlementCriteriaType
     */
    folioSettlementTypes?: string;
}
/**
 * Check if a given object implements the AutoFolioSettlementCriteriaType interface.
 */
export declare function instanceOfAutoFolioSettlementCriteriaType(value: object): boolean;
export declare function AutoFolioSettlementCriteriaTypeFromJSON(json: any): AutoFolioSettlementCriteriaType;
export declare function AutoFolioSettlementCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoFolioSettlementCriteriaType;
export declare function AutoFolioSettlementCriteriaTypeToJSON(value?: AutoFolioSettlementCriteriaType | null): any;
