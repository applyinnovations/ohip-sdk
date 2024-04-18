/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface PropertyPromotionRateCodeType
 */
export interface PropertyPromotionRateCodeType {
    /**
     * Created or removed rate code. Accepted values are "CREATED", "REMOVED"
     * @type {string}
     * @memberof PropertyPromotionRateCodeType
     */
    actionType?: string;
    /**
     * One of the unique key of the promotion code it attaches to.
     * @type {string}
     * @memberof PropertyPromotionRateCodeType
     */
    hotelId?: string;
    /**
     * One of the unique key of the promotion code it attaches to.
     * @type {string}
     * @memberof PropertyPromotionRateCodeType
     */
    promotionCode?: string;
    /**
     * Code of the rate.
     * @type {string}
     * @memberof PropertyPromotionRateCodeType
     */
    rateCode?: string;
    /**
     * Description of the rate.
     * @type {string}
     * @memberof PropertyPromotionRateCodeType
     */
    rateDescription?: string;
}
/**
 * Check if a given object implements the PropertyPromotionRateCodeType interface.
 */
export declare function instanceOfPropertyPromotionRateCodeType(value: object): boolean;
export declare function PropertyPromotionRateCodeTypeFromJSON(json: any): PropertyPromotionRateCodeType;
export declare function PropertyPromotionRateCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertyPromotionRateCodeType;
export declare function PropertyPromotionRateCodeTypeToJSON(value?: PropertyPromotionRateCodeType | null): any;