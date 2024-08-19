/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the EventRevenueInformationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EventRevenueInformationType{}

// EventRevenueInformationType Pertain event's revenue information.
type EventRevenueInformationType struct {
	ActualRevenue *CurrencyAmountType `json:"actualRevenue,omitempty"`
	BilledRevenue *CurrencyAmountType `json:"billedRevenue,omitempty"`
	// Flag indicating revenues are from a custom revenue type.
	Custom *bool `json:"custom,omitempty"`
	ExpectedRevenue *CurrencyAmountType `json:"expectedRevenue,omitempty"`
	// Flag to indicate forecast revenue is a flat amount, therefore NOT per person.
	FlatForecastRevenue *bool `json:"flatForecastRevenue,omitempty"`
	ForecastRevenue *CurrencyAmountType `json:"forecastRevenue,omitempty"`
	GuaranteedRevenue *CurrencyAmountType `json:"guaranteedRevenue,omitempty"`
	// Flag indicating to ignore forecast figures.
	IgnoreForecast *bool `json:"ignoreForecast,omitempty"`
	OnTheBooksRevenue *CurrencyAmountType `json:"onTheBooksRevenue,omitempty"`
	// Sort order for revenues.
	OrderBy *int32 `json:"orderBy,omitempty"`
	// Flag indicating if the revenues are generated by a catering package.
	Packaged *bool `json:"packaged,omitempty"`
	RevenueType *RevenueTypeType `json:"revenueType,omitempty"`
	TotalCost *CurrencyAmountType `json:"totalCost,omitempty"`
}

// NewEventRevenueInformationType instantiates a new EventRevenueInformationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEventRevenueInformationType() *EventRevenueInformationType {
	this := EventRevenueInformationType{}
	return &this
}

// NewEventRevenueInformationTypeWithDefaults instantiates a new EventRevenueInformationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEventRevenueInformationTypeWithDefaults() *EventRevenueInformationType {
	this := EventRevenueInformationType{}
	return &this
}

// GetActualRevenue returns the ActualRevenue field value if set, zero value otherwise.
func (o *EventRevenueInformationType) GetActualRevenue() CurrencyAmountType {
	if o == nil || IsNil(o.ActualRevenue) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.ActualRevenue
}

// GetActualRevenueOk returns a tuple with the ActualRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueInformationType) GetActualRevenueOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.ActualRevenue) {
		return nil, false
	}
	return o.ActualRevenue, true
}

// HasActualRevenue returns a boolean if a field has been set.
func (o *EventRevenueInformationType) HasActualRevenue() bool {
	if o != nil && !IsNil(o.ActualRevenue) {
		return true
	}

	return false
}

// SetActualRevenue gets a reference to the given CurrencyAmountType and assigns it to the ActualRevenue field.
func (o *EventRevenueInformationType) SetActualRevenue(v CurrencyAmountType) {
	o.ActualRevenue = &v
}

// GetBilledRevenue returns the BilledRevenue field value if set, zero value otherwise.
func (o *EventRevenueInformationType) GetBilledRevenue() CurrencyAmountType {
	if o == nil || IsNil(o.BilledRevenue) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.BilledRevenue
}

// GetBilledRevenueOk returns a tuple with the BilledRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueInformationType) GetBilledRevenueOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.BilledRevenue) {
		return nil, false
	}
	return o.BilledRevenue, true
}

// HasBilledRevenue returns a boolean if a field has been set.
func (o *EventRevenueInformationType) HasBilledRevenue() bool {
	if o != nil && !IsNil(o.BilledRevenue) {
		return true
	}

	return false
}

// SetBilledRevenue gets a reference to the given CurrencyAmountType and assigns it to the BilledRevenue field.
func (o *EventRevenueInformationType) SetBilledRevenue(v CurrencyAmountType) {
	o.BilledRevenue = &v
}

// GetCustom returns the Custom field value if set, zero value otherwise.
func (o *EventRevenueInformationType) GetCustom() bool {
	if o == nil || IsNil(o.Custom) {
		var ret bool
		return ret
	}
	return *o.Custom
}

// GetCustomOk returns a tuple with the Custom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueInformationType) GetCustomOk() (*bool, bool) {
	if o == nil || IsNil(o.Custom) {
		return nil, false
	}
	return o.Custom, true
}

// HasCustom returns a boolean if a field has been set.
func (o *EventRevenueInformationType) HasCustom() bool {
	if o != nil && !IsNil(o.Custom) {
		return true
	}

	return false
}

// SetCustom gets a reference to the given bool and assigns it to the Custom field.
func (o *EventRevenueInformationType) SetCustom(v bool) {
	o.Custom = &v
}

// GetExpectedRevenue returns the ExpectedRevenue field value if set, zero value otherwise.
func (o *EventRevenueInformationType) GetExpectedRevenue() CurrencyAmountType {
	if o == nil || IsNil(o.ExpectedRevenue) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.ExpectedRevenue
}

// GetExpectedRevenueOk returns a tuple with the ExpectedRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueInformationType) GetExpectedRevenueOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.ExpectedRevenue) {
		return nil, false
	}
	return o.ExpectedRevenue, true
}

// HasExpectedRevenue returns a boolean if a field has been set.
func (o *EventRevenueInformationType) HasExpectedRevenue() bool {
	if o != nil && !IsNil(o.ExpectedRevenue) {
		return true
	}

	return false
}

// SetExpectedRevenue gets a reference to the given CurrencyAmountType and assigns it to the ExpectedRevenue field.
func (o *EventRevenueInformationType) SetExpectedRevenue(v CurrencyAmountType) {
	o.ExpectedRevenue = &v
}

// GetFlatForecastRevenue returns the FlatForecastRevenue field value if set, zero value otherwise.
func (o *EventRevenueInformationType) GetFlatForecastRevenue() bool {
	if o == nil || IsNil(o.FlatForecastRevenue) {
		var ret bool
		return ret
	}
	return *o.FlatForecastRevenue
}

// GetFlatForecastRevenueOk returns a tuple with the FlatForecastRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueInformationType) GetFlatForecastRevenueOk() (*bool, bool) {
	if o == nil || IsNil(o.FlatForecastRevenue) {
		return nil, false
	}
	return o.FlatForecastRevenue, true
}

// HasFlatForecastRevenue returns a boolean if a field has been set.
func (o *EventRevenueInformationType) HasFlatForecastRevenue() bool {
	if o != nil && !IsNil(o.FlatForecastRevenue) {
		return true
	}

	return false
}

// SetFlatForecastRevenue gets a reference to the given bool and assigns it to the FlatForecastRevenue field.
func (o *EventRevenueInformationType) SetFlatForecastRevenue(v bool) {
	o.FlatForecastRevenue = &v
}

// GetForecastRevenue returns the ForecastRevenue field value if set, zero value otherwise.
func (o *EventRevenueInformationType) GetForecastRevenue() CurrencyAmountType {
	if o == nil || IsNil(o.ForecastRevenue) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.ForecastRevenue
}

// GetForecastRevenueOk returns a tuple with the ForecastRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueInformationType) GetForecastRevenueOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.ForecastRevenue) {
		return nil, false
	}
	return o.ForecastRevenue, true
}

// HasForecastRevenue returns a boolean if a field has been set.
func (o *EventRevenueInformationType) HasForecastRevenue() bool {
	if o != nil && !IsNil(o.ForecastRevenue) {
		return true
	}

	return false
}

// SetForecastRevenue gets a reference to the given CurrencyAmountType and assigns it to the ForecastRevenue field.
func (o *EventRevenueInformationType) SetForecastRevenue(v CurrencyAmountType) {
	o.ForecastRevenue = &v
}

// GetGuaranteedRevenue returns the GuaranteedRevenue field value if set, zero value otherwise.
func (o *EventRevenueInformationType) GetGuaranteedRevenue() CurrencyAmountType {
	if o == nil || IsNil(o.GuaranteedRevenue) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.GuaranteedRevenue
}

// GetGuaranteedRevenueOk returns a tuple with the GuaranteedRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueInformationType) GetGuaranteedRevenueOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.GuaranteedRevenue) {
		return nil, false
	}
	return o.GuaranteedRevenue, true
}

// HasGuaranteedRevenue returns a boolean if a field has been set.
func (o *EventRevenueInformationType) HasGuaranteedRevenue() bool {
	if o != nil && !IsNil(o.GuaranteedRevenue) {
		return true
	}

	return false
}

// SetGuaranteedRevenue gets a reference to the given CurrencyAmountType and assigns it to the GuaranteedRevenue field.
func (o *EventRevenueInformationType) SetGuaranteedRevenue(v CurrencyAmountType) {
	o.GuaranteedRevenue = &v
}

// GetIgnoreForecast returns the IgnoreForecast field value if set, zero value otherwise.
func (o *EventRevenueInformationType) GetIgnoreForecast() bool {
	if o == nil || IsNil(o.IgnoreForecast) {
		var ret bool
		return ret
	}
	return *o.IgnoreForecast
}

// GetIgnoreForecastOk returns a tuple with the IgnoreForecast field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueInformationType) GetIgnoreForecastOk() (*bool, bool) {
	if o == nil || IsNil(o.IgnoreForecast) {
		return nil, false
	}
	return o.IgnoreForecast, true
}

// HasIgnoreForecast returns a boolean if a field has been set.
func (o *EventRevenueInformationType) HasIgnoreForecast() bool {
	if o != nil && !IsNil(o.IgnoreForecast) {
		return true
	}

	return false
}

// SetIgnoreForecast gets a reference to the given bool and assigns it to the IgnoreForecast field.
func (o *EventRevenueInformationType) SetIgnoreForecast(v bool) {
	o.IgnoreForecast = &v
}

// GetOnTheBooksRevenue returns the OnTheBooksRevenue field value if set, zero value otherwise.
func (o *EventRevenueInformationType) GetOnTheBooksRevenue() CurrencyAmountType {
	if o == nil || IsNil(o.OnTheBooksRevenue) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.OnTheBooksRevenue
}

// GetOnTheBooksRevenueOk returns a tuple with the OnTheBooksRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueInformationType) GetOnTheBooksRevenueOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.OnTheBooksRevenue) {
		return nil, false
	}
	return o.OnTheBooksRevenue, true
}

// HasOnTheBooksRevenue returns a boolean if a field has been set.
func (o *EventRevenueInformationType) HasOnTheBooksRevenue() bool {
	if o != nil && !IsNil(o.OnTheBooksRevenue) {
		return true
	}

	return false
}

// SetOnTheBooksRevenue gets a reference to the given CurrencyAmountType and assigns it to the OnTheBooksRevenue field.
func (o *EventRevenueInformationType) SetOnTheBooksRevenue(v CurrencyAmountType) {
	o.OnTheBooksRevenue = &v
}

// GetOrderBy returns the OrderBy field value if set, zero value otherwise.
func (o *EventRevenueInformationType) GetOrderBy() int32 {
	if o == nil || IsNil(o.OrderBy) {
		var ret int32
		return ret
	}
	return *o.OrderBy
}

// GetOrderByOk returns a tuple with the OrderBy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueInformationType) GetOrderByOk() (*int32, bool) {
	if o == nil || IsNil(o.OrderBy) {
		return nil, false
	}
	return o.OrderBy, true
}

// HasOrderBy returns a boolean if a field has been set.
func (o *EventRevenueInformationType) HasOrderBy() bool {
	if o != nil && !IsNil(o.OrderBy) {
		return true
	}

	return false
}

// SetOrderBy gets a reference to the given int32 and assigns it to the OrderBy field.
func (o *EventRevenueInformationType) SetOrderBy(v int32) {
	o.OrderBy = &v
}

// GetPackaged returns the Packaged field value if set, zero value otherwise.
func (o *EventRevenueInformationType) GetPackaged() bool {
	if o == nil || IsNil(o.Packaged) {
		var ret bool
		return ret
	}
	return *o.Packaged
}

// GetPackagedOk returns a tuple with the Packaged field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueInformationType) GetPackagedOk() (*bool, bool) {
	if o == nil || IsNil(o.Packaged) {
		return nil, false
	}
	return o.Packaged, true
}

// HasPackaged returns a boolean if a field has been set.
func (o *EventRevenueInformationType) HasPackaged() bool {
	if o != nil && !IsNil(o.Packaged) {
		return true
	}

	return false
}

// SetPackaged gets a reference to the given bool and assigns it to the Packaged field.
func (o *EventRevenueInformationType) SetPackaged(v bool) {
	o.Packaged = &v
}

// GetRevenueType returns the RevenueType field value if set, zero value otherwise.
func (o *EventRevenueInformationType) GetRevenueType() RevenueTypeType {
	if o == nil || IsNil(o.RevenueType) {
		var ret RevenueTypeType
		return ret
	}
	return *o.RevenueType
}

// GetRevenueTypeOk returns a tuple with the RevenueType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueInformationType) GetRevenueTypeOk() (*RevenueTypeType, bool) {
	if o == nil || IsNil(o.RevenueType) {
		return nil, false
	}
	return o.RevenueType, true
}

// HasRevenueType returns a boolean if a field has been set.
func (o *EventRevenueInformationType) HasRevenueType() bool {
	if o != nil && !IsNil(o.RevenueType) {
		return true
	}

	return false
}

// SetRevenueType gets a reference to the given RevenueTypeType and assigns it to the RevenueType field.
func (o *EventRevenueInformationType) SetRevenueType(v RevenueTypeType) {
	o.RevenueType = &v
}

// GetTotalCost returns the TotalCost field value if set, zero value otherwise.
func (o *EventRevenueInformationType) GetTotalCost() CurrencyAmountType {
	if o == nil || IsNil(o.TotalCost) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.TotalCost
}

// GetTotalCostOk returns a tuple with the TotalCost field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueInformationType) GetTotalCostOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.TotalCost) {
		return nil, false
	}
	return o.TotalCost, true
}

// HasTotalCost returns a boolean if a field has been set.
func (o *EventRevenueInformationType) HasTotalCost() bool {
	if o != nil && !IsNil(o.TotalCost) {
		return true
	}

	return false
}

// SetTotalCost gets a reference to the given CurrencyAmountType and assigns it to the TotalCost field.
func (o *EventRevenueInformationType) SetTotalCost(v CurrencyAmountType) {
	o.TotalCost = &v
}

func (o EventRevenueInformationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EventRevenueInformationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActualRevenue) {
		toSerialize["actualRevenue"] = o.ActualRevenue
	}
	if !IsNil(o.BilledRevenue) {
		toSerialize["billedRevenue"] = o.BilledRevenue
	}
	if !IsNil(o.Custom) {
		toSerialize["custom"] = o.Custom
	}
	if !IsNil(o.ExpectedRevenue) {
		toSerialize["expectedRevenue"] = o.ExpectedRevenue
	}
	if !IsNil(o.FlatForecastRevenue) {
		toSerialize["flatForecastRevenue"] = o.FlatForecastRevenue
	}
	if !IsNil(o.ForecastRevenue) {
		toSerialize["forecastRevenue"] = o.ForecastRevenue
	}
	if !IsNil(o.GuaranteedRevenue) {
		toSerialize["guaranteedRevenue"] = o.GuaranteedRevenue
	}
	if !IsNil(o.IgnoreForecast) {
		toSerialize["ignoreForecast"] = o.IgnoreForecast
	}
	if !IsNil(o.OnTheBooksRevenue) {
		toSerialize["onTheBooksRevenue"] = o.OnTheBooksRevenue
	}
	if !IsNil(o.OrderBy) {
		toSerialize["orderBy"] = o.OrderBy
	}
	if !IsNil(o.Packaged) {
		toSerialize["packaged"] = o.Packaged
	}
	if !IsNil(o.RevenueType) {
		toSerialize["revenueType"] = o.RevenueType
	}
	if !IsNil(o.TotalCost) {
		toSerialize["totalCost"] = o.TotalCost
	}
	return toSerialize, nil
}

type NullableEventRevenueInformationType struct {
	value *EventRevenueInformationType
	isSet bool
}

func (v NullableEventRevenueInformationType) Get() *EventRevenueInformationType {
	return v.value
}

func (v *NullableEventRevenueInformationType) Set(val *EventRevenueInformationType) {
	v.value = val
	v.isSet = true
}

func (v NullableEventRevenueInformationType) IsSet() bool {
	return v.isSet
}

func (v *NullableEventRevenueInformationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEventRevenueInformationType(val *EventRevenueInformationType) *NullableEventRevenueInformationType {
	return &NullableEventRevenueInformationType{value: val, isSet: true}
}

func (v NullableEventRevenueInformationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEventRevenueInformationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


