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
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { DepositMaturityType } from './DepositMaturityType';
import {
    DepositMaturityTypeFromJSON,
    DepositMaturityTypeFromJSONTyped,
    DepositMaturityTypeToJSON,
} from './DepositMaturityType';
import type { DepositPostingType } from './DepositPostingType';
import {
    DepositPostingTypeFromJSON,
    DepositPostingTypeFromJSONTyped,
    DepositPostingTypeToJSON,
} from './DepositPostingType';
import type { DepositType } from './DepositType';
import {
    DepositTypeFromJSON,
    DepositTypeFromJSONTyped,
    DepositTypeToJSON,
} from './DepositType';
import type { ProjectedRevenueType } from './ProjectedRevenueType';
import {
    ProjectedRevenueTypeFromJSON,
    ProjectedRevenueTypeFromJSONTyped,
    ProjectedRevenueTypeToJSON,
} from './ProjectedRevenueType';
import type { ReservationInfoType } from './ReservationInfoType';
import {
    ReservationInfoTypeFromJSON,
    ReservationInfoTypeFromJSONTyped,
    ReservationInfoTypeToJSON,
} from './ReservationInfoType';
import type { ReservationPolicySummaryType } from './ReservationPolicySummaryType';
import {
    ReservationPolicySummaryTypeFromJSON,
    ReservationPolicySummaryTypeFromJSONTyped,
    ReservationPolicySummaryTypeToJSON,
} from './ReservationPolicySummaryType';

/**
 * Detailed information of a reservation and its deposit payment posting information.
 * @export
 * @interface ReservationDepositFolioInfoType
 */
export interface ReservationDepositFolioInfoType {
    /**
     * Flag to indicate if an Advance Folio is already generated.
     * @type {boolean}
     * @memberof ReservationDepositFolioInfoType
     */
    advanceFolioGenerated?: boolean;
    /**
     * 
     * @type {DepositMaturityType}
     * @memberof ReservationDepositFolioInfoType
     */
    depositMaturityType?: DepositMaturityType;
    /**
     * 
     * @type {DepositType}
     * @memberof ReservationDepositFolioInfoType
     */
    depositType?: DepositType;
    /**
     * A List of Deposit Payments.
     * @type {Array<DepositPostingType>}
     * @memberof ReservationDepositFolioInfoType
     */
    deposits?: Array<DepositPostingType>;
    /**
     * 
     * @type {ReservationPolicySummaryType}
     * @memberof ReservationDepositFolioInfoType
     */
    policySummaryInfo?: ReservationPolicySummaryType;
    /**
     * 
     * @type {ProjectedRevenueType}
     * @memberof ReservationDepositFolioInfoType
     */
    projectedRevenue?: ProjectedRevenueType;
    /**
     * 
     * @type {ReservationInfoType}
     * @memberof ReservationDepositFolioInfoType
     */
    reservationInfo?: ReservationInfoType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ReservationDepositFolioInfoType
     */
    totalAmountDue?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ReservationDepositFolioInfoType
     */
    totalAmountTransferrable?: CurrencyAmountType;
}

/**
 * Check if a given object implements the ReservationDepositFolioInfoType interface.
 */
export function instanceOfReservationDepositFolioInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationDepositFolioInfoTypeFromJSON(json: any): ReservationDepositFolioInfoType {
    return ReservationDepositFolioInfoTypeFromJSONTyped(json, false);
}

export function ReservationDepositFolioInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationDepositFolioInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'advanceFolioGenerated': !exists(json, 'advanceFolioGenerated') ? undefined : json['advanceFolioGenerated'],
        'depositMaturityType': !exists(json, 'depositMaturityType') ? undefined : DepositMaturityTypeFromJSON(json['depositMaturityType']),
        'depositType': !exists(json, 'depositType') ? undefined : DepositTypeFromJSON(json['depositType']),
        'deposits': !exists(json, 'deposits') ? undefined : ((json['deposits'] as Array<any>).map(DepositPostingTypeFromJSON)),
        'policySummaryInfo': !exists(json, 'policySummaryInfo') ? undefined : ReservationPolicySummaryTypeFromJSON(json['policySummaryInfo']),
        'projectedRevenue': !exists(json, 'projectedRevenue') ? undefined : ProjectedRevenueTypeFromJSON(json['projectedRevenue']),
        'reservationInfo': !exists(json, 'reservationInfo') ? undefined : ReservationInfoTypeFromJSON(json['reservationInfo']),
        'totalAmountDue': !exists(json, 'totalAmountDue') ? undefined : CurrencyAmountTypeFromJSON(json['totalAmountDue']),
        'totalAmountTransferrable': !exists(json, 'totalAmountTransferrable') ? undefined : CurrencyAmountTypeFromJSON(json['totalAmountTransferrable']),
    };
}

export function ReservationDepositFolioInfoTypeToJSON(value?: ReservationDepositFolioInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'advanceFolioGenerated': value.advanceFolioGenerated,
        'depositMaturityType': DepositMaturityTypeToJSON(value.depositMaturityType),
        'depositType': DepositTypeToJSON(value.depositType),
        'deposits': value.deposits === undefined ? undefined : ((value.deposits as Array<any>).map(DepositPostingTypeToJSON)),
        'policySummaryInfo': ReservationPolicySummaryTypeToJSON(value.policySummaryInfo),
        'projectedRevenue': ProjectedRevenueTypeToJSON(value.projectedRevenue),
        'reservationInfo': ReservationInfoTypeToJSON(value.reservationInfo),
        'totalAmountDue': CurrencyAmountTypeToJSON(value.totalAmountDue),
        'totalAmountTransferrable': CurrencyAmountTypeToJSON(value.totalAmountTransferrable),
    };
}

