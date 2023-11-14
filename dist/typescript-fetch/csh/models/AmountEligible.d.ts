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
import type { AwardFolioInfo } from './AwardFolioInfo';
/**
 * List of eligible bill amounts for each folio.
 * @export
 * @interface AmountEligible
 */
export interface AmountEligible {
    /**
     * Retrieves eligible amount details in order to post redemption on a reservation folio <p><strong>OperationId:</strong> getEligibleBillAmount</p>
     * @type {Array<AwardFolioInfo>}
     * @memberof AmountEligible
     */
    amountEligibleInfo?: Array<AwardFolioInfo>;
}
/**
 * Check if a given object implements the AmountEligible interface.
 */
export declare function instanceOfAmountEligible(value: object): boolean;
export declare function AmountEligibleFromJSON(json: any): AmountEligible;
export declare function AmountEligibleFromJSONTyped(json: any, ignoreDiscriminator: boolean): AmountEligible;
export declare function AmountEligibleToJSON(value?: AmountEligible | null): any;