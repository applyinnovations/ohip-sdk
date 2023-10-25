# PutWaitlistPrioritiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**WaitlistPriorities** | Pointer to [**[]WaitlistPriorityType**](WaitlistPriorityType.md) | List of Waitlist Priorities. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutWaitlistPrioritiesRequest

`func NewPutWaitlistPrioritiesRequest() *PutWaitlistPrioritiesRequest`

NewPutWaitlistPrioritiesRequest instantiates a new PutWaitlistPrioritiesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutWaitlistPrioritiesRequestWithDefaults

`func NewPutWaitlistPrioritiesRequestWithDefaults() *PutWaitlistPrioritiesRequest`

NewPutWaitlistPrioritiesRequestWithDefaults instantiates a new PutWaitlistPrioritiesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutWaitlistPrioritiesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutWaitlistPrioritiesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutWaitlistPrioritiesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutWaitlistPrioritiesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWaitlistPriorities

`func (o *PutWaitlistPrioritiesRequest) GetWaitlistPriorities() []WaitlistPriorityType`

GetWaitlistPriorities returns the WaitlistPriorities field if non-nil, zero value otherwise.

### GetWaitlistPrioritiesOk

`func (o *PutWaitlistPrioritiesRequest) GetWaitlistPrioritiesOk() (*[]WaitlistPriorityType, bool)`

GetWaitlistPrioritiesOk returns a tuple with the WaitlistPriorities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlistPriorities

`func (o *PutWaitlistPrioritiesRequest) SetWaitlistPriorities(v []WaitlistPriorityType)`

SetWaitlistPriorities sets WaitlistPriorities field to given value.

### HasWaitlistPriorities

`func (o *PutWaitlistPrioritiesRequest) HasWaitlistPriorities() bool`

HasWaitlistPriorities returns a boolean if a field has been set.

### GetWarnings

`func (o *PutWaitlistPrioritiesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutWaitlistPrioritiesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutWaitlistPrioritiesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutWaitlistPrioritiesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


