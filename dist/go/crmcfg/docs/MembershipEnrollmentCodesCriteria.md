# MembershipEnrollmentCodesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipEnrollmentCodes** | Pointer to [**[]MembershipEnrollmentCodeType**](MembershipEnrollmentCodeType.md) | List of Membership Enrollment Codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipEnrollmentCodesCriteria

`func NewMembershipEnrollmentCodesCriteria() *MembershipEnrollmentCodesCriteria`

NewMembershipEnrollmentCodesCriteria instantiates a new MembershipEnrollmentCodesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipEnrollmentCodesCriteriaWithDefaults

`func NewMembershipEnrollmentCodesCriteriaWithDefaults() *MembershipEnrollmentCodesCriteria`

NewMembershipEnrollmentCodesCriteriaWithDefaults instantiates a new MembershipEnrollmentCodesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipEnrollmentCodesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipEnrollmentCodesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipEnrollmentCodesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipEnrollmentCodesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipEnrollmentCodes

`func (o *MembershipEnrollmentCodesCriteria) GetMembershipEnrollmentCodes() []MembershipEnrollmentCodeType`

GetMembershipEnrollmentCodes returns the MembershipEnrollmentCodes field if non-nil, zero value otherwise.

### GetMembershipEnrollmentCodesOk

`func (o *MembershipEnrollmentCodesCriteria) GetMembershipEnrollmentCodesOk() (*[]MembershipEnrollmentCodeType, bool)`

GetMembershipEnrollmentCodesOk returns a tuple with the MembershipEnrollmentCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipEnrollmentCodes

`func (o *MembershipEnrollmentCodesCriteria) SetMembershipEnrollmentCodes(v []MembershipEnrollmentCodeType)`

SetMembershipEnrollmentCodes sets MembershipEnrollmentCodes field to given value.

### HasMembershipEnrollmentCodes

`func (o *MembershipEnrollmentCodesCriteria) HasMembershipEnrollmentCodes() bool`

HasMembershipEnrollmentCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipEnrollmentCodesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipEnrollmentCodesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipEnrollmentCodesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipEnrollmentCodesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


