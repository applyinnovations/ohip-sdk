# ChangedBlockStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AnyActivePMReservations** | Pointer to **bool** | Indicates whether block has any active PM reservations. | [optional] 
**Block** | Pointer to [**BlockType**](BlockType.md) |  | [optional] 
**BlockNextStatusList** | Pointer to [**[]BookingStatusDetailType**](BookingStatusDetailType.md) | Next booking status of the business block. | [optional] 
**BlockStatusChangeHistory** | Pointer to [**[]BookingStatusHistoryType**](BookingStatusHistoryType.md) | Collection of block status history. | [optional] 
**CancellationDetails** | Pointer to [**CancellationDetailsType**](CancellationDetailsType.md) |  | [optional] 
**CateringEventsProcessedInfo** | Pointer to [**[]CateringEventsProcessedInfoType**](CateringEventsProcessedInfoType.md) | Status/Info of the processed events. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ProcessId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangedBlockStatus

`func NewChangedBlockStatus() *ChangedBlockStatus`

NewChangedBlockStatus instantiates a new ChangedBlockStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangedBlockStatusWithDefaults

`func NewChangedBlockStatusWithDefaults() *ChangedBlockStatus`

NewChangedBlockStatusWithDefaults instantiates a new ChangedBlockStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAnyActivePMReservations

`func (o *ChangedBlockStatus) GetAnyActivePMReservations() bool`

GetAnyActivePMReservations returns the AnyActivePMReservations field if non-nil, zero value otherwise.

### GetAnyActivePMReservationsOk

`func (o *ChangedBlockStatus) GetAnyActivePMReservationsOk() (*bool, bool)`

GetAnyActivePMReservationsOk returns a tuple with the AnyActivePMReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnyActivePMReservations

`func (o *ChangedBlockStatus) SetAnyActivePMReservations(v bool)`

SetAnyActivePMReservations sets AnyActivePMReservations field to given value.

### HasAnyActivePMReservations

`func (o *ChangedBlockStatus) HasAnyActivePMReservations() bool`

HasAnyActivePMReservations returns a boolean if a field has been set.

### GetBlock

`func (o *ChangedBlockStatus) GetBlock() BlockType`

GetBlock returns the Block field if non-nil, zero value otherwise.

### GetBlockOk

`func (o *ChangedBlockStatus) GetBlockOk() (*BlockType, bool)`

GetBlockOk returns a tuple with the Block field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlock

`func (o *ChangedBlockStatus) SetBlock(v BlockType)`

SetBlock sets Block field to given value.

### HasBlock

`func (o *ChangedBlockStatus) HasBlock() bool`

HasBlock returns a boolean if a field has been set.

### GetBlockNextStatusList

`func (o *ChangedBlockStatus) GetBlockNextStatusList() []BookingStatusDetailType`

GetBlockNextStatusList returns the BlockNextStatusList field if non-nil, zero value otherwise.

### GetBlockNextStatusListOk

`func (o *ChangedBlockStatus) GetBlockNextStatusListOk() (*[]BookingStatusDetailType, bool)`

GetBlockNextStatusListOk returns a tuple with the BlockNextStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockNextStatusList

`func (o *ChangedBlockStatus) SetBlockNextStatusList(v []BookingStatusDetailType)`

SetBlockNextStatusList sets BlockNextStatusList field to given value.

### HasBlockNextStatusList

`func (o *ChangedBlockStatus) HasBlockNextStatusList() bool`

HasBlockNextStatusList returns a boolean if a field has been set.

### GetBlockStatusChangeHistory

`func (o *ChangedBlockStatus) GetBlockStatusChangeHistory() []BookingStatusHistoryType`

GetBlockStatusChangeHistory returns the BlockStatusChangeHistory field if non-nil, zero value otherwise.

### GetBlockStatusChangeHistoryOk

`func (o *ChangedBlockStatus) GetBlockStatusChangeHistoryOk() (*[]BookingStatusHistoryType, bool)`

GetBlockStatusChangeHistoryOk returns a tuple with the BlockStatusChangeHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatusChangeHistory

`func (o *ChangedBlockStatus) SetBlockStatusChangeHistory(v []BookingStatusHistoryType)`

SetBlockStatusChangeHistory sets BlockStatusChangeHistory field to given value.

### HasBlockStatusChangeHistory

`func (o *ChangedBlockStatus) HasBlockStatusChangeHistory() bool`

HasBlockStatusChangeHistory returns a boolean if a field has been set.

### GetCancellationDetails

`func (o *ChangedBlockStatus) GetCancellationDetails() CancellationDetailsType`

GetCancellationDetails returns the CancellationDetails field if non-nil, zero value otherwise.

### GetCancellationDetailsOk

`func (o *ChangedBlockStatus) GetCancellationDetailsOk() (*CancellationDetailsType, bool)`

GetCancellationDetailsOk returns a tuple with the CancellationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationDetails

`func (o *ChangedBlockStatus) SetCancellationDetails(v CancellationDetailsType)`

SetCancellationDetails sets CancellationDetails field to given value.

### HasCancellationDetails

`func (o *ChangedBlockStatus) HasCancellationDetails() bool`

HasCancellationDetails returns a boolean if a field has been set.

### GetCateringEventsProcessedInfo

`func (o *ChangedBlockStatus) GetCateringEventsProcessedInfo() []CateringEventsProcessedInfoType`

GetCateringEventsProcessedInfo returns the CateringEventsProcessedInfo field if non-nil, zero value otherwise.

### GetCateringEventsProcessedInfoOk

`func (o *ChangedBlockStatus) GetCateringEventsProcessedInfoOk() (*[]CateringEventsProcessedInfoType, bool)`

GetCateringEventsProcessedInfoOk returns a tuple with the CateringEventsProcessedInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringEventsProcessedInfo

`func (o *ChangedBlockStatus) SetCateringEventsProcessedInfo(v []CateringEventsProcessedInfoType)`

SetCateringEventsProcessedInfo sets CateringEventsProcessedInfo field to given value.

### HasCateringEventsProcessedInfo

`func (o *ChangedBlockStatus) HasCateringEventsProcessedInfo() bool`

HasCateringEventsProcessedInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ChangedBlockStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangedBlockStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangedBlockStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangedBlockStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProcessId

`func (o *ChangedBlockStatus) GetProcessId() UniqueIDType`

GetProcessId returns the ProcessId field if non-nil, zero value otherwise.

### GetProcessIdOk

`func (o *ChangedBlockStatus) GetProcessIdOk() (*UniqueIDType, bool)`

GetProcessIdOk returns a tuple with the ProcessId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessId

`func (o *ChangedBlockStatus) SetProcessId(v UniqueIDType)`

SetProcessId sets ProcessId field to given value.

### HasProcessId

`func (o *ChangedBlockStatus) HasProcessId() bool`

HasProcessId returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangedBlockStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangedBlockStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangedBlockStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangedBlockStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


