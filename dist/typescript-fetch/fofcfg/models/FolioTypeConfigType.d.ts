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
import type { FolioReportsType } from './FolioReportsType';
import type { FolioTypeProfileAttributes } from './FolioTypeProfileAttributes';
/**
 * Information detail for uniquely identifying a Folio Type Name.
 * @export
 * @interface FolioTypeConfigType
 */
export interface FolioTypeConfigType {
    /**
     * Folio type is Account Receivable or not, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    aRFolio?: boolean;
    /**
     * Allowed to create credit folio on existing folio type if user gives the credit on the folio otherwise user is not allowed to give a credit, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    allowCreditFolio?: boolean;
    /**
     * Allowed to create compressed folio on existing folio type if user tries to compress on the folio otherwise user is not allowed to compress, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    allowFolioCompression?: boolean;
    /**
     * Folio type used for Converting the Folios, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    allowFolioConversion?: boolean;
    /**
     * Stores the Linked Associated Credit Folio Type.
     * @type {string}
     * @memberof FolioTypeConfigType
     */
    associatedCreditFolioType?: string;
    /**
     * Folio type is used for City Ledger bills or not or not, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    cityLedgerFolio?: boolean;
    /**
     * Configuration code.
     * @type {string}
     * @memberof FolioTypeConfigType
     */
    code?: string;
    /**
     * Folio type is Compressible or not, indicates that the folio which was created is a Compressed Folio based on the AllowFolioCompression flag, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    compressedFolio?: boolean;
    /**
     * Folio type is the correction or not, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    correctionFolio?: boolean;
    /**
     * Folio type used for Credit Folio or not, indicates that the folio which was created is a Credit Folio based on the AllowCreditFolio flag , used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    creditFolio?: boolean;
    /**
     * Folio type is a debit folio or not, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    debitFolio?: boolean;
    /**
     * Folio type is a deposit folio type or not, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    depositFolio?: boolean;
    /**
     * Document code which can be defined on each folio type, which is an alphanumeric value can be used on Invoices or other documents for tax purposes. E.g. In case of Portugal, this value is combined with Folio Number for ATCUD requirements.
     * @type {string}
     * @memberof FolioTypeConfigType
     */
    documentCode?: string;
    /**
     * Folio Type is fiscal or not, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    fiscalFolio?: boolean;
    /**
     *
     * @type {FolioReportsType}
     * @memberof FolioTypeConfigType
     */
    folioReports?: FolioReportsType;
    /**
     * Flag to indicate if the Folio Type has been used to create a Folio.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    folioUsed?: boolean;
    /**
     * Type of guest Individual, Professional, etc, used in certain countries.
     * @type {string}
     * @memberof FolioTypeConfigType
     */
    guestClassification?: string;
    /**
     * Hotel where the code is configured.
     * @type {string}
     * @memberof FolioTypeConfigType
     */
    hotelId?: string;
    /**
     * Used only for Information and Pro-forma folios in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    informationFolio?: boolean;
    /**
     * Folio type is internal or not, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    internalFolio?: boolean;
    /**
     * Folio type has a manual folio type associated or not, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    manualFolio?: boolean;
    /**
     *
     * @type {FolioTypeProfileAttributes}
     * @memberof FolioTypeConfigType
     */
    profileAttributes?: FolioTypeProfileAttributes;
    /**
     * Adding this flag at folio type level would decide to send fiscal folio (generate payload) or not.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    sendFiscalFolio?: boolean;
    /**
     * Folio type is a simple folio type or not, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    simpleFolio?: boolean;
    /**
     * Folio type is a supplemental folio ( debit bill ) type or not, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    supplementalFolio?: boolean;
    /**
     * To indicate if the folio type is to be used for a tax folio. Used in Greece Country.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    taxFolio?: boolean;
    /**
     * Name Tax Type associated with folio type.
     * @type {string}
     * @memberof FolioTypeConfigType
     */
    taxType?: string;
    /**
     * Identify the service type of transaction, used in certain countries.
     * @type {string}
     * @memberof FolioTypeConfigType
     */
    transactionServiceType?: string;
    /**
     * Folio type is used for Local national or foreigner, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    useNationality?: boolean;
    /**
     * Use original folio stay details on the folio which was created using the folio type.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    useOriginalFolioStayDetails?: boolean;
    /**
     * Folio type is used for profiles which have a tax number or not, used in certain countries.
     * @type {boolean}
     * @memberof FolioTypeConfigType
     */
    useTaxNumber?: boolean;
}
/**
 * Check if a given object implements the FolioTypeConfigType interface.
 */
export declare function instanceOfFolioTypeConfigType(value: object): boolean;
export declare function FolioTypeConfigTypeFromJSON(json: any): FolioTypeConfigType;
export declare function FolioTypeConfigTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioTypeConfigType;
export declare function FolioTypeConfigTypeToJSON(value?: FolioTypeConfigType | null): any;
