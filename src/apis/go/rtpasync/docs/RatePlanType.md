# RatePlanType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RatePlanCode** | Pointer to **string** | Rate plan Code | [optional] 
**MobileCheckinAllowed** | Pointer to **bool** | This is a placeholder element for future use. Functionality may not be available for the current implementation. | [optional] 
**MobileCheckoutAllowed** | Pointer to **bool** | This is a placeholder element for future use. Functionality may not be available for the current implementation. | [optional] 
**SupressRate** | Pointer to **bool** | Is rate amount suppressed for the rate plan? | [optional] 
**PrintRate** | Pointer to **bool** | Is Rate amount printed on the reports for the rate plan? | [optional] 
**DiscountAllowed** | Pointer to **bool** | Is rate plan code discounted? | [optional] 
**Redemption** | Pointer to **bool** | Is redemption allowed on the rate code? | [optional] 
**BarRate** | Pointer to **bool** | Is rate plan code of BAR Rate type? | [optional] 
**Daily** | Pointer to **bool** | Is rate plan code a daily rate? | [optional] 
**Tiered** | Pointer to **bool** | Is rate plan code a tiered rate? | [optional] 
**DayUse** | Pointer to **bool** | Is rate plan code for day use? | [optional] 
**DayType** | Pointer to **bool** | Indicates if rate Calendar factors such as adder/multiplier should be used for price calculation. | [optional] 
**Complimentary** | Pointer to **bool** | Is rate plan code complimentary? | [optional] 
**HouseUse** | Pointer to **bool** | Is rate plan code for house use? | [optional] 
**Negotiated** | Pointer to **bool** | Is rate plan code only available as a negotiated rate that must be associated with a guest, company, or travel agent profile ? | [optional] 
**OwnerRate** | Pointer to **bool** | Is rate plan code flagged as an owner rate plan? Owner rate plans have special functionality for no-shows depending on the Rolling Noshow Preference application setting. | [optional] 
**MembershipEligible** | Pointer to **bool** | Is rate plan code flagged as eligible for memberships? This flag controls whether the guest stay, which this rate plan is attached to, qualifies for point calculations for Frequent Flyer or Frequent Guest programs. If the rate plan associated to the reservation has not been flagged for Membership then the guest will not earn any points/miles for their stay. | [optional] 
**AdvancedDailyBase** | Pointer to **bool** | Flag to identify if Rate Code is Advanced Daily Base Rate Code | [optional] 
**AdvancedDailyRate** | Pointer to **bool** | Flag to identify if Rate Code is Advanced Daily Rate | [optional] 
**Distribution** | Pointer to [**RatePlanDistributionType**](RatePlanDistributionType.md) |  | [optional] 

## Methods

### NewRatePlanType

`func NewRatePlanType() *RatePlanType`

NewRatePlanType instantiates a new RatePlanType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanTypeWithDefaults

`func NewRatePlanTypeWithDefaults() *RatePlanType`

NewRatePlanTypeWithDefaults instantiates a new RatePlanType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRatePlanCode

`func (o *RatePlanType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *RatePlanType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *RatePlanType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *RatePlanType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetMobileCheckinAllowed

`func (o *RatePlanType) GetMobileCheckinAllowed() bool`

GetMobileCheckinAllowed returns the MobileCheckinAllowed field if non-nil, zero value otherwise.

### GetMobileCheckinAllowedOk

`func (o *RatePlanType) GetMobileCheckinAllowedOk() (*bool, bool)`

GetMobileCheckinAllowedOk returns a tuple with the MobileCheckinAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMobileCheckinAllowed

`func (o *RatePlanType) SetMobileCheckinAllowed(v bool)`

SetMobileCheckinAllowed sets MobileCheckinAllowed field to given value.

### HasMobileCheckinAllowed

`func (o *RatePlanType) HasMobileCheckinAllowed() bool`

HasMobileCheckinAllowed returns a boolean if a field has been set.

### GetMobileCheckoutAllowed

`func (o *RatePlanType) GetMobileCheckoutAllowed() bool`

GetMobileCheckoutAllowed returns the MobileCheckoutAllowed field if non-nil, zero value otherwise.

### GetMobileCheckoutAllowedOk

`func (o *RatePlanType) GetMobileCheckoutAllowedOk() (*bool, bool)`

GetMobileCheckoutAllowedOk returns a tuple with the MobileCheckoutAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMobileCheckoutAllowed

`func (o *RatePlanType) SetMobileCheckoutAllowed(v bool)`

SetMobileCheckoutAllowed sets MobileCheckoutAllowed field to given value.

### HasMobileCheckoutAllowed

`func (o *RatePlanType) HasMobileCheckoutAllowed() bool`

HasMobileCheckoutAllowed returns a boolean if a field has been set.

### GetSupressRate

`func (o *RatePlanType) GetSupressRate() bool`

GetSupressRate returns the SupressRate field if non-nil, zero value otherwise.

### GetSupressRateOk

`func (o *RatePlanType) GetSupressRateOk() (*bool, bool)`

GetSupressRateOk returns a tuple with the SupressRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupressRate

`func (o *RatePlanType) SetSupressRate(v bool)`

SetSupressRate sets SupressRate field to given value.

### HasSupressRate

`func (o *RatePlanType) HasSupressRate() bool`

HasSupressRate returns a boolean if a field has been set.

### GetPrintRate

`func (o *RatePlanType) GetPrintRate() bool`

GetPrintRate returns the PrintRate field if non-nil, zero value otherwise.

### GetPrintRateOk

`func (o *RatePlanType) GetPrintRateOk() (*bool, bool)`

GetPrintRateOk returns a tuple with the PrintRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintRate

`func (o *RatePlanType) SetPrintRate(v bool)`

SetPrintRate sets PrintRate field to given value.

### HasPrintRate

`func (o *RatePlanType) HasPrintRate() bool`

HasPrintRate returns a boolean if a field has been set.

### GetDiscountAllowed

`func (o *RatePlanType) GetDiscountAllowed() bool`

GetDiscountAllowed returns the DiscountAllowed field if non-nil, zero value otherwise.

### GetDiscountAllowedOk

`func (o *RatePlanType) GetDiscountAllowedOk() (*bool, bool)`

GetDiscountAllowedOk returns a tuple with the DiscountAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountAllowed

`func (o *RatePlanType) SetDiscountAllowed(v bool)`

SetDiscountAllowed sets DiscountAllowed field to given value.

### HasDiscountAllowed

`func (o *RatePlanType) HasDiscountAllowed() bool`

HasDiscountAllowed returns a boolean if a field has been set.

### GetRedemption

`func (o *RatePlanType) GetRedemption() bool`

GetRedemption returns the Redemption field if non-nil, zero value otherwise.

### GetRedemptionOk

`func (o *RatePlanType) GetRedemptionOk() (*bool, bool)`

GetRedemptionOk returns a tuple with the Redemption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedemption

`func (o *RatePlanType) SetRedemption(v bool)`

SetRedemption sets Redemption field to given value.

### HasRedemption

`func (o *RatePlanType) HasRedemption() bool`

HasRedemption returns a boolean if a field has been set.

### GetBarRate

`func (o *RatePlanType) GetBarRate() bool`

GetBarRate returns the BarRate field if non-nil, zero value otherwise.

### GetBarRateOk

`func (o *RatePlanType) GetBarRateOk() (*bool, bool)`

GetBarRateOk returns a tuple with the BarRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBarRate

`func (o *RatePlanType) SetBarRate(v bool)`

SetBarRate sets BarRate field to given value.

### HasBarRate

`func (o *RatePlanType) HasBarRate() bool`

HasBarRate returns a boolean if a field has been set.

### GetDaily

`func (o *RatePlanType) GetDaily() bool`

GetDaily returns the Daily field if non-nil, zero value otherwise.

### GetDailyOk

`func (o *RatePlanType) GetDailyOk() (*bool, bool)`

GetDailyOk returns a tuple with the Daily field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaily

`func (o *RatePlanType) SetDaily(v bool)`

SetDaily sets Daily field to given value.

### HasDaily

`func (o *RatePlanType) HasDaily() bool`

HasDaily returns a boolean if a field has been set.

### GetTiered

`func (o *RatePlanType) GetTiered() bool`

GetTiered returns the Tiered field if non-nil, zero value otherwise.

### GetTieredOk

`func (o *RatePlanType) GetTieredOk() (*bool, bool)`

GetTieredOk returns a tuple with the Tiered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTiered

`func (o *RatePlanType) SetTiered(v bool)`

SetTiered sets Tiered field to given value.

### HasTiered

`func (o *RatePlanType) HasTiered() bool`

HasTiered returns a boolean if a field has been set.

### GetDayUse

`func (o *RatePlanType) GetDayUse() bool`

GetDayUse returns the DayUse field if non-nil, zero value otherwise.

### GetDayUseOk

`func (o *RatePlanType) GetDayUseOk() (*bool, bool)`

GetDayUseOk returns a tuple with the DayUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDayUse

`func (o *RatePlanType) SetDayUse(v bool)`

SetDayUse sets DayUse field to given value.

### HasDayUse

`func (o *RatePlanType) HasDayUse() bool`

HasDayUse returns a boolean if a field has been set.

### GetDayType

`func (o *RatePlanType) GetDayType() bool`

GetDayType returns the DayType field if non-nil, zero value otherwise.

### GetDayTypeOk

`func (o *RatePlanType) GetDayTypeOk() (*bool, bool)`

GetDayTypeOk returns a tuple with the DayType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDayType

`func (o *RatePlanType) SetDayType(v bool)`

SetDayType sets DayType field to given value.

### HasDayType

`func (o *RatePlanType) HasDayType() bool`

HasDayType returns a boolean if a field has been set.

### GetComplimentary

`func (o *RatePlanType) GetComplimentary() bool`

GetComplimentary returns the Complimentary field if non-nil, zero value otherwise.

### GetComplimentaryOk

`func (o *RatePlanType) GetComplimentaryOk() (*bool, bool)`

GetComplimentaryOk returns a tuple with the Complimentary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComplimentary

`func (o *RatePlanType) SetComplimentary(v bool)`

SetComplimentary sets Complimentary field to given value.

### HasComplimentary

`func (o *RatePlanType) HasComplimentary() bool`

HasComplimentary returns a boolean if a field has been set.

### GetHouseUse

`func (o *RatePlanType) GetHouseUse() bool`

GetHouseUse returns the HouseUse field if non-nil, zero value otherwise.

### GetHouseUseOk

`func (o *RatePlanType) GetHouseUseOk() (*bool, bool)`

GetHouseUseOk returns a tuple with the HouseUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHouseUse

`func (o *RatePlanType) SetHouseUse(v bool)`

SetHouseUse sets HouseUse field to given value.

### HasHouseUse

`func (o *RatePlanType) HasHouseUse() bool`

HasHouseUse returns a boolean if a field has been set.

### GetNegotiated

`func (o *RatePlanType) GetNegotiated() bool`

GetNegotiated returns the Negotiated field if non-nil, zero value otherwise.

### GetNegotiatedOk

`func (o *RatePlanType) GetNegotiatedOk() (*bool, bool)`

GetNegotiatedOk returns a tuple with the Negotiated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiated

`func (o *RatePlanType) SetNegotiated(v bool)`

SetNegotiated sets Negotiated field to given value.

### HasNegotiated

`func (o *RatePlanType) HasNegotiated() bool`

HasNegotiated returns a boolean if a field has been set.

### GetOwnerRate

`func (o *RatePlanType) GetOwnerRate() bool`

GetOwnerRate returns the OwnerRate field if non-nil, zero value otherwise.

### GetOwnerRateOk

`func (o *RatePlanType) GetOwnerRateOk() (*bool, bool)`

GetOwnerRateOk returns a tuple with the OwnerRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRate

`func (o *RatePlanType) SetOwnerRate(v bool)`

SetOwnerRate sets OwnerRate field to given value.

### HasOwnerRate

`func (o *RatePlanType) HasOwnerRate() bool`

HasOwnerRate returns a boolean if a field has been set.

### GetMembershipEligible

`func (o *RatePlanType) GetMembershipEligible() bool`

GetMembershipEligible returns the MembershipEligible field if non-nil, zero value otherwise.

### GetMembershipEligibleOk

`func (o *RatePlanType) GetMembershipEligibleOk() (*bool, bool)`

GetMembershipEligibleOk returns a tuple with the MembershipEligible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipEligible

`func (o *RatePlanType) SetMembershipEligible(v bool)`

SetMembershipEligible sets MembershipEligible field to given value.

### HasMembershipEligible

`func (o *RatePlanType) HasMembershipEligible() bool`

HasMembershipEligible returns a boolean if a field has been set.

### GetAdvancedDailyBase

`func (o *RatePlanType) GetAdvancedDailyBase() bool`

GetAdvancedDailyBase returns the AdvancedDailyBase field if non-nil, zero value otherwise.

### GetAdvancedDailyBaseOk

`func (o *RatePlanType) GetAdvancedDailyBaseOk() (*bool, bool)`

GetAdvancedDailyBaseOk returns a tuple with the AdvancedDailyBase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvancedDailyBase

`func (o *RatePlanType) SetAdvancedDailyBase(v bool)`

SetAdvancedDailyBase sets AdvancedDailyBase field to given value.

### HasAdvancedDailyBase

`func (o *RatePlanType) HasAdvancedDailyBase() bool`

HasAdvancedDailyBase returns a boolean if a field has been set.

### GetAdvancedDailyRate

`func (o *RatePlanType) GetAdvancedDailyRate() bool`

GetAdvancedDailyRate returns the AdvancedDailyRate field if non-nil, zero value otherwise.

### GetAdvancedDailyRateOk

`func (o *RatePlanType) GetAdvancedDailyRateOk() (*bool, bool)`

GetAdvancedDailyRateOk returns a tuple with the AdvancedDailyRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvancedDailyRate

`func (o *RatePlanType) SetAdvancedDailyRate(v bool)`

SetAdvancedDailyRate sets AdvancedDailyRate field to given value.

### HasAdvancedDailyRate

`func (o *RatePlanType) HasAdvancedDailyRate() bool`

HasAdvancedDailyRate returns a boolean if a field has been set.

### GetDistribution

`func (o *RatePlanType) GetDistribution() RatePlanDistributionType`

GetDistribution returns the Distribution field if non-nil, zero value otherwise.

### GetDistributionOk

`func (o *RatePlanType) GetDistributionOk() (*RatePlanDistributionType, bool)`

GetDistributionOk returns a tuple with the Distribution field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistribution

`func (o *RatePlanType) SetDistribution(v RatePlanDistributionType)`

SetDistribution sets Distribution field to given value.

### HasDistribution

`func (o *RatePlanType) HasDistribution() bool`

HasDistribution returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


