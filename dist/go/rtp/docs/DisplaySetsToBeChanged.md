# DisplaySetsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplaySets** | Pointer to [**[]DisplaySetType**](DisplaySetType.md) | List of Display Sets. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDisplaySetsToBeChanged

`func NewDisplaySetsToBeChanged() *DisplaySetsToBeChanged`

NewDisplaySetsToBeChanged instantiates a new DisplaySetsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDisplaySetsToBeChangedWithDefaults

`func NewDisplaySetsToBeChangedWithDefaults() *DisplaySetsToBeChanged`

NewDisplaySetsToBeChangedWithDefaults instantiates a new DisplaySetsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDisplaySets

`func (o *DisplaySetsToBeChanged) GetDisplaySets() []DisplaySetType`

GetDisplaySets returns the DisplaySets field if non-nil, zero value otherwise.

### GetDisplaySetsOk

`func (o *DisplaySetsToBeChanged) GetDisplaySetsOk() (*[]DisplaySetType, bool)`

GetDisplaySetsOk returns a tuple with the DisplaySets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySets

`func (o *DisplaySetsToBeChanged) SetDisplaySets(v []DisplaySetType)`

SetDisplaySets sets DisplaySets field to given value.

### HasDisplaySets

`func (o *DisplaySetsToBeChanged) HasDisplaySets() bool`

HasDisplaySets returns a boolean if a field has been set.

### GetLinks

`func (o *DisplaySetsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DisplaySetsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DisplaySetsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DisplaySetsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DisplaySetsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DisplaySetsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DisplaySetsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DisplaySetsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


