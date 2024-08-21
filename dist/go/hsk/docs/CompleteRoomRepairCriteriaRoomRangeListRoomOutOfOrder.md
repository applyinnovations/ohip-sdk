# CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**NewDateRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**ReasonCode** | Pointer to **string** | Reason Code why the room is OO/OS. | [optional] 
**ReasonDescription** | Pointer to **string** | Reason Description why the room is OO/OS. | [optional] 
**RepairRemarks** | Pointer to **string** | Notes or Remarks on the OO/OS room | [optional] 
**ReturnStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 

## Methods

### NewCompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder

`func NewCompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder() *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder`

NewCompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder instantiates a new CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrderWithDefaults

`func NewCompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrderWithDefaults() *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder`

NewCompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrderWithDefaults instantiates a new CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnd

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetNewDateRange

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) GetNewDateRange() DateRangeType`

GetNewDateRange returns the NewDateRange field if non-nil, zero value otherwise.

### GetNewDateRangeOk

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) GetNewDateRangeOk() (*DateRangeType, bool)`

GetNewDateRangeOk returns a tuple with the NewDateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewDateRange

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) SetNewDateRange(v DateRangeType)`

SetNewDateRange sets NewDateRange field to given value.

### HasNewDateRange

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) HasNewDateRange() bool`

HasNewDateRange returns a boolean if a field has been set.

### GetReasonCode

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) GetReasonCode() string`

GetReasonCode returns the ReasonCode field if non-nil, zero value otherwise.

### GetReasonCodeOk

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) GetReasonCodeOk() (*string, bool)`

GetReasonCodeOk returns a tuple with the ReasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasonCode

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) SetReasonCode(v string)`

SetReasonCode sets ReasonCode field to given value.

### HasReasonCode

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) HasReasonCode() bool`

HasReasonCode returns a boolean if a field has been set.

### GetReasonDescription

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) GetReasonDescription() string`

GetReasonDescription returns the ReasonDescription field if non-nil, zero value otherwise.

### GetReasonDescriptionOk

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) GetReasonDescriptionOk() (*string, bool)`

GetReasonDescriptionOk returns a tuple with the ReasonDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasonDescription

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) SetReasonDescription(v string)`

SetReasonDescription sets ReasonDescription field to given value.

### HasReasonDescription

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) HasReasonDescription() bool`

HasReasonDescription returns a boolean if a field has been set.

### GetRepairRemarks

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) GetRepairRemarks() string`

GetRepairRemarks returns the RepairRemarks field if non-nil, zero value otherwise.

### GetRepairRemarksOk

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) GetRepairRemarksOk() (*string, bool)`

GetRepairRemarksOk returns a tuple with the RepairRemarks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepairRemarks

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) SetRepairRemarks(v string)`

SetRepairRemarks sets RepairRemarks field to given value.

### HasRepairRemarks

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) HasRepairRemarks() bool`

HasRepairRemarks returns a boolean if a field has been set.

### GetReturnStatus

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) GetReturnStatus() HousekeepingRoomStatusType`

GetReturnStatus returns the ReturnStatus field if non-nil, zero value otherwise.

### GetReturnStatusOk

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) GetReturnStatusOk() (*HousekeepingRoomStatusType, bool)`

GetReturnStatusOk returns a tuple with the ReturnStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnStatus

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) SetReturnStatus(v HousekeepingRoomStatusType)`

SetReturnStatus sets ReturnStatus field to given value.

### HasReturnStatus

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) HasReturnStatus() bool`

HasReturnStatus returns a boolean if a field has been set.

### GetStart

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder) HasStart() bool`

HasStart returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


