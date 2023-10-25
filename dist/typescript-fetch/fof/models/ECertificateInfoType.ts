/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { ECertificateInfoTypeHotels } from './ECertificateInfoTypeHotels';
import {
    ECertificateInfoTypeHotelsFromJSON,
    ECertificateInfoTypeHotelsFromJSONTyped,
    ECertificateInfoTypeHotelsToJSON,
} from './ECertificateInfoTypeHotels';
import type { ECertificateUsageCriteriaType } from './ECertificateUsageCriteriaType';
import {
    ECertificateUsageCriteriaTypeFromJSON,
    ECertificateUsageCriteriaTypeFromJSONTyped,
    ECertificateUsageCriteriaTypeToJSON,
} from './ECertificateUsageCriteriaType';

/**
 * E-Certificates details.
 * @export
 * @interface ECertificateInfoType
 */
export interface ECertificateInfoType {
    /**
     * Award type to which the certificate is linked to.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    awardCode?: string;
    /**
     * Summary of Benefits attached to this ECertificate.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    benefitSummary?: string;
    /**
     * User defined certificate code.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    certificateType?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ECertificateInfoType
     */
    cost?: CurrencyAmountType;
    /**
     * Description about the certificate.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    description?: string;
    /**
     * 
     * @type {ECertificateInfoTypeHotels}
     * @memberof ECertificateInfoType
     */
    hotels?: ECertificateInfoTypeHotels;
    /**
     * Label for the certificate.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    label?: string;
    /**
     * Detail description about the certificate.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    longDescription?: string;
    /**
     * Number of times e-certificate can be extended.
     * @type {number}
     * @memberof ECertificateInfoType
     */
    maxExtensionAllowed?: number;
    /**
     * Membership type to which the certificate is linked to.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    membershipType?: string;
    /**
     * Promotion code to which certificate is attached to.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    promotionCode?: string;
    /**
     * 
     * @type {ECertificateUsageCriteriaType}
     * @memberof ECertificateInfoType
     */
    usageCriteria?: ECertificateUsageCriteriaType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ECertificateInfoType
     */
    value?: CurrencyAmountType;
    /**
     * Voucher benefit code attached to the certificate.
     * @type {string}
     * @memberof ECertificateInfoType
     */
    voucherBenefitCode?: string;
}

/**
 * Check if a given object implements the ECertificateInfoType interface.
 */
export function instanceOfECertificateInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ECertificateInfoTypeFromJSON(json: any): ECertificateInfoType {
    return ECertificateInfoTypeFromJSONTyped(json, false);
}

export function ECertificateInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECertificateInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'awardCode': !exists(json, 'awardCode') ? undefined : json['awardCode'],
        'benefitSummary': !exists(json, 'benefitSummary') ? undefined : json['benefitSummary'],
        'certificateType': !exists(json, 'certificateType') ? undefined : json['certificateType'],
        'cost': !exists(json, 'cost') ? undefined : CurrencyAmountTypeFromJSON(json['cost']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotels': !exists(json, 'hotels') ? undefined : ECertificateInfoTypeHotelsFromJSON(json['hotels']),
        'label': !exists(json, 'label') ? undefined : json['label'],
        'longDescription': !exists(json, 'longDescription') ? undefined : json['longDescription'],
        'maxExtensionAllowed': !exists(json, 'maxExtensionAllowed') ? undefined : json['maxExtensionAllowed'],
        'membershipType': !exists(json, 'membershipType') ? undefined : json['membershipType'],
        'promotionCode': !exists(json, 'promotionCode') ? undefined : json['promotionCode'],
        'usageCriteria': !exists(json, 'usageCriteria') ? undefined : ECertificateUsageCriteriaTypeFromJSON(json['usageCriteria']),
        'value': !exists(json, 'value') ? undefined : CurrencyAmountTypeFromJSON(json['value']),
        'voucherBenefitCode': !exists(json, 'voucherBenefitCode') ? undefined : json['voucherBenefitCode'],
    };
}

export function ECertificateInfoTypeToJSON(value?: ECertificateInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'awardCode': value.awardCode,
        'benefitSummary': value.benefitSummary,
        'certificateType': value.certificateType,
        'cost': CurrencyAmountTypeToJSON(value.cost),
        'description': value.description,
        'hotels': ECertificateInfoTypeHotelsToJSON(value.hotels),
        'label': value.label,
        'longDescription': value.longDescription,
        'maxExtensionAllowed': value.maxExtensionAllowed,
        'membershipType': value.membershipType,
        'promotionCode': value.promotionCode,
        'usageCriteria': ECertificateUsageCriteriaTypeToJSON(value.usageCriteria),
        'value': CurrencyAmountTypeToJSON(value.value),
        'voucherBenefitCode': value.voucherBenefitCode,
    };
}

