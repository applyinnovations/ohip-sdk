# MembershipBenefitProgramsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipBenefitPrograms** | Pointer to [**[]MembershipBenefitProgramType**](MembershipBenefitProgramType.md) | Membership Benefit Program details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipBenefitProgramsInfo

`func NewMembershipBenefitProgramsInfo() *MembershipBenefitProgramsInfo`

NewMembershipBenefitProgramsInfo instantiates a new MembershipBenefitProgramsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipBenefitProgramsInfoWithDefaults

`func NewMembershipBenefitProgramsInfoWithDefaults() *MembershipBenefitProgramsInfo`

NewMembershipBenefitProgramsInfoWithDefaults instantiates a new MembershipBenefitProgramsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipBenefitProgramsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipBenefitProgramsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipBenefitProgramsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipBenefitProgramsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipBenefitPrograms

`func (o *MembershipBenefitProgramsInfo) GetMembershipBenefitPrograms() []MembershipBenefitProgramType`

GetMembershipBenefitPrograms returns the MembershipBenefitPrograms field if non-nil, zero value otherwise.

### GetMembershipBenefitProgramsOk

`func (o *MembershipBenefitProgramsInfo) GetMembershipBenefitProgramsOk() (*[]MembershipBenefitProgramType, bool)`

GetMembershipBenefitProgramsOk returns a tuple with the MembershipBenefitPrograms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipBenefitPrograms

`func (o *MembershipBenefitProgramsInfo) SetMembershipBenefitPrograms(v []MembershipBenefitProgramType)`

SetMembershipBenefitPrograms sets MembershipBenefitPrograms field to given value.

### HasMembershipBenefitPrograms

`func (o *MembershipBenefitProgramsInfo) HasMembershipBenefitPrograms() bool`

HasMembershipBenefitPrograms returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipBenefitProgramsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipBenefitProgramsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipBenefitProgramsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipBenefitProgramsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


