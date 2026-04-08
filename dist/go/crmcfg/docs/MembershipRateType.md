# MembershipRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Membership Rate hotel code. | [optional] 
**RuleCode** | Pointer to **string** | Membership Rate rule code. | [optional] 
**Description** | Pointer to **string** | Description of the rule. | [optional] 
**BeginDate** | Pointer to **string** | Date for which the rule will be affective. | [optional] 
**EndDate** | Pointer to **string** | Date for which the rule will end being affective. | [optional] 
**RatePlanCodes** | Pointer to **[]string** |  | [optional] 
**Memberships** | Pointer to [**[]RateRuleMembershipType**](RateRuleMembershipType.md) | Rate rule membership type details. | [optional] 
**LatestTOB** | Pointer to **string** | Latest time of booking for guaranteed availability. Only Time part is used. | [optional] 
**DaysToDOA** | Pointer to **int32** | Number of days to day of arrival for guaranteed availability. | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether the Membership Rate is Active/Inactive. | [optional] 
**Guaranteed** | Pointer to **bool** | Indicates whether the rule is used for member guaranteed availability. | [optional] 

## Methods

### NewMembershipRateType

`func NewMembershipRateType() *MembershipRateType`

NewMembershipRateType instantiates a new MembershipRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipRateTypeWithDefaults

`func NewMembershipRateTypeWithDefaults() *MembershipRateType`

NewMembershipRateTypeWithDefaults instantiates a new MembershipRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *MembershipRateType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MembershipRateType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MembershipRateType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MembershipRateType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRuleCode

`func (o *MembershipRateType) GetRuleCode() string`

GetRuleCode returns the RuleCode field if non-nil, zero value otherwise.

### GetRuleCodeOk

`func (o *MembershipRateType) GetRuleCodeOk() (*string, bool)`

GetRuleCodeOk returns a tuple with the RuleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleCode

`func (o *MembershipRateType) SetRuleCode(v string)`

SetRuleCode sets RuleCode field to given value.

### HasRuleCode

`func (o *MembershipRateType) HasRuleCode() bool`

HasRuleCode returns a boolean if a field has been set.

### GetDescription

`func (o *MembershipRateType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MembershipRateType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MembershipRateType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MembershipRateType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetBeginDate

`func (o *MembershipRateType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *MembershipRateType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *MembershipRateType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *MembershipRateType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetEndDate

`func (o *MembershipRateType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *MembershipRateType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *MembershipRateType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *MembershipRateType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetRatePlanCodes

`func (o *MembershipRateType) GetRatePlanCodes() []string`

GetRatePlanCodes returns the RatePlanCodes field if non-nil, zero value otherwise.

### GetRatePlanCodesOk

`func (o *MembershipRateType) GetRatePlanCodesOk() (*[]string, bool)`

GetRatePlanCodesOk returns a tuple with the RatePlanCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCodes

`func (o *MembershipRateType) SetRatePlanCodes(v []string)`

SetRatePlanCodes sets RatePlanCodes field to given value.

### HasRatePlanCodes

`func (o *MembershipRateType) HasRatePlanCodes() bool`

HasRatePlanCodes returns a boolean if a field has been set.

### GetMemberships

`func (o *MembershipRateType) GetMemberships() []RateRuleMembershipType`

GetMemberships returns the Memberships field if non-nil, zero value otherwise.

### GetMembershipsOk

`func (o *MembershipRateType) GetMembershipsOk() (*[]RateRuleMembershipType, bool)`

GetMembershipsOk returns a tuple with the Memberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberships

`func (o *MembershipRateType) SetMemberships(v []RateRuleMembershipType)`

SetMemberships sets Memberships field to given value.

### HasMemberships

`func (o *MembershipRateType) HasMemberships() bool`

HasMemberships returns a boolean if a field has been set.

### GetLatestTOB

`func (o *MembershipRateType) GetLatestTOB() string`

GetLatestTOB returns the LatestTOB field if non-nil, zero value otherwise.

### GetLatestTOBOk

`func (o *MembershipRateType) GetLatestTOBOk() (*string, bool)`

GetLatestTOBOk returns a tuple with the LatestTOB field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLatestTOB

`func (o *MembershipRateType) SetLatestTOB(v string)`

SetLatestTOB sets LatestTOB field to given value.

### HasLatestTOB

`func (o *MembershipRateType) HasLatestTOB() bool`

HasLatestTOB returns a boolean if a field has been set.

### GetDaysToDOA

`func (o *MembershipRateType) GetDaysToDOA() int32`

GetDaysToDOA returns the DaysToDOA field if non-nil, zero value otherwise.

### GetDaysToDOAOk

`func (o *MembershipRateType) GetDaysToDOAOk() (*int32, bool)`

GetDaysToDOAOk returns a tuple with the DaysToDOA field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysToDOA

`func (o *MembershipRateType) SetDaysToDOA(v int32)`

SetDaysToDOA sets DaysToDOA field to given value.

### HasDaysToDOA

`func (o *MembershipRateType) HasDaysToDOA() bool`

HasDaysToDOA returns a boolean if a field has been set.

### GetInactive

`func (o *MembershipRateType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *MembershipRateType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *MembershipRateType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *MembershipRateType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetGuaranteed

`func (o *MembershipRateType) GetGuaranteed() bool`

GetGuaranteed returns the Guaranteed field if non-nil, zero value otherwise.

### GetGuaranteedOk

`func (o *MembershipRateType) GetGuaranteedOk() (*bool, bool)`

GetGuaranteedOk returns a tuple with the Guaranteed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteed

`func (o *MembershipRateType) SetGuaranteed(v bool)`

SetGuaranteed sets Guaranteed field to given value.

### HasGuaranteed

`func (o *MembershipRateType) HasGuaranteed() bool`

HasGuaranteed returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


