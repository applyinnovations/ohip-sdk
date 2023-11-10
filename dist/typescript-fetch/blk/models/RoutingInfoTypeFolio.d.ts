/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { PayeeInfoType } from './PayeeInfoType';
import type { RoutingInfoTypeFolioGuestInfo } from './RoutingInfoTypeFolioGuestInfo';
import type { RoutingInstructionType } from './RoutingInstructionType';
/**
 * Folio routing type.
 * @export
 * @interface RoutingInfoTypeFolio
 */
export interface RoutingInfoTypeFolio {
    /**
     * Accounts Receivable.
     * @type {string}
     * @memberof RoutingInfoTypeFolio
     */
    aRNumber?: string;
    /**
     *
     * @type {number}
     * @memberof RoutingInfoTypeFolio
     */
    folioWindowNo?: number;
    /**
     *
     * @type {RoutingInfoTypeFolioGuestInfo}
     * @memberof RoutingInfoTypeFolio
     */
    guestInfo?: RoutingInfoTypeFolioGuestInfo;
    /**
     * Set of routing instructions associated to this routing type.
     * @type {Array<RoutingInstructionType>}
     * @memberof RoutingInfoTypeFolio
     */
    instructions?: Array<RoutingInstructionType>;
    /**
     *
     * @type {PayeeInfoType}
     * @memberof RoutingInfoTypeFolio
     */
    payeeInfo?: PayeeInfoType;
    /**
     *
     * @type {string}
     * @memberof RoutingInfoTypeFolio
     */
    paymentMethod?: string;
}
/**
 * Check if a given object implements the RoutingInfoTypeFolio interface.
 */
export declare function instanceOfRoutingInfoTypeFolio(value: object): boolean;
export declare function RoutingInfoTypeFolioFromJSON(json: any): RoutingInfoTypeFolio;
export declare function RoutingInfoTypeFolioFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingInfoTypeFolio;
export declare function RoutingInfoTypeFolioToJSON(value?: RoutingInfoTypeFolio | null): any;
