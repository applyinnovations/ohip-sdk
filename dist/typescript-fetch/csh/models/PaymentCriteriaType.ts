/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { CashieringPaymentMethodType } from './CashieringPaymentMethodType';
import {
    CashieringPaymentMethodTypeFromJSON,
    CashieringPaymentMethodTypeFromJSONTyped,
    CashieringPaymentMethodTypeToJSON,
} from './CashieringPaymentMethodType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { PaymentTaxType } from './PaymentTaxType';
import {
    PaymentTaxTypeFromJSON,
    PaymentTaxTypeFromJSONTyped,
    PaymentTaxTypeToJSON,
} from './PaymentTaxType';
import type { PostPaymentActionType } from './PostPaymentActionType';
import {
    PostPaymentActionTypeFromJSON,
    PostPaymentActionTypeFromJSONTyped,
    PostPaymentActionTypeToJSON,
} from './PostPaymentActionType';
import type { PrepaidCardRedemptionType } from './PrepaidCardRedemptionType';
import {
    PrepaidCardRedemptionTypeFromJSON,
    PrepaidCardRedemptionTypeFromJSONTyped,
    PrepaidCardRedemptionTypeToJSON,
} from './PrepaidCardRedemptionType';
import type { RedemptionType } from './RedemptionType';
import {
    RedemptionTypeFromJSON,
    RedemptionTypeFromJSONTyped,
    RedemptionTypeToJSON,
} from './RedemptionType';

/**
 * 
 * @export
 * @interface PaymentCriteriaType
 */
export interface PaymentCriteriaType {
    /**
     * 
     * @type {PostPaymentActionType}
     * @memberof PaymentCriteriaType
     */
    action?: PostPaymentActionType;
    /**
     * Flag to indicate if Credit Card Surcharge has to be applied to this payment, when the functionality for Credit Card Surcharge is available.
     * @type {boolean}
     * @memberof PaymentCriteriaType
     */
    applyCCSurcharge?: boolean;
    /**
     * Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest.
     * @type {boolean}
     * @memberof PaymentCriteriaType
     */
    applyCurrencyTaxes?: boolean;
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof PaymentCriteriaType
     */
    cashierId?: number;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PaymentCriteriaType
     */
    changeDueAmount?: CurrencyAmountType;
    /**
     * User Defined Comments. Used for Deposit Payment postings.
     * @type {string}
     * @memberof PaymentCriteriaType
     */
    comments?: string;
    /**
     * Information regarding Complimentary Bucket Redemption object.
     * @type {Array<RedemptionType>}
     * @memberof PaymentCriteriaType
     */
    compRedemptions?: Array<RedemptionType>;
    /**
     * Payment Tax record.
     * @type {Array<PaymentTaxType>}
     * @memberof PaymentCriteriaType
     */
    creditablePaymentTaxes?: Array<PaymentTaxType>;
    /**
     * 
     * @type {number}
     * @memberof PaymentCriteriaType
     */
    folioWindowNo?: number;
    /**
     * Property code.
     * @type {string}
     * @memberof PaymentCriteriaType
     */
    hotelId?: string;
    /**
     * 
     * @type {PaymentTaxType}
     * @memberof PaymentCriteriaType
     */
    manualPaymentTaxInfo?: PaymentTaxType;
    /**
     * Flag to override account receivable credit limit
     * @type {boolean}
     * @memberof PaymentCriteriaType
     */
    overrideARCreditLimit?: boolean;
    /**
     * Flag to allow a rebate by Credit Card
     * @type {boolean}
     * @memberof PaymentCriteriaType
     */
    overrideInsufficientCC?: boolean;
    /**
     * 
     * @type {CashieringPaymentMethodType}
     * @memberof PaymentCriteriaType
     */
    paymentMethod?: CashieringPaymentMethodType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PaymentCriteriaType
     */
    postingAmount?: CurrencyAmountType;
    /**
     * User-defined posting reference.
     * @type {string}
     * @memberof PaymentCriteriaType
     */
    postingReference?: string;
    /**
     * User-defined posting remark.
     * @type {string}
     * @memberof PaymentCriteriaType
     */
    postingRemark?: string;
    /**
     * A prepaid redemption info object to be used for posting a payment.
     * @type {Array<PrepaidCardRedemptionType>}
     * @memberof PaymentCriteriaType
     */
    prepaidCardRedemptions?: Array<PrepaidCardRedemptionType>;
    /**
     * Applicable for chip and pin. The ID of the terminal where the chip and pin device is connected and where the payment is made.
     * @type {string}
     * @memberof PaymentCriteriaType
     */
    terminalId?: string;
    /**
     * Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest.
     * @type {boolean}
     * @memberof PaymentCriteriaType
     */
    vATOffset?: boolean;
}

/**
 * Check if a given object implements the PaymentCriteriaType interface.
 */
export function instanceOfPaymentCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaymentCriteriaTypeFromJSON(json: any): PaymentCriteriaType {
    return PaymentCriteriaTypeFromJSONTyped(json, false);
}

export function PaymentCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : PostPaymentActionTypeFromJSON(json['action']),
        'applyCCSurcharge': !exists(json, 'applyCCSurcharge') ? undefined : json['applyCCSurcharge'],
        'applyCurrencyTaxes': !exists(json, 'applyCurrencyTaxes') ? undefined : json['applyCurrencyTaxes'],
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'changeDueAmount': !exists(json, 'changeDueAmount') ? undefined : CurrencyAmountTypeFromJSON(json['changeDueAmount']),
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'compRedemptions': !exists(json, 'compRedemptions') ? undefined : ((json['compRedemptions'] as Array<any>).map(RedemptionTypeFromJSON)),
        'creditablePaymentTaxes': !exists(json, 'creditablePaymentTaxes') ? undefined : ((json['creditablePaymentTaxes'] as Array<any>).map(PaymentTaxTypeFromJSON)),
        'folioWindowNo': !exists(json, 'folioWindowNo') ? undefined : json['folioWindowNo'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'manualPaymentTaxInfo': !exists(json, 'manualPaymentTaxInfo') ? undefined : PaymentTaxTypeFromJSON(json['manualPaymentTaxInfo']),
        'overrideARCreditLimit': !exists(json, 'overrideARCreditLimit') ? undefined : json['overrideARCreditLimit'],
        'overrideInsufficientCC': !exists(json, 'overrideInsufficientCC') ? undefined : json['overrideInsufficientCC'],
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : CashieringPaymentMethodTypeFromJSON(json['paymentMethod']),
        'postingAmount': !exists(json, 'postingAmount') ? undefined : CurrencyAmountTypeFromJSON(json['postingAmount']),
        'postingReference': !exists(json, 'postingReference') ? undefined : json['postingReference'],
        'postingRemark': !exists(json, 'postingRemark') ? undefined : json['postingRemark'],
        'prepaidCardRedemptions': !exists(json, 'prepaidCardRedemptions') ? undefined : ((json['prepaidCardRedemptions'] as Array<any>).map(PrepaidCardRedemptionTypeFromJSON)),
        'terminalId': !exists(json, 'terminalId') ? undefined : json['terminalId'],
        'vATOffset': !exists(json, 'vATOffset') ? undefined : json['vATOffset'],
    };
}

export function PaymentCriteriaTypeToJSON(value?: PaymentCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': PostPaymentActionTypeToJSON(value.action),
        'applyCCSurcharge': value.applyCCSurcharge,
        'applyCurrencyTaxes': value.applyCurrencyTaxes,
        'cashierId': value.cashierId,
        'changeDueAmount': CurrencyAmountTypeToJSON(value.changeDueAmount),
        'comments': value.comments,
        'compRedemptions': value.compRedemptions === undefined ? undefined : ((value.compRedemptions as Array<any>).map(RedemptionTypeToJSON)),
        'creditablePaymentTaxes': value.creditablePaymentTaxes === undefined ? undefined : ((value.creditablePaymentTaxes as Array<any>).map(PaymentTaxTypeToJSON)),
        'folioWindowNo': value.folioWindowNo,
        'hotelId': value.hotelId,
        'manualPaymentTaxInfo': PaymentTaxTypeToJSON(value.manualPaymentTaxInfo),
        'overrideARCreditLimit': value.overrideARCreditLimit,
        'overrideInsufficientCC': value.overrideInsufficientCC,
        'paymentMethod': CashieringPaymentMethodTypeToJSON(value.paymentMethod),
        'postingAmount': CurrencyAmountTypeToJSON(value.postingAmount),
        'postingReference': value.postingReference,
        'postingRemark': value.postingRemark,
        'prepaidCardRedemptions': value.prepaidCardRedemptions === undefined ? undefined : ((value.prepaidCardRedemptions as Array<any>).map(PrepaidCardRedemptionTypeToJSON)),
        'terminalId': value.terminalId,
        'vATOffset': value.vATOffset,
    };
}

