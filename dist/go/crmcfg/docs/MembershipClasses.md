# MembershipClasses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipClasses** | Pointer to [**[]MembershipClassType**](MembershipClassType.md) | List of the Membership Class to be configured or fetched | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipClasses

`func NewMembershipClasses() *MembershipClasses`

NewMembershipClasses instantiates a new MembershipClasses object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipClassesWithDefaults

`func NewMembershipClassesWithDefaults() *MembershipClasses`

NewMembershipClassesWithDefaults instantiates a new MembershipClasses object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipClasses

`func (o *MembershipClasses) GetMembershipClasses() []MembershipClassType`

GetMembershipClasses returns the MembershipClasses field if non-nil, zero value otherwise.

### GetMembershipClassesOk

`func (o *MembershipClasses) GetMembershipClassesOk() (*[]MembershipClassType, bool)`

GetMembershipClassesOk returns a tuple with the MembershipClasses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipClasses

`func (o *MembershipClasses) SetMembershipClasses(v []MembershipClassType)`

SetMembershipClasses sets MembershipClasses field to given value.

### HasMembershipClasses

`func (o *MembershipClasses) HasMembershipClasses() bool`

HasMembershipClasses returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipClasses) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipClasses) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipClasses) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipClasses) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipClasses) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipClasses) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipClasses) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipClasses) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


