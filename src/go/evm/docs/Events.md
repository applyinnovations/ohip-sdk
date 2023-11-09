# Events

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockInfo** | Pointer to [**BlocksType**](BlocksType.md) |  | [optional] 
**EventSummaries** | Pointer to [**EventSummariesInfoType**](EventSummariesInfoType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MasterInfoList** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) | Refer to Generic common types document | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewEvents

`func NewEvents() *Events`

NewEvents instantiates a new Events object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventsWithDefaults

`func NewEventsWithDefaults() *Events`

NewEventsWithDefaults instantiates a new Events object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockInfo

`func (o *Events) GetBlockInfo() BlocksType`

GetBlockInfo returns the BlockInfo field if non-nil, zero value otherwise.

### GetBlockInfoOk

`func (o *Events) GetBlockInfoOk() (*BlocksType, bool)`

GetBlockInfoOk returns a tuple with the BlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockInfo

`func (o *Events) SetBlockInfo(v BlocksType)`

SetBlockInfo sets BlockInfo field to given value.

### HasBlockInfo

`func (o *Events) HasBlockInfo() bool`

HasBlockInfo returns a boolean if a field has been set.

### GetEventSummaries

`func (o *Events) GetEventSummaries() EventSummariesInfoType`

GetEventSummaries returns the EventSummaries field if non-nil, zero value otherwise.

### GetEventSummariesOk

`func (o *Events) GetEventSummariesOk() (*EventSummariesInfoType, bool)`

GetEventSummariesOk returns a tuple with the EventSummaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventSummaries

`func (o *Events) SetEventSummaries(v EventSummariesInfoType)`

SetEventSummaries sets EventSummaries field to given value.

### HasEventSummaries

`func (o *Events) HasEventSummaries() bool`

HasEventSummaries returns a boolean if a field has been set.

### GetLinks

`func (o *Events) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Events) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Events) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Events) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMasterInfoList

`func (o *Events) GetMasterInfoList() []MasterInfoType`

GetMasterInfoList returns the MasterInfoList field if non-nil, zero value otherwise.

### GetMasterInfoListOk

`func (o *Events) GetMasterInfoListOk() (*[]MasterInfoType, bool)`

GetMasterInfoListOk returns a tuple with the MasterInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfoList

`func (o *Events) SetMasterInfoList(v []MasterInfoType)`

SetMasterInfoList sets MasterInfoList field to given value.

### HasMasterInfoList

`func (o *Events) HasMasterInfoList() bool`

HasMasterInfoList returns a boolean if a field has been set.

### GetWarnings

`func (o *Events) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Events) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Events) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Events) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


