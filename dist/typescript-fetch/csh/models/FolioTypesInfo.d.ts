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
import type { FolioTypesInfoType } from './FolioTypesInfoType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Information regarding the Folio Types.
 * @export
 * @interface FolioTypesInfo
 */
export interface FolioTypesInfo {
    /**
     *
     * @type {Array<FolioTypesInfoType>}
     * @memberof FolioTypesInfo
     */
    folioInfo?: Array<FolioTypesInfoType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof FolioTypesInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FolioTypesInfo
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the FolioTypesInfo interface.
 */
export declare function instanceOfFolioTypesInfo(value: object): boolean;
export declare function FolioTypesInfoFromJSON(json: any): FolioTypesInfo;
export declare function FolioTypesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioTypesInfo;
export declare function FolioTypesInfoToJSON(value?: FolioTypesInfo | null): any;
