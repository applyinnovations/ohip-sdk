# FunctionSpaceLocationsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Locations** | Pointer to [**[]FunctionSpaceLocationType**](FunctionSpaceLocationType.md) | List of the function space locations to be configured or fetched | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFunctionSpaceLocationsToBeChanged

`func NewFunctionSpaceLocationsToBeChanged() *FunctionSpaceLocationsToBeChanged`

NewFunctionSpaceLocationsToBeChanged instantiates a new FunctionSpaceLocationsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceLocationsToBeChangedWithDefaults

`func NewFunctionSpaceLocationsToBeChangedWithDefaults() *FunctionSpaceLocationsToBeChanged`

NewFunctionSpaceLocationsToBeChangedWithDefaults instantiates a new FunctionSpaceLocationsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *FunctionSpaceLocationsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FunctionSpaceLocationsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FunctionSpaceLocationsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FunctionSpaceLocationsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetLocations

`func (o *FunctionSpaceLocationsToBeChanged) GetLocations() []FunctionSpaceLocationType`

GetLocations returns the Locations field if non-nil, zero value otherwise.

### GetLocationsOk

`func (o *FunctionSpaceLocationsToBeChanged) GetLocationsOk() (*[]FunctionSpaceLocationType, bool)`

GetLocationsOk returns a tuple with the Locations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocations

`func (o *FunctionSpaceLocationsToBeChanged) SetLocations(v []FunctionSpaceLocationType)`

SetLocations sets Locations field to given value.

### HasLocations

`func (o *FunctionSpaceLocationsToBeChanged) HasLocations() bool`

HasLocations returns a boolean if a field has been set.

### GetWarnings

`func (o *FunctionSpaceLocationsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FunctionSpaceLocationsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FunctionSpaceLocationsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FunctionSpaceLocationsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

