# RoomOutOfOrderType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**NewDateRange** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**ReasonCode** | Pointer to **string** | Reason Code why the room is OO/OS. | [optional] 
**ReasonDesc** | Pointer to **string** | Reason Description why the room is OO/OS. | [optional] 
**RepairRemarks** | Pointer to **string** | Notes or Remarks on the OO/OS room | [optional] 
**ReturnStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**RoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 

## Methods

### NewRoomOutOfOrderType

`func NewRoomOutOfOrderType() *RoomOutOfOrderType`

NewRoomOutOfOrderType instantiates a new RoomOutOfOrderType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomOutOfOrderTypeWithDefaults

`func NewRoomOutOfOrderTypeWithDefaults() *RoomOutOfOrderType`

NewRoomOutOfOrderTypeWithDefaults instantiates a new RoomOutOfOrderType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnd

`func (o *RoomOutOfOrderType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *RoomOutOfOrderType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *RoomOutOfOrderType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *RoomOutOfOrderType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetNewDateRange

`func (o *RoomOutOfOrderType) GetNewDateRange() DateRangeType`

GetNewDateRange returns the NewDateRange field if non-nil, zero value otherwise.

### GetNewDateRangeOk

`func (o *RoomOutOfOrderType) GetNewDateRangeOk() (*DateRangeType, bool)`

GetNewDateRangeOk returns a tuple with the NewDateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewDateRange

`func (o *RoomOutOfOrderType) SetNewDateRange(v DateRangeType)`

SetNewDateRange sets NewDateRange field to given value.

### HasNewDateRange

`func (o *RoomOutOfOrderType) HasNewDateRange() bool`

HasNewDateRange returns a boolean if a field has been set.

### GetReasonCode

`func (o *RoomOutOfOrderType) GetReasonCode() string`

GetReasonCode returns the ReasonCode field if non-nil, zero value otherwise.

### GetReasonCodeOk

`func (o *RoomOutOfOrderType) GetReasonCodeOk() (*string, bool)`

GetReasonCodeOk returns a tuple with the ReasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasonCode

`func (o *RoomOutOfOrderType) SetReasonCode(v string)`

SetReasonCode sets ReasonCode field to given value.

### HasReasonCode

`func (o *RoomOutOfOrderType) HasReasonCode() bool`

HasReasonCode returns a boolean if a field has been set.

### GetReasonDesc

`func (o *RoomOutOfOrderType) GetReasonDesc() string`

GetReasonDesc returns the ReasonDesc field if non-nil, zero value otherwise.

### GetReasonDescOk

`func (o *RoomOutOfOrderType) GetReasonDescOk() (*string, bool)`

GetReasonDescOk returns a tuple with the ReasonDesc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasonDesc

`func (o *RoomOutOfOrderType) SetReasonDesc(v string)`

SetReasonDesc sets ReasonDesc field to given value.

### HasReasonDesc

`func (o *RoomOutOfOrderType) HasReasonDesc() bool`

HasReasonDesc returns a boolean if a field has been set.

### GetRepairRemarks

`func (o *RoomOutOfOrderType) GetRepairRemarks() string`

GetRepairRemarks returns the RepairRemarks field if non-nil, zero value otherwise.

### GetRepairRemarksOk

`func (o *RoomOutOfOrderType) GetRepairRemarksOk() (*string, bool)`

GetRepairRemarksOk returns a tuple with the RepairRemarks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepairRemarks

`func (o *RoomOutOfOrderType) SetRepairRemarks(v string)`

SetRepairRemarks sets RepairRemarks field to given value.

### HasRepairRemarks

`func (o *RoomOutOfOrderType) HasRepairRemarks() bool`

HasRepairRemarks returns a boolean if a field has been set.

### GetReturnStatus

`func (o *RoomOutOfOrderType) GetReturnStatus() HousekeepingRoomStatusType`

GetReturnStatus returns the ReturnStatus field if non-nil, zero value otherwise.

### GetReturnStatusOk

`func (o *RoomOutOfOrderType) GetReturnStatusOk() (*HousekeepingRoomStatusType, bool)`

GetReturnStatusOk returns a tuple with the ReturnStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnStatus

`func (o *RoomOutOfOrderType) SetReturnStatus(v HousekeepingRoomStatusType)`

SetReturnStatus sets ReturnStatus field to given value.

### HasReturnStatus

`func (o *RoomOutOfOrderType) HasReturnStatus() bool`

HasReturnStatus returns a boolean if a field has been set.

### GetRoomStatus

`func (o *RoomOutOfOrderType) GetRoomStatus() HousekeepingRoomStatusType`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *RoomOutOfOrderType) GetRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *RoomOutOfOrderType) SetRoomStatus(v HousekeepingRoomStatusType)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *RoomOutOfOrderType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetStart

`func (o *RoomOutOfOrderType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *RoomOutOfOrderType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *RoomOutOfOrderType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *RoomOutOfOrderType) HasStart() bool`

HasStart returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


