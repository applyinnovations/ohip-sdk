# FunctionSpaceDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FunctionSpaceRoom** | Pointer to [**FunctionSpaceType**](FunctionSpaceType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFunctionSpaceDetails

`func NewFunctionSpaceDetails() *FunctionSpaceDetails`

NewFunctionSpaceDetails instantiates a new FunctionSpaceDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceDetailsWithDefaults

`func NewFunctionSpaceDetailsWithDefaults() *FunctionSpaceDetails`

NewFunctionSpaceDetailsWithDefaults instantiates a new FunctionSpaceDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFunctionSpaceRoom

`func (o *FunctionSpaceDetails) GetFunctionSpaceRoom() FunctionSpaceType`

GetFunctionSpaceRoom returns the FunctionSpaceRoom field if non-nil, zero value otherwise.

### GetFunctionSpaceRoomOk

`func (o *FunctionSpaceDetails) GetFunctionSpaceRoomOk() (*FunctionSpaceType, bool)`

GetFunctionSpaceRoomOk returns a tuple with the FunctionSpaceRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpaceRoom

`func (o *FunctionSpaceDetails) SetFunctionSpaceRoom(v FunctionSpaceType)`

SetFunctionSpaceRoom sets FunctionSpaceRoom field to given value.

### HasFunctionSpaceRoom

`func (o *FunctionSpaceDetails) HasFunctionSpaceRoom() bool`

HasFunctionSpaceRoom returns a boolean if a field has been set.

### GetLinks

`func (o *FunctionSpaceDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FunctionSpaceDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FunctionSpaceDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FunctionSpaceDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FunctionSpaceDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FunctionSpaceDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FunctionSpaceDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FunctionSpaceDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


