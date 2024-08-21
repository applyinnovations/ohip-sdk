# ChangeBlockStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplyChangesToCateringSatus** | Pointer to **bool** | Indicates to apply block status code to catering status if existing values are same. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**CancelAllPMReservations** | Pointer to **bool** | Indicates whether to cancel all PM reservations when canceling a block, if any. | [optional] 
**CancellationDetails** | Pointer to [**CancellationDetailsType**](CancellationDetailsType.md) |  | [optional] 
**CurrentBlockStatus** | Pointer to **string** | Current booking status of the business block. | [optional] 
**HotelId** | Pointer to **string** | Opera Hotel code for the change block status operation. | [optional] 
**MasterSubBlockInfo** | Pointer to [**MasterBlockInfoType**](MasterBlockInfoType.md) |  | [optional] 
**NewBlockStatus** | Pointer to **string** | New booking status of the business block. | [optional] 
**OverbookAll** | Pointer to **bool** | Indicates whether to overbook when transitioning from a non-deduct to deduct inventory status. | [optional] 
**OverrideEventsProcessingWarnings** | Pointer to **bool** | Indicates whether to ignore any warning during applying the changes to the events associated with the current block. | [optional] 
**PMReservationsCancellationDetails** | Pointer to [**CancellationDetailsType**](CancellationDetailsType.md) |  | [optional] 
**ReservationType** | Pointer to **string** | Reservation type of the business block. | [optional] 

## Methods

### NewChangeBlockStatusType

`func NewChangeBlockStatusType() *ChangeBlockStatusType`

NewChangeBlockStatusType instantiates a new ChangeBlockStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeBlockStatusTypeWithDefaults

`func NewChangeBlockStatusTypeWithDefaults() *ChangeBlockStatusType`

NewChangeBlockStatusTypeWithDefaults instantiates a new ChangeBlockStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplyChangesToCateringSatus

`func (o *ChangeBlockStatusType) GetApplyChangesToCateringSatus() bool`

GetApplyChangesToCateringSatus returns the ApplyChangesToCateringSatus field if non-nil, zero value otherwise.

### GetApplyChangesToCateringSatusOk

`func (o *ChangeBlockStatusType) GetApplyChangesToCateringSatusOk() (*bool, bool)`

GetApplyChangesToCateringSatusOk returns a tuple with the ApplyChangesToCateringSatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyChangesToCateringSatus

`func (o *ChangeBlockStatusType) SetApplyChangesToCateringSatus(v bool)`

SetApplyChangesToCateringSatus sets ApplyChangesToCateringSatus field to given value.

### HasApplyChangesToCateringSatus

`func (o *ChangeBlockStatusType) HasApplyChangesToCateringSatus() bool`

HasApplyChangesToCateringSatus returns a boolean if a field has been set.

### GetBlockId

`func (o *ChangeBlockStatusType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *ChangeBlockStatusType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *ChangeBlockStatusType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *ChangeBlockStatusType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetCancelAllPMReservations

`func (o *ChangeBlockStatusType) GetCancelAllPMReservations() bool`

GetCancelAllPMReservations returns the CancelAllPMReservations field if non-nil, zero value otherwise.

### GetCancelAllPMReservationsOk

`func (o *ChangeBlockStatusType) GetCancelAllPMReservationsOk() (*bool, bool)`

GetCancelAllPMReservationsOk returns a tuple with the CancelAllPMReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelAllPMReservations

`func (o *ChangeBlockStatusType) SetCancelAllPMReservations(v bool)`

SetCancelAllPMReservations sets CancelAllPMReservations field to given value.

### HasCancelAllPMReservations

`func (o *ChangeBlockStatusType) HasCancelAllPMReservations() bool`

HasCancelAllPMReservations returns a boolean if a field has been set.

### GetCancellationDetails

`func (o *ChangeBlockStatusType) GetCancellationDetails() CancellationDetailsType`

GetCancellationDetails returns the CancellationDetails field if non-nil, zero value otherwise.

### GetCancellationDetailsOk

`func (o *ChangeBlockStatusType) GetCancellationDetailsOk() (*CancellationDetailsType, bool)`

GetCancellationDetailsOk returns a tuple with the CancellationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationDetails

`func (o *ChangeBlockStatusType) SetCancellationDetails(v CancellationDetailsType)`

SetCancellationDetails sets CancellationDetails field to given value.

### HasCancellationDetails

`func (o *ChangeBlockStatusType) HasCancellationDetails() bool`

HasCancellationDetails returns a boolean if a field has been set.

### GetCurrentBlockStatus

`func (o *ChangeBlockStatusType) GetCurrentBlockStatus() string`

GetCurrentBlockStatus returns the CurrentBlockStatus field if non-nil, zero value otherwise.

### GetCurrentBlockStatusOk

`func (o *ChangeBlockStatusType) GetCurrentBlockStatusOk() (*string, bool)`

GetCurrentBlockStatusOk returns a tuple with the CurrentBlockStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentBlockStatus

`func (o *ChangeBlockStatusType) SetCurrentBlockStatus(v string)`

SetCurrentBlockStatus sets CurrentBlockStatus field to given value.

### HasCurrentBlockStatus

`func (o *ChangeBlockStatusType) HasCurrentBlockStatus() bool`

HasCurrentBlockStatus returns a boolean if a field has been set.

### GetHotelId

`func (o *ChangeBlockStatusType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChangeBlockStatusType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChangeBlockStatusType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChangeBlockStatusType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMasterSubBlockInfo

`func (o *ChangeBlockStatusType) GetMasterSubBlockInfo() MasterBlockInfoType`

GetMasterSubBlockInfo returns the MasterSubBlockInfo field if non-nil, zero value otherwise.

### GetMasterSubBlockInfoOk

`func (o *ChangeBlockStatusType) GetMasterSubBlockInfoOk() (*MasterBlockInfoType, bool)`

GetMasterSubBlockInfoOk returns a tuple with the MasterSubBlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterSubBlockInfo

`func (o *ChangeBlockStatusType) SetMasterSubBlockInfo(v MasterBlockInfoType)`

SetMasterSubBlockInfo sets MasterSubBlockInfo field to given value.

### HasMasterSubBlockInfo

`func (o *ChangeBlockStatusType) HasMasterSubBlockInfo() bool`

HasMasterSubBlockInfo returns a boolean if a field has been set.

### GetNewBlockStatus

`func (o *ChangeBlockStatusType) GetNewBlockStatus() string`

GetNewBlockStatus returns the NewBlockStatus field if non-nil, zero value otherwise.

### GetNewBlockStatusOk

`func (o *ChangeBlockStatusType) GetNewBlockStatusOk() (*string, bool)`

GetNewBlockStatusOk returns a tuple with the NewBlockStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewBlockStatus

`func (o *ChangeBlockStatusType) SetNewBlockStatus(v string)`

SetNewBlockStatus sets NewBlockStatus field to given value.

### HasNewBlockStatus

`func (o *ChangeBlockStatusType) HasNewBlockStatus() bool`

HasNewBlockStatus returns a boolean if a field has been set.

### GetOverbookAll

`func (o *ChangeBlockStatusType) GetOverbookAll() bool`

GetOverbookAll returns the OverbookAll field if non-nil, zero value otherwise.

### GetOverbookAllOk

`func (o *ChangeBlockStatusType) GetOverbookAllOk() (*bool, bool)`

GetOverbookAllOk returns a tuple with the OverbookAll field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverbookAll

`func (o *ChangeBlockStatusType) SetOverbookAll(v bool)`

SetOverbookAll sets OverbookAll field to given value.

### HasOverbookAll

`func (o *ChangeBlockStatusType) HasOverbookAll() bool`

HasOverbookAll returns a boolean if a field has been set.

### GetOverrideEventsProcessingWarnings

`func (o *ChangeBlockStatusType) GetOverrideEventsProcessingWarnings() bool`

GetOverrideEventsProcessingWarnings returns the OverrideEventsProcessingWarnings field if non-nil, zero value otherwise.

### GetOverrideEventsProcessingWarningsOk

`func (o *ChangeBlockStatusType) GetOverrideEventsProcessingWarningsOk() (*bool, bool)`

GetOverrideEventsProcessingWarningsOk returns a tuple with the OverrideEventsProcessingWarnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideEventsProcessingWarnings

`func (o *ChangeBlockStatusType) SetOverrideEventsProcessingWarnings(v bool)`

SetOverrideEventsProcessingWarnings sets OverrideEventsProcessingWarnings field to given value.

### HasOverrideEventsProcessingWarnings

`func (o *ChangeBlockStatusType) HasOverrideEventsProcessingWarnings() bool`

HasOverrideEventsProcessingWarnings returns a boolean if a field has been set.

### GetPMReservationsCancellationDetails

`func (o *ChangeBlockStatusType) GetPMReservationsCancellationDetails() CancellationDetailsType`

GetPMReservationsCancellationDetails returns the PMReservationsCancellationDetails field if non-nil, zero value otherwise.

### GetPMReservationsCancellationDetailsOk

`func (o *ChangeBlockStatusType) GetPMReservationsCancellationDetailsOk() (*CancellationDetailsType, bool)`

GetPMReservationsCancellationDetailsOk returns a tuple with the PMReservationsCancellationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPMReservationsCancellationDetails

`func (o *ChangeBlockStatusType) SetPMReservationsCancellationDetails(v CancellationDetailsType)`

SetPMReservationsCancellationDetails sets PMReservationsCancellationDetails field to given value.

### HasPMReservationsCancellationDetails

`func (o *ChangeBlockStatusType) HasPMReservationsCancellationDetails() bool`

HasPMReservationsCancellationDetails returns a boolean if a field has been set.

### GetReservationType

`func (o *ChangeBlockStatusType) GetReservationType() string`

GetReservationType returns the ReservationType field if non-nil, zero value otherwise.

### GetReservationTypeOk

`func (o *ChangeBlockStatusType) GetReservationTypeOk() (*string, bool)`

GetReservationTypeOk returns a tuple with the ReservationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationType

`func (o *ChangeBlockStatusType) SetReservationType(v string)`

SetReservationType sets ReservationType field to given value.

### HasReservationType

`func (o *ChangeBlockStatusType) HasReservationType() bool`

HasReservationType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


