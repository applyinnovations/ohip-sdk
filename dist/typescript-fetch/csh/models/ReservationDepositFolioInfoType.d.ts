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
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { DepositMaturityType } from './DepositMaturityType';
import type { DepositPostingsType } from './DepositPostingsType';
import type { DepositType } from './DepositType';
import type { ProjectedRevenueType } from './ProjectedRevenueType';
import type { ReservationInfoType } from './ReservationInfoType';
import type { ReservationPolicySummaryType } from './ReservationPolicySummaryType';
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
     *
     * @type {DepositPostingsType}
     * @memberof ReservationDepositFolioInfoType
     */
    deposits?: DepositPostingsType;
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
export declare function instanceOfReservationDepositFolioInfoType(value: object): boolean;
export declare function ReservationDepositFolioInfoTypeFromJSON(json: any): ReservationDepositFolioInfoType;
export declare function ReservationDepositFolioInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationDepositFolioInfoType;
export declare function ReservationDepositFolioInfoTypeToJSON(value?: ReservationDepositFolioInfoType | null): any;