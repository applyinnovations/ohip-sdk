/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the RoutingInstructionsToChangeCriteriaComp type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoutingInstructionsToChangeCriteriaComp{}

// RoutingInstructionsToChangeCriteriaComp Comp Accounting Routing Info
type RoutingInstructionsToChangeCriteriaComp struct {
	CompAccountingInfo *CompAccountingType `json:"compAccountingInfo,omitempty"`
	CompRequestInfo *CompRoutingRequestType `json:"compRequestInfo,omitempty"`
	FolioWindowNo *int32 `json:"folioWindowNo,omitempty"`
	// Set of routing instructions associated to this routing type.
	Instructions []RoutingInstructionType `json:"instructions,omitempty"`
	PayeeInfo *PayeeInfoType `json:"payeeInfo,omitempty"`
}

// NewRoutingInstructionsToChangeCriteriaComp instantiates a new RoutingInstructionsToChangeCriteriaComp object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoutingInstructionsToChangeCriteriaComp() *RoutingInstructionsToChangeCriteriaComp {
	this := RoutingInstructionsToChangeCriteriaComp{}
	return &this
}

// NewRoutingInstructionsToChangeCriteriaCompWithDefaults instantiates a new RoutingInstructionsToChangeCriteriaComp object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoutingInstructionsToChangeCriteriaCompWithDefaults() *RoutingInstructionsToChangeCriteriaComp {
	this := RoutingInstructionsToChangeCriteriaComp{}
	return &this
}

// GetCompAccountingInfo returns the CompAccountingInfo field value if set, zero value otherwise.
func (o *RoutingInstructionsToChangeCriteriaComp) GetCompAccountingInfo() CompAccountingType {
	if o == nil || IsNil(o.CompAccountingInfo) {
		var ret CompAccountingType
		return ret
	}
	return *o.CompAccountingInfo
}

// GetCompAccountingInfoOk returns a tuple with the CompAccountingInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionsToChangeCriteriaComp) GetCompAccountingInfoOk() (*CompAccountingType, bool) {
	if o == nil || IsNil(o.CompAccountingInfo) {
		return nil, false
	}
	return o.CompAccountingInfo, true
}

// HasCompAccountingInfo returns a boolean if a field has been set.
func (o *RoutingInstructionsToChangeCriteriaComp) HasCompAccountingInfo() bool {
	if o != nil && !IsNil(o.CompAccountingInfo) {
		return true
	}

	return false
}

// SetCompAccountingInfo gets a reference to the given CompAccountingType and assigns it to the CompAccountingInfo field.
func (o *RoutingInstructionsToChangeCriteriaComp) SetCompAccountingInfo(v CompAccountingType) {
	o.CompAccountingInfo = &v
}

// GetCompRequestInfo returns the CompRequestInfo field value if set, zero value otherwise.
func (o *RoutingInstructionsToChangeCriteriaComp) GetCompRequestInfo() CompRoutingRequestType {
	if o == nil || IsNil(o.CompRequestInfo) {
		var ret CompRoutingRequestType
		return ret
	}
	return *o.CompRequestInfo
}

// GetCompRequestInfoOk returns a tuple with the CompRequestInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionsToChangeCriteriaComp) GetCompRequestInfoOk() (*CompRoutingRequestType, bool) {
	if o == nil || IsNil(o.CompRequestInfo) {
		return nil, false
	}
	return o.CompRequestInfo, true
}

// HasCompRequestInfo returns a boolean if a field has been set.
func (o *RoutingInstructionsToChangeCriteriaComp) HasCompRequestInfo() bool {
	if o != nil && !IsNil(o.CompRequestInfo) {
		return true
	}

	return false
}

// SetCompRequestInfo gets a reference to the given CompRoutingRequestType and assigns it to the CompRequestInfo field.
func (o *RoutingInstructionsToChangeCriteriaComp) SetCompRequestInfo(v CompRoutingRequestType) {
	o.CompRequestInfo = &v
}

// GetFolioWindowNo returns the FolioWindowNo field value if set, zero value otherwise.
func (o *RoutingInstructionsToChangeCriteriaComp) GetFolioWindowNo() int32 {
	if o == nil || IsNil(o.FolioWindowNo) {
		var ret int32
		return ret
	}
	return *o.FolioWindowNo
}

// GetFolioWindowNoOk returns a tuple with the FolioWindowNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionsToChangeCriteriaComp) GetFolioWindowNoOk() (*int32, bool) {
	if o == nil || IsNil(o.FolioWindowNo) {
		return nil, false
	}
	return o.FolioWindowNo, true
}

// HasFolioWindowNo returns a boolean if a field has been set.
func (o *RoutingInstructionsToChangeCriteriaComp) HasFolioWindowNo() bool {
	if o != nil && !IsNil(o.FolioWindowNo) {
		return true
	}

	return false
}

// SetFolioWindowNo gets a reference to the given int32 and assigns it to the FolioWindowNo field.
func (o *RoutingInstructionsToChangeCriteriaComp) SetFolioWindowNo(v int32) {
	o.FolioWindowNo = &v
}

// GetInstructions returns the Instructions field value if set, zero value otherwise.
func (o *RoutingInstructionsToChangeCriteriaComp) GetInstructions() []RoutingInstructionType {
	if o == nil || IsNil(o.Instructions) {
		var ret []RoutingInstructionType
		return ret
	}
	return o.Instructions
}

// GetInstructionsOk returns a tuple with the Instructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionsToChangeCriteriaComp) GetInstructionsOk() ([]RoutingInstructionType, bool) {
	if o == nil || IsNil(o.Instructions) {
		return nil, false
	}
	return o.Instructions, true
}

// HasInstructions returns a boolean if a field has been set.
func (o *RoutingInstructionsToChangeCriteriaComp) HasInstructions() bool {
	if o != nil && !IsNil(o.Instructions) {
		return true
	}

	return false
}

// SetInstructions gets a reference to the given []RoutingInstructionType and assigns it to the Instructions field.
func (o *RoutingInstructionsToChangeCriteriaComp) SetInstructions(v []RoutingInstructionType) {
	o.Instructions = v
}

// GetPayeeInfo returns the PayeeInfo field value if set, zero value otherwise.
func (o *RoutingInstructionsToChangeCriteriaComp) GetPayeeInfo() PayeeInfoType {
	if o == nil || IsNil(o.PayeeInfo) {
		var ret PayeeInfoType
		return ret
	}
	return *o.PayeeInfo
}

// GetPayeeInfoOk returns a tuple with the PayeeInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutingInstructionsToChangeCriteriaComp) GetPayeeInfoOk() (*PayeeInfoType, bool) {
	if o == nil || IsNil(o.PayeeInfo) {
		return nil, false
	}
	return o.PayeeInfo, true
}

// HasPayeeInfo returns a boolean if a field has been set.
func (o *RoutingInstructionsToChangeCriteriaComp) HasPayeeInfo() bool {
	if o != nil && !IsNil(o.PayeeInfo) {
		return true
	}

	return false
}

// SetPayeeInfo gets a reference to the given PayeeInfoType and assigns it to the PayeeInfo field.
func (o *RoutingInstructionsToChangeCriteriaComp) SetPayeeInfo(v PayeeInfoType) {
	o.PayeeInfo = &v
}

func (o RoutingInstructionsToChangeCriteriaComp) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoutingInstructionsToChangeCriteriaComp) ToMap() (map[string]interface{}, error) {
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

type NullableRoutingInstructionsToChangeCriteriaComp struct {
	value *RoutingInstructionsToChangeCriteriaComp
	isSet bool
}

func (v NullableRoutingInstructionsToChangeCriteriaComp) Get() *RoutingInstructionsToChangeCriteriaComp {
	return v.value
}

func (v *NullableRoutingInstructionsToChangeCriteriaComp) Set(val *RoutingInstructionsToChangeCriteriaComp) {
	v.value = val
	v.isSet = true
}

func (v NullableRoutingInstructionsToChangeCriteriaComp) IsSet() bool {
	return v.isSet
}

func (v *NullableRoutingInstructionsToChangeCriteriaComp) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoutingInstructionsToChangeCriteriaComp(val *RoutingInstructionsToChangeCriteriaComp) *NullableRoutingInstructionsToChangeCriteriaComp {
	return &NullableRoutingInstructionsToChangeCriteriaComp{value: val, isSet: true}
}

func (v NullableRoutingInstructionsToChangeCriteriaComp) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoutingInstructionsToChangeCriteriaComp) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


