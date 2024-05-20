# FunctionSpaceConfigDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FunctionSpace** | Pointer to [**FunctionSpaceConfigType**](FunctionSpaceConfigType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFunctionSpaceConfigDetails

`func NewFunctionSpaceConfigDetails() *FunctionSpaceConfigDetails`

NewFunctionSpaceConfigDetails instantiates a new FunctionSpaceConfigDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceConfigDetailsWithDefaults

`func NewFunctionSpaceConfigDetailsWithDefaults() *FunctionSpaceConfigDetails`

NewFunctionSpaceConfigDetailsWithDefaults instantiates a new FunctionSpaceConfigDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFunctionSpace

`func (o *FunctionSpaceConfigDetails) GetFunctionSpace() FunctionSpaceConfigType`

GetFunctionSpace returns the FunctionSpace field if non-nil, zero value otherwise.

### GetFunctionSpaceOk

`func (o *FunctionSpaceConfigDetails) GetFunctionSpaceOk() (*FunctionSpaceConfigType, bool)`

GetFunctionSpaceOk returns a tuple with the FunctionSpace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpace

`func (o *FunctionSpaceConfigDetails) SetFunctionSpace(v FunctionSpaceConfigType)`

SetFunctionSpace sets FunctionSpace field to given value.

### HasFunctionSpace

`func (o *FunctionSpaceConfigDetails) HasFunctionSpace() bool`

HasFunctionSpace returns a boolean if a field has been set.

### GetLinks

`func (o *FunctionSpaceConfigDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FunctionSpaceConfigDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FunctionSpaceConfigDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FunctionSpaceConfigDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FunctionSpaceConfigDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FunctionSpaceConfigDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FunctionSpaceConfigDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FunctionSpaceConfigDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


