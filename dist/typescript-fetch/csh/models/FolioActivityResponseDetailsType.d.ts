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
 * Details of response for the Fiscal Folio Activity made.
 * @export
 * @interface FolioActivityResponseDetailsType
 */
export interface FolioActivityResponseDetailsType {
    /**
     * Business Date.
     * @type {string}
     * @memberof FolioActivityResponseDetailsType
     */
    businessDate?: string;
    /**
     * Number of fiscal response attempt made for the folio
     * @type {number}
     * @memberof FolioActivityResponseDetailsType
     */
    responseAttemptNo?: number;
    /**
     * Name of the response element.
     * @type {string}
     * @memberof FolioActivityResponseDetailsType
     */
    responseName?: string;
    /**
     * Type of the response, possible values: ERROR, WARNING, RESPONSE.
     * @type {string}
     * @memberof FolioActivityResponseDetailsType
     */
    responseType?: string;
    /**
     * Value of the response element.
     * @type {string}
     * @memberof FolioActivityResponseDetailsType
     */
    responseValue?: string;
}
/**
 * Check if a given object implements the FolioActivityResponseDetailsType interface.
 */
export declare function instanceOfFolioActivityResponseDetailsType(value: object): boolean;
export declare function FolioActivityResponseDetailsTypeFromJSON(json: any): FolioActivityResponseDetailsType;
export declare function FolioActivityResponseDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioActivityResponseDetailsType;
export declare function FolioActivityResponseDetailsTypeToJSON(value?: FolioActivityResponseDetailsType | null): any;
