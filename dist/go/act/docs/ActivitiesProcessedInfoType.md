# ActivitiesProcessedInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityIdRecord** | Pointer to [**ActivityIdRecord**](ActivityIdRecord.md) |  | [optional] 
**Reason** | Pointer to **string** | Reason for not processing the activity. | [optional] 
**ProcessingInfoType** | Pointer to **string** | Flag to indicate the warning messages from the API | [optional] 
**ProcessingInfoCode** | Pointer to **string** | Erorr/Warning code for not processing the activity. | [optional] 

## Methods

### NewActivitiesProcessedInfoType

`func NewActivitiesProcessedInfoType() *ActivitiesProcessedInfoType`

NewActivitiesProcessedInfoType instantiates a new ActivitiesProcessedInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivitiesProcessedInfoTypeWithDefaults

`func NewActivitiesProcessedInfoTypeWithDefaults() *ActivitiesProcessedInfoType`

NewActivitiesProcessedInfoTypeWithDefaults instantiates a new ActivitiesProcessedInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityIdRecord

`func (o *ActivitiesProcessedInfoType) GetActivityIdRecord() ActivityIdRecord`

GetActivityIdRecord returns the ActivityIdRecord field if non-nil, zero value otherwise.

### GetActivityIdRecordOk

`func (o *ActivitiesProcessedInfoType) GetActivityIdRecordOk() (*ActivityIdRecord, bool)`

GetActivityIdRecordOk returns a tuple with the ActivityIdRecord field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityIdRecord

`func (o *ActivitiesProcessedInfoType) SetActivityIdRecord(v ActivityIdRecord)`

SetActivityIdRecord sets ActivityIdRecord field to given value.

### HasActivityIdRecord

`func (o *ActivitiesProcessedInfoType) HasActivityIdRecord() bool`

HasActivityIdRecord returns a boolean if a field has been set.

### GetReason

`func (o *ActivitiesProcessedInfoType) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *ActivitiesProcessedInfoType) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *ActivitiesProcessedInfoType) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *ActivitiesProcessedInfoType) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetProcessingInfoType

`func (o *ActivitiesProcessedInfoType) GetProcessingInfoType() string`

GetProcessingInfoType returns the ProcessingInfoType field if non-nil, zero value otherwise.

### GetProcessingInfoTypeOk

`func (o *ActivitiesProcessedInfoType) GetProcessingInfoTypeOk() (*string, bool)`

GetProcessingInfoTypeOk returns a tuple with the ProcessingInfoType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingInfoType

`func (o *ActivitiesProcessedInfoType) SetProcessingInfoType(v string)`

SetProcessingInfoType sets ProcessingInfoType field to given value.

### HasProcessingInfoType

`func (o *ActivitiesProcessedInfoType) HasProcessingInfoType() bool`

HasProcessingInfoType returns a boolean if a field has been set.

### GetProcessingInfoCode

`func (o *ActivitiesProcessedInfoType) GetProcessingInfoCode() string`

GetProcessingInfoCode returns the ProcessingInfoCode field if non-nil, zero value otherwise.

### GetProcessingInfoCodeOk

`func (o *ActivitiesProcessedInfoType) GetProcessingInfoCodeOk() (*string, bool)`

GetProcessingInfoCodeOk returns a tuple with the ProcessingInfoCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingInfoCode

`func (o *ActivitiesProcessedInfoType) SetProcessingInfoCode(v string)`

SetProcessingInfoCode sets ProcessingInfoCode field to given value.

### HasProcessingInfoCode

`func (o *ActivitiesProcessedInfoType) HasProcessingInfoCode() bool`

HasProcessingInfoCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


