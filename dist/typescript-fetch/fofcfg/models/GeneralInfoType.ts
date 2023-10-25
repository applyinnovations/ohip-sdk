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

import { exists, mapValues } from '../runtime';
import type { SVTransactionType } from './SVTransactionType';
import {
    SVTransactionTypeFromJSON,
    SVTransactionTypeFromJSONTyped,
    SVTransactionTypeToJSON,
} from './SVTransactionType';

/**
 * 
 * @export
 * @interface GeneralInfoType
 */
export interface GeneralInfoType {
    /**
     * Indicator for Default All Print Details On.
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    allPrintDetailOn?: boolean;
    /**
     * Allow CC cancel transactions of a Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    allowCCCancelTransaction?: boolean;
    /**
     * Indicator if video checkout is allowed or not.
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    allowVideoCheckout?: boolean;
    /**
     * Card present of a Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    cardPresentFlag?: boolean;
    /**
     * CC vault of a Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    ccVaultFunction?: boolean;
    /**
     * One of the video checkout options whether to check the balance.
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    checkBalance?: boolean;
    /**
     * One of the video checkout options whether to check the credit limit.
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    checkCreditLimit?: boolean;
    /**
     * One of the video checkout options whether to check the routing.
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    checkRouting?: boolean;
    /**
     * Courtesy card handling command of a Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    courtesyCardHandling?: boolean;
    /**
     * Create stored value during checkin of a Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    createSVCheckIn?: boolean;
    /**
     * Department code 1 of a the Hotel Interface
     * @type {string}
     * @memberof GeneralInfoType
     */
    departmentCode1?: string;
    /**
     * Department code 2 of a the Hotel Interface
     * @type {string}
     * @memberof GeneralInfoType
     */
    departmentCode2?: string;
    /**
     * Device of a the Hotel Interface
     * @type {string}
     * @memberof GeneralInfoType
     */
    device?: string;
    /**
     * Indicator if the phone name will be displayed.
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    displayPhoneName?: boolean;
    /**
     * Enable DB verification of a Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    enableDBVerification?: boolean;
    /**
     * Enable failover of a Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    enableFailover?: boolean;
    /**
     * Enable resend of a Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    enableResend?: boolean;
    /**
     * Folio display option of the Hotel Interface applicable to VID and MSC. "0" means folio display option off. "A" means a guest folio display option. "U" means user defined folio display option.
     * @type {string}
     * @memberof GeneralInfoType
     */
    folioDisplayOption?: string;
    /**
     * Handle night audit command of a Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    handleNightAudit?: boolean;
    /**
     * IP Address of a the Hotel Interface
     * @type {string}
     * @memberof GeneralInfoType
     */
    iPAddress?: string;
    /**
     * Indicator if the Key Pin is active or not.
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    keyPinActive?: boolean;
    /**
     * Logical port number 1 of a the Hotel Interface
     * @type {string}
     * @memberof GeneralInfoType
     */
    portNumber1?: string;
    /**
     * Logical port number 2 of a the Hotel Interface
     * @type {string}
     * @memberof GeneralInfoType
     */
    portNumber2?: string;
    /**
     * Logical port number 3 of a the Hotel Interface
     * @type {string}
     * @memberof GeneralInfoType
     */
    portNumber3?: string;
    /**
     * Logical port number 4 of a the Hotel Interface
     * @type {string}
     * @memberof GeneralInfoType
     */
    portNumber4?: string;
    /**
     * Used by the Interface module (IFC7.exe).
     * @type {number}
     * @memberof GeneralInfoType
     */
    prevWake?: number;
    /**
     * Regular transaction command of a Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    regularTransaction?: boolean;
    /**
     * Rollup transactions flag of the Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    rollupTransactions?: boolean;
    /**
     * Stored value reedeem transaction of a the Hotel Interface
     * @type {string}
     * @memberof GeneralInfoType
     */
    sVRedeemTrx?: string;
    /**
     * Send AR auth type of a Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    sendARAuthType?: boolean;
    /**
     * Send end of day of a Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    sendEndOfDay?: boolean;
    /**
     * Send enhanced fields of a Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    sendEnhancedFields?: boolean;
    /**
     * 
     * @type {SVTransactionType}
     * @memberof GeneralInfoType
     */
    showSVTransaction?: SVTransactionType;
    /**
     * Show stored value pin of a Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    showStoredValuePin?: boolean;
    /**
     * Stored value system of a Hotel Interface
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    storedValueSystem?: boolean;
    /**
     * Indicator if the User defined folio 1 is utilized.
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    userDefinedFolio1?: boolean;
    /**
     * Indicator if the User defined folio 2 is utilized.
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    userDefinedFolio2?: boolean;
    /**
     * Indicator if the User defined folio 3 is utilized.
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    userDefinedFolio3?: boolean;
    /**
     * Indicator if the User defined folio 4 is utilized.
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    userDefinedFolio4?: boolean;
    /**
     * Wakeup delay value of the Hotel Interface.
     * @type {number}
     * @memberof GeneralInfoType
     */
    wakeDelay?: number;
    /**
     * Wakeup retry limit of the Hotel Interface. Value range is 0 to 999.
     * @type {number}
     * @memberof GeneralInfoType
     */
    wakeRetry?: number;
    /**
     * Determines who handles the wakeup calls, either by Opera (0) or a Vendor (1).
     * @type {string}
     * @memberof GeneralInfoType
     */
    wakeupHandledBy?: string;
    /**
     * Indicator if the Hotel Interface handles wakeup calls.
     * @type {boolean}
     * @memberof GeneralInfoType
     */
    wakeupYn?: boolean;
}

/**
 * Check if a given object implements the GeneralInfoType interface.
 */
export function instanceOfGeneralInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GeneralInfoTypeFromJSON(json: any): GeneralInfoType {
    return GeneralInfoTypeFromJSONTyped(json, false);
}

export function GeneralInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneralInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allPrintDetailOn': !exists(json, 'allPrintDetailOn') ? undefined : json['allPrintDetailOn'],
        'allowCCCancelTransaction': !exists(json, 'allowCCCancelTransaction') ? undefined : json['allowCCCancelTransaction'],
        'allowVideoCheckout': !exists(json, 'allowVideoCheckout') ? undefined : json['allowVideoCheckout'],
        'cardPresentFlag': !exists(json, 'cardPresentFlag') ? undefined : json['cardPresentFlag'],
        'ccVaultFunction': !exists(json, 'ccVaultFunction') ? undefined : json['ccVaultFunction'],
        'checkBalance': !exists(json, 'checkBalance') ? undefined : json['checkBalance'],
        'checkCreditLimit': !exists(json, 'checkCreditLimit') ? undefined : json['checkCreditLimit'],
        'checkRouting': !exists(json, 'checkRouting') ? undefined : json['checkRouting'],
        'courtesyCardHandling': !exists(json, 'courtesyCardHandling') ? undefined : json['courtesyCardHandling'],
        'createSVCheckIn': !exists(json, 'createSVCheckIn') ? undefined : json['createSVCheckIn'],
        'departmentCode1': !exists(json, 'departmentCode1') ? undefined : json['departmentCode1'],
        'departmentCode2': !exists(json, 'departmentCode2') ? undefined : json['departmentCode2'],
        'device': !exists(json, 'device') ? undefined : json['device'],
        'displayPhoneName': !exists(json, 'displayPhoneName') ? undefined : json['displayPhoneName'],
        'enableDBVerification': !exists(json, 'enableDBVerification') ? undefined : json['enableDBVerification'],
        'enableFailover': !exists(json, 'enableFailover') ? undefined : json['enableFailover'],
        'enableResend': !exists(json, 'enableResend') ? undefined : json['enableResend'],
        'folioDisplayOption': !exists(json, 'folioDisplayOption') ? undefined : json['folioDisplayOption'],
        'handleNightAudit': !exists(json, 'handleNightAudit') ? undefined : json['handleNightAudit'],
        'iPAddress': !exists(json, 'iPAddress') ? undefined : json['iPAddress'],
        'keyPinActive': !exists(json, 'keyPinActive') ? undefined : json['keyPinActive'],
        'portNumber1': !exists(json, 'portNumber1') ? undefined : json['portNumber1'],
        'portNumber2': !exists(json, 'portNumber2') ? undefined : json['portNumber2'],
        'portNumber3': !exists(json, 'portNumber3') ? undefined : json['portNumber3'],
        'portNumber4': !exists(json, 'portNumber4') ? undefined : json['portNumber4'],
        'prevWake': !exists(json, 'prevWake') ? undefined : json['prevWake'],
        'regularTransaction': !exists(json, 'regularTransaction') ? undefined : json['regularTransaction'],
        'rollupTransactions': !exists(json, 'rollupTransactions') ? undefined : json['rollupTransactions'],
        'sVRedeemTrx': !exists(json, 'sVRedeemTrx') ? undefined : json['sVRedeemTrx'],
        'sendARAuthType': !exists(json, 'sendARAuthType') ? undefined : json['sendARAuthType'],
        'sendEndOfDay': !exists(json, 'sendEndOfDay') ? undefined : json['sendEndOfDay'],
        'sendEnhancedFields': !exists(json, 'sendEnhancedFields') ? undefined : json['sendEnhancedFields'],
        'showSVTransaction': !exists(json, 'showSVTransaction') ? undefined : SVTransactionTypeFromJSON(json['showSVTransaction']),
        'showStoredValuePin': !exists(json, 'showStoredValuePin') ? undefined : json['showStoredValuePin'],
        'storedValueSystem': !exists(json, 'storedValueSystem') ? undefined : json['storedValueSystem'],
        'userDefinedFolio1': !exists(json, 'userDefinedFolio1') ? undefined : json['userDefinedFolio1'],
        'userDefinedFolio2': !exists(json, 'userDefinedFolio2') ? undefined : json['userDefinedFolio2'],
        'userDefinedFolio3': !exists(json, 'userDefinedFolio3') ? undefined : json['userDefinedFolio3'],
        'userDefinedFolio4': !exists(json, 'userDefinedFolio4') ? undefined : json['userDefinedFolio4'],
        'wakeDelay': !exists(json, 'wakeDelay') ? undefined : json['wakeDelay'],
        'wakeRetry': !exists(json, 'wakeRetry') ? undefined : json['wakeRetry'],
        'wakeupHandledBy': !exists(json, 'wakeupHandledBy') ? undefined : json['wakeupHandledBy'],
        'wakeupYn': !exists(json, 'wakeupYn') ? undefined : json['wakeupYn'],
    };
}

export function GeneralInfoTypeToJSON(value?: GeneralInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allPrintDetailOn': value.allPrintDetailOn,
        'allowCCCancelTransaction': value.allowCCCancelTransaction,
        'allowVideoCheckout': value.allowVideoCheckout,
        'cardPresentFlag': value.cardPresentFlag,
        'ccVaultFunction': value.ccVaultFunction,
        'checkBalance': value.checkBalance,
        'checkCreditLimit': value.checkCreditLimit,
        'checkRouting': value.checkRouting,
        'courtesyCardHandling': value.courtesyCardHandling,
        'createSVCheckIn': value.createSVCheckIn,
        'departmentCode1': value.departmentCode1,
        'departmentCode2': value.departmentCode2,
        'device': value.device,
        'displayPhoneName': value.displayPhoneName,
        'enableDBVerification': value.enableDBVerification,
        'enableFailover': value.enableFailover,
        'enableResend': value.enableResend,
        'folioDisplayOption': value.folioDisplayOption,
        'handleNightAudit': value.handleNightAudit,
        'iPAddress': value.iPAddress,
        'keyPinActive': value.keyPinActive,
        'portNumber1': value.portNumber1,
        'portNumber2': value.portNumber2,
        'portNumber3': value.portNumber3,
        'portNumber4': value.portNumber4,
        'prevWake': value.prevWake,
        'regularTransaction': value.regularTransaction,
        'rollupTransactions': value.rollupTransactions,
        'sVRedeemTrx': value.sVRedeemTrx,
        'sendARAuthType': value.sendARAuthType,
        'sendEndOfDay': value.sendEndOfDay,
        'sendEnhancedFields': value.sendEnhancedFields,
        'showSVTransaction': SVTransactionTypeToJSON(value.showSVTransaction),
        'showStoredValuePin': value.showStoredValuePin,
        'storedValueSystem': value.storedValueSystem,
        'userDefinedFolio1': value.userDefinedFolio1,
        'userDefinedFolio2': value.userDefinedFolio2,
        'userDefinedFolio3': value.userDefinedFolio3,
        'userDefinedFolio4': value.userDefinedFolio4,
        'wakeDelay': value.wakeDelay,
        'wakeRetry': value.wakeRetry,
        'wakeupHandledBy': value.wakeupHandledBy,
        'wakeupYn': value.wakeupYn,
    };
}

