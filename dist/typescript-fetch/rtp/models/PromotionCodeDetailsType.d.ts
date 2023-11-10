/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { DateTimeSpanType } from './DateTimeSpanType';
import type { TimeSpanType } from './TimeSpanType';
import type { TranslationTextType2000 } from './TranslationTextType2000';
/**
 * Details of the promotion.
 * @export
 * @interface PromotionCodeDetailsType
 */
export interface PromotionCodeDetailsType {
    /**
     *
     * @type {TimeSpanType}
     * @memberof PromotionCodeDetailsType
     */
    bookingDate?: TimeSpanType;
    /**
     * You may enter any information, such as the membership program or level.
     * @type {string}
     * @memberof PromotionCodeDetailsType
     */
    category?: string;
    /**
     * Description of the category.
     * @type {string}
     * @memberof PromotionCodeDetailsType
     */
    categoryDesc?: string;
    /**
     *
     * @type {DateTimeSpanType}
     * @memberof PromotionCodeDetailsType
     */
    checkInOutTime?: DateTimeSpanType;
    /**
     * Description of the promotion.
     * @type {string}
     * @memberof PromotionCodeDetailsType
     */
    description?: string;
    /**
     * Date the promotion is inactived.
     * @type {Date}
     * @memberof PromotionCodeDetailsType
     */
    inactiveDate?: Date;
    /**
     * Free text comments that further describe the promotion code
     * @type {string}
     * @memberof PromotionCodeDetailsType
     */
    promoInformation?: string;
    /**
     * One line of information. If you wish to enter long information, use the Information field.
     * @type {string}
     * @memberof PromotionCodeDetailsType
     */
    promoInstructions?: string;
    /**
     * Group that the promotion code belongs to. If the promotion group will be associated with a profile promotion, the promotion group is identified as PROFILE.
     * @type {string}
     * @memberof PromotionCodeDetailsType
     */
    promotionGroup?: string;
    /**
     * Name of the promotion group.
     * @type {string}
     * @memberof PromotionCodeDetailsType
     */
    promotionGroupName?: string;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof PromotionCodeDetailsType
     */
    promotionName?: TranslationTextType2000;
    /**
     *
     * @type {TimeSpanType}
     * @memberof PromotionCodeDetailsType
     */
    stayDate?: TimeSpanType;
    /**
     * Indicates if reservations are allowed to edit after the booking date has passed.
     * @type {boolean}
     * @memberof PromotionCodeDetailsType
     */
    updateOutsideBookingDate?: boolean;
    /**
     * Available only for reservation promotion codes. Indicates if room upgrades are allowed for the promotion.
     * @type {string}
     * @memberof PromotionCodeDetailsType
     */
    upgradeAllowed?: string;
}
/**
 * Check if a given object implements the PromotionCodeDetailsType interface.
 */
export declare function instanceOfPromotionCodeDetailsType(value: object): boolean;
export declare function PromotionCodeDetailsTypeFromJSON(json: any): PromotionCodeDetailsType;
export declare function PromotionCodeDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotionCodeDetailsType;
export declare function PromotionCodeDetailsTypeToJSON(value?: PromotionCodeDetailsType | null): any;
