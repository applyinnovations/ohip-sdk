/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the ChannelAccountContractCopyDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChannelAccountContractCopyDetailsType{}

// ChannelAccountContractCopyDetailsType Channel account contract type to hold account and contract details to copy.
type ChannelAccountContractCopyDetailsType struct {
	// Holds begin date of the new contract.
	BeginDate *string `json:"beginDate,omitempty"`
	// Holds contract No of the new contract to create.
	ContractNo *string `json:"contractNo,omitempty"`
	// Holds end date of the new contract.
	EndDate *string `json:"endDate,omitempty"`
	// Holds Note for the new contract.
	Note *string `json:"note,omitempty"`
	// Flag to retain contract No or generate new one.
	RetainContractNo *bool `json:"retainContractNo,omitempty"`
	SourceContractId *UniqueIDType `json:"sourceContractId,omitempty"`
	SourceProfileId *UniqueIDType `json:"sourceProfileId,omitempty"`
}

// NewChannelAccountContractCopyDetailsType instantiates a new ChannelAccountContractCopyDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelAccountContractCopyDetailsType() *ChannelAccountContractCopyDetailsType {
	this := ChannelAccountContractCopyDetailsType{}
	return &this
}

// NewChannelAccountContractCopyDetailsTypeWithDefaults instantiates a new ChannelAccountContractCopyDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelAccountContractCopyDetailsTypeWithDefaults() *ChannelAccountContractCopyDetailsType {
	this := ChannelAccountContractCopyDetailsType{}
	return &this
}

// GetBeginDate returns the BeginDate field value if set, zero value otherwise.
func (o *ChannelAccountContractCopyDetailsType) GetBeginDate() string {
	if o == nil || IsNil(o.BeginDate) {
		var ret string
		return ret
	}
	return *o.BeginDate
}

// GetBeginDateOk returns a tuple with the BeginDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelAccountContractCopyDetailsType) GetBeginDateOk() (*string, bool) {
	if o == nil || IsNil(o.BeginDate) {
		return nil, false
	}
	return o.BeginDate, true
}

// HasBeginDate returns a boolean if a field has been set.
func (o *ChannelAccountContractCopyDetailsType) HasBeginDate() bool {
	if o != nil && !IsNil(o.BeginDate) {
		return true
	}

	return false
}

// SetBeginDate gets a reference to the given string and assigns it to the BeginDate field.
func (o *ChannelAccountContractCopyDetailsType) SetBeginDate(v string) {
	o.BeginDate = &v
}

// GetContractNo returns the ContractNo field value if set, zero value otherwise.
func (o *ChannelAccountContractCopyDetailsType) GetContractNo() string {
	if o == nil || IsNil(o.ContractNo) {
		var ret string
		return ret
	}
	return *o.ContractNo
}

// GetContractNoOk returns a tuple with the ContractNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelAccountContractCopyDetailsType) GetContractNoOk() (*string, bool) {
	if o == nil || IsNil(o.ContractNo) {
		return nil, false
	}
	return o.ContractNo, true
}

// HasContractNo returns a boolean if a field has been set.
func (o *ChannelAccountContractCopyDetailsType) HasContractNo() bool {
	if o != nil && !IsNil(o.ContractNo) {
		return true
	}

	return false
}

// SetContractNo gets a reference to the given string and assigns it to the ContractNo field.
func (o *ChannelAccountContractCopyDetailsType) SetContractNo(v string) {
	o.ContractNo = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *ChannelAccountContractCopyDetailsType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelAccountContractCopyDetailsType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *ChannelAccountContractCopyDetailsType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *ChannelAccountContractCopyDetailsType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetNote returns the Note field value if set, zero value otherwise.
func (o *ChannelAccountContractCopyDetailsType) GetNote() string {
	if o == nil || IsNil(o.Note) {
		var ret string
		return ret
	}
	return *o.Note
}

// GetNoteOk returns a tuple with the Note field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelAccountContractCopyDetailsType) GetNoteOk() (*string, bool) {
	if o == nil || IsNil(o.Note) {
		return nil, false
	}
	return o.Note, true
}

// HasNote returns a boolean if a field has been set.
func (o *ChannelAccountContractCopyDetailsType) HasNote() bool {
	if o != nil && !IsNil(o.Note) {
		return true
	}

	return false
}

// SetNote gets a reference to the given string and assigns it to the Note field.
func (o *ChannelAccountContractCopyDetailsType) SetNote(v string) {
	o.Note = &v
}

// GetRetainContractNo returns the RetainContractNo field value if set, zero value otherwise.
func (o *ChannelAccountContractCopyDetailsType) GetRetainContractNo() bool {
	if o == nil || IsNil(o.RetainContractNo) {
		var ret bool
		return ret
	}
	return *o.RetainContractNo
}

// GetRetainContractNoOk returns a tuple with the RetainContractNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelAccountContractCopyDetailsType) GetRetainContractNoOk() (*bool, bool) {
	if o == nil || IsNil(o.RetainContractNo) {
		return nil, false
	}
	return o.RetainContractNo, true
}

// HasRetainContractNo returns a boolean if a field has been set.
func (o *ChannelAccountContractCopyDetailsType) HasRetainContractNo() bool {
	if o != nil && !IsNil(o.RetainContractNo) {
		return true
	}

	return false
}

// SetRetainContractNo gets a reference to the given bool and assigns it to the RetainContractNo field.
func (o *ChannelAccountContractCopyDetailsType) SetRetainContractNo(v bool) {
	o.RetainContractNo = &v
}

// GetSourceContractId returns the SourceContractId field value if set, zero value otherwise.
func (o *ChannelAccountContractCopyDetailsType) GetSourceContractId() UniqueIDType {
	if o == nil || IsNil(o.SourceContractId) {
		var ret UniqueIDType
		return ret
	}
	return *o.SourceContractId
}

// GetSourceContractIdOk returns a tuple with the SourceContractId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelAccountContractCopyDetailsType) GetSourceContractIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.SourceContractId) {
		return nil, false
	}
	return o.SourceContractId, true
}

// HasSourceContractId returns a boolean if a field has been set.
func (o *ChannelAccountContractCopyDetailsType) HasSourceContractId() bool {
	if o != nil && !IsNil(o.SourceContractId) {
		return true
	}

	return false
}

// SetSourceContractId gets a reference to the given UniqueIDType and assigns it to the SourceContractId field.
func (o *ChannelAccountContractCopyDetailsType) SetSourceContractId(v UniqueIDType) {
	o.SourceContractId = &v
}

// GetSourceProfileId returns the SourceProfileId field value if set, zero value otherwise.
func (o *ChannelAccountContractCopyDetailsType) GetSourceProfileId() UniqueIDType {
	if o == nil || IsNil(o.SourceProfileId) {
		var ret UniqueIDType
		return ret
	}
	return *o.SourceProfileId
}

// GetSourceProfileIdOk returns a tuple with the SourceProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChannelAccountContractCopyDetailsType) GetSourceProfileIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.SourceProfileId) {
		return nil, false
	}
	return o.SourceProfileId, true
}

// HasSourceProfileId returns a boolean if a field has been set.
func (o *ChannelAccountContractCopyDetailsType) HasSourceProfileId() bool {
	if o != nil && !IsNil(o.SourceProfileId) {
		return true
	}

	return false
}

// SetSourceProfileId gets a reference to the given UniqueIDType and assigns it to the SourceProfileId field.
func (o *ChannelAccountContractCopyDetailsType) SetSourceProfileId(v UniqueIDType) {
	o.SourceProfileId = &v
}

func (o ChannelAccountContractCopyDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChannelAccountContractCopyDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BeginDate) {
		toSerialize["beginDate"] = o.BeginDate
	}
	if !IsNil(o.ContractNo) {
		toSerialize["contractNo"] = o.ContractNo
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.Note) {
		toSerialize["note"] = o.Note
	}
	if !IsNil(o.RetainContractNo) {
		toSerialize["retainContractNo"] = o.RetainContractNo
	}
	if !IsNil(o.SourceContractId) {
		toSerialize["sourceContractId"] = o.SourceContractId
	}
	if !IsNil(o.SourceProfileId) {
		toSerialize["sourceProfileId"] = o.SourceProfileId
	}
	return toSerialize, nil
}

type NullableChannelAccountContractCopyDetailsType struct {
	value *ChannelAccountContractCopyDetailsType
	isSet bool
}

func (v NullableChannelAccountContractCopyDetailsType) Get() *ChannelAccountContractCopyDetailsType {
	return v.value
}

func (v *NullableChannelAccountContractCopyDetailsType) Set(val *ChannelAccountContractCopyDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelAccountContractCopyDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelAccountContractCopyDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelAccountContractCopyDetailsType(val *ChannelAccountContractCopyDetailsType) *NullableChannelAccountContractCopyDetailsType {
	return &NullableChannelAccountContractCopyDetailsType{value: val, isSet: true}
}

func (v NullableChannelAccountContractCopyDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelAccountContractCopyDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


