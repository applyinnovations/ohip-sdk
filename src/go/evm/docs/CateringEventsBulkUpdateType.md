# CateringEventsBulkUpdateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventIdList** | Pointer to [**EventIdList**](EventIdList.md) |  | [optional] 
**EventRec** | Pointer to [**CateringEventBulkUpdateDetailType**](CateringEventBulkUpdateDetailType.md) |  | [optional] 
**FunctionSpaceRec** | Pointer to [**CateringEventBulkUpdateFunctionSpaceType**](CateringEventBulkUpdateFunctionSpaceType.md) |  | [optional] 
**OverrideProcessWarnings** | Pointer to **bool** | Indicates whether to override warnings for editing multiple events. By default, it is always considered as false and will provide post-change warnings. | [optional] 

## Methods

### NewCateringEventsBulkUpdateType

`func NewCateringEventsBulkUpdateType() *CateringEventsBulkUpdateType`

NewCateringEventsBulkUpdateType instantiates a new CateringEventsBulkUpdateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringEventsBulkUpdateTypeWithDefaults

`func NewCateringEventsBulkUpdateTypeWithDefaults() *CateringEventsBulkUpdateType`

NewCateringEventsBulkUpdateTypeWithDefaults instantiates a new CateringEventsBulkUpdateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventIdList

`func (o *CateringEventsBulkUpdateType) GetEventIdList() EventIdList`

GetEventIdList returns the EventIdList field if non-nil, zero value otherwise.

### GetEventIdListOk

`func (o *CateringEventsBulkUpdateType) GetEventIdListOk() (*EventIdList, bool)`

GetEventIdListOk returns a tuple with the EventIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventIdList

`func (o *CateringEventsBulkUpdateType) SetEventIdList(v EventIdList)`

SetEventIdList sets EventIdList field to given value.

### HasEventIdList

`func (o *CateringEventsBulkUpdateType) HasEventIdList() bool`

HasEventIdList returns a boolean if a field has been set.

### GetEventRec

`func (o *CateringEventsBulkUpdateType) GetEventRec() CateringEventBulkUpdateDetailType`

GetEventRec returns the EventRec field if non-nil, zero value otherwise.

### GetEventRecOk

`func (o *CateringEventsBulkUpdateType) GetEventRecOk() (*CateringEventBulkUpdateDetailType, bool)`

GetEventRecOk returns a tuple with the EventRec field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventRec

`func (o *CateringEventsBulkUpdateType) SetEventRec(v CateringEventBulkUpdateDetailType)`

SetEventRec sets EventRec field to given value.

### HasEventRec

`func (o *CateringEventsBulkUpdateType) HasEventRec() bool`

HasEventRec returns a boolean if a field has been set.

### GetFunctionSpaceRec

`func (o *CateringEventsBulkUpdateType) GetFunctionSpaceRec() CateringEventBulkUpdateFunctionSpaceType`

GetFunctionSpaceRec returns the FunctionSpaceRec field if non-nil, zero value otherwise.

### GetFunctionSpaceRecOk

`func (o *CateringEventsBulkUpdateType) GetFunctionSpaceRecOk() (*CateringEventBulkUpdateFunctionSpaceType, bool)`

GetFunctionSpaceRecOk returns a tuple with the FunctionSpaceRec field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpaceRec

`func (o *CateringEventsBulkUpdateType) SetFunctionSpaceRec(v CateringEventBulkUpdateFunctionSpaceType)`

SetFunctionSpaceRec sets FunctionSpaceRec field to given value.

### HasFunctionSpaceRec

`func (o *CateringEventsBulkUpdateType) HasFunctionSpaceRec() bool`

HasFunctionSpaceRec returns a boolean if a field has been set.

### GetOverrideProcessWarnings

`func (o *CateringEventsBulkUpdateType) GetOverrideProcessWarnings() bool`

GetOverrideProcessWarnings returns the OverrideProcessWarnings field if non-nil, zero value otherwise.

### GetOverrideProcessWarningsOk

`func (o *CateringEventsBulkUpdateType) GetOverrideProcessWarningsOk() (*bool, bool)`

GetOverrideProcessWarningsOk returns a tuple with the OverrideProcessWarnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideProcessWarnings

`func (o *CateringEventsBulkUpdateType) SetOverrideProcessWarnings(v bool)`

SetOverrideProcessWarnings sets OverrideProcessWarnings field to given value.

### HasOverrideProcessWarnings

`func (o *CateringEventsBulkUpdateType) HasOverrideProcessWarnings() bool`

HasOverrideProcessWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


