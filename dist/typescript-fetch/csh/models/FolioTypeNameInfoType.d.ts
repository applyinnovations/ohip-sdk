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
import type { UniqueIDType } from './UniqueIDType';
/**
 * Details of a Folio Type configuration.
 * @export
 * @interface FolioTypeNameInfoType
 */
export interface FolioTypeNameInfoType {
    /**
     * The Language Code for which the folio is effective.
     * @type {string}
     * @memberof FolioTypeNameInfoType
     */
    folioLanguageCode?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof FolioTypeNameInfoType
     */
    folioReportModuleId?: UniqueIDType;
    /**
     * The report name which should be used as the Folio for printing.
     * @type {string}
     * @memberof FolioTypeNameInfoType
     */
    folioReportName?: string;
    /**
     * The Folio Type.
     * @type {string}
     * @memberof FolioTypeNameInfoType
     */
    folioTypeName?: string;
    /**
     * Property where the Folio Type exists.
     * @type {string}
     * @memberof FolioTypeNameInfoType
     */
    hotelId?: string;
}
/**
 * Check if a given object implements the FolioTypeNameInfoType interface.
 */
export declare function instanceOfFolioTypeNameInfoType(value: object): boolean;
export declare function FolioTypeNameInfoTypeFromJSON(json: any): FolioTypeNameInfoType;
export declare function FolioTypeNameInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioTypeNameInfoType;
export declare function FolioTypeNameInfoTypeToJSON(value?: FolioTypeNameInfoType | null): any;
