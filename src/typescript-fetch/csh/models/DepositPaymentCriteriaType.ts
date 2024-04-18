/* tslint:disable */
/* eslint-disable */
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
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';
import type { ReceiptType } from './ReceiptType';
import {
    ReceiptTypeFromJSON,
    ReceiptTypeFromJSONTyped,
    ReceiptTypeToJSON,
} from './ReceiptType';
import type { RedemptionType } from './RedemptionType';
import {
    RedemptionTypeFromJSON,
    RedemptionTypeFromJSONTyped,
    RedemptionTypeToJSON,
} from './RedemptionType';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Criteria for posting a deposit payment to a reservation.
 * @export
 * @interface DepositPaymentCriteriaType
 */
export interface DepositPaymentCriteriaType {
    /**
     * 
     * @type {PostPaymentActionType}
     * @memberof DepositPaymentCriteriaType
     */
    action?: PostPaymentActionType;
    /**
     * Flag to indicate if Credit Card Surcharge has to be applied to this payment, when the functionality for Credit Card Surcharge is available.
     * @type {boolean}
     * @memberof DepositPaymentCriteriaType
     */
    applyCCSurcharge?: boolean;
    /**
     * Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest.
     * @type {boolean}
     * @memberof DepositPaymentCriteriaType
     */
    applyCurrencyTaxes?: boolean;
    /**
     * Transaction number of the payment being deposited.
     * @type {number}
     * @memberof DepositPaymentCriteriaType
     */
    associatedTrxNo?: number;
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof DepositPaymentCriteriaType
     */
    cashierId?: number;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof DepositPaymentCriteriaType
     */
    changeDueAmount?: CurrencyAmountType;
    /**
     * User Defined Comments. Used for Deposit Payment postings.
     * @type {string}
     * @memberof DepositPaymentCriteriaType
     */
    comments?: string;
    /**
     * Information regarding Complimentary Bucket Redemption object.
     * @type {Array<RedemptionType>}
     * @memberof DepositPaymentCriteriaType
     */
    compRedemptions?: Array<RedemptionType>;
    /**
     * Payment Tax record.
     * @type {Array<PaymentTaxType>}
     * @memberof DepositPaymentCriteriaType
     */
    creditablePaymentTaxes?: Array<PaymentTaxType>;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof DepositPaymentCriteriaType
     */
    depositPolicyId?: UniqueIDType;
    /**
     * 
     * @type {number}
     * @memberof DepositPaymentCriteriaType
     */
    folioWindowNo?: number;
    /**
     * New guarantee code associated with reservation.
     * @type {string}
     * @memberof DepositPaymentCriteriaType
     */
    guaranteeCode?: string;
    /**
     * Property code.
     * @type {string}
     * @memberof DepositPaymentCriteriaType
     */
    hotelId?: string;
    /**
     * 
     * @type {PaymentTaxType}
     * @memberof DepositPaymentCriteriaType
     */
    manualPaymentTaxInfo?: PaymentTaxType;
    /**
     * Flag to override account receivable credit limit
     * @type {boolean}
     * @memberof DepositPaymentCriteriaType
     */
    overrideARCreditLimit?: boolean;
    /**
     * Flag to allow a rebate by Credit Card
     * @type {boolean}
     * @memberof DepositPaymentCriteriaType
     */
    overrideInsufficientCC?: boolean;
    /**
     * Flag to indicate if the Inventory check has to be overridden when the guarantee code of the reservation is changed.
     * @type {boolean}
     * @memberof DepositPaymentCriteriaType
     */
    overrideInventoryCheck?: boolean;
    /**
     * 
     * @type {CashieringPaymentMethodType}
     * @memberof DepositPaymentCriteriaType
     */
    paymentMethod?: CashieringPaymentMethodType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof DepositPaymentCriteriaType
     */
    postingAmount?: CurrencyAmountType;
    /**
     * User-defined posting reference.
     * @type {string}
     * @memberof DepositPaymentCriteriaType
     */
    postingReference?: string;
    /**
     * User-defined posting remark.
     * @type {string}
     * @memberof DepositPaymentCriteriaType
     */
    postingRemark?: string;
    /**
     * A prepaid redemption info object to be used for posting a payment.
     * @type {Array<PrepaidCardRedemptionType>}
     * @memberof DepositPaymentCriteriaType
     */
    prepaidCardRedemptions?: Array<PrepaidCardRedemptionType>;
    /**
     * 
     * @type {ProfileId}
     * @memberof DepositPaymentCriteriaType
     */
    profileId?: ProfileId;
    /**
     * 
     * @type {ReceiptType}
     * @memberof DepositPaymentCriteriaType
     */
    receiptType?: ReceiptType;
    /**
     * 
     * @type {ReservationId}
     * @memberof DepositPaymentCriteriaType
     */
    reservationId?: ReservationId;
    /**
     * Applicable for chip and pin. The ID of the terminal where the chip and pin device is connected and where the payment is made.
     * @type {string}
     * @memberof DepositPaymentCriteriaType
     */
    terminalId?: string;
    /**
     * Flag to indicate if the payment method on the reservation, for Window 1, is to be updated with the payment method used for this deposit.
     * @type {boolean}
     * @memberof DepositPaymentCriteriaType
     */
    updateReservationPaymentMethod?: boolean;
    /**
     * Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest.
     * @type {boolean}
     * @memberof DepositPaymentCriteriaType
     */
    vATOffset?: boolean;
}

/**
 * Check if a given object implements the DepositPaymentCriteriaType interface.
 */
export function instanceOfDepositPaymentCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DepositPaymentCriteriaTypeFromJSON(json: any): DepositPaymentCriteriaType {
    return DepositPaymentCriteriaTypeFromJSONTyped(json, false);
}

export function DepositPaymentCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositPaymentCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : PostPaymentActionTypeFromJSON(json['action']),
        'applyCCSurcharge': !exists(json, 'applyCCSurcharge') ? undefined : json['applyCCSurcharge'],
        'applyCurrencyTaxes': !exists(json, 'applyCurrencyTaxes') ? undefined : json['applyCurrencyTaxes'],
        'associatedTrxNo': !exists(json, 'associatedTrxNo') ? undefined : json['associatedTrxNo'],
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'changeDueAmount': !exists(json, 'changeDueAmount') ? undefined : CurrencyAmountTypeFromJSON(json['changeDueAmount']),
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'compRedemptions': !exists(json, 'compRedemptions') ? undefined : ((json['compRedemptions'] as Array<any>).map(RedemptionTypeFromJSON)),
        'creditablePaymentTaxes': !exists(json, 'creditablePaymentTaxes') ? undefined : ((json['creditablePaymentTaxes'] as Array<any>).map(PaymentTaxTypeFromJSON)),
        'depositPolicyId': !exists(json, 'depositPolicyId') ? undefined : UniqueIDTypeFromJSON(json['depositPolicyId']),
        'folioWindowNo': !exists(json, 'folioWindowNo') ? undefined : json['folioWindowNo'],
        'guaranteeCode': !exists(json, 'guaranteeCode') ? undefined : json['guaranteeCode'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'manualPaymentTaxInfo': !exists(json, 'manualPaymentTaxInfo') ? undefined : PaymentTaxTypeFromJSON(json['manualPaymentTaxInfo']),
        'overrideARCreditLimit': !exists(json, 'overrideARCreditLimit') ? undefined : json['overrideARCreditLimit'],
        'overrideInsufficientCC': !exists(json, 'overrideInsufficientCC') ? undefined : json['overrideInsufficientCC'],
        'overrideInventoryCheck': !exists(json, 'overrideInventoryCheck') ? undefined : json['overrideInventoryCheck'],
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : CashieringPaymentMethodTypeFromJSON(json['paymentMethod']),
        'postingAmount': !exists(json, 'postingAmount') ? undefined : CurrencyAmountTypeFromJSON(json['postingAmount']),
        'postingReference': !exists(json, 'postingReference') ? undefined : json['postingReference'],
        'postingRemark': !exists(json, 'postingRemark') ? undefined : json['postingRemark'],
        'prepaidCardRedemptions': !exists(json, 'prepaidCardRedemptions') ? undefined : ((json['prepaidCardRedemptions'] as Array<any>).map(PrepaidCardRedemptionTypeFromJSON)),
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'receiptType': !exists(json, 'receiptType') ? undefined : ReceiptTypeFromJSON(json['receiptType']),
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'terminalId': !exists(json, 'terminalId') ? undefined : json['terminalId'],
        'updateReservationPaymentMethod': !exists(json, 'updateReservationPaymentMethod') ? undefined : json['updateReservationPaymentMethod'],
        'vATOffset': !exists(json, 'vATOffset') ? undefined : json['vATOffset'],
    };
}

export function DepositPaymentCriteriaTypeToJSON(value?: DepositPaymentCriteriaType | null): any {
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
        'associatedTrxNo': value.associatedTrxNo,
        'cashierId': value.cashierId,
        'changeDueAmount': CurrencyAmountTypeToJSON(value.changeDueAmount),
        'comments': value.comments,
        'compRedemptions': value.compRedemptions === undefined ? undefined : ((value.compRedemptions as Array<any>).map(RedemptionTypeToJSON)),
        'creditablePaymentTaxes': value.creditablePaymentTaxes === undefined ? undefined : ((value.creditablePaymentTaxes as Array<any>).map(PaymentTaxTypeToJSON)),
        'depositPolicyId': UniqueIDTypeToJSON(value.depositPolicyId),
        'folioWindowNo': value.folioWindowNo,
        'guaranteeCode': value.guaranteeCode,
        'hotelId': value.hotelId,
        'manualPaymentTaxInfo': PaymentTaxTypeToJSON(value.manualPaymentTaxInfo),
        'overrideARCreditLimit': value.overrideARCreditLimit,
        'overrideInsufficientCC': value.overrideInsufficientCC,
        'overrideInventoryCheck': value.overrideInventoryCheck,
        'paymentMethod': CashieringPaymentMethodTypeToJSON(value.paymentMethod),
        'postingAmount': CurrencyAmountTypeToJSON(value.postingAmount),
        'postingReference': value.postingReference,
        'postingRemark': value.postingRemark,
        'prepaidCardRedemptions': value.prepaidCardRedemptions === undefined ? undefined : ((value.prepaidCardRedemptions as Array<any>).map(PrepaidCardRedemptionTypeToJSON)),
        'profileId': ProfileIdToJSON(value.profileId),
        'receiptType': ReceiptTypeToJSON(value.receiptType),
        'reservationId': ReservationIdToJSON(value.reservationId),
        'terminalId': value.terminalId,
        'updateReservationPaymentMethod': value.updateReservationPaymentMethod,
        'vATOffset': value.vATOffset,
    };
}
