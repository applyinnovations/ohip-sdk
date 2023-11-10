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
import type { ActivatePrepaidCardCriteria } from './ActivatePrepaidCardCriteria';
import type { WarningsType } from './WarningsType';
/**
 * Request type for activate prepaid card.
 * @export
 * @interface ActivatePrepaidCard
 */
export interface ActivatePrepaidCard {
    /**
     *
     * @type {ActivatePrepaidCardCriteria}
     * @memberof ActivatePrepaidCard
     */
    criteria?: ActivatePrepaidCardCriteria;
    /**
     *
     * @type {WarningsType}
     * @memberof ActivatePrepaidCard
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ActivatePrepaidCard interface.
 */
export declare function instanceOfActivatePrepaidCard(value: object): boolean;
export declare function ActivatePrepaidCardFromJSON(json: any): ActivatePrepaidCard;
export declare function ActivatePrepaidCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivatePrepaidCard;
export declare function ActivatePrepaidCardToJSON(value?: ActivatePrepaidCard | null): any;
