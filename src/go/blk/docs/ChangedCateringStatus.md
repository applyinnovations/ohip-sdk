# ChangedCateringStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Block** | Pointer to [**BlockType**](BlockType.md) |  | [optional] 
**CancellationDetails** | Pointer to [**CancellationDetailsType**](CancellationDetailsType.md) |  | [optional] 
**CateringEventsProcessedInfo** | Pointer to [**CateringEventsProcessedInfoList**](CateringEventsProcessedInfoList.md) |  | [optional] 
**CateringNextStatusList** | Pointer to [**CateringNextStatusListType**](CateringNextStatusListType.md) |  | [optional] 
**CateringStatusChangeHistory** | Pointer to [**CateringStatusChangeHistoryType**](CateringStatusChangeHistoryType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangedCateringStatus

`func NewChangedCateringStatus() *ChangedCateringStatus`

NewChangedCateringStatus instantiates a new ChangedCateringStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangedCateringStatusWithDefaults

`func NewChangedCateringStatusWithDefaults() *ChangedCateringStatus`

NewChangedCateringStatusWithDefaults instantiates a new ChangedCateringStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlock

`func (o *ChangedCateringStatus) GetBlock() BlockType`

GetBlock returns the Block field if non-nil, zero value otherwise.

### GetBlockOk

`func (o *ChangedCateringStatus) GetBlockOk() (*BlockType, bool)`

GetBlockOk returns a tuple with the Block field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlock

`func (o *ChangedCateringStatus) SetBlock(v BlockType)`

SetBlock sets Block field to given value.

### HasBlock

`func (o *ChangedCateringStatus) HasBlock() bool`

HasBlock returns a boolean if a field has been set.

### GetCancellationDetails

`func (o *ChangedCateringStatus) GetCancellationDetails() CancellationDetailsType`

GetCancellationDetails returns the CancellationDetails field if non-nil, zero value otherwise.

### GetCancellationDetailsOk

`func (o *ChangedCateringStatus) GetCancellationDetailsOk() (*CancellationDetailsType, bool)`

GetCancellationDetailsOk returns a tuple with the CancellationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationDetails

`func (o *ChangedCateringStatus) SetCancellationDetails(v CancellationDetailsType)`

SetCancellationDetails sets CancellationDetails field to given value.

### HasCancellationDetails

`func (o *ChangedCateringStatus) HasCancellationDetails() bool`

HasCancellationDetails returns a boolean if a field has been set.

### GetCateringEventsProcessedInfo

`func (o *ChangedCateringStatus) GetCateringEventsProcessedInfo() CateringEventsProcessedInfoList`

GetCateringEventsProcessedInfo returns the CateringEventsProcessedInfo field if non-nil, zero value otherwise.

### GetCateringEventsProcessedInfoOk

`func (o *ChangedCateringStatus) GetCateringEventsProcessedInfoOk() (*CateringEventsProcessedInfoList, bool)`

GetCateringEventsProcessedInfoOk returns a tuple with the CateringEventsProcessedInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringEventsProcessedInfo

`func (o *ChangedCateringStatus) SetCateringEventsProcessedInfo(v CateringEventsProcessedInfoList)`

SetCateringEventsProcessedInfo sets CateringEventsProcessedInfo field to given value.

### HasCateringEventsProcessedInfo

`func (o *ChangedCateringStatus) HasCateringEventsProcessedInfo() bool`

HasCateringEventsProcessedInfo returns a boolean if a field has been set.

### GetCateringNextStatusList

`func (o *ChangedCateringStatus) GetCateringNextStatusList() CateringNextStatusListType`

GetCateringNextStatusList returns the CateringNextStatusList field if non-nil, zero value otherwise.

### GetCateringNextStatusListOk

`func (o *ChangedCateringStatus) GetCateringNextStatusListOk() (*CateringNextStatusListType, bool)`

GetCateringNextStatusListOk returns a tuple with the CateringNextStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringNextStatusList

`func (o *ChangedCateringStatus) SetCateringNextStatusList(v CateringNextStatusListType)`

SetCateringNextStatusList sets CateringNextStatusList field to given value.

### HasCateringNextStatusList

`func (o *ChangedCateringStatus) HasCateringNextStatusList() bool`

HasCateringNextStatusList returns a boolean if a field has been set.

### GetCateringStatusChangeHistory

`func (o *ChangedCateringStatus) GetCateringStatusChangeHistory() CateringStatusChangeHistoryType`

GetCateringStatusChangeHistory returns the CateringStatusChangeHistory field if non-nil, zero value otherwise.

### GetCateringStatusChangeHistoryOk

`func (o *ChangedCateringStatus) GetCateringStatusChangeHistoryOk() (*CateringStatusChangeHistoryType, bool)`

GetCateringStatusChangeHistoryOk returns a tuple with the CateringStatusChangeHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringStatusChangeHistory

`func (o *ChangedCateringStatus) SetCateringStatusChangeHistory(v CateringStatusChangeHistoryType)`

SetCateringStatusChangeHistory sets CateringStatusChangeHistory field to given value.

### HasCateringStatusChangeHistory

`func (o *ChangedCateringStatus) HasCateringStatusChangeHistory() bool`

HasCateringStatusChangeHistory returns a boolean if a field has been set.

### GetLinks

`func (o *ChangedCateringStatus) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangedCateringStatus) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangedCateringStatus) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangedCateringStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangedCateringStatus) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangedCateringStatus) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangedCateringStatus) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangedCateringStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


