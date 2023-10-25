# PutWakeUpCallRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Calls** | Pointer to [**[]WakeUpCallType**](WakeUpCallType.md) | List of the wake up calls | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutWakeUpCallRequest

`func NewPutWakeUpCallRequest() *PutWakeUpCallRequest`

NewPutWakeUpCallRequest instantiates a new PutWakeUpCallRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutWakeUpCallRequestWithDefaults

`func NewPutWakeUpCallRequestWithDefaults() *PutWakeUpCallRequest`

NewPutWakeUpCallRequestWithDefaults instantiates a new PutWakeUpCallRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCalls

`func (o *PutWakeUpCallRequest) GetCalls() []WakeUpCallType`

GetCalls returns the Calls field if non-nil, zero value otherwise.

### GetCallsOk

`func (o *PutWakeUpCallRequest) GetCallsOk() (*[]WakeUpCallType, bool)`

GetCallsOk returns a tuple with the Calls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalls

`func (o *PutWakeUpCallRequest) SetCalls(v []WakeUpCallType)`

SetCalls sets Calls field to given value.

### HasCalls

`func (o *PutWakeUpCallRequest) HasCalls() bool`

HasCalls returns a boolean if a field has been set.

### GetLinks

`func (o *PutWakeUpCallRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutWakeUpCallRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutWakeUpCallRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutWakeUpCallRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutWakeUpCallRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutWakeUpCallRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutWakeUpCallRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutWakeUpCallRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


