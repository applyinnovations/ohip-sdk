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
import type { CheckoutReservationType } from './CheckoutReservationType';
import type { Links } from './Links';
import type { ResponseInstructionType } from './ResponseInstructionType';
import type { WarningsType } from './WarningsType';
/**
 * Request to apply any final charges or payments to a reservation prior to checkout. This operation should be called prior to the guest settlement which would then reflect the balance the guest has to pay.
 * @export
 * @interface FinalPostings
 */
export interface FinalPostings {
    /**
     *
     * @type {Links}
     * @memberof FinalPostings
     */
    links?: Links;
    /**
     *
     * @type {CheckoutReservationType}
     * @memberof FinalPostings
     */
    reservation?: CheckoutReservationType;
    /**
     *
     * @type {ResponseInstructionType}
     * @memberof FinalPostings
     */
    responseInstruction?: ResponseInstructionType;
    /**
     *
     * @type {WarningsType}
     * @memberof FinalPostings
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the FinalPostings interface.
 */
export declare function instanceOfFinalPostings(value: object): boolean;
export declare function FinalPostingsFromJSON(json: any): FinalPostings;
export declare function FinalPostingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinalPostings;
export declare function FinalPostingsToJSON(value?: FinalPostings | null): any;
