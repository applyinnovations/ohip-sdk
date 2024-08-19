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
import type { CateringInfoType } from './CateringInfoType';
import type { MonthlyCateringVarianceInfoType } from './MonthlyCateringVarianceInfoType';
/**
 * Budget Forecast information for Catering segment code.
 * @export
 * @interface CateringCodeInformationType
 */
export interface CateringCodeInformationType {
    /**
     * Monthly Variance information.
     * @type {Array<MonthlyCateringVarianceInfoType>}
     * @memberof CateringCodeInformationType
     */
    aBVarianceInfo?: Array<MonthlyCateringVarianceInfoType>;
    /**
     * Monthly Variance information.
     * @type {Array<MonthlyCateringVarianceInfoType>}
     * @memberof CateringCodeInformationType
     */
    aFVarianceInfo?: Array<MonthlyCateringVarianceInfoType>;
    /**
     *
     * @type {CateringInfoType}
     * @memberof CateringCodeInformationType
     */
    actualInfo?: CateringInfoType;
    /**
     *
     * @type {CateringInfoType}
     * @memberof CateringCodeInformationType
     */
    budgetInfo?: CateringInfoType;
    /**
     * Catering segment code for which budget forecast information is fetched.
     * @type {string}
     * @memberof CateringCodeInformationType
     */
    cateringCode?: string;
    /**
     * Catering code description for segment code.
     * @type {string}
     * @memberof CateringCodeInformationType
     */
    cateringCodeDescription?: string;
    /**
     * Catering code group of segment code.
     * @type {string}
     * @memberof CateringCodeInformationType
     */
    cateringCodeGrp?: string;
    /**
     * Monthly Variance information.
     * @type {Array<MonthlyCateringVarianceInfoType>}
     * @memberof CateringCodeInformationType
     */
    fBVarianceInfo?: Array<MonthlyCateringVarianceInfoType>;
    /**
     *
     * @type {CateringInfoType}
     * @memberof CateringCodeInformationType
     */
    forecastInfo?: CateringInfoType;
}
/**
 * Check if a given object implements the CateringCodeInformationType interface.
 */
export declare function instanceOfCateringCodeInformationType(value: object): boolean;
export declare function CateringCodeInformationTypeFromJSON(json: any): CateringCodeInformationType;
export declare function CateringCodeInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringCodeInformationType;
export declare function CateringCodeInformationTypeToJSON(value?: CateringCodeInformationType | null): any;
