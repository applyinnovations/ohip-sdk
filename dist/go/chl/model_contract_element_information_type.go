/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the ContractElementInformationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ContractElementInformationType{}

// ContractElementInformationType To hold channel account contract element detailed information.
type ContractElementInformationType struct {
	// Holds channel of the contract element.
	BookingChannelCode *string `json:"bookingChannelCode,omitempty"`
	// Holds channel type of the contract element.
	BookingChannelType *string `json:"bookingChannelType,omitempty"`
	ContractId *UniqueIDType `json:"contractId,omitempty"`
	ContractPricing *ContractPricingType `json:"contractPricing,omitempty"`
	ContractRangeInformation *ContractRangeInformationType `json:"contractRangeInformation,omitempty"`
	FeeType *ContractFeeTypeType `json:"feeType,omitempty"`
	Frequency *ContractPriceFrequencyType `json:"frequency,omitempty"`
	// Holds Note for the contract element.
	Note *string `json:"note,omitempty"`
	// Sequence identifies contract element per contract.
	Sequence *int32 `json:"sequence,omitempty"`
}

// NewContractElementInformationType instantiates a new ContractElementInformationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewContractElementInformationType() *ContractElementInformationType {
	this := ContractElementInformationType{}
	return &this
}

// NewContractElementInformationTypeWithDefaults instantiates a new ContractElementInformationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewContractElementInformationTypeWithDefaults() *ContractElementInformationType {
	this := ContractElementInformationType{}
	return &this
}

// GetBookingChannelCode returns the BookingChannelCode field value if set, zero value otherwise.
func (o *ContractElementInformationType) GetBookingChannelCode() string {
	if o == nil || IsNil(o.BookingChannelCode) {
		var ret string
		return ret
	}
	return *o.BookingChannelCode
}

// GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContractElementInformationType) GetBookingChannelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BookingChannelCode) {
		return nil, false
	}
	return o.BookingChannelCode, true
}

// HasBookingChannelCode returns a boolean if a field has been set.
func (o *ContractElementInformationType) HasBookingChannelCode() bool {
	if o != nil && !IsNil(o.BookingChannelCode) {
		return true
	}

	return false
}

// SetBookingChannelCode gets a reference to the given string and assigns it to the BookingChannelCode field.
func (o *ContractElementInformationType) SetBookingChannelCode(v string) {
	o.BookingChannelCode = &v
}

// GetBookingChannelType returns the BookingChannelType field value if set, zero value otherwise.
func (o *ContractElementInformationType) GetBookingChannelType() string {
	if o == nil || IsNil(o.BookingChannelType) {
		var ret string
		return ret
	}
	return *o.BookingChannelType
}

// GetBookingChannelTypeOk returns a tuple with the BookingChannelType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContractElementInformationType) GetBookingChannelTypeOk() (*string, bool) {
	if o == nil || IsNil(o.BookingChannelType) {
		return nil, false
	}
	return o.BookingChannelType, true
}

// HasBookingChannelType returns a boolean if a field has been set.
func (o *ContractElementInformationType) HasBookingChannelType() bool {
	if o != nil && !IsNil(o.BookingChannelType) {
		return true
	}

	return false
}

// SetBookingChannelType gets a reference to the given string and assigns it to the BookingChannelType field.
func (o *ContractElementInformationType) SetBookingChannelType(v string) {
	o.BookingChannelType = &v
}

// GetContractId returns the ContractId field value if set, zero value otherwise.
func (o *ContractElementInformationType) GetContractId() UniqueIDType {
	if o == nil || IsNil(o.ContractId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ContractId
}

// GetContractIdOk returns a tuple with the ContractId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContractElementInformationType) GetContractIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ContractId) {
		return nil, false
	}
	return o.ContractId, true
}

// HasContractId returns a boolean if a field has been set.
func (o *ContractElementInformationType) HasContractId() bool {
	if o != nil && !IsNil(o.ContractId) {
		return true
	}

	return false
}

// SetContractId gets a reference to the given UniqueIDType and assigns it to the ContractId field.
func (o *ContractElementInformationType) SetContractId(v UniqueIDType) {
	o.ContractId = &v
}

// GetContractPricing returns the ContractPricing field value if set, zero value otherwise.
func (o *ContractElementInformationType) GetContractPricing() ContractPricingType {
	if o == nil || IsNil(o.ContractPricing) {
		var ret ContractPricingType
		return ret
	}
	return *o.ContractPricing
}

// GetContractPricingOk returns a tuple with the ContractPricing field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContractElementInformationType) GetContractPricingOk() (*ContractPricingType, bool) {
	if o == nil || IsNil(o.ContractPricing) {
		return nil, false
	}
	return o.ContractPricing, true
}

// HasContractPricing returns a boolean if a field has been set.
func (o *ContractElementInformationType) HasContractPricing() bool {
	if o != nil && !IsNil(o.ContractPricing) {
		return true
	}

	return false
}

// SetContractPricing gets a reference to the given ContractPricingType and assigns it to the ContractPricing field.
func (o *ContractElementInformationType) SetContractPricing(v ContractPricingType) {
	o.ContractPricing = &v
}

// GetContractRangeInformation returns the ContractRangeInformation field value if set, zero value otherwise.
func (o *ContractElementInformationType) GetContractRangeInformation() ContractRangeInformationType {
	if o == nil || IsNil(o.ContractRangeInformation) {
		var ret ContractRangeInformationType
		return ret
	}
	return *o.ContractRangeInformation
}

// GetContractRangeInformationOk returns a tuple with the ContractRangeInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContractElementInformationType) GetContractRangeInformationOk() (*ContractRangeInformationType, bool) {
	if o == nil || IsNil(o.ContractRangeInformation) {
		return nil, false
	}
	return o.ContractRangeInformation, true
}

// HasContractRangeInformation returns a boolean if a field has been set.
func (o *ContractElementInformationType) HasContractRangeInformation() bool {
	if o != nil && !IsNil(o.ContractRangeInformation) {
		return true
	}

	return false
}

// SetContractRangeInformation gets a reference to the given ContractRangeInformationType and assigns it to the ContractRangeInformation field.
func (o *ContractElementInformationType) SetContractRangeInformation(v ContractRangeInformationType) {
	o.ContractRangeInformation = &v
}

// GetFeeType returns the FeeType field value if set, zero value otherwise.
func (o *ContractElementInformationType) GetFeeType() ContractFeeTypeType {
	if o == nil || IsNil(o.FeeType) {
		var ret ContractFeeTypeType
		return ret
	}
	return *o.FeeType
}

// GetFeeTypeOk returns a tuple with the FeeType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContractElementInformationType) GetFeeTypeOk() (*ContractFeeTypeType, bool) {
	if o == nil || IsNil(o.FeeType) {
		return nil, false
	}
	return o.FeeType, true
}

// HasFeeType returns a boolean if a field has been set.
func (o *ContractElementInformationType) HasFeeType() bool {
	if o != nil && !IsNil(o.FeeType) {
		return true
	}

	return false
}

// SetFeeType gets a reference to the given ContractFeeTypeType and assigns it to the FeeType field.
func (o *ContractElementInformationType) SetFeeType(v ContractFeeTypeType) {
	o.FeeType = &v
}

// GetFrequency returns the Frequency field value if set, zero value otherwise.
func (o *ContractElementInformationType) GetFrequency() ContractPriceFrequencyType {
	if o == nil || IsNil(o.Frequency) {
		var ret ContractPriceFrequencyType
		return ret
	}
	return *o.Frequency
}

// GetFrequencyOk returns a tuple with the Frequency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContractElementInformationType) GetFrequencyOk() (*ContractPriceFrequencyType, bool) {
	if o == nil || IsNil(o.Frequency) {
		return nil, false
	}
	return o.Frequency, true
}

// HasFrequency returns a boolean if a field has been set.
func (o *ContractElementInformationType) HasFrequency() bool {
	if o != nil && !IsNil(o.Frequency) {
		return true
	}

	return false
}

// SetFrequency gets a reference to the given ContractPriceFrequencyType and assigns it to the Frequency field.
func (o *ContractElementInformationType) SetFrequency(v ContractPriceFrequencyType) {
	o.Frequency = &v
}

// GetNote returns the Note field value if set, zero value otherwise.
func (o *ContractElementInformationType) GetNote() string {
	if o == nil || IsNil(o.Note) {
		var ret string
		return ret
	}
	return *o.Note
}

// GetNoteOk returns a tuple with the Note field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContractElementInformationType) GetNoteOk() (*string, bool) {
	if o == nil || IsNil(o.Note) {
		return nil, false
	}
	return o.Note, true
}

// HasNote returns a boolean if a field has been set.
func (o *ContractElementInformationType) HasNote() bool {
	if o != nil && !IsNil(o.Note) {
		return true
	}

	return false
}

// SetNote gets a reference to the given string and assigns it to the Note field.
func (o *ContractElementInformationType) SetNote(v string) {
	o.Note = &v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *ContractElementInformationType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContractElementInformationType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *ContractElementInformationType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *ContractElementInformationType) SetSequence(v int32) {
	o.Sequence = &v
}

func (o ContractElementInformationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ContractElementInformationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BookingChannelCode) {
		toSerialize["bookingChannelCode"] = o.BookingChannelCode
	}
	if !IsNil(o.BookingChannelType) {
		toSerialize["bookingChannelType"] = o.BookingChannelType
	}
	if !IsNil(o.ContractId) {
		toSerialize["contractId"] = o.ContractId
	}
	if !IsNil(o.ContractPricing) {
		toSerialize["contractPricing"] = o.ContractPricing
	}
	if !IsNil(o.ContractRangeInformation) {
		toSerialize["contractRangeInformation"] = o.ContractRangeInformation
	}
	if !IsNil(o.FeeType) {
		toSerialize["feeType"] = o.FeeType
	}
	if !IsNil(o.Frequency) {
		toSerialize["frequency"] = o.Frequency
	}
	if !IsNil(o.Note) {
		toSerialize["note"] = o.Note
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	return toSerialize, nil
}

type NullableContractElementInformationType struct {
	value *ContractElementInformationType
	isSet bool
}

func (v NullableContractElementInformationType) Get() *ContractElementInformationType {
	return v.value
}

func (v *NullableContractElementInformationType) Set(val *ContractElementInformationType) {
	v.value = val
	v.isSet = true
}

func (v NullableContractElementInformationType) IsSet() bool {
	return v.isSet
}

func (v *NullableContractElementInformationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableContractElementInformationType(val *ContractElementInformationType) *NullableContractElementInformationType {
	return &NullableContractElementInformationType{value: val, isSet: true}
}

func (v NullableContractElementInformationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableContractElementInformationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


