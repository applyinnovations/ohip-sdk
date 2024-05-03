# FunctionSpaceEvents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**SharedFunctionSpaceEvents** | Pointer to [**SharedFunctionSpaceEventsType**](SharedFunctionSpaceEventsType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewFunctionSpaceEvents

`func NewFunctionSpaceEvents() *FunctionSpaceEvents`

NewFunctionSpaceEvents instantiates a new FunctionSpaceEvents object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceEventsWithDefaults

`func NewFunctionSpaceEventsWithDefaults() *FunctionSpaceEvents`

NewFunctionSpaceEventsWithDefaults instantiates a new FunctionSpaceEvents object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *FunctionSpaceEvents) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FunctionSpaceEvents) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FunctionSpaceEvents) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FunctionSpaceEvents) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSharedFunctionSpaceEvents

`func (o *FunctionSpaceEvents) GetSharedFunctionSpaceEvents() SharedFunctionSpaceEventsType`

GetSharedFunctionSpaceEvents returns the SharedFunctionSpaceEvents field if non-nil, zero value otherwise.

### GetSharedFunctionSpaceEventsOk

`func (o *FunctionSpaceEvents) GetSharedFunctionSpaceEventsOk() (*SharedFunctionSpaceEventsType, bool)`

GetSharedFunctionSpaceEventsOk returns a tuple with the SharedFunctionSpaceEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedFunctionSpaceEvents

`func (o *FunctionSpaceEvents) SetSharedFunctionSpaceEvents(v SharedFunctionSpaceEventsType)`

SetSharedFunctionSpaceEvents sets SharedFunctionSpaceEvents field to given value.

### HasSharedFunctionSpaceEvents

`func (o *FunctionSpaceEvents) HasSharedFunctionSpaceEvents() bool`

HasSharedFunctionSpaceEvents returns a boolean if a field has been set.

### GetWarnings

`func (o *FunctionSpaceEvents) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FunctionSpaceEvents) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FunctionSpaceEvents) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FunctionSpaceEvents) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


