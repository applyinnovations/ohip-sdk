# ChangeFunctionSpaceLocationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Locations** | Pointer to [**[]FunctionSpaceLocationType**](FunctionSpaceLocationType.md) | List of the function space locations to be configured or fetched | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeFunctionSpaceLocationsRequest

`func NewChangeFunctionSpaceLocationsRequest() *ChangeFunctionSpaceLocationsRequest`

NewChangeFunctionSpaceLocationsRequest instantiates a new ChangeFunctionSpaceLocationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeFunctionSpaceLocationsRequestWithDefaults

`func NewChangeFunctionSpaceLocationsRequestWithDefaults() *ChangeFunctionSpaceLocationsRequest`

NewChangeFunctionSpaceLocationsRequestWithDefaults instantiates a new ChangeFunctionSpaceLocationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeFunctionSpaceLocationsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeFunctionSpaceLocationsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeFunctionSpaceLocationsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeFunctionSpaceLocationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetLocations

`func (o *ChangeFunctionSpaceLocationsRequest) GetLocations() []FunctionSpaceLocationType`

GetLocations returns the Locations field if non-nil, zero value otherwise.

### GetLocationsOk

`func (o *ChangeFunctionSpaceLocationsRequest) GetLocationsOk() (*[]FunctionSpaceLocationType, bool)`

GetLocationsOk returns a tuple with the Locations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocations

`func (o *ChangeFunctionSpaceLocationsRequest) SetLocations(v []FunctionSpaceLocationType)`

SetLocations sets Locations field to given value.

### HasLocations

`func (o *ChangeFunctionSpaceLocationsRequest) HasLocations() bool`

HasLocations returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeFunctionSpaceLocationsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeFunctionSpaceLocationsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeFunctionSpaceLocationsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeFunctionSpaceLocationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


