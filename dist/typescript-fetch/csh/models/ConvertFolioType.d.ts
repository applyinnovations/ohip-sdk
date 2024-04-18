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
 * Criteria for Converting Folio.
 * @export
 * @interface ConvertFolioType
 */
export interface ConvertFolioType {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof ConvertFolioType
     */
    cashierId?: number;
    /**
     * Date of folio generation.
     * @type {string}
     * @memberof ConvertFolioType
     */
    folioDate?: string;
    /**
     * Folio number of the Folio which is going to be converted.
     * @type {number}
     * @memberof ConvertFolioType
     */
    folioNo?: number;
    /**
     * Folio Type of the folio(Example: Ricevuta, Fattura).
     * @type {string}
     * @memberof ConvertFolioType
     */
    folioTypeName?: string;
    /**
     * Hotel code where this folio was generated at.
     * @type {string}
     * @memberof ConvertFolioType
     */
    hotelId?: string;
}
/**
 * Check if a given object implements the ConvertFolioType interface.
 */
export declare function instanceOfConvertFolioType(value: object): boolean;
export declare function ConvertFolioTypeFromJSON(json: any): ConvertFolioType;
export declare function ConvertFolioTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConvertFolioType;
export declare function ConvertFolioTypeToJSON(value?: ConvertFolioType | null): any;