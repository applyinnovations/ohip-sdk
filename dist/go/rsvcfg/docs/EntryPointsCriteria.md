# EntryPointsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntryPoints** | Pointer to [**[]EntryPointType**](EntryPointType.md) | List of Entry Points. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewEntryPointsCriteria

`func NewEntryPointsCriteria() *EntryPointsCriteria`

NewEntryPointsCriteria instantiates a new EntryPointsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntryPointsCriteriaWithDefaults

`func NewEntryPointsCriteriaWithDefaults() *EntryPointsCriteria`

NewEntryPointsCriteriaWithDefaults instantiates a new EntryPointsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntryPoints

`func (o *EntryPointsCriteria) GetEntryPoints() []EntryPointType`

GetEntryPoints returns the EntryPoints field if non-nil, zero value otherwise.

### GetEntryPointsOk

`func (o *EntryPointsCriteria) GetEntryPointsOk() (*[]EntryPointType, bool)`

GetEntryPointsOk returns a tuple with the EntryPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntryPoints

`func (o *EntryPointsCriteria) SetEntryPoints(v []EntryPointType)`

SetEntryPoints sets EntryPoints field to given value.

### HasEntryPoints

`func (o *EntryPointsCriteria) HasEntryPoints() bool`

HasEntryPoints returns a boolean if a field has been set.

### GetLinks

`func (o *EntryPointsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *EntryPointsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *EntryPointsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *EntryPointsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *EntryPointsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *EntryPointsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *EntryPointsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *EntryPointsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

