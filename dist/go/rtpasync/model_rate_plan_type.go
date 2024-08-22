/*
Opera Cloud Rate Plan Asynchronous Service API

APIs catering to the Rate Plan asynchronous related functionality in a hotel.  This includes adding/updating daily rates&apos; pricing schedules and best available rates by day or length of stay. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtpasync

import (
	"encoding/json"
)

// checks if the RatePlanType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanType{}

// RatePlanType The Rate plan code Details.
type RatePlanType struct {
	// Flag to identify if Rate Code is Advanced Daily Base Rate Code
	AdvancedDailyBase *bool `json:"advancedDailyBase,omitempty"`
	// Flag to identify if Rate Code is Advanced Daily Rate
	AdvancedDailyRate *bool `json:"advancedDailyRate,omitempty"`
	// Is rate plan code of BAR Rate type?
	BarRate *bool `json:"barRate,omitempty"`
	// Is rate plan code complimentary?
	Complimentary *bool `json:"complimentary,omitempty"`
	// Is rate plan code a daily rate?
	Daily *bool `json:"daily,omitempty"`
	// Indicates if rate Calendar factors such as adder/multiplier should be used for price calculation.
	DayType *bool `json:"dayType,omitempty"`
	// Is rate plan code for day use?
	DayUse *bool `json:"dayUse,omitempty"`
	// Is rate plan code discounted?
	DiscountAllowed *bool `json:"discountAllowed,omitempty"`
	Distribution *RatePlanDistributionType `json:"distribution,omitempty"`
	// Is rate plan code for house use?
	HouseUse *bool `json:"houseUse,omitempty"`
	// Is rate plan code flagged as eligible for memberships? This flag controls whether the guest stay, which this rate plan is attached to, qualifies for point calculations for Frequent Flyer or Frequent Guest programs. If the rate plan associated to the reservation has not been flagged for Membership then the guest will not earn any points/miles for their stay.
	MembershipEligible *bool `json:"membershipEligible,omitempty"`
	// This is a placeholder element for future use. Functionality may not be available for the current implementation.
	MobileCheckinAllowed *bool `json:"mobileCheckinAllowed,omitempty"`
	// This is a placeholder element for future use. Functionality may not be available for the current implementation.
	MobileCheckoutAllowed *bool `json:"mobileCheckoutAllowed,omitempty"`
	// Is rate plan code only available as a negotiated rate that must be associated with a guest, company, or travel agent profile ?
	Negotiated *bool `json:"negotiated,omitempty"`
	// Is rate plan code flagged as an owner rate plan? Owner rate plans have special functionality for no-shows depending on the Rolling Noshow Preference application setting.
	OwnerRate *bool `json:"ownerRate,omitempty"`
	// Is Rate amount printed on the reports for the rate plan?
	PrintRate *bool `json:"printRate,omitempty"`
	// Rate plan Code
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// Is redemption allowed on the rate code?
	Redemption *bool `json:"redemption,omitempty"`
	// Is rate amount suppressed for the rate plan?
	SupressRate *bool `json:"supressRate,omitempty"`
	// Is rate plan code a tiered rate?
	Tiered *bool `json:"tiered,omitempty"`
}

// NewRatePlanType instantiates a new RatePlanType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanType() *RatePlanType {
	this := RatePlanType{}
	return &this
}

// NewRatePlanTypeWithDefaults instantiates a new RatePlanType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanTypeWithDefaults() *RatePlanType {
	this := RatePlanType{}
	return &this
}

// GetAdvancedDailyBase returns the AdvancedDailyBase field value if set, zero value otherwise.
func (o *RatePlanType) GetAdvancedDailyBase() bool {
	if o == nil || IsNil(o.AdvancedDailyBase) {
		var ret bool
		return ret
	}
	return *o.AdvancedDailyBase
}

// GetAdvancedDailyBaseOk returns a tuple with the AdvancedDailyBase field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetAdvancedDailyBaseOk() (*bool, bool) {
	if o == nil || IsNil(o.AdvancedDailyBase) {
		return nil, false
	}
	return o.AdvancedDailyBase, true
}

// HasAdvancedDailyBase returns a boolean if a field has been set.
func (o *RatePlanType) HasAdvancedDailyBase() bool {
	if o != nil && !IsNil(o.AdvancedDailyBase) {
		return true
	}

	return false
}

// SetAdvancedDailyBase gets a reference to the given bool and assigns it to the AdvancedDailyBase field.
func (o *RatePlanType) SetAdvancedDailyBase(v bool) {
	o.AdvancedDailyBase = &v
}

// GetAdvancedDailyRate returns the AdvancedDailyRate field value if set, zero value otherwise.
func (o *RatePlanType) GetAdvancedDailyRate() bool {
	if o == nil || IsNil(o.AdvancedDailyRate) {
		var ret bool
		return ret
	}
	return *o.AdvancedDailyRate
}

// GetAdvancedDailyRateOk returns a tuple with the AdvancedDailyRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetAdvancedDailyRateOk() (*bool, bool) {
	if o == nil || IsNil(o.AdvancedDailyRate) {
		return nil, false
	}
	return o.AdvancedDailyRate, true
}

// HasAdvancedDailyRate returns a boolean if a field has been set.
func (o *RatePlanType) HasAdvancedDailyRate() bool {
	if o != nil && !IsNil(o.AdvancedDailyRate) {
		return true
	}

	return false
}

// SetAdvancedDailyRate gets a reference to the given bool and assigns it to the AdvancedDailyRate field.
func (o *RatePlanType) SetAdvancedDailyRate(v bool) {
	o.AdvancedDailyRate = &v
}

// GetBarRate returns the BarRate field value if set, zero value otherwise.
func (o *RatePlanType) GetBarRate() bool {
	if o == nil || IsNil(o.BarRate) {
		var ret bool
		return ret
	}
	return *o.BarRate
}

// GetBarRateOk returns a tuple with the BarRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetBarRateOk() (*bool, bool) {
	if o == nil || IsNil(o.BarRate) {
		return nil, false
	}
	return o.BarRate, true
}

// HasBarRate returns a boolean if a field has been set.
func (o *RatePlanType) HasBarRate() bool {
	if o != nil && !IsNil(o.BarRate) {
		return true
	}

	return false
}

// SetBarRate gets a reference to the given bool and assigns it to the BarRate field.
func (o *RatePlanType) SetBarRate(v bool) {
	o.BarRate = &v
}

// GetComplimentary returns the Complimentary field value if set, zero value otherwise.
func (o *RatePlanType) GetComplimentary() bool {
	if o == nil || IsNil(o.Complimentary) {
		var ret bool
		return ret
	}
	return *o.Complimentary
}

// GetComplimentaryOk returns a tuple with the Complimentary field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetComplimentaryOk() (*bool, bool) {
	if o == nil || IsNil(o.Complimentary) {
		return nil, false
	}
	return o.Complimentary, true
}

// HasComplimentary returns a boolean if a field has been set.
func (o *RatePlanType) HasComplimentary() bool {
	if o != nil && !IsNil(o.Complimentary) {
		return true
	}

	return false
}

// SetComplimentary gets a reference to the given bool and assigns it to the Complimentary field.
func (o *RatePlanType) SetComplimentary(v bool) {
	o.Complimentary = &v
}

// GetDaily returns the Daily field value if set, zero value otherwise.
func (o *RatePlanType) GetDaily() bool {
	if o == nil || IsNil(o.Daily) {
		var ret bool
		return ret
	}
	return *o.Daily
}

// GetDailyOk returns a tuple with the Daily field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetDailyOk() (*bool, bool) {
	if o == nil || IsNil(o.Daily) {
		return nil, false
	}
	return o.Daily, true
}

// HasDaily returns a boolean if a field has been set.
func (o *RatePlanType) HasDaily() bool {
	if o != nil && !IsNil(o.Daily) {
		return true
	}

	return false
}

// SetDaily gets a reference to the given bool and assigns it to the Daily field.
func (o *RatePlanType) SetDaily(v bool) {
	o.Daily = &v
}

// GetDayType returns the DayType field value if set, zero value otherwise.
func (o *RatePlanType) GetDayType() bool {
	if o == nil || IsNil(o.DayType) {
		var ret bool
		return ret
	}
	return *o.DayType
}

// GetDayTypeOk returns a tuple with the DayType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetDayTypeOk() (*bool, bool) {
	if o == nil || IsNil(o.DayType) {
		return nil, false
	}
	return o.DayType, true
}

// HasDayType returns a boolean if a field has been set.
func (o *RatePlanType) HasDayType() bool {
	if o != nil && !IsNil(o.DayType) {
		return true
	}

	return false
}

// SetDayType gets a reference to the given bool and assigns it to the DayType field.
func (o *RatePlanType) SetDayType(v bool) {
	o.DayType = &v
}

// GetDayUse returns the DayUse field value if set, zero value otherwise.
func (o *RatePlanType) GetDayUse() bool {
	if o == nil || IsNil(o.DayUse) {
		var ret bool
		return ret
	}
	return *o.DayUse
}

// GetDayUseOk returns a tuple with the DayUse field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetDayUseOk() (*bool, bool) {
	if o == nil || IsNil(o.DayUse) {
		return nil, false
	}
	return o.DayUse, true
}

// HasDayUse returns a boolean if a field has been set.
func (o *RatePlanType) HasDayUse() bool {
	if o != nil && !IsNil(o.DayUse) {
		return true
	}

	return false
}

// SetDayUse gets a reference to the given bool and assigns it to the DayUse field.
func (o *RatePlanType) SetDayUse(v bool) {
	o.DayUse = &v
}

// GetDiscountAllowed returns the DiscountAllowed field value if set, zero value otherwise.
func (o *RatePlanType) GetDiscountAllowed() bool {
	if o == nil || IsNil(o.DiscountAllowed) {
		var ret bool
		return ret
	}
	return *o.DiscountAllowed
}

// GetDiscountAllowedOk returns a tuple with the DiscountAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetDiscountAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.DiscountAllowed) {
		return nil, false
	}
	return o.DiscountAllowed, true
}

// HasDiscountAllowed returns a boolean if a field has been set.
func (o *RatePlanType) HasDiscountAllowed() bool {
	if o != nil && !IsNil(o.DiscountAllowed) {
		return true
	}

	return false
}

// SetDiscountAllowed gets a reference to the given bool and assigns it to the DiscountAllowed field.
func (o *RatePlanType) SetDiscountAllowed(v bool) {
	o.DiscountAllowed = &v
}

// GetDistribution returns the Distribution field value if set, zero value otherwise.
func (o *RatePlanType) GetDistribution() RatePlanDistributionType {
	if o == nil || IsNil(o.Distribution) {
		var ret RatePlanDistributionType
		return ret
	}
	return *o.Distribution
}

// GetDistributionOk returns a tuple with the Distribution field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetDistributionOk() (*RatePlanDistributionType, bool) {
	if o == nil || IsNil(o.Distribution) {
		return nil, false
	}
	return o.Distribution, true
}

// HasDistribution returns a boolean if a field has been set.
func (o *RatePlanType) HasDistribution() bool {
	if o != nil && !IsNil(o.Distribution) {
		return true
	}

	return false
}

// SetDistribution gets a reference to the given RatePlanDistributionType and assigns it to the Distribution field.
func (o *RatePlanType) SetDistribution(v RatePlanDistributionType) {
	o.Distribution = &v
}

// GetHouseUse returns the HouseUse field value if set, zero value otherwise.
func (o *RatePlanType) GetHouseUse() bool {
	if o == nil || IsNil(o.HouseUse) {
		var ret bool
		return ret
	}
	return *o.HouseUse
}

// GetHouseUseOk returns a tuple with the HouseUse field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetHouseUseOk() (*bool, bool) {
	if o == nil || IsNil(o.HouseUse) {
		return nil, false
	}
	return o.HouseUse, true
}

// HasHouseUse returns a boolean if a field has been set.
func (o *RatePlanType) HasHouseUse() bool {
	if o != nil && !IsNil(o.HouseUse) {
		return true
	}

	return false
}

// SetHouseUse gets a reference to the given bool and assigns it to the HouseUse field.
func (o *RatePlanType) SetHouseUse(v bool) {
	o.HouseUse = &v
}

// GetMembershipEligible returns the MembershipEligible field value if set, zero value otherwise.
func (o *RatePlanType) GetMembershipEligible() bool {
	if o == nil || IsNil(o.MembershipEligible) {
		var ret bool
		return ret
	}
	return *o.MembershipEligible
}

// GetMembershipEligibleOk returns a tuple with the MembershipEligible field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetMembershipEligibleOk() (*bool, bool) {
	if o == nil || IsNil(o.MembershipEligible) {
		return nil, false
	}
	return o.MembershipEligible, true
}

// HasMembershipEligible returns a boolean if a field has been set.
func (o *RatePlanType) HasMembershipEligible() bool {
	if o != nil && !IsNil(o.MembershipEligible) {
		return true
	}

	return false
}

// SetMembershipEligible gets a reference to the given bool and assigns it to the MembershipEligible field.
func (o *RatePlanType) SetMembershipEligible(v bool) {
	o.MembershipEligible = &v
}

// GetMobileCheckinAllowed returns the MobileCheckinAllowed field value if set, zero value otherwise.
func (o *RatePlanType) GetMobileCheckinAllowed() bool {
	if o == nil || IsNil(o.MobileCheckinAllowed) {
		var ret bool
		return ret
	}
	return *o.MobileCheckinAllowed
}

// GetMobileCheckinAllowedOk returns a tuple with the MobileCheckinAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetMobileCheckinAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.MobileCheckinAllowed) {
		return nil, false
	}
	return o.MobileCheckinAllowed, true
}

// HasMobileCheckinAllowed returns a boolean if a field has been set.
func (o *RatePlanType) HasMobileCheckinAllowed() bool {
	if o != nil && !IsNil(o.MobileCheckinAllowed) {
		return true
	}

	return false
}

// SetMobileCheckinAllowed gets a reference to the given bool and assigns it to the MobileCheckinAllowed field.
func (o *RatePlanType) SetMobileCheckinAllowed(v bool) {
	o.MobileCheckinAllowed = &v
}

// GetMobileCheckoutAllowed returns the MobileCheckoutAllowed field value if set, zero value otherwise.
func (o *RatePlanType) GetMobileCheckoutAllowed() bool {
	if o == nil || IsNil(o.MobileCheckoutAllowed) {
		var ret bool
		return ret
	}
	return *o.MobileCheckoutAllowed
}

// GetMobileCheckoutAllowedOk returns a tuple with the MobileCheckoutAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetMobileCheckoutAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.MobileCheckoutAllowed) {
		return nil, false
	}
	return o.MobileCheckoutAllowed, true
}

// HasMobileCheckoutAllowed returns a boolean if a field has been set.
func (o *RatePlanType) HasMobileCheckoutAllowed() bool {
	if o != nil && !IsNil(o.MobileCheckoutAllowed) {
		return true
	}

	return false
}

// SetMobileCheckoutAllowed gets a reference to the given bool and assigns it to the MobileCheckoutAllowed field.
func (o *RatePlanType) SetMobileCheckoutAllowed(v bool) {
	o.MobileCheckoutAllowed = &v
}

// GetNegotiated returns the Negotiated field value if set, zero value otherwise.
func (o *RatePlanType) GetNegotiated() bool {
	if o == nil || IsNil(o.Negotiated) {
		var ret bool
		return ret
	}
	return *o.Negotiated
}

// GetNegotiatedOk returns a tuple with the Negotiated field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetNegotiatedOk() (*bool, bool) {
	if o == nil || IsNil(o.Negotiated) {
		return nil, false
	}
	return o.Negotiated, true
}

// HasNegotiated returns a boolean if a field has been set.
func (o *RatePlanType) HasNegotiated() bool {
	if o != nil && !IsNil(o.Negotiated) {
		return true
	}

	return false
}

// SetNegotiated gets a reference to the given bool and assigns it to the Negotiated field.
func (o *RatePlanType) SetNegotiated(v bool) {
	o.Negotiated = &v
}

// GetOwnerRate returns the OwnerRate field value if set, zero value otherwise.
func (o *RatePlanType) GetOwnerRate() bool {
	if o == nil || IsNil(o.OwnerRate) {
		var ret bool
		return ret
	}
	return *o.OwnerRate
}

// GetOwnerRateOk returns a tuple with the OwnerRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetOwnerRateOk() (*bool, bool) {
	if o == nil || IsNil(o.OwnerRate) {
		return nil, false
	}
	return o.OwnerRate, true
}

// HasOwnerRate returns a boolean if a field has been set.
func (o *RatePlanType) HasOwnerRate() bool {
	if o != nil && !IsNil(o.OwnerRate) {
		return true
	}

	return false
}

// SetOwnerRate gets a reference to the given bool and assigns it to the OwnerRate field.
func (o *RatePlanType) SetOwnerRate(v bool) {
	o.OwnerRate = &v
}

// GetPrintRate returns the PrintRate field value if set, zero value otherwise.
func (o *RatePlanType) GetPrintRate() bool {
	if o == nil || IsNil(o.PrintRate) {
		var ret bool
		return ret
	}
	return *o.PrintRate
}

// GetPrintRateOk returns a tuple with the PrintRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetPrintRateOk() (*bool, bool) {
	if o == nil || IsNil(o.PrintRate) {
		return nil, false
	}
	return o.PrintRate, true
}

// HasPrintRate returns a boolean if a field has been set.
func (o *RatePlanType) HasPrintRate() bool {
	if o != nil && !IsNil(o.PrintRate) {
		return true
	}

	return false
}

// SetPrintRate gets a reference to the given bool and assigns it to the PrintRate field.
func (o *RatePlanType) SetPrintRate(v bool) {
	o.PrintRate = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *RatePlanType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *RatePlanType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *RatePlanType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetRedemption returns the Redemption field value if set, zero value otherwise.
func (o *RatePlanType) GetRedemption() bool {
	if o == nil || IsNil(o.Redemption) {
		var ret bool
		return ret
	}
	return *o.Redemption
}

// GetRedemptionOk returns a tuple with the Redemption field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetRedemptionOk() (*bool, bool) {
	if o == nil || IsNil(o.Redemption) {
		return nil, false
	}
	return o.Redemption, true
}

// HasRedemption returns a boolean if a field has been set.
func (o *RatePlanType) HasRedemption() bool {
	if o != nil && !IsNil(o.Redemption) {
		return true
	}

	return false
}

// SetRedemption gets a reference to the given bool and assigns it to the Redemption field.
func (o *RatePlanType) SetRedemption(v bool) {
	o.Redemption = &v
}

// GetSupressRate returns the SupressRate field value if set, zero value otherwise.
func (o *RatePlanType) GetSupressRate() bool {
	if o == nil || IsNil(o.SupressRate) {
		var ret bool
		return ret
	}
	return *o.SupressRate
}

// GetSupressRateOk returns a tuple with the SupressRate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetSupressRateOk() (*bool, bool) {
	if o == nil || IsNil(o.SupressRate) {
		return nil, false
	}
	return o.SupressRate, true
}

// HasSupressRate returns a boolean if a field has been set.
func (o *RatePlanType) HasSupressRate() bool {
	if o != nil && !IsNil(o.SupressRate) {
		return true
	}

	return false
}

// SetSupressRate gets a reference to the given bool and assigns it to the SupressRate field.
func (o *RatePlanType) SetSupressRate(v bool) {
	o.SupressRate = &v
}

// GetTiered returns the Tiered field value if set, zero value otherwise.
func (o *RatePlanType) GetTiered() bool {
	if o == nil || IsNil(o.Tiered) {
		var ret bool
		return ret
	}
	return *o.Tiered
}

// GetTieredOk returns a tuple with the Tiered field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanType) GetTieredOk() (*bool, bool) {
	if o == nil || IsNil(o.Tiered) {
		return nil, false
	}
	return o.Tiered, true
}

// HasTiered returns a boolean if a field has been set.
func (o *RatePlanType) HasTiered() bool {
	if o != nil && !IsNil(o.Tiered) {
		return true
	}

	return false
}

// SetTiered gets a reference to the given bool and assigns it to the Tiered field.
func (o *RatePlanType) SetTiered(v bool) {
	o.Tiered = &v
}

func (o RatePlanType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdvancedDailyBase) {
		toSerialize["advancedDailyBase"] = o.AdvancedDailyBase
	}
	if !IsNil(o.AdvancedDailyRate) {
		toSerialize["advancedDailyRate"] = o.AdvancedDailyRate
	}
	if !IsNil(o.BarRate) {
		toSerialize["barRate"] = o.BarRate
	}
	if !IsNil(o.Complimentary) {
		toSerialize["complimentary"] = o.Complimentary
	}
	if !IsNil(o.Daily) {
		toSerialize["daily"] = o.Daily
	}
	if !IsNil(o.DayType) {
		toSerialize["dayType"] = o.DayType
	}
	if !IsNil(o.DayUse) {
		toSerialize["dayUse"] = o.DayUse
	}
	if !IsNil(o.DiscountAllowed) {
		toSerialize["discountAllowed"] = o.DiscountAllowed
	}
	if !IsNil(o.Distribution) {
		toSerialize["distribution"] = o.Distribution
	}
	if !IsNil(o.HouseUse) {
		toSerialize["houseUse"] = o.HouseUse
	}
	if !IsNil(o.MembershipEligible) {
		toSerialize["membershipEligible"] = o.MembershipEligible
	}
	if !IsNil(o.MobileCheckinAllowed) {
		toSerialize["mobileCheckinAllowed"] = o.MobileCheckinAllowed
	}
	if !IsNil(o.MobileCheckoutAllowed) {
		toSerialize["mobileCheckoutAllowed"] = o.MobileCheckoutAllowed
	}
	if !IsNil(o.Negotiated) {
		toSerialize["negotiated"] = o.Negotiated
	}
	if !IsNil(o.OwnerRate) {
		toSerialize["ownerRate"] = o.OwnerRate
	}
	if !IsNil(o.PrintRate) {
		toSerialize["printRate"] = o.PrintRate
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.Redemption) {
		toSerialize["redemption"] = o.Redemption
	}
	if !IsNil(o.SupressRate) {
		toSerialize["supressRate"] = o.SupressRate
	}
	if !IsNil(o.Tiered) {
		toSerialize["tiered"] = o.Tiered
	}
	return toSerialize, nil
}

type NullableRatePlanType struct {
	value *RatePlanType
	isSet bool
}

func (v NullableRatePlanType) Get() *RatePlanType {
	return v.value
}

func (v *NullableRatePlanType) Set(val *RatePlanType) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanType) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanType(val *RatePlanType) *NullableRatePlanType {
	return &NullableRatePlanType{value: val, isSet: true}
}

func (v NullableRatePlanType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


