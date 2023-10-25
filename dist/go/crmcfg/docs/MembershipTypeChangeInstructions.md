# MembershipTypeChangeInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipTypeChangeInstructions** | Pointer to [**[]MembershipTypeChangeInstructionType**](MembershipTypeChangeInstructionType.md) | A collection of MembershipTypes with information that needs to be changed. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipTypeChangeInstructions

`func NewMembershipTypeChangeInstructions() *MembershipTypeChangeInstructions`

NewMembershipTypeChangeInstructions instantiates a new MembershipTypeChangeInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTypeChangeInstructionsWithDefaults

`func NewMembershipTypeChangeInstructionsWithDefaults() *MembershipTypeChangeInstructions`

NewMembershipTypeChangeInstructionsWithDefaults instantiates a new MembershipTypeChangeInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipTypeChangeInstructions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipTypeChangeInstructions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipTypeChangeInstructions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipTypeChangeInstructions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipTypeChangeInstructions

`func (o *MembershipTypeChangeInstructions) GetMembershipTypeChangeInstructions() []MembershipTypeChangeInstructionType`

GetMembershipTypeChangeInstructions returns the MembershipTypeChangeInstructions field if non-nil, zero value otherwise.

### GetMembershipTypeChangeInstructionsOk

`func (o *MembershipTypeChangeInstructions) GetMembershipTypeChangeInstructionsOk() (*[]MembershipTypeChangeInstructionType, bool)`

GetMembershipTypeChangeInstructionsOk returns a tuple with the MembershipTypeChangeInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTypeChangeInstructions

`func (o *MembershipTypeChangeInstructions) SetMembershipTypeChangeInstructions(v []MembershipTypeChangeInstructionType)`

SetMembershipTypeChangeInstructions sets MembershipTypeChangeInstructions field to given value.

### HasMembershipTypeChangeInstructions

`func (o *MembershipTypeChangeInstructions) HasMembershipTypeChangeInstructions() bool`

HasMembershipTypeChangeInstructions returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipTypeChangeInstructions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipTypeChangeInstructions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipTypeChangeInstructions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipTypeChangeInstructions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


