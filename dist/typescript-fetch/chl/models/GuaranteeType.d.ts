/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { GuaranteeRequirementsType } from './GuaranteeRequirementsType';
import type { PaymentTypesType } from './PaymentTypesType';
import type { TranslationTextType80 } from './TranslationTextType80';
/**
 * Specifies Guarantee Code attributes.
 * @export
 * @interface GuaranteeType
 */
export interface GuaranteeType {
    /**
     * Description of the Guarantee Code.
     * @type {string}
     * @memberof GuaranteeType
     */
    description?: string;
    /**
     * Code assigned to the Guarantee.
     * @type {string}
     * @memberof GuaranteeType
     */
    guaranteeCode?: string;
    /**
     * Represents the late arrival time.
     * @type {string}
     * @memberof GuaranteeType
     */
    lateArrival?: string;
    /**
     * If true indicates this Guarantee Code is used only to hold the inventory during reservation process.
     * @type {boolean}
     * @memberof GuaranteeType
     */
    onHold?: boolean;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof GuaranteeType
     */
    orderSequence?: number;
    /**
     *
     * @type {PaymentTypesType}
     * @memberof GuaranteeType
     */
    paymentTypes?: PaymentTypesType;
    /**
     *
     * @type {GuaranteeRequirementsType}
     * @memberof GuaranteeType
     */
    requirements?: GuaranteeRequirementsType;
    /**
     * If true indicates inventory will be reserved/deducted when reservation uses this Guarantee Code.
     * @type {boolean}
     * @memberof GuaranteeType
     */
    reserveInventory?: boolean;
    /**
     *
     * @type {TranslationTextType80}
     * @memberof GuaranteeType
     */
    shortDescription?: TranslationTextType80;
}
/**
 * Check if a given object implements the GuaranteeType interface.
 */
export declare function instanceOfGuaranteeType(value: object): boolean;
export declare function GuaranteeTypeFromJSON(json: any): GuaranteeType;
export declare function GuaranteeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuaranteeType;
export declare function GuaranteeTypeToJSON(value?: GuaranteeType | null): any;
