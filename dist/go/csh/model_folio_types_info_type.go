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

// checks if the FolioTypesInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FolioTypesInfoType{}

// FolioTypesInfoType Folio Types details.
type FolioTypesInfoType struct {
	// Indicates folio to be use for compress bills.
	Compress *bool `json:"compress,omitempty"`
	// Indicates folio type can be used for Credit bills.
	Credit *bool `json:"credit,omitempty"`
	// Fiscal Folio indicator.
	Fiscal *bool `json:"fiscal,omitempty"`
	// Folio Type.
	FolioType *string `json:"folioType,omitempty"`
	// Adding this flag at folio type level would decide to send fiscal folio (generate payload) or not.
	SendFiscalFolio *bool `json:"sendFiscalFolio,omitempty"`
}

// NewFolioTypesInfoType instantiates a new FolioTypesInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFolioTypesInfoType() *FolioTypesInfoType {
	this := FolioTypesInfoType{}
	return &this
}

// NewFolioTypesInfoTypeWithDefaults instantiates a new FolioTypesInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFolioTypesInfoTypeWithDefaults() *FolioTypesInfoType {
	this := FolioTypesInfoType{}
	return &this
}

// GetCompress returns the Compress field value if set, zero value otherwise.
func (o *FolioTypesInfoType) GetCompress() bool {
	if o == nil || IsNil(o.Compress) {
		var ret bool
		return ret
	}
	return *o.Compress
}

// GetCompressOk returns a tuple with the Compress field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTypesInfoType) GetCompressOk() (*bool, bool) {
	if o == nil || IsNil(o.Compress) {
		return nil, false
	}
	return o.Compress, true
}

// HasCompress returns a boolean if a field has been set.
func (o *FolioTypesInfoType) HasCompress() bool {
	if o != nil && !IsNil(o.Compress) {
		return true
	}

	return false
}

// SetCompress gets a reference to the given bool and assigns it to the Compress field.
func (o *FolioTypesInfoType) SetCompress(v bool) {
	o.Compress = &v
}

// GetCredit returns the Credit field value if set, zero value otherwise.
func (o *FolioTypesInfoType) GetCredit() bool {
	if o == nil || IsNil(o.Credit) {
		var ret bool
		return ret
	}
	return *o.Credit
}

// GetCreditOk returns a tuple with the Credit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTypesInfoType) GetCreditOk() (*bool, bool) {
	if o == nil || IsNil(o.Credit) {
		return nil, false
	}
	return o.Credit, true
}

// HasCredit returns a boolean if a field has been set.
func (o *FolioTypesInfoType) HasCredit() bool {
	if o != nil && !IsNil(o.Credit) {
		return true
	}

	return false
}

// SetCredit gets a reference to the given bool and assigns it to the Credit field.
func (o *FolioTypesInfoType) SetCredit(v bool) {
	o.Credit = &v
}

// GetFiscal returns the Fiscal field value if set, zero value otherwise.
func (o *FolioTypesInfoType) GetFiscal() bool {
	if o == nil || IsNil(o.Fiscal) {
		var ret bool
		return ret
	}
	return *o.Fiscal
}

// GetFiscalOk returns a tuple with the Fiscal field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTypesInfoType) GetFiscalOk() (*bool, bool) {
	if o == nil || IsNil(o.Fiscal) {
		return nil, false
	}
	return o.Fiscal, true
}

// HasFiscal returns a boolean if a field has been set.
func (o *FolioTypesInfoType) HasFiscal() bool {
	if o != nil && !IsNil(o.Fiscal) {
		return true
	}

	return false
}

// SetFiscal gets a reference to the given bool and assigns it to the Fiscal field.
func (o *FolioTypesInfoType) SetFiscal(v bool) {
	o.Fiscal = &v
}

// GetFolioType returns the FolioType field value if set, zero value otherwise.
func (o *FolioTypesInfoType) GetFolioType() string {
	if o == nil || IsNil(o.FolioType) {
		var ret string
		return ret
	}
	return *o.FolioType
}

// GetFolioTypeOk returns a tuple with the FolioType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTypesInfoType) GetFolioTypeOk() (*string, bool) {
	if o == nil || IsNil(o.FolioType) {
		return nil, false
	}
	return o.FolioType, true
}

// HasFolioType returns a boolean if a field has been set.
func (o *FolioTypesInfoType) HasFolioType() bool {
	if o != nil && !IsNil(o.FolioType) {
		return true
	}

	return false
}

// SetFolioType gets a reference to the given string and assigns it to the FolioType field.
func (o *FolioTypesInfoType) SetFolioType(v string) {
	o.FolioType = &v
}

// GetSendFiscalFolio returns the SendFiscalFolio field value if set, zero value otherwise.
func (o *FolioTypesInfoType) GetSendFiscalFolio() bool {
	if o == nil || IsNil(o.SendFiscalFolio) {
		var ret bool
		return ret
	}
	return *o.SendFiscalFolio
}

// GetSendFiscalFolioOk returns a tuple with the SendFiscalFolio field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTypesInfoType) GetSendFiscalFolioOk() (*bool, bool) {
	if o == nil || IsNil(o.SendFiscalFolio) {
		return nil, false
	}
	return o.SendFiscalFolio, true
}

// HasSendFiscalFolio returns a boolean if a field has been set.
func (o *FolioTypesInfoType) HasSendFiscalFolio() bool {
	if o != nil && !IsNil(o.SendFiscalFolio) {
		return true
	}

	return false
}

// SetSendFiscalFolio gets a reference to the given bool and assigns it to the SendFiscalFolio field.
func (o *FolioTypesInfoType) SetSendFiscalFolio(v bool) {
	o.SendFiscalFolio = &v
}

func (o FolioTypesInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FolioTypesInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Compress) {
		toSerialize["compress"] = o.Compress
	}
	if !IsNil(o.Credit) {
		toSerialize["credit"] = o.Credit
	}
	if !IsNil(o.Fiscal) {
		toSerialize["fiscal"] = o.Fiscal
	}
	if !IsNil(o.FolioType) {
		toSerialize["folioType"] = o.FolioType
	}
	if !IsNil(o.SendFiscalFolio) {
		toSerialize["sendFiscalFolio"] = o.SendFiscalFolio
	}
	return toSerialize, nil
}

type NullableFolioTypesInfoType struct {
	value *FolioTypesInfoType
	isSet bool
}

func (v NullableFolioTypesInfoType) Get() *FolioTypesInfoType {
	return v.value
}

func (v *NullableFolioTypesInfoType) Set(val *FolioTypesInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableFolioTypesInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableFolioTypesInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFolioTypesInfoType(val *FolioTypesInfoType) *NullableFolioTypesInfoType {
	return &NullableFolioTypesInfoType{value: val, isSet: true}
}

func (v NullableFolioTypesInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFolioTypesInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


