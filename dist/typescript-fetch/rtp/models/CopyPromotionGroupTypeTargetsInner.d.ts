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
 * @interface CopyPromotionGroupTypeTargetsInner
 */
export interface CopyPromotionGroupTypeTargetsInner {
    /**
     * Hotel code to which Promotion Group will be copied.
     * @type {string}
     * @memberof CopyPromotionGroupTypeTargetsInner
     */
    hotelId?: string;
    /**
     * The code to be used for the Promotion Group being copied.
     * @type {Array<string>}
     * @memberof CopyPromotionGroupTypeTargetsInner
     */
    promotionGroups?: Array<string>;
}
/**
 * Check if a given object implements the CopyPromotionGroupTypeTargetsInner interface.
 */
export declare function instanceOfCopyPromotionGroupTypeTargetsInner(value: object): boolean;
export declare function CopyPromotionGroupTypeTargetsInnerFromJSON(json: any): CopyPromotionGroupTypeTargetsInner;
export declare function CopyPromotionGroupTypeTargetsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyPromotionGroupTypeTargetsInner;
export declare function CopyPromotionGroupTypeTargetsInnerToJSON(value?: CopyPromotionGroupTypeTargetsInner | null): any;
