/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { ExportMappingLinkedCodeType } from './ExportMappingLinkedCodeType';
import {
    ExportMappingLinkedCodeTypeFromJSON,
    ExportMappingLinkedCodeTypeFromJSONTyped,
    ExportMappingLinkedCodeTypeToJSON,
} from './ExportMappingLinkedCodeType';
import type { GLMappingType } from './GLMappingType';
import {
    GLMappingTypeFromJSON,
    GLMappingTypeFromJSONTyped,
    GLMappingTypeToJSON,
} from './GLMappingType';
import type { GeneratesSetupType } from './GeneratesSetupType';
import {
    GeneratesSetupTypeFromJSON,
    GeneratesSetupTypeFromJSONTyped,
    GeneratesSetupTypeToJSON,
} from './GeneratesSetupType';
import type { PaymentTrxSetupType } from './PaymentTrxSetupType';
import {
    PaymentTrxSetupTypeFromJSON,
    PaymentTrxSetupTypeFromJSONTyped,
    PaymentTrxSetupTypeToJSON,
} from './PaymentTrxSetupType';
import type { TransactionAdjustmentType } from './TransactionAdjustmentType';
import {
    TransactionAdjustmentTypeFromJSON,
    TransactionAdjustmentTypeFromJSONTyped,
    TransactionAdjustmentTypeToJSON,
} from './TransactionAdjustmentType';
import type { TranslationTextType2000 } from './TranslationTextType2000';
import {
    TranslationTextType2000FromJSON,
    TranslationTextType2000FromJSONTyped,
    TranslationTextType2000ToJSON,
} from './TranslationTextType2000';
import type { TrxCodeAmountsType } from './TrxCodeAmountsType';
import {
    TrxCodeAmountsTypeFromJSON,
    TrxCodeAmountsTypeFromJSONTyped,
    TrxCodeAmountsTypeToJSON,
} from './TrxCodeAmountsType';
import type { TrxCodeClassificationType } from './TrxCodeClassificationType';
import {
    TrxCodeClassificationTypeFromJSON,
    TrxCodeClassificationTypeFromJSONTyped,
    TrxCodeClassificationTypeToJSON,
} from './TrxCodeClassificationType';
import type { TrxSetupType } from './TrxSetupType';
import {
    TrxSetupTypeFromJSON,
    TrxSetupTypeFromJSONTyped,
    TrxSetupTypeToJSON,
} from './TrxSetupType';

/**
 * Transaction Code configuration details.
 * @export
 * @interface HotelTransactionCodeType
 */
export interface HotelTransactionCodeType {
    /**
     * Transaction code to be used to make adjustments on the posting made using this transaction code.
     * @type {string}
     * @memberof HotelTransactionCodeType
     */
    adjustmentCode?: string;
    /**
     * Flag to identify if this transaction code already used as service recovery adjustment code.
     * @type {boolean}
     * @memberof HotelTransactionCodeType
     */
    allowServiceRecovery?: boolean;
    /**
     * 
     * @type {TrxCodeAmountsType}
     * @memberof HotelTransactionCodeType
     */
    amounts?: TrxCodeAmountsType;
    /**
     * Code and description of the standard transaction code associated to this comp transaction code.
     * @type {Array<CodeDescriptionType>}
     * @memberof HotelTransactionCodeType
     */
    associatedTransactionCodes?: Array<CodeDescriptionType>;
    /**
     * 
     * @type {TrxCodeClassificationType}
     * @memberof HotelTransactionCodeType
     */
    classification?: TrxCodeClassificationType;
    /**
     * Unique Transaction Code.
     * @type {string}
     * @memberof HotelTransactionCodeType
     */
    code?: string;
    /**
     * If true indicates this transaction codes is for Comp Accounting.
     * @type {boolean}
     * @memberof HotelTransactionCodeType
     */
    compTransaction?: boolean;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof HotelTransactionCodeType
     */
    description?: TranslationTextType2000;
    /**
     * 
     * @type {GLMappingType}
     * @memberof HotelTransactionCodeType
     */
    gLMapping?: GLMappingType;
    /**
     * 
     * @type {GeneratesSetupType}
     * @memberof HotelTransactionCodeType
     */
    generatesSetup?: GeneratesSetupType;
    /**
     * Hotel's Transaction Code configuration detail.
     * @type {string}
     * @memberof HotelTransactionCodeType
     */
    hotelId?: string;
    /**
     * Mapping code and value attached to Transaction Code.
     * @type {Array<ExportMappingLinkedCodeType>}
     * @memberof HotelTransactionCodeType
     */
    mappingCodes?: Array<ExportMappingLinkedCodeType>;
    /**
     * 
     * @type {PaymentTrxSetupType}
     * @memberof HotelTransactionCodeType
     */
    paymentSetup?: PaymentTrxSetupType;
    /**
     * 
     * @type {boolean}
     * @memberof HotelTransactionCodeType
     */
    printTrxReceipt?: boolean;
    /**
     * Transaction code to be used to make service recovery adjustments on the posting made using this transaction code.
     * @type {string}
     * @memberof HotelTransactionCodeType
     */
    serviceRecoveryAdjustmentCode?: string;
    /**
     * Combination of Adjustment Reason Code and Transaction Adjustment Code.
     * @type {Array<TransactionAdjustmentType>}
     * @memberof HotelTransactionCodeType
     */
    transactionAdjustments?: Array<TransactionAdjustmentType>;
    /**
     * 
     * @type {TrxSetupType}
     * @memberof HotelTransactionCodeType
     */
    trxSetup?: TrxSetupType;
    /**
     * Unique Universal product code of the article.
     * @type {string}
     * @memberof HotelTransactionCodeType
     */
    universalProductCode?: string;
}

/**
 * Check if a given object implements the HotelTransactionCodeType interface.
 */
export function instanceOfHotelTransactionCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelTransactionCodeTypeFromJSON(json: any): HotelTransactionCodeType {
    return HotelTransactionCodeTypeFromJSONTyped(json, false);
}

export function HotelTransactionCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelTransactionCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adjustmentCode': !exists(json, 'adjustmentCode') ? undefined : json['adjustmentCode'],
        'allowServiceRecovery': !exists(json, 'allowServiceRecovery') ? undefined : json['allowServiceRecovery'],
        'amounts': !exists(json, 'amounts') ? undefined : TrxCodeAmountsTypeFromJSON(json['amounts']),
        'associatedTransactionCodes': !exists(json, 'associatedTransactionCodes') ? undefined : ((json['associatedTransactionCodes'] as Array<any>).map(CodeDescriptionTypeFromJSON)),
        'classification': !exists(json, 'classification') ? undefined : TrxCodeClassificationTypeFromJSON(json['classification']),
        'code': !exists(json, 'code') ? undefined : json['code'],
        'compTransaction': !exists(json, 'compTransaction') ? undefined : json['compTransaction'],
        'description': !exists(json, 'description') ? undefined : TranslationTextType2000FromJSON(json['description']),
        'gLMapping': !exists(json, 'gLMapping') ? undefined : GLMappingTypeFromJSON(json['gLMapping']),
        'generatesSetup': !exists(json, 'generatesSetup') ? undefined : GeneratesSetupTypeFromJSON(json['generatesSetup']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'mappingCodes': !exists(json, 'mappingCodes') ? undefined : ((json['mappingCodes'] as Array<any>).map(ExportMappingLinkedCodeTypeFromJSON)),
        'paymentSetup': !exists(json, 'paymentSetup') ? undefined : PaymentTrxSetupTypeFromJSON(json['paymentSetup']),
        'printTrxReceipt': !exists(json, 'printTrxReceipt') ? undefined : json['printTrxReceipt'],
        'serviceRecoveryAdjustmentCode': !exists(json, 'serviceRecoveryAdjustmentCode') ? undefined : json['serviceRecoveryAdjustmentCode'],
        'transactionAdjustments': !exists(json, 'transactionAdjustments') ? undefined : ((json['transactionAdjustments'] as Array<any>).map(TransactionAdjustmentTypeFromJSON)),
        'trxSetup': !exists(json, 'trxSetup') ? undefined : TrxSetupTypeFromJSON(json['trxSetup']),
        'universalProductCode': !exists(json, 'universalProductCode') ? undefined : json['universalProductCode'],
    };
}

export function HotelTransactionCodeTypeToJSON(value?: HotelTransactionCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adjustmentCode': value.adjustmentCode,
        'allowServiceRecovery': value.allowServiceRecovery,
        'amounts': TrxCodeAmountsTypeToJSON(value.amounts),
        'associatedTransactionCodes': value.associatedTransactionCodes === undefined ? undefined : ((value.associatedTransactionCodes as Array<any>).map(CodeDescriptionTypeToJSON)),
        'classification': TrxCodeClassificationTypeToJSON(value.classification),
        'code': value.code,
        'compTransaction': value.compTransaction,
        'description': TranslationTextType2000ToJSON(value.description),
        'gLMapping': GLMappingTypeToJSON(value.gLMapping),
        'generatesSetup': GeneratesSetupTypeToJSON(value.generatesSetup),
        'hotelId': value.hotelId,
        'mappingCodes': value.mappingCodes === undefined ? undefined : ((value.mappingCodes as Array<any>).map(ExportMappingLinkedCodeTypeToJSON)),
        'paymentSetup': PaymentTrxSetupTypeToJSON(value.paymentSetup),
        'printTrxReceipt': value.printTrxReceipt,
        'serviceRecoveryAdjustmentCode': value.serviceRecoveryAdjustmentCode,
        'transactionAdjustments': value.transactionAdjustments === undefined ? undefined : ((value.transactionAdjustments as Array<any>).map(TransactionAdjustmentTypeToJSON)),
        'trxSetup': TrxSetupTypeToJSON(value.trxSetup),
        'universalProductCode': value.universalProductCode,
    };
}

