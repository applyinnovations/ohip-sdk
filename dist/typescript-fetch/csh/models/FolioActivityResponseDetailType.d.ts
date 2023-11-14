/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FolioActivityResponseDetailsType } from './FolioActivityResponseDetailsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Fiscal Folio Activity Details Information
 * @export
 * @interface FolioActivityResponseDetailType
 */
export interface FolioActivityResponseDetailType {
    /**
     * Details of response for the Fiscal Folio Activity made.
     * @type {Array<FolioActivityResponseDetailsType>}
     * @memberof FolioActivityResponseDetailType
     */
    folioActivityResponseDetailsInfo?: Array<FolioActivityResponseDetailsType>;
    /**
     *
     * @type {Links}
     * @memberof FolioActivityResponseDetailType
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof FolioActivityResponseDetailType
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the FolioActivityResponseDetailType interface.
 */
export declare function instanceOfFolioActivityResponseDetailType(value: object): boolean;
export declare function FolioActivityResponseDetailTypeFromJSON(json: any): FolioActivityResponseDetailType;
export declare function FolioActivityResponseDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioActivityResponseDetailType;
export declare function FolioActivityResponseDetailTypeToJSON(value?: FolioActivityResponseDetailType | null): any;