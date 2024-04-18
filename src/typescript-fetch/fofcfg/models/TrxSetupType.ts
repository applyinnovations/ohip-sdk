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
import type { DepositTypeType } from './DepositTypeType';
import {
    DepositTypeTypeFromJSON,
    DepositTypeTypeFromJSONTyped,
    DepositTypeTypeToJSON,
} from './DepositTypeType';
import type { TrxOwnershipType } from './TrxOwnershipType';
import {
    TrxOwnershipTypeFromJSON,
    TrxOwnershipTypeFromJSONTyped,
    TrxOwnershipTypeToJSON,
} from './TrxOwnershipType';

/**
 * Transaction Code setup details.
 * @export
 * @interface TrxSetupType
 */
export interface TrxSetupType {
    /**
     * Accounting Code for the transaction code.
     * @type {string}
     * @memberof TrxSetupType
     */
    accountingCode?: string;
    /**
     * True indicates the Transaction Code requires the Check Number for posting.
     * @type {boolean}
     * @memberof TrxSetupType
     */
    checkNoRequired?: boolean;
    /**
     * True indicates the Transaction Code is used for deposit postings only.
     * @type {boolean}
     * @memberof TrxSetupType
     */
    depositPostingOnly?: boolean;
    /**
     * 
     * @type {DepositTypeType}
     * @memberof TrxSetupType
     */
    depositType?: DepositTypeType;
    /**
     * This flag indicates that the transaction is eligible to earn points (guest can earn points on the revenue posted to this transaction code)
     * @type {boolean}
     * @memberof TrxSetupType
     */
    earnMembershipPoints?: boolean;
    /**
     * Short Summary information of the Chain and it's Hubs and Hotels.
     * @type {string}
     * @memberof TrxSetupType
     */
    generatesType?: string;
    /**
     * True indicates the Transaction Code is inactive.
     * @type {boolean}
     * @memberof TrxSetupType
     */
    inactive?: boolean;
    /**
     * True indicates the Transaction Code posting will be included in Deposit/Cencallation rule calculations.
     * @type {boolean}
     * @memberof TrxSetupType
     */
    includeInDepositRule?: boolean;
    /**
     * True indicates the Transaction Code is used for cross posting across the hotels/.
     * @type {boolean}
     * @memberof TrxSetupType
     */
    interHotelSales?: boolean;
    /**
     * True indicates the Transaction Code is allowed to be posted manually.
     * @type {boolean}
     * @memberof TrxSetupType
     */
    manualPosting?: boolean;
    /**
     * True indicates the Transaction Code is non taxable.
     * @type {boolean}
     * @memberof TrxSetupType
     */
    nonTaxable?: boolean;
    /**
     * 
     * @type {TrxOwnershipType}
     * @memberof TrxSetupType
     */
    ownershipStatus?: TrxOwnershipType;
    /**
     * True indicates the Transaction Code is used to post covers.
     * @type {boolean}
     * @memberof TrxSetupType
     */
    postCovers?: boolean;
    /**
     * Deposit posting associated with the transaction code.
     * @type {boolean}
     * @memberof TrxSetupType
     */
    postingRule?: boolean;
    /**
     * Quantity Code for the transaction code.
     * @type {string}
     * @memberof TrxSetupType
     */
    quantityCode?: string;
    /**
     * This flag indicates that the transaction is eligible to redeem points (guest can use their points to pay for transactions posted with this transaction code)
     * @type {boolean}
     * @memberof TrxSetupType
     */
    redeemMembershipPoints?: boolean;
    /**
     * True indicates the Transaction Code is to be considered as revenue to the Hotel.
     * @type {boolean}
     * @memberof TrxSetupType
     */
    revenue?: boolean;
    /**
     * Service Type for the transaction code.
     * @type {string}
     * @memberof TrxSetupType
     */
    serviceType?: string;
    /**
     * True indicates that the tax is inclusive in the generate.
     * @type {boolean}
     * @memberof TrxSetupType
     */
    taxInclusive?: boolean;
    /**
     * True indicates the Transaction Code is used for Paid outs.
     * @type {boolean}
     * @memberof TrxSetupType
     */
    useForPaidout?: boolean;
}

/**
 * Check if a given object implements the TrxSetupType interface.
 */
export function instanceOfTrxSetupType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrxSetupTypeFromJSON(json: any): TrxSetupType {
    return TrxSetupTypeFromJSONTyped(json, false);
}

export function TrxSetupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrxSetupType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountingCode': !exists(json, 'accountingCode') ? undefined : json['accountingCode'],
        'checkNoRequired': !exists(json, 'checkNoRequired') ? undefined : json['checkNoRequired'],
        'depositPostingOnly': !exists(json, 'depositPostingOnly') ? undefined : json['depositPostingOnly'],
        'depositType': !exists(json, 'depositType') ? undefined : DepositTypeTypeFromJSON(json['depositType']),
        'earnMembershipPoints': !exists(json, 'earnMembershipPoints') ? undefined : json['earnMembershipPoints'],
        'generatesType': !exists(json, 'generatesType') ? undefined : json['generatesType'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'includeInDepositRule': !exists(json, 'includeInDepositRule') ? undefined : json['includeInDepositRule'],
        'interHotelSales': !exists(json, 'interHotelSales') ? undefined : json['interHotelSales'],
        'manualPosting': !exists(json, 'manualPosting') ? undefined : json['manualPosting'],
        'nonTaxable': !exists(json, 'nonTaxable') ? undefined : json['nonTaxable'],
        'ownershipStatus': !exists(json, 'ownershipStatus') ? undefined : TrxOwnershipTypeFromJSON(json['ownershipStatus']),
        'postCovers': !exists(json, 'postCovers') ? undefined : json['postCovers'],
        'postingRule': !exists(json, 'postingRule') ? undefined : json['postingRule'],
        'quantityCode': !exists(json, 'quantityCode') ? undefined : json['quantityCode'],
        'redeemMembershipPoints': !exists(json, 'redeemMembershipPoints') ? undefined : json['redeemMembershipPoints'],
        'revenue': !exists(json, 'revenue') ? undefined : json['revenue'],
        'serviceType': !exists(json, 'serviceType') ? undefined : json['serviceType'],
        'taxInclusive': !exists(json, 'taxInclusive') ? undefined : json['taxInclusive'],
        'useForPaidout': !exists(json, 'useForPaidout') ? undefined : json['useForPaidout'],
    };
}

export function TrxSetupTypeToJSON(value?: TrxSetupType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountingCode': value.accountingCode,
        'checkNoRequired': value.checkNoRequired,
        'depositPostingOnly': value.depositPostingOnly,
        'depositType': DepositTypeTypeToJSON(value.depositType),
        'earnMembershipPoints': value.earnMembershipPoints,
        'generatesType': value.generatesType,
        'inactive': value.inactive,
        'includeInDepositRule': value.includeInDepositRule,
        'interHotelSales': value.interHotelSales,
        'manualPosting': value.manualPosting,
        'nonTaxable': value.nonTaxable,
        'ownershipStatus': TrxOwnershipTypeToJSON(value.ownershipStatus),
        'postCovers': value.postCovers,
        'postingRule': value.postingRule,
        'quantityCode': value.quantityCode,
        'redeemMembershipPoints': value.redeemMembershipPoints,
        'revenue': value.revenue,
        'serviceType': value.serviceType,
        'taxInclusive': value.taxInclusive,
        'useForPaidout': value.useForPaidout,
    };
}
