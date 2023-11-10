/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { GuaranteePolicyTypeCancelPenalty } from './GuaranteePolicyTypeCancelPenalty';
import type { GuaranteePolicyTypeDepositPolicy } from './GuaranteePolicyTypeDepositPolicy';
import type { GuaranteeRequirementsType } from './GuaranteeRequirementsType';
import type { PaymentTypesType } from './PaymentTypesType';
import type { TranslationTextType80 } from './TranslationTextType80';
import type { WarningsType } from './WarningsType';
/**
 * Specifies Guarantee Code attributes.
 * @export
 * @interface GuaranteePolicyType
 */
export interface GuaranteePolicyType {
    /**
     *
     * @type {GuaranteePolicyTypeCancelPenalty}
     * @memberof GuaranteePolicyType
     */
    cancelPenalty?: GuaranteePolicyTypeCancelPenalty;
    /**
     * If true indicates this can be the default guarantee type to be selected for a reservation.
     * @type {boolean}
     * @memberof GuaranteePolicyType
     */
    defaultGuarantee?: boolean;
    /**
     *
     * @type {GuaranteePolicyTypeDepositPolicy}
     * @memberof GuaranteePolicyType
     */
    depositPolicy?: GuaranteePolicyTypeDepositPolicy;
    /**
     * Description of the Guarantee Code.
     * @type {string}
     * @memberof GuaranteePolicyType
     */
    description?: string;
    /**
     * Code assigned to the Guarantee.
     * @type {string}
     * @memberof GuaranteePolicyType
     */
    guaranteeCode?: string;
    /**
     * Represents the late arrival time.
     * @type {string}
     * @memberof GuaranteePolicyType
     */
    lateArrival?: string;
    /**
     * If true indicates this Guarantee Code is used only to hold the inventory during reservation process.
     * @type {boolean}
     * @memberof GuaranteePolicyType
     */
    onHold?: boolean;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof GuaranteePolicyType
     */
    orderSequence?: number;
    /**
     *
     * @type {PaymentTypesType}
     * @memberof GuaranteePolicyType
     */
    paymentTypes?: PaymentTypesType;
    /**
     *
     * @type {GuaranteeRequirementsType}
     * @memberof GuaranteePolicyType
     */
    policyRequirements?: GuaranteeRequirementsType;
    /**
     * If true indicates inventory will be reserved/deducted when reservation uses this Guarantee Code.
     * @type {boolean}
     * @memberof GuaranteePolicyType
     */
    reserveInventory?: boolean;
    /**
     *
     * @type {TranslationTextType80}
     * @memberof GuaranteePolicyType
     */
    shortDescription?: TranslationTextType80;
    /**
     *
     * @type {WarningsType}
     * @memberof GuaranteePolicyType
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the GuaranteePolicyType interface.
 */
export declare function instanceOfGuaranteePolicyType(value: object): boolean;
export declare function GuaranteePolicyTypeFromJSON(json: any): GuaranteePolicyType;
export declare function GuaranteePolicyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuaranteePolicyType;
export declare function GuaranteePolicyTypeToJSON(value?: GuaranteePolicyType | null): any;
