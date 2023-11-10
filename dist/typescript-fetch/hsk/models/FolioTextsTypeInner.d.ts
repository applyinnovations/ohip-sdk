/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface FolioTextsTypeInner
 */
export interface FolioTextsTypeInner {
    /**
     * Row number of the additional text.
     * @type {number}
     * @memberof FolioTextsTypeInner
     */
    row?: number;
    /**
     * Additional text field to display on the folio.
     * @type {string}
     * @memberof FolioTextsTypeInner
     */
    text?: string;
}
/**
 * Check if a given object implements the FolioTextsTypeInner interface.
 */
export declare function instanceOfFolioTextsTypeInner(value: object): boolean;
export declare function FolioTextsTypeInnerFromJSON(json: any): FolioTextsTypeInner;
export declare function FolioTextsTypeInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioTextsTypeInner;
export declare function FolioTextsTypeInnerToJSON(value?: FolioTextsTypeInner | null): any;
