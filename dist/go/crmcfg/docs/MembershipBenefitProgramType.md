# MembershipBenefitProgramType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipType** | Pointer to **string** | Membership type | [optional] 
**Code** | Pointer to **string** | Benefit Code | [optional] 
**DateRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**MinimumLevel** | Pointer to **string** | Min value for membership level. This is the minimum membership level member gets for enrolling into this program. | [optional] 
**Description** | Pointer to **string** | Description of the Membership Benefit Program. | [optional] 
**Inactive** | Pointer to **bool** | Flag indicates whether the Membership Benefit Program is active or not. | [optional] 

## Methods

### NewMembershipBenefitProgramType

`func NewMembershipBenefitProgramType() *MembershipBenefitProgramType`

NewMembershipBenefitProgramType instantiates a new MembershipBenefitProgramType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipBenefitProgramTypeWithDefaults

`func NewMembershipBenefitProgramTypeWithDefaults() *MembershipBenefitProgramType`

NewMembershipBenefitProgramTypeWithDefaults instantiates a new MembershipBenefitProgramType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipType

`func (o *MembershipBenefitProgramType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *MembershipBenefitProgramType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *MembershipBenefitProgramType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *MembershipBenefitProgramType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetCode

`func (o *MembershipBenefitProgramType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *MembershipBenefitProgramType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *MembershipBenefitProgramType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *MembershipBenefitProgramType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDateRange

`func (o *MembershipBenefitProgramType) GetDateRange() DateRangeType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *MembershipBenefitProgramType) GetDateRangeOk() (*DateRangeType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *MembershipBenefitProgramType) SetDateRange(v DateRangeType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *MembershipBenefitProgramType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetMinimumLevel

`func (o *MembershipBenefitProgramType) GetMinimumLevel() string`

GetMinimumLevel returns the MinimumLevel field if non-nil, zero value otherwise.

### GetMinimumLevelOk

`func (o *MembershipBenefitProgramType) GetMinimumLevelOk() (*string, bool)`

GetMinimumLevelOk returns a tuple with the MinimumLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumLevel

`func (o *MembershipBenefitProgramType) SetMinimumLevel(v string)`

SetMinimumLevel sets MinimumLevel field to given value.

### HasMinimumLevel

`func (o *MembershipBenefitProgramType) HasMinimumLevel() bool`

HasMinimumLevel returns a boolean if a field has been set.

### GetDescription

`func (o *MembershipBenefitProgramType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MembershipBenefitProgramType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MembershipBenefitProgramType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MembershipBenefitProgramType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetInactive

`func (o *MembershipBenefitProgramType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *MembershipBenefitProgramType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *MembershipBenefitProgramType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *MembershipBenefitProgramType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


