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
import type { DeferredTaxesCriteriaType } from './DeferredTaxesCriteriaType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request for submitting post deferred taxes for a reservation.
 * @export
 * @interface DeferredTaxesProcess
 */
export interface DeferredTaxesProcess {
    /**
     *
     * @type {DeferredTaxesCriteriaType}
     * @memberof DeferredTaxesProcess
     */
    criteria?: DeferredTaxesCriteriaType;
    /**
     *
     * @type {Links}
     * @memberof DeferredTaxesProcess
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof DeferredTaxesProcess
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the DeferredTaxesProcess interface.
 */
export declare function instanceOfDeferredTaxesProcess(value: object): boolean;
export declare function DeferredTaxesProcessFromJSON(json: any): DeferredTaxesProcess;
export declare function DeferredTaxesProcessFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeferredTaxesProcess;
export declare function DeferredTaxesProcessToJSON(value?: DeferredTaxesProcess | null): any;