/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { InterfaceAccountType } from './InterfaceAccountType';
import type { WarningType } from './WarningType';
/**
 * Request object for creating an Interface Account of a Hotel Interface record.
 * @export
 * @interface CreateInterfaceAccount
 */
export interface CreateInterfaceAccount {
    /**
     *
     * @type {InterfaceAccountType}
     * @memberof CreateInterfaceAccount
     */
    account?: InterfaceAccountType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CreateInterfaceAccount
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CreateInterfaceAccount
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CreateInterfaceAccount interface.
 */
export declare function instanceOfCreateInterfaceAccount(value: object): boolean;
export declare function CreateInterfaceAccountFromJSON(json: any): CreateInterfaceAccount;
export declare function CreateInterfaceAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateInterfaceAccount;
export declare function CreateInterfaceAccountToJSON(value?: CreateInterfaceAccount | null): any;