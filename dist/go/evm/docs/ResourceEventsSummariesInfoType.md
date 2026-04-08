# ResourceEventsSummariesInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ResourceEventSummary** | Pointer to [**[]ResourceEventSummaryInfoType**](ResourceEventSummaryInfoType.md) | Contains resource events summary information | [optional] 
**BlockId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewResourceEventsSummariesInfoType

`func NewResourceEventsSummariesInfoType() *ResourceEventsSummariesInfoType`

NewResourceEventsSummariesInfoType instantiates a new ResourceEventsSummariesInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResourceEventsSummariesInfoTypeWithDefaults

`func NewResourceEventsSummariesInfoTypeWithDefaults() *ResourceEventsSummariesInfoType`

NewResourceEventsSummariesInfoTypeWithDefaults instantiates a new ResourceEventsSummariesInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResourceEventSummary

`func (o *ResourceEventsSummariesInfoType) GetResourceEventSummary() []ResourceEventSummaryInfoType`

GetResourceEventSummary returns the ResourceEventSummary field if non-nil, zero value otherwise.

### GetResourceEventSummaryOk

`func (o *ResourceEventsSummariesInfoType) GetResourceEventSummaryOk() (*[]ResourceEventSummaryInfoType, bool)`

GetResourceEventSummaryOk returns a tuple with the ResourceEventSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceEventSummary

`func (o *ResourceEventsSummariesInfoType) SetResourceEventSummary(v []ResourceEventSummaryInfoType)`

SetResourceEventSummary sets ResourceEventSummary field to given value.

### HasResourceEventSummary

`func (o *ResourceEventsSummariesInfoType) HasResourceEventSummary() bool`

HasResourceEventSummary returns a boolean if a field has been set.

### GetBlockId

`func (o *ResourceEventsSummariesInfoType) GetBlockId() UniqueIDType`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *ResourceEventsSummariesInfoType) GetBlockIdOk() (*UniqueIDType, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *ResourceEventsSummariesInfoType) SetBlockId(v UniqueIDType)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *ResourceEventsSummariesInfoType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


