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
import type { CateringInfoType } from './CateringInfoType';
import type { CateringVarianceInfoType } from './CateringVarianceInfoType';
/**
 * Budget Forecast totals information for Catering segment.
 * @export
 * @interface CateringTotalsInformationType
 */
export interface CateringTotalsInformationType {
    /**
     *
     * @type {CateringVarianceInfoType}
     * @memberof CateringTotalsInformationType
     */
    aBVarianceTotalInfo?: CateringVarianceInfoType;
    /**
     *
     * @type {CateringVarianceInfoType}
     * @memberof CateringTotalsInformationType
     */
    aFVarianceTotalInfo?: CateringVarianceInfoType;
    /**
     *
     * @type {CateringInfoType}
     * @memberof CateringTotalsInformationType
     */
    actualTotalInfo?: CateringInfoType;
    /**
     *
     * @type {CateringInfoType}
     * @memberof CateringTotalsInformationType
     */
    budgetTotalInfo?: CateringInfoType;
    /**
     *
     * @type {CateringVarianceInfoType}
     * @memberof CateringTotalsInformationType
     */
    fBVarianceTotalInfo?: CateringVarianceInfoType;
    /**
     *
     * @type {CateringInfoType}
     * @memberof CateringTotalsInformationType
     */
    forecastTotalInfo?: CateringInfoType;
}
/**
 * Check if a given object implements the CateringTotalsInformationType interface.
 */
export declare function instanceOfCateringTotalsInformationType(value: object): boolean;
export declare function CateringTotalsInformationTypeFromJSON(json: any): CateringTotalsInformationType;
export declare function CateringTotalsInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringTotalsInformationType;
export declare function CateringTotalsInformationTypeToJSON(value?: CateringTotalsInformationType | null): any;
