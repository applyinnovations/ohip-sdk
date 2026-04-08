# ActivitiesBulkUpdateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityIdList** | Pointer to [**[]ActivityIdRecord**](ActivityIdRecord.md) | Selected activities Unique identifier. | [optional] 
**SkipProcessing** | Pointer to **bool** | Boolean flag if True will skip processing activities | [optional] 
**ActivityRec** | Pointer to [**ActivityChanges**](ActivityChanges.md) |  | [optional] 

## Methods

### NewActivitiesBulkUpdateType

`func NewActivitiesBulkUpdateType() *ActivitiesBulkUpdateType`

NewActivitiesBulkUpdateType instantiates a new ActivitiesBulkUpdateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivitiesBulkUpdateTypeWithDefaults

`func NewActivitiesBulkUpdateTypeWithDefaults() *ActivitiesBulkUpdateType`

NewActivitiesBulkUpdateTypeWithDefaults instantiates a new ActivitiesBulkUpdateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityIdList

`func (o *ActivitiesBulkUpdateType) GetActivityIdList() []ActivityIdRecord`

GetActivityIdList returns the ActivityIdList field if non-nil, zero value otherwise.

### GetActivityIdListOk

`func (o *ActivitiesBulkUpdateType) GetActivityIdListOk() (*[]ActivityIdRecord, bool)`

GetActivityIdListOk returns a tuple with the ActivityIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityIdList

`func (o *ActivitiesBulkUpdateType) SetActivityIdList(v []ActivityIdRecord)`

SetActivityIdList sets ActivityIdList field to given value.

### HasActivityIdList

`func (o *ActivitiesBulkUpdateType) HasActivityIdList() bool`

HasActivityIdList returns a boolean if a field has been set.

### GetSkipProcessing

`func (o *ActivitiesBulkUpdateType) GetSkipProcessing() bool`

GetSkipProcessing returns the SkipProcessing field if non-nil, zero value otherwise.

### GetSkipProcessingOk

`func (o *ActivitiesBulkUpdateType) GetSkipProcessingOk() (*bool, bool)`

GetSkipProcessingOk returns a tuple with the SkipProcessing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipProcessing

`func (o *ActivitiesBulkUpdateType) SetSkipProcessing(v bool)`

SetSkipProcessing sets SkipProcessing field to given value.

### HasSkipProcessing

`func (o *ActivitiesBulkUpdateType) HasSkipProcessing() bool`

HasSkipProcessing returns a boolean if a field has been set.

### GetActivityRec

`func (o *ActivitiesBulkUpdateType) GetActivityRec() ActivityChanges`

GetActivityRec returns the ActivityRec field if non-nil, zero value otherwise.

### GetActivityRecOk

`func (o *ActivitiesBulkUpdateType) GetActivityRecOk() (*ActivityChanges, bool)`

GetActivityRecOk returns a tuple with the ActivityRec field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityRec

`func (o *ActivitiesBulkUpdateType) SetActivityRec(v ActivityChanges)`

SetActivityRec sets ActivityRec field to given value.

### HasActivityRec

`func (o *ActivitiesBulkUpdateType) HasActivityRec() bool`

HasActivityRec returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


