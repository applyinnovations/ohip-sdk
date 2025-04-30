# OwnerTeamsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnerTeams** | Pointer to [**[]OwnerTeamType**](OwnerTeamType.md) | List of Owner Teams. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewOwnerTeamsToBeChanged

`func NewOwnerTeamsToBeChanged() *OwnerTeamsToBeChanged`

NewOwnerTeamsToBeChanged instantiates a new OwnerTeamsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOwnerTeamsToBeChangedWithDefaults

`func NewOwnerTeamsToBeChangedWithDefaults() *OwnerTeamsToBeChanged`

NewOwnerTeamsToBeChangedWithDefaults instantiates a new OwnerTeamsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOwnerTeams

`func (o *OwnerTeamsToBeChanged) GetOwnerTeams() []OwnerTeamType`

GetOwnerTeams returns the OwnerTeams field if non-nil, zero value otherwise.

### GetOwnerTeamsOk

`func (o *OwnerTeamsToBeChanged) GetOwnerTeamsOk() (*[]OwnerTeamType, bool)`

GetOwnerTeamsOk returns a tuple with the OwnerTeams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerTeams

`func (o *OwnerTeamsToBeChanged) SetOwnerTeams(v []OwnerTeamType)`

SetOwnerTeams sets OwnerTeams field to given value.

### HasOwnerTeams

`func (o *OwnerTeamsToBeChanged) HasOwnerTeams() bool`

HasOwnerTeams returns a boolean if a field has been set.

### GetLinks

`func (o *OwnerTeamsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *OwnerTeamsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *OwnerTeamsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *OwnerTeamsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *OwnerTeamsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *OwnerTeamsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *OwnerTeamsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *OwnerTeamsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


