# PutFolioPrintQueuesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioPrintQueues** | Pointer to [**[]FolioPrintQueueType**](FolioPrintQueueType.md) | List of folio print queues | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutFolioPrintQueuesRequest

`func NewPutFolioPrintQueuesRequest() *PutFolioPrintQueuesRequest`

NewPutFolioPrintQueuesRequest instantiates a new PutFolioPrintQueuesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutFolioPrintQueuesRequestWithDefaults

`func NewPutFolioPrintQueuesRequestWithDefaults() *PutFolioPrintQueuesRequest`

NewPutFolioPrintQueuesRequestWithDefaults instantiates a new PutFolioPrintQueuesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioPrintQueues

`func (o *PutFolioPrintQueuesRequest) GetFolioPrintQueues() []FolioPrintQueueType`

GetFolioPrintQueues returns the FolioPrintQueues field if non-nil, zero value otherwise.

### GetFolioPrintQueuesOk

`func (o *PutFolioPrintQueuesRequest) GetFolioPrintQueuesOk() (*[]FolioPrintQueueType, bool)`

GetFolioPrintQueuesOk returns a tuple with the FolioPrintQueues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioPrintQueues

`func (o *PutFolioPrintQueuesRequest) SetFolioPrintQueues(v []FolioPrintQueueType)`

SetFolioPrintQueues sets FolioPrintQueues field to given value.

### HasFolioPrintQueues

`func (o *PutFolioPrintQueuesRequest) HasFolioPrintQueues() bool`

HasFolioPrintQueues returns a boolean if a field has been set.

### GetLinks

`func (o *PutFolioPrintQueuesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutFolioPrintQueuesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutFolioPrintQueuesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutFolioPrintQueuesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutFolioPrintQueuesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutFolioPrintQueuesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutFolioPrintQueuesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutFolioPrintQueuesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


