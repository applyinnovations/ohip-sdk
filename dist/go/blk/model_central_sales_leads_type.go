/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the CentralSalesLeadsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CentralSalesLeadsType{}

// CentralSalesLeadsType Basic information about the Central Lead and its linked Property Leads.
type CentralSalesLeadsType struct {
	CentralLead *LeadInfoType `json:"centralLead,omitempty"`
	// Basic information about the Property Leads.
	PropertyLeads []LeadInfoType `json:"propertyLeads,omitempty"`
}

// NewCentralSalesLeadsType instantiates a new CentralSalesLeadsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCentralSalesLeadsType() *CentralSalesLeadsType {
	this := CentralSalesLeadsType{}
	return &this
}

// NewCentralSalesLeadsTypeWithDefaults instantiates a new CentralSalesLeadsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCentralSalesLeadsTypeWithDefaults() *CentralSalesLeadsType {
	this := CentralSalesLeadsType{}
	return &this
}

// GetCentralLead returns the CentralLead field value if set, zero value otherwise.
func (o *CentralSalesLeadsType) GetCentralLead() LeadInfoType {
	if o == nil || IsNil(o.CentralLead) {
		var ret LeadInfoType
		return ret
	}
	return *o.CentralLead
}

// GetCentralLeadOk returns a tuple with the CentralLead field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CentralSalesLeadsType) GetCentralLeadOk() (*LeadInfoType, bool) {
	if o == nil || IsNil(o.CentralLead) {
		return nil, false
	}
	return o.CentralLead, true
}

// HasCentralLead returns a boolean if a field has been set.
func (o *CentralSalesLeadsType) HasCentralLead() bool {
	if o != nil && !IsNil(o.CentralLead) {
		return true
	}

	return false
}

// SetCentralLead gets a reference to the given LeadInfoType and assigns it to the CentralLead field.
func (o *CentralSalesLeadsType) SetCentralLead(v LeadInfoType) {
	o.CentralLead = &v
}

// GetPropertyLeads returns the PropertyLeads field value if set, zero value otherwise.
func (o *CentralSalesLeadsType) GetPropertyLeads() []LeadInfoType {
	if o == nil || IsNil(o.PropertyLeads) {
		var ret []LeadInfoType
		return ret
	}
	return o.PropertyLeads
}

// GetPropertyLeadsOk returns a tuple with the PropertyLeads field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CentralSalesLeadsType) GetPropertyLeadsOk() ([]LeadInfoType, bool) {
	if o == nil || IsNil(o.PropertyLeads) {
		return nil, false
	}
	return o.PropertyLeads, true
}

// HasPropertyLeads returns a boolean if a field has been set.
func (o *CentralSalesLeadsType) HasPropertyLeads() bool {
	if o != nil && !IsNil(o.PropertyLeads) {
		return true
	}

	return false
}

// SetPropertyLeads gets a reference to the given []LeadInfoType and assigns it to the PropertyLeads field.
func (o *CentralSalesLeadsType) SetPropertyLeads(v []LeadInfoType) {
	o.PropertyLeads = v
}

func (o CentralSalesLeadsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CentralSalesLeadsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CentralLead) {
		toSerialize["centralLead"] = o.CentralLead
	}
	if !IsNil(o.PropertyLeads) {
		toSerialize["propertyLeads"] = o.PropertyLeads
	}
	return toSerialize, nil
}

type NullableCentralSalesLeadsType struct {
	value *CentralSalesLeadsType
	isSet bool
}

func (v NullableCentralSalesLeadsType) Get() *CentralSalesLeadsType {
	return v.value
}

func (v *NullableCentralSalesLeadsType) Set(val *CentralSalesLeadsType) {
	v.value = val
	v.isSet = true
}

func (v NullableCentralSalesLeadsType) IsSet() bool {
	return v.isSet
}

func (v *NullableCentralSalesLeadsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCentralSalesLeadsType(val *CentralSalesLeadsType) *NullableCentralSalesLeadsType {
	return &NullableCentralSalesLeadsType{value: val, isSet: true}
}

func (v NullableCentralSalesLeadsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCentralSalesLeadsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


