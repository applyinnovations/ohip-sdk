# CopyFunctionSpaceLocationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Locations** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of function space location(s) to be copied. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCopyFunctionSpaceLocationsRequest

`func NewCopyFunctionSpaceLocationsRequest() *CopyFunctionSpaceLocationsRequest`

NewCopyFunctionSpaceLocationsRequest instantiates a new CopyFunctionSpaceLocationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyFunctionSpaceLocationsRequestWithDefaults

`func NewCopyFunctionSpaceLocationsRequestWithDefaults() *CopyFunctionSpaceLocationsRequest`

NewCopyFunctionSpaceLocationsRequestWithDefaults instantiates a new CopyFunctionSpaceLocationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CopyFunctionSpaceLocationsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyFunctionSpaceLocationsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyFunctionSpaceLocationsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyFunctionSpaceLocationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetLocations

`func (o *CopyFunctionSpaceLocationsRequest) GetLocations() []CopyConfigurationCodeType`

GetLocations returns the Locations field if non-nil, zero value otherwise.

### GetLocationsOk

`func (o *CopyFunctionSpaceLocationsRequest) GetLocationsOk() (*[]CopyConfigurationCodeType, bool)`

GetLocationsOk returns a tuple with the Locations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocations

`func (o *CopyFunctionSpaceLocationsRequest) SetLocations(v []CopyConfigurationCodeType)`

SetLocations sets Locations field to given value.

### HasLocations

`func (o *CopyFunctionSpaceLocationsRequest) HasLocations() bool`

HasLocations returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyFunctionSpaceLocationsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyFunctionSpaceLocationsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyFunctionSpaceLocationsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyFunctionSpaceLocationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


