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
import type { FolioWindowType } from './FolioWindowType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response to the request for voiding a Guest Folio.
 * @export
 * @interface VoidedFolio
 */
export interface VoidedFolio {
    /**
     *
     * @type {FolioWindowType}
     * @memberof VoidedFolio
     */
    fiscalCreditBillFolio?: FolioWindowType;
    /**
     *
     * @type {Links}
     * @memberof VoidedFolio
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof VoidedFolio
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the VoidedFolio interface.
 */
export declare function instanceOfVoidedFolio(value: object): boolean;
export declare function VoidedFolioFromJSON(json: any): VoidedFolio;
export declare function VoidedFolioFromJSONTyped(json: any, ignoreDiscriminator: boolean): VoidedFolio;
export declare function VoidedFolioToJSON(value?: VoidedFolio | null): any;