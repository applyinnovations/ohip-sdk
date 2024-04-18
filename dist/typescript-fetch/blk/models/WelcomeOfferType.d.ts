/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { WelcomeOfferOptionsType } from './WelcomeOfferOptionsType';
/**
 *
 * @export
 * @interface WelcomeOfferType
 */
export interface WelcomeOfferType {
    /**
     * Determines the status of the welcome offer.
     * @type {string}
     * @memberof WelcomeOfferType
     */
    status?: string;
    /**
     *
     * @type {WelcomeOfferOptionsType}
     * @memberof WelcomeOfferType
     */
    type?: WelcomeOfferOptionsType;
}
/**
 * Check if a given object implements the WelcomeOfferType interface.
 */
export declare function instanceOfWelcomeOfferType(value: object): boolean;
export declare function WelcomeOfferTypeFromJSON(json: any): WelcomeOfferType;
export declare function WelcomeOfferTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WelcomeOfferType;
export declare function WelcomeOfferTypeToJSON(value?: WelcomeOfferType | null): any;