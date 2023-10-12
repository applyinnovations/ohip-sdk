# MembershipEnrollmentCodesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipEnrollmentCodes** | Pointer to [**[]MembershipEnrollmentCodeType**](MembershipEnrollmentCodeType.md) | List of Membership Enrollment Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipEnrollmentCodesDetails

`func NewMembershipEnrollmentCodesDetails() *MembershipEnrollmentCodesDetails`

NewMembershipEnrollmentCodesDetails instantiates a new MembershipEnrollmentCodesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipEnrollmentCodesDetailsWithDefaults

`func NewMembershipEnrollmentCodesDetailsWithDefaults() *MembershipEnrollmentCodesDetails`

NewMembershipEnrollmentCodesDetailsWithDefaults instantiates a new MembershipEnrollmentCodesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipEnrollmentCodes

`func (o *MembershipEnrollmentCodesDetails) GetMembershipEnrollmentCodes() []MembershipEnrollmentCodeType`

GetMembershipEnrollmentCodes returns the MembershipEnrollmentCodes field if non-nil, zero value otherwise.

### GetMembershipEnrollmentCodesOk

`func (o *MembershipEnrollmentCodesDetails) GetMembershipEnrollmentCodesOk() (*[]MembershipEnrollmentCodeType, bool)`

GetMembershipEnrollmentCodesOk returns a tuple with the MembershipEnrollmentCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipEnrollmentCodes

`func (o *MembershipEnrollmentCodesDetails) SetMembershipEnrollmentCodes(v []MembershipEnrollmentCodeType)`

SetMembershipEnrollmentCodes sets MembershipEnrollmentCodes field to given value.

### HasMembershipEnrollmentCodes

`func (o *MembershipEnrollmentCodesDetails) HasMembershipEnrollmentCodes() bool`

HasMembershipEnrollmentCodes returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipEnrollmentCodesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipEnrollmentCodesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipEnrollmentCodesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipEnrollmentCodesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipEnrollmentCodesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipEnrollmentCodesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipEnrollmentCodesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipEnrollmentCodesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


