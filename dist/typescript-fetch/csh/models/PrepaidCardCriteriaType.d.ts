/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { PrepaidCardDetailsType } from './PrepaidCardDetailsType';
import type { ProfileId } from './ProfileId';
import type { ReservationId } from './ReservationId';
import type { SaleCriteriaType } from './SaleCriteriaType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Holds fixed charge information.
 * @export
 * @interface PrepaidCardCriteriaType
 */
export interface PrepaidCardCriteriaType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PrepaidCardCriteriaType
     */
    amount?: CurrencyAmountType;
    /**
     *
     * @type {PrepaidCardDetailsType}
     * @memberof PrepaidCardCriteriaType
     */
    cardDetails?: PrepaidCardDetailsType;
    /**
     * Prepaid card / account number.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    cardNo?: string;
    /**
     * Masked Prepaid card / account number.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    cardNumberMasked?: string;
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof PrepaidCardCriteriaType
     */
    cashierId?: number;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    creatorId?: string;
    /**
     * Given name, first name or names.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    firstName?: string;
    /**
     * Indicates a gift card type.
     * @type {boolean}
     * @memberof PrepaidCardCriteriaType
     */
    giftCard?: boolean;
    /**
     * Hotel context for the Reservations.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    hotelId?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof PrepaidCardCriteriaType
     */
    interfaceId?: UniqueIDType;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    lastModifyDateTime?: string;
    /**
     * Family name, last name or Company Name.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    name?: string;
    /**
     * Prepaid card pin code.
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    pinCode?: string;
    /**
     *
     * @type {boolean}
     * @memberof PrepaidCardCriteriaType
     */
    postChargeToRoom?: boolean;
    /**
     *
     * @type {ProfileId}
     * @memberof PrepaidCardCriteriaType
     */
    profileId?: ProfileId;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof PrepaidCardCriteriaType
     */
    purgeDate?: string;
    /**
     *
     * @type {ReservationId}
     * @memberof PrepaidCardCriteriaType
     */
    reservationId?: ReservationId;
    /**
     *
     * @type {SaleCriteriaType}
     * @memberof PrepaidCardCriteriaType
     */
    saleCriteria?: SaleCriteriaType;
    /**
     *
     * @type {number}
     * @memberof PrepaidCardCriteriaType
     */
    vendorInterfaceID?: number;
}
/**
 * Check if a given object implements the PrepaidCardCriteriaType interface.
 */
export declare function instanceOfPrepaidCardCriteriaType(value: object): boolean;
export declare function PrepaidCardCriteriaTypeFromJSON(json: any): PrepaidCardCriteriaType;
export declare function PrepaidCardCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrepaidCardCriteriaType;
export declare function PrepaidCardCriteriaTypeToJSON(value?: PrepaidCardCriteriaType | null): any;
