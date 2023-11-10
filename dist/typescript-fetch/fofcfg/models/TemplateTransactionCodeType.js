"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateTransactionCodeTypeToJSON = exports.TemplateTransactionCodeTypeFromJSONTyped = exports.TemplateTransactionCodeTypeFromJSON = exports.instanceOfTemplateTransactionCodeType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const ExportMappingLinkedCodeType_1 = require("./ExportMappingLinkedCodeType");
const GLMappingType_1 = require("./GLMappingType");
const GeneratesSetupType_1 = require("./GeneratesSetupType");
const PaymentTrxSetupType_1 = require("./PaymentTrxSetupType");
const TransactionAdjustmentType_1 = require("./TransactionAdjustmentType");
const TranslationTextType2000_1 = require("./TranslationTextType2000");
const TrxCodeAmountsType_1 = require("./TrxCodeAmountsType");
const TrxCodeClassificationType_1 = require("./TrxCodeClassificationType");
const TrxSetupType_1 = require("./TrxSetupType");
/**
 * Check if a given object implements the TemplateTransactionCodeType interface.
 */
function instanceOfTemplateTransactionCodeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTemplateTransactionCodeType = instanceOfTemplateTransactionCodeType;
function TemplateTransactionCodeTypeFromJSON(json) {
    return TemplateTransactionCodeTypeFromJSONTyped(json, false);
}
exports.TemplateTransactionCodeTypeFromJSON = TemplateTransactionCodeTypeFromJSON;
function TemplateTransactionCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'adjustmentCode': !(0, runtime_1.exists)(json, 'adjustmentCode') ? undefined : json['adjustmentCode'],
        'allowServiceRecovery': !(0, runtime_1.exists)(json, 'allowServiceRecovery') ? undefined : json['allowServiceRecovery'],
        'amounts': !(0, runtime_1.exists)(json, 'amounts') ? undefined : (0, TrxCodeAmountsType_1.TrxCodeAmountsTypeFromJSON)(json['amounts']),
        'associatedTransactionCodes': !(0, runtime_1.exists)(json, 'associatedTransactionCodes') ? undefined : (json['associatedTransactionCodes'].map(CodeDescriptionType_1.CodeDescriptionTypeFromJSON)),
        'classification': !(0, runtime_1.exists)(json, 'classification') ? undefined : (0, TrxCodeClassificationType_1.TrxCodeClassificationTypeFromJSON)(json['classification']),
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'compTransaction': !(0, runtime_1.exists)(json, 'compTransaction') ? undefined : json['compTransaction'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : (0, TranslationTextType2000_1.TranslationTextType2000FromJSON)(json['description']),
        'gLMapping': !(0, runtime_1.exists)(json, 'gLMapping') ? undefined : (0, GLMappingType_1.GLMappingTypeFromJSON)(json['gLMapping']),
        'generatesSetup': !(0, runtime_1.exists)(json, 'generatesSetup') ? undefined : (0, GeneratesSetupType_1.GeneratesSetupTypeFromJSON)(json['generatesSetup']),
        'mappingCodes': !(0, runtime_1.exists)(json, 'mappingCodes') ? undefined : (json['mappingCodes'].map(ExportMappingLinkedCodeType_1.ExportMappingLinkedCodeTypeFromJSON)),
        'paymentSetup': !(0, runtime_1.exists)(json, 'paymentSetup') ? undefined : (0, PaymentTrxSetupType_1.PaymentTrxSetupTypeFromJSON)(json['paymentSetup']),
        'serviceRecoveryAdjustmentCode': !(0, runtime_1.exists)(json, 'serviceRecoveryAdjustmentCode') ? undefined : json['serviceRecoveryAdjustmentCode'],
        'transactionAdjustments': !(0, runtime_1.exists)(json, 'transactionAdjustments') ? undefined : (json['transactionAdjustments'].map(TransactionAdjustmentType_1.TransactionAdjustmentTypeFromJSON)),
        'trxSetup': !(0, runtime_1.exists)(json, 'trxSetup') ? undefined : (0, TrxSetupType_1.TrxSetupTypeFromJSON)(json['trxSetup']),
        'universalProductCode': !(0, runtime_1.exists)(json, 'universalProductCode') ? undefined : json['universalProductCode'],
    };
}
exports.TemplateTransactionCodeTypeFromJSONTyped = TemplateTransactionCodeTypeFromJSONTyped;
function TemplateTransactionCodeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'adjustmentCode': value.adjustmentCode,
        'allowServiceRecovery': value.allowServiceRecovery,
        'amounts': (0, TrxCodeAmountsType_1.TrxCodeAmountsTypeToJSON)(value.amounts),
        'associatedTransactionCodes': value.associatedTransactionCodes === undefined ? undefined : (value.associatedTransactionCodes.map(CodeDescriptionType_1.CodeDescriptionTypeToJSON)),
        'classification': (0, TrxCodeClassificationType_1.TrxCodeClassificationTypeToJSON)(value.classification),
        'code': value.code,
        'compTransaction': value.compTransaction,
        'description': (0, TranslationTextType2000_1.TranslationTextType2000ToJSON)(value.description),
        'gLMapping': (0, GLMappingType_1.GLMappingTypeToJSON)(value.gLMapping),
        'generatesSetup': (0, GeneratesSetupType_1.GeneratesSetupTypeToJSON)(value.generatesSetup),
        'mappingCodes': value.mappingCodes === undefined ? undefined : (value.mappingCodes.map(ExportMappingLinkedCodeType_1.ExportMappingLinkedCodeTypeToJSON)),
        'paymentSetup': (0, PaymentTrxSetupType_1.PaymentTrxSetupTypeToJSON)(value.paymentSetup),
        'serviceRecoveryAdjustmentCode': value.serviceRecoveryAdjustmentCode,
        'transactionAdjustments': value.transactionAdjustments === undefined ? undefined : (value.transactionAdjustments.map(TransactionAdjustmentType_1.TransactionAdjustmentTypeToJSON)),
        'trxSetup': (0, TrxSetupType_1.TrxSetupTypeToJSON)(value.trxSetup),
        'universalProductCode': value.universalProductCode,
    };
}
exports.TemplateTransactionCodeTypeToJSON = TemplateTransactionCodeTypeToJSON;
