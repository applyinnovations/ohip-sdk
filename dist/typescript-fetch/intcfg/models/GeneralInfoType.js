"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralInfoTypeToJSON = exports.GeneralInfoTypeFromJSONTyped = exports.GeneralInfoTypeFromJSON = exports.instanceOfGeneralInfoType = void 0;
const runtime_1 = require("../runtime");
const SVTransactionType_1 = require("./SVTransactionType");
/**
 * Check if a given object implements the GeneralInfoType interface.
 */
function instanceOfGeneralInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGeneralInfoType = instanceOfGeneralInfoType;
function GeneralInfoTypeFromJSON(json) {
    return GeneralInfoTypeFromJSONTyped(json, false);
}
exports.GeneralInfoTypeFromJSON = GeneralInfoTypeFromJSON;
function GeneralInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'createSVCheckIn': !(0, runtime_1.exists)(json, 'createSVCheckIn') ? undefined : json['createSVCheckIn'],
        'enableFailover': !(0, runtime_1.exists)(json, 'enableFailover') ? undefined : json['enableFailover'],
        'ccVaultFunction': !(0, runtime_1.exists)(json, 'ccVaultFunction') ? undefined : json['ccVaultFunction'],
        'enableResend': !(0, runtime_1.exists)(json, 'enableResend') ? undefined : json['enableResend'],
        'sendARAuthType': !(0, runtime_1.exists)(json, 'sendARAuthType') ? undefined : json['sendARAuthType'],
        'enableDBVerification': !(0, runtime_1.exists)(json, 'enableDBVerification') ? undefined : json['enableDBVerification'],
        'allowCCCancelTransaction': !(0, runtime_1.exists)(json, 'allowCCCancelTransaction') ? undefined : json['allowCCCancelTransaction'],
        'showStoredValuePin': !(0, runtime_1.exists)(json, 'showStoredValuePin') ? undefined : json['showStoredValuePin'],
        'showSVTransaction': !(0, runtime_1.exists)(json, 'showSVTransaction') ? undefined : (0, SVTransactionType_1.SVTransactionTypeFromJSON)(json['showSVTransaction']),
        'storedValueSystem': !(0, runtime_1.exists)(json, 'storedValueSystem') ? undefined : json['storedValueSystem'],
        'sendEnhancedFields': !(0, runtime_1.exists)(json, 'sendEnhancedFields') ? undefined : json['sendEnhancedFields'],
        'cardPresentFlag': !(0, runtime_1.exists)(json, 'cardPresentFlag') ? undefined : json['cardPresentFlag'],
        'handleNightAudit': !(0, runtime_1.exists)(json, 'handleNightAudit') ? undefined : json['handleNightAudit'],
        'regularTransaction': !(0, runtime_1.exists)(json, 'regularTransaction') ? undefined : json['regularTransaction'],
        'courtesyCardHandling': !(0, runtime_1.exists)(json, 'courtesyCardHandling') ? undefined : json['courtesyCardHandling'],
        'sendEndOfDay': !(0, runtime_1.exists)(json, 'sendEndOfDay') ? undefined : json['sendEndOfDay'],
        'portNumber1': !(0, runtime_1.exists)(json, 'portNumber1') ? undefined : json['portNumber1'],
        'portNumber2': !(0, runtime_1.exists)(json, 'portNumber2') ? undefined : json['portNumber2'],
        'portNumber3': !(0, runtime_1.exists)(json, 'portNumber3') ? undefined : json['portNumber3'],
        'portNumber4': !(0, runtime_1.exists)(json, 'portNumber4') ? undefined : json['portNumber4'],
        'iPAddress': !(0, runtime_1.exists)(json, 'iPAddress') ? undefined : json['iPAddress'],
        'sVRedeemTrx': !(0, runtime_1.exists)(json, 'sVRedeemTrx') ? undefined : json['sVRedeemTrx'],
        'device': !(0, runtime_1.exists)(json, 'device') ? undefined : json['device'],
        'departmentCode1': !(0, runtime_1.exists)(json, 'departmentCode1') ? undefined : json['departmentCode1'],
        'departmentCode2': !(0, runtime_1.exists)(json, 'departmentCode2') ? undefined : json['departmentCode2'],
        'rollupTransactions': !(0, runtime_1.exists)(json, 'rollupTransactions') ? undefined : json['rollupTransactions'],
        'allowVideoCheckout': !(0, runtime_1.exists)(json, 'allowVideoCheckout') ? undefined : json['allowVideoCheckout'],
        'checkCreditLimit': !(0, runtime_1.exists)(json, 'checkCreditLimit') ? undefined : json['checkCreditLimit'],
        'checkBalance': !(0, runtime_1.exists)(json, 'checkBalance') ? undefined : json['checkBalance'],
        'checkRouting': !(0, runtime_1.exists)(json, 'checkRouting') ? undefined : json['checkRouting'],
        'wakeupYn': !(0, runtime_1.exists)(json, 'wakeupYn') ? undefined : json['wakeupYn'],
        'wakeupHandledBy': !(0, runtime_1.exists)(json, 'wakeupHandledBy') ? undefined : json['wakeupHandledBy'],
        'wakeRetry': !(0, runtime_1.exists)(json, 'wakeRetry') ? undefined : json['wakeRetry'],
        'wakeDelay': !(0, runtime_1.exists)(json, 'wakeDelay') ? undefined : json['wakeDelay'],
        'prevWake': !(0, runtime_1.exists)(json, 'prevWake') ? undefined : json['prevWake'],
        'folioDisplayOption': !(0, runtime_1.exists)(json, 'folioDisplayOption') ? undefined : json['folioDisplayOption'],
        'userDefinedFolio1': !(0, runtime_1.exists)(json, 'userDefinedFolio1') ? undefined : json['userDefinedFolio1'],
        'userDefinedFolio2': !(0, runtime_1.exists)(json, 'userDefinedFolio2') ? undefined : json['userDefinedFolio2'],
        'userDefinedFolio3': !(0, runtime_1.exists)(json, 'userDefinedFolio3') ? undefined : json['userDefinedFolio3'],
        'userDefinedFolio4': !(0, runtime_1.exists)(json, 'userDefinedFolio4') ? undefined : json['userDefinedFolio4'],
        'displayPhoneName': !(0, runtime_1.exists)(json, 'displayPhoneName') ? undefined : json['displayPhoneName'],
        'keyPinActive': !(0, runtime_1.exists)(json, 'keyPinActive') ? undefined : json['keyPinActive'],
        'allPrintDetailOn': !(0, runtime_1.exists)(json, 'allPrintDetailOn') ? undefined : json['allPrintDetailOn'],
    };
}
exports.GeneralInfoTypeFromJSONTyped = GeneralInfoTypeFromJSONTyped;
function GeneralInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'createSVCheckIn': value.createSVCheckIn,
        'enableFailover': value.enableFailover,
        'ccVaultFunction': value.ccVaultFunction,
        'enableResend': value.enableResend,
        'sendARAuthType': value.sendARAuthType,
        'enableDBVerification': value.enableDBVerification,
        'allowCCCancelTransaction': value.allowCCCancelTransaction,
        'showStoredValuePin': value.showStoredValuePin,
        'showSVTransaction': (0, SVTransactionType_1.SVTransactionTypeToJSON)(value.showSVTransaction),
        'storedValueSystem': value.storedValueSystem,
        'sendEnhancedFields': value.sendEnhancedFields,
        'cardPresentFlag': value.cardPresentFlag,
        'handleNightAudit': value.handleNightAudit,
        'regularTransaction': value.regularTransaction,
        'courtesyCardHandling': value.courtesyCardHandling,
        'sendEndOfDay': value.sendEndOfDay,
        'portNumber1': value.portNumber1,
        'portNumber2': value.portNumber2,
        'portNumber3': value.portNumber3,
        'portNumber4': value.portNumber4,
        'iPAddress': value.iPAddress,
        'sVRedeemTrx': value.sVRedeemTrx,
        'device': value.device,
        'departmentCode1': value.departmentCode1,
        'departmentCode2': value.departmentCode2,
        'rollupTransactions': value.rollupTransactions,
        'allowVideoCheckout': value.allowVideoCheckout,
        'checkCreditLimit': value.checkCreditLimit,
        'checkBalance': value.checkBalance,
        'checkRouting': value.checkRouting,
        'wakeupYn': value.wakeupYn,
        'wakeupHandledBy': value.wakeupHandledBy,
        'wakeRetry': value.wakeRetry,
        'wakeDelay': value.wakeDelay,
        'prevWake': value.prevWake,
        'folioDisplayOption': value.folioDisplayOption,
        'userDefinedFolio1': value.userDefinedFolio1,
        'userDefinedFolio2': value.userDefinedFolio2,
        'userDefinedFolio3': value.userDefinedFolio3,
        'userDefinedFolio4': value.userDefinedFolio4,
        'displayPhoneName': value.displayPhoneName,
        'keyPinActive': value.keyPinActive,
        'allPrintDetailOn': value.allPrintDetailOn,
    };
}
exports.GeneralInfoTypeToJSON = GeneralInfoTypeToJSON;
