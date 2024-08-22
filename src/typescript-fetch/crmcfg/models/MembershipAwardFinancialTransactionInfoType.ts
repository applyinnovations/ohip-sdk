/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Information related to Other Award.
 * @export
 * @interface MembershipAwardFinancialTransactionInfoType
 */
export interface MembershipAwardFinancialTransactionInfoType {
    /**
     * Points required to avail/redeem this award.
     * @type {number}
     * @memberof MembershipAwardFinancialTransactionInfoType
     */
    pointsRequired?: number;
    /**
     * The actual value of the award, in the amount of currency.
     * @type {number}
     * @memberof MembershipAwardFinancialTransactionInfoType
     */
    awardValue?: number;
    /**
     * Message for Other awards.
     * @type {string}
     * @memberof MembershipAwardFinancialTransactionInfoType
     */
    messageLine1?: string;
    /**
     * Message for Other awards.
     * @type {string}
     * @memberof MembershipAwardFinancialTransactionInfoType
     */
    messageLine2?: string;
    /**
     * Message for Other awards.
     * @type {string}
     * @memberof MembershipAwardFinancialTransactionInfoType
     */
    messageLine3?: string;
    /**
     * Message for Other awards.
     * @type {string}
     * @memberof MembershipAwardFinancialTransactionInfoType
     */
    messageLine4?: string;
    /**
     * Display set for other type of awards for export purpose.
     * @type {string}
     * @memberof MembershipAwardFinancialTransactionInfoType
     */
    displaySet?: string;
    /**
     * Exchange rate type to be used.
     * @type {string}
     * @memberof MembershipAwardFinancialTransactionInfoType
     */
    exchangeRate?: string;
    /**
     * Max percent of total value to be allowed to convert money to points.
     * @type {number}
     * @memberof MembershipAwardFinancialTransactionInfoType
     */
    maxPercentAllowed?: number;
    /**
     * Ignore Financial transactions in OPERA or not? If true, Financial transaction is not required in OPERA while giving award as it may be recorded in some external system and only points accounting is done in OCIS.
     * @type {boolean}
     * @memberof MembershipAwardFinancialTransactionInfoType
     */
    ignoreFinancialTransaction?: boolean;
}

/**
 * Check if a given object implements the MembershipAwardFinancialTransactionInfoType interface.
 */
export function instanceOfMembershipAwardFinancialTransactionInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipAwardFinancialTransactionInfoTypeFromJSON(json: any): MembershipAwardFinancialTransactionInfoType {
    return MembershipAwardFinancialTransactionInfoTypeFromJSONTyped(json, false);
}

export function MembershipAwardFinancialTransactionInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipAwardFinancialTransactionInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pointsRequired': !exists(json, 'pointsRequired') ? undefined : json['pointsRequired'],
        'awardValue': !exists(json, 'awardValue') ? undefined : json['awardValue'],
        'messageLine1': !exists(json, 'messageLine1') ? undefined : json['messageLine1'],
        'messageLine2': !exists(json, 'messageLine2') ? undefined : json['messageLine2'],
        'messageLine3': !exists(json, 'messageLine3') ? undefined : json['messageLine3'],
        'messageLine4': !exists(json, 'messageLine4') ? undefined : json['messageLine4'],
        'displaySet': !exists(json, 'displaySet') ? undefined : json['displaySet'],
        'exchangeRate': !exists(json, 'exchangeRate') ? undefined : json['exchangeRate'],
        'maxPercentAllowed': !exists(json, 'maxPercentAllowed') ? undefined : json['maxPercentAllowed'],
        'ignoreFinancialTransaction': !exists(json, 'ignoreFinancialTransaction') ? undefined : json['ignoreFinancialTransaction'],
    };
}

export function MembershipAwardFinancialTransactionInfoTypeToJSON(value?: MembershipAwardFinancialTransactionInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pointsRequired': value.pointsRequired,
        'awardValue': value.awardValue,
        'messageLine1': value.messageLine1,
        'messageLine2': value.messageLine2,
        'messageLine3': value.messageLine3,
        'messageLine4': value.messageLine4,
        'displaySet': value.displaySet,
        'exchangeRate': value.exchangeRate,
        'maxPercentAllowed': value.maxPercentAllowed,
        'ignoreFinancialTransaction': value.ignoreFinancialTransaction,
    };
}

