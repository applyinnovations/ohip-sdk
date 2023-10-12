# RotationGroupsResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RotationGroups** | Pointer to [**RotationGroupsResultType**](RotationGroupsResultType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRotationGroupsResult

`func NewRotationGroupsResult() *RotationGroupsResult`

NewRotationGroupsResult instantiates a new RotationGroupsResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRotationGroupsResultWithDefaults

`func NewRotationGroupsResultWithDefaults() *RotationGroupsResult`

NewRotationGroupsResultWithDefaults instantiates a new RotationGroupsResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRotationGroups

`func (o *RotationGroupsResult) GetRotationGroups() RotationGroupsResultType`

GetRotationGroups returns the RotationGroups field if non-nil, zero value otherwise.

### GetRotationGroupsOk

`func (o *RotationGroupsResult) GetRotationGroupsOk() (*RotationGroupsResultType, bool)`

GetRotationGroupsOk returns a tuple with the RotationGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRotationGroups

`func (o *RotationGroupsResult) SetRotationGroups(v RotationGroupsResultType)`

SetRotationGroups sets RotationGroups field to given value.

### HasRotationGroups

`func (o *RotationGroupsResult) HasRotationGroups() bool`

HasRotationGroups returns a boolean if a field has been set.

### GetLinks

`func (o *RotationGroupsResult) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RotationGroupsResult) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RotationGroupsResult) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RotationGroupsResult) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RotationGroupsResult) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RotationGroupsResult) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RotationGroupsResult) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RotationGroupsResult) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


