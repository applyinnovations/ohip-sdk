# CopyFunctionSpaceLocations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Locations** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of function space location(s) to be copied. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyFunctionSpaceLocations

`func NewCopyFunctionSpaceLocations() *CopyFunctionSpaceLocations`

NewCopyFunctionSpaceLocations instantiates a new CopyFunctionSpaceLocations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyFunctionSpaceLocationsWithDefaults

`func NewCopyFunctionSpaceLocationsWithDefaults() *CopyFunctionSpaceLocations`

NewCopyFunctionSpaceLocationsWithDefaults instantiates a new CopyFunctionSpaceLocations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CopyFunctionSpaceLocations) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyFunctionSpaceLocations) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyFunctionSpaceLocations) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyFunctionSpaceLocations) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetLocations

`func (o *CopyFunctionSpaceLocations) GetLocations() []CopyConfigurationCodeType`

GetLocations returns the Locations field if non-nil, zero value otherwise.

### GetLocationsOk

`func (o *CopyFunctionSpaceLocations) GetLocationsOk() (*[]CopyConfigurationCodeType, bool)`

GetLocationsOk returns a tuple with the Locations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocations

`func (o *CopyFunctionSpaceLocations) SetLocations(v []CopyConfigurationCodeType)`

SetLocations sets Locations field to given value.

### HasLocations

`func (o *CopyFunctionSpaceLocations) HasLocations() bool`

HasLocations returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyFunctionSpaceLocations) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyFunctionSpaceLocations) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyFunctionSpaceLocations) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyFunctionSpaceLocations) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


