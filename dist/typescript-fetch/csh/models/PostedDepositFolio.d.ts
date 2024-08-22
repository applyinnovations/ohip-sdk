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
import type { DepositPostingType } from './DepositPostingType';
import type { FolioWindowType } from './FolioWindowType';
import type { InstanceLink } from './InstanceLink';
import type { TrxInfoType } from './TrxInfoType';
import type { WarningType } from './WarningType';
/**
 * Response to the request to create a Deposit Folio for a reservation.
 * @export
 * @interface PostedDepositFolio
 */
export interface PostedDepositFolio {
    /**
     * A List of Deposit Payments.
     * @type {Array<DepositPostingType>}
     * @memberof PostedDepositFolio
     */
    deposits?: Array<DepositPostingType>;
    /**
     * Information regarding the new Deposit Folio created.
     * @type {Array<FolioWindowType>}
     * @memberof PostedDepositFolio
     */
    folioWindow?: Array<FolioWindowType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof PostedDepositFolio
     */
    links?: Array<InstanceLink>;
    /**
     * List of Transaction codes info.
     * @type {Array<TrxInfoType>}
     * @memberof PostedDepositFolio
     */
    trxCodesInfo?: Array<TrxInfoType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostedDepositFolio
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the PostedDepositFolio interface.
 */
export declare function instanceOfPostedDepositFolio(value: object): boolean;
export declare function PostedDepositFolioFromJSON(json: any): PostedDepositFolio;
export declare function PostedDepositFolioFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostedDepositFolio;
export declare function PostedDepositFolioToJSON(value?: PostedDepositFolio | null): any;
