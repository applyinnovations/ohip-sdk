/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the FiscalServiceType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FiscalServiceType{}

// FiscalServiceType Generate Fiscal Folio Criteria type to be used for fiscal folio generation
type FiscalServiceType struct {
	// Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected.
	FiscalTerminal *string `json:"fiscalTerminal,omitempty"`
	FolioQueueName *FolioQueueType `json:"folioQueueName,omitempty"`
	FolioSeqId *UniqueIDType `json:"folioSeqId,omitempty"`
	Instructions *FiscalFolioInstruction `json:"instructions,omitempty"`
	// Fiscal Invoicing Currency code to be used by the Fiscal Service.
	InvoiceCurrencyCode *string `json:"invoiceCurrencyCode,omitempty"`
}

// NewFiscalServiceType instantiates a new FiscalServiceType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFiscalServiceType() *FiscalServiceType {
	this := FiscalServiceType{}
	return &this
}

// NewFiscalServiceTypeWithDefaults instantiates a new FiscalServiceType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFiscalServiceTypeWithDefaults() *FiscalServiceType {
	this := FiscalServiceType{}
	return &this
}

// GetFiscalTerminal returns the FiscalTerminal field value if set, zero value otherwise.
func (o *FiscalServiceType) GetFiscalTerminal() string {
	if o == nil || IsNil(o.FiscalTerminal) {
		var ret string
		return ret
	}
	return *o.FiscalTerminal
}

// GetFiscalTerminalOk returns a tuple with the FiscalTerminal field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalServiceType) GetFiscalTerminalOk() (*string, bool) {
	if o == nil || IsNil(o.FiscalTerminal) {
		return nil, false
	}
	return o.FiscalTerminal, true
}

// HasFiscalTerminal returns a boolean if a field has been set.
func (o *FiscalServiceType) HasFiscalTerminal() bool {
	if o != nil && !IsNil(o.FiscalTerminal) {
		return true
	}

	return false
}

// SetFiscalTerminal gets a reference to the given string and assigns it to the FiscalTerminal field.
func (o *FiscalServiceType) SetFiscalTerminal(v string) {
	o.FiscalTerminal = &v
}

// GetFolioQueueName returns the FolioQueueName field value if set, zero value otherwise.
func (o *FiscalServiceType) GetFolioQueueName() FolioQueueType {
	if o == nil || IsNil(o.FolioQueueName) {
		var ret FolioQueueType
		return ret
	}
	return *o.FolioQueueName
}

// GetFolioQueueNameOk returns a tuple with the FolioQueueName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalServiceType) GetFolioQueueNameOk() (*FolioQueueType, bool) {
	if o == nil || IsNil(o.FolioQueueName) {
		return nil, false
	}
	return o.FolioQueueName, true
}

// HasFolioQueueName returns a boolean if a field has been set.
func (o *FiscalServiceType) HasFolioQueueName() bool {
	if o != nil && !IsNil(o.FolioQueueName) {
		return true
	}

	return false
}

// SetFolioQueueName gets a reference to the given FolioQueueType and assigns it to the FolioQueueName field.
func (o *FiscalServiceType) SetFolioQueueName(v FolioQueueType) {
	o.FolioQueueName = &v
}

// GetFolioSeqId returns the FolioSeqId field value if set, zero value otherwise.
func (o *FiscalServiceType) GetFolioSeqId() UniqueIDType {
	if o == nil || IsNil(o.FolioSeqId) {
		var ret UniqueIDType
		return ret
	}
	return *o.FolioSeqId
}

// GetFolioSeqIdOk returns a tuple with the FolioSeqId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalServiceType) GetFolioSeqIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.FolioSeqId) {
		return nil, false
	}
	return o.FolioSeqId, true
}

// HasFolioSeqId returns a boolean if a field has been set.
func (o *FiscalServiceType) HasFolioSeqId() bool {
	if o != nil && !IsNil(o.FolioSeqId) {
		return true
	}

	return false
}

// SetFolioSeqId gets a reference to the given UniqueIDType and assigns it to the FolioSeqId field.
func (o *FiscalServiceType) SetFolioSeqId(v UniqueIDType) {
	o.FolioSeqId = &v
}

// GetInstructions returns the Instructions field value if set, zero value otherwise.
func (o *FiscalServiceType) GetInstructions() FiscalFolioInstruction {
	if o == nil || IsNil(o.Instructions) {
		var ret FiscalFolioInstruction
		return ret
	}
	return *o.Instructions
}

// GetInstructionsOk returns a tuple with the Instructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalServiceType) GetInstructionsOk() (*FiscalFolioInstruction, bool) {
	if o == nil || IsNil(o.Instructions) {
		return nil, false
	}
	return o.Instructions, true
}

// HasInstructions returns a boolean if a field has been set.
func (o *FiscalServiceType) HasInstructions() bool {
	if o != nil && !IsNil(o.Instructions) {
		return true
	}

	return false
}

// SetInstructions gets a reference to the given FiscalFolioInstruction and assigns it to the Instructions field.
func (o *FiscalServiceType) SetInstructions(v FiscalFolioInstruction) {
	o.Instructions = &v
}

// GetInvoiceCurrencyCode returns the InvoiceCurrencyCode field value if set, zero value otherwise.
func (o *FiscalServiceType) GetInvoiceCurrencyCode() string {
	if o == nil || IsNil(o.InvoiceCurrencyCode) {
		var ret string
		return ret
	}
	return *o.InvoiceCurrencyCode
}

// GetInvoiceCurrencyCodeOk returns a tuple with the InvoiceCurrencyCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FiscalServiceType) GetInvoiceCurrencyCodeOk() (*string, bool) {
	if o == nil || IsNil(o.InvoiceCurrencyCode) {
		return nil, false
	}
	return o.InvoiceCurrencyCode, true
}

// HasInvoiceCurrencyCode returns a boolean if a field has been set.
func (o *FiscalServiceType) HasInvoiceCurrencyCode() bool {
	if o != nil && !IsNil(o.InvoiceCurrencyCode) {
		return true
	}

	return false
}

// SetInvoiceCurrencyCode gets a reference to the given string and assigns it to the InvoiceCurrencyCode field.
func (o *FiscalServiceType) SetInvoiceCurrencyCode(v string) {
	o.InvoiceCurrencyCode = &v
}

func (o FiscalServiceType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FiscalServiceType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FiscalTerminal) {
		toSerialize["fiscalTerminal"] = o.FiscalTerminal
	}
	if !IsNil(o.FolioQueueName) {
		toSerialize["folioQueueName"] = o.FolioQueueName
	}
	if !IsNil(o.FolioSeqId) {
		toSerialize["folioSeqId"] = o.FolioSeqId
	}
	if !IsNil(o.Instructions) {
		toSerialize["instructions"] = o.Instructions
	}
	if !IsNil(o.InvoiceCurrencyCode) {
		toSerialize["invoiceCurrencyCode"] = o.InvoiceCurrencyCode
	}
	return toSerialize, nil
}

type NullableFiscalServiceType struct {
	value *FiscalServiceType
	isSet bool
}

func (v NullableFiscalServiceType) Get() *FiscalServiceType {
	return v.value
}

func (v *NullableFiscalServiceType) Set(val *FiscalServiceType) {
	v.value = val
	v.isSet = true
}

func (v NullableFiscalServiceType) IsSet() bool {
	return v.isSet
}

func (v *NullableFiscalServiceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFiscalServiceType(val *FiscalServiceType) *NullableFiscalServiceType {
	return &NullableFiscalServiceType{value: val, isSet: true}
}

func (v NullableFiscalServiceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFiscalServiceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


