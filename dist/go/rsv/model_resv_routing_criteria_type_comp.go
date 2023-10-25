/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the ResvRoutingCriteriaTypeComp type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResvRoutingCriteriaTypeComp{}

// ResvRoutingCriteriaTypeComp Comp Accounting Routing Info
type ResvRoutingCriteriaTypeComp struct {
	CompAccountingInfo *CompAccountingType `json:"compAccountingInfo,omitempty"`
	CompRequestInfo *CompRoutingRequestType `json:"compRequestInfo,omitempty"`
	FolioWindowNo *int32 `json:"folioWindowNo,omitempty"`
	// Set of routing instructions associated to this routing type.
	Instructions []RoutingInstructionType `json:"instructions,omitempty"`
	PayeeInfo *PayeeInfoType `json:"payeeInfo,omitempty"`
}

// NewResvRoutingCriteriaTypeComp instantiates a new ResvRoutingCriteriaTypeComp object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResvRoutingCriteriaTypeComp() *ResvRoutingCriteriaTypeComp {
	this := ResvRoutingCriteriaTypeComp{}
	return &this
}

// NewResvRoutingCriteriaTypeCompWithDefaults instantiates a new ResvRoutingCriteriaTypeComp object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResvRoutingCriteriaTypeCompWithDefaults() *ResvRoutingCriteriaTypeComp {
	this := ResvRoutingCriteriaTypeComp{}
	return &this
}

// GetCompAccountingInfo returns the CompAccountingInfo field value if set, zero value otherwise.
func (o *ResvRoutingCriteriaTypeComp) GetCompAccountingInfo() CompAccountingType {
	if o == nil || IsNil(o.CompAccountingInfo) {
		var ret CompAccountingType
		return ret
	}
	return *o.CompAccountingInfo
}

// GetCompAccountingInfoOk returns a tuple with the CompAccountingInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvRoutingCriteriaTypeComp) GetCompAccountingInfoOk() (*CompAccountingType, bool) {
	if o == nil || IsNil(o.CompAccountingInfo) {
		return nil, false
	}
	return o.CompAccountingInfo, true
}

// HasCompAccountingInfo returns a boolean if a field has been set.
func (o *ResvRoutingCriteriaTypeComp) HasCompAccountingInfo() bool {
	if o != nil && !IsNil(o.CompAccountingInfo) {
		return true
	}

	return false
}

// SetCompAccountingInfo gets a reference to the given CompAccountingType and assigns it to the CompAccountingInfo field.
func (o *ResvRoutingCriteriaTypeComp) SetCompAccountingInfo(v CompAccountingType) {
	o.CompAccountingInfo = &v
}

// GetCompRequestInfo returns the CompRequestInfo field value if set, zero value otherwise.
func (o *ResvRoutingCriteriaTypeComp) GetCompRequestInfo() CompRoutingRequestType {
	if o == nil || IsNil(o.CompRequestInfo) {
		var ret CompRoutingRequestType
		return ret
	}
	return *o.CompRequestInfo
}

// GetCompRequestInfoOk returns a tuple with the CompRequestInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvRoutingCriteriaTypeComp) GetCompRequestInfoOk() (*CompRoutingRequestType, bool) {
	if o == nil || IsNil(o.CompRequestInfo) {
		return nil, false
	}
	return o.CompRequestInfo, true
}

// HasCompRequestInfo returns a boolean if a field has been set.
func (o *ResvRoutingCriteriaTypeComp) HasCompRequestInfo() bool {
	if o != nil && !IsNil(o.CompRequestInfo) {
		return true
	}

	return false
}

// SetCompRequestInfo gets a reference to the given CompRoutingRequestType and assigns it to the CompRequestInfo field.
func (o *ResvRoutingCriteriaTypeComp) SetCompRequestInfo(v CompRoutingRequestType) {
	o.CompRequestInfo = &v
}

// GetFolioWindowNo returns the FolioWindowNo field value if set, zero value otherwise.
func (o *ResvRoutingCriteriaTypeComp) GetFolioWindowNo() int32 {
	if o == nil || IsNil(o.FolioWindowNo) {
		var ret int32
		return ret
	}
	return *o.FolioWindowNo
}

// GetFolioWindowNoOk returns a tuple with the FolioWindowNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvRoutingCriteriaTypeComp) GetFolioWindowNoOk() (*int32, bool) {
	if o == nil || IsNil(o.FolioWindowNo) {
		return nil, false
	}
	return o.FolioWindowNo, true
}

// HasFolioWindowNo returns a boolean if a field has been set.
func (o *ResvRoutingCriteriaTypeComp) HasFolioWindowNo() bool {
	if o != nil && !IsNil(o.FolioWindowNo) {
		return true
	}

	return false
}

// SetFolioWindowNo gets a reference to the given int32 and assigns it to the FolioWindowNo field.
func (o *ResvRoutingCriteriaTypeComp) SetFolioWindowNo(v int32) {
	o.FolioWindowNo = &v
}

// GetInstructions returns the Instructions field value if set, zero value otherwise.
func (o *ResvRoutingCriteriaTypeComp) GetInstructions() []RoutingInstructionType {
	if o == nil || IsNil(o.Instructions) {
		var ret []RoutingInstructionType
		return ret
	}
	return o.Instructions
}

// GetInstructionsOk returns a tuple with the Instructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvRoutingCriteriaTypeComp) GetInstructionsOk() ([]RoutingInstructionType, bool) {
	if o == nil || IsNil(o.Instructions) {
		return nil, false
	}
	return o.Instructions, true
}

// HasInstructions returns a boolean if a field has been set.
func (o *ResvRoutingCriteriaTypeComp) HasInstructions() bool {
	if o != nil && !IsNil(o.Instructions) {
		return true
	}

	return false
}

// SetInstructions gets a reference to the given []RoutingInstructionType and assigns it to the Instructions field.
func (o *ResvRoutingCriteriaTypeComp) SetInstructions(v []RoutingInstructionType) {
	o.Instructions = v
}

// GetPayeeInfo returns the PayeeInfo field value if set, zero value otherwise.
func (o *ResvRoutingCriteriaTypeComp) GetPayeeInfo() PayeeInfoType {
	if o == nil || IsNil(o.PayeeInfo) {
		var ret PayeeInfoType
		return ret
	}
	return *o.PayeeInfo
}

// GetPayeeInfoOk returns a tuple with the PayeeInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvRoutingCriteriaTypeComp) GetPayeeInfoOk() (*PayeeInfoType, bool) {
	if o == nil || IsNil(o.PayeeInfo) {
		return nil, false
	}
	return o.PayeeInfo, true
}

// HasPayeeInfo returns a boolean if a field has been set.
func (o *ResvRoutingCriteriaTypeComp) HasPayeeInfo() bool {
	if o != nil && !IsNil(o.PayeeInfo) {
		return true
	}

	return false
}

// SetPayeeInfo gets a reference to the given PayeeInfoType and assigns it to the PayeeInfo field.
func (o *ResvRoutingCriteriaTypeComp) SetPayeeInfo(v PayeeInfoType) {
	o.PayeeInfo = &v
}

func (o ResvRoutingCriteriaTypeComp) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResvRoutingCriteriaTypeComp) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CompAccountingInfo) {
		toSerialize["compAccountingInfo"] = o.CompAccountingInfo
	}
	if !IsNil(o.CompRequestInfo) {
		toSerialize["compRequestInfo"] = o.CompRequestInfo
	}
	if !IsNil(o.FolioWindowNo) {
		toSerialize["folioWindowNo"] = o.FolioWindowNo
	}
	if !IsNil(o.Instructions) {
		toSerialize["instructions"] = o.Instructions
	}
	if !IsNil(o.PayeeInfo) {
		toSerialize["payeeInfo"] = o.PayeeInfo
	}
	return toSerialize, nil
}

type NullableResvRoutingCriteriaTypeComp struct {
	value *ResvRoutingCriteriaTypeComp
	isSet bool
}

func (v NullableResvRoutingCriteriaTypeComp) Get() *ResvRoutingCriteriaTypeComp {
	return v.value
}

func (v *NullableResvRoutingCriteriaTypeComp) Set(val *ResvRoutingCriteriaTypeComp) {
	v.value = val
	v.isSet = true
}

func (v NullableResvRoutingCriteriaTypeComp) IsSet() bool {
	return v.isSet
}

func (v *NullableResvRoutingCriteriaTypeComp) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResvRoutingCriteriaTypeComp(val *ResvRoutingCriteriaTypeComp) *NullableResvRoutingCriteriaTypeComp {
	return &NullableResvRoutingCriteriaTypeComp{value: val, isSet: true}
}

func (v NullableResvRoutingCriteriaTypeComp) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResvRoutingCriteriaTypeComp) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


